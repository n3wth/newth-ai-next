'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { projects } from '@/lib/data'

export interface SearchResult {
  id: string
  title: string
  description: string
  type: 'project' | 'page' | 'content'
  url: string
  category?: string
  tags?: string[]
  score?: number
}

// Static pages and content for search
const staticPages: Omit<SearchResult, 'score'>[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'Oliver Newth - AI Engineer & Product Builder',
    type: 'page',
    url: '/',
    category: 'navigation',
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Explore my latest projects and experiments',
    type: 'page',
    url: '/projects',
    category: 'navigation',
  },
  {
    id: 'work',
    title: 'Work',
    description: 'Professional experience and career highlights',
    type: 'page',
    url: '/work',
    category: 'navigation',
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Subscribe to updates on AI, product strategy, and development',
    type: 'page',
    url: '/newsletter',
    category: 'content',
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    description: 'Building intelligent systems and AI-powered applications',
    type: 'content',
    url: '/work',
    category: 'expertise',
    tags: ['AI', 'Machine Learning', 'Engineering'],
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'Strategic product development and go-to-market planning',
    type: 'content',
    url: '/work',
    category: 'expertise',
    tags: ['Product', 'Strategy', 'Planning'],
  },
  {
    id: 'mcp-protocol',
    title: 'MCP Protocol',
    description: 'Model Context Protocol development and implementation',
    type: 'content',
    url: '/projects',
    category: 'technology',
    tags: ['MCP', 'Protocol', 'AI', 'TypeScript'],
  },
]

// Local storage keys
const RECENT_SEARCHES_KEY = 'newth-recent-searches'
const MAX_RECENT_SEARCHES = 5

export function useSearch() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY)
      if (stored) {
        try {
          setRecentSearches(JSON.parse(stored))
        } catch {
          // Invalid JSON, ignore
        }
      }
    }
  }, [])

  // Save recent searches to localStorage
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

  // Convert projects to search results
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

  // Search function with scoring
  const searchResults = useMemo((): SearchResult[] => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase().trim()
    const scored = allResults.map((item) => {
      let score = 0

      // Exact title match gets highest score
      if (item.title.toLowerCase() === searchTerm) {
        score += 100
      }
      // Title starts with query
      else if (item.title.toLowerCase().startsWith(searchTerm)) {
        score += 80
      }
      // Title contains query
      else if (item.title.toLowerCase().includes(searchTerm)) {
        score += 60
      }

      // Description contains query
      if (item.description.toLowerCase().includes(searchTerm)) {
        score += 40
      }

      // Tags contain query
      if (item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))) {
        score += 50
      }

      // Category matches
      if (item.category?.toLowerCase().includes(searchTerm)) {
        score += 30
      }

      // Type matches
      if (item.type.toLowerCase().includes(searchTerm)) {
        score += 20
      }

      return { ...item, score }
    })

    // Filter out items with no score and sort by score
    return scored
      .filter((item) => item.score > 0)
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 10) // Limit to top 10 results
  }, [query, allResults])

  // Suggestions when no query
  const suggestions = useMemo((): SearchResult[] => {
    return allResults
      .filter((item) => item.type === 'project' || item.category === 'navigation')
      .slice(0, 6)
  }, [allResults])

  // Open search modal
  const openSearch = useCallback(() => {
    setIsOpen(true)
    setSelectedIndex(-1)
  }, [])

  // Close search modal
  const closeSearch = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(-1)
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

  // Navigate to result
  const navigateToResult = useCallback(
    (result: SearchResult) => {
      handleSearch()
      closeSearch()

      // Navigate to the URL
      if (result.url.startsWith('http')) {
        window.open(result.url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = result.url
      }
    },
    [handleSearch, closeSearch]
  )

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      const results = query ? searchResults : suggestions

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
      suggestions,
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

  // Return all hook values
  return {
    // State
    query,
    isOpen,
    recentSearches,
    selectedIndex,

    // Results
    searchResults,
    suggestions,

    // Actions
    setQuery,
    openSearch,
    closeSearch,
    handleSearch,
    navigateToResult,
    clearRecentSearches,
    setSelectedIndex,
  }
}
