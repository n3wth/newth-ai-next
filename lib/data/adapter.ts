/**
 * Compatibility adapter for transitioning existing components to the new data layer
 * Converts new Project interface to legacy format
 */

import type { Project, LegacyProject } from './types'

/**
 * Converts new Project format to legacy format for backward compatibility
 */
export function toLegacyProject(project: Project): LegacyProject {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    link: project.links.website,
    github: project.links.github,
    demo: project.links.demo,
    tags: project.tags,
    tech: project.techStack,
    featured: project.featured,
    status: project.status,
    gradient: project.gradient,
    stats: project.metrics,
    metrics: project.customMetrics,
    newsletter: project.newsletter,
    year: project.year,
    color: project.gradient,
  }
}

/**
 * Converts an array of new Projects to legacy format
 */
export function toLegacyProjects(projects: Project[]): LegacyProject[] {
  return projects.map(toLegacyProject)
}

/**
 * @deprecated This function is no longer used to avoid circular dependencies
 * Use the data layer functions directly instead
 */
export function getLegacyProjects(): LegacyProject[] {
  console.warn('getLegacyProjects is deprecated. Use the data layer functions directly.')
  return []
}
