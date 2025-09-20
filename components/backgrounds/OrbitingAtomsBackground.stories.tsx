import type { Meta, StoryObj } from '@storybook/nextjs'
import { OrbitingAtomsBackground } from '@/components/backgrounds/OrbitingAtomsBackground'

const meta = {
  title: 'Backgrounds/Orbital',
  component: OrbitingAtomsBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '3D atomic particles orbiting in space',
      },
    },
  },
} satisfies Meta<typeof OrbitingAtomsBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <OrbitingAtomsBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Quantum Space</h1>
      </div>
    </div>
  ),
}

export const WithGradientText: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <OrbitingAtomsBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Atomic Structure
        </h1>
      </div>
    </div>
  ),
}
