/**
 * Admin utilities for managing project data
 * These functions help with common project management tasks
 */

import type { Project, ProjectStatus, ProjectCategory } from './types'
import { projects } from './projects'

/**
 * Template for creating a new project
 */
export function createProjectTemplate(overrides: Partial<Project> = {}): Project {
  return {
    id: '',
    title: '',
    description: '',
    category: 'other',
    status: 'experimental',
    featured: false,
    archived: false,
    tags: [],
    techStack: [],
    links: {},
    ...overrides,
  }
}

/**
 * Validate a project object
 */
export function validateProject(project: Partial<Project>): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required fields
  if (!project.id) errors.push('Project ID is required')
  if (!project.title) errors.push('Project title is required')
  if (!project.description) errors.push('Project description is required')
  if (!project.category) errors.push('Project category is required')
  if (!project.status) errors.push('Project status is required')

  // ID validation
  if (project.id && !/^[a-z0-9-]+$/.test(project.id)) {
    errors.push('Project ID must be lowercase alphanumeric with hyphens only')
  }

  // Check for duplicate IDs
  if (project.id && projects.some((p) => p.id === project.id)) {
    errors.push('Project ID must be unique')
  }

  // Array validations
  if (project.tags && !Array.isArray(project.tags)) {
    errors.push('Tags must be an array')
  }

  if (project.techStack && !Array.isArray(project.techStack)) {
    errors.push('Tech stack must be an array')
  }

  // URL validations
  if (project.links?.website && !isValidUrl(project.links.website)) {
    errors.push('Website URL is invalid')
  }

  if (project.links?.github && !isValidUrl(project.links.github)) {
    errors.push('GitHub URL is invalid')
  }

  if (project.links?.demo && !isValidUrl(project.links.demo)) {
    errors.push('Demo URL is invalid')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Helper to check if a URL is valid
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Generate a project ID from title
 */
export function generateProjectId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
}

/**
 * Common project templates for quick creation
 */
export const projectTemplates = {
  webApp: (): Project =>
    createProjectTemplate({
      category: 'web',
      tags: ['React', 'TypeScript', 'Web'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    }),

  library: (): Project =>
    createProjectTemplate({
      category: 'library',
      tags: ['TypeScript', 'NPM', 'Library'],
      techStack: ['TypeScript', 'Node.js'],
    }),

  cliTool: (): Project =>
    createProjectTemplate({
      category: 'cli',
      tags: ['CLI', 'Tool', 'Productivity'],
      techStack: ['Node.js', 'CLI'],
    }),

  mobileApp: (): Project =>
    createProjectTemplate({
      category: 'mobile',
      tags: ['Mobile', 'React Native'],
      techStack: ['React Native', 'TypeScript'],
    }),

  aiProject: (): Project =>
    createProjectTemplate({
      category: 'library',
      tags: ['AI', 'Machine Learning', 'TypeScript'],
      techStack: ['TypeScript', 'AI/ML', 'Node.js'],
    }),
}

/**
 * Bulk operations for project management
 */
export const projectBulkOperations = {
  /**
   * Mark multiple projects as featured
   */
  markAsFeatured: (projectIds: string[]): Project[] => {
    return projects.map((project) =>
      projectIds.includes(project.id) ? { ...project, featured: true } : project
    )
  },

  /**
   * Update status for multiple projects
   */
  updateStatus: (projectIds: string[], status: ProjectStatus): Project[] => {
    return projects.map((project) =>
      projectIds.includes(project.id) ? { ...project, status } : project
    )
  },

  /**
   * Archive multiple projects
   */
  archive: (projectIds: string[]): Project[] => {
    return projects.map((project) =>
      projectIds.includes(project.id) ? { ...project, archived: true, featured: false } : project
    )
  },

  /**
   * Add tags to multiple projects
   */
  addTags: (projectIds: string[], newTags: string[]): Project[] => {
    return projects.map((project) =>
      projectIds.includes(project.id)
        ? {
            ...project,
            tags: [...new Set([...project.tags, ...newTags])],
          }
        : project
    )
  },

  /**
   * Update category for multiple projects
   */
  updateCategory: (projectIds: string[], category: ProjectCategory): Project[] => {
    return projects.map((project) =>
      projectIds.includes(project.id) ? { ...project, category } : project
    )
  },
}

/**
 * Data integrity checks
 */
export function runDataIntegrityChecks(): {
  valid: boolean
  issues: string[]
  warnings: string[]
} {
  const issues: string[] = []
  const warnings: string[] = []

  // Check for duplicate IDs
  const ids = projects.map((p) => p.id)
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)
  if (duplicateIds.length > 0) {
    issues.push(`Duplicate project IDs found: ${duplicateIds.join(', ')}`)
  }

  // Check for missing required fields
  projects.forEach((project) => {
    const validation = validateProject(project)
    if (!validation.valid) {
      issues.push(`Project "${project.id}" has errors: ${validation.errors.join(', ')}`)
    }
  })

  // Check for inconsistencies
  projects.forEach((project) => {
    // Check if archived projects are featured
    if (project.archived && project.featured) {
      warnings.push(`Archived project "${project.id}" is marked as featured`)
    }

    // Check for empty tech stacks
    if (project.techStack.length === 0) {
      warnings.push(`Project "${project.id}" has no tech stack defined`)
    }

    // Check for very long descriptions
    if (project.description.length > 200) {
      warnings.push(`Project "${project.id}" has a very long description`)
    }

    // Check for projects without links
    if (!project.links.website && !project.links.github && !project.links.demo) {
      warnings.push(`Project "${project.id}" has no external links`)
    }
  })

  return {
    valid: issues.length === 0,
    issues,
    warnings,
  }
}

/**
 * Export project data for backup or migration
 */
export function exportProjectData() {
  return {
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    projectCount: projects.length,
    projects: projects,
  }
}

/**
 * Statistics for admin dashboard
 */
export function getAdminStats() {
  const integrityCheck = runDataIntegrityChecks()

  return {
    projectCount: projects.length,
    featuredCount: projects.filter((p) => p.featured).length,
    archivedCount: projects.filter((p) => p.archived).length,
    projectsWithGithub: projects.filter((p) => p.links.github).length,
    projectsWithWebsite: projects.filter((p) => p.links.website).length,
    averageTagsPerProject: projects.reduce((sum, p) => sum + p.tags.length, 0) / projects.length,
    dataIntegrity: integrityCheck,
  }
}
