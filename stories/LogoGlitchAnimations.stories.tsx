import type { Meta, StoryObj } from '@storybook/nextjs';
import { AnimatedLogo } from '../components/AnimatedLogo';
import { useState, useEffect } from 'react';

// Wrapper component to force specific glitch modes for demonstration
const GlitchDemo = ({ mode, description }: { mode: string; description: string }) => {
  const [key, setKey] = useState(0);

  // Force remount every few seconds to show the effect
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '2rem',
      border: '1px solid #333',
      borderRadius: '8px',
      background: '#0a0a0a',
      minWidth: '300px',
    }}>
      <AnimatedLogo
        key={key}
        enableColorOnHover={true}
        enableColorOnGlitch={true}
        baseSaturation={85}
        colorIntensity={1}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.25rem' }}>
          {mode}
        </div>
        <div style={{ color: '#888', fontSize: '0.875rem' }}>
          {description}
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Effects/Logo Glitch Animations',
  component: AnimatedLogo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'All the glitch animation types that randomly occur on the logo. These happen automatically every few seconds.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// Live logo with random glitches
export const LiveRandomGlitches: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: true,
    baseSaturation: 85,
    colorIntensity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Live logo with random glitch effects occurring every 3-5 seconds. Hover to see rainbow effect.',
      },
    },
  },
};

// Gallery of all glitch types
export const AllGlitchTypes: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.5rem',
      padding: '2rem',
      background: '#000',
    }}>
      <GlitchDemo
        mode="Typewriter"
        description="Progressive character reveal with scanning effect"
      />
      <GlitchDemo
        mode="Blocks"
        description="Morphing between different ASCII block characters"
      />
      <GlitchDemo
        mode="ASCII Rain"
        description="Matrix-style falling characters"
      />
      <GlitchDemo
        mode="Corruption"
        description="Random character corruption with special symbols"
      />
      <GlitchDemo
        mode="Scan Lines"
        description="CRT monitor-style horizontal scan effect"
      />
      <GlitchDemo
        mode="Pixel Sort"
        description="Data-moshing effect with sorted pixels"
      />
      <GlitchDemo
        mode="Single Invert"
        description="Random single character color inversion"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Gallery showing all 7 glitch animation types. Each logo remounts every 3 seconds to demonstrate the effect.',
      },
    },
  },
};

// Glitch with colors
export const GlitchWithColors: Story = {
  args: {
    enableColorOnHover: false,
    enableColorOnGlitch: true,
    baseSaturation: 90,
    colorIntensity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo with colors only during glitch effects (not on hover)',
      },
    },
  },
};

// Glitch without colors
export const GlitchMonochrome: Story = {
  args: {
    enableColorOnHover: false,
    enableColorOnGlitch: false,
    baseSaturation: 0,
    colorIntensity: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pure monochrome glitch effects without any color',
      },
    },
  },
};

// Subtle glitch with low color intensity
export const SubtleGlitch: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: true,
    baseSaturation: 50,
    colorIntensity: 0.3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtle glitch effects with reduced color intensity',
      },
    },
  },
};

// Maximum intensity
export const MaximumChaos: Story = {
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: true,
    baseSaturation: 100,
    colorIntensity: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Maximum visual chaos with full saturation and intensity on both hover and glitch',
      },
    },
  },
};

// Comparison view
export const EffectComparison: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      padding: '2rem',
      background: '#000',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <AnimatedLogo
          enableColorOnHover={true}
          enableColorOnGlitch={false}
          baseSaturation={85}
          colorIntensity={1}
        />
        <span style={{ color: '#888' }}>Hover colors only</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <AnimatedLogo
          enableColorOnHover={false}
          enableColorOnGlitch={true}
          baseSaturation={85}
          colorIntensity={1}
        />
        <span style={{ color: '#888' }}>Glitch colors only</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <AnimatedLogo
          enableColorOnHover={true}
          enableColorOnGlitch={true}
          baseSaturation={85}
          colorIntensity={1}
        />
        <span style={{ color: '#888' }}>Both effects</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <AnimatedLogo
          enableColorOnHover={false}
          enableColorOnGlitch={false}
          baseSaturation={0}
          colorIntensity={0}
        />
        <span style={{ color: '#888' }}>No colors</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of different effect combinations',
      },
    },
  },
};