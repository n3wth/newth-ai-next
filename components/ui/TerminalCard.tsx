'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { cn, componentVariants } from '@/lib/design-system'

interface TerminalCardProps {
  variant?: 'default' | 'elevated'
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export const TerminalCard = memo(function TerminalCard({
  variant = 'default',
  className,
  children,
  hover = true,
}: TerminalCardProps) {
  const classes = cn(
    componentVariants.card[variant].base,
    hover && componentVariants.card[variant].hover,
    className
  )

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
})
