'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { WarpBackground } from '@/components/WarpBackground'
import { HeroSectionProps } from '@/lib/types'

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
    <section className="relative min-h-screen bg-black text-white overflow-hidden -mt-20">
      <WarpBackground
        beamsPerSide={5}
        beamSize={6}
        perspective={300}
        beamDelayMax={10}
        beamDelayMin={0}
        beamDuration={5}
        gridColor="transparent"
        className="absolute inset-0"
      >
        <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
          <div
            className="relative z-10 max-w-2xl mx-auto text-center p-8 sm:p-10 lg:p-12"
            style={{
              background:
                'radial-gradient(circle at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight leading-[1.1] text-white font-sans">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {title.line1}
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  {title.line2}
                </motion.span>
              </h1>

              <motion.p
                className="mx-auto max-w-xl text-base text-gray-400 font-normal leading-relaxed font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </WarpBackground>
    </section>
  )
}
