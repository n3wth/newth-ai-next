'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

// Flowing particle field - all particles always moving
interface ParticleFieldBackgroundProps {
  className?: string
}

export const ParticleFieldBackground: React.FC<ParticleFieldBackgroundProps> = React.memo(
  ({ className }) => {
    const particles = useMemo(() => {
      const particleArray = []
      const colors = ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B']

      // Create flowing particles of various sizes
      for (let i = 0; i < 80; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 5,
          xOffset: Math.random() * 40 - 20,
          yOffset: Math.random() * 40 - 20,
        })
      }
      return particleArray
    }, [])

    return (
      <div
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950/20 via-black to-purple-950/20 ${className || ''}`}
      >
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />

        {/* All particles constantly floating */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, particle.xOffset, -particle.xOffset, 0],
              y: [0, particle.yOffset, -particle.yOffset, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay,
              }}
            >
              {/* Glow */}
              <div
                className="absolute rounded-full blur-md"
                style={{
                  width: `${particle.size * 6}px`,
                  height: `${particle.size * 6}px`,
                  backgroundColor: particle.color,
                  opacity: 0.4,
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
              />
              {/* Core */}
              <div
                className="relative rounded-full"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Extra small fast-moving particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#8B5CF6',
              boxShadow: '0 0 4px #8B5CF6',
            }}
            animate={{
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Flowing light streams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-1 w-40"
            style={{
              background: `linear-gradient(90deg, transparent, ${['#8B5CF6', '#EC4899', '#06B6D4'][i]}, transparent)`,
              filter: 'blur(2px)',
              opacity: 0.3,
            }}
            animate={{
              x: ['-40vw', '140vw'],
              y: `${30 + i * 20}vh`,
              rotate: [-10, 10, -10],
            }}
            transition={{
              x: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        ))}
      </div>
    )
  }
)

ParticleFieldBackground.displayName = 'ParticleFieldBackground'
