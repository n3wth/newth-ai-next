import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    viewMode: 'docs',
  },
  tags: ['docs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * # N3WTH Design System
 *
 * React components with dark aesthetics and smooth animations.
 *
 * ## Quick Start
 * ```bash
 * npm install @newth/design-system
 * ```
 *
 * ## Basic Usage
 * ```jsx
 * import { Button } from '@newth/design-system'
 *
 * <Button variant="primary">Click me</Button>
 * ```
 *
 * ## Features
 * - Dark theme by default
 * - TypeScript support
 * - Accessible components
 * - Tree-shakeable
 */
export const Page: Story = {
  render: () => (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      color: '#fff'
    }}>
      <h1>N3WTH.AI</h1>
      <p style={{ color: '#888' }}>Design System</p>
    </div>
  ),
}