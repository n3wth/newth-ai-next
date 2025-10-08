'use client'

// TODO: Performance - Virtualize grid for large project lists
// TODO: Feature - Add filter/sort functionality for projects
// TODO: Animation - Add stagger effect for cards on initial load
// TODO: Feature - Add project preview on hover (screenshots/videos)
// TODO: Accessibility - Improve keyboard navigation between cards

import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { ProjectGridProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useProjectAnalytics } from '@/lib/hooks/useAnalytics'

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  const { trackProjectClick, isTrackingAllowed } = useProjectAnalytics()

  const getGridClass = (index: number): string => {
    if (index === 0) return 'lg:col-span-2'
    if (index === 1) return 'lg:col-span-1'
    if (index === 2) return 'lg:col-span-1'
    if (index === 3) return 'lg:col-span-2'
    return 'lg:col-span-1'
  }

  const handleProjectClick = (
    projectId: string,
    projectTitle: string,
    linkType: 'visit' | 'github',
    position: number
  ) => {
    if (isTrackingAllowed) {
      trackProjectClick(projectId, projectTitle, linkType, position)
    }
  }

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-3 gap-6', className)}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={cn('relative group', getGridClass(index))}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
          data-analytics-project-id={project.id}
          data-analytics-project-title={project.title}
          data-analytics-position={index}
        >
          <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15] overflow-hidden shadow-2xl shadow-black/50 hover:shadow-violet-500/10">
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-violet-500/10 via-purple-500/5 to-transparent blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-4">
                <span className="text-xs text-gray-500 font-sans">{project.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-sans transition-colors duration-300 group-hover:text-violet-100">
                {project.title}
              </h3>

              {project.metrics && (
                <div className="flex gap-4 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className={cn('text-sm font-semibold', metric.color)}>
                      {metric.label}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-400 mb-6 font-sans leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-400 font-mono transition-all duration-200 hover:text-gray-300 hover:bg-white/[0.08] hover:border-white/[0.12]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-all duration-200 group/link"
                    onClick={() => handleProjectClick(project.id, project.title, 'visit', index)}
                    data-analytics-link-type="visit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-all duration-200 group/link"
                    onClick={() => handleProjectClick(project.id, project.title, 'github', index)}
                    data-analytics-link-type="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover/link:scale-110" />
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
