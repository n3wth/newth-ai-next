import { useState, useRef } from 'react'
import { useAnimationFrame, useIntersectionObserver } from '@/lib/hooks/useAnimationFrame'

interface AnimatedLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'glitch' | 'wave' | 'fade'
}

export function AnimatedLogoOptimized({
  className = '',
  size = 'md',
}: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(containerRef)
  const [glitchActive, setGlitchActive] = useState(false)

  // Only animate when visible - massive performance improvement
  useAnimationFrame(
    () => {
      if (isVisible) {
        // Glitch effect every ~3 seconds
        if (Math.random() < 0.001) {
          setGlitchActive(true)
          setTimeout(() => setGlitchActive(false), 200)
        }
      }
    },
    isVisible ? 50 : null, // null stops animation
    [isVisible]
  )

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  }

  return (
    <div
      ref={containerRef}
      className={`font-mono font-bold ${sizeClasses[size]} ${className}`}
    >
      <span className={glitchActive ? 'animate-pulse text-purple-500' : 'text-white'}>
        newth
      </span>
      <span className="text-purple-500">.</span>
      <span className={glitchActive ? 'animate-pulse text-green-400' : 'text-green-400'}>
        ai
      </span>
    </div>
  )
}
