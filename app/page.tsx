'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { ContactSection } from '@/components/sections/ContactSection'
import { Container } from '@/components/layout/Container'
import { projects } from '@/lib/config/projects'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <HeroSection />

      <section id="projects" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 font-sans">
              Side projects
            </h2>
            <p className="text-gray-400 font-sans">
              Open source tools and experiments. Built for the community.
            </p>
          </motion.div>

          <ProjectGrid projects={projects} />
        </Container>
      </section>

      <ContactSection />

      <Footer />
    </div>
  )
}