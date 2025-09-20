import type { Meta, StoryObj } from '@storybook/nextjs'
import { WaveformBackground } from '@/components/backgrounds/WaveformBackground'

const meta = {
  title: 'Effects/Backgrounds/Waveform',
  component: WaveformBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Animated audio waveform visualization background',
      },
    },
  },
} satisfies Meta<typeof WaveformBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <WaveformBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Sound Waves</h1>
      </div>
    </div>
  ),
}

export const WithMusicTheme: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <WaveformBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
            Audio Visualizer
          </h1>
          <p className="text-xl text-gray-300">Rhythmic waveform animations</p>
        </div>
      </div>
    </div>
  ),
}
