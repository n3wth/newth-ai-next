import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'

/**
 * Primary UI component for user interaction.
 *
 * The Button component is a versatile, accessible button that supports multiple variants,
 * sizes, and states. It follows WCAG 2.1 AA standards and includes keyboard navigation support.
 *
 * ## Usage
 *
 * ```jsx
 * import { Button } from '@/components/ui/button'
 *
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 *
 * ## Variants
 *
 * - **primary** - Main CTA button with violet gradient
 * - **secondary** - Secondary action with border
 * - **ghost** - Subtle button for less important actions
 * - **destructive** - For dangerous actions like delete
 *
 * ## Accessibility
 *
 * - Full keyboard support (Tab, Enter, Space)
 * - ARIA attributes included
 * - Focus indicators
 * - Screen reader friendly
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes.'
      }
    }
  },
  tags: ['autodocs', 'component'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    children: {
      control: 'text',
      description: 'Button content',
      table: {
        type: { summary: 'ReactNode' }
      }
    }
  },
  args: {
    onClick: () => console.log('Button clicked'),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default button appearance with primary styling.
 */
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

/**
 * Primary variant - used for main CTAs
 */
export const Primary: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
  },
}

/**
 * Secondary variant - for secondary actions
 */
export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
  },
}

/**
 * Ghost variant - subtle button for less important actions
 */
export const Ghost: Story = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
  },
}

/**
 * Destructive variant - for dangerous actions
 */
export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    variant: 'destructive',
  },
}

/**
 * Different button sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>Disabled Secondary</Button>
      <Button variant="ghost" disabled>Disabled Ghost</Button>
    </div>
  ),
}

/**
 * Button with icons
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="secondary">
        Settings
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </Button>
    </div>
  ),
}

/**
 * Loading state with spinner
 */
export const Loading: Story = {
  render: () => (
    <Button variant="primary" disabled>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </Button>
  ),
}

/**
 * Button group example
 */
export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg shadow-sm" role="group">
      <Button variant="secondary" className="rounded-r-none">Left</Button>
      <Button variant="secondary" className="rounded-none border-l-0">Middle</Button>
      <Button variant="secondary" className="rounded-l-none border-l-0">Right</Button>
    </div>
  ),
}