import type { Meta, StoryObj } from '@storybook/nextjs'
import { ParticleFieldBackground } from '@/components/backgrounds/ParticleFieldBackground'

const meta = {
  title: 'Effects/Backgrounds/Particle Field',
  component: ParticleFieldBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive particle field with mouse-following effects',
      },
    },
  },
} satisfies Meta<typeof ParticleFieldBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <ParticleFieldBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Interactive Particles</h1>
      </div>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <ParticleFieldBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Particle Physics
          </h1>
          <p className="text-xl text-gray-300">Move your mouse to interact</p>
        </div>
      </div>
    </div>
  ),
}
