import type { Meta, StoryObj } from '@storybook/nextjs'
import { WarpBackground } from '@/components/WarpBackground'
import { Button } from '@/components/ui/Button'

const meta = {
  title: 'Backgrounds/Warp',
  component: WarpBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '3D animated background with floating blocks and warp effect',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WarpBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <WarpBackground className="absolute inset-0" />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <WarpBackground className="absolute inset-0">
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-white">Welcome to the Future</h1>
            <p className="text-xl text-white/80 max-w-md mx-auto">
              Experience the next generation of web interfaces with immersive 3D backgrounds
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </WarpBackground>
    </div>
  ),
}

export const HalfHeight: Story = {
  render: () => (
    <div className="relative w-full h-[50vh]">
      <WarpBackground className="absolute inset-0" />
    </div>
  ),
}

export const WithOverlay: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <WarpBackground className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Gradient Overlay Effect</h2>
        </div>
      </WarpBackground>
    </div>
  ),
}
