'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { WarpBackground } from '@/components/WarpBackground'
import { HeroSectionProps } from '@/lib/types'
import { SimpleAnimatedButton } from '@/components/ui/SimpleAnimatedButton'

export function HeroSection({
  title = {
    line1: 'I ship AI products',
    line2: 'at massive scale.',
  },
  subtitle = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
  primaryCTA = {
    text: 'See My Work',
    href: '#projects',
  },
  secondaryCTA = {
    text: 'Get in Touch',
    href: '/contact',
  },
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background layer */}
      <WarpBackground className="absolute inset-0" />

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-2xl mx-auto text-center"
          style={{
            padding: '3rem',
            background:
              'radial-gradient(circle at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
          }}
        >
          <div className="space-y-6">
            {/* Main heading - visible immediately for LCP */}
            <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-tighter leading-[0.95] text-white font-sans">
              <span className="block">{title.line1}</span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black">
                {title.line2}
              </span>
            </h1>

            {/* Subtitle - visible immediately */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
              {subtitle}
            </p>

            {/* CTAs - visible immediately, interactive immediately */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <SimpleAnimatedButton href={primaryCTA.href} variant="primary">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </SimpleAnimatedButton>
              <SimpleAnimatedButton href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </SimpleAnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - CSS animation only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" />
      </div>
    </section>
  )
}
