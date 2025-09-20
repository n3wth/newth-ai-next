/**
 * Main entry point for the project data layer
 * Provides a clean API for accessing project data throughout the application
 */

export * from './projects'
export * from './types'

// Re-export commonly used functions with shorter names
export {
  projects as allProjects,
  getFeaturedProjects as featured,
  getActiveProjects as active,
  getExperimentalProjects as experimental,
  getArchivedProjects as archived,
  searchProjects as search,
  getProjectById as findById,
  getProjectStats as stats,
} from './projects'
