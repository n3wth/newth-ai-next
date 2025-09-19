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

// Memoized warp line component for performance
const WarpLine = React.memo(({ angle, delay }: { angle: number; delay: number }) => {
  const colors = ['#a855f7', '#22d3ee', '#ec4899', '#4ade80', '#fb923c']
  const color = colors[Math.floor((angle * 5) % colors.length)]

  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={{
        left: '50%',
        top: '50%',
        width: '150px',
        height: '2px',
        transformOrigin: '0 50%',
        transform: `rotate(${(angle * 180) / Math.PI}deg)`,
      }}
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      animate={{
        scaleX: [0, 2, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
          boxShadow: `0 0 15px ${color}`,
        }}
      />
    </motion.div>
  )
})

WarpLine.displayName = 'WarpLine'

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
          x: 5 + ((i * 11) % 90),
          y: 5 + ((i * 19) % 90),
          delay: (i * 0.2) % 6, // Shorter delays, max 6 seconds
          size: 6 + (i % 3) * 2,
          color: colors[i % colors.length],
        })
      }
      return cubeArray
    }, [])

    // Generate warp lines
    const warpLines = useMemo(() => {
      const lines = []
      // Reduced number of lines for better performance
      for (let i = 0; i < 6; i++) {
        lines.push({
          id: i,
          angle: (i / 8) * Math.PI * 2,
          delay: (i * 0.2) % 2,
        })
      }
      return lines
    }, [])

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

          {/* Warp speed lines from center */}
          <div className="absolute inset-0">
            {warpLines.map((line) => (
              <WarpLine key={`line-${line.id}`} angle={line.angle} delay={line.delay} />
            ))}
          </div>

          {/* Static center glow - removed animation for performance */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

WarpBackground.displayName = 'WarpBackground'
