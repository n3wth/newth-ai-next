import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Docs/Introduction',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewMode: 'docs',
  },
  tags: ['docs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Introduction</h1>

        <p className="text-xl text-gray-400">
          A modern React component library with dark aesthetics and smooth animations.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Start</h2>
          <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
            <code className="text-sm">npm install @newth/design-system</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="space-y-2 text-gray-400">
            <li>• 25+ UI Components</li>
            <li>• Dark theme by default</li>
            <li>• Fully accessible (WCAG 2.1 AA)</li>
            <li>• TypeScript support</li>
            <li>• Tree-shakeable</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Example</h2>
          <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
            <code className="text-sm">{`import { Button } from '@newth/design-system'

<Button variant="primary">
  Get Started
</Button>`}</code>
          </pre>
        </div>
      </div>
    </div>
  ),
}