import { ReactNode } from 'react'
import { WarpBackgroundLazy } from '../WarpBackgroundLazy'
import { useIntersectionObserver } from '@/lib/hooks/useAnimationFrame'
import { useRef } from 'react'

interface HeroSectionProps {
  variant?: 'default' | 'optimized' | 'ssr' | 'no-header'
  background?: 'warp' | 'simple' | 'none'
  title?: {
    line1: string
    line2?: string
  }
  subtitle?: string
  children?: ReactNode
}

export function HeroSection({
  background = 'warp',
  title = { line1: 'Welcome', line2: 'to the Future' },
  subtitle,
  children
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)

  // Only render heavy backgrounds when visible
  const renderBackground = () => {
    if (!isVisible && background === 'warp') return null

    switch (background) {
      case 'warp':
        return <WarpBackgroundLazy />
      case 'simple':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black" />
        )
      default:
        return null
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {renderBackground()}

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">{title.line1}</span>
          {title.line2 && (
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {title.line2}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
