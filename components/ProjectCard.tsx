'use client'

import { memo } from 'react'
import { ArrowUpRight, Github, Globe, Star, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    experimental: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  return (
    <div className="group relative">
      <div className="relative h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
            <span
              className={cn(
                'inline-flex px-2 py-1 text-xs font-medium rounded-full border',
                statusColors[project.status]
              )}
            >
              {project.status}
            </span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4 text-gray-400" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Visit project"
              >
                <Globe className="h-4 w-4 text-gray-400" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="View demo"
              >
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-lg text-gray-500">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {project.stats && (
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {project.stats.stars && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="h-3 w-3" />
                <span>{project.stats.stars}</span>
              </div>
            )}
            {project.stats.downloads && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Download className="h-3 w-3" />
                <span>{project.stats.downloads}</span>
              </div>
            )}
          </div>
        )}

        {project.featured && (
          <div className="absolute -top-2 -right-2">
            <span className="inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </div>
        )}
      </div>
    </div>
  )
})
