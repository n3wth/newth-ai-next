'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

// Modern audio visualization with gradient waves
export const WaveformBackground: React.FC = React.memo(() => {
  const waves = useMemo(() => {
    const waveArray = []

    // Create multiple wave layers for depth
    for (let i = 0; i < 5; i++) {
      waveArray.push({
        id: i,
        amplitude: 60 + i * 20,
        frequency: 0.01 + i * 0.003,
        speed: 15 + i * 3,
        yOffset: 50,
        opacity: 0.15 - i * 0.02,
        gradient: i,
      })
    }
    return waveArray
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
      {/* Gradient orbs in background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Modern waveform visualization */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
            <stop offset="20%" stopColor="#818CF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="1" />
            <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {waves.map((wave, index) => (
          <motion.path
            key={wave.id}
            stroke={`url(#waveGradient${(index % 2) + 1})`}
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: wave.opacity,
            }}
            transition={{
              pathLength: { duration: 2, ease: 'easeOut' },
              opacity: { duration: 1 },
            }}
            d={(() => {
              const points = []
              for (let x = 0; x <= 100; x += 1) {
                const y =
                  wave.yOffset + Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                points.push(`${x},${y}`)
              }
              return `M ${points.join(' L ')}`
            })()}
          >
            <animate
              attributeName="d"
              values={[
                (() => {
                  const points = []
                  for (let x = 0; x <= 100; x += 1) {
                    const y =
                      wave.yOffset + Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                    points.push(`${x},${y}`)
                  }
                  return `M ${points.join(' L ')}`
                })(),
                (() => {
                  const points = []
                  for (let x = 0; x <= 100; x += 1) {
                    const y =
                      wave.yOffset +
                      Math.sin((x + 100) * wave.frequency * Math.PI) * wave.amplitude * 0.3
                    points.push(`${x},${y}`)
                  }
                  return `M ${points.join(' L ')}`
                })(),
              ].join(';')}
              dur={`${wave.speed}s`}
              repeatCount="indefinite"
            />
          </motion.path>
        ))}
      </svg>

      {/* Floating frequency dots */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute"
          style={{
            left: `${i * 3.3 + 2}%`,
            top: '50%',
          }}
          animate={{
            y: [0, -Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, Math.random() + 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]} 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]}`,
            }}
          />
        </motion.div>
      ))}

      {/* Modern equalizer bars */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`bar-${i}`}
            className="flex-1 max-w-[8px] rounded-t-sm"
            style={{
              background: `linear-gradient(to top, #F472B6, #818CF8, #06B6D4)`,
              opacity: 0.7,
            }}
            animate={{
              height: [
                `${Math.random() * 20 + 5}%`,
                `${Math.random() * 40 + 10}%`,
                `${Math.random() * 30 + 5}%`,
              ],
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.02,
            }}
          />
        ))}
      </div>

      {/* Pulse rings from center */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            borderColor: ['#818CF8', '#F472B6', '#06B6D4'][i],
            width: '100px',
            height: '100px',
          }}
          animate={{
            scale: [1, 8, 8],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
})

WaveformBackground.displayName = 'WaveformBackground'
