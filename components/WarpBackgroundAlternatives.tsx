'use client'

import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
import {
  NeuralNetworkBackground,
  CodeRainBackground,
  OrbitingAtomsBackground,
  DataFlowBackground,
  WaveformBackground,
  GlitchBackground,
  ParticleFieldBackground,
} from './backgrounds'

export type WarpVariant =
  | 'neural'
  | 'coderain'
  | 'atoms'
  | 'dataflow'
  | 'waveform'
  | 'glitch'
  | 'particle'

export interface WarpBackgroundAlternativesProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  variant?: WarpVariant
}

export const WarpBackgroundAlternatives: React.FC<WarpBackgroundAlternativesProps> = React.memo(
  ({ children, className, variant = 'neural', ...props }) => {
    const backgrounds = {
      neural: <NeuralNetworkBackground />,
      coderain: <CodeRainBackground />,
      atoms: <OrbitingAtomsBackground />,
      dataflow: <DataFlowBackground />,
      waveform: <WaveformBackground />,
      glitch: <GlitchBackground />,
      particle: <ParticleFieldBackground />,
    }

    return (
      <div className={cn('relative overflow-hidden', className)} {...props}>
        {/* Base black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Selected background variant */}
        {backgrounds[variant]}

        {/* Optional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

WarpBackgroundAlternatives.displayName = 'WarpBackgroundAlternatives'
