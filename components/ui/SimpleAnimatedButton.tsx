'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SimpleAnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function SimpleAnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
}: SimpleAnimatedButtonProps) {
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
  }

  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3
    text-sm font-semibold
    rounded-full
    transition-all duration-300
    select-none
    ${variants[variant]}
    ${className}
  `

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  )
}
