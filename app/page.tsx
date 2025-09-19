'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Github, Mail, Sparkles, ChevronDown } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { DynamicBackground } from '@/components/DynamicBackground'

// Sophisticated Project Interface
interface Project {
  id: string
  title: string
  description: string
  year: string
  tech: string[]
  link?: string
  github?: string
  featured?: boolean
  color: string
}

const projects: Project[] = [
  {
    id: 'r3',
    title: 'R3 Memory System',
    description: 'Intelligent memory layer for AI applications with sub-millisecond response times.',
    year: '2024',
    tech: ['TypeScript', 'Redis', 'AI/ML'],
    link: 'https://r3.newth.ai',
    github: 'https://github.com/n3wth/r3',
    featured: true,
    color: 'from-violet-600 to-indigo-600'
  },
  {
    id: 'claude-extensions',
    title: 'Claude Code Extensions',
    description: 'Productivity tools and workflows for AI-assisted development.',
    year: '2024',
    tech: ['JavaScript', 'Automation', 'CLI'],
    github: 'https://github.com/olivernewth',
    featured: true,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with responsive design.',
    year: '2024',
    tech: ['React', 'Next.js', 'D3.js'],
    featured: false,
    color: 'from-amber-600 to-orange-600'
  }
]

const asciiLogo = `
█▄ █ █▀▀ █ █ █ ▀█▀ █ █    ▄▀█ █
█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█    █▀█ █
█  █ █▄▄  ▀ ▀   █  █ █  °
`

const asciiPattern = `
╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲
╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱
`

const asciiDivider = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

const asciiArrow = `
  ▄▄▄▄▄▄▄
  ▀▀▀▀▀▀▀
`

export default function RefinedHomepage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Use consistent Navigation component */}
      <Navigation />

      {/* Hero Section - Premium Glass Design */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gradient-to-b from-black via-gray-950 to-black text-white" ref={containerRef}>
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          style={{
            opacity,
            scale,
          }}
        >
          {/* Engaging Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Impact Metrics Bar */}
            <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full mb-8 backdrop-blur-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">2B+</span>
                <span className="text-xs text-gray-400">Users Impacted</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">99.99%</span>
                <span className="text-xs text-gray-400">Uptime</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">10+</span>
                <span className="text-xs text-gray-400">Years FAANG</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">I ship AI products</span><br />
              <span className="text-violet-400">that drive real impact.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
              Leading ML infrastructure at Google, serving 2B+ users daily.<br />
              <span className="text-gray-500 text-lg">Turned vision into $100M+ revenue across Meta, Microsoft, and Covariant.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center font-mono"
          >
            <Link
              href="#case-studies"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-xl transition-all hover:scale-[1.02] hover:shadow-2xl min-w-[200px]"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white border border-white/20 backdrop-blur-xl bg-white/5 transition-all hover:bg-white/10 hover:border-white/30 min-w-[200px]"
            >
              Let&apos;s Talk Strategy
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Case Studies Section - Product Manager Style */}
      <section id="case-studies" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Impact-Driven Case Studies
            </h2>
            <p className="text-lg text-gray-400">
              From strategy to launch: How I drive measurable outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative group ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">

                  <div className="relative">
                    <div className="mb-4">
                      <span className="text-xs text-gray-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>

                    {/* Impact Metrics */}
                    <div className="flex gap-4 mb-4">
                      <span className="text-sm text-violet-400 font-semibold">+78% Efficiency</span>
                      <span className="text-sm text-green-400 font-semibold">$25M Revenue</span>
                    </div>

                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.link && (
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          Visit
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Glass Design */}
      <section className="py-24 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Available for select projects and consultations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:oliver@newth.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Link>
            <Link
              href="https://github.com/olivernewth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white border border-white/20 backdrop-blur-xl bg-white/5 transition-all hover:bg-white/10 hover:border-white/30"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Use consistent Footer component */}
      <Footer />
    </div>
  )
}