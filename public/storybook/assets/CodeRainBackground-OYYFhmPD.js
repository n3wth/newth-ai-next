import { R as l, r as c, j as r } from './iframe-D02P5oxD.js'
import { m as i } from './proxy-BHIPz7UP.js'
const n = l.memo(({ className: s }) => {
  const d = c.useMemo(() => {
    const a = [],
      t = ['AI', 'ML', '01', '{}', '[]', '<>', 'fn', '=>', '::'],
      e = ['#00FF41', '#39FF14', '#00D9FF', '#7B68EE']
    for (let o = 0; o < 30; o++)
      a.push({
        id: o,
        x: 3 + o * 3.3,
        chars: Array(8)
          .fill(0)
          .map(() => t[Math.floor(Math.random() * t.length)]),
        speed: 10 + Math.random() * 10,
        delay: Math.random() * 5,
        color: e[o % e.length],
      })
    return a
  }, [])
  return r.jsx('div', {
    className: `absolute inset-0 overflow-hidden opacity-60 ${s || ''}`,
    children: d.map((a) =>
      r.jsx(
        i.div,
        {
          className: 'absolute text-sm font-mono font-bold',
          style: {
            left: `${a.x}%`,
            color: a.color,
            textShadow: `0 0 10px ${a.color}`,
            writingMode: 'vertical-lr',
          },
          initial: { y: -200 },
          animate: { y: '100vh' },
          transition: { duration: a.speed, repeat: 1 / 0, delay: a.delay, ease: 'linear' },
          children: a.chars.map((t, e) =>
            r.jsx(
              i.span,
              {
                className: 'block',
                animate: { opacity: [0.3, 1, 1, 0.5] },
                transition: { duration: 2, repeat: 1 / 0, delay: e * 0.2 },
                children: t,
              },
              e
            )
          ),
        },
        a.id
      )
    ),
  })
})
n.displayName = 'CodeRainBackground'
try {
  ;((n.displayName = 'CodeRainBackground'),
    (n.__docgenInfo = {
      description: '',
      displayName: 'CodeRainBackground',
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
export { n as C }
