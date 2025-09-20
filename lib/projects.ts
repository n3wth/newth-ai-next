/**
 * @deprecated Use '@/lib/data' instead
 * This file is kept for backward compatibility
 */

import { toLegacyProjects } from '@/lib/data/adapter'
import {
  projects as newProjects,
  getFeaturedProjects as getNewFeaturedProjects,
  getActiveProjects as getNewActiveProjects,
  getProjectsByTag as getNewProjectsByTag,
  getAllTags as getNewAllTags,
} from '@/lib/data'
import type { LegacyProject } from '@/lib/data/types'

// Export legacy Project interface for backward compatibility
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

// Convert new projects to legacy format
export const projects: LegacyProject[] = toLegacyProjects(newProjects)

// Legacy function wrappers
export function getFeaturedProjects(): LegacyProject[] {
  return toLegacyProjects(getNewFeaturedProjects())
}

export function getActiveProjects(): LegacyProject[] {
  return toLegacyProjects(getNewActiveProjects())
}

export function getProjectsByTag(tag: string): LegacyProject[] {
  return toLegacyProjects(getNewProjectsByTag(tag))
}

export function getAllTags(): string[] {
  return getNewAllTags()
}
