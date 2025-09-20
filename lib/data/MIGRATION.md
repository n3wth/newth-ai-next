# Project Data Layer Migration Guide

This guide helps you migrate from the old hardcoded project data to the new centralized data layer.

## Overview

The new data layer provides:

- ✅ Centralized project management
- ✅ TypeScript interfaces for better type safety
- ✅ Rich filtering and search capabilities
- ✅ Support for categories, tags, and custom metrics
- ✅ Easy addition of new projects
- ✅ Backward compatibility with existing components

## Quick Migration

### Before (Old Way)

```typescript
// Old import
import { projects, getFeaturedProjects } from '@/lib/projects'

// Usage
const featuredProjects = getFeaturedProjects()
```

### After (New Way)

```typescript
// New import
import { projects, getFeaturedProjects } from '@/lib/data'
// or specific imports
import { getFeaturedProjects, getActiveProjects } from '@/lib/data/projects'

// Usage (same API)
const featuredProjects = getFeaturedProjects()
```

## API Changes

### Project Interface Changes

**Old Project Interface:**

```typescript
interface Project {
  id: string
  title: string
  description: string
  link?: string
  github?: string
  tags: string[]
  featured: boolean
  status: 'active' | 'experimental' | 'archived'
  gradient?: string
  stats?: { stars?: number; downloads?: number; users?: number }
}
```

**New Project Interface:**

```typescript
interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  archived: boolean
  year?: string
  tags: string[]
  techStack: string[]
  links: {
    website?: string
    github?: string
    demo?: string
  }
  metrics?: ProjectMetrics
  customMetrics?: CustomMetric[]
  gradient?: string
  newsletter?: boolean
}
```

### New Features Available

1. **Categories**: Organize projects by type

```typescript
import { getProjectsByCategory } from '@/lib/data'

const webProjects = getProjectsByCategory('web')
const libraries = getProjectsByCategory('library')
```

2. **Advanced Search**:

```typescript
import { searchProjects } from '@/lib/data'

const aiProjects = searchProjects('AI machine learning')
```

3. **Filtering by Tech Stack**:

```typescript
import { getProjectsByTechStack } from '@/lib/data'

const reactProjects = getProjectsByTechStack('React')
```

4. **Statistics**:

```typescript
import { getProjectStats } from '@/lib/data'

const stats = getProjectStats()
// { total: 12, featured: 3, active: 8, experimental: 3, archived: 1 }
```

## Component Migration Examples

### Example 1: Hero Section

**Before:**

```typescript
// components/HeroSection.tsx
import { getFeaturedProjects } from '@/lib/projects'

export function HeroSection() {
  const projects = getFeaturedProjects().slice(0, 3)
  // ...
}
```

**After:**

```typescript
// components/HeroSection.tsx
import { getFeaturedProjects } from '@/lib/data'

export function HeroSection() {
  const projects = getFeaturedProjects().slice(0, 3)
  // Same code - backward compatible!
}
```

### Example 2: Project Grid with New Features

**Before:**

```typescript
// Limited filtering options
const projects = getFeaturedProjects()
```

**After:**

```typescript
// Rich filtering capabilities
import { getFeaturedProjects, getProjectsByCategory, getProjectsFromYear } from '@/lib/data'

// Multiple options
const featuredProjects = getFeaturedProjects()
const webProjects = getProjectsByCategory('web')
const recentProjects = getProjectsFromYear('2025')
```

### Example 3: Search Functionality

**New Feature:**

```typescript
// components/ProjectSearch.tsx
import { searchProjects, getProjectsByTag } from '@/lib/data'

export function ProjectSearch({ query }: { query: string }) {
  const results = searchProjects(query)
  const relatedByTag = getProjectsByTag('React')

  return (
    <div>
      <h2>Search Results ({results.length})</h2>
      {results.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
```

## Adding New Projects

### Old Way (Hardcoded)

```typescript
// Had to edit component files directly
const projects = [
  { id: 'project1', title: 'Project 1', ... },
  { id: 'project2', title: 'Project 2', ... },
  // Add new project here and update multiple files
]
```

### New Way (Centralized)

```typescript
// Just edit /lib/data/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: 'new-project',
    title: 'My New Project',
    description: 'An awesome new project',
    category: 'web',
    status: 'active',
    featured: false,
    archived: false,
    year: '2025',
    tags: ['React', 'TypeScript', 'Next.js'],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    links: {
      website: 'https://example.com',
      github: 'https://github.com/user/repo',
    },
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
]
```

## Project Templates

Use templates for quick project creation:

```typescript
import { projectTemplates, generateProjectId } from '@/lib/data/admin'

// Create a new web app project
const newWebApp = projectTemplates.webApp()
newWebApp.id = generateProjectId('My Awesome App')
newWebApp.title = 'My Awesome App'
newWebApp.description = 'A fantastic web application'

// Create an AI library project
const aiLib = projectTemplates.aiProject()
```

## Data Validation

Ensure data integrity:

```typescript
import { validateProject, runDataIntegrityChecks } from '@/lib/data/admin'

// Validate a single project
const validation = validateProject(myProject)
if (!validation.valid) {
  console.error('Project errors:', validation.errors)
}

// Check all projects
const integrityCheck = runDataIntegrityChecks()
if (!integrityCheck.valid) {
  console.error('Data issues:', integrityCheck.issues)
}
```

## Best Practices

1. **Always use the new data layer** for new components
2. **Validate projects** before adding them
3. **Use TypeScript** for better type safety
4. **Leverage filtering functions** instead of manual array operations
5. **Keep the data layer pure** - no business logic in data files
6. **Use admin utilities** for bulk operations

## Backward Compatibility

The old files (`/lib/projects.ts`, `/lib/config/projects.ts`) still work but are deprecated. They now import from the new data layer and convert formats automatically.

**Migration is optional** - existing components will continue to work without changes.

## Breaking Changes

None! The new system is fully backward compatible.

## Future Migration Path

1. **Phase 1** ✅ - New data layer with backward compatibility
2. **Phase 2** - Update components to use new features gradually
3. **Phase 3** - Remove old files after all components are updated
4. **Phase 4** - Consider database migration for dynamic content

## Getting Help

If you encounter issues during migration:

1. Check the TypeScript errors - they'll guide you to what needs updating
2. Look at `/lib/data/examples.ts` for usage patterns
3. Use the admin utilities in `/lib/data/admin.ts` for validation
4. The old API still works, so you can migrate gradually
