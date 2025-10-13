'use client'

// TODO: Accessibility - Add aria-labels for screen readers
// TODO: Performance - ✓ Implemented lazy loading for WarpBackground component
// TODO: Animation - Add entrance animations for text elements
// TODO: Feature - Add typing animation for dynamic headlines
// TODO: Responsive - Optimize font sizes for more breakpoints

import { ArrowRight, ChevronDown } from 'lucide-react'
import { WarpBackground } from '@/components/WarpBackground'
import { HeroSectionProps } from '@/lib/types'
import { SimpleAnimatedButton } from '@/components/ui/SimpleAnimatedButton'

export function HeroSection({
  title = {
    line1: 'Building AI products',
    line2: 'that actually work.',
  },
  subtitle = 'Product manager at Google. Working on ML infrastructure and exploring ideas through side projects.',
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
    <section
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background layer */}
      <WarpBackground className="absolute inset-0" />

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <div className="space-y-6 md:space-y-8">
            {/* Main heading - visible immediately for LCP */}
            <h1
              id="hero-heading"
              className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-[-0.02em] leading-[1.05] text-white"
            >
              <span className="block">{title.line1}</span>
              <span className="block bg-gradient-to-br from-violet-200 via-purple-200 to-violet-400 bg-clip-text text-transparent">
                {title.line2}
              </span>
            </h1>

            {/* Subtitle - visible immediately */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-[1.6] font-light px-6">
              {subtitle}
            </p>

            {/* CTAs - visible immediately, interactive immediately */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              role="group"
              aria-label="Primary actions"
            >
              <SimpleAnimatedButton
                href={primaryCTA.href}
                variant="primary"
                aria-label="View my work and projects"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </SimpleAnimatedButton>
              <SimpleAnimatedButton
                href={secondaryCTA.href}
                variant="secondary"
                aria-label="Contact me"
              >
                {secondaryCTA.text}
              </SimpleAnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - CSS animation only */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll down for more content"
      >
        <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
