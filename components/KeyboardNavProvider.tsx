'use client'

import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation'

export function KeyboardNavProvider({ children }: { children: React.ReactNode }) {
  useKeyboardNavigation()
  return <>{children}</>
}