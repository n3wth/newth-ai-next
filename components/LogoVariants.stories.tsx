import type { Meta, StoryObj } from '@storybook/nextjs'
import { AnimatedLogo } from './AnimatedLogo'
import { StaticLogo } from './StaticLogo'

const meta = {
  title: 'Brand/Logo Variants',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        padding: '2rem',
        minWidth: '600px',
      }}
    >
      {/* Hero Section with Custom Logo */}
      <div
        style={{
          padding: '3rem',
          background:
            'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
          borderRadius: '16px',
          border: '1px solid rgba(147, 51, 234, 0.3)',
          marginBottom: '3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background animation */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
            animation: 'shimmer 4s infinite',
          }}
        />

        <h2
          style={{
            color: '#fff',
            marginTop: 0,
            fontSize: '2rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #9333ea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            position: 'relative',
            zIndex: 1,
          }}
        >
          n3wth.AI Logo System
        </h2>

        {/* Featured Logo */}
        <div
          style={{
            display: 'inline-block',
            padding: '2rem',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <img src="/logo-custom.svg" alt="n3wth.AI" style={{ height: '50px', width: 'auto' }} />
        </div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Custom ASCII-block logo with animated rainbow gradient on .AI
        </p>

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}</style>
      </div>

      {/* Animated Logo - The main component */}
      <div>
        <h4
          style={{
            color: '#888',
            marginBottom: '1rem',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          React Component - AnimatedLogo (Used in app)
        </h4>
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <AnimatedLogo baseSaturation={85} colorIntensity={1} enableColorOnHover />
        </div>
      </div>

      {/* Static Logo Text Variant */}
      <div>
        <h4
          style={{
            color: '#888',
            marginBottom: '1rem',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Static Text Variant
        </h4>
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <StaticLogo variant="text" size="lg" />
        </div>
      </div>

      {/* SVG Version (What Storybook uses) */}
      <div>
        <h4
          style={{
            color: '#888',
            marginBottom: '1rem',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Block-Based SVG (Used in Storybook header)
        </h4>
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="/logo-storybook.svg" alt="n3wth.AI" style={{ height: '30px', width: 'auto' }} />
        </div>
        <p style={{ color: '#666', fontSize: '11px', marginTop: '0.5rem' }}>
          SVG with rectangles forming ASCII blocks + rainbow gradient animation
        </p>
      </div>

      {/* ASCII Art Version */}
      <div>
        <h4
          style={{
            color: '#888',
            marginBottom: '1rem',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          ASCII Art Component
        </h4>
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <StaticLogo variant="ascii" size="md" />
        </div>
      </div>

      {/* ASCII Art SVG (New Storybook Header Logo) */}
      <div>
        <h4
          style={{
            color: '#888',
            marginBottom: '1rem',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          ASCII Art SVG (Now in Storybook header!)
        </h4>
        <div
          style={{
            padding: '2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/logo-ascii-art.svg"
            alt="n3wth.AI ASCII"
            style={{ height: '36px', width: 'auto' }}
          />
        </div>
        <p style={{ color: '#666', fontSize: '11px', marginTop: '0.5rem' }}>
          True ASCII characters with rainbow gradient + glitch effects
        </p>
      </div>
    </div>
  ),
}

export const HeaderLogo: Story = {
  name: 'Storybook Header Logo',
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h3 style={{ color: '#fff', marginBottom: '2rem' }}>Current Storybook Header Logo</h3>
      <div
        style={{
          padding: '1rem',
          background: '#0a0a0a',
          borderRadius: '8px',
          border: '1px solid #333',
          display: 'inline-block',
        }}
      >
        <img src="/logo-storybook.svg" alt="n3wth.AI" style={{ height: '40px' }} />
      </div>
      <p style={{ color: '#888', marginTop: '2rem', maxWidth: '600px' }}>
        This SVG file is located at <code>/public/logo-storybook.svg</code> and is used by
        Storybook&apos;s theme configuration. Due to Storybook&apos;s architecture, the header
        cannot render React components, only static images.
      </p>
    </div>
  ),
}
