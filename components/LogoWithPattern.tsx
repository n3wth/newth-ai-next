'use client'

import { motion } from 'framer-motion'

export function LogoWithPattern() {
  // ASCII gradient pattern with diagonal squares
  const asciiPattern = [
    "░░░░▒▒▒▒▓▓▓▓████",
    "░░░▒▒▒▒▓▓▓▓████▓",
    "░░▒▒▒▒▓▓▓▓████▓▓",
    "░▒▒▒▒▓▓▓▓████▓▓▓",
    "▒▒▒▒▓▓▓▓████▓▓▓▒",
    "▒▒▒▓▓▓▓████▓▓▓▒▒",
    "▒▒▓▓▓▓████▓▓▓▒▒░",
    "▒▓▓▓▓████▓▓▓▒▒░░",
    "▓▓▓▓████▓▓▓▒▒░░░",
    "▓▓▓████▓▓▓▒▒░░░░",
    "▓▓████▓▓▓▒▒░░░░▒",
    "▓████▓▓▓▒▒░░░░▒▒",
    "████▓▓▓▒▒░░░░▒▒▒",
    "███▓▓▓▒▒░░░░▒▒▒▓",
    "██▓▓▓▒▒░░░░▒▒▒▓▓",
    "█▓▓▓▒▒░░░░▒▒▒▓▓▓"
  ]

  // Alternative diamond pattern
  const diamondPattern = [
    "◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇",
    "◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆",
    "◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇",
    "◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆",
  ]

  // Diagonal block pattern
  const diagonalBlocks = [
    "█▓▒░    ░▒▓█",
    "▓█▓▒░  ░▒▓█▓",
    "▒▓█▓▒░░▒▓█▓▒",
    "░▒▓█▓▒▒▓█▓▒░",
    " ░▒▓████▓▒░ ",
    "  ░▒▓██▓▒░  ",
    "   ░▒▓▓▒░   ",
    "    ░▒▒░    ",
  ]

  // Gradient squares pattern (main design)
  const gradientSquares = [
    "■ □ ▪ ▫ · ·",
    "□ ■ □ ▪ ▫ ·",
    "▪ □ ■ □ ▪ ▫",
    "▫ ▪ □ ■ □ ▪",
    "· ▫ ▪ □ ■ □",
    "· · ▫ ▪ □ ■",
  ]

  // Beautiful wave pattern
  const wavePattern = [
    "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁",
    "▂▃▄▅▆▇█▇▆▅▄▃▂▁▂",
    "▃▄▅▆▇█▇▆▅▄▃▂▁▂▃",
    "▄▅▆▇█▇▆▅▄▃▂▁▂▃▄",
  ]

  return (
    <div className="relative">
      {/* Background ASCII Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <pre className="font-mono text-[8px] text-violet-400 leading-[8px] whitespace-pre select-none">
          {asciiPattern.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              {line}
            </motion.div>
          ))}
        </pre>
      </div>

      {/* Main Logo */}
      <div className="relative z-10">
        {/* Your existing logo here */}
      </div>

      {/* Decorative corner patterns */}
      <div className="absolute -top-4 -left-4 text-violet-300 opacity-40">
        <pre className="font-mono text-[10px] leading-[10px]">
          ╔════╗
          ║■■■■║
          ╚════╝
        </pre>
      </div>

      <div className="absolute -bottom-4 -right-4 text-violet-300 opacity-40 rotate-180">
        <pre className="font-mono text-[10px] leading-[10px]">
          ╔════╗
          ║■■■■║
          ╚════╝
        </pre>
      </div>
    </div>
  )
}

// Component for hero section with animated pattern
export function HeroASCIIPattern() {
  const diagonalPattern = `
■□▪▫·  ·▫▪□■
□■□▪▫··▫▪□■□
▪□■□▪▫▫▪□■□▪
▫▪□■□▪▪□■□▪▫
·▫▪□■□□■□▪▫·
 ·▫▪□■■□▪▫·
  ·▫▪□□▪▫·
   ·▫▪▪▫·
    ·▫▫·
     ··
  `

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 2 }}
    >
      <div className="absolute inset-0">
        {/* Repeating pattern */}
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 8 }).map((_, col) => (
              <motion.pre
                key={`${row}-${col}`}
                className="font-mono text-violet-400 text-[10px] leading-[10px]"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [(row + col) % 2 === 0 ? 45 : -45]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: (row + col) * 0.1
                }}
                style={{
                  transform: `translate(${col * 150}px, ${row * 150}px)`
                }}
              >
                {diagonalPattern}
              </motion.pre>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}