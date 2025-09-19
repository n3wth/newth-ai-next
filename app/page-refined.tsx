'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Mail, ChevronDown } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function RefinedPage() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero Section - OpenAI/Apple Quality */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px]" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Subtle ASCII watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="ascii-accent mb-8"
          >
            NEWTH.AI
          </motion.div>

          {/* Clean status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-8"
          >
            <div className="status-dot">
              <span></span>
            </div>
            <span className="text-sm font-medium text-white/80">
              Building at Google
            </span>
          </motion.div>

          {/* Premium headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-8"
          >
            <span className="block gradient-text">I make AI</span>
            <span className="block text-white">
              work at scale.
            </span>
          </motion.h1>

          {/* Refined description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Engineering ML infrastructure serving billions daily.
            <br />
            <span className="text-white/40">
              Previously Meta, Microsoft, Covariant.
            </span>
          </motion.p>

          {/* Premium CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#projects" className="btn-primary group">
              Explore Work
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-premium">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/20 animate-bounce" />
        </motion.div>
      </section>

      {/* ASCII Divider */}
      <div className="ascii-divider" />

      {/* Projects Section - Glass Morphism */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">Selected Work</span>
            </h2>
            <p className="text-lg text-white/40">
              Shipping production ML at scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            {[
              {
                title: "R3 Memory System",
                description: "Intelligent memory layer for AI applications",
                tech: ["TypeScript", "Redis", "ML"],
                link: "https://r3.newth.ai",
                year: "2024"
              },
              {
                title: "Google ML Platform",
                description: "Infrastructure serving billions daily",
                tech: ["Python", "TensorFlow", "K8s"],
                year: "2024"
              },
              {
                title: "Claude Extensions",
                description: "Developer tools for AI assistance",
                tech: ["JavaScript", "API", "CLI"],
                year: "2024"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8"
              >
                {/* ASCII accent */}
                <div className="ascii-accent mb-4">[{project.year}]</div>

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-white/50 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs glass-panel rounded-full text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View Project
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASCII Divider */}
      <div className="ascii-divider" />

      {/* Contact Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-white/40 mb-12">
            Available for select projects and consultations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:oliver@newth.ai"
              className="btn-primary group"
            >
              <Mail className="inline-block mr-2 w-5 h-5" />
              Email Me
            </Link>
            <Link
              href="https://github.com/olivernewth"
              className="btn-premium group"
            >
              <Github className="inline-block mr-2 w-5 h-5" />
              GitHub
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}