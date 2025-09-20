/*! For license information please see 8932.7e803b9a.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [8932],
  {
    './node_modules/@headlessui/react/dist/components/dialog/dialog.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { lG: () => ht })
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        keyboard_o = ((r) => (
          (r.Space = ' '),
          (r.Enter = 'Enter'),
          (r.Escape = 'Escape'),
          (r.Backspace = 'Backspace'),
          (r.Delete = 'Delete'),
          (r.ArrowLeft = 'ArrowLeft'),
          (r.ArrowUp = 'ArrowUp'),
          (r.ArrowRight = 'ArrowRight'),
          (r.ArrowDown = 'ArrowDown'),
          (r.Home = 'Home'),
          (r.End = 'End'),
          (r.PageUp = 'PageUp'),
          (r.PageDown = 'PageDown'),
          (r.Tab = 'Tab'),
          r
        ))(keyboard_o || {}),
        use_latest_value = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-latest-value.js'
        )
      function use_event_listener_E(n, e, a, t) {
        let i = (0, use_latest_value.Y)(a)
        ;(0, react.useEffect)(() => {
          function r(o) {
            i.current(o)
          }
          return (
            (n = null != n ? n : window).addEventListener(e, r, t),
            () => n.removeEventListener(e, r, t)
          )
        }, [n, e, t])
      }
      class a extends Map {
        constructor(t) {
          ;(super(), (this.factory = t))
        }
        get(t) {
          let e = super.get(t)
          return (void 0 === e && ((e = this.factory(t)), this.set(t, e)), e)
        }
      }
      var machine_n,
        machine_a,
        o,
        disposables = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/disposables.js'
        ),
        env = __webpack_require__('./node_modules/@headlessui/react/dist/utils/env.js'),
        h = Object.defineProperty,
        S = (t, e, r) => (
          ((t, e, r) => {
            e in t
              ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (t[e] = r)
          })(t, 'symbol' != typeof e ? e + '' : e, r),
          r
        ),
        b = (t, e, r) => {
          if (!e.has(t)) throw TypeError('Cannot ' + r)
        },
        machine_i = (t, e, r) => (b(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
        c = (t, e, r) => {
          if (e.has(t)) throw TypeError('Cannot add the same private member more than once')
          e instanceof WeakSet ? e.add(t) : e.set(t, r)
        },
        u = (t, e, r, s) => (b(t, e, 'write to private field'), s ? s.call(t, r) : e.set(t, r), r)
      class T {
        constructor(e) {
          ;(c(this, machine_n, {}),
            c(this, machine_a, new a(() => new Set())),
            c(this, o, new Set()),
            S(this, 'disposables', (0, disposables.e)()),
            u(this, machine_n, e),
            env._.isServer &&
              this.disposables.microTask(() => {
                this.dispose()
              }))
        }
        dispose() {
          this.disposables.dispose()
        }
        get state() {
          return machine_i(this, machine_n)
        }
        subscribe(e, r) {
          if (env._.isServer) return () => {}
          let s = { selector: e, callback: r, current: e(machine_i(this, machine_n)) }
          return (
            machine_i(this, o).add(s),
            this.disposables.add(() => {
              machine_i(this, o).delete(s)
            })
          )
        }
        on(e, r) {
          return env._.isServer
            ? () => {}
            : (machine_i(this, machine_a).get(e).add(r),
              this.disposables.add(() => {
                machine_i(this, machine_a).get(e).delete(r)
              }))
        }
        send(e) {
          let r = this.reduce(machine_i(this, machine_n), e)
          if (r !== machine_i(this, machine_n)) {
            u(this, machine_n, r)
            for (let s of machine_i(this, o)) {
              let l = s.selector(machine_i(this, machine_n))
              j(s.current, l) || ((s.current = l), s.callback(l))
            }
            for (let s of machine_i(this, machine_a).get(e.type)) s(machine_i(this, machine_n), e)
          }
        }
      }
      function j(t, e) {
        return (
          !!Object.is(t, e) ||
          ('object' == typeof t &&
            null !== t &&
            'object' == typeof e &&
            null !== e &&
            (Array.isArray(t) && Array.isArray(e)
              ? t.length === e.length && f(t[Symbol.iterator](), e[Symbol.iterator]())
              : (t instanceof Map && e instanceof Map) || (t instanceof Set && e instanceof Set)
                ? t.size === e.size && f(t.entries(), e.entries())
                : !(!machine_p(t) || !machine_p(e)) &&
                  f(Object.entries(t)[Symbol.iterator](), Object.entries(e)[Symbol.iterator]())))
        )
      }
      function f(t, e) {
        for (;;) {
          let r = t.next(),
            s = e.next()
          if (r.done && s.done) return !0
          if (r.done || s.done || !Object.is(r.value, s.value)) return !1
        }
      }
      function machine_p(t) {
        if ('[object Object]' !== Object.prototype.toString.call(t)) return !1
        let e = Object.getPrototypeOf(t)
        return null === e || null === Object.getPrototypeOf(e)
      }
      ;((machine_n = new WeakMap()), (machine_a = new WeakMap()), (o = new WeakMap()))
      var match = __webpack_require__('./node_modules/@headlessui/react/dist/utils/match.js'),
        stack_machine_a = Object.defineProperty,
        stack_machine_p = (e, c, t) => (
          ((e, c, t) => {
            c in e
              ? stack_machine_a(e, c, { enumerable: !0, configurable: !0, writable: !0, value: t })
              : (e[c] = t)
          })(e, 'symbol' != typeof c ? c + '' : c, t),
          t
        ),
        stack_machine_k = ((t) => ((t[(t.Push = 0)] = 'Push'), (t[(t.Pop = 1)] = 'Pop'), t))(
          stack_machine_k || {}
        )
      let stack_machine_y = {
        0(e, c) {
          let t = c.id,
            s = e.stack,
            i = e.stack.indexOf(t)
          if (-1 !== i) {
            let n = e.stack.slice()
            return (n.splice(i, 1), n.push(t), (s = n), { ...e, stack: s })
          }
          return { ...e, stack: [...e.stack, t] }
        },
        1(e, c) {
          let t = c.id,
            s = e.stack.indexOf(t)
          if (-1 === s) return e
          let i = e.stack.slice()
          return (i.splice(s, 1), { ...e, stack: i })
        },
      }
      class stack_machine_o extends T {
        constructor() {
          ;(super(...arguments),
            stack_machine_p(this, 'actions', {
              push: (t) => this.send({ type: 0, id: t }),
              pop: (t) => this.send({ type: 1, id: t }),
            }),
            stack_machine_p(this, 'selectors', {
              isTop: (t, s) => t.stack[t.stack.length - 1] === s,
              inStack: (t, s) => t.stack.includes(s),
            }))
        }
        static new() {
          return new stack_machine_o({ stack: [] })
        }
        reduce(t, s) {
          return (0, match.Y)(s.type, stack_machine_y, t, s)
        }
      }
      const x = new a(() => stack_machine_o.new())
      var with_selector = __webpack_require__(
          './node_modules/use-sync-external-store/with-selector.js'
        ),
        use_event = __webpack_require__('./node_modules/@headlessui/react/dist/hooks/use-event.js')
      function react_glue_S(e, n, r = j) {
        return (0, with_selector.useSyncExternalStoreWithSelector)(
          (0, use_event._)((i) => e.subscribe(s, i)),
          (0, use_event._)(() => e.state),
          (0, use_event._)(() => e.state),
          (0, use_event._)(n),
          r
        )
      }
      function s(e) {
        return e
      }
      var use_iso_morphic_effect = __webpack_require__(
        './node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js'
      )
      function I(o, s) {
        let t = (0, react.useId)(),
          r = x.get(s),
          [i, c] = react_glue_S(
            r,
            (0, react.useCallback)(
              (e) => [r.selectors.isTop(e, t), r.selectors.inStack(e, t)],
              [r, t]
            )
          )
        return (
          (0, use_iso_morphic_effect.s)(() => {
            if (o) return (r.actions.push(t), () => r.actions.pop(t))
          }, [r, o, t]),
          !!o && (!c || i)
        )
      }
      function use_escape_a(
        o,
        r = 'undefined' != typeof document ? document.defaultView : null,
        t
      ) {
        let n = I(o, 'escape')
        use_event_listener_E(r, 'keydown', (e) => {
          n && (e.defaultPrevented || (e.key === keyboard_o.Escape && t(e)))
        })
      }
      function owner_o(n) {
        var e, r
        return env._.isServer
          ? null
          : n
            ? 'ownerDocument' in n
              ? n.ownerDocument
              : 'current' in n
                ? null != (r = null == (e = n.current) ? void 0 : e.ownerDocument)
                  ? r
                  : document
                : null
            : document
      }
      let use_inert_others_f = new Map(),
        use_inert_others_u = new Map()
      function use_inert_others_h(t) {
        var e
        let r = null != (e = use_inert_others_u.get(t)) ? e : 0
        return (
          use_inert_others_u.set(t, r + 1),
          0 !== r ||
            (use_inert_others_f.set(t, {
              'aria-hidden': t.getAttribute('aria-hidden'),
              inert: t.inert,
            }),
            t.setAttribute('aria-hidden', 'true'),
            (t.inert = !0)),
          () => m(t)
        )
      }
      function m(t) {
        var i
        let r = null != (i = use_inert_others_u.get(t)) ? i : 1
        if ((1 === r ? use_inert_others_u.delete(t) : use_inert_others_u.set(t, r - 1), 1 !== r))
          return
        let e = use_inert_others_f.get(t)
        e &&
          (null === e['aria-hidden']
            ? t.removeAttribute('aria-hidden')
            : t.setAttribute('aria-hidden', e['aria-hidden']),
          (t.inert = e.inert),
          use_inert_others_f.delete(t))
      }
      function use_inert_others_y(t, { allowed: r, disallowed: e } = {}) {
        let i = I(t, 'inert-others')
        ;(0, use_iso_morphic_effect.s)(() => {
          var d, c
          if (!i) return
          let a = (0, disposables.e)()
          for (let n of null != (d = null == e ? void 0 : e()) ? d : [])
            n && a.add(use_inert_others_h(n))
          let s = null != (c = null == r ? void 0 : r()) ? c : []
          for (let n of s) {
            if (!n) continue
            let l = owner_o(n)
            if (!l) continue
            let o = n.parentElement
            for (; o && o !== l.body; ) {
              for (let p of o.children) s.some((E) => p.contains(E)) || a.add(use_inert_others_h(p))
              o = o.parentElement
            }
          }
          return a.dispose
        }, [i, r, e])
      }
      function dom_t(e) {
        return (
          (function dom_o(e) {
            return 'object' == typeof e && null !== e && 'nodeType' in e
          })(e) && 'tagName' in e
        )
      }
      function dom_n(e) {
        return dom_t(e) && 'accessKey' in e
      }
      function dom_i(e) {
        return dom_t(e) && 'tabIndex' in e
      }
      let focus_management_f = [
          '[contentEditable=true]',
          '[tabindex]',
          'a[href]',
          'area[href]',
          'button:not([disabled])',
          'iframe',
          'input:not([disabled])',
          'select:not([disabled])',
          'details>summary',
          'textarea:not([disabled])',
        ]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(','),
        F = ['[data-autofocus]'].map((e) => `${e}:not([tabindex='-1'])`).join(',')
      var focus_management_T = ((n) => (
          (n[(n.First = 1)] = 'First'),
          (n[(n.Previous = 2)] = 'Previous'),
          (n[(n.Next = 4)] = 'Next'),
          (n[(n.Last = 8)] = 'Last'),
          (n[(n.WrapAround = 16)] = 'WrapAround'),
          (n[(n.NoScroll = 32)] = 'NoScroll'),
          (n[(n.AutoFocus = 64)] = 'AutoFocus'),
          n
        ))(focus_management_T || {}),
        focus_management_y = ((o) => (
          (o[(o.Error = 0)] = 'Error'),
          (o[(o.Overflow = 1)] = 'Overflow'),
          (o[(o.Success = 2)] = 'Success'),
          (o[(o.Underflow = 3)] = 'Underflow'),
          o
        ))(focus_management_y || {}),
        focus_management_S = ((t) => (
          (t[(t.Previous = -1)] = 'Previous'),
          (t[(t.Next = 1)] = 'Next'),
          t
        ))(focus_management_S || {})
      function focus_management_b(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(focus_management_f)).sort((r, t) =>
              Math.sign(
                (r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            )
      }
      var focus_management_h = ((t) => (
        (t[(t.Strict = 0)] = 'Strict'),
        (t[(t.Loose = 1)] = 'Loose'),
        t
      ))(focus_management_h || {})
      function A(e, r = 0) {
        var t
        return (
          e !== (null == (t = owner_o(e)) ? void 0 : t.body) &&
          (0, match.Y)(r, {
            0: () => e.matches(focus_management_f),
            1() {
              let l = e
              for (; null !== l; ) {
                if (l.matches(focus_management_f)) return !0
                l = l.parentElement
              }
              return !1
            },
          })
        )
      }
      var H = ((t) => ((t[(t.Keyboard = 0)] = 'Keyboard'), (t[(t.Mouse = 1)] = 'Mouse'), t))(
        H || {}
      )
      function focus_management_I(e) {
        null == e || e.focus({ preventScroll: !0 })
      }
      'undefined' != typeof window &&
        'undefined' != typeof document &&
        (document.addEventListener(
          'keydown',
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = '')
          },
          !0
        ),
        document.addEventListener(
          'click',
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = '')
          },
          !0
        ))
      let w = ['textarea', 'input'].join(',')
      function focus_management_g(
        e,
        r,
        { sorted: t = !0, relativeTo: l = null, skipElements: o = [] } = {}
      ) {
        let c = Array.isArray(e) ? (e.length > 0 ? e[0].ownerDocument : document) : e.ownerDocument,
          u = Array.isArray(e)
            ? t
              ? (function P(e, r = (t) => t) {
                  return e.slice().sort((t, l) => {
                    let o = r(t),
                      c = r(l)
                    if (null === o || null === c) return 0
                    let u = o.compareDocumentPosition(c)
                    return u & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : u & Node.DOCUMENT_POSITION_PRECEDING
                        ? 1
                        : 0
                  })
                })(e)
              : e
            : 64 & r
              ? (function O(e = document.body) {
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(F)).sort((r, t) =>
                        Math.sign(
                          (r.tabIndex || Number.MAX_SAFE_INTEGER) -
                            (t.tabIndex || Number.MAX_SAFE_INTEGER)
                        )
                      )
                })(e)
              : focus_management_b(e)
        ;(o.length > 0 &&
          u.length > 1 &&
          (u = u.filter(
            (s) =>
              !o.some((a) =>
                null != a && 'current' in a ? (null == a ? void 0 : a.current) === s : a === s
              )
          )),
          (l = null != l ? l : c.activeElement))
        let i,
          n = (() => {
            if (5 & r) return 1
            if (10 & r) return -1
            throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
          })(),
          x = (() => {
            if (1 & r) return 0
            if (2 & r) return Math.max(0, u.indexOf(l)) - 1
            if (4 & r) return Math.max(0, u.indexOf(l)) + 1
            if (8 & r) return u.length - 1
            throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
          })(),
          M = 32 & r ? { preventScroll: !0 } : {},
          m = 0,
          d = u.length
        do {
          if (m >= d || m + d <= 0) return 0
          let s = x + m
          if (16 & r) s = (s + d) % d
          else {
            if (s < 0) return 3
            if (s >= d) return 1
          }
          ;((i = u[s]), null == i || i.focus(M), (m += n))
        } while (i !== c.activeElement)
        return (
          6 & r &&
            (function _(e) {
              var r, t
              return (
                null !=
                  (t = null == (r = null == e ? void 0 : e.matches) ? void 0 : r.call(e, w)) && t
              )
            })(i) &&
            i.select(),
          2
        )
      }
      function t() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
        )
      }
      function platform_n() {
        return (
          t() ||
          (function platform_i() {
            return /Android/gi.test(window.navigator.userAgent)
          })()
        )
      }
      function use_document_event_i(t, e, o, n) {
        let u = (0, use_latest_value.Y)(o)
        ;(0, react.useEffect)(() => {
          if (t)
            return (document.addEventListener(e, r, n), () => document.removeEventListener(e, r, n))
          function r(m) {
            u.current(m)
          }
        }, [t, e, n])
      }
      function use_window_event_s(t, e, o, n) {
        let i = (0, use_latest_value.Y)(o)
        ;(0, react.useEffect)(() => {
          if (t)
            return (window.addEventListener(e, r, n), () => window.removeEventListener(e, r, n))
          function r(d) {
            i.current(d)
          }
        }, [t, e, n])
      }
      function use_outside_click_k(o, f, h) {
        let m = (0, use_latest_value.Y)(h),
          s = (0, react.useCallback)(
            function (e, c) {
              if (e.defaultPrevented) return
              let r = c(e)
              if (null === r || !r.getRootNode().contains(r) || !r.isConnected) return
              let M = (function u(n) {
                return 'function' == typeof n
                  ? u(n())
                  : Array.isArray(n) || n instanceof Set
                    ? n
                    : [n]
              })(f)
              for (let u of M)
                if (null !== u && (u.contains(r) || (e.composed && e.composedPath().includes(u))))
                  return
              return (
                !A(r, focus_management_h.Loose) && -1 !== r.tabIndex && e.preventDefault(),
                m.current(e, r)
              )
            },
            [m, f]
          ),
          i = (0, react.useRef)(null)
        ;(use_document_event_i(
          o,
          'pointerdown',
          (t) => {
            var e, c
            platform_n() ||
              (i.current =
                (null == (c = null == (e = t.composedPath) ? void 0 : e.call(t)) ? void 0 : c[0]) ||
                t.target)
          },
          !0
        ),
          use_document_event_i(
            o,
            'pointerup',
            (t) => {
              if (platform_n() || !i.current) return
              let e = i.current
              return ((i.current = null), s(t, () => e))
            },
            !0
          ))
        let l = (0, react.useRef)({ x: 0, y: 0 })
        ;(use_document_event_i(
          o,
          'touchstart',
          (t) => {
            ;((l.current.x = t.touches[0].clientX), (l.current.y = t.touches[0].clientY))
          },
          !0
        ),
          use_document_event_i(
            o,
            'touchend',
            (t) => {
              let e_x = t.changedTouches[0].clientX,
                e_y = t.changedTouches[0].clientY
              if (!(Math.abs(e_x - l.current.x) >= 30 || Math.abs(e_y - l.current.y) >= 30))
                return s(t, () => (dom_i(t.target) ? t.target : null))
            },
            !0
          ),
          use_window_event_s(
            o,
            'blur',
            (t) =>
              s(t, () =>
                (function dom_u(e) {
                  return dom_n(e) && 'IFRAME' === e.nodeName
                })(window.document.activeElement)
                  ? window.document.activeElement
                  : null
              ),
            !0
          ))
      }
      function use_owner_n(...e) {
        return (0, react.useMemo)(() => owner_o(...e), [...e])
      }
      var render = __webpack_require__('./node_modules/@headlessui/react/dist/utils/render.js')
      var hidden_s = ((e) => (
        (e[(e.None = 1)] = 'None'),
        (e[(e.Focusable = 2)] = 'Focusable'),
        (e[(e.Hidden = 4)] = 'Hidden'),
        e
      ))(hidden_s || {})
      let hidden_f = (0, render.FX)(function l(t, r) {
        var n
        let { features: d = 1, ...e } = t,
          o = {
            ref: r,
            'aria-hidden': !(2 & ~d) || (null != (n = e['aria-hidden']) ? n : void 0),
            hidden: !(4 & ~d) || void 0,
            style: {
              position: 'fixed',
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              borderWidth: '0',
              ...(!(4 & ~d) && !!(2 & ~d) && { display: 'none' }),
            },
          }
        return (0, render.Ci)()({
          ourProps: o,
          theirProps: e,
          slot: {},
          defaultTag: 'span',
          name: 'Hidden',
        })
      })
      let use_root_containers_a = (0, react.createContext)(null)
      function use_root_containers_P({ children: r, node: n }) {
        let [o, l] = (0, react.useState)(null),
          u = use_root_containers_y(null != n ? n : o)
        return react.createElement(
          use_root_containers_a.Provider,
          { value: u },
          r,
          null === u &&
            react.createElement(hidden_f, {
              features: hidden_s.Hidden,
              ref: (t) => {
                var i, c
                if (t)
                  for (let e of null !=
                  (c = null == (i = owner_o(t)) ? void 0 : i.querySelectorAll('html > *, body > *'))
                    ? c
                    : [])
                    if (
                      e !== document.body &&
                      e !== document.head &&
                      dom_t(e) &&
                      null != e &&
                      e.contains(t)
                    ) {
                      l(e)
                      break
                    }
              },
            })
        )
      }
      function use_root_containers_y(r = null) {
        var n
        return null != (n = (0, react.useContext)(use_root_containers_a)) ? n : r
      }
      function adjust_scrollbar_padding_d() {
        let r
        return {
          before({ doc: e }) {
            var l
            let o = e.documentElement,
              t = null != (l = e.defaultView) ? l : window
            r = Math.max(0, t.innerWidth - o.clientWidth)
          },
          after({ doc: e, d: o }) {
            let t = e.documentElement,
              l = Math.max(0, t.clientWidth - t.offsetWidth),
              n = Math.max(0, r - l)
            o.style(t, 'paddingRight', `${n}px`)
          },
        }
      }
      function handle_ios_locking_w() {
        return t()
          ? {
              before({ doc: n, d: l, meta: f }) {
                function i(a) {
                  return f.containers.flatMap((r) => r()).some((r) => r.contains(a))
                }
                l.microTask(() => {
                  var c
                  if ('auto' !== window.getComputedStyle(n.documentElement).scrollBehavior) {
                    let t = (0, disposables.e)()
                    ;(t.style(n.documentElement, 'scrollBehavior', 'auto'),
                      l.add(() => l.microTask(() => t.dispose())))
                  }
                  let a = null != (c = window.scrollY) ? c : window.pageYOffset,
                    r = null
                  ;(l.addEventListener(
                    n,
                    'click',
                    (t) => {
                      if (dom_i(t.target))
                        try {
                          let e = t.target.closest('a')
                          if (!e) return
                          let { hash: m } = new URL(e.href),
                            s = n.querySelector(m)
                          dom_i(s) && !i(s) && (r = s)
                        } catch {}
                    },
                    !0
                  ),
                    l.addEventListener(n, 'touchstart', (t) => {
                      if (
                        dom_i(t.target) &&
                        (function dom_r(e) {
                          return dom_t(e) && 'style' in e
                        })(t.target)
                      )
                        if (i(t.target)) {
                          let e = t.target
                          for (; e.parentElement && i(e.parentElement); ) e = e.parentElement
                          l.style(e, 'overscrollBehavior', 'contain')
                        } else l.style(t.target, 'touchAction', 'none')
                    }),
                    l.addEventListener(
                      n,
                      'touchmove',
                      (t) => {
                        if (dom_i(t.target)) {
                          if (
                            (function dom_l(e) {
                              return dom_n(e) && 'INPUT' === e.nodeName
                            })(t.target)
                          )
                            return
                          if (i(t.target)) {
                            let e = t.target
                            for (
                              ;
                              e.parentElement &&
                              '' !== e.dataset.headlessuiPortal &&
                              !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);

                            )
                              e = e.parentElement
                            '' === e.dataset.headlessuiPortal && t.preventDefault()
                          } else t.preventDefault()
                        }
                      },
                      { passive: !1 }
                    ),
                    l.add(() => {
                      var e
                      let t = null != (e = window.scrollY) ? e : window.pageYOffset
                      ;(a !== t && window.scrollTo(0, a),
                        r && r.isConnected && (r.scrollIntoView({ block: 'nearest' }), (r = null)))
                    }))
                })
              },
            }
          : {}
      }
      function overflow_store_m(e) {
        let n = {}
        for (let t of e) Object.assign(n, t(n))
        return n
      }
      let overflow_store_a = (function store_a(o, r) {
        let t = o(),
          n = new Set()
        return {
          getSnapshot: () => t,
          subscribe: (e) => (n.add(e), () => n.delete(e)),
          dispatch(e, ...s) {
            let i = r[e].call(t, ...s)
            i && ((t = i), n.forEach((c) => c()))
          },
        }
      })(() => new Map(), {
        PUSH(e, n) {
          var o
          let t =
            null != (o = this.get(e))
              ? o
              : { doc: e, count: 0, d: (0, disposables.e)(), meta: new Set() }
          return (t.count++, t.meta.add(n), this.set(e, t), this)
        },
        POP(e, n) {
          let t = this.get(e)
          return (t && (t.count--, t.meta.delete(n)), this)
        },
        SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
          let o = { doc: e, d: n, meta: overflow_store_m(t) },
            c = [
              handle_ios_locking_w(),
              adjust_scrollbar_padding_d(),
              {
                before({ doc: e, d: o }) {
                  o.style(e.documentElement, 'overflow', 'hidden')
                },
              },
            ]
          ;(c.forEach(({ before: r }) => (null == r ? void 0 : r(o))),
            c.forEach(({ after: r }) => (null == r ? void 0 : r(o))))
        },
        SCROLL_ALLOW({ d: e }) {
          e.dispose()
        },
        TEARDOWN({ doc: e }) {
          this.delete(e)
        },
      })
      function use_document_overflow_a(r, e, n = () => ({ containers: [] })) {
        let f = (function use_store_o(t) {
            return (0, react.useSyncExternalStore)(t.subscribe, t.getSnapshot, t.getSnapshot)
          })(overflow_store_a),
          o = e ? f.get(e) : void 0,
          i = !!o && o.count > 0
        return (
          (0, use_iso_morphic_effect.s)(() => {
            if (e && r)
              return (
                overflow_store_a.dispatch('PUSH', e, n),
                () => overflow_store_a.dispatch('POP', e, n)
              )
          }, [r, e]),
          i
        )
      }
      function use_scroll_lock_f(e, c, n = () => [document.body]) {
        use_document_overflow_a(I(e, 'scroll-lock'), c, (t) => {
          var o
          return { containers: [...(null != (o = t.containers) ? o : []), n] }
        })
      }
      overflow_store_a.subscribe(() => {
        let e = overflow_store_a.getSnapshot(),
          n = new Map()
        for (let [t] of e) n.set(t, t.documentElement.style.overflow)
        for (let t of e.values()) {
          let o = 'hidden' === n.get(t.doc),
            c = 0 !== t.count
          ;(((c && !o) || (!c && o)) &&
            overflow_store_a.dispatch(t.count > 0 ? 'SCROLL_PREVENT' : 'SCROLL_ALLOW', t),
            0 === t.count && overflow_store_a.dispatch('TEARDOWN', t))
        }
      })
      var use_server_handoff_complete = __webpack_require__(
        './node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js'
      )
      function use_slot_n(e) {
        return (0, react.useMemo)(() => e, Object.values(e))
      }
      var use_sync_refs = __webpack_require__(
        './node_modules/@headlessui/react/dist/hooks/use-sync-refs.js'
      )
      let e = (0, react.createContext)(() => {})
      function close_provider_C({ value: t, children: o }) {
        return react.createElement(e.Provider, { value: t }, o)
      }
      var open_closed = __webpack_require__(
        './node_modules/@headlessui/react/dist/internal/open-closed.js'
      )
      let portal_force_root_e = (0, react.createContext)(!1)
      function portal_force_root_l(o) {
        return react.createElement(portal_force_root_e.Provider, { value: o.force }, o.children)
      }
      let disabled_e = (0, react.createContext)(void 0)
      let description_a = (0, react.createContext)(null)
      function description_f() {
        let r = (0, react.useContext)(description_a)
        if (null === r) {
          let e = new Error(
            'You used a <Description /> component, but it is not inside a relevant parent.'
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(e, description_f), e)
        }
        return r
      }
      description_a.displayName = 'DescriptionContext'
      let description_ = (0, render.FX)(function description_C(r, e) {
          let c = (0, react.useId)(),
            t = (function disabled_a() {
              return (0, react.useContext)(disabled_e)
            })(),
            { id: i = `headlessui-description-${c}`, ...l } = r,
            n = description_f(),
            o = (0, use_sync_refs.P)(e)
          ;(0, use_iso_morphic_effect.s)(() => n.register(i), [i, n.register])
          let s = use_slot_n({ ...n.slot, disabled: t || !1 }),
            p = { ref: o, ...n.props, id: i }
          return (0, render.Ci)()({
            ourProps: p,
            theirProps: l,
            slot: s,
            defaultTag: 'p',
            name: n.name || 'Description',
          })
        }),
        M = Object.assign(description_, {})
      var use_disposables = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-disposables.js'
        ),
        use_is_mounted = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-is-mounted.js'
        ),
        micro_task = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/micro-task.js'
        )
      function use_on_unmount_c(t) {
        let r = (0, use_event._)(t),
          e = (0, react.useRef)(!1)
        ;(0, react.useEffect)(
          () => (
            (e.current = !1),
            () => {
              ;((e.current = !0),
                (0, micro_task._)(() => {
                  e.current && r()
                }))
            }
          ),
          [r]
        )
      }
      var use_tab_direction_a = ((r) => (
        (r[(r.Forwards = 0)] = 'Forwards'),
        (r[(r.Backwards = 1)] = 'Backwards'),
        r
      ))(use_tab_direction_a || {})
      function use_watch_m(u, t) {
        let e = (0, react.useRef)([]),
          r = (0, use_event._)(u)
        ;(0, react.useEffect)(() => {
          let o = [...e.current]
          for (let [a, l] of t.entries())
            if (e.current[a] !== l) {
              let n = r(t, o)
              return ((e.current = t), n)
            }
        }, [r, ...t])
      }
      let active_element_history_n = []
      !(function document_ready_t(n) {
        function e() {
          'loading' !== document.readyState &&
            (n(), document.removeEventListener('DOMContentLoaded', e))
        }
        'undefined' != typeof window &&
          'undefined' != typeof document &&
          (document.addEventListener('DOMContentLoaded', e), e())
      })(() => {
        function e(t) {
          if (
            !dom_i(t.target) ||
            t.target === document.body ||
            active_element_history_n[0] === t.target
          )
            return
          let r = t.target
          ;((r = r.closest(focus_management_f)),
            active_element_history_n.unshift(null != r ? r : t.target),
            (active_element_history_n = active_element_history_n.filter(
              (o) => null != o && o.isConnected
            )),
            active_element_history_n.splice(10))
        }
        ;(window.addEventListener('click', e, { capture: !0 }),
          window.addEventListener('mousedown', e, { capture: !0 }),
          window.addEventListener('focus', e, { capture: !0 }),
          document.body.addEventListener('click', e, { capture: !0 }),
          document.body.addEventListener('mousedown', e, { capture: !0 }),
          document.body.addEventListener('focus', e, { capture: !0 }))
      })
      var console = __webpack_require__('./node_modules/console-browserify/index.js')
      function focus_trap_x(s) {
        if (!s) return new Set()
        if ('function' == typeof s) return new Set(s())
        let e = new Set()
        for (let t of s.current) dom_t(t.current) && e.add(t.current)
        return e
      }
      var G = ((n) => (
        (n[(n.None = 0)] = 'None'),
        (n[(n.InitialFocus = 1)] = 'InitialFocus'),
        (n[(n.TabLock = 2)] = 'TabLock'),
        (n[(n.FocusLock = 4)] = 'FocusLock'),
        (n[(n.RestoreFocus = 8)] = 'RestoreFocus'),
        (n[(n.AutoFocus = 16)] = 'AutoFocus'),
        n
      ))(G || {})
      let focus_trap_w = (0, render.FX)(function D(s, e) {
          let t = (0, react.useRef)(null),
            r = (0, use_sync_refs.P)(t, e),
            { initialFocus: o, initialFocusFallback: a, containers: n, features: u = 15, ...f } = s
          ;(0, use_server_handoff_complete.g)() || (u = 0)
          let l = use_owner_n(t)
          !(function te(s, { ownerDocument: e }) {
            let t = !!(8 & s),
              r = (function ee(s = !0) {
                let e = (0, react.useRef)(active_element_history_n.slice())
                return (
                  use_watch_m(
                    ([t], [r]) => {
                      ;(!0 === r &&
                        !1 === t &&
                        (0, micro_task._)(() => {
                          e.current.splice(0)
                        }),
                        !1 === r && !0 === t && (e.current = active_element_history_n.slice()))
                    },
                    [s, active_element_history_n, e]
                  ),
                  (0, use_event._)(() => {
                    var t
                    return null != (t = e.current.find((r) => null != r && r.isConnected))
                      ? t
                      : null
                  })
                )
              })(t)
            ;(use_watch_m(() => {
              t ||
                ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) &&
                  focus_management_I(r()))
            }, [t]),
              use_on_unmount_c(() => {
                t && focus_management_I(r())
              }))
          })(u, { ownerDocument: l })
          let m = (function re(
            s,
            { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: o }
          ) {
            let a = (0, react.useRef)(null),
              n = I(!!(1 & s), 'focus-trap#initial-focus'),
              u = (0, use_is_mounted.a)()
            return (
              use_watch_m(() => {
                if (0 === s) return
                if (!n) return void (null != o && o.current && focus_management_I(o.current))
                let f = t.current
                f &&
                  (0, micro_task._)(() => {
                    if (!u.current) return
                    let l = null == e ? void 0 : e.activeElement
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === l) return void (a.current = l)
                    } else if (f.contains(l)) return void (a.current = l)
                    if (null != r && r.current) focus_management_I(r.current)
                    else {
                      if (16 & s) {
                        if (
                          focus_management_g(
                            f,
                            focus_management_T.First | focus_management_T.AutoFocus
                          ) !== focus_management_y.Error
                        )
                          return
                      } else if (
                        focus_management_g(f, focus_management_T.First) !== focus_management_y.Error
                      )
                        return
                      if (
                        null != o &&
                        o.current &&
                        (focus_management_I(o.current),
                        (null == e ? void 0 : e.activeElement) === o.current)
                      )
                        return
                      console.warn('There are no focusable elements inside the <FocusTrap />')
                    }
                    a.current = null == e ? void 0 : e.activeElement
                  })
              }, [o, n, s]),
              a
            )
          })(u, { ownerDocument: l, container: t, initialFocus: o, initialFocusFallback: a })
          !(function ne(
            s,
            { ownerDocument: e, container: t, containers: r, previousActiveElement: o }
          ) {
            let a = (0, use_is_mounted.a)(),
              n = !!(4 & s)
            use_event_listener_E(
              null == e ? void 0 : e.defaultView,
              'focus',
              (u) => {
                if (!n || !a.current) return
                let f = focus_trap_x(r)
                dom_n(t.current) && f.add(t.current)
                let l = o.current
                if (!l) return
                let m = u.target
                dom_n(m)
                  ? focus_trap_I(f, m)
                    ? ((o.current = m), focus_management_I(m))
                    : (u.preventDefault(), u.stopPropagation(), focus_management_I(l))
                  : focus_management_I(o.current)
              },
              !0
            )
          })(u, { ownerDocument: l, container: t, containers: n, previousActiveElement: m })
          let g = (function use_tab_direction_u() {
              let e = (0, react.useRef)(0)
              return (
                use_window_event_s(
                  !0,
                  'keydown',
                  (r) => {
                    'Tab' === r.key && (e.current = r.shiftKey ? 1 : 0)
                  },
                  !0
                ),
                e
              )
            })(),
            v = (0, use_event._)((c) => {
              if (!dom_n(t.current)) return
              let E = t.current
              ;(0, match.Y)(g.current, {
                [use_tab_direction_a.Forwards]: () => {
                  focus_management_g(E, focus_management_T.First, {
                    skipElements: [c.relatedTarget, a],
                  })
                },
                [use_tab_direction_a.Backwards]: () => {
                  focus_management_g(E, focus_management_T.Last, {
                    skipElements: [c.relatedTarget, a],
                  })
                },
              })
            }),
            A = I(!!(2 & u), 'focus-trap#tab-lock'),
            N = (0, use_disposables.L)(),
            b = (0, react.useRef)(!1),
            k = {
              ref: r,
              onKeyDown(c) {
                'Tab' == c.key &&
                  ((b.current = !0),
                  N.requestAnimationFrame(() => {
                    b.current = !1
                  }))
              },
              onBlur(c) {
                if (!(4 & u)) return
                let E = focus_trap_x(n)
                dom_n(t.current) && E.add(t.current)
                let L = c.relatedTarget
                dom_i(L) &&
                  'true' !== L.dataset.headlessuiFocusGuard &&
                  (focus_trap_I(E, L) ||
                    (b.current
                      ? focus_management_g(
                          t.current,
                          (0, match.Y)(g.current, {
                            [use_tab_direction_a.Forwards]: () => focus_management_T.Next,
                            [use_tab_direction_a.Backwards]: () => focus_management_T.Previous,
                          }) | focus_management_T.WrapAround,
                          { relativeTo: c.target }
                        )
                      : dom_i(c.target) && focus_management_I(c.target)))
              },
            },
            B = (0, render.Ci)()
          return react.createElement(
            react.Fragment,
            null,
            A &&
              react.createElement(hidden_f, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: v,
                features: hidden_s.Focusable,
              }),
            B({ ourProps: k, theirProps: f, defaultTag: 'div', name: 'FocusTrap' }),
            A &&
              react.createElement(hidden_f, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: v,
                features: hidden_s.Focusable,
              })
          )
        }),
        Re = Object.assign(focus_trap_w, { features: G })
      function focus_trap_I(s, e) {
        for (let t of s) if (t.contains(e)) return !0
        return !1
      }
      var react_dom = __webpack_require__('./node_modules/next/dist/compiled/react-dom/index.js')
      function W(e) {
        let o = (function portal_force_root_a() {
            return (0, react.useContext)(portal_force_root_e)
          })(),
          l = (0, react.useContext)(portal_c),
          [r, p] = (0, react.useState)(() => {
            var s
            if (!o && null !== l) return null != (s = l.current) ? s : null
            if (env._.isServer) return null
            let t = null == e ? void 0 : e.getElementById('headlessui-portal-root')
            if (t) return t
            if (null === e) return null
            let n = e.createElement('div')
            return (n.setAttribute('id', 'headlessui-portal-root'), e.body.appendChild(n))
          })
        return (
          (0, react.useEffect)(() => {
            null !== r && ((null != e && e.body.contains(r)) || null == e || e.body.appendChild(r))
          }, [r, e]),
          (0, react.useEffect)(() => {
            o || (null !== l && p(l.current))
          }, [l, p, o]),
          r
        )
      }
      let portal_ = react.Fragment,
        portal_j = (0, render.FX)(function (o, l) {
          let { ownerDocument: r = null, ...p } = o,
            t = (0, react.useRef)(null),
            n = (0, use_sync_refs.P)(
              (0, use_sync_refs.a)((a) => {
                t.current = a
              }),
              l
            ),
            s = use_owner_n(t),
            u = W(null != r ? r : s),
            y = (0, react.useContext)(portal_m),
            g = (0, use_disposables.L)(),
            v = (0, render.Ci)()
          return (
            use_on_unmount_c(() => {
              var a
              u && u.childNodes.length <= 0 && (null == (a = u.parentElement) || a.removeChild(u))
            }),
            u
              ? (0, react_dom.createPortal)(
                  react.createElement(
                    'div',
                    {
                      'data-headlessui-portal': '',
                      ref: (a) => {
                        ;(g.dispose(), y && a && g.add(y.register(a)))
                      },
                    },
                    v({
                      ourProps: { ref: n },
                      theirProps: p,
                      slot: {},
                      defaultTag: portal_,
                      name: 'Portal',
                    })
                  ),
                  u
                )
              : null
          )
        })
      let portal_I = react.Fragment,
        portal_c = (0, react.createContext)(null)
      let portal_m = (0, react.createContext)(null)
      let J = (0, render.FX)(function portal_S(e, o) {
          let l = (0, use_sync_refs.P)(o),
            { enabled: r = !0, ownerDocument: p, ...t } = e,
            n = (0, render.Ci)()
          return r
            ? react.createElement(portal_j, { ...t, ownerDocument: p, ref: l })
            : n({
                ourProps: { ref: l },
                theirProps: t,
                slot: {},
                defaultTag: portal_,
                name: 'Portal',
              })
        }),
        X = (0, render.FX)(function portal_D(e, o) {
          let { target: l, ...r } = e,
            t = { ref: (0, use_sync_refs.P)(o) },
            n = (0, render.Ci)()
          return react.createElement(
            portal_c.Provider,
            { value: l },
            n({ ourProps: t, theirProps: r, defaultTag: portal_I, name: 'Popover.Group' })
          )
        }),
        portal_te = Object.assign(J, { Group: X })
      var transition = __webpack_require__(
          './node_modules/@headlessui/react/dist/components/transition/transition.js'
        ),
        dialog_console = __webpack_require__('./node_modules/console-browserify/index.js'),
        we = ((o) => ((o[(o.Open = 0)] = 'Open'), (o[(o.Closed = 1)] = 'Closed'), o))(we || {}),
        Be = ((t) => ((t[(t.SetTitleId = 0)] = 'SetTitleId'), t))(Be || {})
      let Ue = { 0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }) },
        dialog_w = (0, react.createContext)(null)
      function dialog_O(e) {
        let t = (0, react.useContext)(dialog_w)
        if (null === t) {
          let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`)
          throw (Error.captureStackTrace && Error.captureStackTrace(o, dialog_O), o)
        }
        return t
      }
      function He(e, t) {
        return (0, match.Y)(t.type, Ue, e, t)
      }
      dialog_w.displayName = 'DialogContext'
      let z = (0, render.FX)(function (t, o) {
          let a = (0, react.useId)(),
            {
              id: n = `headlessui-dialog-${a}`,
              open: i,
              onClose: p,
              initialFocus: d,
              role: s = 'dialog',
              autoFocus: f = !0,
              __demoMode: u = !1,
              unmount: y = !1,
              ...S
            } = t,
            R = (0, react.useRef)(!1)
          s =
            'dialog' === s || 'alertdialog' === s
              ? s
              : (R.current ||
                  ((R.current = !0),
                  dialog_console.warn(
                    `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
                  )),
                'dialog')
          let g = (0, open_closed.O_)()
          void 0 === i && null !== g && (i = (g & open_closed.Uw.Open) === open_closed.Uw.Open)
          let T = (0, react.useRef)(null),
            I = (0, use_sync_refs.P)(T, o),
            F = use_owner_n(T),
            c = i ? 0 : 1,
            [b, Q] = (0, react.useReducer)(He, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, react.createRef)(),
            }),
            m = (0, use_event._)(() => p(!1)),
            B = (0, use_event._)((r) => Q({ type: 0, id: r })),
            D = !!(0, use_server_handoff_complete.g)() && 0 === c,
            [Z, ee] = (function portal_ee() {
              let e = (0, react.useContext)(portal_m),
                o = (0, react.useRef)([]),
                l = (0, use_event._)((t) => (o.current.push(t), e && e.register(t), () => r(t))),
                r = (0, use_event._)((t) => {
                  let n = o.current.indexOf(t)
                  ;(-1 !== n && o.current.splice(n, 1), e && e.unregister(t))
                }),
                p = (0, react.useMemo)(
                  () => ({ register: l, unregister: r, portals: o }),
                  [l, r, o]
                )
              return [
                o,
                (0, react.useMemo)(
                  () =>
                    function ({ children: n }) {
                      return react.createElement(portal_m.Provider, { value: p }, n)
                    },
                  [p]
                ),
              ]
            })(),
            te = {
              get current() {
                var r
                return null != (r = b.panelRef.current) ? r : T.current
              },
            },
            v = use_root_containers_y(),
            { resolveContainers: M } = (function use_root_containers_H({
              defaultContainers: r = [],
              portals: n,
              mainTreeNode: o,
            } = {}) {
              let l = use_owner_n(o),
                u = (0, use_event._)(() => {
                  var i, c
                  let t = []
                  for (let e of r)
                    null !== e &&
                      (dom_t(e)
                        ? t.push(e)
                        : 'current' in e && dom_t(e.current) && t.push(e.current))
                  if (null != n && n.current) for (let e of n.current) t.push(e)
                  for (let e of null !=
                  (i = null == l ? void 0 : l.querySelectorAll('html > *, body > *'))
                    ? i
                    : [])
                    e !== document.body &&
                      e !== document.head &&
                      dom_t(e) &&
                      'headlessui-portal-root' !== e.id &&
                      ((o &&
                        (e.contains(o) ||
                          e.contains(
                            null == (c = null == o ? void 0 : o.getRootNode()) ? void 0 : c.host
                          ))) ||
                        t.some((d) => e.contains(d)) ||
                        t.push(e))
                  return t
                })
              return {
                resolveContainers: u,
                contains: (0, use_event._)((t) => u().some((i) => i.contains(t))),
              }
            })({ mainTreeNode: v, portals: Z, defaultContainers: [te] }),
            U = null !== g && (g & open_closed.Uw.Closing) === open_closed.Uw.Closing
          use_inert_others_y(!u && !U && D, {
            allowed: (0, use_event._)(() => {
              var r, W
              return [
                null !=
                (W = null == (r = T.current) ? void 0 : r.closest('[data-headlessui-portal]'))
                  ? W
                  : null,
              ]
            }),
            disallowed: (0, use_event._)(() => {
              var r
              return [
                null !=
                (r = null == v ? void 0 : v.closest('body > *:not(#headlessui-portal-root)'))
                  ? r
                  : null,
              ]
            }),
          })
          let P = x.get(null)
          ;(0, use_iso_morphic_effect.s)(() => {
            if (D) return (P.actions.push(n), () => P.actions.pop(n))
          }, [P, n, D])
          let H = react_glue_S(
            P,
            (0, react.useCallback)((r) => P.selectors.isTop(r, n), [P, n])
          )
          ;(use_outside_click_k(H, M, (r) => {
            ;(r.preventDefault(), m())
          }),
            use_escape_a(H, null == F ? void 0 : F.defaultView, (r) => {
              ;(r.preventDefault(),
                r.stopPropagation(),
                document.activeElement &&
                  'blur' in document.activeElement &&
                  'function' == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                m())
            }),
            use_scroll_lock_f(!u && !U && D, F, M),
            (function use_on_disappear_p(s, n, o) {
              let i = (0, use_latest_value.Y)((t) => {
                let e = t.getBoundingClientRect()
                0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && o()
              })
              ;(0, react.useEffect)(() => {
                if (!s) return
                let t = null === n ? null : dom_n(n) ? n : n.current
                if (!t) return
                let e = (0, disposables.e)()
                if ('undefined' != typeof ResizeObserver) {
                  let r = new ResizeObserver(() => i.current(t))
                  ;(r.observe(t), e.add(() => r.disconnect()))
                }
                if ('undefined' != typeof IntersectionObserver) {
                  let r = new IntersectionObserver(() => i.current(t))
                  ;(r.observe(t), e.add(() => r.disconnect()))
                }
                return () => e.dispose()
              }, [n, i, s])
            })(D, T, m))
          let [oe, ne] = (function description_H() {
              let [r, e] = (0, react.useState)([])
              return [
                r.length > 0 ? r.join(' ') : void 0,
                (0, react.useMemo)(
                  () =>
                    function (t) {
                      let i = (0, use_event._)(
                          (n) => (
                            e((o) => [...o, n]),
                            () =>
                              e((o) => {
                                let s = o.slice(),
                                  p = s.indexOf(n)
                                return (-1 !== p && s.splice(p, 1), s)
                              })
                          )
                        ),
                        l = (0, react.useMemo)(
                          () => ({
                            register: i,
                            slot: t.slot,
                            name: t.name,
                            props: t.props,
                            value: t.value,
                          }),
                          [i, t.slot, t.name, t.props, t.value]
                        )
                      return react.createElement(description_a.Provider, { value: l }, t.children)
                    },
                  [e]
                ),
              ]
            })(),
            re = (0, react.useMemo)(
              () => [{ dialogState: c, close: m, setTitleId: B, unmount: y }, b],
              [c, m, B, y, b]
            ),
            N = use_slot_n({ open: 0 === c }),
            le = {
              ref: I,
              id: n,
              role: s,
              tabIndex: -1,
              'aria-modal': u ? void 0 : 0 === c || void 0,
              'aria-labelledby': b.titleId,
              'aria-describedby': oe,
              unmount: y,
            },
            ae = !(function use_is_touch_device_f() {
              var t
              let [e] = (0, react.useState)(() =>
                  'undefined' != typeof window && 'function' == typeof window.matchMedia
                    ? window.matchMedia('(pointer: coarse)')
                    : null
                ),
                [o, c] = (0, react.useState)(null != (t = null == e ? void 0 : e.matches) && t)
              return (
                (0, use_iso_morphic_effect.s)(() => {
                  if (e)
                    return (
                      e.addEventListener('change', n),
                      () => e.removeEventListener('change', n)
                    )
                  function n(r) {
                    c(r.matches)
                  }
                }, [e]),
                o
              )
            })(),
            E = G.None
          D &&
            !u &&
            ((E |= G.RestoreFocus),
            (E |= G.TabLock),
            f && (E |= G.AutoFocus),
            ae && (E |= G.InitialFocus))
          let ie = (0, render.Ci)()
          return react.createElement(
            open_closed.$x,
            null,
            react.createElement(
              portal_force_root_l,
              { force: !0 },
              react.createElement(
                portal_te,
                null,
                react.createElement(
                  dialog_w.Provider,
                  { value: re },
                  react.createElement(
                    X,
                    { target: T },
                    react.createElement(
                      portal_force_root_l,
                      { force: !1 },
                      react.createElement(
                        ne,
                        { slot: N },
                        react.createElement(
                          ee,
                          null,
                          react.createElement(
                            Re,
                            {
                              initialFocus: d,
                              initialFocusFallback: T,
                              containers: M,
                              features: E,
                            },
                            react.createElement(
                              close_provider_C,
                              { value: m },
                              ie({
                                ourProps: le,
                                theirProps: S,
                                slot: N,
                                defaultTag: Ne,
                                features: We,
                                visible: 0 === c,
                                name: 'Dialog',
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        }),
        Ne = 'div',
        We = render.Ac.RenderStrategy | render.Ac.Static
      let qe = (0, render.FX)(function $e(e, t) {
          let { transition: o = !1, open: a, ...n } = e,
            i = (0, open_closed.O_)(),
            p = e.hasOwnProperty('open') || null !== i,
            d = e.hasOwnProperty('onClose')
          if (!p && !d)
            throw new Error(
              'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
            )
          if (!p)
            throw new Error(
              'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
            )
          if (!d)
            throw new Error(
              'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
            )
          if (!i && 'boolean' != typeof e.open)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`
            )
          if ('function' != typeof e.onClose)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`
            )
          return (void 0 === a && !o) || n.static
            ? react.createElement(
                use_root_containers_P,
                null,
                react.createElement(z, { ref: t, open: a, ...n })
              )
            : react.createElement(
                use_root_containers_P,
                null,
                react.createElement(
                  transition.e,
                  { show: a, transition: o, unmount: n.unmount },
                  react.createElement(z, { ref: t, ...n })
                )
              )
        }),
        ze = (0, render.FX)(function Ye(e, t) {
          let o = (0, react.useId)(),
            { id: a = `headlessui-dialog-panel-${o}`, transition: n = !1, ...i } = e,
            [{ dialogState: p, unmount: d }, s] = dialog_O('Dialog.Panel'),
            f = (0, use_sync_refs.P)(t, s.panelRef),
            u = use_slot_n({ open: 0 === p }),
            y = (0, use_event._)((I) => {
              I.stopPropagation()
            }),
            S = { ref: f, id: a, onClick: y },
            R = n ? transition._ : react.Fragment,
            g = n ? { unmount: d } : {},
            T = (0, render.Ci)()
          return react.createElement(
            R,
            { ...g },
            T({ ourProps: S, theirProps: i, slot: u, defaultTag: 'div', name: 'Dialog.Panel' })
          )
        }),
        Qe =
          ((0, render.FX)(function Ke(e, t) {
            let { transition: o = !1, ...a } = e,
              [{ dialogState: n, unmount: i }] = dialog_O('Dialog.Backdrop'),
              p = use_slot_n({ open: 0 === n }),
              d = { ref: t, 'aria-hidden': !0 },
              s = o ? transition._ : react.Fragment,
              f = o ? { unmount: i } : {},
              u = (0, render.Ci)()
            return react.createElement(
              s,
              { ...f },
              u({ ourProps: d, theirProps: a, slot: p, defaultTag: 'div', name: 'Dialog.Backdrop' })
            )
          }),
          (0, render.FX)(function Ve(e, t) {
            let o = (0, react.useId)(),
              { id: a = `headlessui-dialog-title-${o}`, ...n } = e,
              [{ dialogState: i, setTitleId: p }] = dialog_O('Dialog.Title'),
              d = (0, use_sync_refs.P)(t)
            ;(0, react.useEffect)(() => (p(a), () => p(null)), [a, p])
            let s = use_slot_n({ open: 0 === i }),
              f = { ref: d, id: a }
            return (0, render.Ci)()({
              ourProps: f,
              theirProps: n,
              slot: s,
              defaultTag: 'h2',
              name: 'Dialog.Title',
            })
          })),
        ht = Object.assign(qe, { Panel: ze, Title: Qe, Description: M })
    },
    './node_modules/@headlessui/react/dist/components/transition/transition.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { e: () => Ke, _: () => Oe })
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        use_disposables = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-disposables.js'
        ),
        use_event = __webpack_require__('./node_modules/@headlessui/react/dist/hooks/use-event.js'),
        use_is_mounted = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-is-mounted.js'
        ),
        use_iso_morphic_effect = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js'
        ),
        use_latest_value = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-latest-value.js'
        ),
        use_server_handoff_complete = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js'
        ),
        use_sync_refs = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-sync-refs.js'
        ),
        disposables = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/disposables.js'
        )
      var T,
        b,
        process = __webpack_require__('./node_modules/process/browser.js'),
        console = __webpack_require__('./node_modules/console-browserify/index.js')
      void 0 !== process &&
        'undefined' != typeof globalThis &&
        'undefined' != typeof Element &&
        'test' === (null == (T = null == process ? void 0 : process.env) ? void 0 : T.NODE_ENV) &&
        void 0 ===
          (null == (b = null == Element ? void 0 : Element.prototype) ? void 0 : b.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              [
                'Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.',
                'Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.',
                '',
                'Example usage:',
                '```js',
                "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
                'mockAnimationsApi()',
                '```',
              ].join('\n')
            ),
            []
          )
        })
      var r,
        L =
          (((r = L || {})[(r.None = 0)] = 'None'),
          (r[(r.Closed = 1)] = 'Closed'),
          (r[(r.Enter = 2)] = 'Enter'),
          (r[(r.Leave = 4)] = 'Leave'),
          r)
      function use_transition_R(t) {
        let n = {}
        for (let e in t) !0 === t[e] && (n[`data-${e}`] = '')
        return n
      }
      function x(t, n, e, i) {
        let [r, o] = (0, react.useState)(e),
          {
            hasFlag: s,
            addFlag: a,
            removeFlag: l,
          } = (function c(u = 0) {
            let [r, a] = (0, react.useState)(u),
              g = (0, react.useCallback)((e) => a(e), []),
              s = (0, react.useCallback)((e) => a((l) => l | e), []),
              m = (0, react.useCallback)((e) => (r & e) === e, [r]),
              n = (0, react.useCallback)((e) => a((l) => l & ~e), []),
              F = (0, react.useCallback)((e) => a((l) => l ^ e), [])
            return { flags: r, setFlag: g, addFlag: s, hasFlag: m, removeFlag: n, toggleFlag: F }
          })(t && r ? 3 : 0),
          u = (0, react.useRef)(!1),
          f = (0, react.useRef)(!1),
          E = (0, use_disposables.L)()
        return (
          (0, use_iso_morphic_effect.s)(() => {
            var d
            if (t)
              return (
                e && o(!0),
                n
                  ? (null == (d = null == i ? void 0 : i.start) || d.call(i, e),
                    (function C(t, { prepare: n, run: e, done: i, inFlight: r }) {
                      let o = (0, disposables.e)()
                      return (
                        (function j(t, { inFlight: n, prepare: e }) {
                          if (null != n && n.current) return void e()
                          let i = t.style.transition
                          ;((t.style.transition = 'none'),
                            e(),
                            t.offsetHeight,
                            (t.style.transition = i))
                        })(t, { prepare: n, inFlight: r }),
                        o.nextFrame(() => {
                          ;(e(),
                            o.requestAnimationFrame(() => {
                              o.add(
                                (function M(t, n) {
                                  var o, s
                                  let e = (0, disposables.e)()
                                  if (!t) return e.dispose
                                  let i = !1
                                  e.add(() => {
                                    i = !0
                                  })
                                  let r =
                                    null !=
                                    (s =
                                      null == (o = t.getAnimations)
                                        ? void 0
                                        : o.call(t).filter((a) => a instanceof CSSTransition))
                                      ? s
                                      : []
                                  return 0 === r.length
                                    ? (n(), e.dispose)
                                    : (Promise.allSettled(r.map((a) => a.finished)).then(() => {
                                        i || n()
                                      }),
                                      e.dispose)
                                })(t, i)
                              )
                            }))
                        }),
                        o.dispose
                      )
                    })(n, {
                      inFlight: u,
                      prepare() {
                        ;(f.current ? (f.current = !1) : (f.current = u.current),
                          (u.current = !0),
                          !f.current && (e ? (a(3), l(4)) : (a(4), l(2))))
                      },
                      run() {
                        f.current ? (e ? (l(3), a(4)) : (l(4), a(3))) : e ? l(1) : a(1)
                      },
                      done() {
                        var p
                        ;(f.current &&
                          'function' == typeof n.getAnimations &&
                          n.getAnimations().length > 0) ||
                          ((u.current = !1),
                          l(7),
                          e || o(!1),
                          null == (p = null == i ? void 0 : i.end) || p.call(i, e))
                      },
                    }))
                  : void (e && a(3))
              )
          }, [t, e, n, E]),
          t
            ? [r, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }]
            : [e, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }]
        )
      }
      var open_closed = __webpack_require__(
          './node_modules/@headlessui/react/dist/internal/open-closed.js'
        ),
        class_names = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/class-names.js'
        ),
        match = __webpack_require__('./node_modules/@headlessui/react/dist/utils/match.js'),
        render = __webpack_require__('./node_modules/@headlessui/react/dist/utils/render.js')
      function ue(e) {
        var t
        return (
          !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) ||
          !(0, render.zv)(null != (t = e.as) ? t : de) ||
          1 === react.Children.count(e.children)
        )
      }
      let V = (0, react.createContext)(null)
      V.displayName = 'TransitionContext'
      var De = ((n) => ((n.Visible = 'visible'), (n.Hidden = 'hidden'), n))(De || {})
      let w = (0, react.createContext)(null)
      function transition_M(e) {
        return 'children' in e
          ? transition_M(e.children)
          : e.current
              .filter(({ el: t }) => null !== t.current)
              .filter(({ state: t }) => 'visible' === t).length > 0
      }
      function Te(e, t) {
        let n = (0, use_latest_value.Y)(e),
          l = (0, react.useRef)([]),
          S = (0, use_is_mounted.a)(),
          R = (0, use_disposables.L)(),
          d = (0, use_event._)((o, i = render.mK.Hidden) => {
            let a = l.current.findIndex(({ el: s }) => s === o)
            ;-1 !== a &&
              ((0, match.Y)(i, {
                [render.mK.Unmount]() {
                  l.current.splice(a, 1)
                },
                [render.mK.Hidden]() {
                  l.current[a].state = 'hidden'
                },
              }),
              R.microTask(() => {
                var s
                !transition_M(l) && S.current && (null == (s = n.current) || s.call(n))
              }))
          }),
          y = (0, use_event._)((o) => {
            let i = l.current.find(({ el: a }) => a === o)
            return (
              i
                ? 'visible' !== i.state && (i.state = 'visible')
                : l.current.push({ el: o, state: 'visible' }),
              () => d(o, render.mK.Unmount)
            )
          }),
          C = (0, react.useRef)([]),
          p = (0, react.useRef)(Promise.resolve()),
          h = (0, react.useRef)({ enter: [], leave: [] }),
          g = (0, use_event._)((o, i, a) => {
            ;(C.current.splice(0),
              t && (t.chains.current[i] = t.chains.current[i].filter(([s]) => s !== o)),
              null == t ||
                t.chains.current[i].push([
                  o,
                  new Promise((s) => {
                    C.current.push(s)
                  }),
                ]),
              null == t ||
                t.chains.current[i].push([
                  o,
                  new Promise((s) => {
                    Promise.all(h.current[i].map(([r, f]) => f)).then(() => s())
                  }),
                ]),
              'enter' === i
                ? (p.current = p.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => a(i)))
                : a(i))
          }),
          v = (0, use_event._)((o, i, a) => {
            Promise.all(h.current[i].splice(0).map(([s, r]) => r))
              .then(() => {
                var s
                null == (s = C.current.shift()) || s()
              })
              .then(() => a(i))
          })
        return (0, react.useMemo)(
          () => ({
            children: l,
            register: y,
            unregister: d,
            onStart: g,
            onStop: v,
            wait: p,
            chains: h,
          }),
          [y, d, l, g, v, h, p]
        )
      }
      w.displayName = 'NestingContext'
      let de = react.Fragment,
        fe = render.Ac.RenderStrategy
      let X = (0, render.FX)(function Ie(e, t) {
          let { show: n, appear: l = !1, unmount: S = !0, ...R } = e,
            d = (0, react.useRef)(null),
            y = ue(e),
            C = (0, use_sync_refs.P)(...(y ? [d, t] : null === t ? [] : [t]))
          ;(0, use_server_handoff_complete.g)()
          let p = (0, open_closed.O_)()
          if (
            (void 0 === n && null !== p && (n = (p & open_closed.Uw.Open) === open_closed.Uw.Open),
            void 0 === n)
          )
            throw new Error(
              'A <Transition /> is used but it is missing a `show={true | false}` prop.'
            )
          let [h, g] = (0, react.useState)(n ? 'visible' : 'hidden'),
            v = Te(() => {
              n || g('hidden')
            }),
            [o, i] = (0, react.useState)(!0),
            a = (0, react.useRef)([n])
          ;(0, use_iso_morphic_effect.s)(() => {
            !1 !== o && a.current[a.current.length - 1] !== n && (a.current.push(n), i(!1))
          }, [a, n])
          let s = (0, react.useMemo)(() => ({ show: n, appear: l, initial: o }), [n, l, o])
          ;(0, use_iso_morphic_effect.s)(() => {
            n ? g('visible') : !transition_M(v) && null !== d.current && g('hidden')
          }, [n, v])
          let r = { unmount: S },
            f = (0, use_event._)(() => {
              var u
              ;(o && i(!1), null == (u = e.beforeEnter) || u.call(e))
            }),
            U = (0, use_event._)(() => {
              var u
              ;(o && i(!1), null == (u = e.beforeLeave) || u.call(e))
            }),
            H = (0, render.Ci)()
          return react.createElement(
            w.Provider,
            { value: v },
            react.createElement(
              V.Provider,
              { value: s },
              H({
                ourProps: {
                  ...r,
                  as: react.Fragment,
                  children: react.createElement(me, {
                    ref: C,
                    ...r,
                    ...R,
                    beforeEnter: f,
                    beforeLeave: U,
                  }),
                },
                theirProps: {},
                defaultTag: react.Fragment,
                features: fe,
                visible: 'visible' === h,
                name: 'Transition',
              })
            )
          )
        }),
        me = (0, render.FX)(function Fe(e, t) {
          var ee, te
          let {
              transition: n = !0,
              beforeEnter: l,
              afterEnter: S,
              beforeLeave: R,
              afterLeave: d,
              enter: y,
              enterFrom: C,
              enterTo: p,
              entered: h,
              leave: g,
              leaveFrom: v,
              leaveTo: o,
              ...i
            } = e,
            [a, s] = (0, react.useState)(null),
            r = (0, react.useRef)(null),
            f = ue(e),
            U = (0, use_sync_refs.P)(...(f ? [r, t, s] : null === t ? [] : [t])),
            H = null == (ee = i.unmount) || ee ? render.mK.Unmount : render.mK.Hidden,
            {
              show: u,
              appear: z,
              initial: K,
            } = (function He() {
              let e = (0, react.useContext)(V)
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                )
              return e
            })(),
            [m, j] = (0, react.useState)(u ? 'visible' : 'hidden'),
            Q = (function Ae() {
              let e = (0, react.useContext)(w)
              if (null === e)
                throw new Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                )
              return e
            })(),
            { register: A, unregister: F } = Q
          ;((0, use_iso_morphic_effect.s)(() => A(r), [A, r]),
            (0, use_iso_morphic_effect.s)(() => {
              if (H === render.mK.Hidden && r.current)
                return u && 'visible' !== m
                  ? void j('visible')
                  : (0, match.Y)(m, { hidden: () => F(r), visible: () => A(r) })
            }, [m, r, A, F, u, H]))
          let G = (0, use_server_handoff_complete.g)()
          ;(0, use_iso_morphic_effect.s)(() => {
            if (f && G && 'visible' === m && null === r.current)
              throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?')
          }, [r, m, G, f])
          let ce = K && !z,
            Y = z && u && K,
            B = (0, react.useRef)(!1),
            I = Te(() => {
              B.current || (j('hidden'), F(r))
            }, Q),
            Z = (0, use_event._)((W) => {
              B.current = !0
              let L = W ? 'enter' : 'leave'
              I.onStart(r, L, (_) => {
                'enter' === _ ? null == l || l() : 'leave' === _ && (null == R || R())
              })
            }),
            $ = (0, use_event._)((W) => {
              let L = W ? 'enter' : 'leave'
              ;((B.current = !1),
                I.onStop(r, L, (_) => {
                  'enter' === _ ? null == S || S() : 'leave' === _ && (null == d || d())
                }),
                'leave' === L && !transition_M(I) && (j('hidden'), F(r)))
            })
          ;(0, react.useEffect)(() => {
            ;(f && n) || (Z(u), $(u))
          }, [u, f, n])
          let pe = !(!n || !f || !G || ce),
            [, T] = x(pe, a, u, { start: Z, end: $ }),
            Ce = (0, render.oE)({
              ref: U,
              className:
                (null ==
                (te = (0, class_names.x)(
                  i.className,
                  Y && y,
                  Y && C,
                  T.enter && y,
                  T.enter && T.closed && C,
                  T.enter && !T.closed && p,
                  T.leave && g,
                  T.leave && !T.closed && v,
                  T.leave && T.closed && o,
                  !T.transition && u && h
                ))
                  ? void 0
                  : te.trim()) || void 0,
              ...use_transition_R(T),
            }),
            N = 0
          ;('visible' === m && (N |= open_closed.Uw.Open),
            'hidden' === m && (N |= open_closed.Uw.Closed),
            u && 'hidden' === m && (N |= open_closed.Uw.Opening),
            !u && 'visible' === m && (N |= open_closed.Uw.Closing))
          let he = (0, render.Ci)()
          return react.createElement(
            w.Provider,
            { value: I },
            react.createElement(
              open_closed.El,
              { value: N },
              he({
                ourProps: Ce,
                theirProps: i,
                defaultTag: de,
                features: fe,
                visible: 'visible' === m,
                name: 'Transition.Child',
              })
            )
          )
        }),
        Oe = (0, render.FX)(function Le(e, t) {
          let n = null !== (0, react.useContext)(V),
            l = null !== (0, open_closed.O_)()
          return react.createElement(
            react.Fragment,
            null,
            !n && l
              ? react.createElement(X, { ref: t, ...e })
              : react.createElement(me, { ref: t, ...e })
          )
        }),
        Ke = Object.assign(X, { Child: Oe, Root: X })
    },
    './node_modules/@headlessui/react/dist/hooks/use-disposables.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { L: () => p })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/disposables.js'
        )
      function p() {
        let [e] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
          _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.e
        )
        return ((0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => e.dispose(), [e]), e)
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-event.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { _: () => o })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-latest-value.js'
        )
      let o = function (t) {
        let e = (0, _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.Y)(t)
        return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r) => e.current(...r), [e])
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-is-mounted.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { a: () => f })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js'
        )
      function f() {
        let e = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1)
        return (
          (0, _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.s)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            []
          ),
          e
        )
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { s: () => n })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/env.js'
        )
      let n = (e, t) => {
        _utils_env_js__WEBPACK_IMPORTED_MODULE_1__._.isServer
          ? (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e, t)
          : (0, react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e, t)
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-latest-value.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { Y: () => s })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js'
        )
      function s(e) {
        let r = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e)
        return (
          (0, _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
            r.current = e
          }, [e]),
          r
        )
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
      __webpack_require__.d(__webpack_exports__, { g: () => l })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/env.js'
        )
      function l() {
        let r = (function s() {
            let r = 'undefined' == typeof document
            return (
              react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
              (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(
                react__WEBPACK_IMPORTED_MODULE_0__,
                2
              ))
            ).useSyncExternalStore(
              () => () => {},
              () => !1,
              () => !r
            )
          })(),
          [e, n] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
            _utils_env_js__WEBPACK_IMPORTED_MODULE_1__._.isHandoffComplete
          )
        return (
          e && !1 === _utils_env_js__WEBPACK_IMPORTED_MODULE_1__._.isHandoffComplete && n(!1),
          react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
            !0 !== e && n(!0)
          }, [e]),
          react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
            () => _utils_env_js__WEBPACK_IMPORTED_MODULE_1__._.handoff(),
            []
          ),
          !r && e
        )
      }
    },
    './node_modules/@headlessui/react/dist/hooks/use-sync-refs.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { P: () => y, a: () => T })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/hooks/use-event.js'
        )
      let u = Symbol()
      function T(t, n = !0) {
        return Object.assign(t, { [u]: n })
      }
      function y(...t) {
        let n = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t)
        ;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          n.current = t
        }, [t])
        let c = (0, _use_event_js__WEBPACK_IMPORTED_MODULE_1__._)((e) => {
          for (let o of n.current) null != o && ('function' == typeof o ? o(e) : (o.current = e))
        })
        return t.every((e) => null == e || (null == e ? void 0 : e[u])) ? void 0 : c
      }
    },
    './node_modules/@headlessui/react/dist/internal/open-closed.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        $x: () => s,
        El: () => c,
        O_: () => u,
        Uw: () => i,
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/index.js'
      )
      let n = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null)
      n.displayName = 'OpenClosedContext'
      var e,
        i =
          (((e = i || {})[(e.Open = 1)] = 'Open'),
          (e[(e.Closed = 2)] = 'Closed'),
          (e[(e.Closing = 4)] = 'Closing'),
          (e[(e.Opening = 8)] = 'Opening'),
          e)
      function u() {
        return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)
      }
      function c({ value: o, children: t }) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider, { value: o }, t)
      }
      function s({ children: o }) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider, { value: null }, o)
      }
    },
    './node_modules/@headlessui/react/dist/utils/class-names.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function t(...r) {
        return Array.from(new Set(r.flatMap((n) => ('string' == typeof n ? n.split(' ') : []))))
          .filter(Boolean)
          .join(' ')
      }
      __webpack_require__.d(__webpack_exports__, { x: () => t })
    },
    './node_modules/@headlessui/react/dist/utils/disposables.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { e: () => o })
      var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@headlessui/react/dist/utils/micro-task.js'
      )
      function o() {
        let s = [],
          r = {
            addEventListener: (e, t, n, i) => (
              e.addEventListener(t, n, i),
              r.add(() => e.removeEventListener(t, n, i))
            ),
            requestAnimationFrame(...e) {
              let t = requestAnimationFrame(...e)
              return r.add(() => cancelAnimationFrame(t))
            },
            nextFrame: (...e) => r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let t = setTimeout(...e)
              return r.add(() => clearTimeout(t))
            },
            microTask(...e) {
              let t = { current: !0 }
              return (
                (0, _micro_task_js__WEBPACK_IMPORTED_MODULE_0__._)(() => {
                  t.current && e[0]()
                }),
                r.add(() => {
                  t.current = !1
                })
              )
            },
            style(e, t, n) {
              let i = e.style.getPropertyValue(t)
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: i })
                })
              )
            },
            group(e) {
              let t = o()
              return (e(t), this.add(() => t.dispose()))
            },
            add: (e) => (
              s.includes(e) || s.push(e),
              () => {
                let t = s.indexOf(e)
                if (t >= 0) for (let n of s.splice(t, 1)) n()
              }
            ),
            dispose() {
              for (let e of s.splice(0)) e()
            },
          }
        return r
      }
    },
    './node_modules/@headlessui/react/dist/utils/env.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { _: () => s })
      var i = Object.defineProperty,
        r = (t, e, n) => (
          ((t, e, n) => {
            e in t
              ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
              : (t[e] = n)
          })(t, 'symbol' != typeof e ? e + '' : e, n),
          n
        )
      let s = new (class o {
        constructor() {
          ;(r(this, 'current', this.detect()),
            r(this, 'handoffState', 'pending'),
            r(this, 'currentId', 0))
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = 'pending'), (this.currentId = 0), (this.current = e))
        }
        reset() {
          this.set(this.detect())
        }
        nextId() {
          return ++this.currentId
        }
        get isServer() {
          return 'server' === this.current
        }
        get isClient() {
          return 'client' === this.current
        }
        detect() {
          return 'undefined' == typeof window || 'undefined' == typeof document
            ? 'server'
            : 'client'
        }
        handoff() {
          'pending' === this.handoffState && (this.handoffState = 'complete')
        }
        get isHandoffComplete() {
          return 'complete' === this.handoffState
        }
      })()
    },
    './node_modules/@headlessui/react/dist/utils/match.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function u(r, n, ...a) {
        if (r in n) {
          let e = n[r]
          return 'function' == typeof e ? e(...a) : e
        }
        let t = new Error(
          `Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            n
          )
            .map((e) => `"${e}"`)
            .join(', ')}.`
        )
        throw (Error.captureStackTrace && Error.captureStackTrace(t, u), t)
      }
      __webpack_require__.d(__webpack_exports__, { Y: () => u })
    },
    './node_modules/@headlessui/react/dist/utils/micro-task.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      function t(e) {
        'function' == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((o) =>
                setTimeout(() => {
                  throw o
                })
              )
      }
      __webpack_require__.d(__webpack_exports__, { _: () => t })
    },
    './node_modules/@headlessui/react/dist/utils/render.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Ac: () => A,
        Ci: () => K,
        FX: () => Y,
        mK: () => C,
        oE: () => m,
        zv: () => b,
      })
      var e,
        a,
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _class_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/class-names.js'
        ),
        _match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@headlessui/react/dist/utils/match.js'
        ),
        A =
          (((a = A || {})[(a.None = 0)] = 'None'),
          (a[(a.RenderStrategy = 1)] = 'RenderStrategy'),
          (a[(a.Static = 2)] = 'Static'),
          a),
        C = (((e = C || {})[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e)
      function K() {
        let n = (function $() {
          let n = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),
            r = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
              for (let a of n.current)
                null != a && ('function' == typeof a ? a(e) : (a.current = e))
            }, [])
          return (...e) => {
            if (!e.every((a) => null == a)) return ((n.current = e), r)
          }
        })()
        return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
          (r) =>
            (function U({
              ourProps: n,
              theirProps: r,
              slot: e,
              defaultTag: a,
              features: s,
              visible: t = !0,
              name: l,
              mergeRefs: i,
            }) {
              i = null != i ? i : I
              let o = P(r, n)
              if (t) return F(o, e, a, l, i)
              let y = null != s ? s : 0
              if (2 & y) {
                let { static: f = !1, ...u } = o
                if (f) return F(u, e, a, l, i)
              }
              if (1 & y) {
                let { unmount: f = !0, ...u } = o
                return (0, _match_js__WEBPACK_IMPORTED_MODULE_2__.Y)(f ? 0 : 1, {
                  0: () => null,
                  1: () => F({ ...u, hidden: !0, style: { display: 'none' } }, e, a, l, i),
                })
              }
              return F(o, e, a, l, i)
            })({ mergeRefs: n, ...r }),
          [n]
        )
      }
      function F(n, r = {}, e, a, s) {
        let { as: t = e, children: l, refName: i = 'ref', ...o } = h(n, ['unmount', 'static']),
          y = void 0 !== n.ref ? { [i]: n.ref } : {},
          f = 'function' == typeof l ? l(r) : l
        ;('className' in o &&
          o.className &&
          'function' == typeof o.className &&
          (o.className = o.className(r)),
          o['aria-labelledby'] && o['aria-labelledby'] === o.id && (o['aria-labelledby'] = void 0))
        let u = {}
        if (r) {
          let d = !1,
            p = []
          for (let [c, T] of Object.entries(r))
            ('boolean' == typeof T && (d = !0),
              !0 === T && p.push(c.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`)))
          if (d) {
            u['data-headlessui-state'] = p.join(' ')
            for (let c of p) u[`data-${c}`] = ''
          }
        }
        if (b(t) && (Object.keys(m(o)).length > 0 || Object.keys(m(u)).length > 0)) {
          if (
            !(
              !(0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(f) ||
              (Array.isArray(f) && f.length > 1) ||
              (function D(n) {
                return b(n.type)
              })(f)
            )
          ) {
            let d = f.props,
              p = null == d ? void 0 : d.className,
              c =
                'function' == typeof p
                  ? (...R) =>
                      (0, _class_names_js__WEBPACK_IMPORTED_MODULE_1__.x)(p(...R), o.className)
                  : (0, _class_names_js__WEBPACK_IMPORTED_MODULE_1__.x)(p, o.className),
              T = c ? { className: c } : {},
              g = P(f.props, m(h(o, ['ref'])))
            for (let R in u) R in g && delete u[R]
            return (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
              f,
              Object.assign({}, g, u, y, { ref: s(H(f), y.ref) }, T)
            )
          }
          if (Object.keys(m(o)).length > 0)
            throw new Error(
              [
                'Passing props on "Fragment"!',
                '',
                `The current component <${a} /> is rendering a "Fragment".`,
                'However we need to passthrough the following props:',
                Object.keys(m(o))
                  .concat(Object.keys(m(u)))
                  .map((d) => `  - ${d}`)
                  .join('\n'),
                '',
                'You can apply a few solutions:',
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  'Render a single element as the child so that we can forward the props onto that element.',
                ]
                  .map((d) => `  - ${d}`)
                  .join('\n'),
              ].join('\n')
            )
        }
        return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
          t,
          Object.assign({}, h(o, ['ref']), !b(t) && y, !b(t) && u),
          f
        )
      }
      function I(...n) {
        return n.every((r) => null == r)
          ? void 0
          : (r) => {
              for (let e of n) null != e && ('function' == typeof e ? e(r) : (e.current = r))
            }
      }
      function P(...n) {
        if (0 === n.length) return {}
        if (1 === n.length) return n[0]
        let r = {},
          e = {}
        for (let s of n)
          for (let t in s)
            t.startsWith('on') && 'function' == typeof s[t]
              ? (null != e[t] || (e[t] = []), e[t].push(s[t]))
              : (r[t] = s[t])
        if (r.disabled || r['aria-disabled'])
          for (let s in e)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s) &&
              (e[s] = [
                (t) => {
                  var l
                  return null == (l = null == t ? void 0 : t.preventDefault) ? void 0 : l.call(t)
                },
              ])
        for (let s in e)
          Object.assign(r, {
            [s](t, ...l) {
              let i = e[s]
              for (let o of i) {
                if (
                  (t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return
                o(t, ...l)
              }
            },
          })
        return r
      }
      function Y(n) {
        var r
        return Object.assign((0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(n), {
          displayName: null != (r = n.displayName) ? r : n.name,
        })
      }
      function m(n) {
        let r = Object.assign({}, n)
        for (let e in r) void 0 === r[e] && delete r[e]
        return r
      }
      function h(n, r = []) {
        let e = Object.assign({}, n)
        for (let a of r) a in e && delete e[a]
        return e
      }
      function H(n) {
        return react__WEBPACK_IMPORTED_MODULE_0__.version.split('.')[0] >= '19'
          ? n.props.ref
          : n.ref
      }
      function b(n) {
        return (
          n === react__WEBPACK_IMPORTED_MODULE_0__.Fragment || n === Symbol.for('react.fragment')
        )
      }
    },
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { N: () => AnimatePresence })
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        LayoutGroupContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs'
        ),
        use_constant = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-constant.mjs'
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs'
        ),
        PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs'
        ),
        is_html_element = __webpack_require__(
          './node_modules/motion-dom/dist/es/utils/is-html-element.mjs'
        ),
        MotionConfigContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs'
        )
      function setRef(ref, value) {
        if ('function' == typeof ref) return ref(value)
        null != ref && (ref.current = value)
      }
      function useComposedRefs(...refs) {
        return react.useCallback(
          (function composeRefs(...refs) {
            return (node) => {
              let hasCleanup = !1
              const cleanups = refs.map((ref) => {
                const cleanup = setRef(ref, node)
                return (hasCleanup || 'function' != typeof cleanup || (hasCleanup = !0), cleanup)
              })
              if (hasCleanup)
                return () => {
                  for (let i = 0; i < cleanups.length; i++) {
                    const cleanup = cleanups[i]
                    'function' == typeof cleanup ? cleanup() : setRef(refs[i], null)
                  }
                }
            }
          })(...refs),
          refs
        )
      }
      class PopChildMeasure extends react.Component {
        getSnapshotBeforeUpdate(prevProps) {
          const element = this.props.childRef.current
          if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent,
              parentWidth = ((0, is_html_element.s)(parent) && parent.offsetWidth) || 0,
              size = this.props.sizeRef.current
            ;((size.height = element.offsetHeight || 0),
              (size.width = element.offsetWidth || 0),
              (size.top = element.offsetTop),
              (size.left = element.offsetLeft),
              (size.right = parentWidth - size.width - size.left))
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      function PopChild({ children, isPresent, anchorX, root }) {
        const id = (0, react.useId)(),
          ref = (0, react.useRef)(null),
          size = (0, react.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce } = (0, react.useContext)(MotionConfigContext.Q),
          composedRef = useComposedRefs(ref, children?.ref)
        return (
          (0, react.useInsertionEffect)(() => {
            const { width, height, top, left, right } = size.current
            if (isPresent || !ref.current || !width || !height) return
            const x = 'left' === anchorX ? `left: ${left}` : `right: ${right}`
            ref.current.dataset.motionPopId = id
            const style = document.createElement('style')
            nonce && (style.nonce = nonce)
            const parent = root ?? document.head
            return (
              parent.appendChild(style),
              style.sheet &&
                style.sheet.insertRule(
                  `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            ${x}px !important;\n            top: ${top}px !important;\n          }\n        `
                ),
              () => {
                parent.contains(style) && parent.removeChild(style)
              }
            )
          }, [isPresent]),
          (0, jsx_runtime.jsx)(PopChildMeasure, {
            isPresent,
            childRef: ref,
            sizeRef: size,
            children: react.cloneElement(children, { ref: composedRef }),
          })
        )
      }
      const PresenceChild = ({
        children,
        initial,
        isPresent,
        onExitComplete,
        custom,
        presenceAffectsLayout,
        mode,
        anchorX,
        root,
      }) => {
        const presenceChildren = (0, use_constant.M)(newChildrenMap),
          id = (0, react.useId)()
        let isReusedContext = !0,
          context = (0, react.useMemo)(
            () => (
              (isReusedContext = !1),
              {
                id,
                initial,
                isPresent,
                custom,
                onExitComplete: (childId) => {
                  presenceChildren.set(childId, !0)
                  for (const isComplete of presenceChildren.values()) if (!isComplete) return
                  onExitComplete && onExitComplete()
                },
                register: (childId) => (
                  presenceChildren.set(childId, !1),
                  () => presenceChildren.delete(childId)
                ),
              }
            ),
            [isPresent, presenceChildren, onExitComplete]
          )
        return (
          presenceAffectsLayout && isReusedContext && (context = { ...context }),
          (0, react.useMemo)(() => {
            presenceChildren.forEach((_, key) => presenceChildren.set(key, !1))
          }, [isPresent]),
          react.useEffect(() => {
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete()
          }, [isPresent]),
          'popLayout' === mode &&
            (children = (0, jsx_runtime.jsx)(PopChild, { isPresent, anchorX, root, children })),
          (0, jsx_runtime.jsx)(PresenceContext.t.Provider, { value: context, children })
        )
      }
      function newChildrenMap() {
        return new Map()
      }
      var use_presence = __webpack_require__(
        './node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs'
      )
      const getChildKey = (child) => child.key || ''
      function onlyElements(children) {
        const filtered = []
        return (
          react.Children.forEach(children, (child) => {
            ;(0, react.isValidElement)(child) && filtered.push(child)
          }),
          filtered
        )
      }
      const AnimatePresence = ({
        children,
        custom,
        initial = !0,
        onExitComplete,
        presenceAffectsLayout = !0,
        mode = 'sync',
        propagate = !1,
        anchorX = 'left',
        root,
      }) => {
        const [isParentPresent, safeToRemove] = (0, use_presence.xQ)(propagate),
          presentChildren = (0, react.useMemo)(() => onlyElements(children), [children]),
          presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey),
          isInitialRender = (0, react.useRef)(!0),
          pendingPresentChildren = (0, react.useRef)(presentChildren),
          exitComplete = (0, use_constant.M)(() => new Map()),
          [diffedChildren, setDiffedChildren] = (0, react.useState)(presentChildren),
          [renderedChildren, setRenderedChildren] = (0, react.useState)(presentChildren)
        ;(0, use_isomorphic_effect.E)(() => {
          ;((isInitialRender.current = !1), (pendingPresentChildren.current = presentChildren))
          for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i])
            presentKeys.includes(key)
              ? exitComplete.delete(key)
              : !0 !== exitComplete.get(key) && exitComplete.set(key, !1)
          }
        }, [renderedChildren, presentKeys.length, presentKeys.join('-')])
        const exitingChildren = []
        if (presentChildren !== diffedChildren) {
          let nextChildren = [...presentChildren]
          for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i],
              key = getChildKey(child)
            presentKeys.includes(key) ||
              (nextChildren.splice(i, 0, child), exitingChildren.push(child))
          }
          return (
            'wait' === mode && exitingChildren.length && (nextChildren = exitingChildren),
            setRenderedChildren(onlyElements(nextChildren)),
            setDiffedChildren(presentChildren),
            null
          )
        }
        const { forceRender } = (0, react.useContext)(LayoutGroupContext.L)
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: renderedChildren.map((child) => {
            const key = getChildKey(child),
              isPresent =
                !(propagate && !isParentPresent) &&
                (presentChildren === renderedChildren || presentKeys.includes(key))
            return (0, jsx_runtime.jsx)(
              PresenceChild,
              {
                isPresent,
                initial: !(isInitialRender.current && !initial) && void 0,
                custom,
                presenceAffectsLayout,
                mode,
                root,
                onExitComplete: isPresent
                  ? void 0
                  : () => {
                      if (!exitComplete.has(key)) return
                      exitComplete.set(key, !0)
                      let isEveryExitComplete = !0
                      ;(exitComplete.forEach((isExitComplete) => {
                        isExitComplete || (isEveryExitComplete = !1)
                      }),
                        isEveryExitComplete &&
                          (forceRender?.(),
                          setRenderedChildren(pendingPresentChildren.current),
                          propagate && safeToRemove?.(),
                          onExitComplete && onExitComplete()))
                    },
                anchorX,
                children: child,
              },
              key
            )
          }),
        })
      }
    },
    './node_modules/lucide-react/dist/esm/createLucideIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => createLucideIcon })
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      const toPascalCase = (string) => {
          const camelCase = ((string) =>
            string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
              p2 ? p2.toUpperCase() : p1.toLowerCase()
            ))(string)
          return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
        },
        mergeClasses = (...classes) =>
          classes
            .filter(
              (className, index, array) =>
                Boolean(className) && '' !== className.trim() && array.indexOf(className) === index
            )
            .join(' ')
            .trim(),
        hasA11yProp = (props) => {
          for (const prop in props)
            if (prop.startsWith('aria-') || 'role' === prop || 'title' === prop) return !0
        }
      var defaultAttributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }
      const Icon = (0, react.forwardRef)(
          (
            {
              color = 'currentColor',
              size = 24,
              strokeWidth = 2,
              absoluteStrokeWidth,
              className = '',
              children,
              iconNode,
              ...rest
            },
            ref
          ) =>
            (0, react.createElement)(
              'svg',
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth: absoluteStrokeWidth
                  ? (24 * Number(strokeWidth)) / Number(size)
                  : strokeWidth,
                className: mergeClasses('lucide', className),
                ...(!children && !hasA11yProp(rest) && { 'aria-hidden': 'true' }),
                ...rest,
              },
              [
                ...iconNode.map(([tag, attrs]) => (0, react.createElement)(tag, attrs)),
                ...(Array.isArray(children) ? children : [children]),
              ]
            )
        ),
        createLucideIcon = (iconName, iconNode) => {
          const Component = (0, react.forwardRef)(({ className, ...props }, ref) => {
            return (0, react.createElement)(Icon, {
              ref,
              iconNode,
              className: mergeClasses(
                `lucide-${((string = toPascalCase(iconName)), string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
                `lucide-${iconName}`,
                className
              ),
              ...props,
            })
            var string
          })
          return ((Component.displayName = toPascalCase(iconName)), Component)
        }
    },
    './node_modules/lucide-react/dist/esm/icons/arrow-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => ArrowRight })
      const ArrowRight = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'arrow-right',
        [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/arrow-up-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => ArrowUpRight })
      const ArrowUpRight = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'arrow-up-right',
        [
          ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
          ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/brain.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Brain })
      const Brain = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('brain', [
        ['path', { d: 'M12 18V5', key: 'adv99a' }],
        ['path', { d: 'M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4', key: '1e3is1' }],
        ['path', { d: 'M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5', key: '1gqd8o' }],
        ['path', { d: 'M17.997 5.125a4 4 0 0 1 2.526 5.77', key: 'iwvgf7' }],
        ['path', { d: 'M18 18a4 4 0 0 0 2-7.464', key: 'efp6ie' }],
        ['path', { d: 'M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517', key: '1gq6am' }],
        ['path', { d: 'M6 18a4 4 0 0 1-2-7.464', key: 'k1g0md' }],
        ['path', { d: 'M6.003 5.125a4 4 0 0 0-2.526 5.77', key: 'q97ue3' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/briefcase.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Briefcase })
      const Briefcase = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'briefcase',
        [
          ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
          ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/clock.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Clock })
      const Clock = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('clock', [
        ['path', { d: 'M12 6v6l4 2', key: 'mmk7yg' }],
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/command.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Command })
      const Command = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'command',
        [
          [
            'path',
            {
              d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
              key: '11bfej',
            },
          ],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/download.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Download })
      const Download = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'download',
        [
          ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
          ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
          ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/external-link.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => ExternalLink })
      const ExternalLink = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'external-link',
        [
          ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
          ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
          [
            'path',
            { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' },
          ],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/file-text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => FileText })
      const FileText = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'file-text',
        [
          [
            'path',
            { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' },
          ],
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
          ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
          ['path', { d: 'M16 13H8', key: 't4e002' }],
          ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/folder-open.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => FolderOpen })
      const FolderOpen = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'folder-open',
        [
          [
            'path',
            {
              d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
              key: 'usdka0',
            },
          ],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/folder.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Folder })
      const Folder = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('folder', [
        [
          'path',
          {
            d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
            key: '1kt360',
          },
        ],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/github.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Github })
      const Github = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef',
          },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/globe.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Globe })
      const Globe = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('globe', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
        ['path', { d: 'M2 12h20', key: '9i4pu4' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/hash.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Hash })
      const Hash = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('hash', [
        ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
        ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
        ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
        ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/pen-line.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => PenLine })
      const PenLine = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'pen-line',
        [
          ['path', { d: 'M13 21h8', key: '1jsn5i' }],
          [
            'path',
            {
              d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
              key: '1a8usu',
            },
          ],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/search.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Search })
      const Search = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('search', [
        ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
        ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/sparkles.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Sparkles })
      const Sparkles = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'sparkles',
        [
          [
            'path',
            {
              d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
              key: '1s2grr',
            },
          ],
          ['path', { d: 'M20 2v4', key: '1rf3ol' }],
          ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
          ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/star.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Star })
      const Star = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('star', [
        [
          'path',
          {
            d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
            key: 'r04s7s',
          },
        ],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/target.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Target })
      const Target = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('target', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
        ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/zap.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => Zap })
      const Zap = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('zap', [
        [
          'path',
          {
            d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
            key: '1xq2db',
          },
        ],
      ])
    },
    './node_modules/styled-jsx/style.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__('./node_modules/styled-jsx/dist/index/index.js').style
    },
    './node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict'
        var React = __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        var objectIs =
            'function' == typeof Object.is
              ? Object.is
              : function is(x, y) {
                  return (x === y && (0 !== x || 1 / x == 1 / y)) || (x != x && y != y)
                },
          useSyncExternalStore = React.useSyncExternalStore,
          useRef = React.useRef,
          useEffect = React.useEffect,
          useMemo = React.useMemo,
          useDebugValue = React.useDebugValue
        exports.useSyncExternalStoreWithSelector = function (
          subscribe,
          getSnapshot,
          getServerSnapshot,
          selector,
          isEqual
        ) {
          var instRef = useRef(null)
          if (null === instRef.current) {
            var inst = { hasValue: !1, value: null }
            instRef.current = inst
          } else inst = instRef.current
          instRef = useMemo(
            function () {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  if (
                    ((hasMemo = !0),
                    (memoizedSnapshot = nextSnapshot),
                    (nextSnapshot = selector(nextSnapshot)),
                    void 0 !== isEqual && inst.hasValue)
                  ) {
                    var currentSelection = inst.value
                    if (isEqual(currentSelection, nextSnapshot))
                      return (memoizedSelection = currentSelection)
                  }
                  return (memoizedSelection = nextSnapshot)
                }
                if (
                  ((currentSelection = memoizedSelection), objectIs(memoizedSnapshot, nextSnapshot))
                )
                  return currentSelection
                var nextSelection = selector(nextSnapshot)
                return void 0 !== isEqual && isEqual(currentSelection, nextSelection)
                  ? ((memoizedSnapshot = nextSnapshot), currentSelection)
                  : ((memoizedSnapshot = nextSnapshot), (memoizedSelection = nextSelection))
              }
              var memoizedSnapshot,
                memoizedSelection,
                hasMemo = !1,
                maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot
              return [
                function () {
                  return memoizedSelector(getSnapshot())
                },
                null === maybeGetServerSnapshot
                  ? void 0
                  : function () {
                      return memoizedSelector(maybeGetServerSnapshot())
                    },
              ]
            },
            [getSnapshot, getServerSnapshot, selector, isEqual]
          )
          var value = useSyncExternalStore(subscribe, instRef[0], instRef[1])
          return (
            useEffect(
              function () {
                ;((inst.hasValue = !0), (inst.value = value))
              },
              [value]
            ),
            useDebugValue(value),
            value
          )
        }
      },
    './node_modules/use-sync-external-store/with-selector.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict'
      module.exports = __webpack_require__(
        './node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js'
      )
    },
  },
])
