'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { AnalyticsConsent, ConsentStatus } from './AnalyticsConsent'
import { useAnalytics } from '@/lib/hooks/useAnalytics'

interface ProjectMetric {
  id: string
  title: string
  totalClicks: number
  visitClicks: number
  githubClicks: number
  positions: number[]
  averagePosition?: number
  clickThroughRate?: number
}

interface AnalyticsInsights {
  totalEvents: number
  projectClicks: number
  topProjects: ProjectMetric[]
  sessionSummary: unknown
  generatedAt: string
}

interface AnalyticsContextType {
  trackEvent: (event: { name: string; properties?: Record<string, unknown> }) => void
  trackProjectClick: (
    projectId: string,
    projectTitle: string,
    linkType: 'visit' | 'github',
    position: number
  ) => void
  isTrackingAllowed: boolean
  consentGiven: boolean | null
  sessionId: string
  getInsights: () => AnalyticsInsights | null
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null)

interface AnalyticsProviderProps {
  children: React.ReactNode
  enableConsentBanner?: boolean
  enableLocalStorage?: boolean
  respectDoNotTrack?: boolean
  sessionTimeout?: number
}

/**
 * Analytics Provider Component
 *
 * Provides analytics context throughout the app with GDPR compliance
 * and privacy-friendly defaults
 */
export function AnalyticsProvider({
  children,
  enableConsentBanner = true,
  enableLocalStorage = false,
  respectDoNotTrack = true,
  sessionTimeout = 30,
}: AnalyticsProviderProps) {
  const {
    trackEvent,
    trackProjectClick,
    isTrackingAllowed,
    consentGiven,
    sessionId,
    eventQueue,
    getAnalyticsSummary,
  } = useAnalytics({
    enableLocalStorage,
    respectDoNotTrack,
    sessionTimeout,
  })

  const [insights, setInsights] = useState<AnalyticsInsights | null>(null)

  // Generate insights from analytics data
  useEffect(() => {
    const projectEvents = eventQueue.filter((event) => event.name === 'project_click')

    const projectMetrics = projectEvents.reduce(
      (acc, event) => {
        const properties = (event.properties as Record<string, unknown>) || {}
        const { projectId, projectTitle, linkType } = properties

        if (!projectId || typeof projectId !== 'string') return acc

        if (!acc[projectId]) {
          acc[projectId] = {
            id: projectId,
            title: (projectTitle as string) || 'Unknown',
            totalClicks: 0,
            visitClicks: 0,
            githubClicks: 0,
            positions: [],
          }
        }

        acc[projectId].totalClicks++
        if (linkType === 'visit') acc[projectId].visitClicks++
        if (linkType === 'github') acc[projectId].githubClicks++
        if (typeof properties.position === 'number') {
          acc[projectId].positions.push(properties.position)
        }

        return acc
      },
      {} as Record<string, ProjectMetric>
    )

    // Calculate additional metrics
    const projectInsights = Object.values(projectMetrics).map((project: ProjectMetric) => ({
      ...project,
      averagePosition:
        (project.positions as number[]).length > 0
          ? (project.positions as number[]).reduce((sum: number, pos: number) => sum + pos, 0) /
            (project.positions as number[]).length
          : 0,
      clickThroughRate:
        (project.totalClicks as number) > 0
          ? ((project.visitClicks as number) + (project.githubClicks as number)) /
            (project.totalClicks as number)
          : 0,
    }))

    setInsights({
      totalEvents: eventQueue.length,
      projectClicks: projectEvents.length,
      topProjects: projectInsights
        .sort((a: ProjectMetric, b: ProjectMetric) => b.totalClicks - a.totalClicks)
        .slice(0, 5),
      sessionSummary: getAnalyticsSummary(),
      generatedAt: new Date().toISOString(),
    })
  }, [eventQueue.length]) // Only depend on length to avoid function reference changes

  const getInsights = (): AnalyticsInsights | null => insights

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackProjectClick,
    isTrackingAllowed,
    consentGiven,
    sessionId,
    getInsights,
  }

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
      {enableConsentBanner && <AnalyticsConsent />}
      {process.env.NODE_ENV === 'development' && <ConsentStatus />}
    </AnalyticsContext.Provider>
  )
}

/**
 * Hook to access analytics context
 */
export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext)

  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider')
  }

  return context
}

/**
 * HOC for components that need analytics tracking
 */
export function withAnalytics<P extends object>(Component: React.ComponentType<P>) {
  return function AnalyticsWrappedComponent(props: P) {
    const analytics = useAnalyticsContext()

    return <Component {...props} analytics={analytics} />
  }
}
