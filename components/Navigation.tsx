'use client'

import Link from 'next/link'
import { ArrowRight, Menu, X, Github, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const asciiLogo = [
    "█▄ █ █▀▀ █ █ █ ▀█▀ █ █",
    "█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█",
    "█  █ █▄▄  ▀ ▀   █  █ █"
  ]

  const asciiDotAI = [
    "  ▄▀█ █",
    "  █▀█ █",
    "°"
  ]

  const navItems = [
    { href: '/#projects', text: 'Projects' },
    { href: '/work', text: 'Work' },
    { href: 'https://github.com/n3wth', text: 'GitHub', external: true },
  ]

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-xl sticky top-0 z-50 relative">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1">
                <div className="text-violet-500">
                  {asciiLogo.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                <div className="text-gray-400 text-[8px] leading-[8px] -mt-0.5">
                  {asciiDotAI.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </pre>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center"
                  >
                    {item.text}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="mailto:oliver@newth.ai"
              className="group inline-flex items-center gap-1 px-5 py-2.5 text-sm font-medium rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              Contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
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
                    className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ),
              )}
              <Link
                href="mailto:oliver@newth.ai"
                className="group mt-2 inline-flex items-center justify-center gap-1 px-5 py-2.5 text-sm font-medium rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}