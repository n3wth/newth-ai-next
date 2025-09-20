import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'r3-memory',
    title: 'r3 — Intelligent Memory for AI',
    description:
      'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
    year: '2025',
    tags: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
    tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
    status: 'active' as const,
    link: 'https://r3.newth.ai',
    github: 'https://github.com/n3wth/r3',
    featured: true,
    color: 'from-violet-600 to-purple-600',
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
    tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
    status: 'experimental' as const,
    link: 'https://meat.newth.ai',
    featured: true,
    color: 'from-red-600 to-pink-600',
    metrics: [
      { label: '100% meat', color: 'text-violet-400' },
      { label: '0% vegetarian', color: 'text-green-400' },
    ],
  },
  {
    id: 'quartz-knowledge',
    title: 'Personal Knowledge Graph',
    description:
      '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
    year: '2025',
    tags: ['Quartz', 'Obsidian', 'Knowledge Management'],
    tech: ['Quartz', 'Obsidian', 'Knowledge Management'],
    status: 'active' as const,
    github: 'https://github.com/n3wth/quartz',
    featured: false,
    color: 'from-emerald-600 to-teal-600',
    metrics: [
      { label: '1000+ notes', color: 'text-violet-400' },
      { label: 'Always growing', color: 'text-green-400' },
    ],
  },
  {
    id: 'neuros',
    title: 'Neuros — AI Dev Experiments',
    description:
      'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
    year: '2025',
    tags: ['TypeScript', 'MCP', 'AI Tools'],
    tech: ['TypeScript', 'MCP', 'AI Tools'],
    status: 'experimental' as const,
    github: 'https://github.com/n3wth/neuros',
    featured: false,
    color: 'from-orange-600 to-amber-600',
    metrics: [
      { label: 'Experimental', color: 'text-violet-400' },
      { label: 'Open source', color: 'text-green-400' },
    ],
  },
]
