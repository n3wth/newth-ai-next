'use client'

import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { ProjectGridProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function MagneticCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { damping: 30, stiffness: 200 })
  const mouseY = useSpring(y, { damping: 30, stiffness: 200 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Normalize to -0.5 to 0.5
    x.set(distanceX / rect.width)
    y.set(distanceY / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        scale: { type: 'spring', stiffness: 400, damping: 30 },
      }}
      className={className}
    >
      <motion.div
        className="relative h-full"
        animate={{
          z: isHovered ? 50 : 0,
        }}
        transition={{
          z: { type: 'spring', stiffness: 400, damping: 30 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
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
        <MagneticCard key={project.id} className={cn('relative group', getGridClass(index))}>
          <div className="relative h-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl">
            {/* Glow effect that follows mouse */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 blur-xl" />
            </div>

            <div className="relative">
              <div className="mb-4">
                <span className="text-xs text-gray-500 font-sans">{project.year}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white font-sans">{project.title}</h3>

              {project.metrics && (
                <div className="flex gap-4 mb-4">
                  {project.metrics.map((metric, i) => (
                    <motion.span
                      key={i}
                      className={cn('text-sm font-medium', metric.color)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {metric.label}
                    </motion.span>
                  ))}
                </div>
              )}

              <p className="text-gray-400 mb-6 font-sans">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors group/link"
                  >
                    Visit
                    <motion.div
                      animate={{ x: 0, y: 0 }}
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors group/link"
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Github className="w-4 h-4" />
                    </motion.div>
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </MagneticCard>
      ))}
    </div>
  )
}
