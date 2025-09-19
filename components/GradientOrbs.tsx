'use client'

import { motion } from 'framer-motion'

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - purple/pink */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
          filter: 'blur(100px)',
          top: '-200px',
          left: '-200px',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Medium gradient orb - yellow/orange */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 146, 60, 0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
          top: '50%',
          right: '-100px',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small gradient orb - blue/cyan */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '-50px',
          left: '30%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Tiny accent orb - green */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 60%)',
          filter: 'blur(40px)',
          top: '20%',
          left: '60%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}