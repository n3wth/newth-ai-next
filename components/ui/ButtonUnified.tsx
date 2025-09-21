import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'terminal'
  size?: 'sm' | 'md' | 'lg'
  animation?: 'none' | 'simple' | 'advanced'
  href?: string
  external?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variants = {
  primary: 'bg-white text-black hover:scale-[1.02]',
  secondary: 'bg-transparent text-white/90 border border-white/20',
  ghost: 'bg-transparent text-white/70 hover:text-white',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  terminal: 'bg-green-500/20 text-green-400 border border-green-500/50 before:content-["["] after:content-["]"]'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    animation = 'simple',
    href,
    external,
    loading,
    icon,
    iconPosition = 'right',
    className,
    children,
    disabled,
    ...props
  }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
      variants[variant],
      sizes[size],
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )

    const content = (
      <>
        {loading && <span className="mr-2 animate-spin">⟳</span>}
        {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    )

    const buttonElement = (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {content}
      </button>
    )

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        )
      }
      return <Link href={href} className={classes}>{content}</Link>
    }

    // Add animation wrapper only if requested
    if (animation === 'advanced') {
      return (
        <LazyMotion features={domAnimation}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {buttonElement}
          </motion.div>
        </LazyMotion>
      )
    }

    return buttonElement
  }
)

Button.displayName = 'Button'
export default Button
