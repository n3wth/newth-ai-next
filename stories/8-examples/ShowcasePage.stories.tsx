import type { Meta, StoryObj } from '@storybook/nextjs'
import ShowcasePage from '@/app/showcase/page'

const meta = {
  title: 'Examples/Pages/Component Showcase',
  component: ShowcasePage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'black',
    },
    docs: {
      description: {
        component: `
## Component Showcase

A comprehensive demonstration of all available components in the n3wth.AI design system.

### Features
- 🎨 **All UI Components** - Buttons, cards, and interactive elements
- 🌊 **All Background Animations** - Switch between 8 different animated backgrounds
- 📊 **Interactive Controls** - Click tracking and state management
- ♿ **Accessibility** - Proper ARIA labels and keyboard navigation
- 🚀 **Performance** - Optimized with React.memo and cleanup on unmount

### Best Practices Demonstrated
- TypeScript for type safety
- Event handlers with user feedback
- State management patterns
- Component composition
- Tailwind CSS styling
- Responsive design

### Usage

This showcase page demonstrates how to:
1. Combine multiple components effectively
2. Handle user interactions with proper feedback
3. Manage component state
4. Switch between different background animations
5. Create an interactive, accessible UI

Visit the live page at \`/showcase\` to see all components in action.
        `,
      },
    },
  },
} satisfies Meta<typeof ShowcasePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

export const InteractiveShowcase: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Full interactive showcase with all components. Try switching backgrounds and clicking buttons!',
      },
    },
  },
}
