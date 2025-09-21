import { useEffect, useRef, useCallback, useState } from 'react'

/**
 * Performance-optimized animation hook using requestAnimationFrame
 * Replaces setInterval for better performance and battery efficiency
 */
export function useAnimationFrame(
  callback: (deltaTime: number) => void,
  delay: number | null = null,
  dependencies: React.DependencyList = []
) {
  const requestRef = useRef<number | undefined>(undefined)
  const previousTimeRef = useRef<number | undefined>(undefined)
  const accumulatedTimeRef = useRef(0)

  const animate = useCallback((time?: number) => {
    const currentTime = time ?? performance.now()
    if (previousTimeRef.current !== undefined && delay !== null) {
      const deltaTime = currentTime - previousTimeRef.current
      accumulatedTimeRef.current += deltaTime

      // Only call callback when accumulated time exceeds delay
      if (accumulatedTimeRef.current >= delay) {
        callback(deltaTime)
        accumulatedTimeRef.current = 0
      }
    }
    previousTimeRef.current = currentTime
    requestRef.current = requestAnimationFrame(animate)
  }, [callback, delay])

  useEffect(() => {
    if (delay !== null) {
      requestRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...dependencies])
}

/**
 * Intersection observer hook for pausing animations when off-screen
 */
export function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, options])

  return isIntersecting
}

/**
 * Throttled animation frame for heavy animations
 */
export function useThrottledAnimationFrame(
  callback: () => void,
  fps: number = 60
) {
  const frameDelay = 1000 / fps
  const lastFrameTime = useRef(0)
  const requestRef = useRef<number | undefined>(undefined)

  const animate = useCallback((time?: number) => {
    const currentTime = time ?? performance.now()
    if (currentTime - lastFrameTime.current >= frameDelay) {
      callback()
      lastFrameTime.current = currentTime
    }
    requestRef.current = requestAnimationFrame(animate)
  }, [callback, frameDelay])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])
}