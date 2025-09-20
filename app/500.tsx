'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function Error500Page() {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = () => {
    setIsRetrying(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  // ASCII art for 500 error
  const asciiError = [
    '█▀▀ █▀█ █▀█',
    '▀▀█ █▄█ █▄█',
    '  ▄▄▄      ',
    '           ',
    '█▀▀ █▀█ █▀█ █▀█ █▀█',
    '█▄▄ █▀▄ █▀▄ █▄█ █▀▄',
  ]

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background - error style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glitch lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`glitch-${i}`}
            className="absolute w-full"
            style={{
              height: '2px',
              top: `${i * 10 + 5}%`,
            }}
            animate={{
              x: [0, -10, 10, -5, 5, 0],
              backgroundColor: [
                'rgba(248, 113, 113, 0.3)',
                'rgba(239, 68, 68, 0.5)',
                'rgba(220, 38, 38, 0.3)',
                'rgba(248, 113, 113, 0.3)',
              ],
              scaleX: [1, 1.5, 0.5, 1.2, 1],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              repeatDelay: 3 + i * 0.5,
            }}
          />
        ))}

        {/* Random error blocks */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            className="absolute"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 43) % 100}%`,
              width: '4px',
              height: '4px',
            }}
            animate={{
              backgroundColor: ['transparent', '#ef4444', '#dc2626', 'transparent'],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              delay: (i * 0.7) % 5,
              repeatDelay: 4,
            }}
          />
        ))}

        {/* Corrupted text effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`corrupt-${i}`}
            className="absolute font-mono text-xs text-red-500/30"
            style={{
              left: `${(i * 61) % 100}%`,
              top: `${(i * 71) % 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: (i * 0.9) % 4,
              repeatDelay: 3,
            }}
          >
            {glitchChars[i % glitchChars.length]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Animated warning icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <AlertTriangle className="w-20 h-20 text-red-500" />
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(239, 68, 68, 0)',
                  '0 0 30px rgba(239, 68, 68, 0.5)',
                  '0 0 0px rgba(239, 68, 68, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>

        {/* ASCII Error Display */}
        <motion.pre
          className="font-mono text-xs sm:text-sm mb-8 inline-block select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {asciiError.map((line, i) => (
            <motion.div
              key={i}
              className="flex justify-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              {line.split('').map((char, j) => (
                <motion.span
                  key={j}
                  className="inline-block"
                  animate={
                    i < 2
                      ? {
                          color: ['#ef4444', '#dc2626', '#b91c1c', '#ef4444'],
                          textShadow: [
                            '0 0 5px rgba(239, 68, 68, 0.5)',
                            '0 0 10px rgba(220, 38, 38, 0.7)',
                            '0 0 5px rgba(185, 28, 28, 0.5)',
                            '0 0 5px rgba(239, 68, 68, 0.5)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: j * 0.1,
                  }}
                  style={{ color: i >= 2 ? '#ef4444' : undefined }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.pre>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Server Error</h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Something went wrong on our end. Our team has been notified and is working on a fix.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="group inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-red-700 hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
          >
            <RefreshCw className={`mr-2 w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </button>

          <Link
            href="/"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 min-w-[160px]"
          >
            <Home className="mr-2 w-4 h-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-gray-400 hover:text-white transition-all duration-300 min-w-[160px]"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* Error code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-xs text-gray-500 font-mono">ERROR_CODE: INTERNAL_SERVER_ERROR</p>
          <p className="text-xs text-gray-600 font-mono mt-1">
            TIMESTAMP: {new Date().toISOString()}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
