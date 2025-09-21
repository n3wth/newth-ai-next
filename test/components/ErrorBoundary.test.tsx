import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ErrorBoundary from '@/components/ErrorBoundary'

describe('ErrorBoundary', () => {
  const mockReset = vi.fn()
  const testError = new Error('Test error')

  it('renders error UI correctly', () => {
    render(<ErrorBoundary error={testError} reset={mockReset} />)

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Try again/i })).toBeInTheDocument()
  })

  it('displays error digest when present', () => {
    const errorWithDigest = { ...testError, digest: 'ERROR_123' }
    render(<ErrorBoundary error={errorWithDigest} reset={mockReset} />)

    expect(screen.getByText('Error ID: ERROR_123')).toBeInTheDocument()
  })

  it('calls reset when Try again button is clicked', () => {
    render(<ErrorBoundary error={testError} reset={mockReset} />)

    const button = screen.getByRole('button', { name: /Try again/i })
    fireEvent.click(button)

    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('logs error to console', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<ErrorBoundary error={testError} reset={mockReset} />)

    expect(consoleErrorSpy).toHaveBeenCalledWith('Component error:', testError)

    consoleErrorSpy.mockRestore()
  })
})