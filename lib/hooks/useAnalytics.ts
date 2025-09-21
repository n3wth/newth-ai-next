'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'
import { track } from '@vercel/analytics'

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
  timestamp?: number
  sessionId?: string
}

export interface ProjectClickEvent {
  projectId: string
  projectTitle: string
  linkType: 'visit' | 'github'
  position: number
  timestamp: number
  userAgent?: string
  referrer?: string
}

interface UseAnalyticsOptions {
  enableLocalStorage?: boolean
  sessionTimeout?: number // minutes
  respectDoNotTrack?: boolean
}

interface AnalyticsState {
  sessionId: string
  eventsCount: number
  lastActivity: number
  consentGiven: boolean | null
}

/**
 * Privacy-friendly analytics hook for tracking user interactions
 *
 * Features:
 * - GDPR compliant with consent management
 * - Respects Do Not Track
 * - Session-based tracking without persistent user identification
 * - Local event queuing with optional persistence
 * - Automatic session timeout
 */
export function useAnalytics(options: UseAnalyticsOptions = {}) {
  const { enableLocalStorage = false, sessionTimeout = 30, respectDoNotTrack = true } = options

  const [analyticsState, setAnalyticsState] = useState<AnalyticsState>({
    sessionId: '',
    eventsCount: 0,
    lastActivity: Date.now(),
    consentGiven: null,
  })

  const [eventQueue, setEventQueue] = useState<AnalyticsEvent[]>([])

  // Generate session ID
  const generateSessionId = useCallback(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }, [])

  // Check if tracking is allowed
  const isTrackingAllowed = useCallback(() => {
    // Respect Do Not Track header
    if (respectDoNotTrack && typeof navigator !== 'undefined' && navigator.doNotTrack === '1') {
      return false
    }

    // Check explicit consent (can be set by cookie banner)
    if (analyticsState.consentGiven === false) {
      return false
    }

    // Default to true for essential analytics (can be overridden by consent banner)
    return true
  }, [respectDoNotTrack, analyticsState.consentGiven])

  // Initialize session
  useEffect(() => {
    if (!analyticsState.sessionId) {
      const newSessionId = generateSessionId()
      setAnalyticsState((prev) => ({
        ...prev,
        sessionId: newSessionId,
        lastActivity: Date.now(),
      }))

      // Load consent from localStorage if available
      if (enableLocalStorage && typeof window !== 'undefined') {
        try {
          const consent = localStorage.getItem('analytics-consent')
          if (consent !== null) {
            setAnalyticsState((prev) => ({
              ...prev,
              consentGiven: consent === 'true',
            }))
          }
        } catch (error) {
          console.warn('Failed to read analytics consent from localStorage:', error)
        }
      }
    }
  }, [enableLocalStorage]) // Removed problematic dependencies

  // Session timeout management
  useEffect(() => {
    const checkSessionTimeout = () => {
      setAnalyticsState((prev) => {
        const now = Date.now()
        const timeSinceActivity = now - prev.lastActivity
        const timeoutMs = sessionTimeout * 60 * 1000

        if (timeSinceActivity > timeoutMs) {
          return {
            ...prev,
            sessionId: generateSessionId(),
            eventsCount: 0,
            lastActivity: now,
          }
        }
        return prev
      })
    }

    const interval = setInterval(checkSessionTimeout, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [sessionTimeout]) // Removed problematic dependencies

  // Set analytics consent
  const setConsent = useCallback(
    (consent: boolean) => {
      setAnalyticsState((prev) => ({
        ...prev,
        consentGiven: consent,
      }))

      if (enableLocalStorage && typeof window !== 'undefined') {
        try {
          localStorage.setItem('analytics-consent', consent.toString())
        } catch (error) {
          console.warn('Failed to save analytics consent to localStorage:', error)
        }
      }

      // Clear queue if consent is withdrawn
      if (!consent) {
        setEventQueue([])
      }
    },
    [enableLocalStorage]
  )

  // Track event
  const trackEvent = useCallback(
    (event: Omit<AnalyticsEvent, 'timestamp' | 'sessionId'>) => {
      if (!isTrackingAllowed()) {
        return
      }

      const fullEvent: AnalyticsEvent = {
        ...event,
        timestamp: Date.now(),
        sessionId: analyticsState.sessionId,
      }

      // Add to local queue
      setEventQueue((prev) => [...prev, fullEvent])

      // Update activity timestamp
      setAnalyticsState((prev) => ({
        ...prev,
        lastActivity: Date.now(),
        eventsCount: prev.eventsCount + 1,
      }))

      // Send to Vercel Analytics with privacy-friendly properties
      const privacyFriendlyProperties = {
        ...event.properties,
        sessionId: analyticsState.sessionId,
      }

      try {
        track(event.name, privacyFriendlyProperties)
      } catch (error) {
        console.warn('Failed to track event:', error)
      }
    },
    [isTrackingAllowed, analyticsState.sessionId]
  )

  // Track project click with enhanced data
  const trackProjectClick = useCallback(
    (projectId: string, projectTitle: string, linkType: 'visit' | 'github', position: number) => {
      const eventData: ProjectClickEvent = {
        projectId,
        projectTitle,
        linkType,
        position,
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        referrer: typeof window !== 'undefined' ? document.referrer : undefined,
      }

      trackEvent({
        name: 'project_click',
        properties: {
          projectId,
          projectTitle,
          linkType,
          position,
          // Privacy-friendly user context
          hasReferrer: !!eventData.referrer,
          isMobile: /Mobile|Android/i.test(eventData.userAgent || ''),
          isDesktop: !/Mobile|Android/i.test(eventData.userAgent || ''),
        },
      })
    },
    [trackEvent]
  )

  // Get analytics summary for debugging/monitoring
  const getAnalyticsSummary = useCallback(() => {
    return {
      sessionId: analyticsState.sessionId,
      eventsCount: analyticsState.eventsCount,
      queuedEvents: eventQueue.length,
      trackingAllowed: isTrackingAllowed(),
      consentGiven: analyticsState.consentGiven,
      lastActivity: new Date(analyticsState.lastActivity).toISOString(),
    }
  }, [analyticsState, eventQueue.length, isTrackingAllowed])

  // Clear analytics data
  const clearAnalyticsData = useCallback(() => {
    setEventQueue([])
    setAnalyticsState((prev) => ({
      ...prev,
      eventsCount: 0,
      sessionId: generateSessionId(),
      lastActivity: Date.now(),
    }))

    if (enableLocalStorage && typeof window !== 'undefined') {
      try {
        localStorage.removeItem('analytics-consent')
      } catch (error) {
        console.warn('Failed to clear analytics data from localStorage:', error)
      }
    }
  }, [enableLocalStorage, generateSessionId])

  // Memoize the isTrackingAllowed result to prevent render loops
  const trackingAllowed = useMemo(() => isTrackingAllowed(), [respectDoNotTrack, analyticsState.consentGiven])

  return {
    // Core tracking functions
    trackEvent,
    trackProjectClick,

    // Consent management
    setConsent,
    consentGiven: analyticsState.consentGiven,

    // State and utilities
    sessionId: analyticsState.sessionId,
    isTrackingAllowed: trackingAllowed,
    getAnalyticsSummary,
    clearAnalyticsData,

    // Event queue for debugging
    eventQueue: useMemo(() => eventQueue.slice(-10), [eventQueue.length]), // Memoize to prevent render loops
  }
}

/**
 * Simple hook for basic project tracking
 * Use this when you only need project click tracking
 */
export function useProjectAnalytics() {
  const { trackProjectClick, isTrackingAllowed } = useAnalytics({
    enableLocalStorage: false,
    respectDoNotTrack: true,
  })

  return {
    trackProjectClick,
    isTrackingAllowed,
  }
}
