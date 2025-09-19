'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { NavItem } from '@/lib/types'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']

  const asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']

  const navItems: NavItem[] = [
    { href: '/#projects', text: 'Projects' },
    { href: '/work', text: 'Work' },
    { href: socialLinks.github, text: 'GitHub', external: true },
    { href: socialLinks.linkedin, text: 'LinkedIn', external: true },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 relative transition-all duration-300 ${
        isScrolled ? 'bg-black backdrop-blur-none' : 'bg-transparent backdrop-blur-md'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1">
                <motion.div
                  className="relative bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                >
                  {asciiLogo.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </motion.div>
                <div className="text-gray-400 text-[8px] leading-[8px] -mt-0.5">
                  {asciiDotAI.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </pre>
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
                  className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans"
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans"
                >
                  {item.text}
                </Link>
              )
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-white" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col items-stretch space-y-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
