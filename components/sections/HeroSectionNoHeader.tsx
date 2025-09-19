'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { WarpBackgroundAlternatives } from '@/components/WarpBackgroundAlternatives'
import { HeroSectionProps } from '@/lib/types'

export function HeroSectionNoHeader({
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
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <WarpBackgroundAlternatives variant="neural" className="absolute inset-0">
        <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Minimal branding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-12"
              >
                <span className="text-sm font-light tracking-[0.3em] text-white/60 uppercase">
                  Newth.AI
                </span>
              </motion.div>

              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extralight tracking-tight leading-[1.05] text-white">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {title.line1}
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-light"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {title.line2}
                </motion.span>
              </h1>

              <motion.p
                className="mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <Link
                  href={primaryCTA.href}
                  className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]"
                >
                  <span className="relative z-10 flex items-center">
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link
                  href={secondaryCTA.href}
                  className="px-10 py-4 rounded-full text-sm font-medium text-white/80 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white"
                >
                  {secondaryCTA.text}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>

        {/* Minimal nav dots in corner */}
        <motion.nav
          className="absolute top-8 right-8 flex gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {['Projects', 'Work', 'GitHub'].map((item) => (
            <Link
              key={item}
              href={item === 'GitHub' ? 'https://github.com' : `#${item.toLowerCase()}`}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-150"
              title={item}
            />
          ))}
        </motion.nav>
      </WarpBackgroundAlternatives>
    </section>
  )
}
