'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
}

export function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: AnimatedButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse position tracking for gradient effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Create gradient that follows mouse
  const background = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    )
  `

  const variants = {
    primary: {
      base: 'bg-white text-black font-semibold',
      hover: 'hover:bg-gray-100',
    },
    secondary: {
      base: 'bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20',
      hover: 'hover:bg-white/20 hover:border-white/30',
    },
    ghost: {
      base: 'bg-transparent text-white/70',
      hover: 'hover:text-white hover:bg-white/5',
    },
  }

  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3
    text-sm
    rounded-full
    transition-all duration-300
    relative overflow-hidden
    ${variants[variant].base}
    ${variants[variant].hover}
    ${className}
  `

  const content = (
    <>
      {/* Liquid blob effect for primary buttons */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100"
          style={{ background }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Drawing border effect for secondary buttons */}
      {variant === 'secondary' && (
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial="hidden"
          whileHover="visible"
        >
          <motion.rect
            width="100%"
            height="100%"
            fill="none"
            rx="9999"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="0 1"
            variants={{
              hidden: {
                strokeDasharray: '0 400',
                strokeDashoffset: 0,
              },
              visible: {
                strokeDasharray: '400 0',
                strokeDashoffset: -400,
                transition: {
                  duration: 1,
                  ease: 'linear',
                },
              },
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        whileTap={{
          scale: [0, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20" />
      </motion.div>

      {/* Button content */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.span>
    </>
  )

  const MotionComponent = motion.div

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <MotionComponent
            ref={ref}
            className="relative w-full h-full flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {content}
          </MotionComponent>
        </motion.a>
      )
    }

    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={baseClasses}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <MotionComponent
            ref={ref}
            className="relative w-full h-full flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {content}
          </MotionComponent>
        </motion.a>
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <MotionComponent
        ref={ref}
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </MotionComponent>
    </motion.button>
  )
}
