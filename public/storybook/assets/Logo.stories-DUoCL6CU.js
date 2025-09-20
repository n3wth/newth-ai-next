import { j as e } from './iframe-D02P5oxD.js'
import { A as c } from './AnimatedLogo-CTGSZu_W.js'
import './preload-helper-PPVm8Dsz.js'
import './style-CizCTe6A.js'
import './proxy-BHIPz7UP.js'
const f = {
    title: 'Brand/Logo',
    component: c,
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
          component: 'The n3wth.AI ASCII art logo with glitch effects and rainbow animations',
        },
      },
    },
    decorators: [(n) => e.jsx('div', { style: { zoom: 3 }, children: e.jsx(n, {}) })],
    tags: ['autodocs'],
    argTypes: {
      enableColorOnHover: {
        control: 'boolean',
        description: 'Enable rainbow colors on hover',
        defaultValue: !0,
      },
      enableColorOnGlitch: {
        control: 'boolean',
        description: 'Enable colors during glitch effects',
        defaultValue: !1,
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
  },
  r = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !1,
      baseSaturation: 85,
      colorIntensity: 1,
    },
  },
  o = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !1,
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
  },
  a = {
    args: { enableColorOnHover: !1, enableColorOnGlitch: !1, baseSaturation: 0, colorIntensity: 0 },
    parameters: {
      docs: { description: { story: 'Pure white logo with glitch effects but no color' } },
    },
  },
  t = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !1,
      baseSaturation: 85,
      colorIntensity: 1,
    },
    render: () =>
      e.jsx('div', {
        style: { display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' },
        children: [0, 0.25, 0.5, 0.75, 1].map((n) =>
          e.jsxs(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              },
              children: [
                e.jsx(c, {
                  enableColorOnHover: !0,
                  enableColorOnGlitch: !1,
                  baseSaturation: 85,
                  colorIntensity: n,
                }),
                e.jsxs('span', {
                  style: { fontSize: '0.75rem', color: '#666' },
                  children: [n * 100, '% intensity'],
                }),
              ],
            },
            n
          )
        ),
      }),
  },
  s = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !1,
      baseSaturation: 85,
      colorIntensity: 1,
    },
    render: () =>
      e.jsx('div', {
        style: { display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' },
        children: [0, 25, 50, 75, 100].map((n) =>
          e.jsxs(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              },
              children: [
                e.jsx(c, {
                  enableColorOnHover: !0,
                  enableColorOnGlitch: !1,
                  baseSaturation: n,
                  colorIntensity: 1,
                }),
                e.jsxs('span', {
                  style: { fontSize: '0.75rem', color: '#666' },
                  children: [n, '% saturation'],
                }),
              ],
            },
            n
          )
        ),
      }),
  },
  l = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !0,
      baseSaturation: 90,
      colorIntensity: 1,
    },
    parameters: { backgrounds: { default: 'dark' } },
    decorators: [
      (n) =>
        e.jsx('div', {
          style: { padding: '2rem', background: '#0a0a0a', borderRadius: '8px' },
          children: e.jsx(n, {}),
        }),
    ],
  },
  i = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !1,
      baseSaturation: 85,
      colorIntensity: 1,
    },
    parameters: {
      docs: {
        description: { story: 'Use the controls to experiment with different configurations' },
      },
    },
  }
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 100,
    colorIntensity: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Maximum saturation and intensity for vivid rainbow effects on hover'
      }
    }
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: false,
    enableColorOnGlitch: false,
    baseSaturation: 0,
    colorIntensity: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Pure white logo with glitch effects but no color'
      }
    }
  }
}`,
      ...a.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1
  },
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[0, 0.25, 0.5, 0.75, 1].map(intensity => <div key={intensity} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
          <Logo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={85} colorIntensity={intensity} />
          <span style={{
        fontSize: '0.75rem',
        color: '#666'
      }}>{intensity * 100}% intensity</span>
        </div>)}
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1
  },
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[0, 25, 50, 75, 100].map(saturation => <div key={saturation} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
          <Logo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={saturation} colorIntensity={1} />
          <span style={{
        fontSize: '0.75rem',
        color: '#666'
      }}>{saturation}% saturation</span>
        </div>)}
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: true,
    baseSaturation: 90,
    colorIntensity: 1
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div style={{
    padding: '2rem',
    background: '#0a0a0a',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,
      ...l.parameters?.docs?.source,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    enableColorOnHover: true,
    enableColorOnGlitch: false,
    baseSaturation: 85,
    colorIntensity: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to experiment with different configurations'
      }
    }
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
const y = [
  'Default',
  'VividRainbow',
  'Monochrome',
  'ColorIntensityComparison',
  'SaturationComparison',
  'DarkBackground',
  'Playground',
]
export {
  t as ColorIntensityComparison,
  l as DarkBackground,
  r as Default,
  a as Monochrome,
  i as Playground,
  s as SaturationComparison,
  o as VividRainbow,
  y as __namedExportsOrder,
  f as default,
}
