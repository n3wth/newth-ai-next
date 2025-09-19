'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'

interface ContactSectionProps {
  title?: string
  subtitle?: string
}

export function ContactSection({
  title = 'Ready to ship something amazing?',
  subtitle = 'I work with teams that move fast and dream big.'
}: ContactSectionProps) {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-normal mb-6 text-white font-sans">
            {title}
          </h2>
          <p className="text-lg text-gray-400 mb-12 font-sans">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={socialLinks.github}
              external
              variant="primary"
            >
              GitHub
            </Button>
            <Button
              href={socialLinks.linkedin}
              external
              variant="secondary"
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}