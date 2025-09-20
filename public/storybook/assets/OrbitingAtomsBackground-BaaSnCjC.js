import { R as i, r as d, j as t } from './iframe-D02P5oxD.js'
import { m as o } from './proxy-BHIPz7UP.js'
const n = i.memo(({ className: s }) => {
  const l = d.useMemo(() => {
    const a = [],
      e = ['#06B6D4', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']
    for (let r = 0; r < 8; r++)
      a.push({
        id: r,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        color: e[r % e.length],
        scale: 0.6 + Math.random() * 0.4,
        rotationSpeed: 10 + Math.random() * 20,
      })
    return a
  }, [])
  return t.jsxs('div', {
    className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 ${s || ''}`,
    children: [
      t.jsxs('div', {
        className: 'absolute inset-0',
        children: [
          t.jsx('div', {
            className: 'absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
          }),
          t.jsx('div', {
            className:
              'absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl',
          }),
        ],
      }),
      l.map((a) =>
        t.jsxs(
          'div',
          {
            className: 'absolute',
            style: {
              left: `${a.x}%`,
              top: `${a.y}%`,
              transform: `translate(-50%, -50%) scale(${a.scale})`,
            },
            children: [
              t.jsx(o.div, {
                className: 'absolute w-8 h-8',
                style: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
                animate: { rotate: 360 },
                transition: { duration: a.rotationSpeed, repeat: 1 / 0, ease: 'linear' },
                children: t.jsx('div', {
                  className: 'w-full h-full',
                  style: {
                    background: `linear-gradient(135deg, ${a.color}, ${a.color}66)`,
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    boxShadow: `0 0 30px ${a.color}`,
                  },
                }),
              }),
              [0, 120, 240].map((e, r) =>
                t.jsx(
                  o.div,
                  {
                    className: 'absolute',
                    style: {
                      width: '100px',
                      height: '100px',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    },
                    animate: { rotate: e + 360 },
                    transition: {
                      duration: a.rotationSpeed * 1.5,
                      repeat: 1 / 0,
                      ease: 'linear',
                      delay: r * 0.2,
                    },
                    children: t.jsx('div', {
                      className: 'absolute w-3 h-3',
                      style: {
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        borderRadius: r === 0 ? '50%' : r === 1 ? '0%' : '30%',
                        backgroundColor: a.color,
                        opacity: 0.8,
                        boxShadow: `0 0 15px ${a.color}`,
                      },
                    }),
                  },
                  r
                )
              ),
              t.jsx('div', {
                className: 'absolute border rounded-full opacity-20',
                style: {
                  width: '100px',
                  height: '100px',
                  borderColor: a.color,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                },
              }),
            ],
          },
          a.id
        )
      ),
      [...Array(20)].map((a, e) =>
        t.jsx(
          o.div,
          {
            className: 'absolute',
            style: { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` },
            animate: { y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 180, 360] },
            transition: {
              duration: 10 + Math.random() * 10,
              repeat: 1 / 0,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            },
            children: t.jsx('div', {
              className: 'w-2 h-2',
              style: {
                background: `linear-gradient(45deg, ${['#06B6D4', '#8B5CF6', '#EC4899'][e % 3]}, transparent)`,
                clipPath: e % 2 === 0 ? 'polygon(50% 0%, 100% 100%, 0% 100%)' : 'none',
                borderRadius: e % 2 === 0 ? '0' : '50%',
                opacity: 0.6,
              },
            }),
          },
          `particle-${e}`
        )
      ),
      t.jsx('svg', {
        className: 'absolute inset-0 w-full h-full opacity-10',
        children: l.slice(0, -1).map((a, e) => {
          const r = l[e + 1]
          return t.jsx(
            o.line,
            {
              x1: `${a.x}%`,
              y1: `${a.y}%`,
              x2: `${r.x}%`,
              y2: `${r.y}%`,
              stroke: a.color,
              strokeWidth: '1',
              strokeDasharray: '5 10',
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: {
                duration: 3,
                repeat: 1 / 0,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: e * 0.5,
              },
            },
            `connection-${e}`
          )
        }),
      }),
    ],
  })
})
n.displayName = 'OrbitingAtomsBackground'
try {
  ;((n.displayName = 'OrbitingAtomsBackground'),
    (n.__docgenInfo = {
      description: '',
      displayName: 'OrbitingAtomsBackground',
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
export { n as O }
