'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9150],
  {
    './components/backgrounds/WaveformBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithMusicTheme: () => WithMusicTheme,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_WaveformBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/WaveformBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Backgrounds/Wave',
          component: _components_backgrounds_WaveformBackground__WEBPACK_IMPORTED_MODULE_1__.w,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: { component: 'Animated audio waveform visualization background' },
            },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_WaveformBackground__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'Sound Waves',
                  }),
                }),
              ],
            }),
        },
        WithMusicTheme = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_WaveformBackground__WEBPACK_IMPORTED_MODULE_1__.w,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center text-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className:
                          'text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text',
                        children: 'Audio Visualizer',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-gray-300',
                        children: 'Rhythmic waveform animations',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'WithMusicTheme']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <WaveformBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">Sound Waves</h1>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithMusicTheme.parameters = {
          ...WithMusicTheme.parameters,
          docs: {
            ...WithMusicTheme.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <WaveformBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center text-center">\n        <div className="space-y-4">\n          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">\n            Audio Visualizer\n          </h1>\n          <p className="text-xl text-gray-300">Rhythmic waveform animations</p>\n        </div>\n      </div>\n    </div>\n}',
              ...WithMusicTheme.parameters?.docs?.source,
            },
          },
        }))
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
              'components/backgrounds/WaveformBackground.stories.tsx#WaveformBackground'
            ] = {
              docgenInfo: WaveformBackground.__docgenInfo,
              name: 'WaveformBackground',
              path: 'components/backgrounds/WaveformBackground.stories.tsx#WaveformBackground',
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
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
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
                    _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.path,
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
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
                  _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
  },
])
