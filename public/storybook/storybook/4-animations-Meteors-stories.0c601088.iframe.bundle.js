'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [8091],
  {
    './components/Meteors.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { G: () => Meteors })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./lib/utils.ts')
      function seededRandom(seed) {
        const x = 1e4 * Math.sin(seed)
        return x - Math.floor(x)
      }
      const Meteors = ({ number = 20, className }) => {
        const meteors = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
          () =>
            new Array(number).fill(!0).map((_, idx) => {
              const seed = idx + 1
              return {
                top: Math.floor(100 * seededRandom(2 * seed)),
                left: Math.floor(100 * seededRandom(3 * seed)),
                delay: 3 * seededRandom(5 * seed),
                duration: Math.floor(5 * seededRandom(7 * seed)) + 5,
              }
            }),
          [number]
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: meteors.map((meteor, idx) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                'span',
                {
                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    'absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
                    "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                    className
                  ),
                  style: {
                    top: `${meteor.top}%`,
                    left: `${meteor.left}%`,
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.duration}s`,
                  },
                },
                idx
              )
            ),
          }
        )
      }
      try {
        ;((Meteors.displayName = 'Meteors'),
          (Meteors.__docgenInfo = {
            description: '',
            displayName: 'Meteors',
            props: {
              number: {
                defaultValue: { value: '20' },
                description: '',
                name: 'number',
                required: !1,
                type: { name: 'number' },
              },
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
            (STORYBOOK_REACT_CLASSES['components/Meteors.tsx#Meteors'] = {
              docgenInfo: Meteors.__docgenInfo,
              name: 'Meteors',
              path: 'components/Meteors.tsx#Meteors',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/utils.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn })
      var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/clsx/dist/clsx.mjs'
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/tailwind-merge/dist/bundle-mjs.mjs'
        )
      function cn(...inputs) {
        return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.QP)(
          (0, clsx__WEBPACK_IMPORTED_MODULE_0__.$)(inputs)
        )
      }
    },
    './stories/4-animations/Meteors.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          FewMeteors: () => FewMeteors,
          ManyMeteors: () => ManyMeteors,
          WithContent: () => WithContent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_Meteors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/Meteors.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Animations/Meteors',
          component: _components_Meteors__WEBPACK_IMPORTED_MODULE_1__.G,
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Animated meteors falling across the screen' } },
          },
          argTypes: {
            number: {
              control: { type: 'range', min: 1, max: 50, step: 1 },
              description: 'Number of meteors',
            },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full h-screen bg-black overflow-hidden',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_Meteors__WEBPACK_IMPORTED_MODULE_1__.G,
                {}
              ),
            }),
        },
        FewMeteors = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full h-screen bg-black overflow-hidden',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_Meteors__WEBPACK_IMPORTED_MODULE_1__.G,
                { number: 5 }
              ),
            }),
        },
        ManyMeteors = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full h-screen bg-black overflow-hidden',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_Meteors__WEBPACK_IMPORTED_MODULE_1__.G,
                { number: 30 }
              ),
            }),
        },
        WithContent = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className:
                'relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_Meteors__WEBPACK_IMPORTED_MODULE_1__.G,
                  { number: 10 }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-6xl font-bold text-white',
                    children: 'Meteor Shower',
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'FewMeteors', 'ManyMeteors', 'WithContent']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">\n      <Meteors />\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (FewMeteors.parameters = {
          ...FewMeteors.parameters,
          docs: {
            ...FewMeteors.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">\n      <Meteors number={5} />\n    </div>\n}',
              ...FewMeteors.parameters?.docs?.source,
            },
          },
        }),
        (ManyMeteors.parameters = {
          ...ManyMeteors.parameters,
          docs: {
            ...ManyMeteors.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">\n      <Meteors number={30} />\n    </div>\n}',
              ...ManyMeteors.parameters?.docs?.source,
            },
          },
        }),
        (WithContent.parameters = {
          ...WithContent.parameters,
          docs: {
            ...WithContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">\n      <Meteors number={10} />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-6xl font-bold text-white">Meteor Shower</h1>\n      </div>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((Meteors.displayName = 'Meteors'),
          (Meteors.__docgenInfo = {
            description: '',
            displayName: 'Meteors',
            props: {
              number: {
                defaultValue: { value: '20' },
                description: '',
                name: 'number',
                required: !1,
                type: { name: 'number' },
              },
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
            (STORYBOOK_REACT_CLASSES['stories/4-animations/Meteors.stories.tsx#Meteors'] = {
              docgenInfo: Meteors.__docgenInfo,
              name: 'Meteors',
              path: 'stories/4-animations/Meteors.stories.tsx#Meteors',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
