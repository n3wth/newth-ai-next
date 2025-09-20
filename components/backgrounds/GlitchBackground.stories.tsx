import type { Meta, StoryObj } from '@storybook/nextjs'
import { GlitchBackground } from '@/components/backgrounds/GlitchBackground'

const meta = {
  title: 'Effects/Backgrounds/Glitch',
  component: GlitchBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Glitch effect animated background with distortion patterns',
      },
    },
  },
} satisfies Meta<typeof GlitchBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <GlitchBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">GLITCH</h1>
      </div>
    </div>
  ),
}

export const WithNeonText: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <GlitchBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
          CYBERPUNK
        </h1>
      </div>
    </div>
  ),
}
