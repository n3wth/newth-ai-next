'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'

export interface AnimatedLogoProps {
  /**
   * If true, the logo displays a rainbow color effect on mouse hover.
   * @default true
   */
  enableColorOnHover?: boolean
  /**
   * If true, the logo shows colors during random glitch animations.
   * @default false
   */
  enableColorOnGlitch?: boolean
  /**
   * The base saturation level (0-100) for the color effects.
   * @default 85
   */
  baseSaturation?: number
  /**
   * A multiplier (0-1) to control the intensity of the applied colors.
   * @default 1
   */
  colorIntensity?: number
}

/**
 * Renders an animated ASCII art logo with dynamic glitch effects and interactive coloring.
 * The component cycles through various visual distortions at random intervals and reveals
 * a vibrant rainbow animation on hover.
 *
 * @component
 * @param {AnimatedLogoProps} props - The props for the AnimatedLogo component.
 *
 * @example
 * // Default usage
 * <AnimatedLogo />
 *
 * @example
 * // Enable colors during glitches and reduce intensity
 * <AnimatedLogo enableColorOnGlitch={true} colorIntensity={0.7} />
 *
 * @example
 * // Disable hover effect and set a lower base saturation
 * <AnimatedLogo enableColorOnHover={false} baseSaturation={60} />
 *
 * @implementation
 * The component uses `framer-motion` for subtle animations and `useEffect` hooks to manage state.
 * - **Glitch Effects**: A timer periodically triggers one of several glitch modes ('typewriter', 'blocks', 'corruption', etc.).
 *   Each mode transforms the ASCII characters in a unique way, controlled by a smoothed `glitchIntensity` value.
 *   This creates short, unpredictable visual disruptions.
 * - **Rainbow Animation**: When `enableColorOnHover` is true and the user hovers over the component,
 *   the color of each character is calculated based on its position and a continuously incrementing frame counter.
 *   This is achieved by cycling the HSL hue value, creating a dynamic, wave-like rainbow effect across the logo.
 *   The saturation and lightness are also modulated to add more vibrancy.
 */
export function AnimatedLogo({
  enableColorOnHover = true,
  enableColorOnGlitch = false,
  baseSaturation = 85,
  colorIntensity = 1,
}: AnimatedLogoProps = {}) {
  const [frame, setFrame] = useState(0)
  const [glitchMode, setGlitchMode] = useState<
    | 'normal'
    | 'typewriter'
    | 'blocks'
    | 'ascii-rain'
    | 'corruption'
    | 'scan-lines'
    | 'pixel-sort'
    | 'single-invert'
  >('normal')
  const [, setCharStates] = useState<Array<{ char: string; visible: boolean; variant: number }>>([])
  const [isHovered, setIsHovered] = useState(false)
  const [invertedCharIndex, setInvertedCharIndex] = useState(-1)
  const [glitchIntensity, setGlitchIntensity] = useState(0) // 0-1 smooth transition
  const lastGlitchTime = useRef(Date.now())
  const glitchDuration = useRef(0)
  const glitchStartTime = useRef(0)
  const glitchEndTime = useRef(Date.now()) // Track when glitch actually ends
  const targetIntensity = useRef(0)

  const asciiLogo = useMemo(
    () => ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █'],
    []
  )

  const asciiDotAI = useMemo(() => ['  ▄▀█ █', '  █▀█ █', '°'], [])

  // ASCII block variations for morphing
  const blockChars = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫']

  // ASCII art character sets for different effects
  const asciiSets = {
    blocks: ['█', '▓', '▒', '░'],
    lines: ['─', '│', '┌', '┐', '└', '┘', '├', '┤', '┬', '┴', '┼'],
    dots: ['•', '◦', '◉', '○', '◌', '◍', '◎', '●'],
    angles: ['◢', '◣', '◤', '◥', '◸', '◹', '◺', '◿'],
    shades: ['░', '▒', '▓', '█'],
    bars: [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
  }

  // Initialize character states
  useEffect(() => {
    const allChars = [...asciiLogo.join('').split(''), ...asciiDotAI.join('').split('')]
    const states = allChars.map((char) => ({
      char,
      visible: true,
      variant: 0,
    }))
    setCharStates(states)
  }, [asciiLogo, asciiDotAI])

  // Smooth glitch intensity transitions - reduced frequency for performance
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const elapsed = now - glitchStartTime.current

      if (glitchMode !== 'normal' && glitchDuration.current > 0) {
        // Ease in for first 20%, maintain for 60%, ease out for last 20%
        const progress = elapsed / glitchDuration.current

        if (progress < 0.2) {
          // Ease in using cubic easing
          const easeIn = (progress / 0.2) ** 2
          setGlitchIntensity(easeIn * targetIntensity.current)
        } else if (progress < 0.8) {
          // Maintain full intensity
          setGlitchIntensity(targetIntensity.current)
        } else if (progress < 1) {
          // Ease out using cubic easing
          const easeOut = 1 - ((progress - 0.8) / 0.2) ** 2
          setGlitchIntensity(easeOut * targetIntensity.current)
        } else {
          // Glitch ended
          setGlitchIntensity(0)
        }
      } else if (isHovered) {
        // Smooth hover transition
        setGlitchIntensity((prev) => Math.min(1, prev + 0.1))
      } else {
        // Fade out when not glitching
        setGlitchIntensity((prev) => Math.max(0, prev - 0.1))
      }
    }, 100) // Reduced from 20ms to 100ms for performance
    return () => clearInterval(interval)
  }, [glitchMode, isHovered])

  // Trigger random ASCII-themed glitch effects
  useEffect(() => {
    const startTime = Date.now()
    const modes: Array<typeof glitchMode> = [
      'typewriter',
      'blocks',
      'ascii-rain',
      'corruption',
      'scan-lines',
      'pixel-sort',
      'single-invert',
    ]
    let lastModeIndex = -1

    const checkGlitch = () => {
      const now = Date.now()
      const timeSinceStart = now - startTime
      const timeSinceLastGlitch = now - lastGlitchTime.current

      // Wait at least 5 seconds after page load before starting
      if (timeSinceStart < 5000) {
        return
      }

      // No glitch effects while hovering (rainbow takes over)
      if (isHovered) {
        setGlitchMode('normal')
        setInvertedCharIndex(-1)
        targetIntensity.current = 0
        return
      }

      // Check time since last glitch ENDED (not started)
      const timeSinceLastGlitchEnded = now - glitchEndTime.current

      // Random chance of glitch, but only if 1.5+ seconds have passed since last one ended (doubled frequency)
      if (timeSinceLastGlitchEnded > 1500 && timeSinceLastGlitch > 2500 && Math.random() < 0.06) {
        // Pick a random mode that's different from the last one
        const availableModes = modes.filter((_, index) => index !== lastModeIndex)
        const randomIndex = Math.floor(Math.random() * availableModes.length)
        const randomMode = availableModes[randomIndex]
        lastModeIndex = modes.indexOf(randomMode)

        setGlitchMode(randomMode)
        lastGlitchTime.current = now
        glitchStartTime.current = now

        // Different intensities for different effects (50% longer durations)
        switch (randomMode) {
          case 'typewriter':
          case 'blocks':
            targetIntensity.current = 0.8 + Math.random() * 0.2 // 80-100%
            glitchDuration.current = 1200 + Math.random() * 600 // 1.2-1.8s
            break
          case 'corruption':
          case 'pixel-sort':
            targetIntensity.current = 0.3 + Math.random() * 0.4 // 30-70%
            glitchDuration.current = 600 + Math.random() * 600 // 0.6-1.2s
            break
          case 'single-invert':
            // Include .AI suffix in total character count
            const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length
            const randomChar = Math.floor(Math.random() * totalChars)
            setInvertedCharIndex(randomChar)
            targetIntensity.current = 1 // Full intensity for invert
            glitchDuration.current = 1500 + Math.random() * 1500 // 1.5-3s
            break
          default:
            targetIntensity.current = 0.5 + Math.random() * 0.5 // 50-100%
            glitchDuration.current = 900 + Math.random() * 600 // 0.9-1.5s
        }

        // Reset to normal after duration
        setTimeout(() => {
          setGlitchMode('normal')
          setInvertedCharIndex(-1)
          targetIntensity.current = 0
          glitchEndTime.current = Date.now() // Mark when glitch actually ends
        }, glitchDuration.current)
      }
    }

    const interval = setInterval(checkGlitch, 250) // Check twice as often (250ms instead of 500ms)
    return () => clearInterval(interval)
  }, [isHovered, asciiLogo, asciiDotAI])

  // Frame animation for dynamic effects - reduced frequency for performance
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + 1) // Don't wrap, let it keep incrementing
    }, 200) // Reduced from 20ms to 200ms for performance
    return () => clearInterval(interval)
  }, [])

  // Transform character based on glitch mode with intensity
  const transformChar = (
    char: string,
    index: number,
    lineIndex: number,
    isAISuffix: boolean = false
  ) => {
    if (char === ' ') return char

    // No transformation if intensity is too low
    if (glitchIntensity < 0.01) return char

    // Adjust index for .AI suffix to continue from main logo
    const adjustedIndex = isAISuffix ? index + 24 : index
    const adjustedLineIndex = isAISuffix ? lineIndex + 3 : lineIndex

    switch (glitchMode) {
      case 'typewriter':
        // Progressive reveal with intensity-based speed
        const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length
        const typewriterProgress = (frame * 2 * glitchIntensity) % (totalChars + 20)
        const distanceFromCursor = Math.abs(
          adjustedIndex + adjustedLineIndex * 25 - typewriterProgress
        )
        if (adjustedIndex + adjustedLineIndex * 25 > typewriterProgress) {
          return Math.random() < glitchIntensity ? '░' : char
        } else if (distanceFromCursor < 3) {
          return char === ' ' ? char : Math.random() < glitchIntensity ? '▓' : char
        }
        return char

      case 'blocks':
        // Smooth wave morphing with intensity
        if (Math.random() < glitchIntensity) {
          const wave = Math.sin(frame * 0.05 + adjustedIndex * 0.3) * 0.5 + 0.5
          const blockIndex = Math.floor(wave * blockChars.length * glitchIntensity)
          return char !== ' ' && char !== '°' ? blockChars[blockIndex] : char
        }
        return char

      case 'ascii-rain':
        // Matrix-style with intensity controlling density
        const fallSpeed = 0.1 * glitchIntensity
        const fallPosition = (frame * fallSpeed + adjustedIndex * 2) % 20
        if (Math.random() < glitchIntensity * 0.3) {
          if (fallPosition < asciiSets.bars.length) {
            return asciiSets.bars[Math.floor(fallPosition)]
          } else if (fallPosition < asciiSets.bars.length + 2) {
            return '░'
          }
        }
        return char

      case 'corruption':
        // Corruption probability scales with intensity
        if (Math.random() < glitchIntensity * 0.15) {
          const corruptSets = [...asciiSets.dots, ...asciiSets.angles, '▲', '▼', '◀', '▶']
          return corruptSets[Math.floor(Math.random() * corruptSets.length)]
        }
        return char

      case 'scan-lines':
        // CRT scan with intensity affecting brightness
        const scanPosition = (frame / 2) % 10
        const scanInt = Math.exp(-Math.abs(adjustedLineIndex * 3 - scanPosition)) * glitchIntensity
        if (scanInt > 0.3) {
          return char === ' ' ? char : '▬'
        } else if (scanInt > 0.1) {
          return char === ' ' ? char : '═'
        }
        return char

      case 'pixel-sort':
        // Data mosh intensity controls disruption
        const sortWave = Math.sin(frame * 0.1 + adjustedLineIndex) * 0.5 + 0.5
        const sortThreshold = Math.sin(frame * 0.05) * 0.5 + 0.5
        if (
          Math.random() < sortThreshold * glitchIntensity * 0.3 &&
          adjustedIndex > sortWave * 20
        ) {
          const shadeIndex = Math.floor((frame * 0.2 + adjustedIndex) % asciiSets.shades.length)
          return asciiSets.shades[shadeIndex]
        }
        return char

      default:
        return char
    }
  }

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1">
        <div className="relative">
          {/* Main logo with ASCII-themed animations */}
          <div className="relative">
            {asciiLogo.map((line, lineIndex) => {
              // Calculate character offset for this line
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
                    const isInverted =
                      glitchMode === 'single-invert' && globalCharIndex === invertedCharIndex
                    const displayChar = transformChar(char, charIndex, lineIndex)
                    const isGlitching = displayChar !== char

                    // Enhanced rainbow with configurable saturation
                    const waveOffset = Math.sin(frame * 0.03 + lineIndex * 2) * 30
                    const rawHue = charIndex * 15 - frame * 2 + waveOffset
                    const hue = ((rawHue % 360) + 360) % 360

                    // Determine when to show colors
                    const showColor =
                      (enableColorOnHover && isHovered) ||
                      (enableColorOnGlitch && glitchMode !== 'normal' && glitchIntensity > 0)

                    // Calculate saturation with options
                    const dynamicSaturation = baseSaturation + Math.sin(frame * 0.05) * 10
                    const appliedSaturation = showColor ? dynamicSaturation * colorIntensity : 0

                    const lightness = 55 + Math.sin(frame * 0.07 + charIndex * 0.2) * 10
                    const baseColor = showColor
                      ? `hsl(${hue}, ${appliedSaturation}%, ${lightness}%)`
                      : 'currentColor'

                    return (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        animate={{
                          y:
                            glitchMode === 'ascii-rain' && Math.random() < 0.1
                              ? [0, 2, 0]
                              : glitchMode === 'blocks'
                                ? [0, Math.random() < 0.05 ? -1 : 0, 0]
                                : 0,
                          scale:
                            glitchMode === 'typewriter' && displayChar === '░' ? [1, 0.8, 1] : 1,
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut',
                        }}
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
                          textShadow: 'none',
                          filter:
                            char === '█' || char === '▓' ? 'brightness(1.2)' : 'brightness(1)',
                          transition: 'none', // No fade transition
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
            <motion.div
              key={lineIndex}
              animate={{
                opacity: glitchMode === 'typewriter' ? [(frame * 2) % 100 > 80 ? 1 : 0.3] : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {line.split('').map((char, charIndex) => {
                // Calculate global index for .AI part
                const globalCharIndexAI = asciiLogo.join('').length + lineIndex * 8 + charIndex
                const isInverted =
                  glitchMode === 'single-invert' && globalCharIndexAI === invertedCharIndex

                // Apply glitch transformations to .AI suffix
                const displayChar = transformChar(char, charIndex, lineIndex, true)
                const isGlitching = displayChar !== char

                // Enhanced rainbow continuation for .AI suffix
                const continuedIndex = 24 + charIndex
                const waveOffset = Math.sin(frame * 0.03 + lineIndex * 2) * 30
                const rawHue = continuedIndex * 15 - frame * 2 + waveOffset
                const hue = ((rawHue % 360) + 360) % 360

                // Apply same color settings to .AI suffix
                const showColor =
                  (enableColorOnHover && isHovered) ||
                  (enableColorOnGlitch && glitchMode !== 'normal' && glitchIntensity > 0)

                const dynamicSaturation = baseSaturation + Math.sin(frame * 0.05) * 10
                const appliedSaturation = showColor ? dynamicSaturation * colorIntensity : 0
                const lightness = 55 + Math.sin(frame * 0.07 + charIndex * 0.2) * 10
                const baseColor = showColor
                  ? `hsl(${hue}, ${appliedSaturation}%, ${lightness}%)`
                  : 'currentColor'

                return (
                  <span
                    key={charIndex}
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
                      transition: 'none',
                    }}
                  >
                    {displayChar}
                  </span>
                )
              })}
            </motion.div>
          ))}
        </div>
      </pre>

      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes dissolve {
          0% {
            opacity: 1;
            filter: blur(0px);
          }
          50% {
            opacity: 0.5;
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  )
}
