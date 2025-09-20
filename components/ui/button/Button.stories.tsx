import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '../Button'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Loader2,
  Check,
  X,
  Settings,
  Mail,
  Heart,
} from 'lucide-react'

/**
 * Buttons trigger actions or navigate to new pages. They are the primary way users interact with your application.
 *
 * ## Design Principles
 *
 * - **Clear hierarchy** - Use primary buttons for main actions, secondary for alternatives
 * - **Consistent sizing** - Maintain uniform button sizes within the same context
 * - **Accessible** - All buttons include proper ARIA labels and keyboard support
 * - **Visual feedback** - Hover, focus, and active states provide clear interaction feedback
 *
 * ## Usage Guidelines
 *
 * ```tsx
 * import { Button } from '../Button'
 *
 * // Primary action
 * <Button variant="primary">Save Changes</Button>
 *
 * // With icon
 * <Button variant="secondary" icon={<ArrowRight />}>
 *   Continue
 * </Button>
 *
 * // As a link
 * <Button href="/dashboard" icon={<ExternalLink />}>
 *   View Dashboard
 * </Button>
 * ```
 *
 * ## Accessibility
 *
 * - Supports keyboard navigation (Tab, Enter, Space)
 * - Includes focus indicators for keyboard users
 * - ARIA attributes for screen readers
 * - Disabled states prevent interaction
 *
 * ## Best Practices
 *
 * ✅ **DO**
 * - Use descriptive, action-oriented labels
 * - Limit to 1-2 primary buttons per section
 * - Provide visual feedback for loading states
 * - Group related actions together
 *
 * ❌ **DON'T**
 * - Use vague labels like "Click here"
 * - Disable buttons without clear reason
 * - Mix button sizes in the same group
 * - Use too many primary buttons
 */
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      toc: true,
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px] flex items-center justify-center bg-black p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'component'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'destructive'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: '"primary" | "secondary" | "ghost" | "destructive"' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: 'right' },
        category: 'Icon',
      },
    },
    icon: {
      control: false,
      description: 'Icon element to display in the button',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Icon',
      },
    },
    href: {
      control: 'text',
      description: 'URL to navigate to (renders button as a link)',
      table: {
        type: { summary: 'string' },
        category: 'Navigation',
      },
    },
    external: {
      control: 'boolean',
      description: 'Open link in new tab (requires href)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Navigation',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    children: {
      control: 'text',
      description: 'Button label text',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
        category: 'Events',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants Section

/**
 * The primary button is used for the main call-to-action on a page or within a section.
 * Use sparingly - typically one primary button per section.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

/**
 * Secondary buttons are used for alternative actions or less important CTAs.
 * They provide visual hierarchy without competing with primary actions.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

/**
 * Ghost buttons are subtle and used for tertiary actions or in toolbars.
 * They have minimal visual weight until hovered.
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

/**
 * Destructive buttons are used for dangerous actions like deleting data.
 * Always pair with confirmation dialogs for critical actions.
 */
export const Destructive: Story = {
  name: 'Destructive (New)',
  args: {
    children: 'Delete Account',
    variant: 'destructive',
  },
}

// Sizes Section

/**
 * Small buttons are used in compact spaces like tables or inline with text.
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    variant: 'primary',
  },
}

/**
 * Medium is the default size, suitable for most use cases.
 */
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
    variant: 'primary',
  },
}

/**
 * Large buttons are used for prominent CTAs or on mobile interfaces.
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'primary',
  },
}

// Icons Section

/**
 * Buttons can include icons to reinforce their action.
 * Icons appear on the right by default.
 */
export const WithIconRight: Story = {
  args: {
    children: 'Continue',
    variant: 'primary',
    icon: <ArrowRight size={16} />,
  },
}

/**
 * Icons can be positioned on the left for actions like "back" or "download".
 */
export const WithIconLeft: Story = {
  args: {
    children: 'Download',
    variant: 'secondary',
    icon: <Download size={16} />,
    iconPosition: 'left',
  },
}

/**
 * Icon-only buttons save space in toolbars and navigation.
 * Always include an aria-label for accessibility.
 */
export const IconOnly: Story = {
  args: {
    'aria-label': 'Settings',
    variant: 'ghost',
    size: 'sm',
    children: <Settings size={16} />,
  },
}

// States Section

/**
 * Loading state shows a spinner and disables interaction.
 * Use when waiting for an async action to complete.
 */
export const Loading: Story = {
  args: {
    children: 'Saving...',
    variant: 'primary',
    loading: true,
    icon: <Loader2 className="animate-spin" size={16} />,
    iconPosition: 'left',
  },
}

/**
 * Disabled buttons prevent user interaction.
 * Use sparingly and provide context for why the action is unavailable.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

/**
 * Success state can be shown temporarily after a successful action.
 */
export const Success: Story = {
  args: {
    children: 'Success!',
    variant: 'primary',
    className: 'bg-green-600 hover:bg-green-700',
    icon: <Check size={16} />,
  },
}

/**
 * Error state indicates a failed action.
 */
export const Error: Story = {
  args: {
    children: 'Failed',
    variant: 'destructive',
    icon: <X size={16} />,
  },
}

// Navigation Section

/**
 * Buttons can act as links for navigation.
 * They render as anchor tags while maintaining button styling.
 */
export const AsLink: Story = {
  args: {
    children: 'View Dashboard',
    href: '/dashboard',
    variant: 'primary',
    icon: <ArrowRight size={16} />,
  },
}

/**
 * External links open in a new tab and should indicate this behavior.
 */
export const ExternalLinkButton: Story = {
  name: 'External Link',
  args: {
    children: 'View Documentation',
    href: 'https://example.com',
    external: true,
    variant: 'secondary',
    icon: <ExternalLink size={16} />,
  },
}

// Composition Examples

/**
 * A common button group pattern for forms.
 */
export const ButtonGroup: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex gap-3">
      <Button variant="primary">Save Changes</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  ),
}

/**
 * Toolbar with icon buttons.
 */
export const Toolbar: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex gap-1 p-2 bg-gray-900 rounded-lg">
      <Button variant="ghost" size="sm" aria-label="Mail">
        <Mail size={16} />
      </Button>
      <Button variant="ghost" size="sm" aria-label="Settings">
        <Settings size={16} />
      </Button>
      <Button variant="ghost" size="sm" aria-label="Favorites">
        <Heart size={16} />
      </Button>
    </div>
  ),
}

/**
 * Different button sizes in context.
 */
export const SizeComparison: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
  ),
}

/**
 * All variants for visual comparison.
 */
export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

/**
 * Loading states across different variants.
 */
export const LoadingStates: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="primary"
        loading
        icon={<Loader2 className="animate-spin" size={16} />}
        iconPosition="left"
      >
        Saving...
      </Button>
      <Button
        variant="secondary"
        loading
        icon={<Loader2 className="animate-spin" size={16} />}
        iconPosition="left"
      >
        Processing...
      </Button>
      <Button
        variant="ghost"
        loading
        icon={<Loader2 className="animate-spin" size={16} />}
        iconPosition="left"
      >
        Loading...
      </Button>
    </div>
  ),
}

/**
 * Mobile-friendly button examples.
 */
export const MobileButtons: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Button variant="primary" size="lg" className="w-full">
        Get Started
      </Button>
      <Button variant="secondary" size="lg" className="w-full">
        Learn More
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="ghost" size="md">
          Skip
        </Button>
        <Button variant="primary" size="md">
          Next
        </Button>
      </div>
    </div>
  ),
}
