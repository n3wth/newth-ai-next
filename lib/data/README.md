# Project Data Layer

A comprehensive, centralized data management system for the portfolio website, replacing hardcoded project data with a flexible, CMS-like architecture.

## 🎯 Features

- ✅ **Centralized Data Management** - All project data in one place
- ✅ **Rich Type Safety** - Comprehensive TypeScript interfaces
- ✅ **Advanced Filtering** - Filter by category, status, tags, tech stack, and more
- ✅ **Search Functionality** - Full-text search across all project content
- ✅ **Backward Compatibility** - Existing components work without changes
- ✅ **Easy Project Addition** - Add new projects by updating one file
- ✅ **Data Validation** - Built-in validation and integrity checks
- ✅ **Admin Utilities** - Bulk operations and management tools

## 📁 File Structure

```
lib/data/
├── README.md           # This file
├── index.ts           # Main entry point
├── projects.ts        # Project data and core functions
├── types.ts           # TypeScript interfaces
├── adapter.ts         # Legacy compatibility layer
├── examples.ts        # Usage examples
├── admin.ts           # Admin utilities
└── MIGRATION.md       # Migration guide
```

## 🚀 Quick Start

### Basic Usage

```typescript
import { getFeaturedProjects, getActiveProjects } from '@/lib/data'

// Get featured projects for homepage
const featured = getFeaturedProjects()

// Get all active projects
const active = getActiveProjects()
```

### Advanced Filtering

```typescript
import {
  getProjectsByCategory,
  getProjectsByTag,
  searchProjects,
  getProjectsFromYear,
} from '@/lib/data'

// Get projects by category
const webProjects = getProjectsByCategory('web')
const libraries = getProjectsByCategory('library')

// Get projects by technology
const reactProjects = getProjectsByTag('React')
const aiProjects = getProjectsByTag('AI')

// Search projects
const searchResults = searchProjects('machine learning')

// Get recent projects
const recentProjects = getProjectsFromYear('2025')
```

### Project Statistics

```typescript
import { getProjectStats, getAllTags, getAllCategories } from '@/lib/data'

const stats = getProjectStats()
// { total: 12, featured: 3, active: 8, experimental: 3, archived: 1 }

const availableTags = getAllTags()
const categories = getAllCategories()
```

## 📊 Project Data Structure

Each project follows this comprehensive schema:

```typescript
interface Project {
  // Core identification
  id: string
  title: string
  description: string
  longDescription?: string

  // Classification
  category: 'web' | 'mobile' | 'desktop' | 'cli' | 'library' | 'other'
  status: 'active' | 'experimental' | 'archived'
  featured: boolean
  archived: boolean
  year?: string

  // Content
  tags: string[] // For categorization
  techStack: string[] // Technologies used

  // Links
  links: {
    website?: string
    github?: string
    demo?: string
  }

  // Analytics & metrics
  metrics?: {
    stars?: number
    downloads?: number
    users?: number
  }
  customMetrics?: Array<{
    label: string
    value?: string | number
    color?: string
  }>

  // Visual
  gradient?: string
  image?: string

  // Features
  newsletter?: boolean
}
```

## ➕ Adding New Projects

Simply edit `/lib/data/projects.ts` and add to the projects array:

```typescript
{
  id: 'my-new-project',
  title: 'My Awesome Project',
  description: 'A brief description of what this project does',
  category: 'web',
  status: 'active',
  featured: false,
  archived: false,
  year: '2025',
  tags: ['React', 'TypeScript', 'Web'],
  techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  links: {
    website: 'https://example.com',
    github: 'https://github.com/user/repo',
  },
  gradient: 'from-blue-500/20 to-purple-500/20',
}
```

## 🔧 Admin Utilities

The system includes powerful admin utilities for data management:

```typescript
import {
  validateProject,
  runDataIntegrityChecks,
  projectTemplates,
  generateProjectId,
} from '@/lib/data/admin'

// Validate a project
const validation = validateProject(myProject)
if (!validation.valid) {
  console.error('Errors:', validation.errors)
}

// Check data integrity
const integrityCheck = runDataIntegrityChecks()

// Use templates for quick project creation
const newWebApp = projectTemplates.webApp()
newWebApp.id = generateProjectId('My App')
```

## 🔄 Migration Guide

### For Existing Components

**No changes required!** The system is fully backward compatible. Existing imports will continue to work:

```typescript
// This still works
import { projects, getFeaturedProjects } from '@/lib/projects'
```

### For New Components

Use the new data layer for enhanced functionality:

```typescript
// Recommended for new components
import { getFeaturedProjects, searchProjects } from '@/lib/data'
```

## 📈 Available Functions

### Core Data Access

- `projects` - All projects array
- `getProjectById(id)` - Get single project
- `getProjectStats()` - Project statistics

### Filtering Functions

- `getFeaturedProjects()` - Featured projects only
- `getActiveProjects()` - Active projects only
- `getExperimentalProjects()` - Experimental projects only
- `getArchivedProjects()` - Archived projects only
- `getProjectsByStatus(status)` - Filter by status
- `getProjectsByCategory(category)` - Filter by category
- `getProjectsByTag(tag)` - Filter by tag
- `getProjectsByTechStack(tech)` - Filter by technology
- `getProjectsFromYear(year)` - Filter by year

### Search & Discovery

- `searchProjects(query)` - Full-text search
- `getAllTags()` - Get all available tags
- `getAllTechStack()` - Get all technologies
- `getAllCategories()` - Get all categories
- `getAllYears()` - Get all project years

### Utility Functions

- `getProjectsWithMetrics()` - Projects with metrics
- `getProjectsWithNewsletter()` - Newsletter-featured projects

## 🧪 Testing

The data layer includes comprehensive tests:

```bash
npm test -- test/lib/data.test.ts
```

Tests cover:

- Data structure validation
- Filtering functions
- Search functionality
- Data integrity
- Type safety

## 🎨 Examples

See `/lib/data/examples.ts` for comprehensive usage examples including:

- Homepage project selection
- Portfolio pagination
- Technology-specific pages
- Search functionality
- Admin dashboards
- Related projects
- Statistics and analytics

## 🛠️ Future Enhancements

This data layer provides the foundation for:

1. **Database Migration** - Easy transition to dynamic data sources
2. **CMS Integration** - Connect to headless CMS systems
3. **API Endpoints** - Expose project data via REST/GraphQL APIs
4. **Real-time Updates** - Live project data synchronization
5. **Advanced Analytics** - Enhanced project metrics and insights

## 📝 Best Practices

1. **Always validate** new projects before adding them
2. **Use TypeScript** interfaces for type safety
3. **Leverage filtering functions** instead of manual array operations
4. **Keep data pure** - no business logic in data files
5. **Test changes** with the included test suite
6. **Follow naming conventions** for consistent project IDs

---

This data layer transforms the hardcoded project management into a scalable, maintainable system that can grow with the portfolio while maintaining perfect backward compatibility.
