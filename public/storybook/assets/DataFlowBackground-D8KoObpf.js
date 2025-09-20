import { r as o, j as a, R as F } from './iframe-D02P5oxD.js'
import { M as S, i as z, u as D, P as T, a as W, b as A, L as G, m as C } from './proxy-BHIPz7UP.js'
function E(n, i) {
  if (typeof n == 'function') return n(i)
  n != null && (n.current = i)
}
function O(...n) {
  return (i) => {
    let r = !1
    const l = n.map((s) => {
      const e = E(s, i)
      return (!r && typeof e == 'function' && (r = !0), e)
    })
    if (r)
      return () => {
        for (let s = 0; s < l.length; s++) {
          const e = l[s]
          typeof e == 'function' ? e() : E(n[s], null)
        }
      }
  }
}
function H(...n) {
  return o.useCallback(O(...n), n)
}
class K extends o.Component {
  getSnapshotBeforeUpdate(i) {
    const r = this.props.childRef.current
    if (r && i.isPresent && !this.props.isPresent) {
      const l = r.offsetParent,
        s = (z(l) && l.offsetWidth) || 0,
        e = this.props.sizeRef.current
      ;((e.height = r.offsetHeight || 0),
        (e.width = r.offsetWidth || 0),
        (e.top = r.offsetTop),
        (e.left = r.offsetLeft),
        (e.right = s - e.width - e.left))
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function Q({ children: n, isPresent: i, anchorX: r, root: l }) {
  const s = o.useId(),
    e = o.useRef(null),
    t = o.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = o.useContext(S),
    w = H(e, n?.ref)
  return (
    o.useInsertionEffect(() => {
      const { width: c, height: b, top: d, left: h, right: m } = t.current
      if (i || !e.current || !c || !b) return
      const g = r === 'left' ? `left: ${h}` : `right: ${m}`
      e.current.dataset.motionPopId = s
      const f = document.createElement('style')
      p && (f.nonce = p)
      const j = l ?? document.head
      return (
        j.appendChild(f),
        f.sheet &&
          f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${b}px !important;
            ${g}px !important;
            top: ${d}px !important;
          }
        `),
        () => {
          j.contains(f) && j.removeChild(f)
        }
      )
    }, [i]),
    a.jsx(K, { isPresent: i, childRef: e, sizeRef: t, children: o.cloneElement(n, { ref: w }) })
  )
}
const U = ({
  children: n,
  initial: i,
  isPresent: r,
  onExitComplete: l,
  custom: s,
  presenceAffectsLayout: e,
  mode: t,
  anchorX: p,
  root: w,
}) => {
  const c = D(V),
    b = o.useId()
  let d = !0,
    h = o.useMemo(
      () => (
        (d = !1),
        {
          id: b,
          initial: i,
          isPresent: r,
          custom: s,
          onExitComplete: (m) => {
            c.set(m, !0)
            for (const g of c.values()) if (!g) return
            l && l()
          },
          register: (m) => (c.set(m, !1), () => c.delete(m)),
        }
      ),
      [r, c, l]
    )
  return (
    e && d && (h = { ...h }),
    o.useMemo(() => {
      c.forEach((m, g) => c.set(g, !1))
    }, [r]),
    o.useEffect(() => {
      !r && !c.size && l && l()
    }, [r]),
    t === 'popLayout' && (n = a.jsx(Q, { isPresent: r, anchorX: p, root: w, children: n })),
    a.jsx(T.Provider, { value: h, children: n })
  )
}
function V() {
  return new Map()
}
const $ = (n) => n.key || ''
function P(n) {
  const i = []
  return (
    o.Children.forEach(n, (r) => {
      o.isValidElement(r) && i.push(r)
    }),
    i
  )
}
const q = ({
    children: n,
    custom: i,
    initial: r = !0,
    onExitComplete: l,
    presenceAffectsLayout: s = !0,
    mode: e = 'sync',
    propagate: t = !1,
    anchorX: p = 'left',
    root: w,
  }) => {
    const [c, b] = W(t),
      d = o.useMemo(() => P(n), [n]),
      h = t && !c ? [] : d.map($),
      m = o.useRef(!0),
      g = o.useRef(d),
      f = D(() => new Map()),
      [j, _] = o.useState(d),
      [y, I] = o.useState(d)
    A(() => {
      ;((m.current = !1), (g.current = d))
      for (let x = 0; x < y.length; x++) {
        const u = $(y[x])
        h.includes(u) ? f.delete(u) : f.get(u) !== !0 && f.set(u, !1)
      }
    }, [y, h.length, h.join('-')])
    const M = []
    if (d !== j) {
      let x = [...d]
      for (let u = 0; u < y.length; u++) {
        const v = y[u],
          R = $(v)
        h.includes(R) || (x.splice(u, 0, v), M.push(v))
      }
      return (e === 'wait' && M.length && (x = M), I(P(x)), _(d), null)
    }
    const { forceRender: B } = o.useContext(G)
    return a.jsx(a.Fragment, {
      children: y.map((x) => {
        const u = $(x),
          v = t && !c ? !1 : d === y || h.includes(u),
          R = () => {
            if (f.has(u)) f.set(u, !0)
            else return
            let N = !0
            ;(f.forEach((L) => {
              L || (N = !1)
            }),
              N && (B?.(), I(g.current), t && b?.(), l && l()))
          }
        return a.jsx(
          U,
          {
            isPresent: v,
            initial: !m.current || r ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: s,
            mode: e,
            root: w,
            onExitComplete: v ? void 0 : R,
            anchorX: p,
            children: x,
          },
          u
        )
      }),
    })
  },
  k = F.memo(({ className: n }) => {
    const [i, r] = o.useState([])
    o.useEffect(() => {
      const e = setInterval(() => {
        r((t) => {
          const p = [...t]
          return (
            p.length < 20 && p.push({ id: Date.now(), path: Math.floor(Math.random() * 3) }),
            p.length > 20 && p.shift(),
            p
          )
        })
      }, 500)
      return () => clearInterval(e)
    }, [])
    const l = [
        'M 10 50 Q 30 20, 50 50 T 90 50',
        'M 10 50 L 50 50 L 90 50',
        'M 10 50 Q 30 80, 50 50 T 90 50',
      ],
      s = ['#00D9FF', '#FF6B6B', '#4ECDC4']
    return a.jsxs('div', {
      className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 ${n || ''}`,
      children: [
        a.jsx('div', {
          className: 'absolute inset-0 opacity-20',
          style: {
            backgroundImage: `
            linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          },
        }),
        a.jsxs('svg', {
          className: 'absolute inset-0 w-full h-full',
          children: [
            a.jsx('defs', {
              children: a.jsxs('filter', {
                id: 'glow',
                children: [
                  a.jsx('feGaussianBlur', { stdDeviation: '3', result: 'coloredBlur' }),
                  a.jsxs('feMerge', {
                    children: [
                      a.jsx('feMergeNode', { in: 'coloredBlur' }),
                      a.jsx('feMergeNode', { in: 'SourceGraphic' }),
                    ],
                  }),
                ],
              }),
            }),
            l.map((e, t) =>
              a.jsx(
                C.path,
                {
                  d: e,
                  stroke: s[t],
                  strokeWidth: '3',
                  fill: 'none',
                  strokeDasharray: '10 5',
                  filter: 'url(#glow)',
                  initial: { pathLength: 0 },
                  animate: { pathLength: 1 },
                  transition: { duration: 2, ease: 'easeInOut' },
                  style: { transform: `translateY(${t * 100}px)`, opacity: 0.8 },
                },
                t
              )
            ),
          ],
        }),
        [...Array(40)].map((e, t) =>
          a.jsx(
            C.div,
            {
              className: 'absolute text-base font-mono font-bold',
              style: {
                left: `${2 + t * 2.5}%`,
                color: s[t % s.length],
                textShadow: `0 0 10px ${s[t % s.length]}`,
              },
              initial: { y: -20, opacity: 0 },
              animate: { y: '100vh', opacity: [0, 1, 1, 0] },
              transition: {
                duration: 6 + Math.random() * 3,
                repeat: 1 / 0,
                delay: Math.random() * 6,
                ease: 'linear',
              },
              children: Math.random() > 0.5 ? '1' : '0',
            },
            `binary-${t}`
          )
        ),
        a.jsx(q, {
          children: i.map((e) =>
            a.jsx(
              C.div,
              {
                className: 'absolute w-3 h-3 rounded-full',
                style: { backgroundColor: s[e.path], boxShadow: `0 0 20px ${s[e.path]}` },
                initial: { x: '10vw', y: '50vh' },
                animate: { x: '90vw', y: `${50 + (e.path - 1) * 20}vh` },
                exit: { opacity: 0, scale: 0 },
                transition: { duration: 3, ease: 'easeOut' },
              },
              e.id
            )
          ),
        }),
        [25, 50, 75].map((e, t) =>
          a.jsxs(
            C.div,
            {
              className: 'absolute',
              style: { left: `${e}%`, top: '50%', transform: 'translate(-50%, -50%)' },
              children: [
                a.jsx(C.div, {
                  className: 'w-16 h-16 border-3 rounded-xl',
                  style: {
                    borderColor: s[t],
                    borderWidth: '3px',
                    boxShadow: `0 0 40px ${s[t]}`,
                    background: `radial-gradient(circle, ${s[t]}20, transparent)`,
                  },
                  animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
                  transition: {
                    rotate: { duration: 4, repeat: 1 / 0, ease: 'linear' },
                    scale: { duration: 2, repeat: 1 / 0, ease: 'easeInOut' },
                  },
                }),
                a.jsx(C.div, {
                  className: 'absolute inset-0 bg-gradient-to-r rounded-xl',
                  style: { background: `radial-gradient(circle, ${s[t]}40, transparent)` },
                  animate: { opacity: [0.3, 1, 0.3] },
                  transition: { duration: 2, repeat: 1 / 0, delay: t * 0.3 },
                }),
              ],
            },
            `node-${t}`
          )
        ),
        [...Array(5)].map((e, t) =>
          a.jsx(
            C.div,
            {
              className: 'absolute text-xs font-mono text-cyan-400/60',
              style: { left: `${20 + t * 15}%`, top: `${20 + (t % 2) * 60}%` },
              animate: { opacity: [0, 1, 0] },
              transition: { duration: 3, repeat: 1 / 0, delay: t * 0.6 },
              children: '<data/>',
            },
            `text-${t}`
          )
        ),
      ],
    })
  })
k.displayName = 'DataFlowBackground'
try {
  ;((k.displayName = 'DataFlowBackground'),
    (k.__docgenInfo = {
      description: '',
      displayName: 'DataFlowBackground',
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
export { k as D }
