export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  link?: string
  github?: string
  demo?: string
  tags: string[]
  featured: boolean
  status: 'active' | 'experimental' | 'archived'
  icon?: string
  gradient?: string
  stats?: {
    stars?: number
    downloads?: number
    users?: number
  }
  newsletter?: boolean
}

export const projects: Project[] = [
  {
    id: 'r3',
    title: 'r3',
    description: 'Intelligent memory management system for AI applications with Redis caching and semantic search',
    longDescription: 'r3 combines sub-millisecond caching with semantic memory storage to create continuity across every AI conversation. Features intelligent local caching, automatic failover, vector embeddings, and entity extraction.',
    link: 'https://r3.newth.ai',
    github: 'https://github.com/n3wth/r3',
    tags: ['AI', 'Memory', 'TypeScript', 'Redis', 'MCP'],
    featured: true,
    status: 'active',
    gradient: 'from-purple-500/20 to-blue-500/20',
    stats: {
      stars: 42,
      downloads: 1200
    },
    newsletter: true
  },
  {
    id: 'claude-code',
    title: 'Claude Code Extensions',
    description: 'Custom extensions and workflows for Claude Code to enhance development productivity',
    longDescription: 'Collection of Claude Code extensions including parallel agents, performance monitoring, and advanced context management.',
    github: 'https://github.com/olivernewth',
    tags: ['Claude', 'Automation', 'Developer Tools'],
    featured: true,
    status: 'active',
    gradient: 'from-orange-500/20 to-pink-500/20'
  },
  {
    id: 'newth-dash',
    title: 'Dashboard Platform',
    description: 'Modern React dashboard with real-time data visualization and analytics',
    longDescription: 'Built with Next.js 14, TypeScript, and Tailwind CSS. Features real-time updates, responsive design, and comprehensive analytics.',
    github: 'https://github.com/olivernewth/newth-dash',
    tags: ['React', 'Next.js', 'TypeScript', 'Analytics'],
    featured: false,
    status: 'active',
    gradient: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 'ynab-automation',
    title: 'YNAB Budget Automation',
    description: 'Gmail to YNAB transaction importer with OAuth2 authentication',
    longDescription: 'Automated transaction import from Gmail receipts to YNAB (You Need A Budget) with scheduled tasks and OAuth2 authentication.',
    github: 'https://github.com/olivernewth/newth_ynab',
    tags: ['Python', 'Flask', 'OAuth2', 'Automation'],
    featured: false,
    status: 'active',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'open-cuak',
    title: 'Open CUAK',
    description: 'Monorepo for browser automation and web extensions',
    longDescription: 'Large-scale monorepo with Turbo build orchestration. Includes browser automation tools, Chrome extensions, and web dashboard.',
    github: 'https://github.com/olivernewth/open-cuak',
    tags: ['Monorepo', 'Automation', 'TypeScript', 'Turbo'],
    featured: false,
    status: 'experimental',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 'widgets',
    title: 'Embeddable Widgets',
    description: 'Collection of customizable, embeddable React widgets',
    longDescription: 'Self-contained widgets that can be embedded in any website. Each widget is optimized for performance with tree-shaking and lazy loading.',
    github: 'https://github.com/olivernewth/widgets',
    demo: 'https://widgets.newth.ai',
    tags: ['React', 'Components', 'Embeddable'],
    featured: false,
    status: 'active',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'graphiti',
    title: 'Graphiti',
    description: 'Python graph database tools with uv and ruff integration',
    longDescription: 'Modern Python project for graph database operations. Uses uv for package management and ruff for linting.',
    github: 'https://github.com/olivernewth/graphiti',
    tags: ['Python', 'Graph Database', 'Data Science'],
    featured: false,
    status: 'experimental',
    gradient: 'from-yellow-500/20 to-green-500/20'
  },
  {
    id: 'green-card',
    title: 'Green Card App',
    description: 'Web dashboard for immigration application tracking',
    github: 'https://github.com/olivernewth/green-card-app',
    tags: ['React', 'Dashboard', 'Forms'],
    featured: false,
    status: 'archived',
    gradient: 'from-emerald-500/20 to-green-500/20'
  }
]

export function getFeaturedProjects() {
  return projects.filter(p => p.featured)
}

export function getActiveProjects() {
  return projects.filter(p => p.status === 'active')
}

export function getProjectsByTag(tag: string) {
  return projects.filter(p => p.tags.includes(tag))
}

export function getAllTags() {
  const tags = new Set<string>()
  projects.forEach(p => p.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}