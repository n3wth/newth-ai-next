import { j as e, r as d } from './iframe-D02P5oxD.js'
import { A as n } from './AnimatedLogo-CTGSZu_W.js'
import './preload-helper-PPVm8Dsz.js'
import './style-CizCTe6A.js'
import './proxy-BHIPz7UP.js'
const o = ({ mode: m, description: p }) => {
    const [h, u] = d.useState(0)
    return (
      d.useEffect(() => {
        const f = setInterval(() => {
          u((y) => y + 1)
        }, 3e3)
        return () => clearInterval(f)
      }, []),
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem',
          border: '1px solid #333',
          borderRadius: '8px',
          background: '#0a0a0a',
          minWidth: '300px',
        },
        children: [
          e.jsx(
            n,
            {
              enableColorOnHover: !0,
              enableColorOnGlitch: !0,
              baseSaturation: 85,
              colorIntensity: 1,
            },
            h
          ),
          e.jsxs('div', {
            style: { textAlign: 'center' },
            children: [
              e.jsx('div', {
                style: { color: '#fff', fontWeight: 'bold', marginBottom: '0.25rem' },
                children: m,
              }),
              e.jsx('div', { style: { color: '#888', fontSize: '0.875rem' }, children: p }),
            ],
          }),
        ],
      })
    )
  },
  S = {
    title: 'Effects/Logo Glitch Animations',
    component: n,
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component:
            'All the glitch animation types that randomly occur on the logo. These happen automatically every few seconds.',
        },
      },
      backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
  },
  r = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !0,
      baseSaturation: 85,
      colorIntensity: 1,
    },
    parameters: {
      docs: {
        description: {
          story:
            'Live logo with random glitch effects occurring every 3-5 seconds. Hover to see rainbow effect.',
        },
      },
    },
  },
  t = {
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          padding: '2rem',
          background: '#000',
        },
        children: [
          e.jsx(o, {
            mode: 'Typewriter',
            description: 'Progressive character reveal with scanning effect',
          }),
          e.jsx(o, {
            mode: 'Blocks',
            description: 'Morphing between different ASCII block characters',
          }),
          e.jsx(o, { mode: 'ASCII Rain', description: 'Matrix-style falling characters' }),
          e.jsx(o, {
            mode: 'Corruption',
            description: 'Random character corruption with special symbols',
          }),
          e.jsx(o, { mode: 'Scan Lines', description: 'CRT monitor-style horizontal scan effect' }),
          e.jsx(o, { mode: 'Pixel Sort', description: 'Data-moshing effect with sorted pixels' }),
          e.jsx(o, {
            mode: 'Single Invert',
            description: 'Random single character color inversion',
          }),
        ],
      }),
    parameters: {
      docs: {
        description: {
          story:
            'Gallery showing all 7 glitch animation types. Each logo remounts every 3 seconds to demonstrate the effect.',
        },
      },
    },
  },
  s = {
    args: {
      enableColorOnHover: !1,
      enableColorOnGlitch: !0,
      baseSaturation: 90,
      colorIntensity: 1,
    },
    parameters: {
      docs: {
        description: { story: 'Logo with colors only during glitch effects (not on hover)' },
      },
    },
  },
  a = {
    args: { enableColorOnHover: !1, enableColorOnGlitch: !1, baseSaturation: 0, colorIntensity: 0 },
    parameters: {
      docs: { description: { story: 'Pure monochrome glitch effects without any color' } },
    },
  },
  i = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !0,
      baseSaturation: 50,
      colorIntensity: 0.3,
    },
    parameters: {
      docs: { description: { story: 'Subtle glitch effects with reduced color intensity' } },
    },
  },
  l = {
    args: {
      enableColorOnHover: !0,
      enableColorOnGlitch: !0,
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
  },
  c = {
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          padding: '2rem',
          background: '#000',
        },
        children: [
          e.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx(n, {
                enableColorOnHover: !0,
                enableColorOnGlitch: !1,
                baseSaturation: 85,
                colorIntensity: 1,
              }),
              e.jsx('span', { style: { color: '#888' }, children: 'Hover colors only' }),
            ],
          }),
          e.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx(n, {
                enableColorOnHover: !1,
                enableColorOnGlitch: !0,
                baseSaturation: 85,
                colorIntensity: 1,
              }),
              e.jsx('span', { style: { color: '#888' }, children: 'Glitch colors only' }),
            ],
          }),
          e.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx(n, {
                enableColorOnHover: !0,
                enableColorOnGlitch: !0,
                baseSaturation: 85,
                colorIntensity: 1,
              }),
              e.jsx('span', { style: { color: '#888' }, children: 'Both effects' }),
            ],
          }),
          e.jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx(n, {
                enableColorOnHover: !1,
                enableColorOnGlitch: !1,
                baseSaturation: 0,
                colorIntensity: 0,
              }),
              e.jsx('span', { style: { color: '#888' }, children: 'No colors' }),
            ],
          }),
        ],
      }),
    parameters: {
      docs: { description: { story: 'Side-by-side comparison of different effect combinations' } },
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
    enableColorOnGlitch: true,
    baseSaturation: 85,
    colorIntensity: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Live logo with random glitch effects occurring every 3-5 seconds. Hover to see rainbow effect.'
      }
    }
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    background: '#000'
  }}>
      <GlitchDemo mode="Typewriter" description="Progressive character reveal with scanning effect" />
      <GlitchDemo mode="Blocks" description="Morphing between different ASCII block characters" />
      <GlitchDemo mode="ASCII Rain" description="Matrix-style falling characters" />
      <GlitchDemo mode="Corruption" description="Random character corruption with special symbols" />
      <GlitchDemo mode="Scan Lines" description="CRT monitor-style horizontal scan effect" />
      <GlitchDemo mode="Pixel Sort" description="Data-moshing effect with sorted pixels" />
      <GlitchDemo mode="Single Invert" description="Random single character color inversion" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Gallery showing all 7 glitch animation types. Each logo remounts every 3 seconds to demonstrate the effect.'
      }
    }
  }
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
    enableColorOnHover: false,
    enableColorOnGlitch: true,
    baseSaturation: 90,
    colorIntensity: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo with colors only during glitch effects (not on hover)'
      }
    }
  }
}`,
      ...s.parameters?.docs?.source,
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
        story: 'Pure monochrome glitch effects without any color'
      }
    }
  }
}`,
      ...a.parameters?.docs?.source,
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
    enableColorOnGlitch: true,
    baseSaturation: 50,
    colorIntensity: 0.3
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtle glitch effects with reduced color intensity'
      }
    }
  }
}`,
      ...i.parameters?.docs?.source,
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
    baseSaturation: 100,
    colorIntensity: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Maximum visual chaos with full saturation and intensity on both hover and glitch'
      }
    }
  }
}`,
      ...l.parameters?.docs?.source,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    padding: '2rem',
    background: '#000'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <AnimatedLogo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={85} colorIntensity={1} />
        <span style={{
        color: '#888'
      }}>Hover colors only</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <AnimatedLogo enableColorOnHover={false} enableColorOnGlitch={true} baseSaturation={85} colorIntensity={1} />
        <span style={{
        color: '#888'
      }}>Glitch colors only</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <AnimatedLogo enableColorOnHover={true} enableColorOnGlitch={true} baseSaturation={85} colorIntensity={1} />
        <span style={{
        color: '#888'
      }}>Both effects</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <AnimatedLogo enableColorOnHover={false} enableColorOnGlitch={false} baseSaturation={0} colorIntensity={0} />
        <span style={{
        color: '#888'
      }}>No colors</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of different effect combinations'
      }
    }
  }
}`,
      ...c.parameters?.docs?.source,
    },
  },
}
const G = [
  'LiveRandomGlitches',
  'AllGlitchTypes',
  'GlitchWithColors',
  'GlitchMonochrome',
  'SubtleGlitch',
  'MaximumChaos',
  'EffectComparison',
]
export {
  t as AllGlitchTypes,
  c as EffectComparison,
  a as GlitchMonochrome,
  s as GlitchWithColors,
  r as LiveRandomGlitches,
  l as MaximumChaos,
  i as SubtleGlitch,
  G as __namedExportsOrder,
  S as default,
}
