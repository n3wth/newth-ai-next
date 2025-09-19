'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Subtle gradient orb */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Clean status indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Currently at Google</span>
        </motion.div>

        {/* Clean, impactful headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-white/90">I build AI</span>
          <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            that ships.
          </span>
        </h1>

        {/* Refined description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Engineering ML infrastructure at scale. Previously Meta, Microsoft, Covariant.
          <br />
          <span className="text-gray-500">99.99% uptime. Billions served.</span>
        </p>

        {/* Clean CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#work"
            className="group relative px-8 py-4 bg-white text-black font-medium rounded-xl transition-all hover:shadow-2xl hover:scale-105 min-w-[180px]"
          >
            <span className="relative z-10">View Work</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-medium text-white border border-white/20 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/30 min-w-[180px]"
          >
            Contact
          </Link>
        </div>

        {/* Subtle ASCII accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 font-mono text-[8px] text-violet-500/10 select-none pointer-events-none"
        >
          <pre>NEWTH.AI</pre>
        </motion.div>
      </motion.div>
    </section>
  )
}
