'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X, Bug } from 'lucide-react'

type PerformanceEntryWithDetails = PerformanceEntry & {
  renderTime?: number
  loadTime?: number
  hadRecentInput?: boolean
  value?: number
  processingStart?: number
  startTime?: number
  transferSize?: number
}

type ReactInternalFiber = {
  memoizedProps?: Record<string, unknown>
  elementType?: { name?: string }
  child?: ReactInternalFiber
  sibling?: ReactInternalFiber
  return?: ReactInternalFiber
}

type ReactRootContainer = {
  _internalRoot?: {
    current?: ReactInternalFiber
  }
}

export function DevTools() {
  const [isOpen, setIsOpen] = useState(false)
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    domNodes: 0,
  })
  const [webVitals, setWebVitals] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  })

  // Web Vitals monitoring
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    if (typeof window === 'undefined') return

    const supportsEntryType = (type: string) => {
      if (typeof PerformanceObserver === 'undefined') return false
      const entryTypes = PerformanceObserver.supportedEntryTypes
      return Array.isArray(entryTypes) ? entryTypes.includes(type) : false
    }

    const cleanups: Array<() => void> = []

    try {
      const navEntries =
        typeof performance.getEntriesByType === 'function'
          ? (performance.getEntriesByType('navigation') as PerformanceNavigationTiming[])
          : []
      const navTiming = navEntries[0]

      if (navTiming) {
        setWebVitals((prev) => ({
          ...prev,
          ttfb: Math.round(navTiming.responseStart - navTiming.fetchStart),
          fcp: Math.round(navTiming.loadEventEnd - navTiming.fetchStart),
        }))
      } else {
        const timing = performance.timing
        if (timing) {
          setWebVitals((prev) => ({
            ...prev,
            ttfb: Math.round(timing.responseStart - timing.fetchStart),
            fcp: Math.round(timing.domContentLoadedEventEnd - timing.fetchStart),
          }))
        }
      }
    } catch (error) {
      console.warn('DevTools: unable to read navigation timings', error)
    }

    if (supportsEntryType('largest-contentful-paint')) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntryWithDetails
          setWebVitals((prev) => ({
            ...prev,
            lcp: Math.round(lastEntry.renderTime || lastEntry.loadTime || 0),
          }))
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
        cleanups.push(() => lcpObserver.disconnect())
      } catch (error) {
        console.warn('DevTools: unable to observe LCP', error)
      }
    }

    if (supportsEntryType('layout-shift')) {
      let clsScore = 0
      try {
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as PerformanceEntryWithDetails[]) {
            if (!entry.hadRecentInput) {
              clsScore += entry.value || 0
              setWebVitals((prev) => ({ ...prev, cls: Math.round(clsScore * 1000) / 1000 }))
            }
          }
        })
        clsObserver.observe({ type: 'layout-shift', buffered: true })
        cleanups.push(() => clsObserver.disconnect())
      } catch (error) {
        console.warn('DevTools: unable to observe CLS', error)
      }
    }

    if (supportsEntryType('first-input')) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEntryWithDetails[]
          if (entries.length > 0) {
            setWebVitals((prev) => ({
              ...prev,
              fid: Math.round((entries[0].processingStart || 0) - (entries[0].startTime || 0)),
            }))
          }
        })
        fidObserver.observe({ type: 'first-input', buffered: true })
        cleanups.push(() => fidObserver.disconnect())
      } catch (error) {
        console.warn('DevTools: unable to observe FID', error)
      }
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    if (!isOpen) return

    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number
    let hasWarnedMemoryAccess = false

    const measureMetrics = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        let memoryUsage = 0
        try {
          const memoryInfo = (
            performance as Performance & {
              memory?: { usedJSHeapSize: number }
            }
          ).memory
          if (memoryInfo) {
            memoryUsage = Math.round(memoryInfo.usedJSHeapSize / 1048576)
          }
        } catch (error) {
          if (!hasWarnedMemoryAccess) {
            console.warn('DevTools: unable to access memory metrics', error)
            hasWarnedMemoryAccess = true
          }
        }

        setMetrics({
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
          memory: memoryUsage,
          domNodes: document.getElementsByTagName('*').length,
        })
        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measureMetrics)
    }

    animationId = requestAnimationFrame(measureMetrics)
    return () => cancelAnimationFrame(animationId)
  }, [isOpen])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <>
      {/* Floating Debug Button - Vercel Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[100] h-8 w-8 bg-[#000] border border-[#333] rounded-md flex items-center justify-center hover:bg-[#111] transition-colors"
      >
        <Bug className="w-4 h-4 text-[#999] hover:text-[#fafafa]" />
      </button>

      {/* Debug Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[101]"
            />

            {/* Panel - Vercel Dashboard Style */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-[320px] bg-[#0a0a0a] border-l border-[#333] z-[102] overflow-hidden flex flex-col"
            >
              {/* Minimal Header */}
              <div className="flex items-center justify-between px-4 h-10 border-b border-[#222] flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[#666] text-[11px] font-mono uppercase">DevTools</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#666] hover:text-[#fafafa] transition-colors p-1 rounded hover:bg-[#111]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Routes Section */}
                <div className="p-4">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                    App Routes
                  </div>
                  <div className="space-y-1">
                    <RouteLink href="/" label="Homepage" />
                    <RouteLink href="/projects" label="Projects Gallery" />
                    <RouteLink href="/work" label="Work Experience" />
                  </div>
                </div>

                {/* Demos Section */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                    Demo Pages
                  </div>
                  <div className="space-y-1">
                    <RouteLink href="/demos" label="All Demos" />
                    <RouteLink href="/demos/logo-effects" label="Logo Effects & Keyframes" />
                    <RouteLink href="/demos/backgrounds-demo" label="Background Effects" />
                    <RouteLink href="/demos/hero-no-header" label="Standalone Hero" />
                  </div>
                </div>

                {/* System Info */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                    Environment
                  </div>
                  <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-lg border border-[#222] p-3">
                    <div className="space-y-2.5">
                      <InfoRow label="Next.js" value="15.5.3" />
                      <InfoRow label="React" value="18.3.1" />
                      <InfoRow label="TypeScript" value="5.x" />
                      <InfoRow label="Tailwind" value="3.4.x" />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                    Developer Actions
                  </div>
                  <div className="space-y-1.5">
                    <ActionButton
                      onClick={() => {
                        localStorage.clear()
                        sessionStorage.clear()
                        if ('caches' in window) {
                          caches.keys().then((names) => {
                            names.forEach((name) => caches.delete(name))
                          })
                        }
                        window.location.reload()
                      }}
                      label="Clear All Storage"
                      description="Clear cache, local & session storage"
                    />
                    <ActionButton
                      onClick={() => {
                        const url = new URL(window.location.href)
                        url.searchParams.set('t', Date.now().toString())
                        window.location.href = url.toString()
                      }}
                      label="Force Refresh"
                      description="Bypass cache completely"
                    />
                    <ActionButton
                      onClick={() => {
                        console.clear()
                        console.log('Console cleared at', new Date().toISOString())
                      }}
                      label="Clear Console"
                      description="Clean browser console"
                    />
                  </div>
                </div>

                {/* Developer Actions - Expanded */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                    Advanced Actions
                  </div>
                  <div className="space-y-1.5">
                    <ActionButton
                      onClick={() => {
                        // Toggle React DevTools Profiler
                        const event = new CustomEvent('react-devtools-profiler-toggle')
                        window.dispatchEvent(event)
                        console.log('⚛️ React DevTools Profiler toggled')
                      }}
                      label="Toggle React Profiler"
                      description="Start/stop React performance profiling"
                    />
                    <ActionButton
                      onClick={() => {
                        // Log all registered service workers
                        if ('serviceWorker' in navigator) {
                          navigator.serviceWorker.getRegistrations().then((registrations) => {
                            console.log('📦 Service Workers:', registrations.length)
                            registrations.forEach((reg) => {
                              console.log('  - Scope:', reg.scope)
                              console.log('  - State:', reg.active?.state)
                              reg.unregister()
                            })
                            if (registrations.length > 0) {
                              console.log('✅ All service workers unregistered')
                            }
                          })
                        }
                      }}
                      label="Clear Service Workers"
                      description="Unregister all service workers"
                    />
                    <ActionButton
                      onClick={() => {
                        // Export performance metrics
                        const perfData = {
                          navigation: performance.getEntriesByType('navigation'),
                          resources: performance.getEntriesByType('resource').map((r) => ({
                            name: r.name,
                            duration: Math.round(r.duration),
                            size: (r as PerformanceEntryWithDetails).transferSize || 0,
                          })),
                          webVitals: webVitals,
                          memory: performance.memory,
                          timing: performance.timing,
                        }
                        const blob = new Blob([JSON.stringify(perfData, null, 2)], {
                          type: 'application/json',
                        })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = `performance-${Date.now()}.json`
                        a.click()
                        URL.revokeObjectURL(url)
                      }}
                      label="Export Performance Data"
                      description="Download performance metrics as JSON"
                    />
                    <ActionButton
                      onClick={() => {
                        // Show all event listeners
                        const allElements = document.querySelectorAll('*')
                        const listeners = new Map()
                        allElements.forEach((el) => {
                          const reactEl = el as HTMLElement & {
                            _reactInternalFiber?: ReactInternalFiber
                          }
                          const events = reactEl._reactInternalFiber?.memoizedProps
                          if (events) {
                            Object.keys(events).forEach((key) => {
                              if (key.startsWith('on')) {
                                const tagName = el.tagName.toLowerCase()
                                const id = el.id ? `#${el.id}` : ''
                                const classes = el.className
                                  ? `.${Array.from(el.classList).join('.')}`
                                  : ''
                                const selector = `${tagName}${id}${classes}`.slice(0, 50)
                                if (!listeners.has(selector)) listeners.set(selector, [])
                                listeners.get(selector).push(key)
                              }
                            })
                          }
                        })
                        console.log('🎯 Event Listeners:', Object.fromEntries(listeners))
                      }}
                      label="Log Event Listeners"
                      description="Show all React event handlers"
                    />
                  </div>
                </div>

                {/* Debug Utilities */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                    Debug Utilities
                  </div>
                  <div className="space-y-1.5">
                    <ActionButton
                      onClick={() => {
                        // Enable verbose logging
                        localStorage.setItem('debug', '*')
                        console.log('🔊 Verbose logging enabled. Refresh page to see debug output.')
                      }}
                      label="Enable Debug Mode"
                      description="Turn on verbose console logging"
                    />
                    <ActionButton
                      onClick={() => {
                        // Show bundle analysis
                        window.open('/_next/webpack-hmr', '_blank')
                      }}
                      label="Webpack Bundle Stats"
                      description="View bundle composition"
                    />
                    <ActionButton
                      onClick={() => {
                        // Log React component tree
                        const nextRoot = document.getElementById('__next') as HTMLElement & {
                          _reactRootContainer?: ReactRootContainer
                        }
                        const fiber = nextRoot?._reactRootContainer?._internalRoot?.current
                        if (fiber) {
                          const components = new Set<string>()
                          let node: ReactInternalFiber | undefined = fiber
                          while (node) {
                            if (node.elementType?.name) {
                              components.add(node.elementType.name)
                            }
                            node = node.child || node.sibling || node.return
                          }
                          console.log('🌳 Component Tree:', Array.from(components))
                        }
                      }}
                      label="Log Component Tree"
                      description="Show all React components"
                    />
                    <ActionButton
                      onClick={() => {
                        // Test error boundary
                        throw new Error('Test error boundary - this is intentional!')
                      }}
                      label="Test Error Boundary"
                      description="Trigger an error to test handling"
                    />
                  </div>
                </div>

                {/* Network & Resources */}
                <div className="p-4 pt-0">
                  <div className="text-[#666] text-[10px] font-medium uppercase tracking-wider mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2" />
                    Network & Resources
                  </div>
                  <div className="space-y-1.5">
                    <ExternalLink
                      href="/_next/static/development/_devPagesManifest.json"
                      label="Pages Manifest"
                    />
                    <ExternalLink
                      href="/_next/static/development/_buildManifest.js"
                      label="Build Manifest"
                    />
                    <ExternalLink href="/api/health" label="API Health Check" />
                    <ExternalLink
                      href="#"
                      label="Network Activity"
                      onClick={(e) => {
                        e.preventDefault()
                        const entries = performance.getEntriesByType(
                          'resource'
                        ) as PerformanceResourceTiming[]
                        console.table(
                          entries.map((e) => ({
                            name: e.name.split('/').pop(),
                            duration: Math.round(e.duration),
                            size:
                              Math.round(
                                ((e as PerformanceEntryWithDetails).transferSize || 0) / 1024
                              ) + 'kb',
                            type: e.initiatorType,
                          }))
                        )
                      }}
                    />
                    <ExternalLink
                      href="https://github.com/olivernewth/newth-ai-next-v1"
                      label="View Source"
                    />
                  </div>
                </div>
              </div>

              {/* Footer with Metrics */}
              <div className="px-4 py-3 border-t border-[#333] bg-[#050505] flex-shrink-0">
                <div className="space-y-2">
                  {/* Web Vitals */}
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div className="text-center">
                      <div
                        className={`font-mono ${webVitals.lcp < 2500 ? 'text-emerald-500' : webVitals.lcp < 4000 ? 'text-yellow-500' : 'text-red-500'}`}
                      >
                        {webVitals.lcp}ms
                      </div>
                      <div className="text-[#666]">LCP</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`font-mono ${webVitals.cls < 0.1 ? 'text-emerald-500' : webVitals.cls < 0.25 ? 'text-yellow-500' : 'text-red-500'}`}
                      >
                        {webVitals.cls}
                      </div>
                      <div className="text-[#666]">CLS</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`font-mono ${webVitals.fid < 100 ? 'text-emerald-500' : webVitals.fid < 300 ? 'text-yellow-500' : 'text-red-500'}`}
                      >
                        {webVitals.fid}ms
                      </div>
                      <div className="text-[#666]">FID</div>
                    </div>
                  </div>
                  {/* Separator */}
                  <div className="border-t border-[#333]" />
                  {/* Live Metrics */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[#666] text-[11px] font-mono whitespace-pre">
                        {`${metrics.fps.toString().padStart(3, ' ')} FPS • ${metrics.memory.toString().padStart(4, ' ')} MB • ${metrics.domNodes.toString().padStart(5, ' ')} nodes`}
                      </span>
                    </div>
                    <span className="text-[#666] text-[11px] font-mono">DEV MODE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function RouteLink({ href, label }: { href: string; label: string }) {
  const isActive = typeof window !== 'undefined' && window.location.pathname === href

  return (
    <Link
      href={href}
      className={`flex items-center px-2.5 py-2 rounded-md text-[12px] transition-all ${
        isActive
          ? 'bg-gradient-to-r from-[#111] to-[#1a1a1a] text-[#fafafa] border border-[#333] shadow-sm'
          : 'text-[#999] hover:text-[#fafafa] hover:bg-[#111]'
      }`}
    >
      <span className="text-[#555] mr-2 font-mono text-[10px]">›</span>
      {label}
    </Link>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[11px] py-0.5">
      <span className="text-[#555]">{label}</span>
      <span className="text-[#999] font-mono bg-[#050505] px-2 py-0.5 rounded">{value}</span>
    </div>
  )
}

function ActionButton({
  onClick,
  label,
  description,
}: {
  onClick: () => void
  label: string
  description: string
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#111] hover:to-[#0a0a0a] transition-all group border border-transparent hover:border-[#222]"
    >
      <div className="text-[12px] text-[#999] group-hover:text-[#fafafa] font-medium">{label}</div>
      <div className="text-[10px] text-[#555] mt-0.5">{description}</div>
    </button>
  )
}

function ExternalLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: (e: React.MouseEvent) => void
}) {
  const isExternal = href.startsWith('http') || href.startsWith('chrome:')

  return (
    <a
      href={href}
      onClick={onClick}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className="flex items-center px-2.5 py-2 rounded-md text-[12px] text-[#999] hover:text-[#fafafa] hover:bg-[#111] transition-all"
    >
      <span className="text-[#555] mr-2 text-[10px]">↗</span>
      {label}
    </a>
  )
}

// Type declaration for performance.memory
declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
  }
}
