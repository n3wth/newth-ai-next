'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { WarpBackground } from '@/components/WarpBackground'

interface HeroSectionSSRProps {
  title?: {
    line1: string
    line2: string
  }
  subtitle?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function HeroSectionSSR({
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
}: HeroSectionSSRProps) {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden -mt-20">
      {/* Animated background */}
      <WarpBackground className="absolute inset-0">
        <div />
      </WarpBackground>

      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div
          className="relative z-10 max-w-2xl mx-auto text-center p-8 sm:p-10 lg:p-12"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
          }}
        >
          <div className="space-y-6">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-normal tracking-tight leading-[1.1] text-white font-sans">
              <span className="block">{title.line1}</span>
              <span className="block font-medium">{title.line2}</span>
            </h1>

            <p className="mx-auto max-w-xl text-base text-gray-300 font-normal leading-relaxed font-sans">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)] min-w-[180px] font-sans"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white/90 border border-white/20 bg-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] min-w-[180px] font-sans"
              >
                {secondaryCTA.text}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60">
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  )
}
