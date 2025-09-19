'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function AnimatedLogo() {
  const [frame, setFrame] = useState(0)

  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']

  const asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']

  // Wave pattern frames for texture effect
  const waveFrames = [
    '▁▂▃▄▅▆▇█',
    '▂▃▄▅▆▇█▇',
    '▃▄▅▆▇█▇▆',
    '▄▅▆▇█▇▆▅',
    '▅▆▇█▇▆▅▄',
    '▆▇█▇▆▅▄▃',
    '▇█▇▆▅▄▃▂',
    '█▇▆▅▄▃▂▁',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % waveFrames.length)
    }, 200)
    return () => clearInterval(interval)
  }, [waveFrames.length])

  return (
    <div className="flex items-center">
      <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1">
        <div className="relative">
          {/* Base gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              backgroundSize: '200% 100%',
              WebkitMaskImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 1px,
                  black 1px,
                  black 2px
                )
              `,
              maskImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 1px,
                  black 1px,
                  black 2px
                )
              `,
            }}
          />

          {/* Main logo with animated wave fill pattern */}
          <div className="relative">
            {asciiLogo.map((line, i) => (
              <div key={i} className="relative overflow-hidden">
                {/* Create a mask from the text */}
                <div
                  className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        90deg,
                        rgba(167, 139, 250, 1) 0%,
                        rgba(192, 132, 252, 1) 25%,
                        rgba(232, 121, 249, 1) 50%,
                        rgba(192, 132, 252, 1) 75%,
                        rgba(167, 139, 250, 1) 100%
                      )
                    `,
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 6s ease-in-out infinite',
                  }}
                >
                  {/* Overlay the wave pattern as texture */}
                  <span
                    className="relative"
                    style={{
                      background: `repeating-linear-gradient(
                        90deg,
                        currentColor 0px,
                        currentColor 1px,
                        transparent 1px,
                        transparent 2px
                      )`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  >
                    {line.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="inline-block"
                        style={{
                          opacity: char === ' ' ? 0 : char === '█' ? 1 : 0.9,
                          filter:
                            char === '█'
                              ? `brightness(${1 + 0.2 * Math.sin((frame + charIndex) * 0.5)})`
                              : 'none',
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-400 text-[8px] leading-[8px] -mt-0.5">
          {asciiDotAI.map((line, i) => (
            <div key={i}>{line}</div>
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
      `}</style>
    </div>
  )
}
