'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [152],
  {
    './components/backgrounds/NeuralNetworkBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Minimal: () => Minimal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_NeuralNetworkBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/NeuralNetworkBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Effects/Backgrounds/Neural Network',
          component: _components_backgrounds_NeuralNetworkBackground__WEBPACK_IMPORTED_MODULE_1__.U,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: {
                component: 'Interactive neural network visualization with connected nodes',
              },
            },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_NeuralNetworkBackground__WEBPACK_IMPORTED_MODULE_1__.U,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'text-center space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-5xl font-bold text-white',
                        children: 'Neural Network',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-gray-300',
                        children: 'Visualizing AI connections',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        Minimal = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full h-[400px]',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_backgrounds_NeuralNetworkBackground__WEBPACK_IMPORTED_MODULE_1__.U,
                { className: 'absolute inset-0' }
              ),
            }),
        },
        __namedExportsOrder = ['Default', 'Minimal']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <NeuralNetworkBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <div className="text-center space-y-4">\n          <h1 className="text-5xl font-bold text-white">Neural Network</h1>\n          <p className="text-xl text-gray-300">Visualizing AI connections</p>\n        </div>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Minimal.parameters = {
          ...Minimal.parameters,
          docs: {
            ...Minimal.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full h-[400px]">\n      <NeuralNetworkBackground className="absolute inset-0" />\n    </div>\n}',
              ...Minimal.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'),
          (NeuralNetworkBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/NeuralNetworkBackground.stories.tsx#NeuralNetworkBackground'
            ] = {
              docgenInfo: NeuralNetworkBackground.__docgenInfo,
              name: 'NeuralNetworkBackground',
              path: 'components/backgrounds/NeuralNetworkBackground.stories.tsx#NeuralNetworkBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/NeuralNetworkBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { U: () => NeuralNetworkBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      function seededRandom(seed) {
        const x = 1e4 * Math.sin(seed)
        return x - Math.floor(x)
      }
      const NeuralNetworkBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const nodes = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
            const nodeArray = [],
              colors = ['#00D9FF', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#7B68EE']
            for (let i = 0; i < 25; i++) {
              const depth = seededRandom(1.1 * i)
              nodeArray.push({
                id: i,
                x: 100 * seededRandom(2.3 * i),
                y: 100 * seededRandom(3.7 * i),
                color: colors[Math.floor(seededRandom(5.2 * i) * colors.length)],
                size: (4 + 8 * seededRandom(7.1 * i)) * (0.5 + 0.5 * depth),
                delay: 2 * seededRandom(11.3 * i),
                depth,
                opacity: 0.3 + 0.7 * depth,
                animationDuration: 4 + 4 * seededRandom(13.5 * i),
                pulseScale: 1.2 + 0.5 * seededRandom(17.7 * i),
              })
            }
            return nodeArray.sort((a, b) => a.depth - b.depth)
          }, []),
          connections = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
            const connectionArray = []
            for (let i = 0; i < nodes.length; i++) {
              const numConnections = 1 + Math.floor(2 * seededRandom(19.1 * i))
              for (let j = 0; j < numConnections; j++) {
                const targetIndex = Math.floor(seededRandom(23.3 * i + 29.7 * j) * nodes.length)
                targetIndex !== i &&
                  connectionArray.push({
                    from: nodes[i],
                    to: nodes[targetIndex],
                    opacity: 0.5 * Math.min(nodes[i].opacity, nodes[targetIndex].opacity),
                    delay: 3 * seededRandom(31.2 * i + 37.5 * j),
                  })
              }
            }
            return connectionArray
          }, [nodes])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: connections.map((conn, i) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.line,
                  {
                    x1: `${conn.from.x}%`,
                    y1: `${conn.from.y}%`,
                    x2: `${conn.to.x}%`,
                    y2: `${conn.to.y}%`,
                    stroke: conn.from.color,
                    strokeWidth: 2 * conn.from.depth,
                    strokeOpacity: conn.opacity,
                    initial: { pathLength: 0 },
                    animate: {
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, conn.opacity, conn.opacity, 0],
                    },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                      delay: conn.delay,
                      ease: 'easeInOut',
                    },
                  },
                  `line-${i}`
                )
              ),
            }),
            nodes.map((node) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    zIndex: Math.floor(10 * node.depth),
                  },
                  initial: {
                    scale: 0,
                    x: 200 * (Math.random() - 0.5),
                    y: 200 * (Math.random() - 0.5),
                  },
                  animate: {
                    scale: [1, node.pulseScale, 1],
                    x: [0, 20 * (Math.random() - 0.5), 0],
                    y: [0, 20 * (Math.random() - 0.5), 0],
                  },
                  transition: {
                    scale: { duration: node.animationDuration, repeat: 1 / 0, ease: 'easeInOut' },
                    x: {
                      duration: 2 * node.animationDuration,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                    y: {
                      duration: 2 * node.animationDuration,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.5,
                    },
                    default: { duration: 1, delay: node.delay },
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                      {
                        className: 'absolute rounded-full blur-xl',
                        style: {
                          width: 6 * node.size + 'px',
                          height: 6 * node.size + 'px',
                          backgroundColor: node.color,
                          opacity: 0.3 * node.opacity,
                          transform: 'translate(-50%, -50%)',
                        },
                        animate: {
                          scale: [1, 1.5, 1],
                          opacity: [0.3 * node.opacity, 0.5 * node.opacity, 0.3 * node.opacity],
                        },
                        transition: {
                          duration: 3,
                          repeat: 1 / 0,
                          ease: 'easeInOut',
                          delay: node.delay,
                        },
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'absolute rounded-full blur-md',
                      style: {
                        width: 3 * node.size + 'px',
                        height: 3 * node.size + 'px',
                        backgroundColor: node.color,
                        opacity: 0.5 * node.opacity,
                        transform: 'translate(-50%, -50%)',
                      },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                      {
                        className: 'absolute rounded-full',
                        style: {
                          width: `${node.size}px`,
                          height: `${node.size}px`,
                          backgroundColor: node.color,
                          boxShadow: `0 0 ${20 * node.depth}px ${node.color}`,
                          transform: 'translate(-50%, -50%)',
                          opacity: node.opacity,
                          border: `${node.depth}px solid rgba(255,255,255,${0.2 + 0.3 * node.depth})`,
                        },
                        animate: {
                          boxShadow: [
                            `0 0 ${20 * node.depth}px ${node.color}`,
                            `0 0 ${40 * node.depth}px ${node.color}`,
                            `0 0 ${20 * node.depth}px ${node.color}`,
                          ],
                        },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: 'easeInOut',
                          delay: 0.5 * node.delay,
                        },
                      }
                    ),
                  ],
                },
                node.id
              )
            ),
            [...Array(15)].map((_, i) => {
              const startNode = nodes[i % nodes.length],
                endNode = nodes[(i + 5) % nodes.length]
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute w-2 h-2 rounded-full',
                  style: {
                    backgroundColor: startNode.color,
                    boxShadow: `0 0 8px ${startNode.color}`,
                    zIndex: 15,
                  },
                  animate: {
                    left: [`${startNode.x}%`, `${endNode.x}%`],
                    top: [`${startNode.y}%`, `${endNode.y}%`],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                  },
                  transition: {
                    duration: 3 + 2 * Math.random(),
                    repeat: 1 / 0,
                    delay: 0.4 * i,
                    ease: 'easeInOut',
                  },
                },
                `particle-${i}`
              )
            }),
          ],
        })
      })
      NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'
      try {
        ;((NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'),
          (NeuralNetworkBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/NeuralNetworkBackground.tsx#NeuralNetworkBackground'
            ] = {
              docgenInfo: NeuralNetworkBackground.__docgenInfo,
              name: 'NeuralNetworkBackground',
              path: 'components/backgrounds/NeuralNetworkBackground.tsx#NeuralNetworkBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
