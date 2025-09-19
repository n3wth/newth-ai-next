'use client'

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  const isDemoPage = pathname?.startsWith('/demos/')

  if (isDemoPage) return null

  return <Footer />
}
