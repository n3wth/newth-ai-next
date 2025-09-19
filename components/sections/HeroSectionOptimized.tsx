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
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-6 sm:px-8 lg:px-12">
        <div
          className="w-full max-w-4xl mx-auto text-center"
          style={{
            padding: '3rem 1rem',
            background:
              'radial-gradient(circle at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
          }}
        >
          <div className="space-y-6">
            {/* Main heading - visible immediately for LCP */}
            <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-medium tracking-normal leading-[1.15] sm:leading-[1.1] md:leading-[1.05] text-white font-sans">
              <span className="block">{title.line1}</span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                {title.line2}
              </span>
            </h1>

            {/* Subtitle - visible immediately */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans font-light">
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
