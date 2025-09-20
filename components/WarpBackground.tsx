'use client'

// TODO: Performance - Consider lazy loading this component as it's heavy with animations
// TODO: Optimization - Use CSS transforms instead of Framer Motion for better performance
// TODO: Mobile - Reduce number of shapes on mobile devices for better performance

import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { motion } from 'framer-motion'
import React, { HTMLAttributes, useMemo } from 'react'

export interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

// Fun, colorful, glitchy 3D shapes zooming toward you
const AnimatedShape = React.memo(
  ({
    x,
    y,
    delay,
    type,
    colorSet,
    reduceMotion,
  }: {
    x: number
    y: number
    delay: number
    type: string
    colorSet: number
    reduceMotion: boolean
  }) => {
    // TODO: Theming - Move color palettes to a theme configuration file
    // TODO: Customization - Allow users to select their preferred color scheme
    // Vibrant color palettes
    const colors = [
      ['#FF006E', '#FB5607', '#FFBE0B'], // Hot pink, orange, yellow
      ['#8338EC', '#3A86FF', '#06FFB4'], // Purple, blue, neon green
      ['#FF4365', '#00D9FF', '#FFF700'], // Coral, cyan, bright yellow
      ['#C77DFF', '#7209B7', '#560BAD'], // Lavender, purple shades
      ['#F72585', '#B5179E', '#7209B7'], // Magenta spectrum
      ['#4CC9F0', '#4361EE', '#3F37C9'], // Blue spectrum
      ['#F94144', '#F3722C', '#F8961E'], // Red to orange
    ]

    const palette = colors[colorSet % colors.length]

    const shapeVariants: { [key: string]: React.JSX.Element } = {
      cube: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '100px',
            height: '100px',
            transformStyle: 'preserve-3d',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.3, 0.5, 0.3],
                }
              : {
                  rotateX: [0, 360],
                  rotateY: [0, -360],
                  z: ['-800px', '500px'],
                  scale: [0.2, 3],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 4,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 6,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.3, 0.7, 1],
                }
          }
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${palette[0]}33, ${palette[1]}22)`,
              border: `2px solid ${palette[0]}66`,
              boxShadow: `0 0 60px ${palette[0]}44, inset 0 0 30px ${palette[1]}33`,
            }}
          />
          {/* Glitch layers */}
          {!reduceMotion && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: `${palette[2]}22`,
                mixBlendMode: 'screen',
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          )}
        </motion.div>
      ),
      pyramid: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  rotateY: [0, 720],
                  z: ['-1000px', '400px'],
                  scale: [0.1, 2.5],
                  opacity: [0, 0.9, 0.9, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 5,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 7,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.4, 0.8, 1],
                }
          }
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '60px solid transparent',
              borderRight: '60px solid transparent',
              borderBottom: `100px solid ${palette[1]}44`,
              filter: `drop-shadow(0 0 40px ${palette[0]}66)`,
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: '-60px',
              width: 0,
              height: 0,
              borderLeft: '60px solid transparent',
              borderRight: '60px solid transparent',
              borderBottom: `100px solid ${palette[2]}33`,
              mixBlendMode: 'overlay',
            }}
            animate={{
              scaleX: [1, 1.1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        </motion.div>
      ),
      sphere: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '80px',
            height: '80px',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  z: ['-600px', '300px'],
                  scale: [0.3, 2],
                  opacity: [0, 0.8, 0.8, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 4,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 5,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.3, 0.7, 1],
                }
          }
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${palette[0]}55, ${palette[1]}33, transparent)`,
              border: `2px solid ${palette[1]}44`,
              boxShadow: `0 0 80px ${palette[0]}55, inset 0 0 40px ${palette[2]}33`,
            }}
          />
          {/* RGB split glitch */}
          {!reduceMotion && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: palette[2],
                opacity: 0.2,
                mixBlendMode: 'multiply',
              }}
              animate={{
                x: [-3, 3, 0],
                y: [0, -3, 3],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          )}
        </motion.div>
      ),
      helix: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '120px',
            height: '120px',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  rotate: [0, 1080],
                  z: ['-1200px', '200px'],
                  scale: [0.1, 2.5],
                  opacity: [0, 0.7, 0.7, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 6,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 8,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.35, 0.75, 1],
                }
          }
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `conic-gradient(from 0deg at 50% 50%, ${palette[0]}44, ${palette[1]}44, ${palette[2]}44, ${palette[0]}44)`,
              borderRadius: '50%',
              filter: 'blur(2px)',
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              inset: '20%',
              background: `conic-gradient(from 180deg at 50% 50%, ${palette[2]}66, transparent, ${palette[1]}66)`,
              borderRadius: '50%',
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: [0, -360],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
          />
        </motion.div>
      ),
      prism: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '90px',
            height: '90px',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  rotateY: [0, 360],
                  rotateZ: [0, 180],
                  z: ['-700px', '350px'],
                  scale: [0.2, 2.2],
                  opacity: [0, 0.9, 0.9, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 5,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 6,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.3, 0.7, 1],
                }
          }
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${palette[0]}44, ${palette[1]}33, ${palette[2]}44)`,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
              boxShadow: `0 0 60px ${palette[1]}66`,
            }}
          />
          {/* Glitch flicker */}
          {!reduceMotion && (
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(45deg, ${palette[2]}55, transparent)`,
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                mixBlendMode: 'screen',
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            />
          )}
        </motion.div>
      ),
      torus: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '100px',
            height: '100px',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.4, 0.2],
                }
              : {
                  rotateX: [0, 360],
                  rotateY: [0, -720],
                  z: ['-900px', '400px'],
                  scale: [0.2, 2.8],
                  opacity: [0, 0.8, 0.8, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 6,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 7,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.35, 0.7, 1],
                }
          }
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `20px solid ${palette[1]}44`,
              boxShadow: `0 0 80px ${palette[0]}66, inset 0 0 40px ${palette[2]}44`,
            }}
          />
          {/* Inner glow animation */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '30%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${palette[2]}66, transparent)`,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          />
        </motion.div>
      ),
      grid: (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: '150px',
            height: '150px',
          }}
          animate={
            reduceMotion
              ? {
                  opacity: [0.2, 0.3, 0.2],
                }
              : {
                  rotateX: [75, 75],
                  rotateZ: [0, 180],
                  z: ['-1000px', '300px'],
                  scale: [0.1, 3],
                  opacity: [0, 0.6, 0.6, 0],
                }
          }
          transition={
            reduceMotion
              ? {
                  duration: 7,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut',
                }
              : {
                  duration: 9,
                  repeat: Infinity,
                  delay,
                  ease: 'easeOut',
                  times: [0, 0.4, 0.8, 1],
                }
          }
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 9px, ${palette[0]}44 10px),
                repeating-linear-gradient(90deg, transparent, transparent 9px, ${palette[1]}44 10px)
              `,
            }}
          />
          {/* Scan line effect */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${palette[2]}88, transparent)`,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, 150],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
          />
        </motion.div>
      ),
    }

    return shapeVariants[type] || shapeVariants.cube
  }
)

AnimatedShape.displayName = 'AnimatedShape'

// Seeded random for SSR consistency
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export const WarpBackground: React.FC<WarpBackgroundProps> = React.memo(
  ({ children, className, ...props }) => {
    const prefersReducedMotion = useReducedMotion()

    // Generate 3D shapes with consistent values for SSR
    const shapes = useMemo(() => {
      const shapeArray = []
      const types = ['cube', 'pyramid', 'sphere', 'helix', 'prism', 'torus', 'grid']

      // Create lots of fun shapes
      for (let i = 0; i < 20; i++) {
        shapeArray.push({
          id: i,
          x: 10 + seededRandom(i * 2) * 80,
          y: 10 + seededRandom(i * 3) * 80,
          delay: seededRandom(i * 5) * 8,
          type: types[Math.floor(seededRandom(i * 7) * types.length)],
          colorSet: Math.floor(seededRandom(i * 11) * 7),
        })
      }
      return shapeArray
    }, [])

    return (
      <div className={cn('relative overflow-hidden', className)} {...props}>
        {/* Base black background */}
        <div className="absolute inset-0 bg-black" />

        {/* 3D perspective container */}
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            perspective: '500px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Grid floor for depth */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                linear-gradient(rgba(139,92,246,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'rotateX(85deg) translateZ(-300px)',
              transformOrigin: 'center bottom',
              maskImage:
                'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 50%, transparent)',
            }}
          />

          {/* Colorful zooming shapes */}
          {shapes.map((shape) => (
            <AnimatedShape
              key={`shape-${shape.id}`}
              x={shape.x}
              y={shape.y}
              delay={shape.delay}
              type={shape.type}
              colorSet={shape.colorSet}
              reduceMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Content */}
        {children}
      </div>
    )
  }
)

WarpBackground.displayName = 'WarpBackground'
