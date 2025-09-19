import { HeroSectionNoHeader } from '@/components/sections/HeroSectionNoHeader'
import { generateSEO } from '@/lib/metadata'

export const metadata = generateSEO({
  title: 'Hero Section Demo',
  description:
    'Preview the newth.ai hero experience without navigation chrome—gradient background, motion, and focused CTAs.',
  path: '/demos/hero-no-header',
})

export default function HeroNoHeaderPage() {
  return <HeroSectionNoHeader />
}
