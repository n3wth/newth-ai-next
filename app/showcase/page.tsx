'use client'

import { useState } from 'react'
import { AnimatedLogo } from '@/components/AnimatedLogo'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { TerminalButton } from '@/components/ui/TerminalButton'
import { SimpleAnimatedButton } from '@/components/ui/SimpleAnimatedButton'
import { ProjectCard } from '@/components/ProjectCard'
import { TerminalCard } from '@/components/ui/TerminalCard'
import { Meteors } from '@/components/Meteors'

// Background imports
import { CodeRainBackground } from '@/components/backgrounds/CodeRainBackground'
import { GlitchBackground } from '@/components/backgrounds/GlitchBackground'
import { NeuralNetworkBackground } from '@/components/backgrounds/NeuralNetworkBackground'
import { WaveformBackground } from '@/components/backgrounds/WaveformBackground'
import { ParticleFieldBackground } from '@/components/backgrounds/ParticleFieldBackground'
import { DataFlowBackground } from '@/components/backgrounds/DataFlowBackground'
import { OrbitingAtomsBackground } from '@/components/backgrounds/OrbitingAtomsBackground'

const backgrounds = [
  { name: 'Matrix', component: CodeRainBackground },
  { name: 'Glitch', component: GlitchBackground },
  { name: 'Neural', component: NeuralNetworkBackground },
  { name: 'Wave', component: WaveformBackground },
  { name: 'Particles', component: ParticleFieldBackground },
  { name: 'Flow', component: DataFlowBackground },
  { name: 'Orbital', component: OrbitingAtomsBackground },
]

export default function ShowcasePage() {
  const [currentBg, setCurrentBg] = useState(0)
  const [buttonClicks, setButtonClicks] = useState({ button: 0, terminal: 0, simple: 0 })

  const BackgroundComponent = backgrounds[currentBg].component

  const handleButtonClick = (type: string) => {
    setButtonClicks((prev) => ({ ...prev, [type]: prev[type as keyof typeof prev] + 1 }))
  }

  const sampleProject = {
    id: 'showcase',
    title: 'Component Showcase',
    description:
      'A comprehensive demonstration of all available components in the n3wth.AI design system.',
    year: '2025',
    tags: ['React', 'TypeScript', 'Tailwind'],
    tech: ['React', 'TypeScript', 'Tailwind'],
    status: 'active' as const,
    link: '/showcase',
    featured: true,
    color: 'text-purple-400',
    metrics: [
      { label: '20+ components', color: 'text-purple-400' },
      { label: 'Fully interactive', color: 'text-green-400' },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <BackgroundComponent />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with Logo */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <AnimatedLogo
                enableColorOnHover={true}
                enableColorOnGlitch={true}
                baseSaturation={90}
                colorIntensity={1}
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Component Showcase</h1>
            <p className="text-xl text-gray-400">All n3wth.AI components in action</p>
          </div>
        </section>

        {/* Background Selector */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Background Effects</h2>
            <div className="flex flex-wrap gap-2">
              {backgrounds.map((bg, index) => (
                <button
                  key={bg.name}
                  onClick={() => setCurrentBg(index)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentBg === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {bg.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-400">Current: {backgrounds[currentBg].name}</p>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Button Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Standard Button</h3>
                <Button onClick={() => handleButtonClick('button')} className="mb-2">
                  Click Me
                </Button>
                <p className="text-sm text-gray-400">Clicks: {buttonClicks.button}</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Terminal Button</h3>
                <TerminalButton onClick={() => handleButtonClick('terminal')}>
                  ./execute.sh
                </TerminalButton>
                <p className="text-sm text-gray-400 mt-2">Clicks: {buttonClicks.terminal}</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Animated Button</h3>
                <SimpleAnimatedButton onClick={() => handleButtonClick('simple')}>
                  Hover & Click
                </SimpleAnimatedButton>
                <p className="text-sm text-gray-400 mt-2">Clicks: {buttonClicks.simple}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard project={sampleProject} />

              <TerminalCard>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-400">Terminal Card</h3>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-400">$ npm run dev</div>
                    <div className="text-gray-300">&gt; Starting development server...</div>
                    <div className="text-green-400">✓ Ready on http://localhost:3000</div>
                    <div></div>
                    <div className="text-gray-400">$ System initialized</div>
                    <div className="text-gray-300">&gt; All components loaded successfully</div>
                  </div>
                </div>
              </TerminalCard>
            </div>
          </div>
        </section>

        {/* Animation Effects */}
        <section className="py-10 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Animation Effects</h2>
            <div className="bg-gray-900/50 backdrop-blur p-20 rounded-lg relative overflow-hidden">
              <Meteors number={20} />
              <p className="text-center relative z-10">Meteors animation overlay</p>
            </div>
          </div>
        </section>

        {/* Component Status */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Component Best Practices</h2>
            <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  All components use TypeScript for type safety
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Tailwind CSS for consistent styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  React.memo for performance optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Proper event handlers with user feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Accessibility attributes (ARIA labels, roles)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Cleanup on unmount for animations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
