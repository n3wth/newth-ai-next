'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
            <h2 className="text-xl font-semibold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              An unexpected error occurred. Please refresh the page or try again later.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
