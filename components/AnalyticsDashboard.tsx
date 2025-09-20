'use client'

import { useState, useEffect } from 'react'
import { useAnalytics } from '@/lib/hooks/useAnalytics'
import { motion } from 'framer-motion'
import { BarChart3, Eye, ExternalLink, Github, TrendingUp } from 'lucide-react'

interface ProjectEngagement {
  projectId: string
  projectTitle: string
  totalClicks: number
  visitClicks: number
  githubClicks: number
  averagePosition: number
  lastClick: number
}

interface AnalyticsDashboardProps {
  className?: string
  showDetailedStats?: boolean
}

/**
 * Analytics Dashboard Component
 *
 * Displays project engagement metrics and analytics insights
 * - Privacy-friendly: Uses session-based analytics
 * - GDPR compliant: Respects user consent
 * - Real-time: Updates as users interact with projects
 */
export function AnalyticsDashboard({
  className = '',
  showDetailedStats = false,
}: AnalyticsDashboardProps) {
  const { eventQueue, isTrackingAllowed, consentGiven, getAnalyticsSummary } = useAnalytics()

  const [projectEngagement, setProjectEngagement] = useState<ProjectEngagement[]>([])
  const [totalEvents, setTotalEvents] = useState(0)
  const [sessionStart, setSessionStart] = useState<Date | null>(null)

  // Process event queue to generate engagement metrics
  useEffect(() => {
    const projectClicks = eventQueue.filter((event) => event.name === 'project_click')
    const engagementMap = new Map<string, ProjectEngagement>()

    projectClicks.forEach((event) => {
      const properties = (event.properties as Record<string, unknown>) || {}
      const { projectId, projectTitle, linkType, position } = properties

      if (!projectId || typeof projectId !== 'string') return

      const existing = engagementMap.get(projectId) || {
        projectId,
        projectTitle: (projectTitle as string) || 'Unknown Project',
        totalClicks: 0,
        visitClicks: 0,
        githubClicks: 0,
        averagePosition: 0,
        lastClick: 0,
      }

      existing.totalClicks += 1
      existing.lastClick = Math.max(existing.lastClick, event.timestamp || 0)

      if (linkType === 'visit') {
        existing.visitClicks += 1
      } else if (linkType === 'github') {
        existing.githubClicks += 1
      }

      // Update average position
      if (typeof position === 'number') {
        existing.averagePosition = (existing.averagePosition + position) / 2
      }

      engagementMap.set(projectId, existing)
    })

    const engagement = Array.from(engagementMap.values()).sort(
      (a, b) => b.totalClicks - a.totalClicks
    )

    setProjectEngagement(engagement)
    setTotalEvents(eventQueue.length)

    // Set session start if not already set
    if (!sessionStart && eventQueue.length > 0) {
      const firstEvent = eventQueue[0]
      setSessionStart(new Date(firstEvent.timestamp || Date.now()))
    }
  }, [eventQueue, sessionStart])

  const summary = getAnalyticsSummary()

  if (!isTrackingAllowed) {
    return (
      <div className={`p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-medium text-white">Analytics Dashboard</h3>
        </div>
        <p className="text-gray-500 text-sm">
          Analytics tracking is disabled. This respects your privacy preferences.
        </p>
      </div>
    )
  }

  return (
    <div className={`p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-5 h-5 text-green-400" />
        <h3 className="text-lg font-medium text-white">Analytics Dashboard</h3>
        <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400 border border-green-500/20">
          Live
        </span>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <motion.div
          className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-500">Total Events</span>
          </div>
          <span className="text-xl font-semibold text-white">{totalEvents}</span>
        </motion.div>

        <motion.div
          className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-500">Project Clicks</span>
          </div>
          <span className="text-xl font-semibold text-white">
            {projectEngagement.reduce((sum, p) => sum + p.totalClicks, 0)}
          </span>
        </motion.div>

        <motion.div
          className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <ExternalLink className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-gray-500">External Links</span>
          </div>
          <span className="text-xl font-semibold text-white">
            {projectEngagement.reduce((sum, p) => sum + p.visitClicks, 0)}
          </span>
        </motion.div>

        <motion.div
          className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Github className="w-4 h-4 text-orange-400" />
            <span className="text-xs text-gray-500">GitHub Views</span>
          </div>
          <span className="text-xl font-semibold text-white">
            {projectEngagement.reduce((sum, p) => sum + p.githubClicks, 0)}
          </span>
        </motion.div>
      </div>

      {/* Project Engagement Ranking */}
      {projectEngagement.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Top Performing Projects</h4>
          <div className="space-y-2">
            {projectEngagement.slice(0, 5).map((project, index) => (
              <motion.div
                key={project.projectId}
                className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-white block">
                      {project.projectTitle}
                    </span>
                    <span className="text-xs text-gray-500">
                      Position #{Math.round(project.averagePosition)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-purple-400" />
                    <span className="text-gray-400">{project.visitClicks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-3 h-3 text-orange-400" />
                    <span className="text-gray-400">{project.githubClicks}</span>
                  </div>
                  <span className="font-semibold text-white">{project.totalClicks}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Stats (for development/debugging) */}
      {showDetailedStats && (
        <div className="border-t border-white/[0.06] pt-4">
          <details className="group">
            <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Technical Details
            </summary>
            <div className="mt-3 p-3 rounded bg-black/20 border border-white/[0.06]">
              <pre className="text-xs text-gray-500 whitespace-pre-wrap">
                {JSON.stringify(summary, null, 2)}
              </pre>
            </div>
          </details>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="mt-4 pt-4 border-t border-white/[0.06]">
        <p className="text-xs text-gray-500">
          Privacy-friendly analytics • Session-based tracking • GDPR compliant
          {consentGiven === null && (
            <span className="ml-2 text-yellow-400">• Using essential analytics only</span>
          )}
        </p>
      </div>
    </div>
  )
}
