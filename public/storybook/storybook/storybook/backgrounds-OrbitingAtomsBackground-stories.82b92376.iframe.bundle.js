'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9291],
  {
    './components/backgrounds/OrbitingAtomsBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithGradientText: () => WithGradientText,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_OrbitingAtomsBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/OrbitingAtomsBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Backgrounds/Orbital',
          component: _components_backgrounds_OrbitingAtomsBackground__WEBPACK_IMPORTED_MODULE_1__.v,
          parameters: {
            layout: 'fullscreen',
            docs: { description: { component: '3D atomic particles orbiting in space' } },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_OrbitingAtomsBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'Quantum Space',
                  }),
                }),
              ],
            }),
        },
        WithGradientText = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_OrbitingAtomsBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className:
                      'text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
                    children: 'Atomic Structure',
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'WithGradientText']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <OrbitingAtomsBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">Quantum Space</h1>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithGradientText.parameters = {
          ...WithGradientText.parameters,
          docs: {
            ...WithGradientText.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <OrbitingAtomsBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">\n          Atomic Structure\n        </h1>\n      </div>\n    </div>\n}',
              ...WithGradientText.parameters?.docs?.source,
            },
          },
        }))
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
              'components/backgrounds/OrbitingAtomsBackground.stories.tsx#OrbitingAtomsBackground'
            ] = {
              docgenInfo: OrbitingAtomsBackground.__docgenInfo,
              name: 'OrbitingAtomsBackground',
              path: 'components/backgrounds/OrbitingAtomsBackground.stories.tsx#OrbitingAtomsBackground',
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
  },
])
