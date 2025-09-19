'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { Mail, Bell, Zap, Users } from 'lucide-react'

export default function NewsletterPage() {
  const benefits = [
    {
      icon: <Bell className="h-5 w-5" />,
      title: 'Weekly Updates',
      description: 'Get notified about new projects and releases'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'AI Insights',
      description: 'Learn about the latest AI tools and techniques'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Community',
      description: 'Join a community of developers and creators'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />

      <main className="flex-1">
        <div className="relative py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
              >
                <Mail className="h-4 w-4" />
                <span>Join 500+ developers</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-normal text-white mb-6"
              >
                Stay in the Loop
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400 mb-12"
              >
                Get weekly insights on AI development, new projects, and the tools I&apos;m building.
                No spam, just valuable content for developers.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
              >
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="relative group"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 p-6 transition-all group-hover:border-white/20">
                      <div className="text-purple-400 mb-3">{benefit.icon}</div>
                      <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <NewsletterSignup />
              </motion.div>

              {/* Recent Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-20"
              >
                <h2 className="text-2xl font-normal text-white mb-8">Recent Topics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    'Building r3: A Memory Layer for AI',
                    'Claude Code Workflows That Save Hours',
                    'TypeScript Patterns for AI Applications',
                    'Redis vs Traditional Databases for Caching',
                    'The Future of AI-Assisted Development',
                    'Open Source Projects That Matter'
                  ].map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <span className="text-purple-400">→</span>
                      <span className="text-gray-300 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}