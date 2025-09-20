'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { projects } from '@/lib/data'
import { SearchResult } from './useSearch'
import {
  enhancedSearch,
  enhanceQuery,
  semanticSearch,
  EnhancedSearchResult,
} from '@/lib/search/semantic'

// Static pages and content for search (enhanced with more metadata)
const staticPages: Omit<SearchResult, 'score'>[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'Oliver Newth - AI Engineer & Product Builder specializing in intelligent systems',
    type: 'page',
    url: '/',
    category: 'navigation',
    tags: ['portfolio', 'about', 'homepage'],
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Explore AI-powered projects, developer tools, and innovative experiments',
    type: 'page',
    url: '/projects',
    category: 'navigation',
    tags: ['projects', 'portfolio', 'work', 'development'],
  },
  {
    id: 'work',
    title: 'Work',
    description: 'Professional experience in AI engineering, product management, and leadership',
    type: 'page',
    url: '/work',
    category: 'navigation',
    tags: ['career', 'experience', 'professional', 'leadership'],
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'AI insights, product strategy, and development best practices delivered weekly',
    type: 'page',
    url: '/newsletter',
    category: 'content',
    tags: ['newsletter', 'ai', 'insights', 'updates'],
  },
  {
    id: 'blog',
    title: 'Writing',
    description: 'Thoughts on AI, product development, and technology innovation',
    type: 'page',
    url: '/blog',
    category: 'content',
    tags: ['blog', 'writing', 'thoughts', 'articles'],
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    description: 'Building intelligent systems, LLM applications, and AI-powered developer tools',
    type: 'content',
    url: '/work',
    category: 'expertise',
    tags: ['AI', 'Machine Learning', 'Engineering', 'LLM', 'Neural Networks'],
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'Strategic product development, user research, and go-to-market execution',
    type: 'content',
    url: '/work',
    category: 'expertise',
    tags: ['Product', 'Strategy', 'Planning', 'User Research', 'GTM'],
  },
  {
    id: 'mcp-protocol',
    title: 'MCP Protocol Development',
    description: 'Model Context Protocol implementation, tools, and integrations for AI workflows',
    type: 'content',
    url: '/projects',
    category: 'technology',
    tags: ['MCP', 'Protocol', 'AI', 'TypeScript', 'Tools', 'Integration'],
  },
  {
    id: 'claude-code',
    title: 'Claude Code',
    description: 'AI-powered developer CLI for enhanced programming workflows and automation',
    type: 'content',
    url: '/projects',
    category: 'technology',
    tags: ['Claude', 'CLI', 'Developer Tools', 'AI', 'Automation', 'Workflow'],
  },
]

// Enhanced search configuration
interface SearchConfig {
  semanticThreshold: number
  semanticWeight: number
  keywordWeight: number
  maxResults: number
  enableSuggestions: boolean
  boostRecency: boolean
  categoryWeights: Record<string, number>
}

const defaultConfig: SearchConfig = {
  semanticThreshold: 0.1,
  semanticWeight: 0.6,
  keywordWeight: 0.4,
  maxResults: 10,
  enableSuggestions: true,
  boostRecency: true,
  categoryWeights: {
    expertise: 1.2,
    technology: 1.1,
    navigation: 0.9,
  },
}

// Local storage keys
const RECENT_SEARCHES_KEY = 'newth-enhanced-searches'
const SEARCH_ANALYTICS_KEY = 'newth-search-analytics'
const MAX_RECENT_SEARCHES = 8

// Search analytics interface
interface SearchAnalytics {
  totalSearches: number
  topQueries: Array<{ query: string; count: number; lastUsed: string }>
  categoryClicks: Record<string, number>
  avgResultsClicked: number
  searchPatterns: {
    peakHours: number[]
    commonTerms: string[]
    semanticMatches: number
    keywordMatches: number
  }
}

export function useEnhancedSearch(config: Partial<SearchConfig> = {}) {
  const searchConfig = { ...defaultConfig, ...config }

  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [searchAnalytics, setSearchAnalytics] = useState<SearchAnalytics | null>(null)
  const [isSemanticMode, setIsSemanticMode] = useState(true)
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Load data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load recent searches
      const storedRecent = localStorage.getItem(RECENT_SEARCHES_KEY)
      if (storedRecent) {
        try {
          setRecentSearches(JSON.parse(storedRecent))
        } catch {
          // Invalid JSON, ignore
        }
      }

      // Load search analytics
      const storedAnalytics = localStorage.getItem(SEARCH_ANALYTICS_KEY)
      if (storedAnalytics) {
        try {
          setSearchAnalytics(JSON.parse(storedAnalytics))
        } catch {
          // Invalid JSON, create default
          setSearchAnalytics({
            totalSearches: 0,
            topQueries: [],
            categoryClicks: {},
            avgResultsClicked: 0,
            searchPatterns: {
              peakHours: [],
              commonTerms: [],
              semanticMatches: 0,
              keywordMatches: 0,
            },
          })
        }
      }
    }
  }, [])

  // Convert projects to search results with enhanced metadata
  const projectResults = useMemo((): SearchResult[] => {
    return projects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      type: 'project' as const,
      url: project.links.website || `/projects#${project.id}`,
      category: project.category,
      tags: project.tags,
    }))
  }, [])

  // All searchable content
  const allResults = useMemo((): SearchResult[] => {
    return [...projectResults, ...staticPages]
  }, [projectResults])

  // Initialize semantic search
  useEffect(() => {
    if (allResults.length > 0) {
      semanticSearch.indexContent(allResults)
    }
  }, [allResults])

  // Traditional search for comparison/fallback
  const traditionalSearch = useCallback(
    (searchQuery: string, results: SearchResult[]): EnhancedSearchResult[] => {
      const searchTerm = searchQuery.toLowerCase().trim()

      return results
        .map((item) => {
          let score = 0

          // Title matching
          if (item.title.toLowerCase() === searchTerm) score += 100
          else if (item.title.toLowerCase().startsWith(searchTerm)) score += 80
          else if (item.title.toLowerCase().includes(searchTerm)) score += 60

          // Description matching
          if (item.description.toLowerCase().includes(searchTerm)) score += 40

          // Tag matching
          if (item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))) score += 50

          // Category matching
          if (item.category?.toLowerCase().includes(searchTerm)) score += 30

          return { ...item, keywordScore: score / 100, combinedScore: score / 100 }
        })
        .filter((item) => (item.combinedScore || 0) > 0)
        .sort((a, b) => (b.combinedScore || 0) - (a.combinedScore || 0))
        .slice(0, searchConfig.maxResults)
    },
    [searchConfig.maxResults]
  )

  // Update search analytics
  const updateSearchAnalytics = useCallback(
    (searchQuery: string, results: EnhancedSearchResult[]) => {
      if (!searchAnalytics) return

      const updated = { ...searchAnalytics }
      updated.totalSearches++

      // Update top queries
      const existingQuery = updated.topQueries.find((q) => q.query === searchQuery)
      if (existingQuery) {
        existingQuery.count++
        existingQuery.lastUsed = new Date().toISOString()
      } else {
        updated.topQueries.push({
          query: searchQuery,
          count: 1,
          lastUsed: new Date().toISOString(),
        })
      }

      // Keep only top 10 queries
      updated.topQueries = updated.topQueries.sort((a, b) => b.count - a.count).slice(0, 10)

      // Update search patterns
      const hasSemanticMatches = results.some((r) => (r.semanticScore || 0) > 0.3)
      const hasKeywordMatches = results.some((r) => (r.keywordScore || 0) > 0.5)

      if (hasSemanticMatches) updated.searchPatterns.semanticMatches++
      if (hasKeywordMatches) updated.searchPatterns.keywordMatches++

      setSearchAnalytics(updated)

      // Save to localStorage
      localStorage.setItem(SEARCH_ANALYTICS_KEY, JSON.stringify(updated))
    },
    [searchAnalytics]
  )

  // Enhanced search results with AI-powered scoring
  const searchResults = useMemo((): EnhancedSearchResult[] => {
    if (!query.trim()) return []

    const enhancedQuery = enhanceQuery(query.trim())

    if (isSemanticMode) {
      const results = enhancedSearch(enhancedQuery, allResults, {
        threshold: searchConfig.semanticThreshold,
        maxResults: searchConfig.maxResults,
        boostRecency: searchConfig.boostRecency,
        categoryWeights: searchConfig.categoryWeights,
      })

      // Update analytics
      updateSearchAnalytics(query, results)

      return results
    } else {
      // Fallback to traditional search
      return traditionalSearch(query, allResults)
    }
  }, [query, allResults, isSemanticMode, searchConfig, updateSearchAnalytics, traditionalSearch])

  // Get AI-powered search suggestions
  const getSuggestions = useCallback(
    (partialQuery: string): string[] => {
      if (!searchConfig.enableSuggestions || partialQuery.length < 2) return []

      return semanticSearch.getSuggestions(partialQuery, allResults)
    },
    [allResults, searchConfig.enableSuggestions]
  )

  // Update suggestions when query changes
  useEffect(() => {
    const newSuggestions = getSuggestions(query)
    setSuggestions(newSuggestions)
  }, [query, getSuggestions])

  // Smart suggestions when no query (contextual recommendations)
  const smartSuggestions = useMemo((): SearchResult[] => {
    if (query) return []

    // Use analytics to suggest popular content
    const recentQueries = searchAnalytics?.topQueries.slice(0, 3).map((q) => q.query) || []

    // Fallback to featured/popular content
    return allResults
      .filter(
        (item) =>
          item.type === 'project' ||
          item.category === 'navigation' ||
          recentQueries.some((rq) => item.title.toLowerCase().includes(rq.toLowerCase()))
      )
      .slice(0, 6)
  }, [allResults, searchAnalytics, query])

  // Save recent search
  const saveRecentSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return

    setRecentSearches((prev) => {
      const newRecent = [searchQuery, ...prev.filter((q) => q !== searchQuery)].slice(
        0,
        MAX_RECENT_SEARCHES
      )

      if (typeof window !== 'undefined') {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(newRecent))
      }

      return newRecent
    })
  }, [])

  // Clear recent searches
  const clearRecentSearches = useCallback(() => {
    setRecentSearches([])
    if (typeof window !== 'undefined') {
      localStorage.removeItem(RECENT_SEARCHES_KEY)
    }
  }, [])

  // Open/close search modal
  const openSearch = useCallback(() => {
    setIsOpen(true)
    setSelectedIndex(-1)
  }, [])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(-1)
    setSuggestions([])
  }, [])

  // Handle search submission
  const handleSearch = useCallback(
    (searchQuery?: string) => {
      const searchTerm = searchQuery || query
      if (searchTerm.trim()) {
        saveRecentSearch(searchTerm.trim())
      }
    },
    [query, saveRecentSearch]
  )

  // Navigate to result with analytics tracking
  const navigateToResult = useCallback(
    (result: SearchResult | EnhancedSearchResult) => {
      handleSearch()

      // Track result click
      if (searchAnalytics && result.category) {
        const updated = { ...searchAnalytics }
        updated.categoryClicks[result.category] = (updated.categoryClicks[result.category] || 0) + 1
        setSearchAnalytics(updated)
        localStorage.setItem(SEARCH_ANALYTICS_KEY, JSON.stringify(updated))
      }

      closeSearch()

      // Navigate
      if (result.url.startsWith('http')) {
        window.open(result.url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = result.url
      }
    },
    [handleSearch, closeSearch, searchAnalytics]
  )

  // Toggle search mode
  const toggleSearchMode = useCallback(() => {
    setIsSemanticMode((prev) => !prev)
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      const results = query ? searchResults : smartSuggestions

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev))
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigateToResult(results[selectedIndex])
          } else if (query.trim()) {
            handleSearch()
          }
          break
        case 'Escape':
          e.preventDefault()
          closeSearch()
          break
      }
    },
    [
      isOpen,
      query,
      searchResults,
      smartSuggestions,
      selectedIndex,
      navigateToResult,
      handleSearch,
      closeSearch,
    ]
  )

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          closeSearch()
        } else {
          openSearch()
        }
      }
    }

    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [isOpen, openSearch, closeSearch])

  // Handle keyboard navigation when modal is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
    return undefined
  }, [isOpen, handleKeyDown])

  return {
    // State
    query,
    isOpen,
    recentSearches,
    selectedIndex,
    isSemanticMode,
    suggestions,
    searchAnalytics,

    // Results
    searchResults,
    smartSuggestions,

    // Actions
    setQuery,
    openSearch,
    closeSearch,
    handleSearch,
    navigateToResult,
    clearRecentSearches,
    setSelectedIndex,
    toggleSearchMode,

    // Config
    searchConfig,
  }
}
