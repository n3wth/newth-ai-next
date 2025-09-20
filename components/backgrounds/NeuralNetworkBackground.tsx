'use client'

import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

// Simple seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Neural network nodes with 3D depth layers
interface NeuralNetworkBackgroundProps {
  className?: string
}

export const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = React.memo(
  ({ className }) => {
    const nodes = useMemo(() => {
      const nodeArray = []
      const colors = ['#00D9FF', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#7B68EE']

      // Create nodes at different depth layers for 3D effect
      for (let i = 0; i < 25; i++) {
        const depth = seededRandom(i * 1.1) // 0 = far, 1 = close
        nodeArray.push({
          id: i,
          x: seededRandom(i * 2.3) * 100, // Seeded X position
          y: seededRandom(i * 3.7) * 100, // Seeded Y position
          color: colors[Math.floor(seededRandom(i * 5.2) * colors.length)],
          size: (4 + seededRandom(i * 7.1) * 8) * (0.5 + depth * 0.5), // Size based on depth
          delay: seededRandom(i * 11.3) * 2,
          depth: depth,
          opacity: 0.3 + depth * 0.7, // Far nodes more transparent
          animationDuration: 4 + seededRandom(i * 13.5) * 4,
          pulseScale: 1.2 + seededRandom(i * 17.7) * 0.5,
        })
      }
      return nodeArray.sort((a, b) => a.depth - b.depth) // Sort by depth for proper layering
    }, [])

    // Generate seeded connections between nodes
    const connections = useMemo(() => {
      const connectionArray = []
      for (let i = 0; i < nodes.length; i++) {
        // Each node connects to 1-3 other nodes
        const numConnections = 1 + Math.floor(seededRandom(i * 19.1) * 2)
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(seededRandom(i * 23.3 + j * 29.7) * nodes.length)
          if (targetIndex !== i) {
            connectionArray.push({
              from: nodes[i],
              to: nodes[targetIndex],
              opacity: Math.min(nodes[i].opacity, nodes[targetIndex].opacity) * 0.5,
              delay: seededRandom(i * 31.2 + j * 37.5) * 3,
            })
          }
        }
      }
      return connectionArray
    }, [nodes])

    return (
      <div className={`absolute inset-0 overflow-hidden ${className || ''}`}>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${conn.from.x}%`}
              y1={`${conn.from.y}%`}
              x2={`${conn.to.x}%`}
              y2={`${conn.to.y}%`}
              stroke={conn.from.color}
              strokeWidth={conn.from.depth * 2}
              strokeOpacity={conn.opacity}
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, conn.opacity, conn.opacity, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: conn.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Neural nodes at different depths */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              zIndex: Math.floor(node.depth * 10), // Layer by depth
            }}
            initial={{
              scale: 0,
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
            }}
            animate={{
              scale: [1, node.pulseScale, 1],
              x: [0, (Math.random() - 0.5) * 20, 0], // Gentle drift
              y: [0, (Math.random() - 0.5) * 20, 0],
            }}
            transition={{
              scale: {
                duration: node.animationDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: node.animationDuration * 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
              y: {
                duration: node.animationDuration * 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 0.5,
              },
              default: {
                duration: 1,
                delay: node.delay,
              },
            }}
          >
            {/* Outer glow - larger for closer nodes */}
            <motion.div
              className="absolute rounded-full blur-xl"
              style={{
                width: `${node.size * 6}px`,
                height: `${node.size * 6}px`,
                backgroundColor: node.color,
                opacity: node.opacity * 0.3,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [node.opacity * 0.3, node.opacity * 0.5, node.opacity * 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.delay,
              }}
            />

            {/* Mid glow */}
            <div
              className="absolute rounded-full blur-md"
              style={{
                width: `${node.size * 3}px`,
                height: `${node.size * 3}px`,
                backgroundColor: node.color,
                opacity: node.opacity * 0.5,
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Core node */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                backgroundColor: node.color,
                boxShadow: `0 0 ${20 * node.depth}px ${node.color}`,
                transform: 'translate(-50%, -50%)',
                opacity: node.opacity,
                border: `${node.depth}px solid rgba(255,255,255,${0.2 + node.depth * 0.3})`,
              }}
              animate={{
                boxShadow: [
                  `0 0 ${20 * node.depth}px ${node.color}`,
                  `0 0 ${40 * node.depth}px ${node.color}`,
                  `0 0 ${20 * node.depth}px ${node.color}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.delay * 0.5,
              }}
            />
          </motion.div>
        ))}

        {/* Data particles flowing between nodes */}
        {[...Array(15)].map((_, i) => {
          const startNode = nodes[i % nodes.length]
          const endNode = nodes[(i + 5) % nodes.length]
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: startNode.color,
                boxShadow: `0 0 8px ${startNode.color}`,
                zIndex: 15,
              }}
              animate={{
                left: [`${startNode.x}%`, `${endNode.x}%`],
                top: [`${startNode.y}%`, `${endNode.y}%`],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </div>
    )
  }
)

NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'
