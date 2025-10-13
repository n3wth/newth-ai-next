// Portfolio homepage showcasing featured projects and experience

import { HeroSection } from '@/components/sections/HeroSectionOptimized'
import { ProjectGrid } from '@/components/sections/ProjectGridSimple'
import { ContactSection } from '@/components/sections/ContactSection'
import type { Project } from '@/lib/types'

export default function Home() {
  const featuredProjects: Project[] = [
    {
      id: 'r3-memory',
      title: 'r3 — Memory Layer for AI',
      description:
        'Open-source memory system for LLMs with MCP protocol support. Fast response times and easy integration.',
      year: '2025',
      tags: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
      tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'], // backward compat
      status: 'active' as const,
      link: 'https://r3.newth.ai',
      github: 'https://github.com/n3wth/r3',
      featured: true,
      color: 'text-violet-400',
      metrics: [
        { label: 'Fast response', color: 'text-violet-400' },
        { label: 'MCP protocol', color: 'text-green-400' },
      ],
    },
    {
      id: 'meat-game',
      title: 'Meat — The Game',
      description:
        'A silly experimental game I made for fun. Sometimes you just need to build something weird.',
      year: '2025',
      tags: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
      tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'], // backward compat
      status: 'experimental' as const,
      link: 'https://meat.newth.ai',
      featured: true,
      color: 'text-red-400',
      metrics: [
        { label: '100% meat', color: 'text-red-400' },
        { label: '0% vegetarian', color: 'text-pink-400' },
      ],
    },
    {
      id: 'quartz-knowledge',
      title: 'Personal Knowledge Graph',
      description:
        'My notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
      year: '2025',
      tags: ['Quartz', 'Obsidian', 'Knowledge Management'],
      tech: ['Quartz', 'Obsidian', 'Knowledge Management'], // backward compat
      status: 'active' as const,
      github: 'https://github.com/n3wth/quartz',
      featured: false,
      color: 'text-emerald-400',
      metrics: [
        { label: 'Public notes', color: 'text-emerald-400' },
        { label: 'Actively maintained', color: 'text-teal-400' },
      ],
    },
    {
      id: 'neuros',
      title: 'Neuros — AI Dev Experiments',
      description:
        'Experiments with MCP protocol extensions and AI agent architectures. Open source playground.',
      year: '2025',
      tags: ['TypeScript', 'MCP', 'AI Tools'],
      tech: ['TypeScript', 'MCP', 'AI Tools'], // backward compat
      status: 'experimental' as const,
      github: 'https://github.com/n3wth/neuros',
      featured: false,
      color: 'text-orange-400',
      metrics: [
        { label: 'Experimental', color: 'text-orange-400' },
        { label: 'Open source', color: 'text-amber-400' },
      ],
    },
  ]

  // Main portfolio page with hero, projects, and contact sections

  return (
    <main className="flex flex-col relative bg-black" role="main" aria-label="Homepage">
      {/* Hero section with animated background */}
      <HeroSection />
      <section
        id="projects"
        className="py-32 px-6 bg-black relative z-10 mt-20"
        role="region"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="projects-heading" className="text-4xl font-bold mb-16 text-white">
            Featured Projects
          </h2>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      {/* Contact section for inquiries */}
      <ContactSection />
    </main>
  )
}
