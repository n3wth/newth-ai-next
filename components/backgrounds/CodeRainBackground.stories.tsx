import type { Meta, StoryObj } from '@storybook/nextjs'
import { CodeRainBackground } from '@/components/backgrounds/CodeRainBackground'

const meta = {
  title: 'Backgrounds/Matrix',
  component: CodeRainBackground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Matrix Code Rain Background

Iconic Matrix-style falling code animation that creates a dynamic cyberpunk atmosphere.

### Features
- 🌧️ **Falling characters** - Continuous stream of digital rain
- 🎯 **Performance optimized** - Canvas-based rendering with requestAnimationFrame
- 🎨 **Customizable** - Adjustable speed, density, and colors
- ♿ **Respects motion preferences** - Pauses for users with reduced motion

### Usage
\`\`\`tsx
import { CodeRainBackground } from '@/components/backgrounds/CodeRainBackground'

<div className="relative">
  <CodeRainBackground className="absolute inset-0" />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeRainBackground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <CodeRainBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-green-400">Enter the Matrix</h1>
      </div>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-full min-h-[400px] h-screen">
      <CodeRainBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-green-400">Code Rain</h1>
          <p className="text-xl text-green-300">Digital rain of characters</p>
        </div>
      </div>
    </div>
  ),
}
