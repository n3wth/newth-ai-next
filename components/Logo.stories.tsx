import type { Meta, StoryObj } from '@storybook/nextjs'
import { AnimatedLogo as Logo } from './AnimatedLogo'
import type { AnimatedLogoProps } from './AnimatedLogo'

const meta: Meta<AnimatedLogoProps> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
    docs: {
      description: {
        component: `
## n3wth.AI Logo Component

The AnimatedLogo component displays the iconic n3wth.AI ASCII art logo with customizable glitch effects and rainbow animations.

### Features
- 🌈 **Rainbow hover effects** - Smooth color transitions on mouse interaction
- ⚡ **Glitch animations** - Random glitch effects for a cyberpunk aesthetic
- 🎨 **Customizable colors** - Adjust saturation and intensity
- 📱 **Responsive** - Scales appropriately across screen sizes

### Usage

\`\`\`tsx
import { AnimatedLogo } from '@/components/AnimatedLogo'

// Basic usage with hover effects
<AnimatedLogo
  enableColorOnHover={true}
  baseSaturation={85}
/>

// With glitch effects
<AnimatedLogo
  enableColorOnGlitch={true}
  colorIntensity={0.8}
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ zoom: 3 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    enableColorOnHover: {
      control: 'boolean',
      description: 'Enable rainbow colors on hover',
      defaultValue: true,
    },
    enableColorOnGlitch: {
      control: 'boolean',
      description: 'Enable colors during glitch effects',
      defaultValue: false,
    },
    baseSaturation: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Base saturation level (0-100)',
      defaultValue: 85,
    },
    colorIntensity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'How much color to apply (0-1)',
      defaultValue: 1,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default logo with hover rainbow
export const Default: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1,
  },
}

// Vivid rainbow
export const VividRainbow: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 100,
    colorIntensity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Maximum saturation and intensity for vivid rainbow effects on hover',
      },
    },
  },
}

// Monochrome (no color)
export const Monochrome: Story = {
  args: {
    enableColorOnHover: false,
    enableColorOnGlitch: false,
    baseSaturation: 0,
    colorIntensity: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pure white logo with glitch effects but no color',
      },
    },
  },
}

// Color intensity comparison
export const ColorIntensityComparison: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1,
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {[0, 0.25, 0.5, 0.75, 1].map((intensity) => (
        <div
          key={intensity}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Logo
            enableColorOnHover={true}
            enableColorOnGlitch={false}
            baseSaturation={85}
            colorIntensity={intensity}
          />
          <span style={{ fontSize: '0.75rem', color: '#666' }}>{intensity * 100}% intensity</span>
        </div>
      ))}
    </div>
  ),
}

// Saturation comparison
export const SaturationComparison: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1,
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {[0, 25, 50, 75, 100].map((saturation) => (
        <div
          key={saturation}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Logo
            enableColorOnHover={true}
            enableColorOnGlitch={false}
            baseSaturation={saturation}
            colorIntensity={1}
          />
          <span style={{ fontSize: '0.75rem', color: '#666' }}>{saturation}% saturation</span>
        </div>
      ))}
    </div>
  ),
}

// Dark background preview
export const DarkBackground: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: true,
    baseSaturation: 90,
    colorIntensity: 1,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          background: '#0a0a0a',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

// Configuration playground - hidden from sidebar
export const Playground: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to experiment with different configurations',
      },
    },
  },
  tags: ['!autodocs', '!test'],
}
