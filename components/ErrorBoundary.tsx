'use client'

import { useEffect } from 'react'

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log to error reporting service
    console.error('Component error:', error)
  }, [error])

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
        <p className="text-gray-600 max-w-md">
          We encountered an error while loading this content. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
        >
          Try again
        </button>
        {error?.digest && <p className="text-xs text-gray-400">Error ID: {error.digest}</p>}
      </div>
    </div>
  )
}
