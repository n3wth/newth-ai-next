'use client'

import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WarpGridProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  beamsPerSide?: number
  beamSize?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
}

export const WarpGrid = ({
  children,
  className,
  containerClassName,
  beamsPerSide = 8,
  beamSize = 14,
  beamDelayMax = 8,
  beamDelayMin = 2,
  beamDuration = 15,
}: WarpGridProps) => {
  const generateBeams = useCallback(() => {
    const beams = []
    const cellsPerSide = Math.floor(100 / beamSize)
    const step = cellsPerSide / beamsPerSide

    for (let i = 0; i < beamsPerSide; i++) {
      const x = Math.floor(i * step)
      const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin
      beams.push({ x, delay })
    }
    return beams
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin])

  const [beams] = useState(() => ({
    top: generateBeams(),
    bottom: generateBeams(),
    left: generateBeams(),
    right: generateBeams(),
  }))

  const Beam = ({
    width,
    x,
    delay,
    duration,
    className: beamClassName,
  }: {
    width: number
    x: number
    delay: number
    duration: number
    className?: string
  }) => {
    const hue = 250 + Math.floor(Math.random() * 60) // Purple-ish hues
    const ar = Math.floor(Math.random() * 10) + 1

    return (
      <motion.div
        style={
          {
            '--x': `${x}%`,
            '--width': `${width}%`,
            '--aspect-ratio': `${ar}`,
            '--background': `linear-gradient(hsl(${hue} 60% 50% / 0.2), transparent)`,
          } as React.CSSProperties
        }
        className={cn('absolute [background:var(--background)]', beamClassName)}
        initial={{ y: '100cqmax', x: '-50%' }}
        animate={{ y: '-100%', x: '-50%' }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    )
  }

  const BeamHorizontal = ({
    height,
    y,
    delay,
    duration,
    className: beamClassName,
  }: {
    height: number
    y: number
    delay: number
    duration: number
    className?: string
  }) => {
    const hue = 250 + Math.floor(Math.random() * 60)
    const ar = Math.floor(Math.random() * 10) + 1

    return (
      <motion.div
        style={
          {
            '--y': `${y}%`,
            '--height': `${height}%`,
            '--aspect-ratio': `${ar}`,
            '--background': `linear-gradient(to right, hsl(${hue} 60% 50% / 0.2), transparent)`,
          } as React.CSSProperties
        }
        className={cn('absolute [background:var(--background)]', beamClassName)}
        initial={{ x: '-100%', y: 'var(--y)' }}
        animate={{ x: '100cqmax', y: 'var(--y)' }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    )
  }

  return (
    <div className={cn('relative w-full h-full overflow-hidden', containerClassName)}>
      <div className={cn('absolute inset-0', className)}>
        {/* Top beams */}
        {beams.top.map((beam, i) => (
          <Beam
            key={`top-${i}`}
            width={beamSize}
            x={beam.x}
            delay={beam.delay}
            duration={beamDuration}
            className="left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [width:var(--width)]"
          />
        ))}

        {/* Bottom beams */}
        {beams.bottom.map((beam, i) => (
          <Beam
            key={`bottom-${i}`}
            width={beamSize}
            x={beam.x}
            delay={beam.delay}
            duration={beamDuration}
            className="left-[var(--x)] bottom-0 [aspect-ratio:1/var(--aspect-ratio)] [width:var(--width)] rotate-180"
          />
        ))}

        {/* Left beams */}
        {beams.left.map((beam, i) => (
          <BeamHorizontal
            key={`left-${i}`}
            height={beamSize}
            y={beam.x}
            delay={beam.delay}
            duration={beamDuration}
            className="left-0 top-[var(--y)] h-[var(--height)] [aspect-ratio:var(--aspect-ratio)/1]"
          />
        ))}

        {/* Right beams */}
        {beams.right.map((beam, i) => (
          <BeamHorizontal
            key={`right-${i}`}
            height={beamSize}
            y={beam.x}
            delay={beam.delay}
            duration={beamDuration}
            className="right-0 top-[var(--y)] h-[var(--height)] [aspect-ratio:var(--aspect-ratio)/1] scale-x-[-1]"
          />
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {children && (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}
