import { R as d, r as u, j as i } from './iframe-D02P5oxD.js'
import { m as l } from './proxy-BHIPz7UP.js'
function s(n) {
  const r = Math.sin(n) * 1e4
  return r - Math.floor(r)
}
const c = d.memo(({ className: n }) => {
  const r = u.useMemo(() => {
      const t = [],
        e = ['#00D9FF', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#7B68EE']
      for (let a = 0; a < 25; a++) {
        const o = s(a * 1.1)
        t.push({
          id: a,
          x: s(a * 2.3) * 100,
          y: s(a * 3.7) * 100,
          color: e[Math.floor(s(a * 5.2) * e.length)],
          size: (4 + s(a * 7.1) * 8) * (0.5 + o * 0.5),
          delay: s(a * 11.3) * 2,
          depth: o,
          opacity: 0.3 + o * 0.7,
          animationDuration: 4 + s(a * 13.5) * 4,
          pulseScale: 1.2 + s(a * 17.7) * 0.5,
        })
      }
      return t.sort((a, o) => a.depth - o.depth)
    }, []),
    y = u.useMemo(() => {
      const t = []
      for (let e = 0; e < r.length; e++) {
        const a = 1 + Math.floor(s(e * 19.1) * 2)
        for (let o = 0; o < a; o++) {
          const p = Math.floor(s(e * 23.3 + o * 29.7) * r.length)
          p !== e &&
            t.push({
              from: r[e],
              to: r[p],
              opacity: Math.min(r[e].opacity, r[p].opacity) * 0.5,
              delay: s(e * 31.2 + o * 37.5) * 3,
            })
        }
      }
      return t
    }, [r])
  return i.jsxs('div', {
    className: `absolute inset-0 overflow-hidden ${n || ''}`,
    children: [
      i.jsx('svg', {
        className: 'absolute inset-0 w-full h-full',
        children: y.map((t, e) =>
          i.jsx(
            l.line,
            {
              x1: `${t.from.x}%`,
              y1: `${t.from.y}%`,
              x2: `${t.to.x}%`,
              y2: `${t.to.y}%`,
              stroke: t.from.color,
              strokeWidth: t.from.depth * 2,
              strokeOpacity: t.opacity,
              initial: { pathLength: 0 },
              animate: { pathLength: [0, 1, 1, 0], opacity: [0, t.opacity, t.opacity, 0] },
              transition: { duration: 4, repeat: 1 / 0, delay: t.delay, ease: 'easeInOut' },
            },
            `line-${e}`
          )
        ),
      }),
      r.map((t) =>
        i.jsxs(
          l.div,
          {
            className: 'absolute',
            style: { left: `${t.x}%`, top: `${t.y}%`, zIndex: Math.floor(t.depth * 10) },
            initial: { scale: 0, x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200 },
            animate: {
              scale: [1, t.pulseScale, 1],
              x: [0, (Math.random() - 0.5) * 20, 0],
              y: [0, (Math.random() - 0.5) * 20, 0],
            },
            transition: {
              scale: { duration: t.animationDuration, repeat: 1 / 0, ease: 'easeInOut' },
              x: {
                duration: t.animationDuration * 2,
                repeat: 1 / 0,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
              y: {
                duration: t.animationDuration * 2,
                repeat: 1 / 0,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 0.5,
              },
              default: { duration: 1, delay: t.delay },
            },
            children: [
              i.jsx(l.div, {
                className: 'absolute rounded-full blur-xl',
                style: {
                  width: `${t.size * 6}px`,
                  height: `${t.size * 6}px`,
                  backgroundColor: t.color,
                  opacity: t.opacity * 0.3,
                  transform: 'translate(-50%, -50%)',
                },
                animate: {
                  scale: [1, 1.5, 1],
                  opacity: [t.opacity * 0.3, t.opacity * 0.5, t.opacity * 0.3],
                },
                transition: { duration: 3, repeat: 1 / 0, ease: 'easeInOut', delay: t.delay },
              }),
              i.jsx('div', {
                className: 'absolute rounded-full blur-md',
                style: {
                  width: `${t.size * 3}px`,
                  height: `${t.size * 3}px`,
                  backgroundColor: t.color,
                  opacity: t.opacity * 0.5,
                  transform: 'translate(-50%, -50%)',
                },
              }),
              i.jsx(l.div, {
                className: 'absolute rounded-full',
                style: {
                  width: `${t.size}px`,
                  height: `${t.size}px`,
                  backgroundColor: t.color,
                  boxShadow: `0 0 ${20 * t.depth}px ${t.color}`,
                  transform: 'translate(-50%, -50%)',
                  opacity: t.opacity,
                  border: `${t.depth}px solid rgba(255,255,255,${0.2 + t.depth * 0.3})`,
                },
                animate: {
                  boxShadow: [
                    `0 0 ${20 * t.depth}px ${t.color}`,
                    `0 0 ${40 * t.depth}px ${t.color}`,
                    `0 0 ${20 * t.depth}px ${t.color}`,
                  ],
                },
                transition: { duration: 2, repeat: 1 / 0, ease: 'easeInOut', delay: t.delay * 0.5 },
              }),
            ],
          },
          t.id
        )
      ),
      [...Array(15)].map((t, e) => {
        const a = r[e % r.length],
          o = r[(e + 5) % r.length]
        return i.jsx(
          l.div,
          {
            className: 'absolute w-2 h-2 rounded-full',
            style: { backgroundColor: a.color, boxShadow: `0 0 8px ${a.color}`, zIndex: 15 },
            animate: {
              left: [`${a.x}%`, `${o.x}%`],
              top: [`${a.y}%`, `${o.y}%`],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5],
            },
            transition: {
              duration: 3 + Math.random() * 2,
              repeat: 1 / 0,
              delay: e * 0.4,
              ease: 'easeInOut',
            },
          },
          `particle-${e}`
        )
      }),
    ],
  })
})
c.displayName = 'NeuralNetworkBackground'
try {
  ;((c.displayName = 'NeuralNetworkBackground'),
    (c.__docgenInfo = {
      description: '',
      displayName: 'NeuralNetworkBackground',
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
export { c as N }
