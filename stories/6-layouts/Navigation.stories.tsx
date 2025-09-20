import type { Meta, StoryObj } from '@storybook/nextjs'
import { NavigationStorybook as Navigation } from '@/components/NavigationStorybook'

/**
 * The Navigation component provides the main site navigation with responsive design,
 * accessible keyboard navigation, and smooth animations.
 *
 * ## Features
 * - Responsive mobile menu
 * - Keyboard accessible (Tab, Enter, Escape)
 * - Smooth transitions
 * - Active link highlighting
 * - Logo/brand area
 *
 * ## Accessibility
 * - Semantic HTML with nav element
 * - ARIA labels for mobile menu
 * - Keyboard navigation support
 * - Focus indicators
 */
const meta = {
  title: 'Layout/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Main navigation bar with responsive menu and accessibility features',
      },
    },
  },
  argTypes: {
    currentPath: {
      control: 'select',
      options: ['/', '/projects', '/blog', '/contact'],
      description: 'Current active path for navigation highlighting',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    showMobileMenu: {
      control: 'boolean',
      description: 'Control mobile menu visibility (for testing)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onNavigate: {
      action: 'navigated',
      description: 'Called when a navigation link is clicked',
      table: {
        type: { summary: '(path: string) => void' },
      },
    },
    onMenuToggle: {
      action: 'menu-toggled',
      description: 'Called when mobile menu is toggled',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="bg-black w-full">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'layout'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default navigation appearance
 */
export const Default: Story = {}

/**
 * Navigation with gradient background
 */
export const WithGradientBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        <Story />
      </div>
    ),
  ],
}

/**
 * Navigation with content below to show sticky behavior
 */
export const StickyNavigation: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-black">
        <div className="sticky top-0 z-50">
          <Story />
        </div>
        <div className="p-8 space-y-4">
          <h1 className="text-4xl font-bold text-white">Page Content</h1>
          <p className="text-gray-400">Scroll to see sticky navigation behavior</p>
          <div className="h-[150vh] bg-gray-900/50 rounded-lg p-8">
            <p className="text-gray-500">Long content area...</p>
          </div>
        </div>
      </div>
    ),
  ],
}

/**
 * Mobile view simulation
 */
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-black max-w-[375px] mx-auto">
        <Story />
      </div>
    ),
  ],
}

/**
 * With active link highlighting
 */
export const WithActiveLink: Story = {
  decorators: [
    (Story) => (
      <div className="bg-black">
        <p className="text-center text-gray-500 py-4 text-sm">
          Note: Active link styles depend on current route
        </p>
        <Story />
      </div>
    ),
  ],
}
