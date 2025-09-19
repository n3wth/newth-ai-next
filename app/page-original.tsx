'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProjectCard } from '@/components/ProjectCard'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { projects, getFeaturedProjects, getActiveProjects } from '@/lib/projects'
import { ArrowRight, Zap, Code, Database, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'active'>('featured')
  const featuredProjects = getFeaturedProjects()
  const activeProjects = getActiveProjects()

  const displayProjects = filter === 'featured' ? featuredProjects : filter === 'active' ? activeProjects : projects

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section - AI Aesthetic */}
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-20 pt-32">
          {/* Animated gradient background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,100,255,0.08),transparent_50%)] animate-pulse"
              style={{ animationDuration: '8s' }}
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,150,255,0.08),transparent_50%)] animate-pulse"
              style={{ animationDuration: '10s', animationDelay: '1s' }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 inline-block"
              >
                <div className="glass-heavy rounded-full px-6 py-3">
                  <span className="gradient-text text-sm font-medium tracking-wider uppercase">AI-Crafted Portfolio</span>
                </div>
              </motion.div>

              <h1 className="font-serif font-normal tracking-tighter mb-10">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white block text-6xl sm:text-8xl lg:text-9xl leading-[0.85] mb-4"
                >
                  Oliver<span className="text-accent">.</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white block text-6xl sm:text-8xl lg:text-9xl leading-[0.85]"
                >
                  Newth<span className="text-primary">.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-2xl text-lg text-white/80 mb-10 font-light leading-relaxed"
              >
                Creating intelligent tools that enhance developer productivity.
                From AI memory systems to workflow automation, exploring the intersection of code and artificial intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-white text-black transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-light text-white">15+</div>
                  <div className="text-sm text-white/60">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white">5+</div>
                  <div className="text-sm text-white/60">AI Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white">100%</div>
                  <div className="text-sm text-white/60">Open Source</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white">∞</div>
                  <div className="text-sm text-white/60">Possibilities</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <section className="py-32 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                Recent Projects
              </h2>
              <p className="text-gray-400 mb-8">
                Latest tools and experiments in AI-powered development
              </p>

              {/* Filter buttons */}
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setFilter('featured')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === 'featured'
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setFilter('active')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === 'active'
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-32 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                Tech Stack
              </h2>
              <p className="text-gray-400">
                Technologies I work with daily
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Code className="h-6 w-6" />, name: 'TypeScript', desc: 'Type-safe development' },
                { icon: <Zap className="h-6 w-6" />, name: 'Next.js', desc: 'React framework' },
                { icon: <Database className="h-6 w-6" />, name: 'Redis', desc: 'In-memory caching' },
                { icon: <Sparkles className="h-6 w-6" />, name: 'AI/LLMs', desc: 'Claude, GPT, Gemini' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 p-6 transition-all group-hover:border-white/20">
                    <div className="text-purple-400 mb-3">{tech.icon}</div>
                    <h3 className="text-white font-medium mb-1">{tech.name}</h3>
                    <p className="text-gray-500 text-sm">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 border-t border-white/5">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
