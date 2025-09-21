import { useMemo, useState, useEffect } from 'react'

/**
 * Performance utility functions for React components
 */

// Custom hook for heavy computations with memoization
export function useHeavyComputation<T>(
  computation: () => T,
  deps: React.DependencyList
): T {
  return useMemo(computation, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

// Debounce hook for search and input handlers
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// Intersection observer hook for lazy loading
export function useInView(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current) // eslint-disable-line react-hooks/exhaustive-deps
      }
    }
  }, [ref, options])

  return isInView
}

