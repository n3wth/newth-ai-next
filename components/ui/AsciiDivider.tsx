'use client'

import { asciiArt } from '@/lib/design-system'

interface AsciiDividerProps {
  type?: 'horizontal' | 'dots' | 'dashed'
  className?: string
}

export function AsciiDivider({ type = 'horizontal', className = '' }: AsciiDividerProps) {
  return (
    <div
      className={`text-center py-12 font-mono text-violet-500/30 text-xs select-none ${className}`}
    >
      <pre>{asciiArt.dividers[type]}</pre>
    </div>
  )
}
