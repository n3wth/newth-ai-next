'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

// Simplified geometric shapes with orbital motion
interface OrbitingAtomsBackgroundProps {
  className?: string
}

export const OrbitingAtomsBackground: React.FC<OrbitingAtomsBackgroundProps> = React.memo(
  ({ className }) => {
    const systems = useMemo(() => {
      const systemArray = []
      const colors = ['#06B6D4', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']

      // Create constellation-like pattern
      for (let i = 0; i < 8; i++) {
        systemArray.push({
          id: i,
          x: 10 + Math.random() * 80,
          y: 10 + Math.random() * 80,
          color: colors[i % colors.length],
          scale: 0.6 + Math.random() * 0.4,
          rotationSpeed: 10 + Math.random() * 20,
        })
      }
      return systemArray
    }, [])

    return (
      <div
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 ${className || ''}`}
      >
        {/* Ambient background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Geometric orbital systems */}
        {systems.map((system) => (
          <div
            key={system.id}
            className="absolute"
            style={{
              left: `${system.x}%`,
              top: `${system.y}%`,
              transform: `translate(-50%, -50%) scale(${system.scale})`,
            }}
          >
            {/* Central shape */}
            <motion.div
              className="absolute w-8 h-8"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: system.rotationSpeed,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${system.color}, ${system.color}66)`,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond shape
                  boxShadow: `0 0 30px ${system.color}`,
                }}
              />
            </motion.div>

            {/* Orbiting elements */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: '100px',
                  height: '100px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  rotate: angle + 360,
                }}
                transition={{
                  duration: system.rotationSpeed * 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.2,
                }}
              >
                <div
                  className="absolute w-3 h-3"
                  style={{
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRadius: i === 0 ? '50%' : i === 1 ? '0%' : '30%',
                    backgroundColor: system.color,
                    opacity: 0.8,
                    boxShadow: `0 0 15px ${system.color}`,
                  }}
                />
              </motion.div>
            ))}

            {/* Orbital rings */}
            <div
              className="absolute border rounded-full opacity-20"
              style={{
                width: '100px',
                height: '100px',
                borderColor: system.color,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        ))}

        {/* Floating geometric particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          >
            <div
              className="w-2 h-2"
              style={{
                background: `linear-gradient(45deg, ${['#06B6D4', '#8B5CF6', '#EC4899'][i % 3]}, transparent)`,
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 100%, 0% 100%)' : 'none',
                borderRadius: i % 2 === 0 ? '0' : '50%',
                opacity: 0.6,
              }}
            />
          </motion.div>
        ))}

        {/* Connection lines between systems */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {systems.slice(0, -1).map((system, i) => {
            const nextSystem = systems[i + 1]
            return (
              <motion.line
                key={`connection-${i}`}
                x1={`${system.x}%`}
                y1={`${system.y}%`}
                x2={`${nextSystem.x}%`}
                y2={`${nextSystem.y}%`}
                stroke={system.color}
                strokeWidth="1"
                strokeDasharray="5 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            )
          })}
        </svg>
      </div>
    )
  }
)

OrbitingAtomsBackground.displayName = 'OrbitingAtomsBackground'
