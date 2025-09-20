import { r as l, j as f } from './iframe-D02P5oxD.js'
import { _ as X } from './style-CizCTe6A.js'
import { m as N } from './proxy-BHIPz7UP.js'
function F({
  enableColorOnHover: G = !0,
  enableColorOnGlitch: L = !1,
  baseSaturation: D = 85,
  colorIntensity: O = 1,
} = {}) {
  const [a, J] = l.useState(0),
    [i, _] = l.useState('normal'),
    [, W] = l.useState([]),
    [x, T] = l.useState(!1),
    [A, E] = l.useState(-1),
    [r, j] = l.useState(0),
    H = l.useRef(Date.now()),
    M = l.useRef(0),
    R = l.useRef(0),
    q = l.useRef(Date.now()),
    p = l.useRef(0),
    C = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █'],
    $ = ['  ▄▀█ █', '  █▀█ █', '°'],
    V = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫'],
    y = {
      dots: ['•', '◦', '◉', '○', '◌', '◍', '◎', '●'],
      angles: ['◢', '◣', '◤', '◥', '◸', '◹', '◺', '◿'],
      shades: ['░', '▒', '▓', '█'],
      bars: [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
    }
  ;(l.useEffect(() => {
    const n = [...C.join('').split(''), ...$.join('').split('')].map((c) => ({
      char: c,
      visible: !0,
      variant: 0,
    }))
    W(n)
  }, []),
    l.useEffect(() => {
      const t = setInterval(() => {
        const c = Date.now() - R.current
        if (i !== 'normal' && M.current > 0) {
          const e = c / M.current
          if (e < 0.2) {
            const s = (e / 0.2) ** 2
            j(s * p.current)
          } else if (e < 0.8) j(p.current)
          else if (e < 1) {
            const s = 1 - ((e - 0.8) / 0.2) ** 2
            j(s * p.current)
          } else j(0)
        } else j(x ? (e) => Math.min(1, e + 0.05) : (e) => Math.max(0, e - 0.05))
      }, 20)
      return () => clearInterval(t)
    }, [i, x]),
    l.useEffect(() => {
      const t = Date.now(),
        n = [
          'typewriter',
          'blocks',
          'ascii-rain',
          'corruption',
          'scan-lines',
          'pixel-sort',
          'single-invert',
        ]
      let c = -1
      const s = setInterval(() => {
        const o = Date.now(),
          u = o - t,
          d = o - H.current
        if (u < 5e3) return
        if (x) {
          ;(_('normal'), E(-1), (p.current = 0))
          return
        }
        if (o - q.current > 3e3 && d > 5e3 && Math.random() < 0.03) {
          const v = n.filter((h, b) => b !== c),
            w = Math.floor(Math.random() * v.length),
            g = v[w]
          switch (((c = n.indexOf(g)), _(g), (H.current = o), (R.current = o), g)) {
            case 'typewriter':
            case 'blocks':
              ;((p.current = 0.8 + Math.random() * 0.2), (M.current = 1200 + Math.random() * 600))
              break
            case 'corruption':
            case 'pixel-sort':
              ;((p.current = 0.3 + Math.random() * 0.4), (M.current = 600 + Math.random() * 600))
              break
            case 'single-invert':
              const h = C.join('').length + $.join('').length,
                b = Math.floor(Math.random() * h)
              ;(E(b), (p.current = 1), (M.current = 1500 + Math.random() * 1500))
              break
            default:
              ;((p.current = 0.5 + Math.random() * 0.5), (M.current = 900 + Math.random() * 600))
          }
          setTimeout(() => {
            ;(_('normal'), E(-1), (p.current = 0), (q.current = Date.now()))
          }, M.current)
        }
      }, 50)
      return () => clearInterval(s)
    }, [x]),
    l.useEffect(() => {
      const t = setInterval(() => {
        J((n) => n + 1)
      }, 20)
      return () => clearInterval(t)
    }, []))
  const P = (t, n, c, e = !1) => {
    if (t === ' ' || r < 0.01) return t
    const s = e ? n + 24 : n,
      o = e ? c + 3 : c
    switch (i) {
      case 'typewriter':
        const u = C.join('').length + $.join('').length,
          d = (a * 2 * r) % (u + 20),
          S = Math.abs(s + o * 25 - d)
        return s + o * 25 > d
          ? Math.random() < r
            ? '░'
            : t
          : S < 3
            ? t === ' '
              ? t
              : Math.random() < r
                ? '▓'
                : t
            : t
      case 'blocks':
        if (Math.random() < r) {
          const m = Math.sin(a * 0.05 + s * 0.3) * 0.5 + 0.5,
            I = Math.floor(m * V.length * r)
          return t !== ' ' && t !== '°' ? V[I] : t
        }
        return t
      case 'ascii-rain':
        const v = 0.1 * r,
          w = (a * v + s * 2) % 20
        if (Math.random() < r * 0.3) {
          if (w < y.bars.length) return y.bars[Math.floor(w)]
          if (w < y.bars.length + 2) return '░'
        }
        return t
      case 'corruption':
        if (Math.random() < r * 0.15) {
          const m = [...y.dots, ...y.angles, '▲', '▼', '◀', '▶']
          return m[Math.floor(Math.random() * m.length)]
        }
        return t
      case 'scan-lines':
        const g = (a / 2) % 10,
          h = Math.exp(-Math.abs(o * 3 - g)) * r
        return h > 0.3 ? (t === ' ' ? t : '▬') : h > 0.1 ? (t === ' ' ? t : '═') : t
      case 'pixel-sort':
        const b = Math.sin(a * 0.1 + o) * 0.5 + 0.5,
          k = Math.sin(a * 0.05) * 0.5 + 0.5
        if (Math.random() < k * r * 0.3 && s > b * 20) {
          const m = Math.floor((a * 0.2 + s) % y.shades.length)
          return y.shades[m]
        }
        return t
      default:
        return t
    }
  }
  return f.jsxs('div', {
    onMouseEnter: () => T(!0),
    onMouseLeave: () => T(!1),
    className: 'jsx-8b149244b4742c05 flex items-center',
    children: [
      f.jsxs('pre', {
        className:
          'jsx-8b149244b4742c05 font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1',
        children: [
          f.jsx('div', {
            className: 'jsx-8b149244b4742c05 relative',
            children: f.jsx('div', {
              className: 'jsx-8b149244b4742c05 relative',
              children: C.map((t, n) => {
                let c = 0
                for (let e = 0; e < n; e++) c += C[e].length
                return f.jsx(
                  N.div,
                  {
                    className: 'text-white',
                    style: {
                      filter:
                        i === 'scan-lines' && n === (a / 2) % 3
                          ? 'brightness(1.5) contrast(1.2)'
                          : i === 'corruption'
                            ? `hue-rotate(${Math.sin(a * 0.05) * 30}deg)`
                            : 'none',
                    },
                    children: t.split('').map((e, s) => {
                      const o = c + s,
                        u = i === 'single-invert' && o === A,
                        d = P(e, s, n),
                        S = d !== e,
                        v = Math.sin(a * 0.03 + n * 2) * 30,
                        g = (((s * 15 - a * 2 + v) % 360) + 360) % 360,
                        h = (G && x) || (L && i !== 'normal' && r > 0),
                        b = D + Math.sin(a * 0.05) * 10,
                        k = h ? b * O : 0,
                        m = 55 + Math.sin(a * 0.07 + s * 0.2) * 10,
                        I = h ? `hsl(${g}, ${k}%, ${m}%)` : 'currentColor'
                      return f.jsx(
                        N.span,
                        {
                          className: 'inline-block',
                          animate: {
                            y:
                              i === 'ascii-rain' && Math.random() < 0.1
                                ? [0, 2, 0]
                                : i === 'blocks'
                                  ? [0, Math.random() < 0.05 ? -1 : 0, 0]
                                  : 0,
                            scale: i === 'typewriter' && d === '░' ? [1, 0.8, 1] : 1,
                          },
                          transition: { duration: 0.1, ease: 'easeInOut' },
                          style: {
                            opacity: d === ' ' ? 0 : 1,
                            color: u
                              ? `rgba(0, 0, 0, ${r})`
                              : S && i !== 'typewriter'
                                ? `rgba(150, 150, 150, ${r})`
                                : I,
                            backgroundColor: u ? `rgba(255, 255, 255, ${r})` : 'transparent',
                            padding: u ? '0 1px' : '0',
                            textShadow: 'none',
                            filter: e === '█' || e === '▓' ? 'brightness(1.2)' : 'brightness(1)',
                            transition: 'none',
                          },
                          children: d,
                        },
                        s
                      )
                    }),
                  },
                  n
                )
              }),
            }),
          }),
          f.jsx('div', {
            className: 'jsx-8b149244b4742c05 text-gray-400 text-[8px] leading-[8px] -mt-0.5',
            children: $.map((t, n) =>
              f.jsx(
                N.div,
                {
                  animate: { opacity: i === 'typewriter' ? [(a * 2) % 100 > 80 ? 1 : 0.3] : 1 },
                  transition: { duration: 0.2 },
                  children: t.split('').map((c, e) => {
                    const s = C.join('').length + n * 8 + e,
                      o = i === 'single-invert' && s === A,
                      u = P(c, e, n, !0),
                      d = u !== c,
                      S = 24 + e,
                      v = Math.sin(a * 0.03 + n * 2) * 30,
                      g = (((S * 15 - a * 2 + v) % 360) + 360) % 360,
                      h = (G && x) || (L && i !== 'normal' && r > 0),
                      b = D + Math.sin(a * 0.05) * 10,
                      k = h ? b * O : 0,
                      m = 55 + Math.sin(a * 0.07 + e * 0.2) * 10,
                      I = h ? `hsl(${g}, ${k}%, ${m}%)` : 'currentColor'
                    return f.jsx(
                      'span',
                      {
                        style: {
                          opacity: u === ' ' ? 0 : 1,
                          color: o
                            ? `rgba(0, 0, 0, ${r})`
                            : d && i !== 'typewriter'
                              ? `rgba(150, 150, 150, ${r})`
                              : I,
                          backgroundColor: o ? `rgba(255, 255, 255, ${r})` : 'transparent',
                          padding: o ? '0 1px' : '0',
                          transition: 'none',
                        },
                        className: 'jsx-8b149244b4742c05',
                        children: u,
                      },
                      e
                    )
                  }),
                },
                n
              )
            ),
          }),
        ],
      }),
      f.jsx(X, {
        id: '8b149244b4742c05',
        children:
          '@keyframes gradientShift{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes dissolve{0%{opacity:1;filter:blur(0px)}50%{opacity:.5;filter:blur(3px)}100%{opacity:1;filter:blur(0px)}}',
      }),
    ],
  })
}
try {
  ;((F.displayName = 'AnimatedLogo'),
    (F.__docgenInfo = {
      description: `Renders an animated ASCII art logo with dynamic glitch effects and interactive coloring.
The component cycles through various visual distortions at random intervals and reveals
a vibrant rainbow animation on hover.`,
      displayName: 'AnimatedLogo',
      props: {
        enableColorOnHover: {
          defaultValue: { value: 'true' },
          description: 'If true, the logo displays a rainbow color effect on mouse hover.',
          name: 'enableColorOnHover',
          required: !1,
          type: { name: 'boolean' },
        },
        enableColorOnGlitch: {
          defaultValue: { value: 'false' },
          description: 'If true, the logo shows colors during random glitch animations.',
          name: 'enableColorOnGlitch',
          required: !1,
          type: { name: 'boolean' },
        },
        baseSaturation: {
          defaultValue: { value: '85' },
          description: 'The base saturation level (0-100) for the color effects.',
          name: 'baseSaturation',
          required: !1,
          type: { name: 'number' },
        },
        colorIntensity: {
          defaultValue: { value: '1' },
          description: 'A multiplier (0-1) to control the intensity of the applied colors.',
          name: 'colorIntensity',
          required: !1,
          type: { name: 'number' },
        },
      },
    }))
} catch {}
export { F as A }
