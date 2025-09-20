'use client'

import { useState, useEffect } from 'react'
import { useAnalytics } from '@/lib/hooks/useAnalytics'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, BarChart3, Cookie } from 'lucide-react'

interface AnalyticsConsentProps {
  position?: 'bottom' | 'top'
  showDetailedInfo?: boolean
}

/**
 * GDPR-compliant Analytics Consent Banner
 *
 * Features:
 * - Clear explanation of data collection
 * - Easy accept/decline options
 * - Detailed privacy information
 * - Remembers user preference
 * - Can be dismissed without consent
 */
export function AnalyticsConsent({
  position = 'bottom',
  showDetailedInfo = false,
}: AnalyticsConsentProps) {
  const { setConsent, consentGiven, clearAnalyticsData } = useAnalytics()
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(showDetailedInfo)

  // Show banner if consent hasn't been given yet
  useEffect(() => {
    if (consentGiven === null) {
      // Delay showing the banner to avoid blocking initial page interaction
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
    return
  }, [consentGiven])

  const handleAccept = () => {
    setConsent(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    setConsent(false)
    clearAnalyticsData()
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    // Keep consent as null (no explicit choice)
  }

  if (!isVisible || consentGiven !== null) {
    return null
  }

  const positionClasses = position === 'bottom' ? 'bottom-4 sm:bottom-6' : 'top-4 sm:top-6'

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed ${positionClasses} left-4 right-4 sm:left-6 sm:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50`}
        initial={{ opacity: 0, y: position === 'bottom' ? 100 : -100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: position === 'bottom' ? 100 : -100, scale: 0.95 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          duration: 0.3,
        }}
      >
        <div className="relative p-6 rounded-xl bg-black/90 backdrop-blur-md border border-white/[0.08] shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/[0.08] transition-colors text-gray-400 hover:text-white"
            aria-label="Dismiss consent banner"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Privacy & Analytics</h3>
          </div>

          {/* Main content */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              We use privacy-friendly analytics to understand how you interact with our projects.
              This helps us improve the experience while respecting your privacy.
            </p>

            {!showDetails && (
              <button
                onClick={() => setShowDetails(true)}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors underline"
              >
                What data do we collect?
              </button>
            )}

            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
              >
                <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                  Data We Collect
                </h4>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <span>Which projects you click on (to understand popularity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <span>Whether you visit project links or GitHub repositories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <span>Basic device type (mobile/desktop) for better design</span>
                  </li>
                </ul>

                <h4 className="text-sm font-medium text-white mb-3 mt-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  Privacy Protection
                </h4>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    <span>No personal identification or tracking across sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    <span>Session-based data only (cleared when you leave)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    <span>Respects &ldquo;Do Not Track&rdquo; browser setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    <span>Can be disabled at any time</span>
                  </li>
                </ul>

                <button
                  onClick={() => setShowDetails(false)}
                  className="mt-3 text-blue-400 hover:text-blue-300 text-xs transition-colors underline"
                >
                  Show less
                </button>
              </motion.div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
            >
              Allow Analytics
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-gray-300 hover:text-white text-sm font-medium transition-colors border border-white/[0.08]"
            >
              No Thanks
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <Cookie className="w-3 h-3" />
              GDPR compliant • No tracking cookies • Data stays local
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

/**
 * Simple consent status indicator for development
 */
export function ConsentStatus() {
  const { consentGiven, isTrackingAllowed } = useAnalytics()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (process.env.NODE_ENV !== 'development' || !mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="px-3 py-2 rounded-lg bg-black/80 backdrop-blur border border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${isTrackingAllowed ? 'bg-green-400' : 'bg-red-400'}`}
          />
          <span className="text-gray-300">
            Analytics:{' '}
            {consentGiven === true ? 'Enabled' : consentGiven === false ? 'Disabled' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  )
}
