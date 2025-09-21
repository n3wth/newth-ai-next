import { lazy, Suspense } from 'react'
import { cn } from '@/lib/utils'

// Lazy load heavy background components
const WarpBackground = lazy(() => import('../WarpBackground').then(m => ({ default: m.WarpBackground })))
const GlitchBackground = lazy(() => import('./GlitchBackground').then(m => ({ default: m.GlitchBackground })))
const CodeRainBackground = lazy(() => import('./CodeRainBackground').then(m => ({ default: m.CodeRainBackground })))

export interface OptimizedBackgroundProps {
  type?: 'warp' | 'glitch' | 'coderain' | 'simple'
  className?: string
  children?: React.ReactNode
}

// Simple fallback with CSS-only animations
const SimpleFallback = ({ className }: { className?: string }) => (
  <div className={cn('absolute inset-0 bg-black', className)}>
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background: `
          linear-gradient(45deg, #1a1a2e 25%, transparent 25%),
          linear-gradient(-45deg, #1a1a2e 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #1a1a2e 75%),
          linear-gradient(-45deg, transparent 75%, #1a1a2e 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        animation: 'backgroundScroll 20s linear infinite'
      }}
    />
  </div>
)

export function OptimizedBackground({
  type = 'simple',
  className,
  children
}: OptimizedBackgroundProps) {
  // Use simple background on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  if (type === 'simple' || isMobile) {
    return (
      <div className={cn('relative', className)}>
        <SimpleFallback />
        {children}
      </div>
    )
  }

  const BackgroundComponent = {
    warp: WarpBackground,
    glitch: GlitchBackground,
    coderain: CodeRainBackground,
    simple: SimpleFallback
  }[type]

  return (
    <Suspense fallback={<SimpleFallback className={className} />}>
      <BackgroundComponent className={className}>
        {children}
      </BackgroundComponent>
    </Suspense>
  )
}
