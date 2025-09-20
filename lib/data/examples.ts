/**
 * Example usage of the project data layer
 * These examples show how to use the new CMS-like data system
 */

import {
  projects,
  getFeaturedProjects,
  getActiveProjects,
  getExperimentalProjects,
  getProjectsByTag,
  getProjectsByCategory,
  getProjectsFromYear,
  searchProjects,
  getProjectStats,
  getAllTags,
  getAllTechStack,
  getAllCategories,
  getAllYears,
} from './projects'

// Example 1: Get featured projects for homepage hero section
export function getHomepageProjects() {
  return getFeaturedProjects().slice(0, 3)
}

// Example 2: Get projects for portfolio page with pagination
export function getPortfolioProjects(page = 1, limit = 6) {
  const activeProjects = getActiveProjects()
  const start = (page - 1) * limit
  const end = start + limit

  return {
    projects: activeProjects.slice(start, end),
    hasMore: activeProjects.length > end,
    total: activeProjects.length,
  }
}

// Example 3: Get projects by technology for a tech-specific page
export function getReactProjects() {
  return getProjectsByTag('React')
}

export function getTypeScriptProjects() {
  return getProjectsByTag('TypeScript')
}

export function getAIProjects() {
  return getProjectsByTag('AI')
}

// Example 4: Get projects for different sections
export function getWebProjects() {
  return getProjectsByCategory('web')
}

export function getLibraryProjects() {
  return getProjectsByCategory('library')
}

// Example 5: Create a project showcase with mixed content
export function getProjectShowcase() {
  const featured = getFeaturedProjects()
  const experimental = getExperimentalProjects().slice(0, 2)
  const recent = getProjectsFromYear('2025')
    .filter((p) => !p.featured)
    .slice(0, 3)

  return {
    featured,
    experimental,
    recent,
  }
}

// Example 6: Search functionality for a search page
export function searchProjectsWithFilters(
  query: string,
  filters?: {
    category?: string
    status?: string
    tag?: string
  }
) {
  let results = searchProjects(query)

  if (filters?.category) {
    results = results.filter((p) => p.category === filters.category)
  }

  if (filters?.status) {
    results = results.filter((p) => p.status === filters.status)
  }

  if (filters?.tag) {
    results = results.filter((p) => p.tags.includes(filters.tag!))
  }

  return results
}

// Example 7: Get project statistics for analytics dashboard
export function getProjectAnalytics() {
  const stats = getProjectStats()
  const tags = getAllTags()
  const techStack = getAllTechStack()
  const categories = getAllCategories()
  const years = getAllYears()

  return {
    overview: stats,
    breakdown: {
      byCategory: categories.map((cat) => ({
        category: cat,
        count: getProjectsByCategory(cat).length,
      })),
      byStatus: [
        { status: 'active', count: stats.active },
        { status: 'experimental', count: stats.experimental },
        { status: 'archived', count: stats.archived },
      ],
      byYear: years
        .filter((year) => year)
        .map((year) => ({
          year,
          count: getProjectsFromYear(year).length,
        })),
    },
    tags,
    techStack,
  }
}

// Example 8: Get projects for RSS feed or sitemap
export function getPublicProjects() {
  return projects.filter((p) => !p.archived && p.links.website)
}

// Example 9: Get projects with GitHub links for a "view source" section
export function getOpenSourceProjects() {
  return projects.filter((p) => p.links.github && !p.archived)
}

// Example 10: Get projects for newsletter inclusion
export function getNewsletterProjects() {
  return projects.filter((p) => p.newsletter)
}

// Example 11: Advanced filtering example
export function getProjectsAdvanced(options: {
  featured?: boolean
  hasGitHub?: boolean
  hasWebsite?: boolean
  minYear?: string
  categories?: string[]
  tags?: string[]
  limit?: number
}) {
  let filtered = projects

  if (options.featured !== undefined) {
    filtered = filtered.filter((p) => p.featured === options.featured)
  }

  if (options.hasGitHub) {
    filtered = filtered.filter((p) => p.links.github)
  }

  if (options.hasWebsite) {
    filtered = filtered.filter((p) => p.links.website)
  }

  if (options.minYear) {
    filtered = filtered.filter((p) => p.year && p.year >= options.minYear!)
  }

  if (options.categories?.length) {
    filtered = filtered.filter((p) => options.categories!.includes(p.category))
  }

  if (options.tags?.length) {
    filtered = filtered.filter((p) => options.tags!.some((tag) => p.tags.includes(tag)))
  }

  if (options.limit) {
    filtered = filtered.slice(0, options.limit)
  }

  return filtered
}

// Example 12: Related projects functionality
export function getRelatedProjects(projectId: string, limit = 3) {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return []

  // Find projects with similar tags
  const related = projects
    .filter((p) => p.id !== projectId && !p.archived)
    .map((p) => ({
      project: p,
      score: p.tags.filter((tag) => project.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project)

  return related
}
