'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Briefcase, FolderOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']

  const asciiDotAI = ['  ▄▀█ █', '■ █▀█ █']

  // Hide navigation on demo pages
  if (pathname?.startsWith('/demos/')) {
    return null
  }

  const navItems: NavItem[] = [
    { href: '/projects', text: 'Projects', icon: FolderOpen },
    { href: '/work', text: 'Work', icon: Briefcase },
    { href: socialLinks.github, text: 'GitHub', external: true, icon: Github },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[102] transition-all duration-300 ${
        isMenuOpen
          ? 'bg-black/95 backdrop-blur-sm'
          : isScrolled
            ? 'bg-black/95 backdrop-blur-sm'
            : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center relative z-[103] group">
              {/* Animated color blocks */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top row blocks */}
                <motion.div
                  className="absolute w-1.5 h-1.5 -top-3 left-0"
                  animate={{
                    backgroundColor: ['transparent', '#a855f7', 'transparent'],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0,
                    repeatDelay: 4.5,
                  }}
                />
                <motion.div
                  className="absolute w-1 h-1 -top-3 left-8"
                  animate={{
                    backgroundColor: ['transparent', '#22d3ee', 'transparent'],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    delay: 2.3,
                    repeatDelay: 5.2,
                  }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 -top-3 right-2"
                  animate={{
                    backgroundColor: ['transparent', '#ec4899', 'transparent'],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.35,
                    repeat: Infinity,
                    delay: 1.6,
                    repeatDelay: 4.8,
                  }}
                />

                {/* Side blocks */}
                <motion.div
                  className="absolute w-1 h-1 top-2 -left-3"
                  animate={{
                    backgroundColor: ['transparent', '#4ade80', 'transparent'],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 3.8,
                    repeatDelay: 5.5,
                  }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 top-1/2 -right-3"
                  animate={{
                    backgroundColor: ['transparent', '#fb923c', 'transparent'],
                    opacity: [0, 0.75, 0],
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    delay: 2.1,
                    repeatDelay: 4.7,
                  }}
                />

                {/* Bottom blocks */}
                <motion.div
                  className="absolute w-1 h-1 -bottom-2 left-4"
                  animate={{
                    backgroundColor: ['transparent', '#6366f1', 'transparent'],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 4.2,
                    repeatDelay: 5.8,
                  }}
                />
                <motion.div
                  className="absolute w-1.5 h-1.5 -bottom-2 right-8"
                  animate={{
                    backgroundColor: ['transparent', '#facc15', 'transparent'],
                    opacity: [0, 0.75, 0],
                  }}
                  transition={{
                    duration: 0.35,
                    repeat: Infinity,
                    delay: 0.9,
                    repeatDelay: 4.9,
                  }}
                />

                {/* Extra flashing blocks for more activity */}
                <motion.div
                  className="absolute w-1 h-1 top-0 left-1/2"
                  animate={{
                    backgroundColor: ['transparent', '#f87171', 'transparent'],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    delay: 3.5,
                    repeatDelay: 6.2,
                  }}
                />
                <motion.div
                  className="absolute w-1 h-1 bottom-0 left-1/3"
                  animate={{
                    backgroundColor: ['transparent', '#a855f7', 'transparent'],
                    opacity: [0, 0.65, 0],
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    delay: 1.2,
                    repeatDelay: 5.3,
                  }}
                />
              </div>

              <motion.pre
                className="text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-0 relative text-white"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  letterSpacing: '-0.05em',
                }}
                initial="default"
                whileHover="rainbow"
                animate={isMenuOpen ? 'default' : undefined}
                onHoverEnd={() => {
                  // Keep animation going briefly after hover
                  setTimeout(() => {}, 1000)
                }}
              >
                <motion.div>
                  {asciiLogo.map((line, i) => (
                    <div key={i} className="flex">
                      {line.split('').map((char, j) => (
                        <motion.span
                          key={`${i}-${j}`}
                          variants={{
                            default: {
                              color: '#ffffff',
                              textShadow: 'none',
                              transition: {
                                duration: 0.3,
                                ease: 'easeOut',
                              },
                            },
                            rainbow: {
                              color: [
                                '#FF0000', // Red
                                '#FF8800', // Orange
                                '#FFFF00', // Yellow
                                '#00FF00', // Green
                                '#0088FF', // Blue
                                '#8800FF', // Purple
                                '#FF0000', // Back to red
                              ],
                              textShadow: [
                                '0 0 8px #FF0000',
                                '0 0 8px #FF8800',
                                '0 0 8px #FFFF00',
                                '0 0 8px #00FF00',
                                '0 0 8px #0088FF',
                                '0 0 8px #8800FF',
                                '0 0 8px #FF0000',
                              ],
                              transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: j * 0.03, // Stagger each character slightly
                                repeatType: 'loop',
                                times: [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1], // Even distribution
                              },
                            },
                          }}
                          animate={{
                            color:
                              // Random characters get colored occasionally
                              (i === 0 && j === 3) || (i === 1 && j === 8) || (i === 2 && j === 15)
                                ? [
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#a855f7',
                                    '#ffffff',
                                    '#ffffff',
                                  ]
                                : (i === 1 && j === 2) || (i === 0 && j === 12)
                                  ? [
                                      '#ffffff',
                                      '#ffffff',
                                      '#ffffff',
                                      '#ffffff',
                                      '#ffffff',
                                      '#ffffff',
                                      '#22d3ee',
                                      '#ffffff',
                                      '#ffffff',
                                      '#ffffff',
                                    ]
                                  : (i === 2 && j === 5) || (i === 1 && j === 18)
                                    ? [
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ffffff',
                                        '#ec4899',
                                        '#ffffff',
                                      ]
                                    : (i === 0 && j === 7) || (i === 2 && j === 10)
                                      ? [
                                          '#ffffff',
                                          '#ffffff',
                                          '#ffffff',
                                          '#ffffff',
                                          '#ffffff',
                                          '#4ade80',
                                          '#ffffff',
                                          '#ffffff',
                                          '#ffffff',
                                          '#ffffff',
                                        ]
                                      : (i === 1 && j === 14) || (i === 0 && j === 20)
                                        ? [
                                            '#ffffff',
                                            '#ffffff',
                                            '#ffffff',
                                            '#ffffff',
                                            '#fb923c',
                                            '#ffffff',
                                            '#ffffff',
                                            '#ffffff',
                                            '#ffffff',
                                            '#ffffff',
                                          ]
                                        : '#ffffff',
                            textShadow:
                              (i === 0 && j === 3) || (i === 1 && j === 8) || (i === 2 && j === 15)
                                ? [
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    '0 0 6px rgba(168, 85, 247, 0.9)',
                                    'none',
                                    'none',
                                  ]
                                : (i === 1 && j === 2) || (i === 0 && j === 12)
                                  ? [
                                      'none',
                                      'none',
                                      'none',
                                      'none',
                                      'none',
                                      'none',
                                      '0 0 6px rgba(34, 211, 238, 0.9)',
                                      'none',
                                      'none',
                                      'none',
                                    ]
                                  : (i === 2 && j === 5) || (i === 1 && j === 18)
                                    ? [
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        'none',
                                        '0 0 6px rgba(236, 72, 153, 0.9)',
                                        'none',
                                      ]
                                    : (i === 0 && j === 7) || (i === 2 && j === 10)
                                      ? [
                                          'none',
                                          'none',
                                          'none',
                                          'none',
                                          'none',
                                          '0 0 6px rgba(74, 222, 128, 0.9)',
                                          'none',
                                          'none',
                                          'none',
                                          'none',
                                        ]
                                      : (i === 1 && j === 14) || (i === 0 && j === 20)
                                        ? [
                                            'none',
                                            'none',
                                            'none',
                                            'none',
                                            '0 0 6px rgba(251, 146, 60, 0.9)',
                                            'none',
                                            'none',
                                            'none',
                                            'none',
                                            'none',
                                          ]
                                        : 'none',
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: (i * 1.5 + j * 0.2) % 4.5,
                            times: [0, 0.6, 0.65, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 1],
                            repeatDelay: 3.5,
                          }}
                          style={{ display: 'inline-block' }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  className="text-[8px] leading-[8px] -mt-0.5 ml-1"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
                >
                  {asciiDotAI.map((line, i) => (
                    <div key={i} className="flex">
                      {line.split('').map((char, j) => (
                        <motion.span
                          key={`ai-${i}-${j}`}
                          variants={{
                            default: {
                              color: '#ffffff',
                              textShadow: 'none',
                              transition: {
                                duration: 0.3,
                                ease: 'easeOut',
                              },
                            },
                            rainbow: {
                              color: [
                                '#0088FF', // Start with blue
                                '#8800FF', // Purple
                                '#FF0000', // Red
                                '#FF8800', // Orange
                                '#FFFF00', // Yellow
                                '#00FF00', // Green
                                '#0088FF', // Back to blue
                              ],
                              textShadow: [
                                '0 0 6px #0088FF',
                                '0 0 6px #8800FF',
                                '0 0 6px #FF0000',
                                '0 0 6px #FF8800',
                                '0 0 6px #FFFF00',
                                '0 0 6px #00FF00',
                                '0 0 6px #0088FF',
                              ],
                              transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 0.4 + j * 0.03, // Start slightly after main logo
                                repeatType: 'loop',
                                times: [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1], // Even distribution
                              },
                            },
                          }}
                          animate={{
                            color:
                              (i === 0 && j === 4) || (i === 1 && j === 2)
                                ? [
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#ffffff',
                                    '#facc15',
                                    '#ffffff',
                                    '#ffffff',
                                  ]
                                : '#ffffff',
                            textShadow:
                              (i === 0 && j === 4) || (i === 1 && j === 2)
                                ? [
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    'none',
                                    '0 0 5px rgba(250, 204, 21, 0.8)',
                                    'none',
                                    'none',
                                  ]
                                : 'none',
                          }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            delay: 2.8 + i * 0.5,
                            times: [0, 0.6, 0.65, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 1],
                            repeatDelay: 4,
                          }}
                          style={{ display: 'inline-block' }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </motion.pre>
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium"
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium"
                >
                  {item.text}
                </Link>
              )
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 -mr-3 text-white z-[102] hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              <div className="relative w-6 h-6 pointer-events-none">
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ${
                    isMenuOpen ? 'rotate-45 top-[11px]' : 'top-[5px]'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 top-[11px] ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ${
                    isMenuOpen ? '-rotate-45 top-[11px]' : 'top-[17px]'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Menu panel - Simple and functional */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-full z-[101] md:hidden bg-black"
            >
              <div className="h-screen w-full flex flex-col pt-20">
                {/* Menu content */}
                <div className="flex-grow overflow-y-auto px-6 pt-8 pb-8">
                  {/* Navigation links */}
                  <nav className="space-y-2 mb-8">
                    {navItems.map((item) => {
                      const IconComponent = item.icon
                      return item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            {IconComponent && <IconComponent size={20} className="text-gray-400" />}
                            <span className="text-white text-base font-medium">{item.text}</span>
                          </div>
                          <ExternalLink size={16} className="text-gray-400" />
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            {IconComponent && <IconComponent size={20} className="text-gray-400" />}
                            <span className="text-white text-base font-medium">{item.text}</span>
                          </div>
                          <ArrowRight size={16} className="text-gray-400" />
                        </Link>
                      )
                    })}
                  </nav>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <Link
                      href="/work"
                      className="block w-full text-center p-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      See My Work
                    </Link>
                    <a
                      href="mailto:oliver@newth.ai"
                      className="block w-full text-center p-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 p-6 border-t border-white/10">
                  <p className="text-center text-sm text-white/40">© 2024 Oliver Newth</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
