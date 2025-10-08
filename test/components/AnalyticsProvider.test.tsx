import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AnalyticsProvider, useAnalyticsContext } from '@/components/AnalyticsProvider'

vi.mock('@vercel/analytics', () => ({
  track: vi.fn(),
}))

// Test component that uses the analytics context
const TestComponent = () => {
  const analytics = useAnalyticsContext()

  return (
    <div>
      <button
        onClick={() => analytics.trackEvent({ name: 'test_event', properties: { data: 'test' } })}
      >
        Track Event
      </button>
      <button onClick={() => analytics.trackProjectClick('project-1', 'Test Project', 'visit', 0)}>
        Track Project Click
      </button>
      <div data-testid="session-id">{analytics.sessionId}</div>
      <div data-testid="tracking-allowed">{String(analytics.isTrackingAllowed)}</div>
      <div data-testid="insights">{JSON.stringify(analytics.getInsights())}</div>
    </div>
  )
}

describe('AnalyticsProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('provides analytics context to children', () => {
    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <TestComponent />
      </AnalyticsProvider>
    )

    expect(screen.getByRole('button', { name: /Track Event/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Track Project Click/i })).toBeInTheDocument()
  })

  it('generates a session ID on mount', () => {
    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <TestComponent />
      </AnalyticsProvider>
    )

    const sessionId = screen.getByTestId('session-id').textContent
    expect(sessionId).toMatch(/^session_\d+_[a-z0-9]+$/)
  })

  it('tracks events when trackEvent is called', async () => {
    const { track } = await import('@vercel/analytics')

    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <TestComponent />
      </AnalyticsProvider>
    )

    const trackButton = screen.getByRole('button', { name: /Track Event/i })
    fireEvent.click(trackButton)

    await waitFor(() => {
      expect(track).toHaveBeenCalledWith('test_event', expect.objectContaining({ data: 'test' }))
    })
  })

  it('tracks project clicks when trackProjectClick is called', async () => {
    const { track } = await import('@vercel/analytics')

    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <TestComponent />
      </AnalyticsProvider>
    )

    const projectButton = screen.getByRole('button', { name: /Track Project Click/i })
    fireEvent.click(projectButton)

    await waitFor(() => {
      expect(track).toHaveBeenCalledWith(
        'project_click',
        expect.objectContaining({
          projectId: 'project-1',
          projectTitle: 'Test Project',
          linkType: 'visit',
          position: 0,
        })
      )
    })
  })

  it('generates insights from tracked events', async () => {
    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <TestComponent />
      </AnalyticsProvider>
    )

    const projectButton = screen.getByRole('button', { name: /Track Project Click/i })
    fireEvent.click(projectButton)

    await waitFor(() => {
      const insightsElement = screen.getByTestId('insights')
      const insights = JSON.parse(insightsElement.textContent || '{}')
      expect(insights).toHaveProperty('totalEvents')
      expect(insights).toHaveProperty('projectClicks')
      expect(insights).toHaveProperty('topProjects')
    })
  })

  it('does not cause infinite re-renders', async () => {
    const renderCount = vi.fn()

    const CountingComponent = () => {
      renderCount()
      const analytics = useAnalyticsContext()
      return <div>{analytics.sessionId ? 'Loaded' : 'Loading'}</div>
    }

    render(
      <AnalyticsProvider enableConsentBanner={false}>
        <CountingComponent />
      </AnalyticsProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Loaded')).toBeInTheDocument()
    })

    // Should render a reasonable number of times (not infinitely)
    expect(renderCount.mock.calls.length).toBeLessThan(10)
  })

  it('throws error when useAnalytics is used outside provider', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const TestComponentWithoutProvider = () => {
      useAnalyticsContext()
      return <div>Should not render</div>
    }

    expect(() => render(<TestComponentWithoutProvider />)).toThrow(
      'useAnalyticsContext must be used within an AnalyticsProvider'
    )

    consoleErrorSpy.mockRestore()
  })
})
