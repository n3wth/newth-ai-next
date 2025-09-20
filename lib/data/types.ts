/**
 * Type definitions for the project data layer
 */

export type ProjectStatus = 'active' | 'experimental' | 'archived'

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'cli' | 'library' | 'other'

export interface ProjectLinks {
  website?: string
  github?: string
  demo?: string
}

export interface ProjectMetrics {
  stars?: number
  downloads?: number
  users?: number
}

export interface CustomMetric {
  label: string
  value?: string | number
  color?: string
}

export interface Project {
  // Core identification
  id: string
  title: string
  description: string
  longDescription?: string

  // Classification
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  archived: boolean
  year?: string

  // Content
  tags: string[]
  techStack: string[]
  links: ProjectLinks

  // Analytics & metrics
  metrics?: ProjectMetrics
  customMetrics?: CustomMetric[]

  // Visual
  gradient?: string
  image?: string

  // Features
  newsletter?: boolean
}

export interface ProjectFilters {
  status?: ProjectStatus[]
  category?: ProjectCategory[]
  tags?: string[]
  techStack?: string[]
  featured?: boolean
  archived?: boolean
  hasGitHub?: boolean
  hasWebsite?: boolean
  hasMetrics?: boolean
  year?: string[]
}

export interface ProjectSearchOptions {
  query?: string
  filters?: ProjectFilters
  sortBy?: 'title' | 'year' | 'status' | 'featured'
  sortOrder?: 'asc' | 'desc'
  limit?: number
  offset?: number
}

export interface ProjectStats {
  total: number
  featured: number
  active: number
  experimental: number
  archived: number
  withGitHub: number
  withWebsite: number
  withNewsletter: number
}

// Legacy support for existing components
export interface LegacyProject {
  id: string
  title: string
  description: string
  longDescription?: string
  link?: string
  github?: string
  demo?: string
  tags: string[]
  tech?: string[]
  featured: boolean
  status: 'active' | 'experimental' | 'archived'
  icon?: string
  gradient?: string
  stats?: {
    stars?: number
    downloads?: number
    users?: number
  }
  metrics?: Array<{
    label: string
    value?: string | number
    color?: string
  }>
  newsletter?: boolean
  year?: string
  color?: string
}
