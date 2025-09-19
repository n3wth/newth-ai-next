'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { AnimatedLogo } from '@/components/AnimatedLogo'

// Vercel-style classes (matching backgrounds-demo)
const vercelClasses = {
  panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
  button: {
    base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150',
    active: 'bg-[#fafafa] text-[#000]',
    inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
  },
  text: {
    label: 'text-[#666] text-[11px] font-normal',
    value: 'text-[#fafafa] font-mono text-[11px]',
    key: 'font-mono text-[11px] text-[#666]',
    description: 'text-[#555] text-[10px]',
  },
  animation: {
    duration: 0.15,
    easeOut: { duration: 0.15 },
  },
}

// Wrapper to force specific glitch mode on AnimatedLogo
function LogoWithEffect({ effect, forceFrame }: { effect: string; forceFrame?: number }) {
  // We'll create a modified version that accepts forced effects
  return <AnimatedLogoForced glitchMode={effect} forcedFrame={forceFrame} />
}

// Modified AnimatedLogo that accepts forced glitch mode and intensity
function AnimatedLogoForced({
  glitchMode,
  forcedFrame,
  forcedIntensity = 1,
}: {
  glitchMode: string
  forcedFrame?: number
  forcedIntensity?: number
}) {
  const [frame, setFrame] = useState(forcedFrame || 0)
  const [invertedCharIndex, setInvertedCharIndex] = useState(-1)
  const [isHovered, setIsHovered] = useState(false)
  const [glitchIntensity, setGlitchIntensity] = useState(forcedIntensity)

  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']
  const asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']
  // Removed - now defined locally in transformChar

  useEffect(() => {
    if (glitchMode === 'single-invert') {
      setInvertedCharIndex(Math.floor(Math.random() * asciiLogo.join('').length))
    }
  }, [glitchMode])

  useEffect(() => {
    if (forcedFrame === undefined) {
      const interval = setInterval(() => {
        setFrame((prev) => prev + 1)
        // Smooth intensity oscillation for live demo
        if (glitchMode !== 'normal' && glitchMode !== 'single-invert') {
          const wave = Math.sin(Date.now() * 0.002) * 0.3 + 0.7 // 0.4 to 1.0
          setGlitchIntensity(wave)
        } else if (glitchMode === 'single-invert') {
          setGlitchIntensity(1)
        }
      }, 20)
      return () => clearInterval(interval)
    } else {
      // Static frame with full intensity for keyframes
      setGlitchIntensity(forcedIntensity)
      return undefined
    }
  }, [forcedFrame, glitchMode, forcedIntensity])

  const transformChar = (char: string, index: number, lineIndex: number, currentFrame: number) => {
    if (char === ' ') return char
    if (glitchIntensity < 0.01) return char

    switch (glitchMode) {
      case 'normal':
        return char

      case 'rainbow':
        return char // Color handled separately

      case 'typewriter':
        const typewriterProgress =
          (currentFrame * 2 * glitchIntensity) % (asciiLogo.join('').length + 20)
        const distanceFromCursor = Math.abs(index + lineIndex * 25 - typewriterProgress)
        if (index + lineIndex * 25 > typewriterProgress) {
          return Math.random() < glitchIntensity ? '░' : char
        } else if (distanceFromCursor < 3) {
          return char === ' ' ? char : Math.random() < glitchIntensity ? '▓' : char
        }
        return char

      case 'blocks':
        const blockChars = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫']
        if (Math.random() < glitchIntensity) {
          const wave = Math.sin(currentFrame * 0.05 + index * 0.3) * 0.5 + 0.5
          const blockIndex = Math.floor(wave * blockChars.length * glitchIntensity)
          return char !== ' ' ? blockChars[blockIndex] : char
        }
        return char

      case 'ascii-rain':
        const bars = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█']
        const fallSpeed = 0.1 * glitchIntensity
        const fallPosition = (currentFrame * fallSpeed + index * 2) % 20
        if (Math.random() < glitchIntensity * 0.3) {
          if (fallPosition < bars.length) {
            return bars[Math.floor(fallPosition)]
          } else if (fallPosition < bars.length + 2) {
            return '░'
          }
        }
        return char

      case 'corruption':
        if (Math.random() < glitchIntensity * 0.15) {
          const corruptChars = [
            '•',
            '◦',
            '◉',
            '○',
            '◌',
            '◍',
            '◎',
            '●',
            '◢',
            '◣',
            '◤',
            '◥',
            '▲',
            '▼',
            '◀',
            '▶',
          ]
          return corruptChars[Math.floor(Math.random() * corruptChars.length)]
        }
        return char

      case 'scan-lines':
        const scanPosition = (currentFrame / 2) % 10
        const scanInt = Math.exp(-Math.abs(lineIndex * 3 - scanPosition)) * glitchIntensity
        if (scanInt > 0.3) {
          return char === ' ' ? char : '▬'
        } else if (scanInt > 0.1) {
          return char === ' ' ? char : '═'
        }
        return char

      case 'pixel-sort':
        const shades = ['░', '▒', '▓', '█']
        const sortWave = Math.sin(currentFrame * 0.1 + lineIndex) * 0.5 + 0.5
        const sortThreshold = Math.sin(currentFrame * 0.05) * 0.5 + 0.5
        if (Math.random() < sortThreshold * glitchIntensity * 0.3 && index > sortWave * 20) {
          const shadeIndex = Math.floor((currentFrame * 0.2 + index) % shades.length)
          return shades[shadeIndex]
        }
        return char

      case 'single-invert':
        return char

      default:
        return char
    }
  }

  // Reuse the rendering logic from AnimatedLogo
  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1">
        <div className="relative">
          <div className="relative">
            {asciiLogo.map((line, lineIndex) => {
              let charOffset = 0
              for (let i = 0; i < lineIndex; i++) {
                charOffset += asciiLogo[i].length
              }

              return (
                <motion.div
                  key={lineIndex}
                  className="text-white"
                  style={{
                    filter:
                      glitchMode === 'scan-lines' && lineIndex === (frame / 2) % 3
                        ? 'brightness(1.5) contrast(1.2)'
                        : glitchMode === 'corruption'
                          ? `hue-rotate(${Math.sin(frame * 0.05) * 30}deg)`
                          : 'none',
                  }}
                >
                  {line.split('').map((char, charIndex) => {
                    const globalCharIndex = charOffset + charIndex
                    const isInverted = globalCharIndex === invertedCharIndex
                    const displayChar = transformChar(char, charIndex, lineIndex, frame)
                    const isGlitching = displayChar !== char

                    const waveOffset = Math.sin(frame * 0.03 + lineIndex * 2) * 30
                    const rawHue = charIndex * 15 - frame * 2 + waveOffset
                    const hue = ((rawHue % 360) + 360) % 360
                    const saturation =
                      (85 + Math.sin(frame * 0.05) * 10) *
                      (isHovered || glitchMode === 'rainbow' ? 1 : glitchIntensity * 0.3)
                    const lightness = 55 + Math.sin(frame * 0.07 + charIndex * 0.2) * 10
                    const rainbowIntensity =
                      isHovered || glitchMode === 'rainbow'
                        ? 1
                        : glitchMode === 'normal'
                          ? 0
                          : glitchIntensity * 0.3
                    const baseColor =
                      rainbowIntensity > 0 ? `hsl(${hue}, ${saturation}%, ${lightness}%)` : 'white'

                    return (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        style={{
                          opacity: displayChar === ' ' ? 0 : 1,
                          color: isInverted
                            ? `rgba(0, 0, 0, ${glitchIntensity})`
                            : isGlitching && glitchMode !== 'typewriter'
                              ? `rgba(150, 150, 150, ${glitchIntensity})`
                              : baseColor,
                          backgroundColor: isInverted
                            ? `rgba(255, 255, 255, ${glitchIntensity})`
                            : 'transparent',
                          padding: isInverted ? '0 1px' : '0',
                        }}
                      >
                        {displayChar}
                      </motion.span>
                    )
                  })}
                </motion.div>
              )
            })}
          </div>
        </div>
        <div className="text-gray-400 text-[8px] leading-[8px] -mt-0.5">
          {asciiDotAI.map((line, lineIndex) => (
            <motion.div key={lineIndex}>{line}</motion.div>
          ))}
        </div>
      </pre>
    </div>
  )
}

// Single effect demo row
function EffectRow({
  effect,
  label,
  description,
  keyframes = [0, 60, 120, 180, 240, 300],
  index,
}: {
  effect: string
  label: string
  description: string
  keyframes?: number[]
  index: number
}) {
  return (
    <motion.div
      className={vercelClasses.panel}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...vercelClasses.animation.easeOut, delay: index * 0.05 }}
    >
      <div className="p-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={vercelClasses.text.value}>{label}</h3>
            <p className={vercelClasses.text.description}>{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-[auto,1fr] gap-4 items-start">
          <div>
            <div className={`${vercelClasses.text.label} mb-1 h-4`}>Live</div>
            <div className="flex-shrink-0">
              <div className="text-center mb-1 text-[11px] font-mono text-[#666]">—</div>
              <div className="p-2 bg-[#050505] border border-[#222] rounded">
                <LogoWithEffect effect={effect} />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className={`${vercelClasses.text.label} mb-1 h-4`}>Keyframes</div>
            <div className="flex gap-2">
              {keyframes.map((kf) => (
                <div key={kf} className="flex-shrink-0">
                  <div className="text-center mb-1 text-[11px] font-mono text-[#666]">f{kf}</div>
                  <div className="p-2 bg-[#050505] border border-[#222] rounded">
                    <LogoWithEffect effect={effect} forceFrame={kf} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Header Controls Component
function HeaderControls({ keyframes, onCopyUrl }: { keyframes: number[]; onCopyUrl: () => void }) {
  return (
    <motion.div
      className="fixed top-4 right-4 z-40"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={vercelClasses.animation.easeOut}
    >
      <div className={`${vercelClasses.panel} p-1`}>
        <div className="flex items-center">
          <button
            onClick={onCopyUrl}
            className={`${vercelClasses.button.base} ${vercelClasses.button.inactive}`}
          >
            <span className={vercelClasses.text.key}>?keyframes={keyframes.join(',')}</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function LogoEffectsDemo() {
  const searchParams = useSearchParams()
  const [customKeyframes, setCustomKeyframes] = useState<number[]>([])

  // Parse keyframes from URL
  useEffect(() => {
    const keyframesParam = searchParams.get('keyframes')
    if (keyframesParam) {
      const frames = keyframesParam
        .split(',')
        .map((f) => parseInt(f))
        .filter((f) => !isNaN(f))
      if (frames.length > 0) {
        setCustomKeyframes(frames)
      }
    }
  }, [searchParams])

  const effects = [
    { id: 'normal', label: 'Normal', description: 'Clean white ASCII text - baseline' },
    {
      id: 'rainbow',
      label: 'Rainbow Wave',
      description: 'Animated HSL gradient with wave distortion',
    },
    {
      id: 'typewriter',
      label: 'Typewriter Glow',
      description: 'Progressive reveal with cursor glow',
    },
    { id: 'blocks', label: 'Morphing Wave', description: 'Smooth sine wave block transitions' },
    { id: 'ascii-rain', label: 'Matrix Fall', description: 'Cascading character waterfall' },
    { id: 'corruption', label: 'Glitch Pulse', description: 'Pulsing corruption intensity' },
    { id: 'scan-lines', label: 'CRT Scanner', description: 'Realistic CRT scan with decay' },
    { id: 'pixel-sort', label: 'Data Mosh', description: 'Dynamic threshold pixel sorting' },
    {
      id: 'single-invert',
      label: 'Invert Highlight',
      description: 'High contrast character inversion',
    },
  ]

  const colorConfigs = [
    { label: 'Default', props: {} },
    { label: 'No Hover Color', props: { enableColorOnHover: false } },
    { label: 'Glitch Colors', props: { enableColorOnGlitch: true } },
    { label: 'Low Saturation', props: { baseSaturation: 30 } },
    { label: 'High Saturation', props: { baseSaturation: 100 } },
    { label: 'Half Intensity', props: { colorIntensity: 0.5 } },
  ]

  const defaultKeyframes =
    customKeyframes.length > 0 ? customKeyframes : [0, 60, 120, 180, 240, 300]

  const copyUrl = () => {
    const url = `${window.location.origin}/demos/logo-effects?keyframes=${defaultKeyframes.join(',')}`
    navigator.clipboard.writeText(url)
  }

  return (
    <div className="min-h-screen bg-[#000]">
      {/* Left Controls - removed for now */}

      {/* Right Controls */}
      <HeaderControls keyframes={defaultKeyframes} onCopyUrl={copyUrl} />

      {/* Content */}
      <div className="pt-16 p-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Color Configuration Examples */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <h2 className="text-white text-sm mb-4">Color Saturation Options</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {colorConfigs.map((config, index) => (
                <motion.div
                  key={config.label}
                  className={vercelClasses.panel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...vercelClasses.animation.easeOut, delay: index * 0.03 }}
                >
                  <div className="p-3">
                    <div className="mb-2">
                      <h3 className={vercelClasses.text.value}>{config.label}</h3>
                      <p className={vercelClasses.text.key}>
                        {JSON.stringify(config.props)
                          .replace(/[{}"]/g, '')
                          .replace(/:/g, ': ')
                          .replace(/,/g, ', ') || 'default'}
                      </p>
                    </div>
                    <div className="p-2 bg-[#050505] border border-[#222] rounded">
                      <AnimatedLogo {...config.props} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Effects Grid */}
          <h2 className="text-white text-sm mb-4">Glitch Effects</h2>
          <div className="grid grid-cols-1 gap-3">
            {effects.map((effect, index) => (
              <EffectRow
                key={effect.id}
                effect={effect.id}
                label={effect.label}
                description={effect.description}
                keyframes={defaultKeyframes}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
