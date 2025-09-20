'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [4235],
  {
    './components/backgrounds/DataFlowBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithContent: () => WithContent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/DataFlowBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Backgrounds/Flow',
          component: _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
          parameters: {
            layout: 'fullscreen',
            docs: { description: { component: 'Animated data flow visualization with particles' } },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'Data Flow',
                  }),
                }),
              ],
            }),
        },
        WithContent = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center text-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-6xl font-bold text-cyan-400',
                        children: 'Real-time Data',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-cyan-300',
                        children: 'Visualizing information streams',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'WithContent']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <DataFlowBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">Data Flow</h1>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithContent.parameters = {
          ...WithContent.parameters,
          docs: {
            ...WithContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <DataFlowBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center text-center">\n        <div className="space-y-4">\n          <h1 className="text-6xl font-bold text-cyan-400">Real-time Data</h1>\n          <p className="text-xl text-cyan-300">Visualizing information streams</p>\n        </div>\n      </div>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((DataFlowBackground.displayName = 'DataFlowBackground'),
          (DataFlowBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/DataFlowBackground.stories.tsx#DataFlowBackground'
            ] = {
              docgenInfo: DataFlowBackground.__docgenInfo,
              name: 'DataFlowBackground',
              path: 'components/backgrounds/DataFlowBackground.stories.tsx#DataFlowBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/DataFlowBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => DataFlowBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const DataFlowBackground = react__WEBPACK_IMPORTED_MODULE_3__.memo(({ className }) => {
        const [dataPoints, setDataPoints] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)([])
        ;(0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
          const interval = setInterval(() => {
            setDataPoints((prev) => {
              const newPoints = [...prev]
              return (
                newPoints.length < 20 &&
                  newPoints.push({ id: Date.now(), path: Math.floor(3 * Math.random()) }),
                newPoints.length > 20 && newPoints.shift(),
                newPoints
              )
            })
          }, 500)
          return () => clearInterval(interval)
        }, [])
        const colors = ['#00D9FF', '#FF6B6B', '#4ECDC4']
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'absolute inset-0 opacity-20',
              style: {
                backgroundImage:
                  '\n            linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),\n            linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)\n          ',
                backgroundSize: '50px 50px',
              },
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('filter', {
                    id: 'glow',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feGaussianBlur', {
                        stdDeviation: '3',
                        result: 'coloredBlur',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('feMerge', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                            in: 'coloredBlur',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                            in: 'SourceGraphic',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                [
                  'M 10 50 Q 30 20, 50 50 T 90 50',
                  'M 10 50 L 50 50 L 90 50',
                  'M 10 50 Q 30 80, 50 50 T 90 50',
                ].map((path, i) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.path,
                    {
                      d: path,
                      stroke: colors[i],
                      strokeWidth: '3',
                      fill: 'none',
                      strokeDasharray: '10 5',
                      filter: 'url(#glow)',
                      initial: { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { duration: 2, ease: 'easeInOut' },
                      style: { transform: `translateY(${100 * i}px)`, opacity: 0.8 },
                    },
                    i
                  )
                ),
              ],
            }),
            [...Array(40)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute text-base font-mono font-bold',
                  style: {
                    left: 2 + 2.5 * i + '%',
                    color: colors[i % colors.length],
                    textShadow: `0 0 10px ${colors[i % colors.length]}`,
                  },
                  initial: { y: -20, opacity: 0 },
                  animate: { y: '100vh', opacity: [0, 1, 1, 0] },
                  transition: {
                    duration: 6 + 3 * Math.random(),
                    repeat: 1 / 0,
                    delay: 6 * Math.random(),
                    ease: 'linear',
                  },
                  children: Math.random() > 0.5 ? '1' : '0',
                },
                `binary-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_1__.N,
              {
                children: dataPoints.map((point) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                    {
                      className: 'absolute w-3 h-3 rounded-full',
                      style: {
                        backgroundColor: colors[point.path],
                        boxShadow: `0 0 20px ${colors[point.path]}`,
                      },
                      initial: { x: '10vw', y: '50vh' },
                      animate: { x: '90vw', y: 50 + 20 * (point.path - 1) + 'vh' },
                      exit: { opacity: 0, scale: 0 },
                      transition: { duration: 3, ease: 'easeOut' },
                    },
                    point.id
                  )
                ),
              }
            ),
            [25, 50, 75].map((x, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute',
                  style: { left: `${x}%`, top: '50%', transform: 'translate(-50%, -50%)' },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                      {
                        className: 'w-16 h-16 border-3 rounded-xl',
                        style: {
                          borderColor: colors[i],
                          borderWidth: '3px',
                          boxShadow: `0 0 40px ${colors[i]}`,
                          background: `radial-gradient(circle, ${colors[i]}20, transparent)`,
                        },
                        animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
                        transition: {
                          rotate: { duration: 4, repeat: 1 / 0, ease: 'linear' },
                          scale: { duration: 2, repeat: 1 / 0, ease: 'easeInOut' },
                        },
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                      {
                        className: 'absolute inset-0 bg-gradient-to-r rounded-xl',
                        style: {
                          background: `radial-gradient(circle, ${colors[i]}40, transparent)`,
                        },
                        animate: { opacity: [0.3, 1, 0.3] },
                        transition: { duration: 2, repeat: 1 / 0, delay: 0.3 * i },
                      }
                    ),
                  ],
                },
                `node-${i}`
              )
            ),
            [...Array(5)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute text-xs font-mono text-cyan-400/60',
                  style: { left: 20 + 15 * i + '%', top: 20 + (i % 2) * 60 + '%' },
                  animate: { opacity: [0, 1, 0] },
                  transition: { duration: 3, repeat: 1 / 0, delay: 0.6 * i },
                  children: '<data/>',
                },
                `text-${i}`
              )
            ),
          ],
        })
      })
      DataFlowBackground.displayName = 'DataFlowBackground'
      try {
        ;((DataFlowBackground.displayName = 'DataFlowBackground'),
          (DataFlowBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/DataFlowBackground.tsx#DataFlowBackground'
            ] = {
              docgenInfo: DataFlowBackground.__docgenInfo,
              name: 'DataFlowBackground',
              path: 'components/backgrounds/DataFlowBackground.tsx#DataFlowBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
  },
])
