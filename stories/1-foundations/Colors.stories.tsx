import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Color palette used throughout the application'
      }
    }
  }
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({ name, value, textColor = 'white' }: { name: string; value: string; textColor?: string }) => (
  <div className="space-y-2">
    <div
      className="w-full h-24 rounded-lg flex items-center justify-center font-mono text-sm border border-gray-800"
      style={{ backgroundColor: value, color: textColor }}
    >
      {value}
    </div>
    <p className="text-sm text-gray-400">{name}</p>
  </div>
)

export const Primary: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <ColorSwatch name="Black" value="#000000" />
      <ColorSwatch name="White" value="#FFFFFF" textColor="black" />
      <ColorSwatch name="Violet" value="#8b5cf6" />
      <ColorSwatch name="Purple" value="#a855f7" />
      <ColorSwatch name="Blue" value="#3b82f6" />
      <ColorSwatch name="Green" value="#10b981" />
      <ColorSwatch name="Red" value="#ef4444" />
      <ColorSwatch name="Orange" value="#f59e0b" />
    </div>
  )
}

export const Gradients: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="h-24 rounded-lg bg-gradient-to-r from-violet-200 via-purple-200 to-violet-400" />
      <div className="h-24 rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600" />
      <div className="h-24 rounded-lg bg-gradient-to-r from-green-400 to-blue-500" />
    </div>
  )
}