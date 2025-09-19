'use client'

import React from 'react'
import { asciiArt } from '@/lib/design-system'

interface TerminalHeadingProps {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
  prompt?: boolean
  className?: string
}

export function TerminalHeading({
  level = 2,
  children,
  prompt = true,
  className = ''
}: TerminalHeadingProps) {
  const sizeClasses = {
    1: 'text-5xl sm:text-6xl lg:text-7xl',
    2: 'text-4xl sm:text-5xl',
    3: 'text-2xl sm:text-3xl',
    4: 'text-xl sm:text-2xl'
  }

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag className={`font-mono font-bold ${sizeClasses[level]} ${className}`}>
      {prompt && (
        <span className="text-violet-400">
          {level === 1 ? asciiArt.prompts.terminal : asciiArt.prompts.arrow}{' '}
        </span>
      )}
      {children}
    </Tag>
  )
}