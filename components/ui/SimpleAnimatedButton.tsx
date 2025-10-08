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
    primary:
      'bg-white text-black hover:bg-gray-100 active:bg-gray-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20',
    secondary:
      'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30 active:bg-white/15 backdrop-blur-sm',
  }

  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-4
    text-base font-semibold
    rounded-xl
    transition-all duration-300
    select-none
    ${variants[variant]}
    ${className}
  `

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
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
