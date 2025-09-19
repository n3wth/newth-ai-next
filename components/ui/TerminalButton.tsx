'use client'

import Link from 'next/link'
import { cn, componentVariants } from '@/lib/design-system'

interface TerminalButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function TerminalButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external = false,
}: TerminalButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(
    componentVariants.button[variant].base,
    componentVariants.button[variant].hover,
    sizeClasses[size],
    'uppercase tracking-wider',
    className
  )

  const content = (
    <>
      <span className="text-gray-600">[</span>
      {children}
      <span className="text-gray-600">]</span>
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
