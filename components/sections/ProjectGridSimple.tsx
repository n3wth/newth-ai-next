'use client'

import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { ProjectGridProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  const getGridClass = (index: number): string => {
    if (index === 0) return 'lg:col-span-2'
    if (index === 1) return 'lg:col-span-1'
    if (index === 2) return 'lg:col-span-1'
    if (index === 3) return 'lg:col-span-2'
    return 'lg:col-span-1'
  }

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-3 gap-6', className)}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={cn('relative group', getGridClass(index))}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="relative h-full p-8 sm:p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)]">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-pink-600/10" />
            </div>

            <div className="relative">
              <div className="mb-4">
                <span className="text-xs text-gray-500 font-sans">{project.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white font-sans group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>

              {project.metrics && (
                <div className="flex gap-4 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className={cn('text-sm font-medium', metric.color)}>
                      {metric.label}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-400 mb-6 font-sans">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 font-mono transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors group/link"
                  >
                    Visit
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
