'use client'

import dynamic from 'next/dynamic'

// Only load DevTools in development, completely excluded from production bundle
const DevTools =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('./DevTools').then((mod) => mod.DevTools), {
        ssr: false,
        loading: () => null,
      })
    : () => null

export function DevToolsWrapper() {
  return <DevTools />
}
