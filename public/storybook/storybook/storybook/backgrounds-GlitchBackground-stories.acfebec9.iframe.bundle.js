;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [8964],
  {
    './components/backgrounds/GlitchBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithNeonText: () => WithNeonText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_GlitchBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/backgrounds/GlitchBackground.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Backgrounds/Glitch',
          component: _components_backgrounds_GlitchBackground__WEBPACK_IMPORTED_MODULE_1__.w,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: {
                component: 'Glitch effect animated background with distortion patterns',
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
                  _components_backgrounds_GlitchBackground__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'GLITCH',
                  }),
                }),
              ],
            }),
        },
        WithNeonText = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_GlitchBackground__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className:
                      'text-6xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
                    children: 'CYBERPUNK',
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'WithNeonText']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <GlitchBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">GLITCH</h1>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithNeonText.parameters = {
          ...WithNeonText.parameters,
          docs: {
            ...WithNeonText.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <GlitchBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-6xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">\n          CYBERPUNK\n        </h1>\n      </div>\n    </div>\n}',
              ...WithNeonText.parameters?.docs?.source,
            },
          },
        }))
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
              'components/backgrounds/GlitchBackground.stories.tsx#GlitchBackground'
            ] = {
              docgenInfo: GlitchBackground.__docgenInfo,
              name: 'GlitchBackground',
              path: 'components/backgrounds/GlitchBackground.stories.tsx#GlitchBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/GlitchBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
    './node_modules/styled-jsx/style.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__('./node_modules/styled-jsx/dist/index/index.js').style
    },
  },
])
