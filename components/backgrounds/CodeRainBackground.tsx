'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

// Matrix-style code rain with AI/ML terms
interface CodeRainBackgroundProps {
  className?: string
}

export const CodeRainBackground: React.FC<CodeRainBackgroundProps> = React.memo(({ className }) => {
  const columns = useMemo(() => {
    const cols = []
    const terms = ['AI', 'ML', '01', '{}', '[]', '<>', 'fn', '=>', '::']
    const colors = ['#00FF41', '#39FF14', '#00D9FF', '#7B68EE']

    for (let i = 0; i < 30; i++) {
      cols.push({
        id: i,
        x: 3 + i * 3.3,
        chars: Array(8)
          .fill(0)
          .map(() => terms[Math.floor(Math.random() * terms.length)]),
        speed: 10 + Math.random() * 10,
        delay: Math.random() * 5,
        color: colors[i % colors.length],
      })
    }
    return cols
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-60 ${className || ''}`}>
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute text-sm font-mono font-bold"
          style={{
            left: `${col.x}%`,
            color: col.color,
            textShadow: `0 0 10px ${col.color}`,
            writingMode: 'vertical-lr',
          }}
          initial={{ y: -200 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: col.speed,
            repeat: Infinity,
            delay: col.delay,
            ease: 'linear',
          }}
        >
          {col.chars.map((char, i) => (
            <motion.span
              key={i}
              className="block"
              animate={{ opacity: [0.3, 1, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  )
})

CodeRainBackground.displayName = 'CodeRainBackground'
