import { j as e, u as U, r as x, R as X } from './iframe-D02P5oxD.js'
import { L as W } from './link-O0MyjLlL.js'
import { A as Y } from './AnimatedLogo-CTGSZu_W.js'
import { m as c } from './proxy-BHIPz7UP.js'
import { W as Z } from './WarpBackground-CZe-78A1.js'
import { c as ee } from './utils-Bzm_o1ou.js'
import { N as te } from './NeuralNetworkBackground-O-mech4j.js'
import { C as ae } from './CodeRainBackground-OYYFhmPD.js'
import { O as se } from './OrbitingAtomsBackground-BaaSnCjC.js'
import { D as ne } from './DataFlowBackground-D8KoObpf.js'
import { W as re } from './WaveformBackground-DKzqUuVw.js'
import { G as ie } from './GlitchBackground-MgwDpsm5.js'
import { P as oe } from './ParticleFieldBackground-A8WPgPKZ.js'
import { A as le } from './arrow-right-Bnbe0itW.js'
import { C as ce } from './chevron-down-BEOEM9hO.js'
import './preload-helper-PPVm8Dsz.js'
import './style-CizCTe6A.js'
import './createLucideIcon-FJiH0jrJ.js'
function de() {
  const t = [
    {
      title: 'Logo Effects & Keyframes',
      description: 'ASCII animations with keyframe helper for testing',
      path: '/demos/logo-effects',
      new: !0,
    },
    {
      title: 'Background Effects',
      description: 'Various background patterns and effects',
      path: '/demos/backgrounds-demo',
    },
    {
      title: 'Standalone Hero',
      description: 'Hero section without header component',
      path: '/demos/hero-no-header',
    },
  ]
  return e.jsx('div', {
    className: 'min-h-screen bg-black text-white p-8',
    children: e.jsxs('div', {
      className: 'max-w-4xl mx-auto',
      children: [
        e.jsxs('div', {
          className: 'mb-8',
          children: [
            e.jsx('h1', { className: 'text-3xl font-bold mb-2', children: 'Development Demos' }),
            e.jsx('p', {
              className: 'text-gray-400',
              children: 'Component and effect demonstrations for development',
            }),
          ],
        }),
        e.jsx('div', {
          className: 'grid gap-4',
          children: t.map((a) =>
            e.jsxs(
              W,
              {
                href: a.path,
                className:
                  'block p-6 border border-gray-800 rounded-lg bg-black/50 hover:bg-black/70 hover:border-gray-700 transition-all',
                children: [
                  e.jsxs('div', {
                    className: 'flex items-center gap-3',
                    children: [
                      e.jsx('h2', { className: 'text-xl font-semibold', children: a.title }),
                      a.new &&
                        e.jsx('span', {
                          className:
                            'px-2 py-1 text-xs font-mono bg-purple-500/20 text-purple-400 rounded',
                          children: 'NEW',
                        }),
                    ],
                  }),
                  e.jsx('p', { className: 'text-gray-400 mt-2', children: a.description }),
                ],
              },
              a.path
            )
          ),
        }),
        e.jsx('div', {
          className: 'mt-12 p-4 border border-gray-800 rounded-lg bg-black/50',
          children: e.jsxs('p', {
            className: 'text-sm text-gray-500 font-mono',
            children: [
              'Access demos directly: ',
              e.jsx('code', { className: 'text-gray-400', children: '/demos/[demo-name]' }),
            ],
          }),
        }),
      ],
    }),
  })
}
const b = {
  panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
  button: {
    base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150',
    inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
  },
  text: { key: 'font-mono text-[11px] text-[#666]' },
  animation: { easeOut: { duration: 0.15 } },
}
function q({ effect: t, forceFrame: a }) {
  return e.jsx(me, { glitchMode: t, forcedFrame: a })
}
function me({ glitchMode: t, forcedFrame: a, forcedIntensity: d = 1 }) {
  const [s, m] = x.useState(a || 0),
    [h, k] = x.useState(-1),
    [r, p] = x.useState(!1),
    [i, I] = x.useState(d),
    $ = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █'],
    G = ['  ▄▀█ █', '  █▀█ █', '°']
  ;(x.useEffect(() => {
    if (t === 'single-invert') {
      const n = $.join('').length + G.join('').length
      k(Math.floor(Math.random() * n))
    }
  }, [t]),
    x.useEffect(() => {
      if (a === void 0) {
        const n = setInterval(() => {
          if ((m((l) => l + 1), t !== 'normal' && t !== 'single-invert')) {
            const l = Math.sin(Date.now() * 0.002) * 0.3 + 0.7
            I(l)
          } else t === 'single-invert' && I(1)
        }, 20)
        return () => clearInterval(n)
      } else {
        I(d)
        return
      }
    }, [a, t, d]))
  const V = (n, l, y, o, v = !1) => {
    if (n === ' ' || i < 0.01) return n
    const f = v ? l + 24 : l,
      u = v ? y + 3 : y
    switch (t) {
      case 'normal':
        return n
      case 'rainbow':
        return n
      case 'typewriter':
        const j = $.join('').length + G.join('').length,
          C = (o * 2 * i) % (j + 20),
          A = Math.abs(f + u * 25 - C)
        return f + u * 25 > C
          ? Math.random() < i
            ? '░'
            : n
          : A < 3
            ? n === ' '
              ? n
              : Math.random() < i
                ? '▓'
                : n
            : n
      case 'blocks':
        const M = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫']
        if (Math.random() < i) {
          const H = Math.sin(o * 0.05 + f * 0.3) * 0.5 + 0.5,
            Q = Math.floor(H * M.length * i)
          return n !== ' ' && n !== '°' ? M[Q] : n
        }
        return n
      case 'ascii-rain':
        const w = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
          L = 0.1 * i,
          N = (o * L + f * 2) % 20
        if (Math.random() < i * 0.3) {
          if (N < w.length) return w[Math.floor(N)]
          if (N < w.length + 2) return '░'
        }
        return n
      case 'corruption':
        if (Math.random() < i * 0.15) {
          const H = [
            '•',
            '◦',
            '◉',
            '○',
            '◌',
            '◍',
            '◎',
            '●',
            '◢',
            '◣',
            '◤',
            '◥',
            '▲',
            '▼',
            '◀',
            '▶',
          ]
          return H[Math.floor(Math.random() * H.length)]
        }
        return n
      case 'scan-lines':
        const R = (o / 2) % 10,
          S = Math.exp(-Math.abs(u * 3 - R)) * i
        return S > 0.3 ? (n === ' ' ? n : '▬') : S > 0.1 ? (n === ' ' ? n : '═') : n
      case 'pixel-sort':
        const z = ['░', '▒', '▓', '█'],
          F = Math.sin(o * 0.1 + u) * 0.5 + 0.5,
          J = Math.sin(o * 0.05) * 0.5 + 0.5
        if (Math.random() < J * i * 0.3 && f > F * 20) {
          const H = Math.floor((o * 0.2 + f) % z.length)
          return z[H]
        }
        return n
      case 'single-invert':
        return n
      default:
        return n
    }
  }
  return e.jsx('div', {
    className: 'flex items-center',
    onMouseEnter: () => p(!0),
    onMouseLeave: () => p(!1),
    children: e.jsxs('pre', {
      className:
        'font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1',
      children: [
        e.jsx('div', {
          className: 'relative',
          children: e.jsx('div', {
            className: 'relative',
            children: $.map((n, l) => {
              let y = 0
              for (let o = 0; o < l; o++) y += $[o].length
              return e.jsx(
                c.div,
                {
                  className: 'text-white',
                  style: {
                    filter:
                      t === 'scan-lines' && l === (s / 2) % 3
                        ? 'brightness(1.5) contrast(1.2)'
                        : t === 'corruption'
                          ? `hue-rotate(${Math.sin(s * 0.05) * 30}deg)`
                          : 'none',
                  },
                  children: n.split('').map((o, v) => {
                    const u = y + v === h,
                      j = V(o, v, l, s),
                      C = j !== o,
                      A = Math.sin(s * 0.03 + l * 2) * 30,
                      w = (((v * 15 - s * 2 + A) % 360) + 360) % 360,
                      L = (85 + Math.sin(s * 0.05) * 10) * (r || t === 'rainbow' ? 1 : i * 0.3),
                      N = 55 + Math.sin(s * 0.07 + v * 0.2) * 10,
                      S =
                        (r || t === 'rainbow' ? 1 : t === 'normal' ? 0 : i * 0.3) > 0
                          ? `hsl(${w}, ${L}%, ${N}%)`
                          : 'white'
                    return e.jsx(
                      c.span,
                      {
                        className: 'inline-block',
                        style: {
                          opacity: j === ' ' ? 0 : 1,
                          color: u
                            ? `rgba(0, 0, 0, ${i})`
                            : C && t !== 'typewriter'
                              ? `rgba(150, 150, 150, ${i})`
                              : S,
                          backgroundColor: u ? `rgba(255, 255, 255, ${i})` : 'transparent',
                          padding: u ? '0 1px' : '0',
                        },
                        children: j,
                      },
                      v
                    )
                  }),
                },
                l
              )
            }),
          }),
        }),
        e.jsx('div', {
          className: 'text-gray-400 text-[8px] leading-[8px] -mt-0.5',
          children: G.map((n, l) =>
            e.jsx(
              c.div,
              {
                children: n.split('').map((y, o) => {
                  const v = $.join('').length + l * 8 + o,
                    f = t === 'single-invert' && v === h,
                    u = V(y, o, l, s, !0),
                    j = u !== y,
                    C = 24 + o,
                    A = Math.sin(s * 0.03 + l * 2) * 30,
                    w = (((C * 15 - s * 2 + A) % 360) + 360) % 360,
                    L = (85 + Math.sin(s * 0.05) * 10) * (r || t === 'rainbow' ? 1 : i * 0.3),
                    N = 55 + Math.sin(s * 0.07 + o * 0.2) * 10,
                    S =
                      (r || t === 'rainbow' ? 1 : t === 'normal' ? 0 : i * 0.3) > 0
                        ? `hsl(${w}, ${L}%, ${N}%)`
                        : 'white'
                  return e.jsx(
                    'span',
                    {
                      style: {
                        opacity: u === ' ' ? 0 : 1,
                        color: f
                          ? `rgba(0, 0, 0, ${i})`
                          : j && t !== 'typewriter'
                            ? `rgba(150, 150, 150, ${i})`
                            : S,
                        backgroundColor: f ? `rgba(255, 255, 255, ${i})` : 'transparent',
                        padding: f ? '0 1px' : '0',
                        transition: 'none',
                      },
                      children: u,
                    },
                    o
                  )
                }),
              },
              l
            )
          ),
        }),
      ],
    }),
  })
}
function pe({
  effect: t,
  label: a,
  description: d,
  keyframes: s = [0, 60, 120, 180, 240, 300],
  index: m,
}) {
  return e.jsx(c.div, {
    className: b.panel,
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { ...b.animation.easeOut, delay: m * 0.02 },
    children: e.jsxs('div', {
      className: 'p-2',
      children: [
        e.jsxs('div', {
          className: 'flex items-center justify-between mb-2',
          children: [
            e.jsx('h3', { className: 'text-white text-xs font-medium', children: a }),
            e.jsx('p', { className: 'text-[#666] text-[10px]', children: d }),
          ],
        }),
        e.jsxs('div', {
          className: 'flex gap-3 items-center',
          children: [
            e.jsxs('div', {
              className: 'flex-shrink-0',
              children: [
                e.jsx('div', { className: 'text-[10px] text-[#666] mb-1', children: 'Live' }),
                e.jsx('div', {
                  className: 'p-1.5 bg-[#050505] border border-[#222] rounded',
                  children: e.jsx(q, { effect: t }),
                }),
              ],
            }),
            e.jsx('div', {
              className: 'flex gap-1.5 overflow-x-auto',
              children: s.map((h) =>
                e.jsxs(
                  'div',
                  {
                    className: 'flex-shrink-0',
                    children: [
                      e.jsx('div', {
                        className: 'text-center text-[9px] font-mono text-[#555]',
                        children: h,
                      }),
                      e.jsx('div', {
                        className: 'p-1 bg-[#050505] border border-[#222] rounded',
                        children: e.jsx(q, { effect: t, forceFrame: h }),
                      }),
                    ],
                  },
                  h
                )
              ),
            }),
          ],
        }),
      ],
    }),
  })
}
function ue({ keyframes: t, onCopyUrl: a }) {
  return e.jsx(c.div, {
    className: 'fixed top-4 right-4 z-40',
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    transition: b.animation.easeOut,
    children: e.jsx('div', {
      className: `${b.panel} p-1`,
      children: e.jsx('div', {
        className: 'flex items-center',
        children: e.jsx('button', {
          onClick: a,
          className: `${b.button.base} ${b.button.inactive}`,
          children: e.jsxs('span', {
            className: b.text.key,
            children: ['?keyframes=', t.join(',')],
          }),
        }),
      }),
    }),
  })
}
function xe() {
  const t = U(),
    [a, d] = x.useState([])
  x.useEffect(() => {
    const r = t.get('keyframes')
    if (r) {
      const p = r
        .split(',')
        .map((i) => parseInt(i))
        .filter((i) => !isNaN(i))
      p.length > 0 && d(p)
    }
  }, [t])
  const s = [
      { id: 'normal', label: 'Normal', description: 'Clean white ASCII text - baseline' },
      {
        id: 'rainbow',
        label: 'Rainbow Wave',
        description: 'Animated HSL gradient with wave distortion',
      },
      {
        id: 'typewriter',
        label: 'Typewriter Glow',
        description: 'Progressive reveal with cursor glow',
      },
      { id: 'blocks', label: 'Morphing Wave', description: 'Smooth sine wave block transitions' },
      { id: 'ascii-rain', label: 'Matrix Fall', description: 'Cascading character waterfall' },
      { id: 'corruption', label: 'Glitch Pulse', description: 'Pulsing corruption intensity' },
      { id: 'scan-lines', label: 'CRT Scanner', description: 'Realistic CRT scan with decay' },
      { id: 'pixel-sort', label: 'Data Mosh', description: 'Dynamic threshold pixel sorting' },
      {
        id: 'single-invert',
        label: 'Invert Highlight',
        description: 'High contrast character inversion',
      },
    ],
    m = [
      { label: 'Default', props: {} },
      { label: 'No Hover Color', props: { enableColorOnHover: !1 } },
      { label: 'Glitch Colors', props: { enableColorOnGlitch: !0 } },
      { label: 'Low Saturation', props: { baseSaturation: 30 } },
      { label: 'High Saturation', props: { baseSaturation: 100 } },
      { label: 'Half Intensity', props: { colorIntensity: 0.5 } },
    ],
    h = a.length > 0 ? a : [0, 60, 120, 180, 240],
    k = () => {
      const r = `${window.location.origin}/demos/logo-effects?keyframes=${h.join(',')}`
      navigator.clipboard.writeText(r)
    }
  return e.jsxs('div', {
    className: 'min-h-screen bg-[#000]',
    children: [
      e.jsx(ue, { keyframes: h, onCopyUrl: k }),
      e.jsx('div', {
        className: 'pt-12 p-4',
        children: e.jsxs('div', {
          className: 'max-w-[1200px] mx-auto',
          children: [
            e.jsxs(c.div, {
              className: 'mb-4',
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.15 },
              children: [
                e.jsx('h2', {
                  className: 'text-white text-xs mb-2 opacity-60',
                  children: 'Color Options',
                }),
                e.jsx('div', {
                  className: 'grid grid-cols-3 md:grid-cols-6 gap-2',
                  children: m.map((r, p) =>
                    e.jsx(
                      c.div,
                      {
                        className: b.panel,
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { ...b.animation.easeOut, delay: p * 0.02 },
                        children: e.jsxs('div', {
                          className: 'p-2',
                          children: [
                            e.jsx('div', {
                              className: 'mb-1',
                              children: e.jsx('h3', {
                                className: 'text-white text-[10px]',
                                children: r.label,
                              }),
                            }),
                            e.jsx('div', {
                              className: 'p-1 bg-[#050505] border border-[#222] rounded',
                              children: e.jsx(Y, { ...r.props }),
                            }),
                          ],
                        }),
                      },
                      r.label
                    )
                  ),
                }),
              ],
            }),
            e.jsx('h2', {
              className: 'text-white text-xs mb-2 opacity-60',
              children: 'Glitch Effects',
            }),
            e.jsx('div', {
              className: 'grid grid-cols-1 lg:grid-cols-2 gap-2',
              children: s.map((r, p) =>
                e.jsx(
                  pe,
                  {
                    effect: r.id,
                    label: r.label,
                    description: r.description,
                    keyframes: [0, 60, 120, 180, 240],
                    index: p,
                  },
                  r.id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  })
}
const E = X.memo(({ children: t, className: a, variant: d = 'neural', ...s }) => {
  const m = {
    neural: e.jsx(te, {}),
    coderain: e.jsx(ae, {}),
    atoms: e.jsx(se, {}),
    dataflow: e.jsx(ne, {}),
    waveform: e.jsx(re, {}),
    glitch: e.jsx(ie, {}),
    particle: e.jsx(oe, {}),
  }
  return e.jsxs('div', {
    className: ee('relative overflow-hidden', a),
    ...s,
    children: [
      e.jsx('div', { className: 'absolute inset-0 bg-black' }),
      m[d],
      e.jsx('div', {
        className:
          'absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none',
      }),
      e.jsx('div', { className: 'relative z-10', children: t }),
    ],
  })
})
E.displayName = 'WarpBackgroundAlternatives'
try {
  ;((E.displayName = 'WarpBackgroundAlternatives'),
    (E.__docgenInfo = {
      description: '',
      displayName: 'WarpBackgroundAlternatives',
      props: {
        variant: {
          defaultValue: null,
          description: '',
          name: 'variant',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"neural"' },
              { value: '"coderain"' },
              { value: '"atoms"' },
              { value: '"dataflow"' },
              { value: '"waveform"' },
              { value: '"glitch"' },
              { value: '"particle"' },
            ],
          },
        },
      },
    }))
} catch {}
const B = [
    { id: 'neural', name: 'Neural', variant: 'neural', key: '1' },
    { id: 'particle', name: 'Particle', variant: 'particle', key: '2' },
    { id: 'glitch', name: 'Glitch', variant: 'glitch', key: '3' },
    { id: 'waveform', name: 'Wave', variant: 'waveform', key: '4' },
    { id: 'dataflow', name: 'Data', variant: 'dataflow', key: '5' },
    { id: 'coderain', name: 'Matrix', variant: 'coderain', key: '6' },
    { id: 'atoms', name: 'Atoms', variant: 'atoms', key: '7' },
    { id: 'original', name: 'Warp', key: '8', isOriginal: !0 },
  ],
  g = {
    panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
    button: {
      base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150 flex items-center gap-1.5',
      active: 'bg-[#fafafa] text-[#000]',
      inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
    },
    text: {
      label: 'text-[#666] text-[11px]',
      value: 'text-[#fafafa] font-mono text-[11px]',
      key: 'font-mono text-[11px] opacity-50',
    },
    animation: { easeOut: { duration: 0.15 } },
  }
function he({ backgrounds: t, selected: a, onSelect: d }) {
  return e.jsx(c.div, {
    className: 'fixed top-4 left-4 z-50',
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: g.animation.easeOut,
    children: e.jsx('div', {
      className: `${g.panel} p-1`,
      children: e.jsx('div', {
        className: 'flex items-center gap-1',
        children: t.map((s) =>
          e.jsxs(
            'button',
            {
              onClick: () => d(s.id, s.key),
              className: `
                ${g.button.base}
                ${a === s.id ? g.button.active : g.button.inactive}
              `,
              children: [
                e.jsx('span', { className: g.text.key, children: s.key }),
                e.jsx('span', { children: s.name }),
              ],
            },
            s.id
          )
        ),
      }),
    }),
  })
}
function fe({ variant: t }) {
  return e.jsx(c.div, {
    className: 'fixed top-4 right-4 z-40',
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    transition: g.animation.easeOut,
    children: e.jsx('div', {
      className: `${g.panel} px-3 py-2 bg-[#0a0a0a]/90 backdrop-blur-sm`,
      children: e.jsxs('div', {
        className: 'flex items-center gap-4',
        children: [
          e.jsx(K, { label: 'Variant', value: t }),
          e.jsx(K, { label: 'Type', value: 'WebGL' }),
        ],
      }),
    }),
  })
}
function K({ label: t, value: a }) {
  return e.jsxs('div', {
    className: 'flex items-center gap-1.5',
    children: [
      e.jsxs('span', { className: g.text.label, children: [t, ':'] }),
      e.jsx('span', { className: g.text.value, children: a }),
    ],
  })
}
function ge() {
  const a = U().get('bg'),
    d = (a && B.find((r) => r.key === a)?.id) || 'neural',
    [s, m] = x.useState(d)
  ;(x.useEffect(() => {
    if (a) {
      const r = B.find((p) => p.key === a)
      r && m(r.id)
    }
  }, [a]),
    x.useEffect(() => {
      const r = (p) => {
        const i = B.find((I) => I.key === p.key)
        i && (m(i.id), window.history.pushState(null, '', `?bg=${i.key}`))
      }
      return (
        window.addEventListener('keypress', r),
        () => window.removeEventListener('keypress', r)
      )
    }, []))
  const h = (r, p) => {
      ;(m(r), window.history.pushState(null, '', `?bg=${p}`))
    },
    k = B.find((r) => r.id === s)
  return e.jsxs('div', {
    className: 'min-h-screen bg-black relative overflow-hidden',
    children: [
      e.jsx(he, { backgrounds: B, selected: s, onSelect: h }),
      e.jsx(fe, { variant: s }),
      e.jsx('div', {
        className: 'absolute inset-0',
        children: k?.isOriginal
          ? e.jsx(Z, { className: 'min-h-screen' })
          : e.jsx(E, { variant: k?.variant || 'neural', className: 'min-h-screen' }),
      }),
    ],
  })
}
function ve() {
  return e.jsx(x.Suspense, {
    fallback: e.jsx('div', {
      className: 'min-h-screen bg-black flex items-center justify-center',
      children: e.jsx('div', { className: g.text.label, children: 'Loading...' }),
    }),
    children: e.jsx(ge, {}),
  })
}
function T({
  title: t = { line1: 'I ship AI products', line2: 'at massive scale.' },
  subtitle:
    a = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
  primaryCTA: d = { text: 'See My Work', href: '#projects' },
  secondaryCTA: s = { text: 'Get in Touch', href: '/contact' },
}) {
  return e.jsx('section', {
    className: 'relative min-h-screen bg-black text-white overflow-hidden',
    children: e.jsxs(E, {
      variant: 'neural',
      className: 'absolute inset-0',
      children: [
        e.jsx('div', {
          className: 'relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8',
          children: e.jsx('div', {
            className: 'relative z-10 max-w-3xl mx-auto text-center',
            children: e.jsxs(c.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              className: 'space-y-8',
              children: [
                e.jsx(c.div, {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.2, duration: 0.8 },
                  className: 'mb-12',
                  children: e.jsx('span', {
                    className: 'text-sm font-light tracking-[0.3em] text-white/60 uppercase',
                    children: 'Newth.AI',
                  }),
                }),
                e.jsxs('h1', {
                  className:
                    'text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extralight tracking-tight leading-[1.05] text-white',
                  children: [
                    e.jsx(c.span, {
                      className: 'block',
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.4, duration: 0.8 },
                      children: t.line1,
                    }),
                    e.jsx(c.span, {
                      className:
                        'block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-light',
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.6, duration: 0.8 },
                      children: t.line2,
                    }),
                  ],
                }),
                e.jsx(c.p, {
                  className: 'mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed',
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.8, duration: 1 },
                  children: a,
                }),
                e.jsxs(c.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1 },
                  className: 'flex flex-col sm:flex-row gap-4 justify-center items-center pt-8',
                  children: [
                    e.jsxs(W, {
                      href: d.href,
                      className:
                        'group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]',
                      children: [
                        e.jsxs('span', {
                          className: 'relative z-10 flex items-center',
                          children: [
                            d.text,
                            e.jsx(le, {
                              className:
                                'ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1',
                            }),
                          ],
                        }),
                        e.jsx('div', {
                          className:
                            'absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                        }),
                      ],
                    }),
                    e.jsx(W, {
                      href: s.href,
                      className:
                        'px-10 py-4 rounded-full text-sm font-medium text-white/80 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white',
                      children: s.text,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        e.jsx(c.div, {
          className: 'absolute bottom-12 left-1/2 transform -translate-x-1/2',
          animate: { y: [0, 10, 0] },
          transition: { duration: 2.5, repeat: 1 / 0, ease: 'easeInOut' },
          children: e.jsx(ce, { className: 'w-6 h-6 text-white/30' }),
        }),
        e.jsx(c.nav, {
          className: 'absolute top-8 right-8 flex gap-3',
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 1.2, duration: 0.8 },
          children: ['Projects', 'Work', 'GitHub'].map((m) =>
            e.jsx(
              W,
              {
                href: m === 'GitHub' ? 'https://github.com' : `#${m.toLowerCase()}`,
                className:
                  'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-150',
                title: m,
              },
              m
            )
          ),
        }),
      ],
    }),
  })
}
try {
  ;((T.displayName = 'HeroSectionNoHeader'),
    (T.__docgenInfo = {
      description: '',
      displayName: 'HeroSectionNoHeader',
      props: {
        title: {
          defaultValue: {
            value: `{
    line1: 'I ship AI products',
    line2: 'at massive scale.',
  }`,
          },
          description: '',
          name: 'title',
          required: !1,
          type: { name: '{ line1: string; line2: string; }' },
        },
        subtitle: {
          defaultValue: {
            value:
              'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
          },
          description: '',
          name: 'subtitle',
          required: !1,
          type: { name: 'string' },
        },
        primaryCTA: {
          defaultValue: {
            value: `{
    text: 'See My Work',
    href: '#projects',
  }`,
          },
          description: '',
          name: 'primaryCTA',
          required: !1,
          type: { name: '{ text: string; href: string; }' },
        },
        secondaryCTA: {
          defaultValue: {
            value: `{
    text: 'Get in Touch',
    href: '/contact',
  }`,
          },
          description: '',
          name: 'secondaryCTA',
          required: !1,
          type: { name: '{ text: string; href: string; }' },
        },
      },
    }))
} catch {}
function be() {
  return e.jsx(T, {})
}
const _e = { title: 'Examples/Pages/Demos', parameters: { layout: 'fullscreen' } },
  D = {
    render: () => e.jsx(de, {}),
    parameters: { docs: { description: { story: 'Demo index page showing all available demos' } } },
  },
  O = {
    render: () => e.jsx(xe, {}),
    parameters: {
      docs: {
        description: { story: 'Logo animation effects with ASCII art and keyframe testing' },
      },
    },
  },
  P = {
    render: () => e.jsx(ve, {}),
    parameters: {
      docs: { description: { story: 'All background effects showcase with live switching' } },
    },
  },
  _ = {
    render: () => e.jsx(be, {}),
    parameters: { docs: { description: { story: 'Hero section without navigation header' } } },
  }
D.parameters = {
  ...D.parameters,
  docs: {
    ...D.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <DemosIndex />,
  parameters: {
    docs: {
      description: {
        story: 'Demo index page showing all available demos'
      }
    }
  }
}`,
      ...D.parameters?.docs?.source,
    },
  },
}
O.parameters = {
  ...O.parameters,
  docs: {
    ...O.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <LogoEffectsPage />,
  parameters: {
    docs: {
      description: {
        story: 'Logo animation effects with ASCII art and keyframe testing'
      }
    }
  }
}`,
      ...O.parameters?.docs?.source,
    },
  },
}
P.parameters = {
  ...P.parameters,
  docs: {
    ...P.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <BackgroundsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'All background effects showcase with live switching'
      }
    }
  }
}`,
      ...P.parameters?.docs?.source,
    },
  },
}
_.parameters = {
  ..._.parameters,
  docs: {
    ..._.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <HeroNoHeader />,
  parameters: {
    docs: {
      description: {
        story: 'Hero section without navigation header'
      }
    }
  }
}`,
      ..._.parameters?.docs?.source,
    },
  },
}
const We = ['DemoIndex', 'LogoEffects', 'BackgroundEffects', 'HeroStandalone']
export {
  P as BackgroundEffects,
  D as DemoIndex,
  _ as HeroStandalone,
  O as LogoEffects,
  We as __namedExportsOrder,
  _e as default,
}
