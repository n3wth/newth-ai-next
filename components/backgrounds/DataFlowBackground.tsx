'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'

// Data flow visualization with branching paths - more visible
export const DataFlowBackground: React.FC = React.memo(() => {
  const [dataPoints, setDataPoints] = useState<Array<{ id: number; path: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const newPoints = [...prev]
        if (newPoints.length < 20) {
          newPoints.push({
            id: Date.now(),
            path: Math.floor(Math.random() * 3),
          })
        }
        if (newPoints.length > 20) {
          newPoints.shift()
        }
        return newPoints
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const paths = [
    'M 10 50 Q 30 20, 50 50 T 90 50',
    'M 10 50 L 50 50 L 90 50',
    'M 10 50 Q 30 80, 50 50 T 90 50',
  ]

  const colors = ['#00D9FF', '#FF6B6B', '#4ECDC4']

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Data flow paths */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke={colors[i]}
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              transform: `translateY(${i * 100}px)`,
              opacity: 0.8,
            }}
          />
        ))}
      </svg>

      {/* Binary/data rain effect - more visible */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-base font-mono font-bold"
          style={{
            left: `${2 + i * 2.5}%`,
            color: colors[i % colors.length],
            textShadow: `0 0 10px ${colors[i % colors.length]}`,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: 'linear',
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}

      {/* Flowing data points */}
      <AnimatePresence>
        {dataPoints.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: colors[point.path],
              boxShadow: `0 0 20px ${colors[point.path]}`,
            }}
            initial={{ x: '10vw', y: '50vh' }}
            animate={{
              x: '90vw',
              y: `${50 + (point.path - 1) * 20}vh`,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 3,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Processing nodes - bigger and more visible */}
      {[25, 50, 75].map((x, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            left: `${x}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.div
            className="w-16 h-16 border-3 rounded-xl"
            style={{
              borderColor: colors[i],
              borderWidth: '3px',
              boxShadow: `0 0 40px ${colors[i]}`,
              background: `radial-gradient(circle, ${colors[i]}20, transparent)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r rounded-xl"
            style={{
              background: `radial-gradient(circle, ${colors[i]}40, transparent)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        </motion.div>
      ))}

      {/* Data packets text */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`text-${i}`}
          className="absolute text-xs font-mono text-cyan-400/60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        >
          {'<data/>'}
        </motion.div>
      ))}
    </div>
  )
})

DataFlowBackground.displayName = 'DataFlowBackground'
