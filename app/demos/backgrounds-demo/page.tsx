'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { WarpBackground } from '@/components/WarpBackground'
import {
  WarpBackgroundAlternatives,
  type WarpVariant,
} from '@/components/WarpBackgroundAlternatives'
import { motion } from 'framer-motion'

type Background = {
  id: string
  name: string
  variant?: WarpVariant
  key: string
  isOriginal?: boolean
}

const backgrounds: Background[] = [
  { id: 'neural', name: 'Neural', variant: 'neural', key: '1' },
  { id: 'particle', name: 'Particle', variant: 'particle', key: '2' },
  { id: 'glitch', name: 'Glitch', variant: 'glitch', key: '3' },
  { id: 'waveform', name: 'Wave', variant: 'waveform', key: '4' },
  { id: 'dataflow', name: 'Data', variant: 'dataflow', key: '5' },
  { id: 'coderain', name: 'Matrix', variant: 'coderain', key: '6' },
  { id: 'atoms', name: 'Atoms', variant: 'atoms', key: '7' },
  { id: 'original', name: 'Warp', key: '8', isOriginal: true },
]

// Vercel-style classes
const vercelClasses = {
  panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
  button: {
    base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150 flex items-center gap-1.5',
    active: 'bg-[#fafafa] text-[#000]',
    inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
  },
  text: {
    label: 'text-[#666] text-[11px]',
    value: 'text-[#fafafa] font-mono text-[11px]',
    key: 'font-mono text-[11px] opacity-50',
  },
  animation: {
    duration: 0.15,
    easeOut: { duration: 0.15 },
  },
}

function BackgroundSelector({
  backgrounds,
  selected,
  onSelect,
}: {
  backgrounds: Background[]
  selected: string
  onSelect: (id: string, key: string) => void
}) {
  return (
    <motion.div
      className="fixed top-4 left-4 z-50"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={vercelClasses.animation.easeOut}
    >
      <div className={`${vercelClasses.panel} p-1`}>
        <div className="flex items-center gap-1">
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              onClick={() => onSelect(bg.id, bg.key)}
              className={`
                ${vercelClasses.button.base}
                ${selected === bg.id ? vercelClasses.button.active : vercelClasses.button.inactive}
              `}
            >
              <span className={vercelClasses.text.key}>{bg.key}</span>
              <span>{bg.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function PerformanceMetrics({ variant }: { variant: string }) {
  return (
    <motion.div
      className="fixed top-4 right-4 z-40"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={vercelClasses.animation.easeOut}
    >
      <div className={`${vercelClasses.panel} px-3 py-2 bg-[#0a0a0a]/90 backdrop-blur-sm`}>
        <div className="flex items-center gap-4">
          <MetricItem label="Variant" value={variant} />
          <MetricItem label="Type" value="WebGL" />
        </div>
      </div>
    </motion.div>
  )
}

function MetricItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={vercelClasses.text.label}>{label}:</span>
      <span className={vercelClasses.text.value}>{value}</span>
    </div>
  )
}

function BackgroundsDemoContent() {
  const searchParams = useSearchParams()
  const bgParam = searchParams.get('bg')

  const initialBg = bgParam ? backgrounds.find((b) => b.key === bgParam)?.id || 'neural' : 'neural'

  const [selected, setSelected] = useState<string>(initialBg)

  // Sync with URL
  useEffect(() => {
    if (bgParam) {
      const bg = backgrounds.find((b) => b.key === bgParam)
      if (bg) setSelected(bg.id)
    }
  }, [bgParam])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const bg = backgrounds.find((b) => b.key === e.key)
      if (bg) {
        setSelected(bg.id)
        window.history.pushState(null, '', `?bg=${bg.key}`)
      }
    }
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  const handleSelectBg = (bgId: string, bgKey: string) => {
    setSelected(bgId)
    window.history.pushState(null, '', `?bg=${bgKey}`)
  }

  const currentBg = backgrounds.find((bg) => bg.id === selected)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundSelector backgrounds={backgrounds} selected={selected} onSelect={handleSelectBg} />

      <PerformanceMetrics variant={selected} />

      {/* Background Display */}
      <div className="absolute inset-0">
        {currentBg?.isOriginal ? (
          <WarpBackground className="min-h-screen" />
        ) : (
          <WarpBackgroundAlternatives
            variant={currentBg?.variant || 'neural'}
            className="min-h-screen"
          />
        )}
      </div>
    </div>
  )
}

export default function BackgroundsDemo() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className={vercelClasses.text.label}>Loading...</div>
        </div>
      }
    >
      <BackgroundsDemoContent />
    </Suspense>
  )
}
