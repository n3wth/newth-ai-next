import {
  b as J,
  c as me,
  d as Re,
  e as ke,
  f as Me,
  h as Le,
  i as Pe,
  k as qe,
  l as Ce,
  m as Oe,
  n as je,
  o as Ee,
  g as Ie,
} from './iframe-D02P5oxD.js'
var K = { exports: {} },
  F = { exports: {} },
  ce
function De() {
  return (
    ce ||
      ((ce = 1),
      (function (R, e) {
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'useIntersection', {
            enumerable: !0,
            get: function () {
              return D
            },
          }))
        const f = J(),
          E = me(),
          q = typeof IntersectionObserver == 'function',
          t = new Map(),
          c = []
        function _(l) {
          const o = { root: l.root || null, margin: l.rootMargin || '' },
            C = c.find((y) => y.root === o.root && y.margin === o.margin)
          let d
          if (C && ((d = t.get(C)), d)) return d
          const g = new Map(),
            h = new IntersectionObserver((y) => {
              y.forEach((p) => {
                const O = g.get(p.target),
                  S = p.isIntersecting || p.intersectionRatio > 0
                O && S && O(S)
              })
            }, l)
          return ((d = { id: o, observer: h, elements: g }), c.push(o), t.set(o, d), d)
        }
        function I(l, o, C) {
          const { id: d, observer: g, elements: h } = _(C)
          return (
            h.set(l, o),
            g.observe(l),
            function () {
              if ((h.delete(l), g.unobserve(l), h.size === 0)) {
                ;(g.disconnect(), t.delete(d))
                const p = c.findIndex((O) => O.root === d.root && O.margin === d.margin)
                p > -1 && c.splice(p, 1)
              }
            }
          )
        }
        function D(l) {
          let { rootRef: o, rootMargin: C, disabled: d } = l
          const g = d || !q,
            [h, y] = (0, f.useState)(!1),
            p = (0, f.useRef)(null),
            O = (0, f.useCallback)((k) => {
              p.current = k
            }, [])
          ;(0, f.useEffect)(() => {
            if (q) {
              if (g || h) return
              const k = p.current
              if (k && k.tagName) return I(k, (T) => T && y(T), { root: o?.current, rootMargin: C })
            } else if (!h) {
              const k = (0, E.requestIdleCallback)(() => y(!0))
              return () => (0, E.cancelIdleCallback)(k)
            }
          }, [g, C, o, h, p.current])
          const S = (0, f.useCallback)(() => {
            y(!1)
          }, [])
          return [O, h, S]
        }
        ;(typeof e.default == 'function' || (typeof e.default == 'object' && e.default !== null)) &&
          typeof e.default.__esModule > 'u' &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (R.exports = e.default))
      })(F, F.exports)),
    F.exports
  )
}
var V = { exports: {} },
  le
function Se() {
  return (
    le ||
      ((le = 1),
      (function (R, e) {
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'getDomainLocale', {
            enumerable: !0,
            get: function () {
              return f
            },
          }),
          Re())
        function f(E, q, t, c) {
          return !1
        }
        ;(typeof e.default == 'function' || (typeof e.default == 'object' && e.default !== null)) &&
          typeof e.default.__esModule > 'u' &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (R.exports = e.default))
      })(V, V.exports)),
    V.exports
  )
}
var B = { exports: {} },
  se
function Ue() {
  return (
    se ||
      ((se = 1),
      (function (R, e) {
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'useMergedRef', {
            enumerable: !0,
            get: function () {
              return E
            },
          }))
        const f = J()
        function E(t, c) {
          const _ = (0, f.useRef)(null),
            I = (0, f.useRef)(null)
          return (0, f.useCallback)(
            (D) => {
              if (D === null) {
                const l = _.current
                l && ((_.current = null), l())
                const o = I.current
                o && ((I.current = null), o())
              } else (t && (_.current = q(t, D)), c && (I.current = q(c, D)))
            },
            [t, c]
          )
        }
        function q(t, c) {
          if (typeof t == 'function') {
            const _ = t(c)
            return typeof _ == 'function' ? _ : () => t(null)
          } else
            return (
              (t.current = c),
              () => {
                t.current = null
              }
            )
        }
        ;(typeof e.default == 'function' || (typeof e.default == 'object' && e.default !== null)) &&
          typeof e.default.__esModule > 'u' &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (R.exports = e.default))
      })(B, B.exports)),
    B.exports
  )
}
var z = {},
  ae
function we() {
  return (
    ae ||
      ((ae = 1),
      (function (R) {
        ;(Object.defineProperty(R, '__esModule', { value: !0 }),
          Object.defineProperty(R, 'errorOnce', {
            enumerable: !0,
            get: function () {
              return e
            },
          }))
        let e = (f) => {}
      })(z)),
    z
  )
}
var fe
function Te() {
  return (
    fe ||
      ((fe = 1),
      (function (R, e) {
        'use client'
        Object.defineProperty(e, '__esModule', { value: !0 })
        function f(r, b) {
          for (var s in b) Object.defineProperty(r, s, { enumerable: !0, get: b[s] })
        }
        f(e, {
          default: function () {
            return be
          },
          useLinkStatus: function () {
            return pe
          },
        })
        const E = Me(),
          q = ke(),
          t = E._(J()),
          c = Le(),
          _ = Pe(),
          I = qe(),
          D = Ce(),
          l = Oe(),
          o = je(),
          C = De(),
          d = Se(),
          g = Ee(),
          h = Ue()
        we()
        const y = new Set()
        function p(r, b, s, a) {
          if (!(typeof window > 'u') && (0, _.isLocalURL)(b)) {
            if (!a.bypassPrefetchedCheck) {
              const M = typeof a.locale < 'u' ? a.locale : 'locale' in r ? r.locale : void 0,
                L = b + '%' + s + '%' + M
              if (y.has(L)) return
              y.add(L)
            }
            r.prefetch(b, s, a).catch((M) => {})
          }
        }
        function O(r) {
          const s = r.currentTarget.getAttribute('target')
          return (
            (s && s !== '_self') ||
            r.metaKey ||
            r.ctrlKey ||
            r.shiftKey ||
            r.altKey ||
            (r.nativeEvent && r.nativeEvent.which === 2)
          )
        }
        function S(r, b, s, a, M, L, H, $, N) {
          const { nodeName: x } = r.currentTarget
          if ((x.toUpperCase() === 'A' && O(r)) || r.currentTarget.hasAttribute('download')) return
          if (!(0, _.isLocalURL)(s)) {
            M && (r.preventDefault(), location.replace(s))
            return
          }
          ;(r.preventDefault(),
            (() => {
              if (N) {
                let w = !1
                if (
                  (N({
                    preventDefault: () => {
                      w = !0
                    },
                  }),
                  w)
                )
                  return
              }
              const P = H ?? !0
              'beforePopState' in b
                ? b[M ? 'replace' : 'push'](s, a, { shallow: L, locale: $, scroll: P })
                : b[M ? 'replace' : 'push'](a || s, { scroll: P })
            })())
        }
        function k(r) {
          return typeof r == 'string' ? r : (0, I.formatUrl)(r)
        }
        const W = t.default.forwardRef(function (b, s) {
            let a
            const {
              href: M,
              as: L,
              children: H,
              prefetch: $ = null,
              passHref: N,
              replace: x,
              shallow: Q,
              scroll: X,
              locale: P,
              onClick: w,
              onNavigate: ve,
              onMouseEnter: Y,
              onTouchStart: Z,
              legacyBehavior: m = !1,
              ...he
            } = b
            ;((a = H),
              m &&
                (typeof a == 'string' || typeof a == 'number') &&
                (a = (0, q.jsx)('a', { children: a })))
            const n = t.default.useContext(o.RouterContext),
              ee = $ !== !1,
              { href: j, as: v } = t.default.useMemo(() => {
                if (!n) {
                  const ie = k(M)
                  return { href: ie, as: L ? k(L) : ie }
                }
                const [i, U] = (0, c.resolveHref)(n, M, !0)
                return { href: i, as: L ? (0, c.resolveHref)(n, L) : U || i }
              }, [n, M, L]),
              te = t.default.useRef(j),
              ne = t.default.useRef(v)
            let u
            m && (u = t.default.Children.only(a))
            const ye = m ? u && typeof u == 'object' && u.ref : s,
              [re, oe, ue] = (0, C.useIntersection)({ rootMargin: '200px' }),
              _e = t.default.useCallback(
                (i) => {
                  ;((ne.current !== v || te.current !== j) &&
                    (ue(), (ne.current = v), (te.current = j)),
                    re(i))
                },
                [v, j, ue, re]
              ),
              ge = (0, h.useMergedRef)(_e, ye)
            t.default.useEffect(() => {
              n && (!oe || !ee || p(n, j, v, { locale: P }))
            }, [v, j, oe, P, ee, n?.locale, n])
            const A = {
              ref: ge,
              onClick(i) {
                ;(!m && typeof w == 'function' && w(i),
                  m && u.props && typeof u.props.onClick == 'function' && u.props.onClick(i),
                  n && (i.defaultPrevented || S(i, n, j, v, x, Q, X, P, ve)))
              },
              onMouseEnter(i) {
                ;(!m && typeof Y == 'function' && Y(i),
                  m &&
                    u.props &&
                    typeof u.props.onMouseEnter == 'function' &&
                    u.props.onMouseEnter(i),
                  n && p(n, j, v, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }))
              },
              onTouchStart: function (U) {
                ;(!m && typeof Z == 'function' && Z(U),
                  m &&
                    u.props &&
                    typeof u.props.onTouchStart == 'function' &&
                    u.props.onTouchStart(U),
                  n && p(n, j, v, { locale: P, priority: !0, bypassPrefetchedCheck: !0 }))
              },
            }
            if ((0, D.isAbsoluteUrl)(v)) A.href = v
            else if (!m || N || (u.type === 'a' && !('href' in u.props))) {
              const i = typeof P < 'u' ? P : n?.locale,
                U = n?.isLocaleDomain && (0, d.getDomainLocale)(v, i, n?.locales, n?.domainLocales)
              A.href = U || (0, g.addBasePath)((0, l.addLocale)(v, i, n?.defaultLocale))
            }
            return m ? t.default.cloneElement(u, A) : (0, q.jsx)('a', { ...he, ...A, children: a })
          }),
          T = (0, t.createContext)({ pending: !1 }),
          pe = () => (0, t.useContext)(T),
          be = W
        ;(typeof e.default == 'function' || (typeof e.default == 'object' && e.default !== null)) &&
          typeof e.default.__esModule > 'u' &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (R.exports = e.default))
      })(K, K.exports)),
    K.exports
  )
}
var G, de
function He() {
  return (de || ((de = 1), (G = Te())), G)
}
var Ne = He()
const Ke = Ie(Ne)
export { Ke as L }
