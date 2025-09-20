'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { WarpBackgroundProps } from './WarpBackground'

// Dynamic import with SSR disabled since this is a client-side animation component
const WarpBackgroundDynamic = dynamic(
  () => import('./WarpBackground').then((mod) => ({ default: mod.WarpBackground })),
  {
    ssr: false,
    loading: () => <WarpBackgroundFallback />,
  }
)

// Subtle loading state that matches the background aesthetic
const WarpBackgroundFallback = () => (
  <div className="absolute inset-0 bg-black">
    {/* Minimal grid pattern while loading */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        background: `
          linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
    {/* Subtle loading indicator */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-violet-500/20 border-t-violet-500/40 rounded-full animate-spin" />
    </div>
  </div>
)

// Lazy-loaded WarpBackground with Suspense boundary
export const WarpBackgroundLazy: React.FC<WarpBackgroundProps> = (props) => {
  return (
    <Suspense fallback={<WarpBackgroundFallback />}>
      <WarpBackgroundDynamic {...props} />
    </Suspense>
  )
}

WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'
