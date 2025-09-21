import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AnalyticsProvider, useAnalyticsContext } from '@/components/AnalyticsProvider'

// Mock the analytics API
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  getAnalyticsSummary: vi.fn(),
  analyticsQueue: {
    flush: vi.fn()
  }
}))

import { trackEvent, trackPageView, getAnalyticsSummary } from '@/lib/analytics'

// Test component that uses the analytics context
const TestComponent = () => {
  const analytics = useAnalyticsContext()

  return (
    <div>
      <button onClick={() => analytics.trackEvent('test_event', { data: 'test' })}>
        Track Event
      </button>
      <button onClick={() => analytics.trackPageView('/test')}>
        Track Page View
      </button>
      <div data-testid="summary">
        {JSON.stringify(analytics.summary)}
      </div>
    </div>
  )
}

describe('AnalyticsProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('provides analytics context to children', () => {
    render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )

    expect(screen.getByRole('button', { name: /Track Event/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Track Page View/i })).toBeInTheDocument()
  })

  it('tracks events when trackEvent is called', () => {
    render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )

    const trackButton = screen.getByRole('button', { name: /Track Event/i })
    fireEvent.click(trackButton)

    expect(trackEvent).toHaveBeenCalledWith('test_event', { data: 'test' })
  })

  it('tracks page views when trackPageView is called', () => {
    render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )

    const pageViewButton = screen.getByRole('button', { name: /Track Page View/i })
    fireEvent.click(pageViewButton)

    expect(trackPageView).toHaveBeenCalledWith('/test')
  })

  it('fetches analytics summary on mount', async () => {
    const mockSummary = {
      totalEvents: 100,
      totalPageViews: 50,
      uniqueUsers: 25
    }

    vi.mocked(getAnalyticsSummary).mockResolvedValue(mockSummary)

    render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )

    await waitFor(() => {
      expect(getAnalyticsSummary).toHaveBeenCalled()
    })

    await waitFor(() => {
      const summary = screen.getByTestId('summary')
      expect(summary.textContent).toContain('100')
      expect(summary.textContent).toContain('50')
      expect(summary.textContent).toContain('25')
    })
  })

  it('handles analytics summary fetch errors gracefully', async () => {
    vi.mocked(getAnalyticsSummary).mockRejectedValue(new Error('Fetch failed'))

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )

    await waitFor(() => {
      expect(getAnalyticsSummary).toHaveBeenCalled()
    })

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to fetch analytics summary:',
      expect.any(Error)
    )

    consoleErrorSpy.mockRestore()
  })

  it('does not cause infinite re-renders', async () => {
    const renderCount = vi.fn()

    const CountingComponent = () => {
      renderCount()
      const analytics = useAnalyticsContext()
      return <div>{analytics.summary ? 'Loaded' : 'Loading'}</div>
    }

    vi.mocked(getAnalyticsSummary).mockResolvedValue({ totalEvents: 1 })

    render(
      <AnalyticsProvider>
        <CountingComponent />
      </AnalyticsProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Loaded')).toBeInTheDocument()
    })

    // Should render once initially, then once after fetching summary
    expect(renderCount).toHaveBeenCalledTimes(2)
  })

  it('throws error when useAnalytics is used outside provider', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const TestComponentWithoutProvider = () => {
      try {
        useAnalyticsContext()
        return <div>Should not render</div>
      } catch (error) {
        return <div>Error: {error.message}</div>
      }
    }

    render(<TestComponentWithoutProvider />)

    expect(screen.getByText(/useAnalyticsContext must be used within AnalyticsProvider/i)).toBeInTheDocument()

    consoleErrorSpy.mockRestore()
  })
})

// Add missing import for fireEvent
import { fireEvent } from '@testing-library/react'