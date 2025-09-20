import type { Meta, StoryObj } from '@storybook/nextjs'
import { NeuralNetworkBackground } from '@/components/backgrounds/NeuralNetworkBackground'

const meta = {
  title: 'Effects/Backgrounds/Neural Network',
  component: NeuralNetworkBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive neural network visualization with connected nodes'
      }
    }
  }
} satisfies Meta<typeof NeuralNetworkBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <NeuralNetworkBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Neural Network</h1>
          <p className="text-xl text-gray-300">Visualizing AI connections</p>
        </div>
      </div>
    </div>
  )
}

export const Minimal: Story = {
  render: () => (
    <div className="relative w-full h-[400px]">
      <NeuralNetworkBackground className="absolute inset-0" />
    </div>
  )
}