'use client'

import { VercelToolbar } from '@vercel/toolbar/next'
import { useState, useEffect } from 'react'
import { Code2, ChevronDown } from 'lucide-react'

export function UnifiedToolbar() {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(true) // Default to open
  const [metrics, setMetrics] = useState({
    fps: 60, // Start with default value
    memory: 0,
  })
  const [webVitals, setWebVitals] = useState({
    lcp: 0,
    cls: 0,
  })

  useEffect(() => {
    if (!isDevelopment) return

    // FPS monitoring
    let lastTime = performance.now()
    let frame = 0

    const measureFPS = () => {
      frame++
      const currentTime = performance.now()
      if (currentTime >= lastTime + 1000) {
        const calculatedFps = Math.round((frame * 1000) / (currentTime - lastTime))
        setMetrics((prev) => ({
          ...prev,
          fps: isNaN(calculatedFps) ? 60 : calculatedFps,
        }))
        frame = 0
        lastTime = currentTime
      }
      requestAnimationFrame(measureFPS)
    }
    const rafId = requestAnimationFrame(measureFPS)

    // Memory monitoring with debounce to prevent render loops
    const updateMetrics = () => {
      const performanceMemory = performance as unknown as { memory?: { usedJSHeapSize: number } }
      if (performanceMemory.memory) {
        const newMemory = Math.round(performanceMemory.memory!.usedJSHeapSize / 1048576)
        setMetrics((prev) => {
          // Only update if value actually changed to prevent unnecessary renders
          if (prev.memory !== newMemory) {
            return { ...prev, memory: newMemory }
          }
          return prev
        })
      }
    }

    const metricsInterval = setInterval(updateMetrics, 5000) // Reduced frequency from 2s to 5s
    updateMetrics()

    // Web Vitals - just LCP and CLS
    if (typeof PerformanceObserver !== 'undefined') {
      try {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            renderTime?: number
            loadTime?: number
          }
          setWebVitals((prev) => ({
            ...prev,
            lcp: Math.round(lastEntry.renderTime || lastEntry.loadTime || 0),
          }))
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        // CLS
        const clsObserver = new PerformanceObserver((list) => {
          let cls = 0
          for (const entry of list.getEntries() as Array<
            PerformanceEntry & { hadRecentInput?: boolean; value?: number }
          >) {
            if (!entry.hadRecentInput && entry.value) {
              cls += entry.value
            }
          }
          setWebVitals((prev) => ({
            ...prev,
            cls: Math.round(cls * 1000) / 1000,
          }))
        })
        clsObserver.observe({ type: 'layout-shift', buffered: true })

        return () => {
          lcpObserver.disconnect()
          clsObserver.disconnect()
          clearInterval(metricsInterval)
          cancelAnimationFrame(rafId)
        }
      } catch {
        // Silently fail if performance observers not available
      }
    }

    return () => {
      clearInterval(metricsInterval)
      cancelAnimationFrame(rafId)
    }
  }, [isDevelopment])

  if (!isDevelopment) return null

  // Simplified links
  const quickLinks = [
    { label: 'Demos', href: '/demos' },
    { label: 'GitHub', href: 'https://github.com/olivernewth/newth-ai-next-v1', external: true },
    {
      label: 'Vercel',
      href: 'https://vercel.com/olivers-projects-c088c9d9/newth-ai-next-v1',
      external: true,
    },
    { label: 'Claude', href: 'https://claude.ai', external: true },
  ]

  return (
    <>
      {/* Vercel Toolbar */}
      <VercelToolbar />

      {/* Minimal DevTools */}
      <div className="fixed bottom-4 right-4 z-[9999] font-mono text-xs">
        {!isDevToolsOpen && (
          <button
            onClick={() => setIsDevToolsOpen(true)}
            className="flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1.5 text-white backdrop-blur transition hover:bg-black"
          >
            <Code2 className="h-3 w-3" />
            <span className="text-[11px]">n3wth-dev-tools</span>
          </button>
        )}

        {isDevToolsOpen && (
          <div className="w-[240px] rounded-lg bg-black/90 p-3 text-white shadow-2xl backdrop-blur">
            <button
              onClick={() => setIsDevToolsOpen(false)}
              className="mb-2 flex w-full items-center justify-between rounded p-1 hover:bg-white/10"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                n3wth-dev-tools
              </h3>
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </button>

            <div className="space-y-2">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 rounded bg-white/5 p-2">
                <div>
                  <div className="text-[9px] text-gray-500">FPS</div>
                  <div
                    className={`text-xs font-bold ${metrics.fps >= 50 ? 'text-green-400' : 'text-yellow-400'}`}
                  >
                    {String(metrics.fps || 60)}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-500">MEM</div>
                  <div className="text-xs font-bold text-blue-400">
                    {String(metrics.memory || 0)}M
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-500">CLS</div>
                  <div
                    className={`text-xs font-bold ${webVitals.cls <= 0.1 ? 'text-green-400' : 'text-yellow-400'}`}
                  >
                    {String(webVitals.cls || 0)}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-1">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="rounded bg-white/10 px-2 py-1 text-[10px] hover:bg-white/20 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
