import { R as p, r as u, j as t } from './iframe-D02P5oxD.js'
import { m as n } from './proxy-BHIPz7UP.js'
const i = p.memo(({ className: l }) => {
  const d = u.useMemo(() => {
    const s = []
    for (let e = 0; e < 5; e++)
      s.push({
        id: e,
        amplitude: 60 + e * 20,
        frequency: 0.01 + e * 0.003,
        speed: 15 + e * 3,
        yOffset: 50,
        opacity: 0.15 - e * 0.02,
        gradient: e,
      })
    return s
  }, [])
  return t.jsxs('div', {
    className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 ${l || ''}`,
    children: [
      t.jsxs('div', {
        className: 'absolute inset-0',
        children: [
          t.jsx('div', {
            className: 'absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl',
          }),
          t.jsx('div', {
            className:
              'absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl',
          }),
          t.jsx('div', {
            className:
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl',
          }),
        ],
      }),
      t.jsxs('svg', {
        className: 'absolute inset-0 w-full h-full',
        children: [
          t.jsxs('defs', {
            children: [
              t.jsxs('linearGradient', {
                id: 'waveGradient1',
                x1: '0%',
                y1: '0%',
                x2: '100%',
                y2: '0%',
                children: [
                  t.jsx('stop', { offset: '0%', stopColor: '#818CF8', stopOpacity: '0' }),
                  t.jsx('stop', { offset: '20%', stopColor: '#818CF8', stopOpacity: '0.8' }),
                  t.jsx('stop', { offset: '50%', stopColor: '#F472B6', stopOpacity: '1' }),
                  t.jsx('stop', { offset: '80%', stopColor: '#06B6D4', stopOpacity: '0.8' }),
                  t.jsx('stop', { offset: '100%', stopColor: '#06B6D4', stopOpacity: '0' }),
                ],
              }),
              t.jsxs('linearGradient', {
                id: 'waveGradient2',
                x1: '0%',
                y1: '0%',
                x2: '100%',
                y2: '0%',
                children: [
                  t.jsx('stop', { offset: '0%', stopColor: '#F472B6', stopOpacity: '0' }),
                  t.jsx('stop', { offset: '50%', stopColor: '#818CF8', stopOpacity: '1' }),
                  t.jsx('stop', { offset: '100%', stopColor: '#F472B6', stopOpacity: '0' }),
                ],
              }),
              t.jsxs('filter', {
                id: 'glow',
                children: [
                  t.jsx('feGaussianBlur', { stdDeviation: '4', result: 'coloredBlur' }),
                  t.jsxs('feMerge', {
                    children: [
                      t.jsx('feMergeNode', { in: 'coloredBlur' }),
                      t.jsx('feMergeNode', { in: 'SourceGraphic' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.map((s, e) =>
            t.jsx(
              n.path,
              {
                stroke: `url(#waveGradient${(e % 2) + 1})`,
                strokeWidth: '3',
                fill: 'none',
                filter: 'url(#glow)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                initial: { pathLength: 0, opacity: 0 },
                animate: { pathLength: 1, opacity: s.opacity },
                transition: {
                  pathLength: { duration: 2, ease: 'easeOut' },
                  opacity: { duration: 1 },
                },
                d: (() => {
                  const o = []
                  for (let a = 0; a <= 100; a += 1) {
                    const r = s.yOffset + Math.sin(a * s.frequency * Math.PI) * s.amplitude * 0.3
                    o.push(`${a},${r}`)
                  }
                  return `M ${o.join(' L ')}`
                })(),
                children: t.jsx('animate', {
                  attributeName: 'd',
                  values: [
                    (() => {
                      const o = []
                      for (let a = 0; a <= 100; a += 1) {
                        const r =
                          s.yOffset + Math.sin(a * s.frequency * Math.PI) * s.amplitude * 0.3
                        o.push(`${a},${r}`)
                      }
                      return `M ${o.join(' L ')}`
                    })(),
                    (() => {
                      const o = []
                      for (let a = 0; a <= 100; a += 1) {
                        const r =
                          s.yOffset +
                          Math.sin((a + 100) * s.frequency * Math.PI) * s.amplitude * 0.3
                        o.push(`${a},${r}`)
                      }
                      return `M ${o.join(' L ')}`
                    })(),
                  ].join(';'),
                  dur: `${s.speed}s`,
                  repeatCount: 'indefinite',
                }),
              },
              s.id
            )
          ),
        ],
      }),
      [...Array(30)].map((s, e) =>
        t.jsx(
          n.div,
          {
            className: 'absolute',
            style: { left: `${e * 3.3 + 2}%`, top: '50%' },
            animate: {
              y: [0, -Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, Math.random() + 0.5, 0],
            },
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: 1 / 0,
              delay: e * 0.1,
              ease: 'easeInOut',
            },
            children: t.jsx('div', {
              className: 'w-1 h-1 rounded-full',
              style: {
                background: `radial-gradient(circle, ${['#818CF8', '#F472B6', '#06B6D4'][e % 3]} 0%, transparent 70%)`,
                boxShadow: `0 0 20px ${['#818CF8', '#F472B6', '#06B6D4'][e % 3]}`,
              },
            }),
          },
          `dot-${e}`
        )
      ),
      t.jsx('div', {
        className: 'absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4',
        children: [...Array(60)].map((s, e) =>
          t.jsx(
            n.div,
            {
              className: 'flex-1 max-w-[8px] rounded-t-sm',
              style: {
                background: 'linear-gradient(to top, #F472B6, #818CF8, #06B6D4)',
                opacity: 0.7,
              },
              animate: {
                height: [
                  `${Math.random() * 20 + 5}%`,
                  `${Math.random() * 40 + 10}%`,
                  `${Math.random() * 30 + 5}%`,
                ],
              },
              transition: {
                duration: 0.5 + Math.random() * 0.5,
                repeat: 1 / 0,
                ease: 'easeInOut',
                delay: e * 0.02,
              },
            },
            `bar-${e}`
          )
        ),
      }),
      [...Array(3)].map((s, e) =>
        t.jsx(
          n.div,
          {
            className:
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2',
            style: {
              borderColor: ['#818CF8', '#F472B6', '#06B6D4'][e],
              width: '100px',
              height: '100px',
            },
            animate: { scale: [1, 8, 8], opacity: [0.8, 0, 0] },
            transition: { duration: 3, repeat: 1 / 0, delay: e * 1, ease: 'easeOut' },
          },
          `ring-${e}`
        )
      ),
    ],
  })
})
i.displayName = 'WaveformBackground'
try {
  ;((i.displayName = 'WaveformBackground'),
    (i.__docgenInfo = {
      description: '',
      displayName: 'WaveformBackground',
      props: {
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
      },
    }))
} catch {}
export { i as W }
