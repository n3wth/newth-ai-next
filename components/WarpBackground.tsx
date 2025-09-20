'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { HTMLAttributes, useMemo } from 'react'

export interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

// Memoized flat block component for performance
const FlatBlock = React.memo(
  ({
    x,
    y,
    delay,
    size,
    color,
  }: {
    x: number
    y: number
    delay: number
    size: number
    color: string
  }) => {
    return (
      <motion.div
        className="absolute pointer-events-none will-change-transform"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
          z: '-500px',
        }}
        animate={{
          z: ['-500px', '1000px'],
          scale: [0.5, 6],
          opacity: [0, 0.6, 0.6, 0, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: delay,
          ease: 'linear',
          times: [0, 0.1, 0.7, 0.85, 1], // Visible much sooner (10% instead of 30%)
        }}
      />
    )
  }
)

FlatBlock.displayName = 'FlatBlock'

export const WarpBackground: React.FC<WarpBackgroundProps> = React.memo(
  ({ children, className, ...props }) => {
    // Generate 3D cubes at different positions
    const cubes = useMemo(() => {
      const cubeArray = []
      const colors = ['#10b981', '#8b5cf6', '#3b82f6', '#ef4444', '#f59e0b', '#ec4899', '#06b6d4']

      // Reduced number of cubes for better performance
      for (let i = 0; i < 20; i++) {
        cubeArray.push({
          id: i,
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          delay: Math.random() * 6, // Random delays up to 6 seconds
          size: 6 + Math.floor(Math.random() * 3) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      return cubeArray
    }, [])

    // Warp lines removed - caused distracting horizontal pulsing

    return (
      <div className={cn('relative overflow-hidden', className)} {...props}>
        {/* Base black background */}
        <div className="absolute inset-0 bg-black" />

        {/* 3D perspective container with GPU acceleration */}
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            perspective: '500px',
            perspectiveOrigin: '50% 50%',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Static grid floor effect - no animation for performance */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
              transform: 'rotateX(85deg) translateZ(-300px)',
              transformOrigin: 'center bottom',
              maskImage:
                'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 50%, transparent)',
            }}
          />

          {/* Flat blocks flowing toward viewer */}
          {cubes.map((cube) => (
            <FlatBlock
              key={`cube-${cube.id}`}
              x={cube.x}
              y={cube.y}
              delay={cube.delay}
              size={cube.size}
              color={cube.color}
            />
          ))}

          {/* Warp speed lines removed - was distracting */}

          {/* Center glow removed - was distracting */}
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

WarpBackground.displayName = 'WarpBackground'
