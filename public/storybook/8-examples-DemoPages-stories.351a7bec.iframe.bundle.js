/*! For license information please see 8-examples-DemoPages-stories.351a7bec.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [135],
  {
    './components/backgrounds/CodeRainBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { K: () => CodeRainBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const CodeRainBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const columns = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const cols = [],
            terms = ['AI', 'ML', '01', '{}', '[]', '<>', 'fn', '=>', '::'],
            colors = ['#00FF41', '#39FF14', '#00D9FF', '#7B68EE']
          for (let i = 0; i < 30; i++)
            cols.push({
              id: i,
              x: 3 + 3.3 * i,
              chars: Array(8)
                .fill(0)
                .map(() => terms[Math.floor(Math.random() * terms.length)]),
              speed: 10 + 10 * Math.random(),
              delay: 5 * Math.random(),
              color: colors[i % colors.length],
            })
          return cols
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: `absolute inset-0 overflow-hidden opacity-60 ${className || ''}`,
          children: columns.map((col) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
              {
                className: 'absolute text-sm font-mono font-bold',
                style: {
                  left: `${col.x}%`,
                  color: col.color,
                  textShadow: `0 0 10px ${col.color}`,
                  writingMode: 'vertical-lr',
                },
                initial: { y: -200 },
                animate: { y: '100vh' },
                transition: {
                  duration: col.speed,
                  repeat: 1 / 0,
                  delay: col.delay,
                  ease: 'linear',
                },
                children: col.chars.map((char, i) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.span,
                    {
                      className: 'block',
                      animate: { opacity: [0.3, 1, 1, 0.5] },
                      transition: { duration: 2, repeat: 1 / 0, delay: 0.2 * i },
                      children: char,
                    },
                    i
                  )
                ),
              },
              col.id
            )
          ),
        })
      })
      CodeRainBackground.displayName = 'CodeRainBackground'
      try {
        ;((CodeRainBackground.displayName = 'CodeRainBackground'),
          (CodeRainBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/CodeRainBackground.tsx#CodeRainBackground'
            ] = {
              docgenInfo: CodeRainBackground.__docgenInfo,
              name: 'CodeRainBackground',
              path: 'components/backgrounds/CodeRainBackground.tsx#CodeRainBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/GlitchBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => GlitchBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/styled-jsx/style.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const GlitchBackground = react__WEBPACK_IMPORTED_MODULE_3__.memo(({ className }) => {
        const glitchBars = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
          const bars = [],
            colors = ['#FF0080', '#00FFFF', '#FFFF00', '#FF00FF', '#00FF00']
          for (let i = 0; i < 8; i++)
            bars.push({
              id: i,
              y: 100 * Math.random(),
              width: 100,
              height: 0.5 + 3 * Math.random(),
              color: colors[i % colors.length],
              duration: 0.05 + 0.15 * Math.random(),
              delay: 3 * Math.random(),
            })
          return bars
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `jsx-5cc58576699249db absolute inset-0 overflow-hidden ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: {
                background:
                  'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
              },
              className: 'jsx-5cc58576699249db absolute inset-0',
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(\n            0deg,\n            transparent,\n            transparent 2px,\n            rgba(0, 255, 255, 0.03) 2px,\n            rgba(0, 255, 255, 0.03) 4px\n          )',
                animation: 'scanlines 8s linear infinite',
              },
              className: 'jsx-5cc58576699249db absolute inset-0 opacity-50',
            }),
            [...Array(6)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: 80 * Math.random() + '%',
                    top: 80 * Math.random() + '%',
                    width: 100 + 200 * Math.random() + 'px',
                    height: 50 + 100 * Math.random() + 'px',
                  },
                  animate: {
                    opacity: [0, 0, 1, 1, 0],
                    x: [0, -20, 10, -5, 0],
                    scaleX: [1, 1.2, 0.8, 1.1, 1],
                  },
                  transition: {
                    duration: 0.2,
                    repeat: 1 / 0,
                    repeatDelay: 4 + 8 * Math.random(),
                    times: [0, 0.2, 0.5, 0.8, 1],
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    style: {
                      background: `linear-gradient(90deg,\n                transparent 0%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 20%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}80 50%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 80%,\n                transparent 100%)`,
                      mixBlendMode: 'screen',
                    },
                    className: 'jsx-5cc58576699249db w-full h-full',
                  }),
                },
                `block-${i}`
              )
            ),
            glitchBars.map((bar) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute w-full',
                  style: {
                    top: `${bar.y}%`,
                    height: `${bar.height}%`,
                    background: `linear-gradient(90deg,\n              transparent 0%,\n              ${bar.color} 10%,\n              ${bar.color} 90%,\n              transparent 100%)`,
                    mixBlendMode: 'screen',
                  },
                  animate: {
                    opacity: [0, 1, 1, 0],
                    scaleX: [0.8, 1.2, 1, 0.9],
                    x: [-50, 50, -30, 0],
                  },
                  transition: {
                    duration: bar.duration,
                    repeat: 1 / 0,
                    delay: bar.delay,
                    repeatDelay: 2 + 4 * Math.random(),
                  },
                },
                bar.id
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className: 'absolute inset-0 pointer-events-none',
                animate: { x: [0, -3, 2, -1, 0] },
                transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, transparent 50%)',
                    mixBlendMode: 'screen',
                  },
                  className: 'jsx-5cc58576699249db absolute inset-0',
                }),
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className: 'absolute inset-0 pointer-events-none',
                animate: { x: [0, 2, -3, 1, 0] },
                transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3, delay: 0.05 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    background: 'linear-gradient(-45deg, rgba(0,255,255,0.1) 0%, transparent 50%)',
                    mixBlendMode: 'screen',
                  },
                  className: 'jsx-5cc58576699249db absolute inset-0',
                }),
              }
            ),
            [...Array(50)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: 100 * Math.random() + '%',
                    top: 100 * Math.random() + '%',
                    width: '2px',
                    height: '2px',
                    backgroundColor: ['#FF0080', '#00FFFF', '#FFFF00', '#00FF00'][i % 4],
                  },
                  animate: { opacity: [0, 1, 0] },
                  transition: {
                    duration: 0.1,
                    repeat: 1 / 0,
                    delay: 5 * Math.random(),
                    repeatDelay: 2 * Math.random(),
                  },
                },
                `noise-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className:
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none',
                animate: { opacity: [0, 0, 0.3, 0.3, 0], scale: [0.8, 1, 1.2, 1, 0.8] },
                transition: { duration: 0.3, repeat: 1 / 0, repeatDelay: 8 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    textShadow:
                      '\n            2px 2px 0 #FF0080,\n            -2px -2px 0 #00FFFF,\n            0 0 30px #00FFFF\n          ',
                  },
                  className: 'jsx-5cc58576699249db text-8xl font-mono font-bold text-cyan-400/30',
                  children: 'ERROR',
                }),
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),
              {
                id: '5cc58576699249db',
                children:
                  '@keyframes scanlines{0%{transform:translatey(0)}100%{transform:translatey(10px)}}',
              }
            ),
          ],
        })
      })
      GlitchBackground.displayName = 'GlitchBackground'
      try {
        ;((GlitchBackground.displayName = 'GlitchBackground'),
          (GlitchBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/GlitchBackground.tsx#GlitchBackground'
            ] = {
              docgenInfo: GlitchBackground.__docgenInfo,
              name: 'GlitchBackground',
              path: 'components/backgrounds/GlitchBackground.tsx#GlitchBackground',
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
    './components/backgrounds/OrbitingAtomsBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => OrbitingAtomsBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const OrbitingAtomsBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const systems = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const systemArray = [],
            colors = ['#06B6D4', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']
          for (let i = 0; i < 8; i++)
            systemArray.push({
              id: i,
              x: 10 + 80 * Math.random(),
              y: 10 + 80 * Math.random(),
              color: colors[i % colors.length],
              scale: 0.6 + 0.4 * Math.random(),
              rotationSpeed: 10 + 20 * Math.random(),
            })
          return systemArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'absolute inset-0',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl',
                }),
              ],
            }),
            systems.map((system) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                'div',
                {
                  className: 'absolute',
                  style: {
                    left: `${system.x}%`,
                    top: `${system.y}%`,
                    transform: `translate(-50%, -50%) scale(${system.scale})`,
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                      {
                        className: 'absolute w-8 h-8',
                        style: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
                        animate: { rotate: 360 },
                        transition: {
                          duration: system.rotationSpeed,
                          repeat: 1 / 0,
                          ease: 'linear',
                        },
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'w-full h-full',
                          style: {
                            background: `linear-gradient(135deg, ${system.color}, ${system.color}66)`,
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            boxShadow: `0 0 30px ${system.color}`,
                          },
                        }),
                      }
                    ),
                    [0, 120, 240].map((angle, i) =>
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                        {
                          className: 'absolute',
                          style: {
                            width: '100px',
                            height: '100px',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          },
                          animate: { rotate: angle + 360 },
                          transition: {
                            duration: 1.5 * system.rotationSpeed,
                            repeat: 1 / 0,
                            ease: 'linear',
                            delay: 0.2 * i,
                          },
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                            className: 'absolute w-3 h-3',
                            style: {
                              left: '0',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              borderRadius: 0 === i ? '50%' : 1 === i ? '0%' : '30%',
                              backgroundColor: system.color,
                              opacity: 0.8,
                              boxShadow: `0 0 15px ${system.color}`,
                            },
                          }),
                        },
                        i
                      )
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'absolute border rounded-full opacity-20',
                      style: {
                        width: '100px',
                        height: '100px',
                        borderColor: system.color,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      },
                    }),
                  ],
                },
                system.id
              )
            ),
            [...Array(20)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: 100 * Math.random() + '%', top: 100 * Math.random() + '%' },
                  animate: { y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 180, 360] },
                  transition: {
                    duration: 10 + 10 * Math.random(),
                    repeat: 1 / 0,
                    ease: 'easeInOut',
                    delay: 5 * Math.random(),
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'w-2 h-2',
                    style: {
                      background: `linear-gradient(45deg, ${['#06B6D4', '#8B5CF6', '#EC4899'][i % 3]}, transparent)`,
                      clipPath: i % 2 == 0 ? 'polygon(50% 0%, 100% 100%, 0% 100%)' : 'none',
                      borderRadius: i % 2 == 0 ? '0' : '50%',
                      opacity: 0.6,
                    },
                  }),
                },
                `particle-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
              className: 'absolute inset-0 w-full h-full opacity-10',
              children: systems.slice(0, -1).map((system, i) => {
                const nextSystem = systems[i + 1]
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.line,
                  {
                    x1: `${system.x}%`,
                    y1: `${system.y}%`,
                    x2: `${nextSystem.x}%`,
                    y2: `${nextSystem.y}%`,
                    stroke: system.color,
                    strokeWidth: '1',
                    strokeDasharray: '5 10',
                    initial: { pathLength: 0 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.5 * i,
                    },
                  },
                  `connection-${i}`
                )
              }),
            }),
          ],
        })
      })
      OrbitingAtomsBackground.displayName = 'OrbitingAtomsBackground'
      try {
        ;((OrbitingAtomsBackground.displayName = 'OrbitingAtomsBackground'),
          (OrbitingAtomsBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/OrbitingAtomsBackground.tsx#OrbitingAtomsBackground'
            ] = {
              docgenInfo: OrbitingAtomsBackground.__docgenInfo,
              name: 'OrbitingAtomsBackground',
              path: 'components/backgrounds/OrbitingAtomsBackground.tsx#OrbitingAtomsBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/ParticleFieldBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => ParticleFieldBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const ParticleFieldBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const particles = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const particleArray = [],
            colors = ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B']
          for (let i = 0; i < 80; i++)
            particleArray.push({
              id: i,
              x: 100 * Math.random(),
              y: 100 * Math.random(),
              size: 2 * Math.random() + 0.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              duration: 15 + 20 * Math.random(),
              delay: 5 * Math.random(),
              xOffset: 40 * Math.random() - 20,
              yOffset: 40 * Math.random() - 20,
            })
          return particleArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950/20 via-black to-purple-950/20 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl',
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl',
            }),
            particles.map((particle) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: `${particle.x}%`, top: `${particle.y}%` },
                  animate: {
                    x: [0, particle.xOffset, -particle.xOffset, 0],
                    y: [0, particle.yOffset, -particle.yOffset, 0],
                  },
                  transition: {
                    duration: particle.duration,
                    repeat: 1 / 0,
                    ease: 'easeInOut',
                    delay: particle.delay,
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                    {
                      className: 'relative',
                      animate: { scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] },
                      transition: {
                        duration: 4,
                        repeat: 1 / 0,
                        ease: 'easeInOut',
                        delay: particle.delay,
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'absolute rounded-full blur-md',
                          style: {
                            width: 6 * particle.size + 'px',
                            height: 6 * particle.size + 'px',
                            backgroundColor: particle.color,
                            opacity: 0.4,
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%',
                          },
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'relative rounded-full',
                          style: {
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            boxShadow: `0 0 ${4 * particle.size}px ${particle.color}`,
                          },
                        }),
                      ],
                    }
                  ),
                },
                particle.id
              )
            ),
            [...Array(30)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute w-1 h-1 rounded-full',
                  style: { backgroundColor: '#8B5CF6', boxShadow: '0 0 4px #8B5CF6' },
                  animate: {
                    x: [
                      100 * Math.random() + 'vw',
                      100 * Math.random() + 'vw',
                      100 * Math.random() + 'vw',
                    ],
                    y: [
                      100 * Math.random() + 'vh',
                      100 * Math.random() + 'vh',
                      100 * Math.random() + 'vh',
                    ],
                    opacity: [0.2, 0.8, 0.2],
                  },
                  transition: { duration: 8 + 4 * Math.random(), repeat: 1 / 0, ease: 'linear' },
                },
                `fast-${i}`
              )
            ),
            [...Array(3)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute h-1 w-40',
                  style: {
                    background: `linear-gradient(90deg, transparent, ${['#8B5CF6', '#EC4899', '#06B6D4'][i]}, transparent)`,
                    filter: 'blur(2px)',
                    opacity: 0.3,
                  },
                  animate: { x: ['-40vw', '140vw'], y: 30 + 20 * i + 'vh', rotate: [-10, 10, -10] },
                  transition: {
                    x: { duration: 10 + 2 * i, repeat: 1 / 0, ease: 'linear' },
                    rotate: { duration: 5, repeat: 1 / 0, ease: 'easeInOut' },
                  },
                },
                `stream-${i}`
              )
            ),
          ],
        })
      })
      ParticleFieldBackground.displayName = 'ParticleFieldBackground'
      try {
        ;((ParticleFieldBackground.displayName = 'ParticleFieldBackground'),
          (ParticleFieldBackground.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/ParticleFieldBackground.tsx#ParticleFieldBackground'
            ] = {
              docgenInfo: ParticleFieldBackground.__docgenInfo,
              name: 'ParticleFieldBackground',
              path: 'components/backgrounds/ParticleFieldBackground.tsx#ParticleFieldBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/WaveformBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => WaveformBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const WaveformBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const waves = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const waveArray = []
          for (let i = 0; i < 5; i++)
            waveArray.push({
              id: i,
              amplitude: 60 + 20 * i,
              frequency: 0.01 + 0.003 * i,
              speed: 15 + 3 * i,
              yOffset: 50,
              opacity: 0.15 - 0.02 * i,
              gradient: i,
            })
          return waveArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'absolute inset-0',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl',
                }),
              ],
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('defs', {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('linearGradient', {
                      id: 'waveGradient1',
                      x1: '0%',
                      y1: '0%',
                      x2: '100%',
                      y2: '0%',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '0%',
                          stopColor: '#818CF8',
                          stopOpacity: '0',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '20%',
                          stopColor: '#818CF8',
                          stopOpacity: '0.8',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '50%',
                          stopColor: '#F472B6',
                          stopOpacity: '1',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '80%',
                          stopColor: '#06B6D4',
                          stopOpacity: '0.8',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '100%',
                          stopColor: '#06B6D4',
                          stopOpacity: '0',
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('linearGradient', {
                      id: 'waveGradient2',
                      x1: '0%',
                      y1: '0%',
                      x2: '100%',
                      y2: '0%',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '0%',
                          stopColor: '#F472B6',
                          stopOpacity: '0',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '50%',
                          stopColor: '#818CF8',
                          stopOpacity: '1',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '100%',
                          stopColor: '#F472B6',
                          stopOpacity: '0',
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('filter', {
                      id: 'glow',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feGaussianBlur', {
                          stdDeviation: '4',
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
                  ],
                }),
                waves.map((wave, index) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.path,
                    {
                      stroke: `url(#waveGradient${(index % 2) + 1})`,
                      strokeWidth: '3',
                      fill: 'none',
                      filter: 'url(#glow)',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { pathLength: 1, opacity: wave.opacity },
                      transition: {
                        pathLength: { duration: 2, ease: 'easeOut' },
                        opacity: { duration: 1 },
                      },
                      d: (() => {
                        const points = []
                        for (let x = 0; x <= 100; x += 1) {
                          const y =
                            wave.yOffset +
                            Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                          points.push(`${x},${y}`)
                        }
                        return `M ${points.join(' L ')}`
                      })(),
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('animate', {
                        attributeName: 'd',
                        values: [
                          (() => {
                            const points = []
                            for (let x = 0; x <= 100; x += 1) {
                              const y =
                                wave.yOffset +
                                Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                              points.push(`${x},${y}`)
                            }
                            return `M ${points.join(' L ')}`
                          })(),
                          (() => {
                            const points = []
                            for (let x = 0; x <= 100; x += 1) {
                              const y =
                                wave.yOffset +
                                Math.sin((x + 100) * wave.frequency * Math.PI) *
                                  wave.amplitude *
                                  0.3
                              points.push(`${x},${y}`)
                            }
                            return `M ${points.join(' L ')}`
                          })(),
                        ].join(';'),
                        dur: `${wave.speed}s`,
                        repeatCount: 'indefinite',
                      }),
                    },
                    wave.id
                  )
                ),
              ],
            }),
            [...Array(30)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: 3.3 * i + 2 + '%', top: '50%' },
                  animate: {
                    y: [0, 100 * -Math.random() - 50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, Math.random() + 0.5, 0],
                  },
                  transition: {
                    duration: 2 + 2 * Math.random(),
                    repeat: 1 / 0,
                    delay: 0.1 * i,
                    ease: 'easeInOut',
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'w-1 h-1 rounded-full',
                    style: {
                      background: `radial-gradient(circle, ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]} 0%, transparent 70%)`,
                      boxShadow: `0 0 20px ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]}`,
                    },
                  }),
                },
                `dot-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4',
              children: [...Array(60)].map((_, i) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                  {
                    className: 'flex-1 max-w-[8px] rounded-t-sm',
                    style: {
                      background: 'linear-gradient(to top, #F472B6, #818CF8, #06B6D4)',
                      opacity: 0.7,
                    },
                    animate: {
                      height: [
                        20 * Math.random() + 5 + '%',
                        40 * Math.random() + 10 + '%',
                        30 * Math.random() + 5 + '%',
                      ],
                    },
                    transition: {
                      duration: 0.5 + 0.5 * Math.random(),
                      repeat: 1 / 0,
                      ease: 'easeInOut',
                      delay: 0.02 * i,
                    },
                  },
                  `bar-${i}`
                )
              ),
            }),
            [...Array(3)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className:
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2',
                  style: {
                    borderColor: ['#818CF8', '#F472B6', '#06B6D4'][i],
                    width: '100px',
                    height: '100px',
                  },
                  animate: { scale: [1, 8, 8], opacity: [0.8, 0, 0] },
                  transition: { duration: 3, repeat: 1 / 0, delay: 1 * i, ease: 'easeOut' },
                },
                `ring-${i}`
              )
            ),
          ],
        })
      })
      WaveformBackground.displayName = 'WaveformBackground'
      try {
        ;((WaveformBackground.displayName = 'WaveformBackground'),
          (WaveformBackground.__docgenInfo = {
            description: '',
            displayName: 'WaveformBackground',
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
              'components/backgrounds/WaveformBackground.tsx#WaveformBackground'
            ] = {
              docgenInfo: WaveformBackground.__docgenInfo,
              name: 'WaveformBackground',
              path: 'components/backgrounds/WaveformBackground.tsx#WaveformBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/lucide-react/dist/esm/createLucideIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
    './node_modules/lucide-react/dist/esm/icons/chevron-down.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
      const ChevronDown = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'chevron-down',
        [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]
      )
    },
    './stories/8-examples/DemoPages.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BackgroundEffects: () => BackgroundEffects,
          DemoIndex: () => DemoIndex,
          HeroStandalone: () => HeroStandalone,
          LogoEffects: () => LogoEffects,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DemoPages_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link)
      function DemosIndex() {
        return (0, jsx_runtime.jsx)('div', {
          className: 'min-h-screen bg-black text-white p-8',
          children: (0, jsx_runtime.jsxs)('div', {
            className: 'max-w-4xl mx-auto',
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className: 'mb-8',
                children: [
                  (0, jsx_runtime.jsx)('h1', {
                    className: 'text-3xl font-bold mb-2',
                    children: 'Development Demos',
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    className: 'text-gray-400',
                    children: 'Component and effect demonstrations for development',
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'grid gap-4',
                children: [
                  {
                    title: 'Logo Effects & Keyframes',
                    description: 'ASCII animations with keyframe helper for testing',
                    path: '/demos/logo-effects',
                    new: !0,
                  },
                  {
                    title: 'Background Effects',
                    description: 'Various background patterns and effects',
                    path: '/demos/backgrounds-demo',
                  },
                  {
                    title: 'Standalone Hero',
                    description: 'Hero section without header component',
                    path: '/demos/hero-no-header',
                  },
                ].map((demo) =>
                  (0, jsx_runtime.jsxs)(
                    link_default(),
                    {
                      href: demo.path,
                      className:
                        'block p-6 border border-gray-800 rounded-lg bg-black/50 hover:bg-black/70 hover:border-gray-700 transition-all',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex items-center gap-3',
                          children: [
                            (0, jsx_runtime.jsx)('h2', {
                              className: 'text-xl font-semibold',
                              children: demo.title,
                            }),
                            demo.new &&
                              (0, jsx_runtime.jsx)('span', {
                                className:
                                  'px-2 py-1 text-xs font-mono bg-purple-500/20 text-purple-400 rounded',
                                children: 'NEW',
                              }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-gray-400 mt-2',
                          children: demo.description,
                        }),
                      ],
                    },
                    demo.path
                  )
                ),
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'mt-12 p-4 border border-gray-800 rounded-lg bg-black/50',
                children: (0, jsx_runtime.jsxs)('p', {
                  className: 'text-sm text-gray-500 font-mono',
                  children: [
                    'Access demos directly: ',
                    (0, jsx_runtime.jsx)('code', {
                      className: 'text-gray-400',
                      children: '/demos/[demo-name]',
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      }
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        navigation = __webpack_require__(
          './node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs'
        ),
        proxy = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        AnimatedLogo = __webpack_require__('./components/AnimatedLogo.tsx')
      const vercelClasses = {
        panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
        button: {
          base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150',
          active: 'bg-[#fafafa] text-[#000]',
          inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
        },
        text: {
          label: 'text-[#666] text-[11px] font-normal',
          value: 'text-[#fafafa] font-mono text-[11px]',
          key: 'font-mono text-[11px] text-[#666]',
          description: 'text-[#555] text-[10px]',
        },
        animation: { duration: 0.15, easeOut: { duration: 0.15 } },
      }
      function LogoWithEffect({ effect, forceFrame }) {
        return (0, jsx_runtime.jsx)(AnimatedLogoForced, {
          glitchMode: effect,
          forcedFrame: forceFrame,
        })
      }
      function AnimatedLogoForced({ glitchMode, forcedFrame, forcedIntensity = 1 }) {
        const [frame, setFrame] = (0, react.useState)(forcedFrame || 0),
          [invertedCharIndex, setInvertedCharIndex] = (0, react.useState)(-1),
          [isHovered, setIsHovered] = (0, react.useState)(!1),
          [glitchIntensity, setGlitchIntensity] = (0, react.useState)(forcedIntensity),
          asciiLogo = [
            '█▄ █ █▀▀ █ █ █ ▀█▀ █ █',
            '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█',
            '█  █ █▄▄  ▀ ▀   █  █ █',
          ],
          asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']
        ;((0, react.useEffect)(() => {
          if ('single-invert' === glitchMode) {
            const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length
            setInvertedCharIndex(Math.floor(Math.random() * totalChars))
          }
        }, [glitchMode]),
          (0, react.useEffect)(() => {
            if (void 0 === forcedFrame) {
              const interval = setInterval(() => {
                if (
                  (setFrame((prev) => prev + 1),
                  'normal' !== glitchMode && 'single-invert' !== glitchMode)
                ) {
                  const wave = 0.3 * Math.sin(0.002 * Date.now()) + 0.7
                  setGlitchIntensity(wave)
                } else 'single-invert' === glitchMode && setGlitchIntensity(1)
              }, 20)
              return () => clearInterval(interval)
            }
            setGlitchIntensity(forcedIntensity)
          }, [forcedFrame, glitchMode, forcedIntensity]))
        const transformChar = (char, index, lineIndex, currentFrame, isAISuffix = !1) => {
          if (' ' === char) return char
          if (glitchIntensity < 0.01) return char
          const adjustedIndex = isAISuffix ? index + 24 : index,
            adjustedLineIndex = isAISuffix ? lineIndex + 3 : lineIndex
          switch (glitchMode) {
            case 'normal':
            case 'rainbow':
            case 'single-invert':
            default:
              return char
            case 'typewriter':
              const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length,
                typewriterProgress = (2 * currentFrame * glitchIntensity) % (totalChars + 20),
                distanceFromCursor = Math.abs(
                  adjustedIndex + 25 * adjustedLineIndex - typewriterProgress
                )
              return adjustedIndex + 25 * adjustedLineIndex > typewriterProgress
                ? Math.random() < glitchIntensity
                  ? '░'
                  : char
                : distanceFromCursor < 3
                  ? ' ' === char
                    ? char
                    : Math.random() < glitchIntensity
                      ? '▓'
                      : char
                  : char
            case 'blocks':
              const blockChars = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫']
              if (Math.random() < glitchIntensity) {
                const wave = 0.5 * Math.sin(0.05 * currentFrame + 0.3 * adjustedIndex) + 0.5,
                  blockIndex = Math.floor(wave * blockChars.length * glitchIntensity)
                return ' ' !== char && '°' !== char ? blockChars[blockIndex] : char
              }
              return char
            case 'ascii-rain':
              const bars = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
                fallPosition = (currentFrame * (0.1 * glitchIntensity) + 2 * adjustedIndex) % 20
              if (Math.random() < 0.3 * glitchIntensity) {
                if (fallPosition < bars.length) return bars[Math.floor(fallPosition)]
                if (fallPosition < bars.length + 2) return '░'
              }
              return char
            case 'corruption':
              if (Math.random() < 0.15 * glitchIntensity) {
                const corruptChars = [
                  '•',
                  '◦',
                  '◉',
                  '○',
                  '◌',
                  '◍',
                  '◎',
                  '●',
                  '◢',
                  '◣',
                  '◤',
                  '◥',
                  '▲',
                  '▼',
                  '◀',
                  '▶',
                ]
                return corruptChars[Math.floor(Math.random() * corruptChars.length)]
              }
              return char
            case 'scan-lines':
              const scanPosition = (currentFrame / 2) % 10,
                scanInt =
                  Math.exp(-Math.abs(3 * adjustedLineIndex - scanPosition)) * glitchIntensity
              return scanInt > 0.3
                ? ' ' === char
                  ? char
                  : '▬'
                : scanInt > 0.1
                  ? ' ' === char
                    ? char
                    : '═'
                  : char
            case 'pixel-sort':
              const shades = ['░', '▒', '▓', '█'],
                sortWave = 0.5 * Math.sin(0.1 * currentFrame + adjustedLineIndex) + 0.5,
                sortThreshold = 0.5 * Math.sin(0.05 * currentFrame) + 0.5
              if (
                Math.random() < sortThreshold * glitchIntensity * 0.3 &&
                adjustedIndex > 20 * sortWave
              ) {
                return shades[Math.floor((0.2 * currentFrame + adjustedIndex) % shades.length)]
              }
              return char
          }
        }
        return (0, jsx_runtime.jsx)('div', {
          className: 'flex items-center',
          onMouseEnter: () => setIsHovered(!0),
          onMouseLeave: () => setIsHovered(!1),
          children: (0, jsx_runtime.jsxs)('pre', {
            className:
              'font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1',
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: 'relative',
                children: (0, jsx_runtime.jsx)('div', {
                  className: 'relative',
                  children: asciiLogo.map((line, lineIndex) => {
                    let charOffset = 0
                    for (let i = 0; i < lineIndex; i++) charOffset += asciiLogo[i].length
                    return (0, jsx_runtime.jsx)(
                      proxy.P.div,
                      {
                        className: 'text-white',
                        style: {
                          filter:
                            'scan-lines' === glitchMode && lineIndex === (frame / 2) % 3
                              ? 'brightness(1.5) contrast(1.2)'
                              : 'corruption' === glitchMode
                                ? `hue-rotate(${30 * Math.sin(0.05 * frame)}deg)`
                                : 'none',
                        },
                        children: line.split('').map((char, charIndex) => {
                          const isInverted = charOffset + charIndex === invertedCharIndex,
                            displayChar = transformChar(char, charIndex, lineIndex, frame),
                            isGlitching = displayChar !== char,
                            waveOffset = 30 * Math.sin(0.03 * frame + 2 * lineIndex),
                            hue = (((15 * charIndex - 2 * frame + waveOffset) % 360) + 360) % 360,
                            saturation =
                              (85 + 10 * Math.sin(0.05 * frame)) *
                              (isHovered || 'rainbow' === glitchMode ? 1 : 0.3 * glitchIntensity),
                            lightness = 55 + 10 * Math.sin(0.07 * frame + 0.2 * charIndex),
                            baseColor =
                              (isHovered || 'rainbow' === glitchMode
                                ? 1
                                : 'normal' === glitchMode
                                  ? 0
                                  : 0.3 * glitchIntensity) > 0
                                ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
                                : 'white'
                          return (0, jsx_runtime.jsx)(
                            proxy.P.span,
                            {
                              className: 'inline-block',
                              style: {
                                opacity: ' ' === displayChar ? 0 : 1,
                                color: isInverted
                                  ? `rgba(0, 0, 0, ${glitchIntensity})`
                                  : isGlitching && 'typewriter' !== glitchMode
                                    ? `rgba(150, 150, 150, ${glitchIntensity})`
                                    : baseColor,
                                backgroundColor: isInverted
                                  ? `rgba(255, 255, 255, ${glitchIntensity})`
                                  : 'transparent',
                                padding: isInverted ? '0 1px' : '0',
                              },
                              children: displayChar,
                            },
                            charIndex
                          )
                        }),
                      },
                      lineIndex
                    )
                  }),
                }),
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'text-gray-400 text-[8px] leading-[8px] -mt-0.5',
                children: asciiDotAI.map((line, lineIndex) =>
                  (0, jsx_runtime.jsx)(
                    proxy.P.div,
                    {
                      children: line.split('').map((char, charIndex) => {
                        const globalCharIndexAI =
                            asciiLogo.join('').length + 8 * lineIndex + charIndex,
                          isInverted =
                            'single-invert' === glitchMode &&
                            globalCharIndexAI === invertedCharIndex,
                          displayChar = transformChar(char, charIndex, lineIndex, frame, !0),
                          isGlitching = displayChar !== char,
                          continuedIndex = 24 + charIndex,
                          waveOffset = 30 * Math.sin(0.03 * frame + 2 * lineIndex),
                          hue =
                            (((15 * continuedIndex - 2 * frame + waveOffset) % 360) + 360) % 360,
                          saturation =
                            (85 + 10 * Math.sin(0.05 * frame)) *
                            (isHovered || 'rainbow' === glitchMode ? 1 : 0.3 * glitchIntensity),
                          lightness = 55 + 10 * Math.sin(0.07 * frame + 0.2 * charIndex),
                          baseColor =
                            (isHovered || 'rainbow' === glitchMode
                              ? 1
                              : 'normal' === glitchMode
                                ? 0
                                : 0.3 * glitchIntensity) > 0
                              ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
                              : 'white'
                        return (0, jsx_runtime.jsx)(
                          'span',
                          {
                            style: {
                              opacity: ' ' === displayChar ? 0 : 1,
                              color: isInverted
                                ? `rgba(0, 0, 0, ${glitchIntensity})`
                                : isGlitching && 'typewriter' !== glitchMode
                                  ? `rgba(150, 150, 150, ${glitchIntensity})`
                                  : baseColor,
                              backgroundColor: isInverted
                                ? `rgba(255, 255, 255, ${glitchIntensity})`
                                : 'transparent',
                              padding: isInverted ? '0 1px' : '0',
                              transition: 'none',
                            },
                            children: displayChar,
                          },
                          charIndex
                        )
                      }),
                    },
                    lineIndex
                  )
                ),
              }),
            ],
          }),
        })
      }
      function EffectRow({
        effect,
        label,
        description,
        keyframes = [0, 60, 120, 180, 240, 300],
        index,
      }) {
        return (0, jsx_runtime.jsx)(proxy.P.div, {
          className: vercelClasses.panel,
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { ...vercelClasses.animation.easeOut, delay: 0.02 * index },
          children: (0, jsx_runtime.jsxs)('div', {
            className: 'p-2',
            children: [
              (0, jsx_runtime.jsxs)('div', {
                className: 'flex items-center justify-between mb-2',
                children: [
                  (0, jsx_runtime.jsx)('h3', {
                    className: 'text-white text-xs font-medium',
                    children: label,
                  }),
                  (0, jsx_runtime.jsx)('p', {
                    className: 'text-[#666] text-[10px]',
                    children: description,
                  }),
                ],
              }),
              (0, jsx_runtime.jsxs)('div', {
                className: 'flex gap-3 items-center',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex-shrink-0',
                    children: [
                      (0, jsx_runtime.jsx)('div', {
                        className: 'text-[10px] text-[#666] mb-1',
                        children: 'Live',
                      }),
                      (0, jsx_runtime.jsx)('div', {
                        className: 'p-1.5 bg-[#050505] border border-[#222] rounded',
                        children: (0, jsx_runtime.jsx)(LogoWithEffect, { effect }),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'flex gap-1.5 overflow-x-auto',
                    children: keyframes.map((kf) =>
                      (0, jsx_runtime.jsxs)(
                        'div',
                        {
                          className: 'flex-shrink-0',
                          children: [
                            (0, jsx_runtime.jsx)('div', {
                              className: 'text-center text-[9px] font-mono text-[#555]',
                              children: kf,
                            }),
                            (0, jsx_runtime.jsx)('div', {
                              className: 'p-1 bg-[#050505] border border-[#222] rounded',
                              children: (0, jsx_runtime.jsx)(LogoWithEffect, {
                                effect,
                                forceFrame: kf,
                              }),
                            }),
                          ],
                        },
                        kf
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        })
      }
      function HeaderControls({ keyframes, onCopyUrl }) {
        return (0, jsx_runtime.jsx)(proxy.P.div, {
          className: 'fixed top-4 right-4 z-40',
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: vercelClasses.animation.easeOut,
          children: (0, jsx_runtime.jsx)('div', {
            className: `${vercelClasses.panel} p-1`,
            children: (0, jsx_runtime.jsx)('div', {
              className: 'flex items-center',
              children: (0, jsx_runtime.jsx)('button', {
                onClick: onCopyUrl,
                className: `${vercelClasses.button.base} ${vercelClasses.button.inactive}`,
                children: (0, jsx_runtime.jsxs)('span', {
                  className: vercelClasses.text.key,
                  children: ['?keyframes=', keyframes.join(',')],
                }),
              }),
            }),
          }),
        })
      }
      function LogoEffectsDemo() {
        const searchParams = (0, navigation.useSearchParams)(),
          [customKeyframes, setCustomKeyframes] = (0, react.useState)([])
        ;(0, react.useEffect)(() => {
          const keyframesParam = searchParams.get('keyframes')
          if (keyframesParam) {
            const frames = keyframesParam
              .split(',')
              .map((f) => parseInt(f))
              .filter((f) => !isNaN(f))
            frames.length > 0 && setCustomKeyframes(frames)
          }
        }, [searchParams])
        const defaultKeyframes =
          customKeyframes.length > 0 ? customKeyframes : [0, 60, 120, 180, 240]
        return (0, jsx_runtime.jsxs)('div', {
          className: 'min-h-screen bg-[#000]',
          children: [
            (0, jsx_runtime.jsx)(HeaderControls, {
              keyframes: defaultKeyframes,
              onCopyUrl: () => {
                const url = `${window.location.origin}/demos/logo-effects?keyframes=${defaultKeyframes.join(',')}`
                navigator.clipboard.writeText(url)
              },
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'pt-12 p-4',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'max-w-[1200px] mx-auto',
                children: [
                  (0, jsx_runtime.jsxs)(proxy.P.div, {
                    className: 'mb-4',
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.15 },
                    children: [
                      (0, jsx_runtime.jsx)('h2', {
                        className: 'text-white text-xs mb-2 opacity-60',
                        children: 'Color Options',
                      }),
                      (0, jsx_runtime.jsx)('div', {
                        className: 'grid grid-cols-3 md:grid-cols-6 gap-2',
                        children: [
                          { label: 'Default', props: {} },
                          { label: 'No Hover Color', props: { enableColorOnHover: !1 } },
                          { label: 'Glitch Colors', props: { enableColorOnGlitch: !0 } },
                          { label: 'Low Saturation', props: { baseSaturation: 30 } },
                          { label: 'High Saturation', props: { baseSaturation: 100 } },
                          { label: 'Half Intensity', props: { colorIntensity: 0.5 } },
                        ].map((config, index) =>
                          (0, jsx_runtime.jsx)(
                            proxy.P.div,
                            {
                              className: vercelClasses.panel,
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                ...vercelClasses.animation.easeOut,
                                delay: 0.02 * index,
                              },
                              children: (0, jsx_runtime.jsxs)('div', {
                                className: 'p-2',
                                children: [
                                  (0, jsx_runtime.jsx)('div', {
                                    className: 'mb-1',
                                    children: (0, jsx_runtime.jsx)('h3', {
                                      className: 'text-white text-[10px]',
                                      children: config.label,
                                    }),
                                  }),
                                  (0, jsx_runtime.jsx)('div', {
                                    className: 'p-1 bg-[#050505] border border-[#222] rounded',
                                    children: (0, jsx_runtime.jsx)(AnimatedLogo.H, {
                                      ...config.props,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            config.label
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)('h2', {
                    className: 'text-white text-xs mb-2 opacity-60',
                    children: 'Glitch Effects',
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'grid grid-cols-1 lg:grid-cols-2 gap-2',
                    children: [
                      {
                        id: 'normal',
                        label: 'Normal',
                        description: 'Clean white ASCII text - baseline',
                      },
                      {
                        id: 'rainbow',
                        label: 'Rainbow Wave',
                        description: 'Animated HSL gradient with wave distortion',
                      },
                      {
                        id: 'typewriter',
                        label: 'Typewriter Glow',
                        description: 'Progressive reveal with cursor glow',
                      },
                      {
                        id: 'blocks',
                        label: 'Morphing Wave',
                        description: 'Smooth sine wave block transitions',
                      },
                      {
                        id: 'ascii-rain',
                        label: 'Matrix Fall',
                        description: 'Cascading character waterfall',
                      },
                      {
                        id: 'corruption',
                        label: 'Glitch Pulse',
                        description: 'Pulsing corruption intensity',
                      },
                      {
                        id: 'scan-lines',
                        label: 'CRT Scanner',
                        description: 'Realistic CRT scan with decay',
                      },
                      {
                        id: 'pixel-sort',
                        label: 'Data Mosh',
                        description: 'Dynamic threshold pixel sorting',
                      },
                      {
                        id: 'single-invert',
                        label: 'Invert Highlight',
                        description: 'High contrast character inversion',
                      },
                    ].map((effect, index) =>
                      (0, jsx_runtime.jsx)(
                        EffectRow,
                        {
                          effect: effect.id,
                          label: effect.label,
                          description: effect.description,
                          keyframes: [0, 60, 120, 180, 240],
                          index,
                        },
                        effect.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        })
      }
      var WarpBackground = __webpack_require__('./components/WarpBackground.tsx'),
        utils = __webpack_require__('./lib/utils.ts'),
        NeuralNetworkBackground = __webpack_require__(
          './components/backgrounds/NeuralNetworkBackground.tsx'
        ),
        CodeRainBackground = __webpack_require__('./components/backgrounds/CodeRainBackground.tsx'),
        OrbitingAtomsBackground = __webpack_require__(
          './components/backgrounds/OrbitingAtomsBackground.tsx'
        ),
        DataFlowBackground = __webpack_require__('./components/backgrounds/DataFlowBackground.tsx'),
        WaveformBackground = __webpack_require__('./components/backgrounds/WaveformBackground.tsx'),
        GlitchBackground = __webpack_require__('./components/backgrounds/GlitchBackground.tsx'),
        ParticleFieldBackground = __webpack_require__(
          './components/backgrounds/ParticleFieldBackground.tsx'
        )
      const WarpBackgroundAlternatives = react.memo(
        ({ children, className, variant = 'neural', ...props }) => {
          const backgrounds = {
            neural: (0, jsx_runtime.jsx)(NeuralNetworkBackground.U, {}),
            coderain: (0, jsx_runtime.jsx)(CodeRainBackground.K, {}),
            atoms: (0, jsx_runtime.jsx)(OrbitingAtomsBackground.v, {}),
            dataflow: (0, jsx_runtime.jsx)(DataFlowBackground.v, {}),
            waveform: (0, jsx_runtime.jsx)(WaveformBackground.w, {}),
            glitch: (0, jsx_runtime.jsx)(GlitchBackground.w, {}),
            particle: (0, jsx_runtime.jsx)(ParticleFieldBackground.v, {}),
          }
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, utils.cn)('relative overflow-hidden', className),
            ...props,
            children: [
              (0, jsx_runtime.jsx)('div', { className: 'absolute inset-0 bg-black' }),
              backgrounds[variant],
              (0, jsx_runtime.jsx)('div', {
                className:
                  'absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none',
              }),
              (0, jsx_runtime.jsx)('div', { className: 'relative z-10', children }),
            ],
          })
        }
      )
      WarpBackgroundAlternatives.displayName = 'WarpBackgroundAlternatives'
      try {
        ;((WarpBackgroundAlternatives.displayName = 'WarpBackgroundAlternatives'),
          (WarpBackgroundAlternatives.__docgenInfo = {
            description: '',
            displayName: 'WarpBackgroundAlternatives',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"neural"' },
                    { value: '"coderain"' },
                    { value: '"atoms"' },
                    { value: '"dataflow"' },
                    { value: '"waveform"' },
                    { value: '"glitch"' },
                    { value: '"particle"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/WarpBackgroundAlternatives.tsx#WarpBackgroundAlternatives'
            ] = {
              docgenInfo: WarpBackgroundAlternatives.__docgenInfo,
              name: 'WarpBackgroundAlternatives',
              path: 'components/WarpBackgroundAlternatives.tsx#WarpBackgroundAlternatives',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      const backgrounds = [
          { id: 'neural', name: 'Neural', variant: 'neural', key: '1' },
          { id: 'particle', name: 'Particle', variant: 'particle', key: '2' },
          { id: 'glitch', name: 'Glitch', variant: 'glitch', key: '3' },
          { id: 'waveform', name: 'Wave', variant: 'waveform', key: '4' },
          { id: 'dataflow', name: 'Data', variant: 'dataflow', key: '5' },
          { id: 'coderain', name: 'Matrix', variant: 'coderain', key: '6' },
          { id: 'atoms', name: 'Atoms', variant: 'atoms', key: '7' },
          { id: 'original', name: 'Warp', key: '8', isOriginal: !0 },
        ],
        page_vercelClasses = {
          panel: 'bg-[#0a0a0a] border border-[#333] rounded-md',
          button: {
            base: 'px-2 py-1 rounded-md text-[12px] font-normal transition-all duration-150 flex items-center gap-1.5',
            active: 'bg-[#fafafa] text-[#000]',
            inactive: 'text-[#888] hover:text-[#fafafa] hover:bg-[#111]',
          },
          text: {
            label: 'text-[#666] text-[11px]',
            value: 'text-[#fafafa] font-mono text-[11px]',
            key: 'font-mono text-[11px] opacity-50',
          },
          animation: { duration: 0.15, easeOut: { duration: 0.15 } },
        }
      function BackgroundSelector({ backgrounds, selected, onSelect }) {
        return (0, jsx_runtime.jsx)(proxy.P.div, {
          className: 'fixed top-4 left-4 z-50',
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: page_vercelClasses.animation.easeOut,
          children: (0, jsx_runtime.jsx)('div', {
            className: `${page_vercelClasses.panel} p-1`,
            children: (0, jsx_runtime.jsx)('div', {
              className: 'flex items-center gap-1',
              children: backgrounds.map((bg) =>
                (0, jsx_runtime.jsxs)(
                  'button',
                  {
                    onClick: () => onSelect(bg.id, bg.key),
                    className: `\n                ${page_vercelClasses.button.base}\n                ${selected === bg.id ? page_vercelClasses.button.active : page_vercelClasses.button.inactive}\n              `,
                    children: [
                      (0, jsx_runtime.jsx)('span', {
                        className: page_vercelClasses.text.key,
                        children: bg.key,
                      }),
                      (0, jsx_runtime.jsx)('span', { children: bg.name }),
                    ],
                  },
                  bg.id
                )
              ),
            }),
          }),
        })
      }
      function PerformanceMetrics({ variant }) {
        return (0, jsx_runtime.jsx)(proxy.P.div, {
          className: 'fixed top-4 right-4 z-40',
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: page_vercelClasses.animation.easeOut,
          children: (0, jsx_runtime.jsx)('div', {
            className: `${page_vercelClasses.panel} px-3 py-2 bg-[#0a0a0a]/90 backdrop-blur-sm`,
            children: (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(MetricItem, { label: 'Variant', value: variant }),
                (0, jsx_runtime.jsx)(MetricItem, { label: 'Type', value: 'WebGL' }),
              ],
            }),
          }),
        })
      }
      function MetricItem({ label, value }) {
        return (0, jsx_runtime.jsxs)('div', {
          className: 'flex items-center gap-1.5',
          children: [
            (0, jsx_runtime.jsxs)('span', {
              className: page_vercelClasses.text.label,
              children: [label, ':'],
            }),
            (0, jsx_runtime.jsx)('span', {
              className: page_vercelClasses.text.value,
              children: value,
            }),
          ],
        })
      }
      function BackgroundsDemoContent() {
        var _backgrounds_find
        const bgParam = (0, navigation.useSearchParams)().get('bg'),
          initialBg =
            (bgParam &&
              (null === (_backgrounds_find = backgrounds.find((b) => b.key === bgParam)) ||
              void 0 === _backgrounds_find
                ? void 0
                : _backgrounds_find.id)) ||
            'neural',
          [selected, setSelected] = (0, react.useState)(initialBg)
        ;((0, react.useEffect)(() => {
          if (bgParam) {
            const bg = backgrounds.find((b) => b.key === bgParam)
            bg && setSelected(bg.id)
          }
        }, [bgParam]),
          (0, react.useEffect)(() => {
            const handleKeyPress = (e) => {
              const bg = backgrounds.find((b) => b.key === e.key)
              bg && (setSelected(bg.id), window.history.pushState(null, '', `?bg=${bg.key}`))
            }
            return (
              window.addEventListener('keypress', handleKeyPress),
              () => window.removeEventListener('keypress', handleKeyPress)
            )
          }, []))
        const currentBg = backgrounds.find((bg) => bg.id === selected)
        return (0, jsx_runtime.jsxs)('div', {
          className: 'min-h-screen bg-black relative overflow-hidden',
          children: [
            (0, jsx_runtime.jsx)(BackgroundSelector, {
              backgrounds,
              selected,
              onSelect: (bgId, bgKey) => {
                ;(setSelected(bgId), window.history.pushState(null, '', `?bg=${bgKey}`))
              },
            }),
            (0, jsx_runtime.jsx)(PerformanceMetrics, { variant: selected }),
            (0, jsx_runtime.jsx)('div', {
              className: 'absolute inset-0',
              children: (null == currentBg ? void 0 : currentBg.isOriginal)
                ? (0, jsx_runtime.jsx)(WarpBackground.N, { className: 'min-h-screen' })
                : (0, jsx_runtime.jsx)(WarpBackgroundAlternatives, {
                    variant: (null == currentBg ? void 0 : currentBg.variant) || 'neural',
                    className: 'min-h-screen',
                  }),
            }),
          ],
        })
      }
      function BackgroundsDemo() {
        return (0, jsx_runtime.jsx)(react.Suspense, {
          fallback: (0, jsx_runtime.jsx)('div', {
            className: 'min-h-screen bg-black flex items-center justify-center',
            children: (0, jsx_runtime.jsx)('div', {
              className: page_vercelClasses.text.label,
              children: 'Loading...',
            }),
          }),
          children: (0, jsx_runtime.jsx)(BackgroundsDemoContent, {}),
        })
      }
      var arrow_right = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/arrow-right.js'
        ),
        chevron_down = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/chevron-down.js'
        )
      function HeroSectionNoHeader({
        title = { line1: 'I ship AI products', line2: 'at massive scale.' },
        subtitle = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
        primaryCTA = { text: 'See My Work', href: '#projects' },
        secondaryCTA = { text: 'Get in Touch', href: '/contact' },
      }) {
        return (0, jsx_runtime.jsx)('section', {
          className: 'relative min-h-screen bg-black text-white overflow-hidden',
          children: (0, jsx_runtime.jsxs)(WarpBackgroundAlternatives, {
            variant: 'neural',
            className: 'absolute inset-0',
            children: [
              (0, jsx_runtime.jsx)('div', {
                className:
                  'relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8',
                children: (0, jsx_runtime.jsx)('div', {
                  className: 'relative z-10 max-w-3xl mx-auto text-center',
                  children: (0, jsx_runtime.jsxs)(proxy.P.div, {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1 },
                    className: 'space-y-8',
                    children: [
                      (0, jsx_runtime.jsx)(proxy.P.div, {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.2, duration: 0.8 },
                        className: 'mb-12',
                        children: (0, jsx_runtime.jsx)('span', {
                          className: 'text-sm font-light tracking-[0.3em] text-white/60 uppercase',
                          children: 'Newth.AI',
                        }),
                      }),
                      (0, jsx_runtime.jsxs)('h1', {
                        className:
                          'text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-extralight tracking-tight leading-[1.05] text-white',
                        children: [
                          (0, jsx_runtime.jsx)(proxy.P.span, {
                            className: 'block',
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 0.4, duration: 0.8 },
                            children: title.line1,
                          }),
                          (0, jsx_runtime.jsx)(proxy.P.span, {
                            className:
                              'block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-light',
                            initial: { opacity: 0, x: 20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 0.6, duration: 0.8 },
                            children: title.line2,
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(proxy.P.p, {
                        className:
                          'mx-auto max-w-2xl text-lg text-gray-400 font-light leading-relaxed',
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.8, duration: 1 },
                        children: subtitle,
                      }),
                      (0, jsx_runtime.jsxs)(proxy.P.div, {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 1 },
                        className:
                          'flex flex-col sm:flex-row gap-4 justify-center items-center pt-8',
                        children: [
                          (0, jsx_runtime.jsxs)(link_default(), {
                            href: primaryCTA.href,
                            className:
                              'group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]',
                            children: [
                              (0, jsx_runtime.jsxs)('span', {
                                className: 'relative z-10 flex items-center',
                                children: [
                                  primaryCTA.text,
                                  (0, jsx_runtime.jsx)(arrow_right.A, {
                                    className:
                                      'ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1',
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsx)('div', {
                                className:
                                  'absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsx)(link_default(), {
                            href: secondaryCTA.href,
                            className:
                              'px-10 py-4 rounded-full text-sm font-medium text-white/80 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white',
                            children: secondaryCTA.text,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, jsx_runtime.jsx)(proxy.P.div, {
                className: 'absolute bottom-12 left-1/2 transform -translate-x-1/2',
                animate: { y: [0, 10, 0] },
                transition: { duration: 2.5, repeat: 1 / 0, ease: 'easeInOut' },
                children: (0, jsx_runtime.jsx)(chevron_down.A, {
                  className: 'w-6 h-6 text-white/30',
                }),
              }),
              (0, jsx_runtime.jsx)(proxy.P.nav, {
                className: 'absolute top-8 right-8 flex gap-3',
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 1.2, duration: 0.8 },
                children: ['Projects', 'Work', 'GitHub'].map((item) =>
                  (0, jsx_runtime.jsx)(
                    link_default(),
                    {
                      href: 'GitHub' === item ? 'https://github.com' : `#${item.toLowerCase()}`,
                      className:
                        'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-150',
                      title: item,
                    },
                    item
                  )
                ),
              }),
            ],
          }),
        })
      }
      try {
        ;((HeroSectionNoHeader.displayName = 'HeroSectionNoHeader'),
          (HeroSectionNoHeader.__docgenInfo = {
            description: '',
            displayName: 'HeroSectionNoHeader',
            props: {
              title: {
                defaultValue: {
                  value:
                    "{\n    line1: 'I ship AI products',\n    line2: 'at massive scale.',\n  }",
                },
                description: '',
                name: 'title',
                required: !1,
                type: { name: '{ line1: string; line2: string; }' },
              },
              subtitle: {
                defaultValue: {
                  value:
                    'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
                },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              primaryCTA: {
                defaultValue: { value: "{\n    text: 'See My Work',\n    href: '#projects',\n  }" },
                description: '',
                name: 'primaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
              secondaryCTA: {
                defaultValue: { value: "{\n    text: 'Get in Touch',\n    href: '/contact',\n  }" },
                description: '',
                name: 'secondaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/sections/HeroSectionNoHeader.tsx#HeroSectionNoHeader'
            ] = {
              docgenInfo: HeroSectionNoHeader.__docgenInfo,
              name: 'HeroSectionNoHeader',
              path: 'components/sections/HeroSectionNoHeader.tsx#HeroSectionNoHeader',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      function HeroNoHeaderPage() {
        return (0, jsx_runtime.jsx)(HeroSectionNoHeader, {})
      }
      const DemoPages_stories = {
          title: 'Examples/Pages/Demos',
          parameters: { layout: 'fullscreen' },
        },
        DemoIndex = {
          render: () => (0, jsx_runtime.jsx)(DemosIndex, {}),
          parameters: {
            docs: { description: { story: 'Demo index page showing all available demos' } },
          },
        },
        LogoEffects = {
          render: () => (0, jsx_runtime.jsx)(LogoEffectsDemo, {}),
          parameters: {
            docs: {
              description: { story: 'Logo animation effects with ASCII art and keyframe testing' },
            },
          },
        },
        BackgroundEffects = {
          render: () => (0, jsx_runtime.jsx)(BackgroundsDemo, {}),
          parameters: {
            docs: { description: { story: 'All background effects showcase with live switching' } },
          },
        },
        HeroStandalone = {
          render: () => (0, jsx_runtime.jsx)(HeroNoHeaderPage, {}),
          parameters: {
            docs: { description: { story: 'Hero section without navigation header' } },
          },
        },
        __namedExportsOrder = ['DemoIndex', 'LogoEffects', 'BackgroundEffects', 'HeroStandalone']
      ;((DemoIndex.parameters = {
        ...DemoIndex.parameters,
        docs: {
          ...DemoIndex.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <DemosIndex />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Demo index page showing all available demos'\n      }\n    }\n  }\n}",
            ...DemoIndex.parameters?.docs?.source,
          },
        },
      }),
        (LogoEffects.parameters = {
          ...LogoEffects.parameters,
          docs: {
            ...LogoEffects.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <LogoEffectsPage />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Logo animation effects with ASCII art and keyframe testing'\n      }\n    }\n  }\n}",
              ...LogoEffects.parameters?.docs?.source,
            },
          },
        }),
        (BackgroundEffects.parameters = {
          ...BackgroundEffects.parameters,
          docs: {
            ...BackgroundEffects.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <BackgroundsDemo />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'All background effects showcase with live switching'\n      }\n    }\n  }\n}",
              ...BackgroundEffects.parameters?.docs?.source,
            },
          },
        }),
        (HeroStandalone.parameters = {
          ...HeroStandalone.parameters,
          docs: {
            ...HeroStandalone.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <HeroNoHeader />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Hero section without navigation header'\n      }\n    }\n  }\n}",
              ...HeroStandalone.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
