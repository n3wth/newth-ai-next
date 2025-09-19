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
    id: 'r3-memory',
    title: 'r3 — Intelligent Memory for AI',
    description: 'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
    year: '2024',
    tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
    link: 'https://r3.newth.ai',
    github: 'https://github.com/n3wth/r3',
    featured: true,
    color: 'from-violet-600 to-purple-600'
  },
  {
    id: 'meat-game',
    title: 'Meat — The Game',
    description: 'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
    year: '2024',
    tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
    link: 'https://meat.newth.ai',
    featured: true,
    color: 'from-red-600 to-pink-600'
  },
  {
    id: 'quartz-knowledge',
    title: 'Personal Knowledge Graph',
    description: '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
    year: '2024',
    tech: ['Quartz', 'Obsidian', 'Knowledge Management'],
    github: 'https://github.com/n3wth/quartz',
    featured: false,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'neuros',
    title: 'Neuros — AI Dev Experiments',
    description: 'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
    year: '2024',
    tech: ['TypeScript', 'MCP', 'AI Tools'],
    github: 'https://github.com/n3wth/neuros',
    featured: false,
    color: 'from-orange-600 to-amber-600'
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
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] backdrop-blur-sm px-3 py-1.5 text-xs font-medium border border-white/[0.08] mb-8">
              <span className="text-purple-300">Ship fast</span>
              <span className="text-white/40">×</span>
              <span className="text-blue-300">Think deeply</span>
              <span className="text-white/40">×</span>
              <span className="text-cyan-300">Build for billions</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight mb-8 leading-[1.15]">
              <span className="text-white block">I ship AI products</span>
              <span className="text-white inline-block mt-1">people actually use.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/90 mb-10 font-light leading-relaxed">
              Senior PM at Google ML. <span className="text-white font-medium">Open source contributor after hours.</span>
              I turn research breakthroughs into products that scale—from enterprise AI to experimental tools that push boundaries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-xl transition-all hover:scale-[1.02] hover:shadow-2xl min-w-[200px]"
            >
              See My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white border border-white/20 backdrop-blur-xl bg-white/5 transition-all hover:bg-white/10 hover:border-white/30 min-w-[200px]"
            >
              Get in Touch
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
              Side projects
            </h2>
            <p className="text-gray-400">
              Open source tools and experiments. Built for the community.
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
                      {project.id === 'r3-memory' && (
                        <>
                          <span className="text-sm text-violet-400 font-medium">5ms response</span>
                          <span className="text-sm text-green-400 font-medium">MCP native</span>
                        </>
                      )}
                      {project.id === 'meat-game' && (
                        <>
                          <span className="text-sm text-violet-400 font-medium">100% meat</span>
                          <span className="text-sm text-green-400 font-medium">0% vegetarian</span>
                        </>
                      )}
                      {project.id === 'quartz-knowledge' && (
                        <>
                          <span className="text-sm text-violet-400 font-medium">1000+ notes</span>
                          <span className="text-sm text-green-400 font-medium">Always growing</span>
                        </>
                      )}
                      {project.id === 'neuros' && (
                        <>
                          <span className="text-sm text-violet-400 font-medium">Experimental</span>
                          <span className="text-sm text-green-400 font-medium">Open source</span>
                        </>
                      )}
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
          <h2 className="text-3xl sm:text-4xl font-normal mb-6 text-white">
            Ready to ship something amazing?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            I work with teams that move fast and dream big.
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
              href="https://github.com/n3wth"
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