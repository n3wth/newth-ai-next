import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SearchModal } from '@/components/SearchModal'

// Mock the useEnhancedSearch hook
const mockSetQuery = vi.fn()
const mockNavigateToResult = vi.fn()
const mockClearRecentSearches = vi.fn()
const mockSetSelectedIndex = vi.fn()
const mockToggleSearchMode = vi.fn()

vi.mock('@/hooks/useEnhancedSearch', () => ({
  useEnhancedSearch: vi.fn(() => ({
    query: '',
    recentSearches: [],
    selectedIndex: -1,
    searchResults: [],
    smartSuggestions: [],
    suggestions: [],
    isSemanticMode: false,
    searchAnalytics: null,
    setQuery: mockSetQuery,
    navigateToResult: mockNavigateToResult,
    clearRecentSearches: mockClearRecentSearches,
    setSelectedIndex: mockSetSelectedIndex,
    toggleSearchMode: mockToggleSearchMode,
  })),
}))

vi.mock('@/components/AccessibilityAnnouncer', () => ({
  announceToScreenReader: vi.fn(),
}))

import { useEnhancedSearch } from '@/hooks/useEnhancedSearch'

describe('SearchModal', () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders when isOpen is true', () => {
    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    expect(screen.getByPlaceholderText(/Search projects, pages, and content/i)).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    const { container } = render(<SearchModal isOpen={false} onClose={mockOnClose} />)

    expect(container.querySelector('[role="dialog"]')).toBeNull()
  })

  it('calls setQuery when input changes', () => {
    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    const input = screen.getByPlaceholderText(/Search projects, pages, and content/i)
    fireEvent.change(input, { target: { value: 'test query' } })

    expect(mockSetQuery).toHaveBeenCalledWith('test query')
  })

  it('displays search results when query is entered', async () => {
    const mockResults = [
      {
        id: 'result-1',
        title: 'Test Result',
        description: 'Test description',
        url: '/test',
        type: 'project' as const,
      },
    ]

    vi.mocked(useEnhancedSearch).mockReturnValue({
      query: 'test',
      recentSearches: [],
      selectedIndex: -1,
      searchResults: mockResults,
      smartSuggestions: [],
      suggestions: [],
      isSemanticMode: false,
      searchAnalytics: null,
      setQuery: mockSetQuery,
      navigateToResult: mockNavigateToResult,
      clearRecentSearches: mockClearRecentSearches,
      setSelectedIndex: mockSetSelectedIndex,
      toggleSearchMode: mockToggleSearchMode,
    })

    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    expect(screen.getByText('Test Result')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('displays no results message when search returns empty', () => {
    vi.mocked(useEnhancedSearch).mockReturnValue({
      query: 'nonexistent',
      recentSearches: [],
      selectedIndex: -1,
      searchResults: [],
      smartSuggestions: [],
      suggestions: [],
      isSemanticMode: false,
      searchAnalytics: null,
      setQuery: mockSetQuery,
      navigateToResult: mockNavigateToResult,
      clearRecentSearches: mockClearRecentSearches,
      setSelectedIndex: mockSetSelectedIndex,
      toggleSearchMode: mockToggleSearchMode,
    })

    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    expect(screen.getByText(/No results found/i)).toBeInTheDocument()
  })

  it('calls navigateToResult when a result is clicked', () => {
    const mockResults = [
      {
        id: 'result-1',
        title: 'Test Result',
        description: 'Test description',
        url: '/test',
        type: 'project' as const,
      },
    ]

    vi.mocked(useEnhancedSearch).mockReturnValue({
      query: 'test',
      recentSearches: [],
      selectedIndex: -1,
      searchResults: mockResults,
      smartSuggestions: [],
      suggestions: [],
      isSemanticMode: false,
      searchAnalytics: null,
      setQuery: mockSetQuery,
      navigateToResult: mockNavigateToResult,
      clearRecentSearches: mockClearRecentSearches,
      setSelectedIndex: mockSetSelectedIndex,
      toggleSearchMode: mockToggleSearchMode,
    })

    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    const resultButton = screen.getByRole('option', { name: /Test Result/i })
    fireEvent.click(resultButton)

    expect(mockNavigateToResult).toHaveBeenCalledWith(mockResults[0])
  })

  it('displays recent searches when no query is entered', () => {
    vi.mocked(useEnhancedSearch).mockReturnValue({
      query: '',
      recentSearches: ['previous search', 'another search'],
      selectedIndex: -1,
      searchResults: [],
      smartSuggestions: [],
      suggestions: [],
      isSemanticMode: false,
      searchAnalytics: null,
      setQuery: mockSetQuery,
      navigateToResult: mockNavigateToResult,
      clearRecentSearches: mockClearRecentSearches,
      setSelectedIndex: mockSetSelectedIndex,
      toggleSearchMode: mockToggleSearchMode,
    })

    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    expect(screen.getByText('previous search')).toBeInTheDocument()
    expect(screen.getByText('another search')).toBeInTheDocument()
  })

  it('toggles search mode when toggle button is clicked', () => {
    render(<SearchModal isOpen={true} onClose={mockOnClose} />)

    const toggleButton = screen.getByTitle(/Switch to AI search/i)
    fireEvent.click(toggleButton)

    expect(mockToggleSearchMode).toHaveBeenCalled()
  })
})
