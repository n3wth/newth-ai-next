'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [1079],
  {
    './components/backgrounds/ParticleFieldBackground.stories.tsx': (
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
        _components_backgrounds_ParticleFieldBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/ParticleFieldBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Backgrounds/Particles',
          component: _components_backgrounds_ParticleFieldBackground__WEBPACK_IMPORTED_MODULE_1__.v,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: { component: 'Interactive particle field with mouse-following effects' },
            },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_ParticleFieldBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'Interactive Particles',
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
                  _components_backgrounds_ParticleFieldBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center text-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className:
                          'text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent',
                        children: 'Particle Physics',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-gray-300',
                        children: 'Move your mouse to interact',
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
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <ParticleFieldBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">Interactive Particles</h1>\n      </div>\n    </div>\n}',
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
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <ParticleFieldBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center text-center">\n        <div className="space-y-4">\n          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">\n            Particle Physics\n          </h1>\n          <p className="text-xl text-gray-300">Move your mouse to interact</p>\n        </div>\n      </div>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }))
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
              'components/backgrounds/ParticleFieldBackground.stories.tsx#ParticleFieldBackground'
            ] = {
              docgenInfo: ParticleFieldBackground.__docgenInfo,
              name: 'ParticleFieldBackground',
              path: 'components/backgrounds/ParticleFieldBackground.stories.tsx#ParticleFieldBackground',
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
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
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
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
                    _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
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
  },
])
