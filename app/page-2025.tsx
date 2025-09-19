'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ArrowDown, Github, Mail, Sparkles, ChevronDown, Linkedin, Twitter, BookOpen, Cpu, Brain, Zap, Code, Layers, Globe } from 'lucide-react'

// Updated Project Interface with real projects
interface Project {
  id: string
  title: string
  description: string
  year: string
  tech: string[]
  link?: string
  github?: string
  featured?: boolean
  category: 'ai' | 'open-source' | 'enterprise' | 'research'
  impact?: string
}

const projects: Project[] = [
  {
    id: 'google-ml-platform',
    title: 'ML Platform @ Google',
    description: 'Leading ML infrastructure supporting billions of predictions daily with 99.99% reliability.',
    year: '2024',
    tech: ['DeepMind Models', 'TensorFlow', 'Kubernetes'],
    featured: true,
    category: 'enterprise',
    impact: '78% faster model deployment'
  },
  {
    id: 'covariant-ai',
    title: 'Vision AI @ Covariant',
    description: 'Built enterprise computer vision achieving 85% accuracy in complex robotics environments.',
    year: '2023',
    tech: ['PyTorch', 'Computer Vision', 'Robotics'],
    featured: true,
    category: 'ai',
    impact: '$100M+ projected revenue'
  },
  {
    id: 'r3-memory',
    title: 'R3 Memory System',
    description: 'Open-source intelligent memory layer for AI applications with sub-millisecond response times.',
    year: '2024',
    tech: ['TypeScript', 'Redis', 'Vector DB'],
    link: 'https://r3.newth.ai',
    github: 'https://github.com/n3wth/r3',
    featured: true,
    category: 'open-source'
  },
  {
    id: 'meta-engagement',
    title: 'AI Features @ Meta',
    description: 'Increased user engagement by 75% through AI-powered personalization features.',
    year: '2022',
    tech: ['React', 'PyTorch', 'GraphQL'],
    featured: false,
    category: 'enterprise',
    impact: '60+ engineer team'
  },
  {
    id: 'azure-cognitive',
    title: 'Azure Cognitive Services',
    description: 'Expanded language capabilities to 25 languages for enterprise clients.',
    year: '2021',
    tech: ['Azure', 'NLP', 'Kubernetes'],
    featured: false,
    category: 'enterprise',
    impact: '52% adoption increase'
  },
  {
    id: 'grindr-analysis',
    title: 'AI Dating Analysis',
    description: 'Analyzed 5,888 messages using AI to uncover communication patterns.',
    year: '2025',
    tech: ['Python', 'NLP', 'Data Science'],
    link: 'https://medium.com/@newth/what-i-learned-from-analyzing-5-888-of-my-grindr-messages-cf153a0a1e7e',
    featured: false,
    category: 'research'
  }
]

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Liquid Glass Background with Morphing Blobs */}
      <div className="fixed inset-0 z-0">
        <div className="blob absolute top-1/4 -left-1/4 w-96 h-96" />
        <div className="blob absolute bottom-1/4 -right-1/4 w-96 h-96" style={{ animationDelay: '10s' }} />
        <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{ animationDelay: '5s' }} />
      </div>

      {/* Navigation - Spatial Design */}
      <nav className="nav-spatial flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gradient">ON</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/work" className="nav-link">Work</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/writing" className="nav-link">Writing</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <button className="btn btn-glass">
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section - Bento Grid Layout */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 pt-24">
        <div className="bento-grid max-w-7xl mx-auto">
          {/* Main Hero Card - Large */}
          <motion.div
            className="bento-item bento-item--large glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Currently @ Google, San Francisco</span>
                </div>

                <h1 className="mb-6 variable-weight">
                  Building <span className="text-gradient">Intelligence</span>
                  <br />at Enterprise Scale
                </h1>

                <motion.p
                  className="text-xl mb-8 max-w-2xl"
                  style={{ opacity: textOpacity }}
                >
                  AI Product Leader with 10+ years at Google, Meta, Microsoft & Covariant.
                  Specializing in ML infrastructure, responsible AI, and turning research into products that impact billions.
                </motion.p>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-liquid">
                  <span>View Case Studies</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button className="btn btn-glass">
                  <Github className="w-4 h-4" />
                  <span>Open Source</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards - Neubrutalist Style */}
          <motion.div
            className="bento-item neu-brutal"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h3 className="text-5xl font-bold mb-2">99.99%</h3>
              <p className="text-sm text-gray-400">Platform Reliability</p>
            </div>
          </motion.div>

          <motion.div
            className="bento-item glass-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h3 className="text-5xl font-bold mb-2">30+</h3>
              <p className="text-sm text-gray-400">Product Teams Supported</p>
            </div>
          </motion.div>

          {/* Skills/Focus Areas Card */}
          <motion.div
            className="bento-item bento-item--wide glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-sm">ML Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">GenAI Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                <span className="text-sm">AI Governance</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                <span className="text-sm">Product Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-400" />
                <span className="text-sm">Scale Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Team Leadership</span>
              </div>
            </div>
          </motion.div>

          {/* Latest Activity Card */}
          <motion.div
            className="bento-item glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Latest</h3>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-xs text-gray-400 mb-2">Medium Article</p>
            <Link href="https://medium.com/@newth" className="text-sm hover:text-purple-400 transition-colors">
              &ldquo;I Fed 5,888 Messages to an AI...&rdquo;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Advanced Grid */}
      <section className="min-h-screen px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Impact-Driven <span className="text-gradient">Work</span></h2>
            <p className="text-xl text-gray-400">
              From enterprise ML platforms to open-source tools, delivering measurable results.
            </p>
          </motion.div>

          {/* Project Filters */}
          <div className="flex gap-4 mb-8">
            {['all', 'enterprise', 'ai', 'open-source', 'research'].map((filter) => (
              <button
                key={filter}
                className="btn btn-glass text-sm"
                onClick={() => console.log(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Bento Grid */}
          <div className="bento-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bento-item glass-card ${
                  project.featured ? 'bento-item--wide' : ''
                } stagger-in`}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-gray-400">{project.year}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <Link href={project.github}>
                        <Github className="w-4 h-4 hover:text-purple-400 transition-colors" />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link}>
                        <ArrowUpRight className="w-4 h-4 hover:text-purple-400 transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 variable-weight">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="mb-4 p-2 bg-purple-500/10 rounded-lg">
                    <span className="text-xs text-purple-400">Impact: {project.impact}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Work Section */}
      <section className="px-8 py-24 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Beyond the <span className="glitch" data-text="Code">Code</span></h2>
          <p className="text-xl text-gray-400 mb-12">
            Passionate about using technology and art for social impact. From cycling 545 miles for AIDS/LifeCycle
            to creating LGBTQ+ art installations at Burning Man and collaborating with Illuminate on The Pink Triangle.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="https://linkedin.com/in/olivernewth" className="btn btn-glass">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link href="https://medium.com/@newth" className="btn btn-glass">
              <BookOpen className="w-4 h-4" />
              <span>Writing</span>
            </Link>
            <Link href="mailto:oliver@newth.ai" className="btn btn-liquid">
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Cursor Effect */}
      <motion.div
        className="cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <motion.div
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30 }}
      />
    </div>
  )
}