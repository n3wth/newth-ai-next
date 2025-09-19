'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HeroSectionSSR } from '@/components/sections/HeroSectionSSR'
import { Container } from '@/components/layout/Container'
import { projects } from '@/lib/config/projects'

// Lazy load below-fold components
const ProjectGrid = dynamic(() => import('@/components/sections/ProjectGrid').then(mod => ({ default: mod.ProjectGrid })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })), {
  loading: () => null,
  ssr: false
})

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <HeroSectionSSR />

      <section id="projects" className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4 font-sans">
              Side projects
            </h2>
            <p className="text-gray-300 font-sans">
              Open source tools and experiments. Built for the community.
            </p>
          </div>

          <Suspense fallback={<div className="animate-pulse bg-gray-800 rounded-lg h-64" />}>
            <ProjectGrid projects={projects} />
          </Suspense>
        </Container>
      </section>

      <ContactSection />
    </div>
  )
}
