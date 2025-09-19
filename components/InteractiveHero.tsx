'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const phrases = [
  "Building Intelligence",
  "Crafting Experiences",
  "Shipping Products",
  "Leading Teams",
  "Breaking Barriers"
]

const roles = [
  { text: "AI Product Leader", color: "from-violet-600 to-indigo-600" },
  { text: "Google Engineer", color: "from-blue-600 to-cyan-600" },
  { text: "Creative Technologist", color: "from-pink-600 to-rose-600" },
  { text: "Open Source Builder", color: "from-green-600 to-emerald-600" },
  { text: "System Architect", color: "from-orange-600 to-amber-600" }
]

export function InteractiveHero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => {
      clearInterval(phraseInterval)
      clearInterval(roleInterval)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 30
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Maximalist Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full rounded-full border-2 border-violet-500/20"
                style={{
                  background: `conic-gradient(from ${Math.random() * 360}deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10"
        style={{ y, opacity }}
      >
        {/* Animated Role Badge */}
        <motion.div
          className="inline-block mb-8"
          whileHover={{ scale: 1.05 }}
          style={{
            transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
          }}
        >
          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`px-6 py-3 rounded-full bg-gradient-to-r ${roles[currentRole].color} text-white font-medium text-sm backdrop-blur-xl`}
          >
            {roles[currentRole].text}
          </motion.div>
        </motion.div>

        {/* Dynamic Typography */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none"
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            }}
          >
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6 }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600"
            >
              {phrases[currentPhrase]}
            </motion.span>
          </motion.h1>
        </div>

        {/* Contemporary Nouveau Decorative Element */}
        <div className="absolute -right-20 -top-20 w-40 h-40 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100,20 Q180,50 180,100 T100,180 Q20,150 20,100 T100,20"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Interactive Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { label: "Years at FAANG", value: "10+", delay: 0 },
            { label: "Products Shipped", value: "30+", delay: 0.1 },
            { label: "Teams Led", value: "60+", delay: 0.2 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + stat.delay }}
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
              className="text-center cursor-pointer"
            >
              <div className="text-3xl font-bold bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}