// Portfolio homepage showcasing featured projects and experience

import { HeroSection } from '@/components/sections/HeroSectionOptimized'
import { ProjectGrid } from '@/components/sections/ProjectGridSimple'
import { ContactSection } from '@/components/sections/ContactSection'
import type { Project } from '@/lib/types'

export default function Home() {
  const featuredProjects: Project[] = [
    {
      id: 'r3-memory',
      title: 'r3 — Intelligent Memory for AI',
      description:
        'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
      year: '2025',
      tags: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
      tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'], // backward compat
      status: 'active' as const,
      link: 'https://r3.newth.ai',
      github: 'https://github.com/n3wth/r3',
      featured: true,
      color: 'text-violet-400',
      metrics: [
        { label: '5ms response', color: 'text-violet-400' },
        { label: 'MCP native', color: 'text-green-400' },
      ],
    },
    {
      id: 'meat-game',
      title: 'Meat — The Game',
      description:
        'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
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
        '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
      year: '2025',
      tags: ['Quartz', 'Obsidian', 'Knowledge Management'],
      tech: ['Quartz', 'Obsidian', 'Knowledge Management'], // backward compat
      status: 'active' as const,
      github: 'https://github.com/n3wth/quartz',
      featured: false,
      color: 'text-emerald-400',
      metrics: [
        { label: '1000+ notes', color: 'text-emerald-400' },
        { label: 'Always growing', color: 'text-teal-400' },
      ],
    },
    {
      id: 'neuros',
      title: 'Neuros — AI Dev Experiments',
      description:
        'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
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
        className="py-32 px-6 bg-black relative z-10"
        role="region"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2
              id="projects-heading"
              className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight"
            >
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Building production systems and experimental explorations in AI, tooling, and
              knowledge management.
            </p>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      {/* Contact section for inquiries */}
      <ContactSection />
    </main>
  )
}
