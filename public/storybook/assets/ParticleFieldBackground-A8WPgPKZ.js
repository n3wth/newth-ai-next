import { R as l, r as i, j as t } from './iframe-D02P5oxD.js'
import { m as o } from './proxy-BHIPz7UP.js'
const s = l.memo(({ className: n }) => {
  const d = i.useMemo(() => {
    const a = [],
      e = ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B']
    for (let r = 0; r < 80; r++)
      a.push({
        id: r,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        color: e[Math.floor(Math.random() * e.length)],
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        xOffset: Math.random() * 40 - 20,
        yOffset: Math.random() * 40 - 20,
      })
    return a
  }, [])
  return t.jsxs('div', {
    className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950/20 via-black to-purple-950/20 ${n || ''}`,
    children: [
      t.jsx('div', {
        className:
          'absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl',
      }),
      t.jsx('div', {
        className:
          'absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl',
      }),
      d.map((a) =>
        t.jsx(
          o.div,
          {
            className: 'absolute',
            style: { left: `${a.x}%`, top: `${a.y}%` },
            animate: { x: [0, a.xOffset, -a.xOffset, 0], y: [0, a.yOffset, -a.yOffset, 0] },
            transition: { duration: a.duration, repeat: 1 / 0, ease: 'easeInOut', delay: a.delay },
            children: t.jsxs(o.div, {
              className: 'relative',
              animate: { scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] },
              transition: { duration: 4, repeat: 1 / 0, ease: 'easeInOut', delay: a.delay },
              children: [
                t.jsx('div', {
                  className: 'absolute rounded-full blur-md',
                  style: {
                    width: `${a.size * 6}px`,
                    height: `${a.size * 6}px`,
                    backgroundColor: a.color,
                    opacity: 0.4,
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                  },
                }),
                t.jsx('div', {
                  className: 'relative rounded-full',
                  style: {
                    width: `${a.size}px`,
                    height: `${a.size}px`,
                    backgroundColor: a.color,
                    boxShadow: `0 0 ${a.size * 4}px ${a.color}`,
                  },
                }),
              ],
            }),
          },
          a.id
        )
      ),
      [...Array(30)].map((a, e) =>
        t.jsx(
          o.div,
          {
            className: 'absolute w-1 h-1 rounded-full',
            style: { backgroundColor: '#8B5CF6', boxShadow: '0 0 4px #8B5CF6' },
            animate: {
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
              ],
              opacity: [0.2, 0.8, 0.2],
            },
            transition: { duration: 8 + Math.random() * 4, repeat: 1 / 0, ease: 'linear' },
          },
          `fast-${e}`
        )
      ),
      [...Array(3)].map((a, e) =>
        t.jsx(
          o.div,
          {
            className: 'absolute h-1 w-40',
            style: {
              background: `linear-gradient(90deg, transparent, ${['#8B5CF6', '#EC4899', '#06B6D4'][e]}, transparent)`,
              filter: 'blur(2px)',
              opacity: 0.3,
            },
            animate: { x: ['-40vw', '140vw'], y: `${30 + e * 20}vh`, rotate: [-10, 10, -10] },
            transition: {
              x: { duration: 10 + e * 2, repeat: 1 / 0, ease: 'linear' },
              rotate: { duration: 5, repeat: 1 / 0, ease: 'easeInOut' },
            },
          },
          `stream-${e}`
        )
      ),
    ],
  })
})
s.displayName = 'ParticleFieldBackground'
try {
  ;((s.displayName = 'ParticleFieldBackground'),
    (s.__docgenInfo = {
      description: '',
      displayName: 'ParticleFieldBackground',
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
export { s as P }
