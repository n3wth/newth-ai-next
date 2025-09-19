'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AsciiWaveProps {
  className?: string
  speed?: number // Animation speed in seconds
  variant?: 'subtle' | 'prominent' | 'gradient'
}

export function AsciiWave({ className, speed = 3, variant = 'subtle' }: AsciiWaveProps) {
  const [frame, setFrame] = useState(0)

  // Advanced wave patterns inspired by OpenAI's aesthetic
  const wavePatterns = [
    "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁",
    "▂▃▄▅▆▇█▇▆▅▄▃▂▁▂",
    "▃▄▅▆▇█▇▆▅▄▃▂▁▂▃",
    "▄▅▆▇█▇▆▅▄▃▂▁▂▃▄",
    "▅▆▇█▇▆▅▄▃▂▁▂▃▄▅",
    "▆▇█▇▆▅▄▃▂▁▂▃▄▅▆",
    "▇█▇▆▅▄▃▂▁▂▃▄▅▆▇",
    "█▇▆▅▄▃▂▁▂▃▄▅▆▇█",
    "▇▆▅▄▃▂▁▂▃▄▅▆▇█▇",
    "▆▅▄▃▂▁▂▃▄▅▆▇█▇▆",
    "▅▄▃▂▁▂▃▄▅▆▇█▇▆▅",
    "▄▃▂▁▂▃▄▅▆▇█▇▆▅▄",
    "▃▂▁▂▃▄▅▆▇█▇▆▅▄▃",
    "▂▁▂▃▄▅▆▇█▇▆▅▄▃▂",
    "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁",
  ]

  // Animated cycling through wave patterns for smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % wavePatterns.length)
    }, (speed * 1000) / wavePatterns.length)

    return () => clearInterval(interval)
  }, [speed, wavePatterns.length])

  const getVariantStyles = () => {
    switch (variant) {
      case 'prominent':
        return 'text-white opacity-100 text-2xl'
      case 'gradient':
        return 'bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-xl'
      case 'subtle':
      default:
        return 'text-gray-400 opacity-40 text-sm'
    }
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Multiple wave layers for depth effect */}
      <div className="relative">
        {/* Background wave layer */}
        <motion.div
          className={cn(
            'font-mono whitespace-pre select-none',
            getVariantStyles(),
            variant === 'gradient' ? '' : 'opacity-20'
          )}
          animate={{
            opacity: variant === 'gradient' ? [0.6, 1, 0.6] : [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: speed * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {wavePatterns[(frame + 3) % wavePatterns.length]}
        </motion.div>

        {/* Middle wave layer */}
        <motion.div
          className={cn(
            'font-mono whitespace-pre select-none absolute top-0 left-0',
            getVariantStyles()
          )}
          animate={{
            x: [-20, 20, -20],
            opacity: variant === 'gradient' ? [0.8, 1, 0.8] : [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {wavePatterns[frame]}
        </motion.div>

        {/* Foreground wave layer with blur effect */}
        <motion.div
          className={cn(
            'font-mono whitespace-pre select-none absolute top-0 left-0 blur-[0.5px]',
            getVariantStyles(),
            variant === 'gradient' ? 'mix-blend-screen' : ''
          )}
          animate={{
            x: [20, -20, 20],
            opacity: variant === 'gradient' ? [1, 0.8, 1] : [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: speed * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {wavePatterns[(frame + 7) % wavePatterns.length]}
        </motion.div>
      </div>

      {/* Subtle glow effect for premium feel */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
      )}
    </div>
  )
}

// Animated wave border component for sections
export function AsciiWaveBorder({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <motion.div
        className="flex"
        animate={{ x: [0, -100, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Seamless repeating pattern */}
        <span className="font-mono text-gray-800 whitespace-pre text-xs">
          ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
        </span>
        <span className="font-mono text-gray-800 whitespace-pre text-xs">
          ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
        </span>
      </motion.div>
    </div>
  )
}

// Static decorative wave pattern
export function AsciiWavePattern({ className }: { className?: string }) {
  return (
    <div className={cn('font-mono text-gray-800 select-none', className)}>
      <div className="opacity-10 text-xs leading-tight">
        {"▁▂▃▄▅▆▇█▇▆▅▄▃▂▁"}
      </div>
      <div className="opacity-15 text-xs leading-tight">
        {"▂▃▄▅▆▇█▇▆▅▄▃▂▁▂"}
      </div>
      <div className="opacity-20 text-xs leading-tight">
        {"▃▄▅▆▇█▇▆▅▄▃▂▁▂▃"}
      </div>
      <div className="opacity-15 text-xs leading-tight">
        {"▄▅▆▇█▇▆▅▄▃▂▁▂▃▄"}
      </div>
      <div className="opacity-10 text-xs leading-tight">
        {"▅▆▇█▇▆▅▄▃▂▁▂▃▄▅"}
      </div>
    </div>
  )
}