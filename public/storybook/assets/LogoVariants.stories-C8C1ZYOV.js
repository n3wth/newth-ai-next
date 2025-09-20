import { j as e } from './iframe-D02P5oxD.js'
import { A as m } from './AnimatedLogo-CTGSZu_W.js'
import { c as d } from './utils-Bzm_o1ou.js'
import './preload-helper-PPVm8Dsz.js'
import './style-CizCTe6A.js'
import './proxy-BHIPz7UP.js'
function n({ className: r, size: s = 'md', variant: l = 'ascii' }) {
  const g = {
    xs: 'text-[6px] leading-[6px]',
    sm: 'text-[8px] leading-[8px]',
    md: 'text-[10px] leading-[10px]',
    lg: 'text-[14px] leading-[14px]',
    xl: 'text-[20px] leading-[20px]',
  }
  if (l === 'text') {
    const t = { xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-xl', xl: 'text-3xl' }
    return e.jsxs('span', {
      className: d('font-mono font-bold tracking-tight', t[s], r),
      children: ['n3wth', e.jsx('span', { className: 'text-gray-500', children: '.AI' })],
    })
  }
  if (l === 'svg') {
    const o = { xs: 16, sm: 24, md: 32, lg: 48, xl: 64 }[s]
    return e.jsx('svg', {
      width: o * 3,
      height: o,
      viewBox: '0 0 96 32',
      className: r,
      xmlns: 'http://www.w3.org/2000/svg',
      children: e.jsxs('text', {
        x: '0',
        y: '24',
        fontFamily: 'monospace',
        fontSize: '20',
        fontWeight: 'bold',
        fill: 'white',
        children: ['n3wth', e.jsx('tspan', { fill: '#888', fontSize: '16', children: '.AI' })],
      }),
    })
  }
  const c = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █'],
    p = ['  ▄▀█ █', '  █▀█ █', '°']
  return e.jsx('div', {
    className: d('flex items-center', r),
    children: e.jsxs('pre', {
      className: d('font-mono whitespace-pre select-none flex items-center gap-1', g[s]),
      children: [
        e.jsx('div', {
          className: 'text-white',
          children: c.map((t, o) => e.jsx('div', { children: t }, o)),
        }),
        e.jsx('div', {
          className: 'text-gray-400',
          style: { fontSize: '0.8em' },
          children: p.map((t, o) => e.jsx('div', { children: t }, o)),
        }),
      ],
    }),
  })
}
try {
  ;((n.displayName = 'StaticLogo'),
    (n.__docgenInfo = {
      description: '',
      displayName: 'StaticLogo',
      props: {
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
        size: {
          defaultValue: { value: 'md' },
          description: '',
          name: 'size',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"sm"' },
              { value: '"md"' },
              { value: '"lg"' },
              { value: '"xs"' },
              { value: '"xl"' },
            ],
          },
        },
        variant: {
          defaultValue: { value: 'ascii' },
          description: '',
          name: 'variant',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"text"' }, { value: '"ascii"' }, { value: '"svg"' }],
          },
        },
      },
    }))
} catch {}
const v = {
    title: 'Brand/Logo Variants',
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'black',
        values: [
          { name: 'black', value: '#000000' },
          { name: 'dark', value: '#0a0a0a' },
        ],
      },
    },
    decorators: [(r) => e.jsx('div', { style: { zoom: 2 }, children: e.jsx(r, {}) })],
  },
  i = {
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          padding: '2rem',
          minWidth: '600px',
        },
        children: [
          e.jsxs('div', {
            style: {
              padding: '3rem',
              background:
                'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
              borderRadius: '16px',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              marginBottom: '3rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            },
            children: [
              e.jsx('div', {
                style: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
                  animation: 'shimmer 4s infinite',
                },
              }),
              e.jsx('h2', {
                style: {
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
                },
                children: 'n3wth.AI Logo System',
              }),
              e.jsx('div', {
                style: {
                  display: 'inline-block',
                  padding: '2rem',
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  zIndex: 1,
                },
                children: e.jsx('img', {
                  src: '/logo-custom.svg',
                  alt: 'n3wth.AI',
                  style: { height: '50px', width: 'auto' },
                }),
              }),
              e.jsx('p', {
                style: {
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginTop: '1.5rem',
                  fontSize: '0.9rem',
                  position: 'relative',
                  zIndex: 1,
                },
                children: 'Custom ASCII-block logo with animated rainbow gradient on .AI',
              }),
              e.jsx('style', {
                children: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `,
              }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('h4', {
                style: {
                  color: '#888',
                  marginBottom: '1rem',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                },
                children: 'React Component - AnimatedLogo (Used in app)',
              }),
              e.jsx('div', {
                style: {
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                },
                children: e.jsx(m, {
                  baseSaturation: 85,
                  colorIntensity: 1,
                  enableColorOnHover: !0,
                }),
              }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('h4', {
                style: {
                  color: '#888',
                  marginBottom: '1rem',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                },
                children: 'Static Text Variant',
              }),
              e.jsx('div', {
                style: {
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                },
                children: e.jsx(n, { variant: 'text', size: 'lg' }),
              }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('h4', {
                style: {
                  color: '#888',
                  marginBottom: '1rem',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                },
                children: 'Block-Based SVG (Used in Storybook header)',
              }),
              e.jsx('div', {
                style: {
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: e.jsx('img', {
                  src: '/logo-storybook.svg',
                  alt: 'n3wth.AI',
                  style: { height: '30px', width: 'auto' },
                }),
              }),
              e.jsx('p', {
                style: { color: '#666', fontSize: '11px', marginTop: '0.5rem' },
                children: 'SVG with rectangles forming ASCII blocks + rainbow gradient animation',
              }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('h4', {
                style: {
                  color: '#888',
                  marginBottom: '1rem',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                },
                children: 'ASCII Art Component',
              }),
              e.jsx('div', {
                style: {
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                },
                children: e.jsx(n, { variant: 'ascii', size: 'md' }),
              }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('h4', {
                style: {
                  color: '#888',
                  marginBottom: '1rem',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                },
                children: 'ASCII Art SVG (Now in Storybook header!)',
              }),
              e.jsx('div', {
                style: {
                  padding: '2rem',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: e.jsx('img', {
                  src: '/logo-ascii-art.svg',
                  alt: 'n3wth.AI ASCII',
                  style: { height: '36px', width: 'auto' },
                }),
              }),
              e.jsx('p', {
                style: { color: '#666', fontSize: '11px', marginTop: '0.5rem' },
                children: 'True ASCII characters with rainbow gradient + glitch effects',
              }),
            ],
          }),
        ],
      }),
  },
  a = {
    name: 'Storybook Header Logo',
    render: () =>
      e.jsxs('div', {
        style: { padding: '2rem' },
        children: [
          e.jsx('h3', {
            style: { color: '#fff', marginBottom: '2rem' },
            children: 'Current Storybook Header Logo',
          }),
          e.jsx('div', {
            style: {
              padding: '1rem',
              background: '#0a0a0a',
              borderRadius: '8px',
              border: '1px solid #333',
              display: 'inline-block',
            },
            children: e.jsx('img', {
              src: '/logo-storybook.svg',
              alt: 'n3wth.AI',
              style: { height: '40px' },
            }),
          }),
          e.jsxs('p', {
            style: { color: '#888', marginTop: '2rem', maxWidth: '600px' },
            children: [
              'This SVG file is located at ',
              e.jsx('code', { children: '/public/logo-storybook.svg' }),
              " and is used by Storybook's theme configuration. Due to Storybook's architecture, the header cannot render React components, only static images.",
            ],
          }),
        ],
      }),
  }
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '2rem',
    minWidth: '600px'
  }}>
      {/* Hero Section with Custom Logo */}
      <div style={{
      padding: '3rem',
      background: 'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
      borderRadius: '16px',
      border: '1px solid rgba(147, 51, 234, 0.3)',
      marginBottom: '3rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
        {/* Background animation */}
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
        animation: 'shimmer 4s infinite'
      }} />

        <h2 style={{
        color: '#fff',
        marginTop: 0,
        fontSize: '2rem',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #fff 0%, #9333ea 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        position: 'relative',
        zIndex: 1
      }}>
          n3wth.AI Logo System
        </h2>

        {/* Featured Logo */}
        <div style={{
        display: 'inline-block',
        padding: '2rem',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1
      }}>
          <img src="/logo-custom.svg" alt="n3wth.AI" style={{
          height: '50px',
          width: 'auto'
        }} />
        </div>

        <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: '1.5rem',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 1
      }}>
          Custom ASCII-block logo with animated rainbow gradient on .AI
        </p>

        <style>{\`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        \`}</style>
      </div>

      {/* Animated Logo - The main component */}
      <div>
        <h4 style={{
        color: '#888',
        marginBottom: '1rem',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
          React Component - AnimatedLogo (Used in app)
        </h4>
        <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
          <AnimatedLogo baseSaturation={85} colorIntensity={1} enableColorOnHover />
        </div>
      </div>

      {/* Static Logo Text Variant */}
      <div>
        <h4 style={{
        color: '#888',
        marginBottom: '1rem',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
          Static Text Variant
        </h4>
        <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
          <StaticLogo variant="text" size="lg" />
        </div>
      </div>

      {/* SVG Version (What Storybook uses) */}
      <div>
        <h4 style={{
        color: '#888',
        marginBottom: '1rem',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
          Block-Based SVG (Used in Storybook header)
        </h4>
        <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <img src="/logo-storybook.svg" alt="n3wth.AI" style={{
          height: '30px',
          width: 'auto'
        }} />
        </div>
        <p style={{
        color: '#666',
        fontSize: '11px',
        marginTop: '0.5rem'
      }}>
          SVG with rectangles forming ASCII blocks + rainbow gradient animation
        </p>
      </div>

      {/* ASCII Art Version */}
      <div>
        <h4 style={{
        color: '#888',
        marginBottom: '1rem',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
          ASCII Art Component
        </h4>
        <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
          <StaticLogo variant="ascii" size="md" />
        </div>
      </div>

      {/* ASCII Art SVG (New Storybook Header Logo) */}
      <div>
        <h4 style={{
        color: '#888',
        marginBottom: '1rem',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
          ASCII Art SVG (Now in Storybook header!)
        </h4>
        <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <img src="/logo-ascii-art.svg" alt="n3wth.AI ASCII" style={{
          height: '36px',
          width: 'auto'
        }} />
        </div>
        <p style={{
        color: '#666',
        fontSize: '11px',
        marginTop: '0.5rem'
      }}>
          True ASCII characters with rainbow gradient + glitch effects
        </p>
      </div>
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Storybook Header Logo',
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h3 style={{
      color: '#fff',
      marginBottom: '2rem'
    }}>Current Storybook Header Logo</h3>
      <div style={{
      padding: '1rem',
      background: '#0a0a0a',
      borderRadius: '8px',
      border: '1px solid #333',
      display: 'inline-block'
    }}>
        <img src="/logo-storybook.svg" alt="n3wth.AI" style={{
        height: '40px'
      }} />
      </div>
      <p style={{
      color: '#888',
      marginTop: '2rem',
      maxWidth: '600px'
    }}>
        This SVG file is located at <code>/public/logo-storybook.svg</code> and is used by
        Storybook&apos;s theme configuration. Due to Storybook&apos;s architecture, the header
        cannot render React components, only static images.
      </p>
    </div>
}`,
      ...a.parameters?.docs?.source,
    },
  },
}
const S = ['AllVariants', 'HeaderLogo']
export { i as AllVariants, a as HeaderLogo, S as __namedExportsOrder, v as default }
