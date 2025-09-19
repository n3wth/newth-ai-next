'use client'

import { memo } from 'react'
import { ArrowUpRight, Github, Globe, Star, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export const ProjectCard = memo(function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    experimental: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl animate-glow"
        style={{
          background: `linear-gradient(135deg, ${project.gradient || 'from-purple-500/20 to-blue-500/20'})`,
        }}
      />
      <div className="relative h-full rounded-2xl glass neu-card p-6 transition-all duration-300 group-hover:scale-[1.02]">
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
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
})
