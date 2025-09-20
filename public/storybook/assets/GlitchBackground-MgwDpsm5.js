import { R as l, r as d, j as a } from './iframe-D02P5oxD.js'
import { _ as c } from './style-CizCTe6A.js'
import { m as n } from './proxy-BHIPz7UP.js'
const s = l.memo(({ className: i }) => {
  const o = d.useMemo(() => {
    const e = [],
      t = ['#FF0080', '#00FFFF', '#FFFF00', '#FF00FF', '#00FF00']
    for (let r = 0; r < 8; r++)
      e.push({
        id: r,
        y: Math.random() * 100,
        width: 100,
        height: 0.5 + Math.random() * 3,
        color: t[r % t.length],
        duration: 0.05 + Math.random() * 0.15,
        delay: Math.random() * 3,
      })
    return e
  }, [])
  return a.jsxs('div', {
    className: `jsx-5cc58576699249db absolute inset-0 overflow-hidden ${i || ''}`,
    children: [
      a.jsx('div', {
        style: {
          background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
        },
        className: 'jsx-5cc58576699249db absolute inset-0',
      }),
      a.jsx('div', {
        style: {
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`,
          animation: 'scanlines 8s linear infinite',
        },
        className: 'jsx-5cc58576699249db absolute inset-0 opacity-50',
      }),
      [...Array(6)].map((e, t) =>
        a.jsx(
          n.div,
          {
            className: 'absolute',
            style: {
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${50 + Math.random() * 100}px`,
            },
            animate: {
              opacity: [0, 0, 1, 1, 0],
              x: [0, -20, 10, -5, 0],
              scaleX: [1, 1.2, 0.8, 1.1, 1],
            },
            transition: {
              duration: 0.2,
              repeat: 1 / 0,
              repeatDelay: 4 + Math.random() * 8,
              times: [0, 0.2, 0.5, 0.8, 1],
            },
            children: a.jsx('div', {
              style: {
                background: `linear-gradient(90deg,
                transparent 0%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][t % 3]}40 20%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][t % 3]}80 50%,
                ${['#FF0080', '#00FFFF', '#FFFF00'][t % 3]}40 80%,
                transparent 100%)`,
                mixBlendMode: 'screen',
              },
              className: 'jsx-5cc58576699249db w-full h-full',
            }),
          },
          `block-${t}`
        )
      ),
      o.map((e) =>
        a.jsx(
          n.div,
          {
            className: 'absolute w-full',
            style: {
              top: `${e.y}%`,
              height: `${e.height}%`,
              background: `linear-gradient(90deg,
              transparent 0%,
              ${e.color} 10%,
              ${e.color} 90%,
              transparent 100%)`,
              mixBlendMode: 'screen',
            },
            animate: { opacity: [0, 1, 1, 0], scaleX: [0.8, 1.2, 1, 0.9], x: [-50, 50, -30, 0] },
            transition: {
              duration: e.duration,
              repeat: 1 / 0,
              delay: e.delay,
              repeatDelay: 2 + Math.random() * 4,
            },
          },
          e.id
        )
      ),
      a.jsx(n.div, {
        className: 'absolute inset-0 pointer-events-none',
        animate: { x: [0, -3, 2, -1, 0] },
        transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3 },
        children: a.jsx('div', {
          style: {
            background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          },
          className: 'jsx-5cc58576699249db absolute inset-0',
        }),
      }),
      a.jsx(n.div, {
        className: 'absolute inset-0 pointer-events-none',
        animate: { x: [0, 2, -3, 1, 0] },
        transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3, delay: 0.05 },
        children: a.jsx('div', {
          style: {
            background: 'linear-gradient(-45deg, rgba(0,255,255,0.1) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          },
          className: 'jsx-5cc58576699249db absolute inset-0',
        }),
      }),
      [...Array(50)].map((e, t) =>
        a.jsx(
          n.div,
          {
            className: 'absolute',
            style: {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: ['#FF0080', '#00FFFF', '#FFFF00', '#00FF00'][t % 4],
            },
            animate: { opacity: [0, 1, 0] },
            transition: {
              duration: 0.1,
              repeat: 1 / 0,
              delay: Math.random() * 5,
              repeatDelay: Math.random() * 2,
            },
          },
          `noise-${t}`
        )
      ),
      a.jsx(n.div, {
        className:
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none',
        animate: { opacity: [0, 0, 0.3, 0.3, 0], scale: [0.8, 1, 1.2, 1, 0.8] },
        transition: { duration: 0.3, repeat: 1 / 0, repeatDelay: 8 },
        children: a.jsx('div', {
          style: {
            textShadow: `
            2px 2px 0 #FF0080,
            -2px -2px 0 #00FFFF,
            0 0 30px #00FFFF
          `,
          },
          className: 'jsx-5cc58576699249db text-8xl font-mono font-bold text-cyan-400/30',
          children: 'ERROR',
        }),
      }),
      a.jsx(c, {
        id: '5cc58576699249db',
        children:
          '@keyframes scanlines{0%{transform:translatey(0)}100%{transform:translatey(10px)}}',
      }),
    ],
  })
})
s.displayName = 'GlitchBackground'
try {
  ;((s.displayName = 'GlitchBackground'),
    (s.__docgenInfo = {
      description: '',
      displayName: 'GlitchBackground',
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
export { s as G }
