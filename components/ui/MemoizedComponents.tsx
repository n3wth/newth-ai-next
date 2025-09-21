import { memo } from 'react'
import { ProjectCard as BaseProjectCard } from '../ProjectCard'
import { BlogCard as BaseBlogCard } from '../BlogCard'
import { TerminalCard as BaseTerminalCard } from './TerminalCard'

// Memoize heavy components to prevent unnecessary re-renders
export const ProjectCard = memo(BaseProjectCard)
export const BlogCard = memo(BaseBlogCard)
export const TerminalCard = memo(BaseTerminalCard)

// Export display names for debugging
ProjectCard.displayName = 'MemoizedProjectCard'
BlogCard.displayName = 'MemoizedBlogCard'
TerminalCard.displayName = 'MemoizedTerminalCard'
