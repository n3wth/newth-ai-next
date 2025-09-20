'use client'

import Link from 'next/link'
import { Github, Briefcase, FolderOpen } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { NavItem } from '@/lib/types'
import { StaticLogoWhite } from '@/components/StaticLogoWhite'

// This is a Storybook-specific version of Navigation without fixed positioning
export function NavigationStorybook() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems: NavItem[] = [
    { text: 'Projects', href: '/projects', icon: FolderOpen },
    { text: 'Work', href: '/work', icon: Briefcase },
    { text: 'GitHub', href: socialLinks.github, external: true, icon: Github },
  ]

  return (
    <nav
      className={`relative w-full transition-all duration-300 ${
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
              <StaticLogoWhite />
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
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
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
    </nav>
  )
}
