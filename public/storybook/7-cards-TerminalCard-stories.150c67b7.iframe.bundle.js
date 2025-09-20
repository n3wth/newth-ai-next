'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [4475],
  {
    './components/ui/TerminalCard.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => TerminalCard })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        _lib_design_system__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./lib/design-system.ts')
      const TerminalCard = (0, react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TerminalCard({
        variant = 'default',
        className,
        children,
        hover = !0,
      }) {
        const classes = (0, _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.cn)(
          _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.iN.card[variant].base,
          hover && _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.iN.card[variant].hover,
          className
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
          {
            whileHover: hover ? { scale: 1.02 } : void 0,
            transition: { type: 'spring', stiffness: 300 },
            className: classes,
            children,
          }
        )
      })
      try {
        ;((TerminalCard.displayName = 'TerminalCard'),
          (TerminalCard.__docgenInfo = {
            description: '',
            displayName: 'TerminalCard',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: { name: 'enum', value: [{ value: '"default"' }, { value: '"elevated"' }] },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hover: {
                defaultValue: null,
                description: '',
                name: 'hover',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/TerminalCard.tsx#TerminalCard'] = {
              docgenInfo: TerminalCard.__docgenInfo,
              name: 'TerminalCard',
              path: 'components/ui/TerminalCard.tsx#TerminalCard',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/design-system.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn, iN: () => componentVariants })
      const componentVariants = {
          button: {
            primary: {
              base: 'px-8 py-4 bg-violet-500 text-black font-mono font-bold transition-all',
              hover: 'hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            secondary: {
              base: 'px-8 py-4 border border-violet-500 text-violet-400 font-mono font-bold transition-all',
              hover:
                'hover:bg-violet-500 hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            ghost: {
              base: 'px-4 py-2 text-violet-400 font-mono transition-all',
              hover: 'hover:text-violet-300 hover:bg-violet-500/10',
            },
          },
          card: {
            default: {
              base: 'p-6 bg-black border border-violet-500/30 transition-all',
              hover: 'hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
            },
            elevated: {
              base: 'p-6 bg-gray-900 border border-violet-500/50 shadow-lg',
              hover: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
            },
          },
          badge: {
            default: {
              base: 'px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-400',
            },
            solid: { base: 'px-3 py-1 text-xs font-mono bg-violet-500 text-black' },
          },
        },
        cn = (...classes) => classes.filter(Boolean).join(' ')
    },
    './stories/7-cards/TerminalCard.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CodeBlock: () => CodeBlock,
          Default: () => Default,
          SystemInfo: () => SystemInfo,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Cards/Terminal',
          component: __webpack_require__('./components/ui/TerminalCard.tsx').l,
          parameters: {
            layout: 'centered',
            backgrounds: { default: 'dark' },
            docs: {
              description: {
                component: 'Terminal-style card with ASCII borders and monospace text',
              },
            },
          },
          argTypes: {},
        },
        Default = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-2',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  className: 'text-green-400',
                  children: '$ npm run build',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  className: 'text-gray-400',
                  children: 'Building for production...',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                  className: 'text-blue-400',
                  children: '✓ Compiled successfully',
                }),
              ],
            }),
          },
        },
        SystemInfo = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-2 font-mono text-sm',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-gray-400',
                      children: 'CPU:',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-green-400',
                      children: '12%',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-gray-400',
                      children: 'Memory:',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-yellow-400',
                      children: '67%',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-gray-400',
                      children: 'Disk:',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      className: 'text-red-400',
                      children: '89%',
                    }),
                  ],
                }),
              ],
            }),
          },
        },
        CodeBlock = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('pre', {
              className: 'text-sm text-gray-300',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('code', {
                children:
                  "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000);",
              }),
            }),
          },
        },
        __namedExportsOrder = ['Default', 'SystemInfo', 'CodeBlock']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: <div className="space-y-2">\n        <p className="text-green-400">$ npm run build</p>\n        <p className="text-gray-400">Building for production...</p>\n        <p className="text-blue-400">✓ Compiled successfully</p>\n      </div>\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (SystemInfo.parameters = {
          ...SystemInfo.parameters,
          docs: {
            ...SystemInfo.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: <div className="space-y-2 font-mono text-sm">\n        <div className="flex justify-between">\n          <span className="text-gray-400">CPU:</span>\n          <span className="text-green-400">12%</span>\n        </div>\n        <div className="flex justify-between">\n          <span className="text-gray-400">Memory:</span>\n          <span className="text-yellow-400">67%</span>\n        </div>\n        <div className="flex justify-between">\n          <span className="text-gray-400">Disk:</span>\n          <span className="text-red-400">89%</span>\n        </div>\n      </div>\n  }\n}',
              ...SystemInfo.parameters?.docs?.source,
            },
          },
        }),
        (CodeBlock.parameters = {
          ...CodeBlock.parameters,
          docs: {
            ...CodeBlock.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: <pre className=\"text-sm text-gray-300\">\n        <code>{`const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000);`}</code>\n      </pre>\n  }\n}",
              ...CodeBlock.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
