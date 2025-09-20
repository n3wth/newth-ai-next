/**
 * Semantic Search Implementation
 *
 * This module provides vector-based semantic search capabilities for the portfolio.
 * It creates embeddings for content and enables similarity-based search.
 */

import { SearchResult } from '@/hooks/useSearch'

// Mock embedding function - in production, this would call an AI service
// For now, we'll use a simple TF-IDF style scoring with semantic keywords
function createEmbedding(text: string): number[] {
  // Normalize text
  const normalized = text.toLowerCase()

  // Semantic keyword categories with weights
  const semanticCategories = {
    ai: [
      'ai',
      'artificial intelligence',
      'machine learning',
      'ml',
      'neural',
      'model',
      'llm',
      'gpt',
      'chatbot',
      'automation',
    ],
    product: [
      'product',
      'strategy',
      'management',
      'planning',
      'roadmap',
      'feature',
      'user',
      'customer',
      'market',
    ],
    development: [
      'development',
      'engineering',
      'code',
      'programming',
      'software',
      'framework',
      'architecture',
      'api',
    ],
    design: [
      'design',
      'ux',
      'ui',
      'interface',
      'visual',
      'component',
      'system',
      'branding',
      'typography',
    ],
    technical: [
      'technical',
      'algorithm',
      'data',
      'performance',
      'optimization',
      'security',
      'database',
      'cloud',
    ],
    business: [
      'business',
      'revenue',
      'growth',
      'scale',
      'metrics',
      'kpi',
      'analytics',
      'conversion',
      'roi',
    ],
    leadership: [
      'leadership',
      'team',
      'management',
      'collaboration',
      'communication',
      'process',
      'agile',
    ],
    innovation: [
      'innovation',
      'creative',
      'experiment',
      'research',
      'prototype',
      'cutting-edge',
      'breakthrough',
    ],
  }

  // Create embedding vector based on semantic category presence
  const embedding: number[] = []

  Object.entries(semanticCategories).forEach(([_category, keywords]) => {
    let score = 0
    keywords.forEach((keyword) => {
      if (normalized.includes(keyword)) {
        // Weight by keyword length (longer keywords are more specific)
        score += keyword.length / 10
      }
    })
    // Normalize score
    embedding.push(Math.min(score, 1))
  })

  // Add text length and word count features
  embedding.push(Math.min(text.length / 1000, 1)) // Text length normalized
  embedding.push(Math.min(text.split(' ').length / 100, 1)) // Word count normalized

  return embedding
}

// Cosine similarity calculation
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0

  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }

  const magnitude = Math.sqrt(normA) * Math.sqrt(normB)
  return magnitude === 0 ? 0 : dotProduct / magnitude
}

// Enhanced semantic search interface
export interface SemanticSearchOptions {
  threshold?: number // Minimum similarity score (0-1)
  maxResults?: number
  boostRecency?: boolean // Boost recent content
  categoryWeights?: Record<string, number> // Weight specific categories
}

export interface EnhancedSearchResult extends SearchResult {
  semanticScore?: number
  keywordScore?: number
  combinedScore?: number
  matchReasons?: string[] // Why this result matched
}

// Cache for embeddings
const embeddingCache = new Map<string, number[]>()

export class SemanticSearch {
  private contentEmbeddings: Map<string, number[]> = new Map()

  // Index content for semantic search
  indexContent(results: SearchResult[]): void {
    results.forEach((result) => {
      const contentText = [
        result.title,
        result.description,
        ...(result.tags || []),
        result.category || '',
      ].join(' ')

      const cacheKey = `${result.id}_${contentText.length}`

      let embedding = embeddingCache.get(cacheKey)
      if (!embedding) {
        embedding = createEmbedding(contentText)
        embeddingCache.set(cacheKey, embedding)
      }

      this.contentEmbeddings.set(result.id, embedding)
    })
  }

  // Perform semantic search
  search(
    query: string,
    allResults: SearchResult[],
    options: SemanticSearchOptions = {}
  ): EnhancedSearchResult[] {
    const { threshold = 0.1, maxResults = 10, boostRecency = true, categoryWeights = {} } = options

    // Create query embedding
    const queryEmbedding = createEmbedding(query)

    // Score all results
    const scoredResults: EnhancedSearchResult[] = allResults.map((result) => {
      const contentEmbedding = this.contentEmbeddings.get(result.id)
      if (!contentEmbedding) return { ...result, semanticScore: 0, combinedScore: 0 }

      // Semantic similarity
      const semanticScore = cosineSimilarity(queryEmbedding, contentEmbedding)

      // Traditional keyword score
      const keywordScore = this.calculateKeywordScore(query, result)

      // Category boost
      const categoryBoost = categoryWeights[result.category || ''] || 1

      // Recency boost (favor recent content)
      let recencyBoost = 1
      if (boostRecency && result.type === 'project') {
        // Assuming we have date info, boost recent projects
        recencyBoost = 1.1 // Small boost for projects
      }

      // Combined score
      const combinedScore =
        (semanticScore * 0.6 + keywordScore * 0.4) * categoryBoost * recencyBoost

      // Generate match reasons
      const matchReasons = this.generateMatchReasons(query, result, semanticScore, keywordScore)

      return {
        ...result,
        semanticScore,
        keywordScore,
        combinedScore,
        matchReasons,
      }
    })

    // Filter and sort by combined score
    return scoredResults
      .filter((result) => (result.combinedScore || 0) >= threshold)
      .sort((a, b) => (b.combinedScore || 0) - (a.combinedScore || 0))
      .slice(0, maxResults)
  }

  // Traditional keyword scoring (enhanced)
  private calculateKeywordScore(query: string, result: SearchResult): number {
    const queryTerms = query
      .toLowerCase()
      .split(' ')
      .filter((term) => term.length > 1)
    if (queryTerms.length === 0) return 0

    let score = 0
    const content = [
      result.title,
      result.description,
      ...(result.tags || []),
      result.category || '',
    ]
      .join(' ')
      .toLowerCase()

    queryTerms.forEach((term) => {
      // Exact matches get higher scores
      if (result.title.toLowerCase().includes(term)) score += 3
      if (result.description.toLowerCase().includes(term)) score += 2
      if (result.tags?.some((tag) => tag.toLowerCase().includes(term))) score += 2
      if (result.category?.toLowerCase().includes(term)) score += 1

      // Partial matches
      if (content.includes(term)) score += 0.5
    })

    // Normalize by query length
    return Math.min(score / (queryTerms.length * 3), 1)
  }

  // Generate human-readable match reasons
  private generateMatchReasons(
    query: string,
    result: SearchResult,
    semanticScore: number,
    _keywordScore: number
  ): string[] {
    const reasons: string[] = []
    const queryLower = query.toLowerCase()

    // Semantic match reasons
    if (semanticScore > 0.3) {
      reasons.push('Semantically related content')
    }

    // Keyword match reasons
    if (result.title.toLowerCase().includes(queryLower)) {
      reasons.push('Title match')
    }
    if (result.description.toLowerCase().includes(queryLower)) {
      reasons.push('Description match')
    }
    if (result.tags?.some((tag) => tag.toLowerCase().includes(queryLower))) {
      reasons.push('Tag match')
    }

    // Category reasoning
    if (semanticScore > 0.2 && result.category) {
      reasons.push(`Related to ${result.category}`)
    }

    return reasons.slice(0, 3) // Limit to 3 reasons
  }

  // Get search suggestions based on partial query
  getSuggestions(partialQuery: string, allResults: SearchResult[]): string[] {
    if (partialQuery.length < 2) return []

    const suggestions = new Set<string>()
    const queryLower = partialQuery.toLowerCase()

    // Extract suggestions from content
    allResults.forEach((result) => {
      // Title suggestions
      if (result.title.toLowerCase().includes(queryLower)) {
        suggestions.add(result.title)
      }

      // Tag suggestions
      result.tags?.forEach((tag) => {
        if (tag.toLowerCase().includes(queryLower)) {
          suggestions.add(tag)
        }
      })

      // Category suggestions
      if (result.category?.toLowerCase().includes(queryLower)) {
        suggestions.add(result.category)
      }
    })

    return Array.from(suggestions).slice(0, 5)
  }
}

// Singleton instance
export const semanticSearch = new SemanticSearch()

// Enhanced search function that combines semantic and keyword search
export function enhancedSearch(
  query: string,
  allResults: SearchResult[],
  options: SemanticSearchOptions = {}
): EnhancedSearchResult[] {
  // Initialize semantic search if not already done
  if (semanticSearch['contentEmbeddings'].size === 0) {
    semanticSearch.indexContent(allResults)
  }

  return semanticSearch.search(query, allResults, options)
}

// AI-powered query enhancement
export function enhanceQuery(query: string): string {
  // Simple query enhancement rules
  const enhancements: Record<string, string> = {
    ai: 'artificial intelligence machine learning',
    ml: 'machine learning ai artificial intelligence',
    ux: 'user experience design interface',
    ui: 'user interface design component',
    pm: 'product management strategy',
    dev: 'development engineering programming',
    frontend: 'frontend ui interface component',
    backend: 'backend api server database',
    fullstack: 'fullstack frontend backend development',
  }

  let enhanced = query
  Object.entries(enhancements).forEach(([short, expanded]) => {
    if (query.toLowerCase().includes(short)) {
      enhanced = `${query} ${expanded}`
    }
  })

  return enhanced
}
