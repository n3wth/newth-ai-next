interface EventData {
  [key: string]: unknown
}

interface AnalyticsSummary {
  totalEvents: number
  totalPageViews: number
  uniqueUsers: number
}

export const trackEvent = (eventName: string, data?: EventData) => {
  // In production, this would send to analytics service
  console.log('Track event:', eventName, data)
}

export const trackPageView = (path: string) => {
  // In production, this would send to analytics service
  console.log('Track page view:', path)
}

export const getAnalyticsSummary = async (): Promise<AnalyticsSummary> => {
  // In production, this would fetch from analytics service
  return {
    totalEvents: 0,
    totalPageViews: 0,
    uniqueUsers: 0
  }
}

export const analyticsQueue = {
  flush: () => {
    console.log('Flushing analytics queue')
  }
}