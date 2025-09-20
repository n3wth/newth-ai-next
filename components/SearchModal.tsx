'use client'

import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Search,
  Clock,
  ArrowRight,
  ExternalLink,
  Hash,
  FileText,
  Folder,
  Command,
  Sparkles,
  Brain,
  Zap,
  Target,
} from 'lucide-react'
import { useEnhancedSearch } from '@/hooks/useEnhancedSearch'
import { EnhancedSearchResult } from '@/lib/search/semantic'
import { SearchResult } from '@/hooks/useSearch'
import { announceToScreenReader } from '@/components/AccessibilityAnnouncer'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const {
    query,
    recentSearches,
    selectedIndex,
    searchResults,
    smartSuggestions,
    suggestions,
    isSemanticMode,
    searchAnalytics,
    setQuery,
    navigateToResult,
    clearRecentSearches,
    setSelectedIndex,
    toggleSearchMode,
  } = useEnhancedSearch()

  const displayResults = query ? searchResults : smartSuggestions
  const showRecentSearches = !query && recentSearches.length > 0
  const showSuggestions = query && query.length >= 2 && suggestions.length > 0

  // Announce search results to screen readers
  useEffect(() => {
    if (query && searchResults.length > 0) {
      announceToScreenReader(`Found ${searchResults.length} search results for ${query}`, 'polite')
    } else if (query && searchResults.length === 0) {
      announceToScreenReader(`No search results found for ${query}`, 'polite')
    }
  }, [query, searchResults.length])

  const getResultIcon = (result: SearchResult | EnhancedSearchResult) => {
    switch (result.type) {
      case 'project':
        return <Folder size={16} className="text-blue-400" />
      case 'page':
        return <FileText size={16} className="text-green-400" />
      case 'content':
        return <Hash size={16} className="text-purple-400" />
      default:
        return <FileText size={16} className="text-gray-400" />
    }
  }

  const getResultBadge = (result: SearchResult | EnhancedSearchResult) => {
    // Enhanced semantic match indicator
    if ('semanticScore' in result && result.semanticScore && result.semanticScore > 0.4) {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
          <Sparkles size={10} className="mr-1" />
          AI Match
        </span>
      )
    }

    if (result.type === 'project') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          Project
        </span>
      )
    }

    if (result.category) {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {result.category}
        </span>
      )
    }
    return null
  }

  const getMatchReasonIndicator = (result: EnhancedSearchResult) => {
    if (!('matchReasons' in result) || !result.matchReasons?.length) return null

    const reason = result.matchReasons[0]
    let icon = <Target size={10} />
    let color = 'text-gray-400'

    if (reason.includes('Semantic')) {
      icon = <Brain size={10} />
      color = 'text-purple-400'
    } else if (reason.includes('Title')) {
      icon = <Zap size={10} />
      color = 'text-yellow-400'
    }

    return (
      <span className={`inline-flex items-center text-xs ${color} ml-2`} title={reason}>
        {icon}
      </span>
    )
  }

  const handleResultClick = (result: SearchResult) => {
    navigateToResult(result)
  }

  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[200]"
        onClose={onClose}
        aria-labelledby="search-modal-title"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 pt-[10vh]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
                {/* Search Input with Mode Toggle */}
                <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
                  <h1 id="search-modal-title" className="sr-only">
                    Search Modal
                  </h1>
                  <div className="flex items-center mr-3">
                    <Search size={20} className="text-gray-400" />
                    {isSemanticMode && <Brain size={12} className="text-purple-400 ml-1" />}
                  </div>
                  <input
                    type="text"
                    className="flex-1 py-4 text-lg placeholder-gray-500 focus:outline-none bg-transparent text-gray-900 dark:text-white"
                    placeholder={
                      isSemanticMode
                        ? 'AI-powered search...'
                        : 'Search projects, pages, and content...'
                    }
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                    aria-label="Search input"
                    aria-describedby="search-description search-instructions"
                    aria-autocomplete="list"
                    aria-expanded={displayResults.length > 0}
                    aria-controls="search-results"
                    role="combobox"
                  />

                  {/* Search Mode Toggle */}
                  <button
                    onClick={toggleSearchMode}
                    className="hidden sm:flex items-center text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mr-2 transition-colors"
                    title={isSemanticMode ? 'Switch to keyword search' : 'Switch to AI search'}
                  >
                    {isSemanticMode ? (
                      <Brain size={12} className="mr-1" />
                    ) : (
                      <Search size={12} className="mr-1" />
                    )}
                    {isSemanticMode ? 'AI' : 'Basic'}
                  </button>

                  {/* Keyboard shortcut hint */}
                  <div className="hidden sm:flex items-center text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    <Command size={12} className="mr-1" />K
                  </div>
                </div>

                {/* Search Results or Suggestions */}
                <div className="max-h-96 overflow-y-auto" id="search-results">
                  {displayResults.length > 0 && (
                    <div className="py-2">
                      {/* Results header */}
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center justify-between">
                        <span>
                          {query
                            ? `${isSemanticMode ? 'AI ' : ''}Results (${displayResults.length})`
                            : 'Quick Access'}
                        </span>
                        {query && isSemanticMode && searchAnalytics && (
                          <span className="text-xs text-purple-400 flex items-center">
                            <Sparkles size={10} className="mr-1" />
                            Semantic
                          </span>
                        )}
                      </div>

                      {/* Results list */}
                      <div
                        role="listbox"
                        aria-label={
                          query ? `Search results for ${query}` : 'Quick access suggestions'
                        }
                        aria-live="polite"
                        aria-describedby="results-count"
                      >
                        <div id="results-count" className="sr-only">
                          {query
                            ? `${displayResults.length} results found`
                            : `${displayResults.length} suggestions available`}
                        </div>
                        {displayResults.map((result, index) => (
                          <button
                            key={result.id}
                            type="button"
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none transition-colors ${
                              selectedIndex === index ? 'bg-gray-50 dark:bg-gray-800' : ''
                            }`}
                            onClick={() => handleResultClick(result)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            role="option"
                            aria-selected={selectedIndex === index}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">{getResultIcon(result)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {result.title}
                                  </h3>
                                  {getResultBadge(result)}
                                  {getMatchReasonIndicator(result as EnhancedSearchResult)}
                                  {result.url.startsWith('http') && (
                                    <ExternalLink
                                      size={12}
                                      className="text-gray-400 flex-shrink-0"
                                    />
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                  {result.description}
                                </p>
                                {result.tags && result.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {result.tags.slice(0, 3).map((tag) => (
                                      <span
                                        key={tag}
                                        className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                    {result.tags.length > 3 && (
                                      <span className="text-xs text-gray-400">
                                        +{result.tags.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                              <div className="flex-shrink-0">
                                <ArrowRight size={16} className="text-gray-400" />
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Search Suggestions */}
                  {showSuggestions && (
                    <div className="border-t border-gray-200 dark:border-gray-700 py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center">
                        <Brain size={12} className="mr-1" />
                        AI Suggestions
                      </div>
                      <div className="px-4 space-y-1">
                        {suggestions.map((suggestion, index) => (
                          <button
                            key={`suggestion-${index}`}
                            type="button"
                            className="block w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                            onClick={() => setQuery(suggestion)}
                          >
                            &ldquo;{suggestion}&rdquo;
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recent Searches */}
                  {showRecentSearches && (
                    <div className="border-t border-gray-200 dark:border-gray-700 py-2">
                      <div className="flex items-center justify-between px-4 py-2">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Recent Searches
                        </h3>
                        <button
                          type="button"
                          onClick={clearRecentSearches}
                          className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          aria-label="Clear recent searches"
                        >
                          Clear
                        </button>
                      </div>
                      <div>
                        {recentSearches.map((searchTerm, index) => (
                          <button
                            key={`recent-${index}`}
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none transition-colors"
                            onClick={() => handleRecentSearchClick(searchTerm)}
                            aria-label={`Search for ${searchTerm} again`}
                          >
                            <div className="flex items-center gap-3">
                              <Clock size={16} className="text-gray-400" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {searchTerm}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No Results */}
                  {query && displayResults.length === 0 && (
                    <div className="py-8 text-center">
                      <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        No results found
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Try searching for projects, pages, or technologies
                      </p>
                    </div>
                  )}

                  {/* Empty State */}
                  {!query && displayResults.length === 0 && !showRecentSearches && (
                    <div className="py-8 text-center">
                      <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Start searching
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Find projects, pages, and content quickly
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                          ↑↓
                        </kbd>
                        Navigate
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                          ↵
                        </kbd>
                        Select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded">
                          Esc
                        </kbd>
                        Close
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {searchAnalytics && searchAnalytics.totalSearches > 0 && (
                        <span className="flex items-center gap-1">
                          <Zap size={10} />
                          {searchAnalytics.totalSearches} searches
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        {isSemanticMode ? (
                          <>
                            <Brain size={10} />
                            AI-powered search
                          </>
                        ) : (
                          'Keyword search'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

        {/* Screen reader descriptions */}
        <div id="search-description" className="sr-only">
          Search through projects, pages, and content on this website.
        </div>
        <div id="search-instructions" className="sr-only">
          Use arrow keys to navigate results, Enter to select, or Escape to close.
        </div>
      </Dialog>
    </Transition>
  )
}
