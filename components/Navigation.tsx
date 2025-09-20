'use client'

// TODO: Feature - Add search functionality in navigation
// TODO: Performance - Memoize navigation items
// TODO: Feature - Add dark/light mode toggle
// TODO: Accessibility - Add keyboard shortcuts for navigation
// TODO: Feature - Add breadcrumbs for deeper pages
// TODO: Mobile - Improve mobile menu animations

import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Briefcase, FolderOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'
import { AnimatedLogo } from '@/components/AnimatedLogo'

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

  // Logo text defined in AnimatedLogo component

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
              <AnimatedLogo />
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
