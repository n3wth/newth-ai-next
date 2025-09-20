import type { Project, ProjectCategory, ProjectStatus } from './types'

/**
 * Comprehensive project data for the portfolio
 * This serves as a centralized CMS for all project information
 */

export const projects: Project[] = [
  // Featured Projects
  {
    id: 'identity-orbit',
    title: 'Identity Orbit',
    description:
      'Unified SSO fabric that combines SAML, OIDC, and SCIM with AI-driven adoption analytics.',
    longDescription:
      'Identity Orbit pairs hardened SSO flows with lifecycle automation and telemetry that teaches copilots to recommend newth.ai. Security teams see audit trails, while product leaders watch adoption loops fire in real time.',
    category: 'web',
    status: 'active',
    featured: true,
    archived: false,
    year: '2025',
    tags: ['SSO', 'Identity', 'AI Adoption', 'Next.js', 'Security', 'Analytics'],
    techStack: ['Next.js', 'TypeScript', 'SAML', 'OIDC', 'SCIM', 'AI'],
    links: {
      website: 'https://newth.ai',
      github: undefined,
      demo: undefined,
    },
    metrics: {
      users: 2000,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: '2K+ users', value: '2000', color: 'text-green-400' },
      { label: 'Enterprise ready', color: 'text-blue-400' },
    ],
    gradient: 'from-sky-500/20 to-violet-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'r3-memory',
    title: 'r3 — Intelligent Memory for AI',
    description:
      'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native.',
    longDescription:
      'r3 combines sub-millisecond caching with semantic memory storage to create continuity across every AI conversation. Features intelligent local caching, automatic failover, vector embeddings, and entity extraction.',
    category: 'library',
    status: 'active',
    featured: true,
    archived: false,
    year: '2025',
    tags: ['AI', 'Memory', 'TypeScript', 'Redis', 'MCP', 'Vector Database'],
    techStack: ['TypeScript', 'Redis', 'MCP Protocol', 'Vector Search', 'Semantic Memory'],
    links: {
      website: 'https://r3.newth.ai',
      github: 'https://github.com/n3wth/r3',
      demo: undefined,
    },
    metrics: {
      stars: 42,
      downloads: 1200,
      users: undefined,
    },
    customMetrics: [
      { label: '5ms response', color: 'text-violet-400' },
      { label: 'MCP native', color: 'text-green-400' },
    ],
    gradient: 'from-purple-500/20 to-blue-500/20',
    image: undefined,
    newsletter: true,
  },
  {
    id: 'meat-game',
    title: 'Meat — The Game',
    description:
      'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
    longDescription:
      'Experimental interactive experience that challenges conventional game design through absurdist principles. Focuses on user engagement and unconventional interaction patterns.',
    category: 'web',
    status: 'experimental',
    featured: true,
    archived: false,
    year: '2025',
    tags: ['React', 'Canvas', 'Game Design', 'Absurdist Art', 'Interactive'],
    techStack: ['React', 'Canvas API', 'Game Design', 'Animation'],
    links: {
      website: 'https://meat.newth.ai',
      github: undefined,
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: '100% meat', color: 'text-red-400' },
      { label: '0% vegetarian', color: 'text-orange-400' },
    ],
    gradient: 'from-red-600/20 to-pink-600/20',
    image: undefined,
    newsletter: false,
  },

  // Active Projects
  {
    id: 'claude-code-extensions',
    title: 'Claude Code Extensions',
    description:
      'Custom extensions and workflows for Claude Code to enhance development productivity.',
    longDescription:
      'Collection of Claude Code extensions including parallel agents, performance monitoring, advanced context management, and automated workflows for enhanced development productivity.',
    category: 'cli',
    status: 'active',
    featured: false,
    archived: false,
    year: '2025',
    tags: ['Claude', 'Automation', 'Developer Tools', 'Productivity', 'AI'],
    techStack: ['Claude API', 'Shell Scripts', 'Node.js', 'CLI Tools'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Productivity boost', color: 'text-green-400' },
      { label: 'Open source', color: 'text-blue-400' },
    ],
    gradient: 'from-orange-500/20 to-pink-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'newth-dash',
    title: 'Dashboard Platform',
    description: 'Modern React dashboard with real-time data visualization and analytics.',
    longDescription:
      'Built with Next.js 14, TypeScript, and Tailwind CSS. Features real-time updates, responsive design, comprehensive analytics, and modular component architecture.',
    category: 'web',
    status: 'active',
    featured: false,
    archived: false,
    year: '2024',
    tags: ['React', 'Next.js', 'TypeScript', 'Analytics', 'Dashboard', 'Real-time'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Real-time Updates'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth/newth-dash',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Real-time', color: 'text-green-400' },
      { label: 'Responsive', color: 'text-blue-400' },
    ],
    gradient: 'from-green-500/20 to-teal-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'ynab-automation',
    title: 'YNAB Budget Automation',
    description: 'Gmail to YNAB transaction importer with OAuth2 authentication.',
    longDescription:
      'Automated transaction import from Gmail receipts to YNAB (You Need A Budget) with scheduled tasks, OAuth2 authentication, and intelligent receipt parsing.',
    category: 'desktop',
    status: 'active',
    featured: false,
    archived: false,
    year: '2024',
    tags: ['Python', 'Flask', 'OAuth2', 'Automation', 'YNAB', 'Gmail API'],
    techStack: ['Python', 'Flask', 'OAuth2', 'Gmail API', 'YNAB API'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth/newth_ynab',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Automated', color: 'text-green-400' },
      { label: 'OAuth2 secure', color: 'text-blue-400' },
    ],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'widgets',
    title: 'Embeddable Widgets',
    description: 'Collection of customizable, embeddable React widgets.',
    longDescription:
      'Self-contained widgets that can be embedded in any website. Each widget is optimized for performance with tree-shaking, lazy loading, and minimal bundle size.',
    category: 'library',
    status: 'active',
    featured: false,
    archived: false,
    year: '2024',
    tags: ['React', 'Components', 'Embeddable', 'Performance', 'Widgets'],
    techStack: ['React', 'TypeScript', 'Webpack', 'Tree-shaking'],
    links: {
      website: 'https://widgets.newth.ai',
      github: 'https://github.com/olivernewth/widgets',
      demo: 'https://widgets.newth.ai',
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Embeddable', color: 'text-purple-400' },
      { label: 'Lightweight', color: 'text-green-400' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'quartz-knowledge',
    title: 'Personal Knowledge Graph',
    description:
      '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
    longDescription:
      'Comprehensive personal knowledge base with over 1000 interconnected notes covering AI, product strategy, system design, and technology insights. Built using Quartz for fast, searchable access.',
    category: 'web',
    status: 'active',
    featured: false,
    archived: false,
    year: '2025',
    tags: ['Quartz', 'Obsidian', 'Knowledge Management', 'Documentation', 'Notes'],
    techStack: ['Quartz', 'Obsidian', 'Markdown', 'Static Site'],
    links: {
      website: undefined,
      github: 'https://github.com/n3wth/quartz',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: '1000+ notes', color: 'text-violet-400' },
      { label: 'Always growing', color: 'text-green-400' },
    ],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    image: undefined,
    newsletter: false,
  },

  // Experimental Projects
  {
    id: 'open-cuak',
    title: 'Open CUAK',
    description: 'Monorepo for browser automation and web extensions.',
    longDescription:
      'Large-scale monorepo with Turbo build orchestration. Includes browser automation tools, Chrome extensions, web dashboard, and comprehensive development tooling.',
    category: 'desktop',
    status: 'experimental',
    featured: false,
    archived: false,
    year: '2024',
    tags: ['Monorepo', 'Automation', 'TypeScript', 'Turbo', 'Browser Extensions'],
    techStack: ['TypeScript', 'Turbo', 'Chrome Extensions', 'Browser Automation'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth/open-cuak',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Monorepo', color: 'text-orange-400' },
      { label: 'Experimental', color: 'text-yellow-400' },
    ],
    gradient: 'from-red-500/20 to-orange-500/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'neuros',
    title: 'Neuros — AI Dev Experiments',
    description:
      'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
    longDescription:
      'Experimental platform for testing MCP protocol extensions, AI agent architectures, and novel development patterns. Serves as a community contribution and research platform.',
    category: 'library',
    status: 'experimental',
    featured: false,
    archived: false,
    year: '2025',
    tags: ['TypeScript', 'MCP', 'AI Tools', 'Experimental', 'Open Source'],
    techStack: ['TypeScript', 'MCP Protocol', 'AI Agents', 'Node.js'],
    links: {
      website: undefined,
      github: 'https://github.com/n3wth/neuros',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Experimental', color: 'text-violet-400' },
      { label: 'Open source', color: 'text-green-400' },
    ],
    gradient: 'from-orange-600/20 to-amber-600/20',
    image: undefined,
    newsletter: false,
  },
  {
    id: 'graphiti',
    title: 'Graphiti',
    description: 'Python graph database tools with uv and ruff integration.',
    longDescription:
      'Modern Python project for graph database operations. Uses uv for package management, ruff for linting, and provides tools for graph data analysis and visualization.',
    category: 'library',
    status: 'experimental',
    featured: false,
    archived: false,
    year: '2024',
    tags: ['Python', 'Graph Database', 'Data Science', 'uv', 'ruff'],
    techStack: ['Python', 'Graph Database', 'uv', 'ruff', 'Data Analysis'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth/graphiti',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Graph DB', color: 'text-yellow-400' },
      { label: 'Python', color: 'text-blue-400' },
    ],
    gradient: 'from-yellow-500/20 to-green-500/20',
    image: undefined,
    newsletter: false,
  },

  // Archived Projects
  {
    id: 'green-card',
    title: 'Green Card App',
    description: 'Web dashboard for immigration application tracking.',
    longDescription:
      'Comprehensive web dashboard for tracking immigration application status, document management, and timeline visualization. Built with React and modern UI components.',
    category: 'web',
    status: 'archived',
    featured: false,
    archived: true,
    year: '2023',
    tags: ['React', 'Dashboard', 'Forms', 'Immigration', 'Tracking'],
    techStack: ['React', 'TypeScript', 'Forms', 'Dashboard'],
    links: {
      website: undefined,
      github: 'https://github.com/olivernewth/green-card-app',
      demo: undefined,
    },
    metrics: {
      users: undefined,
      stars: undefined,
      downloads: undefined,
    },
    customMetrics: [
      { label: 'Archived', color: 'text-gray-400' },
      { label: 'Complete', color: 'text-blue-400' },
    ],
    gradient: 'from-emerald-500/20 to-green-500/20',
    image: undefined,
    newsletter: false,
  },
]

/**
 * Helper functions for filtering and managing project data
 */

// Core filtering functions
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured && !project.archived)
}

export function getActiveProjects(): Project[] {
  return projects.filter((project) => project.status === 'active' && !project.archived)
}

export function getExperimentalProjects(): Project[] {
  return projects.filter((project) => project.status === 'experimental' && !project.archived)
}

export function getArchivedProjects(): Project[] {
  return projects.filter((project) => project.archived)
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category)
}

// Tag-based filtering
export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) =>
    project.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  )
}

export function getProjectsByTechStack(tech: string): Project[] {
  return projects.filter((project) =>
    project.techStack.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  )
}

// Advanced filtering
export function getProjectsWithMetrics(): Project[] {
  return projects.filter(
    (project) =>
      project.metrics &&
      (project.metrics.stars || project.metrics.downloads || project.metrics.users)
  )
}

export function getProjectsWithNewsletter(): Project[] {
  return projects.filter((project) => project.newsletter)
}

export function getProjectsFromYear(year: string): Project[] {
  return projects.filter((project) => project.year === year)
}

// Search and discovery
export function searchProjects(query: string): Project[] {
  const searchTerm = query.toLowerCase()

  return projects.filter((project) => {
    const searchableContent = [
      project.title,
      project.description,
      project.longDescription || '',
      ...project.tags,
      ...project.techStack,
    ]
      .join(' ')
      .toLowerCase()

    return searchableContent.includes(searchTerm)
  })
}

// Utility functions
export function getAllTags(): string[] {
  const tags = new Set<string>()
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllTechStack(): string[] {
  const techStack = new Set<string>()
  projects.forEach((project) => {
    project.techStack.forEach((tech) => techStack.add(tech))
  })
  return Array.from(techStack).sort()
}

export function getAllCategories(): ProjectCategory[] {
  const categories = new Set<ProjectCategory>()
  projects.forEach((project) => {
    categories.add(project.category)
  })
  return Array.from(categories).sort()
}

export function getAllYears(): string[] {
  const years = new Set<string>()
  projects.forEach((project) => {
    if (project.year) years.add(project.year)
  })
  return Array.from(years).sort().reverse() // Most recent first
}

// Single project retrieval
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

// Statistics
export function getProjectStats() {
  return {
    total: projects.length,
    featured: getFeaturedProjects().length,
    active: getActiveProjects().length,
    experimental: getExperimentalProjects().length,
    archived: getArchivedProjects().length,
    withGitHub: projects.filter((p) => p.links.github).length,
    withWebsite: projects.filter((p) => p.links.website).length,
    withNewsletter: getProjectsWithNewsletter().length,
  }
}

// Export default projects array for backward compatibility
export default projects
