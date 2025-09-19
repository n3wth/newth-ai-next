'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

interface LazyMotionProviderProps {
  children: React.ReactNode
}

export function LazyMotionProvider({ children }: LazyMotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
