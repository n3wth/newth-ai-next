'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { Project } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ProjectGridProps {
  projects: Project[]
  className?: string
}

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn('relative group', getGridClass(index))}
        >
          <div className="relative h-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
              <div className="mb-4">
                <span className="text-xs text-gray-500 font-sans">
                  {project.year}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white font-sans">
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

              <p className="text-gray-400 mb-6 font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Visit
                    <ArrowUpRight className="w-3 h-3" />
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