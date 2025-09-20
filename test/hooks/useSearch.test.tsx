import { renderHook, act } from '@testing-library/react'
import { useSearch } from '@/hooks/useSearch'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('useSearch', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.query).toBe('')
    expect(result.current.isOpen).toBe(false)
    expect(result.current.recentSearches).toEqual([])
    expect(result.current.selectedIndex).toBe(-1)
  })

  it('should open and close search modal', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.openSearch()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.closeSearch()
    })

    expect(result.current.isOpen).toBe(false)
    expect(result.current.query).toBe('')
  })

  it('should update query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('test query')
    })

    expect(result.current.query).toBe('test query')
  })

  it('should return search results based on query', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('r3')
    })

    expect(result.current.searchResults.length).toBeGreaterThan(0)
    expect(result.current.searchResults[0].title).toContain('r3')
  })

  it('should provide suggestions when no query', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.suggestions.length).toBeGreaterThan(0)
  })

  it('should save recent searches', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setQuery('test search')
      result.current.handleSearch('test search')
    })

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'newth-recent-searches',
      JSON.stringify(['test search'])
    )
  })

  it('should clear recent searches', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.clearRecentSearches()
    })

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('newth-recent-searches')
    expect(result.current.recentSearches).toEqual([])
  })

  it('should handle selected index changes', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setSelectedIndex(2)
    })

    expect(result.current.selectedIndex).toBe(2)
  })
})
