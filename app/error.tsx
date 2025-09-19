'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-red-500 mb-4">500</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              An unexpected error occurred. Please try again or contact support if the problem
              persists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
