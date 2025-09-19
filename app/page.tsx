import { HeroSection } from '@/components/sections/HeroSectionOptimized'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  const featuredProjects = [
    {
      id: 'openai',
      title: 'OpenAI Integration Suite',
      description: 'Real-time AI processing pipeline with custom fine-tuning capabilities',
      tech: ['AI/ML', 'Python', 'React'],
      year: '2024',
      github: 'https://github.com',
      link: 'https://example.com',
      color: 'text-emerald-400',
    },
    {
      id: 'datavis',
      title: 'Quantum Data Visualizer',
      description: 'Interactive 3D visualization for quantum computing results',
      tech: ['WebGL', 'Three.js', 'TypeScript'],
      year: '2024',
      github: 'https://github.com',
      color: 'text-blue-400',
    },
    {
      id: 'blockchain',
      title: 'DeFi Protocol Engine',
      description: 'Smart contract automation framework for decentralized finance',
      tech: ['Solidity', 'Web3', 'Node.js'],
      year: '2023',
      link: 'https://example.com',
      color: 'text-purple-400',
    },
    {
      id: 'analytics',
      title: 'Neural Analytics Platform',
      description: 'ML-powered behavioral analytics with predictive modeling',
      tech: ['TensorFlow', 'FastAPI', 'Vue.js'],
      year: '2023',
      github: 'https://github.com',
      color: 'text-orange-400',
    },
  ]

  return (
    <main className="flex flex-col relative">
      <HeroSection />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
