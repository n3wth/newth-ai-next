'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

interface GlitchBackgroundProps {
  className?: string
}

// Glitch/cyberpunk aesthetic - more intense and visible
export const GlitchBackground: React.FC<GlitchBackgroundProps> = React.memo(({ className }) => {
  const glitchBars = useMemo(() => {
    const bars = []
    const colors = ['#FF0080', '#00FFFF', '#FFFF00', '#FF00FF', '#00FF00']

    for (let i = 0; i < 8; i++) {
      bars.push({
        id: i,
        y: Math.random() * 100,
        width: 100,
        height: 0.5 + Math.random() * 3,
        color: colors[i % colors.length],
        duration: 0.05 + Math.random() * 0.15,
        delay: Math.random() * 3,
      })
    }
    return bars
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ''}`}>
      {/* CRT TV effect background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`,
          animation: 'scanlines 8s linear infinite',
        }}
      />

      {/* Major glitch blocks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`block-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            width: `${100 + Math.random() * 200}px`,
            height: `${50 + Math.random() * 100}px`,
          }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            x: [0, -20, 10, -5, 0],
            scaleX: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 4 + Math.random() * 8,
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(90deg,
                transparent 0%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 20%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}80 50%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 80%,
                transparent 100%)`,
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>
      ))}

      {/* Horizontal glitch bars */}
      {glitchBars.map((bar) => (
        <motion.div
          key={bar.id}
          className="absolute w-full"
          style={{
            top: `${bar.y}%`,
            height: `${bar.height}%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              ${bar.color} 10%,
              ${bar.color} 90%,
              transparent 100%)`,
            mixBlendMode: 'screen',
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scaleX: [0.8, 1.2, 1, 0.9],
            x: [-50, 50, -30, 0],
          }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            delay: bar.delay,
            repeatDelay: 2 + Math.random() * 4,
          }}
        />
      ))}

      {/* RGB split effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, -3, 2, -1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, 2, -3, 1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.05,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, rgba(0,255,255,0.1) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Digital noise/static */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`noise-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            backgroundColor: ['#FF0080', '#00FFFF', '#FFFF00', '#00FF00'][i % 4],
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}

      {/* Large glitch text effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          opacity: [0, 0, 0.3, 0.3, 0],
          scale: [0.8, 1, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 8,
        }}
      >
        <div
          className="text-8xl font-mono font-bold text-cyan-400/30"
          style={{
            textShadow: `
            2px 2px 0 #FF0080,
            -2px -2px 0 #00FFFF,
            0 0 30px #00FFFF
          `,
          }}
        >
          ERROR
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  )
})

GlitchBackground.displayName = 'GlitchBackground'
