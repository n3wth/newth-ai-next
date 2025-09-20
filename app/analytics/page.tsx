'use client'

import { AnalyticsDashboard } from '@/components/AnalyticsDashboard'
import { useAnalyticsContext } from '@/components/AnalyticsProvider'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, RefreshCw, BarChart3 } from 'lucide-react'

// Import the type from AnalyticsProvider component
type AnalyticsInsights = {
  totalEvents: number
  projectClicks: number
  topProjects: Array<{
    id: string
    title: string
    totalClicks: number
    visitClicks: number
    githubClicks: number
  }>
  sessionSummary: unknown
  generatedAt: string
}

/**
 * Analytics Insights Page
 *
 * Internal page for monitoring project engagement and analytics data
 * Only accessible in development or with proper authentication
 */
export default function AnalyticsPage() {
  const { getInsights, isTrackingAllowed, sessionId } = useAnalyticsContext()
  const [insights, setInsights] = useState<AnalyticsInsights | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshInsights = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setInsights(getInsights())
      setIsRefreshing(false)
    }, 500)
  }

  const downloadInsights = () => {
    const data = getInsights()
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `analytics-insights-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!isTrackingAllowed) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <BarChart3 className="w-16 h-16 text-gray-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Analytics Not Available</h1>
            <p className="text-gray-500">
              Analytics tracking is disabled. Enable analytics to view insights.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics Insights</h1>
              <p className="text-gray-400">
                Project engagement tracking and user interaction insights
              </p>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <span>Session: {sessionId.slice(-8)}</span>
                <span>•</span>
                <span>Privacy-friendly tracking</span>
                <span>•</span>
                <span>GDPR compliant</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={refreshInsights}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={downloadInsights}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <AnalyticsDashboard showDetailedStats={true} />
        </motion.div>

        {/* Raw Insights (Development) */}
        {process.env.NODE_ENV === 'development' && insights && (
          <motion.div
            className="mt-8 p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Raw Insights Data (Development Only)
            </h3>
            <pre className="text-xs text-gray-400 overflow-auto max-h-96 bg-black/20 p-4 rounded border border-white/[0.06]">
              {JSON.stringify(insights, null, 2)}
            </pre>
          </motion.div>
        )}

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Privacy & Compliance</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                GDPR compliant data collection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Session-based tracking only
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                No personal identification
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Respects Do Not Track
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                User consent management
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Data Collection</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Project card click events
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Visit vs GitHub link preferences
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Project position engagement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Device type (mobile/desktop)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Session duration and activity
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
