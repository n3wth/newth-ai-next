import type { Meta, StoryObj } from '@storybook/nextjs'
import { DataFlowBackground } from '@/components/backgrounds/DataFlowBackground'

const meta = {
  title: 'Effects/Backgrounds/Data Flow',
  component: DataFlowBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Animated data flow visualization with particles',
      },
    },
  },
} satisfies Meta<typeof DataFlowBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <DataFlowBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Data Flow</h1>
      </div>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <DataFlowBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-cyan-400">Real-time Data</h1>
          <p className="text-xl text-cyan-300">Visualizing information streams</p>
        </div>
      </div>
    </div>
  ),
}
