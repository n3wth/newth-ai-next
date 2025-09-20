'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [566],
  {
    './components/backgrounds/CodeRainBackground.stories.tsx': (
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
        _components_backgrounds_CodeRainBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/CodeRainBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Effects/Backgrounds/Code Rain',
          component: _components_backgrounds_CodeRainBackground__WEBPACK_IMPORTED_MODULE_1__.K,
          parameters: {
            layout: 'fullscreen',
            docs: { description: { component: 'Matrix-style code rain animation background' } },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_CodeRainBackground__WEBPACK_IMPORTED_MODULE_1__.K,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-4xl font-bold text-green-400',
                    children: 'Enter the Matrix',
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
                  _components_backgrounds_CodeRainBackground__WEBPACK_IMPORTED_MODULE_1__.K,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center text-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-5xl font-bold text-green-400',
                        children: 'Code Rain',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-green-300',
                        children: 'Digital rain of characters',
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
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <CodeRainBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-4xl font-bold text-green-400">Enter the Matrix</h1>\n      </div>\n    </div>\n}',
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
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <CodeRainBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center text-center">\n        <div className="space-y-4">\n          <h1 className="text-5xl font-bold text-green-400">Code Rain</h1>\n          <p className="text-xl text-green-300">Digital rain of characters</p>\n        </div>\n      </div>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }))
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
              'components/backgrounds/CodeRainBackground.stories.tsx#CodeRainBackground'
            ] = {
              docgenInfo: CodeRainBackground.__docgenInfo,
              name: 'CodeRainBackground',
              path: 'components/backgrounds/CodeRainBackground.stories.tsx#CodeRainBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
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
  },
])
