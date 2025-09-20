import { describe, it, expect } from 'vitest'
import {
  projects,
  getFeaturedProjects,
  getActiveProjects,
  getExperimentalProjects,
  getArchivedProjects,
  getProjectsByTag,
  getProjectsByCategory,
  searchProjects,
  getProjectById,
  getProjectStats,
  getAllTags,
  getAllTechStack,
  getAllCategories,
} from '@/lib/data'

describe('Project Data Layer', () => {
  it('should have projects data', () => {
    expect(projects).toBeDefined()
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('should get featured projects', () => {
    const featured = getFeaturedProjects()
    expect(Array.isArray(featured)).toBe(true)
    featured.forEach((project) => {
      expect(project.featured).toBe(true)
      expect(project.archived).toBe(false)
    })
  })

  it('should get active projects', () => {
    const active = getActiveProjects()
    expect(Array.isArray(active)).toBe(true)
    active.forEach((project) => {
      expect(project.status).toBe('active')
      expect(project.archived).toBe(false)
    })
  })

  it('should get experimental projects', () => {
    const experimental = getExperimentalProjects()
    expect(Array.isArray(experimental)).toBe(true)
    experimental.forEach((project) => {
      expect(project.status).toBe('experimental')
      expect(project.archived).toBe(false)
    })
  })

  it('should get archived projects', () => {
    const archived = getArchivedProjects()
    expect(Array.isArray(archived)).toBe(true)
    archived.forEach((project) => {
      expect(project.archived).toBe(true)
    })
  })

  it('should filter projects by tag', () => {
    const reactProjects = getProjectsByTag('React')
    expect(Array.isArray(reactProjects)).toBe(true)
    reactProjects.forEach((project) => {
      expect(project.tags.includes('React')).toBe(true)
    })
  })

  it('should filter projects by category', () => {
    const webProjects = getProjectsByCategory('web')
    expect(Array.isArray(webProjects)).toBe(true)
    webProjects.forEach((project) => {
      expect(project.category).toBe('web')
    })
  })

  it('should search projects', () => {
    const results = searchProjects('AI')
    expect(Array.isArray(results)).toBe(true)
    // Should find projects with AI in title, description, tags, or tech stack
    results.forEach((project) => {
      const searchableContent = [
        project.title,
        project.description,
        project.longDescription || '',
        ...project.tags,
        ...project.techStack,
      ]
        .join(' ')
        .toLowerCase()
      expect(searchableContent.includes('ai')).toBe(true)
    })
  })

  it('should get project by ID', () => {
    const firstProject = projects[0]
    const foundProject = getProjectById(firstProject.id)
    expect(foundProject).toBeDefined()
    expect(foundProject?.id).toBe(firstProject.id)

    const nonExistentProject = getProjectById('non-existent-id')
    expect(nonExistentProject).toBeUndefined()
  })

  it('should get project statistics', () => {
    const stats = getProjectStats()
    expect(stats).toBeDefined()
    expect(typeof stats.total).toBe('number')
    expect(typeof stats.featured).toBe('number')
    expect(typeof stats.active).toBe('number')
    expect(typeof stats.experimental).toBe('number')
    expect(typeof stats.archived).toBe('number')
    expect(stats.total).toBe(projects.length)
  })

  it('should get all tags', () => {
    const tags = getAllTags()
    expect(Array.isArray(tags)).toBe(true)
    expect(tags.length).toBeGreaterThan(0)
    // Should be sorted
    const sortedTags = [...tags].sort()
    expect(tags).toEqual(sortedTags)
  })

  it('should get all tech stack items', () => {
    const techStack = getAllTechStack()
    expect(Array.isArray(techStack)).toBe(true)
    expect(techStack.length).toBeGreaterThan(0)
    // Should be sorted
    const sortedTechStack = [...techStack].sort()
    expect(techStack).toEqual(sortedTechStack)
  })

  it('should get all categories', () => {
    const categories = getAllCategories()
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
    // Should be sorted
    const sortedCategories = [...categories].sort()
    expect(categories).toEqual(sortedCategories)
  })

  it('should have valid project structure', () => {
    projects.forEach((project) => {
      // Required fields
      expect(project.id).toBeDefined()
      expect(typeof project.id).toBe('string')
      expect(project.title).toBeDefined()
      expect(typeof project.title).toBe('string')
      expect(project.description).toBeDefined()
      expect(typeof project.description).toBe('string')

      // Categories and status
      expect(['web', 'mobile', 'desktop', 'cli', 'library', 'other']).toContain(project.category)
      expect(['active', 'experimental', 'archived']).toContain(project.status)

      // Boolean fields
      expect(typeof project.featured).toBe('boolean')
      expect(typeof project.archived).toBe('boolean')

      // Arrays
      expect(Array.isArray(project.tags)).toBe(true)
      expect(Array.isArray(project.techStack)).toBe(true)

      // Links object
      expect(project.links).toBeDefined()
      expect(typeof project.links).toBe('object')

      // If newsletter is defined, it should be boolean
      if (project.newsletter !== undefined) {
        expect(typeof project.newsletter).toBe('boolean')
      }
    })
  })

  it('should not have featured archived projects', () => {
    const featuredArchived = projects.filter((p) => p.featured && p.archived)
    expect(featuredArchived).toHaveLength(0)
  })

  it('should have unique project IDs', () => {
    const ids = projects.map((p) => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})
