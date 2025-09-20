import { R as x, r as u, j as t } from './iframe-D02P5oxD.js'
import { c as h } from './utils-Bzm_o1ou.js'
import { m as a } from './proxy-BHIPz7UP.js'
const m = x.memo(({ x: i, y: r, delay: s, type: d, colorSet: n }) => {
  const o = [
      ['#FF006E', '#FB5607', '#FFBE0B'],
      ['#8338EC', '#3A86FF', '#06FFB4'],
      ['#FF4365', '#00D9FF', '#FFF700'],
      ['#C77DFF', '#7209B7', '#560BAD'],
      ['#F72585', '#B5179E', '#7209B7'],
      ['#4CC9F0', '#4361EE', '#3F37C9'],
      ['#F94144', '#F3722C', '#F8961E'],
    ],
    e = o[n % o.length],
    c = {
      cube: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: {
          left: `${i}%`,
          top: `${r}%`,
          width: '100px',
          height: '100px',
          transformStyle: 'preserve-3d',
        },
        animate: {
          rotateX: [0, 360],
          rotateY: [0, -360],
          z: ['-800px', '500px'],
          scale: [0.2, 3],
          opacity: [0, 1, 1, 0],
        },
        transition: {
          duration: 6,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.3, 0.7, 1],
        },
        children: [
          t.jsx('div', {
            className: 'absolute inset-0',
            style: {
              background: `linear-gradient(135deg, ${e[0]}33, ${e[1]}22)`,
              border: `2px solid ${e[0]}66`,
              boxShadow: `0 0 60px ${e[0]}44, inset 0 0 30px ${e[1]}33`,
            },
          }),
          t.jsx(a.div, {
            className: 'absolute inset-0',
            style: { background: `${e[2]}22`, mixBlendMode: 'screen' },
            animate: { opacity: [0, 1, 0], x: [-2, 2, -2] },
            transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 2 },
          }),
        ],
      }),
      pyramid: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%` },
        animate: {
          rotateY: [0, 720],
          z: ['-1000px', '400px'],
          scale: [0.1, 2.5],
          opacity: [0, 0.9, 0.9, 0],
        },
        transition: {
          duration: 7,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.4, 0.8, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: 0,
              height: 0,
              borderLeft: '60px solid transparent',
              borderRight: '60px solid transparent',
              borderBottom: `100px solid ${e[1]}44`,
              filter: `drop-shadow(0 0 40px ${e[0]}66)`,
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              top: 0,
              left: '-60px',
              width: 0,
              height: 0,
              borderLeft: '60px solid transparent',
              borderRight: '60px solid transparent',
              borderBottom: `100px solid ${e[2]}33`,
              mixBlendMode: 'overlay',
            },
            animate: { scaleX: [1, 1.1, 1], opacity: [0, 1, 0] },
            transition: { duration: 0.2, repeat: 1 / 0, repeatDelay: 1.5 },
          }),
        ],
      }),
      sphere: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%`, width: '80px', height: '80px' },
        animate: { z: ['-600px', '300px'], scale: [0.3, 2], opacity: [0, 0.8, 0.8, 0] },
        transition: {
          duration: 5,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.3, 0.7, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${e[0]}55, ${e[1]}33, transparent)`,
              border: `2px solid ${e[1]}44`,
              boxShadow: `0 0 80px ${e[0]}55, inset 0 0 40px ${e[2]}33`,
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: e[2],
              opacity: 0.2,
              mixBlendMode: 'multiply',
            },
            animate: { x: [-3, 3, 0], y: [0, -3, 3] },
            transition: { duration: 0.15, repeat: 1 / 0, repeatDelay: 3 },
          }),
        ],
      }),
      helix: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%`, width: '120px', height: '120px' },
        animate: {
          rotate: [0, 1080],
          z: ['-1200px', '200px'],
          scale: [0.1, 2.5],
          opacity: [0, 0.7, 0.7, 0],
        },
        transition: {
          duration: 8,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.35, 0.75, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              background: `conic-gradient(from 0deg at 50% 50%, ${e[0]}44, ${e[1]}44, ${e[2]}44, ${e[0]}44)`,
              borderRadius: '50%',
              filter: 'blur(2px)',
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              inset: '20%',
              background: `conic-gradient(from 180deg at 50% 50%, ${e[2]}66, transparent, ${e[1]}66)`,
              borderRadius: '50%',
            },
            animate: { rotate: [0, -360] },
            transition: { duration: 2, repeat: 1 / 0, ease: 'linear' },
          }),
        ],
      }),
      prism: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%`, width: '90px', height: '90px' },
        animate: {
          rotateY: [0, 360],
          rotateZ: [0, 180],
          z: ['-700px', '350px'],
          scale: [0.2, 2.2],
          opacity: [0, 0.9, 0.9, 0],
        },
        transition: {
          duration: 6,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.3, 0.7, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${e[0]}44, ${e[1]}33, ${e[2]}44)`,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
              boxShadow: `0 0 60px ${e[1]}66`,
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(45deg, ${e[2]}55, transparent)`,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
              mixBlendMode: 'screen',
            },
            animate: { opacity: [0, 1, 0] },
            transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 2.5 },
          }),
        ],
      }),
      torus: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%`, width: '100px', height: '100px' },
        animate: {
          rotateX: [0, 360],
          rotateY: [0, -720],
          z: ['-900px', '400px'],
          scale: [0.2, 2.8],
          opacity: [0, 0.8, 0.8, 0],
        },
        transition: {
          duration: 7,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.35, 0.7, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `20px solid ${e[1]}44`,
              boxShadow: `0 0 80px ${e[0]}66, inset 0 0 40px ${e[2]}44`,
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              inset: '30%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${e[2]}66, transparent)`,
            },
            animate: { scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] },
            transition: { duration: 2, repeat: 1 / 0, ease: 'easeInOut' },
          }),
        ],
      }),
      grid: t.jsxs(a.div, {
        className: 'absolute pointer-events-none',
        style: { left: `${i}%`, top: `${r}%`, width: '150px', height: '150px' },
        animate: {
          rotateX: [75, 75],
          rotateZ: [0, 180],
          z: ['-1000px', '300px'],
          scale: [0.1, 3],
          opacity: [0, 0.6, 0.6, 0],
        },
        transition: {
          duration: 9,
          repeat: 1 / 0,
          delay: s,
          ease: 'easeOut',
          times: [0, 0.4, 0.8, 1],
        },
        children: [
          t.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 9px, ${e[0]}44 10px),
                repeating-linear-gradient(90deg, transparent, transparent 9px, ${e[1]}44 10px)
              `,
            },
          }),
          t.jsx(a.div, {
            style: {
              position: 'absolute',
              width: '100%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${e[2]}88, transparent)`,
            },
            animate: { y: [0, 150] },
            transition: { duration: 2, repeat: 1 / 0, ease: 'linear' },
          }),
        ],
      }),
    }
  return c[d] || c.cube
})
m.displayName = 'AnimatedShape'
const p = (i) => {
    const r = Math.sin(i) * 1e4
    return r - Math.floor(r)
  },
  l = x.memo(({ children: i, className: r, ...s }) => {
    const d = u.useMemo(() => {
      const n = [],
        o = ['cube', 'pyramid', 'sphere', 'helix', 'prism', 'torus', 'grid']
      for (let e = 0; e < 20; e++)
        n.push({
          id: e,
          x: 10 + p(e * 2) * 80,
          y: 10 + p(e * 3) * 80,
          delay: p(e * 5) * 8,
          type: o[Math.floor(p(e * 7) * o.length)],
          colorSet: Math.floor(p(e * 11) * 7),
        })
      return n
    }, [])
    return t.jsxs('div', {
      className: h('relative overflow-hidden', r),
      ...s,
      children: [
        t.jsx('div', { className: 'absolute inset-0 bg-black' }),
        t.jsxs('div', {
          className: 'absolute inset-0 transform-gpu',
          style: { perspective: '500px', perspectiveOrigin: '50% 50%' },
          children: [
            t.jsx('div', {
              className: 'absolute inset-0 opacity-20',
              style: {
                background: `
                linear-gradient(rgba(139,92,246,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.02) 1px, transparent 1px)
              `,
                backgroundSize: '50px 50px',
                transform: 'rotateX(85deg) translateZ(-300px)',
                transformOrigin: 'center bottom',
                maskImage:
                  'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 50%, transparent)',
              },
            }),
            d.map((n) =>
              t.jsx(
                m,
                { x: n.x, y: n.y, delay: n.delay, type: n.type, colorSet: n.colorSet },
                `shape-${n.id}`
              )
            ),
          ],
        }),
        i,
      ],
    })
  })
l.displayName = 'WarpBackground'
try {
  ;((l.displayName = 'WarpBackground'),
    (l.__docgenInfo = { description: '', displayName: 'WarpBackground', props: {} }))
} catch {}
export { l as W }
