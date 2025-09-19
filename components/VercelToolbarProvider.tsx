'use client'

import { VercelToolbar } from '@vercel/toolbar/next'

// Custom toolbar configuration with team links
const customLinks = {
  demos: [
    { label: 'Logo Effects', href: '/demos/logo-effects' },
    { label: 'Backgrounds', href: '/demos/backgrounds-demo' },
    { label: 'Hero Standalone', href: '/demos/hero-no-header' },
  ],
  devTools: [
    { label: 'GitHub Repo', href: 'https://github.com/yourusername/newth-ai-next-v1' },
    { label: 'Vercel Dashboard', href: 'https://vercel.com/dashboard' },
    { label: 'Components', href: '/components' },
    { label: 'API Docs', href: '/api-docs' },
  ],
  aiTools: [
    { label: 'Claude', href: 'https://claude.ai' },
    { label: 'OpenAI Playground', href: 'https://platform.openai.com/playground' },
    { label: 'Perplexity', href: 'https://perplexity.ai' },
    { label: 'v0', href: 'https://v0.dev' },
  ],
  resources: [
    { label: 'Next.js Docs', href: 'https://nextjs.org/docs' },
    { label: 'Tailwind Docs', href: 'https://tailwindcss.com/docs' },
    { label: 'Framer Motion', href: 'https://www.framer.com/motion/' },
    { label: 'Lucide Icons', href: 'https://lucide.dev/icons/' },
  ],
}

export function VercelToolbarProvider() {
  const isDevelopment = process.env.NODE_ENV === 'development'

  if (!isDevelopment) return null

  return (
    <>
      <VercelToolbar />

      {/* Custom quick links menu in bottom-right */}
      <div className="fixed bottom-4 right-4 z-50">
        <details className="group">
          <summary className="cursor-pointer rounded bg-black/80 px-3 py-1.5 text-xs text-white hover:bg-black backdrop-blur transition-colors">
            🔗 Quick Links
          </summary>
          <div className="absolute bottom-full right-0 mb-2 min-w-[200px] rounded-lg bg-black/90 p-3 text-white shadow-xl backdrop-blur">
            <div className="space-y-3 text-xs">
              <div>
                <div className="mb-1.5 font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                  ✨ Demos
                </div>
                <div className="space-y-1">
                  {customLinks.demos.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block py-0.5 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                  🛠️ Dev Tools
                </div>
                <div className="space-y-1">
                  {customLinks.devTools.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block py-0.5 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                  🤖 AI Tools
                </div>
                <div className="space-y-1">
                  {customLinks.aiTools.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-0.5 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                  📚 Resources
                </div>
                <div className="space-y-1">
                  {customLinks.resources.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-0.5 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  )
}
