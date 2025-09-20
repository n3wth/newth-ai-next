'use client'

import { useEffect, useState } from 'react'

interface AnnouncementMessage {
  id: string
  message: string
  priority: 'polite' | 'assertive'
  timestamp: number
}

interface AccessibilityAnnouncerProps {
  className?: string
}

/**
 * Accessibility announcer component that provides aria-live regions
 * for dynamic content updates and screen reader announcements
 */
export function AccessibilityAnnouncer({ className = '' }: AccessibilityAnnouncerProps) {
  const [announcements, setAnnouncements] = useState<AnnouncementMessage[]>([])

  // Clean up old announcements after 5 seconds
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      setAnnouncements((prev) => prev.filter((announcement) => now - announcement.timestamp < 5000))
    }, 1000)

    return () => clearInterval(cleanup)
  }, [])

  // Global function to announce messages (can be called from anywhere in the app)
  useEffect(() => {
    const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
      const announcement: AnnouncementMessage = {
        id: `announcement-${Date.now()}-${Math.random()}`,
        message,
        priority,
        timestamp: Date.now(),
      }
      setAnnouncements((prev) => [...prev, announcement])
    }

    // Make announce function globally available
    ;(window as Window & { announceForScreenReader?: typeof announce }).announceForScreenReader =
      announce

    return () => {
      delete (window as Window & { announceForScreenReader?: typeof announce })
        .announceForScreenReader
    }
  }, [])

  const politeAnnouncements = announcements.filter((a) => a.priority === 'polite')
  const assertiveAnnouncements = announcements.filter((a) => a.priority === 'assertive')

  return (
    <>
      {/* Polite announcements - for non-urgent updates */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className={`sr-only ${className}`}
        role="status"
        aria-label="Non-urgent announcements"
      >
        {politeAnnouncements.map((announcement) => (
          <div key={announcement.id}>{announcement.message}</div>
        ))}
      </div>

      {/* Assertive announcements - for urgent updates */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        className={`sr-only ${className}`}
        role="alert"
        aria-label="Urgent announcements"
      >
        {assertiveAnnouncements.map((announcement) => (
          <div key={announcement.id}>{announcement.message}</div>
        ))}
      </div>

      {/* Status region for form validation and loading states */}
      <div
        id="status-region"
        aria-live="polite"
        aria-atomic="false"
        className="sr-only"
        role="status"
        aria-label="Application status updates"
      />

      {/* Error region for error messages */}
      <div
        id="error-region"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        role="alert"
        aria-label="Error messages"
      />
    </>
  )
}

// Utility function to announce messages from components
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) {
  if (typeof window !== 'undefined') {
    const windowWithAnnounce = window as Window & {
      announceForScreenReader?: (msg: string, pri: 'polite' | 'assertive') => void
    }
    windowWithAnnounce.announceForScreenReader?.(message, priority)
  }
}

// Utility function to update status region
export function updateStatusRegion(message: string) {
  if (typeof window !== 'undefined') {
    const statusRegion = document.getElementById('status-region')
    if (statusRegion) {
      statusRegion.textContent = message
    }
  }
}

// Utility function to update error region
export function updateErrorRegion(message: string) {
  if (typeof window !== 'undefined') {
    const errorRegion = document.getElementById('error-region')
    if (errorRegion) {
      errorRegion.textContent = message
    }
  }
}
