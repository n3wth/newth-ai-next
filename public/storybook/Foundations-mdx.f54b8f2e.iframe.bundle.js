;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9377],
  {
    './node_modules/@mdx-js/react/lib/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        R: () => useMDXComponents,
        x: () => MDXProvider,
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/index.js'
      )
      const emptyComponents = {},
        MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)
      function useMDXComponents(components) {
        const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          function () {
            return 'function' == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components }
          },
          [contextComponents, components]
        )
      }
      function MDXProvider(properties) {
        let allComponents
        return (
          (allComponents = properties.disableParentContext
            ? 'function' == typeof properties.components
              ? properties.components(emptyComponents)
              : properties.components || emptyComponents
            : useMDXComponents(properties.components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            properties.children
          )
        )
      }
    },
    './node_modules/@storybook/addon-docs/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/@storybook/addon-docs/dist sync recursive'),
        (module.exports = webpackEmptyContext))
    },
    './node_modules/storybook/dist/components sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/components sync recursive'),
        (module.exports = webpackEmptyContext))
    },
    './node_modules/storybook/dist/theming sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;((webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/storybook/dist/theming sync recursive'),
        (module.exports = webpackEmptyContext))
    },
    './stories/Foundations.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => MDXContent }))
      __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _workspaces_newth_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/@mdx-js/react/lib/index.js'),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/blocks.mjs'
        )
      function _createMdxContent(props) {
        const _components = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0,
          _workspaces_newth_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),
          ...props.components,
        }
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,
                { title: 'Foundations/Overview' }
              ),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: 'design-foundations',
                children: 'Design Foundations',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'The foundation of the n3wth.AI design system - colors, typography, spacing, and core design principles.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'core-principles',
                children: 'Core Principles',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-visual-language',
                children: '🎨 Visual Language',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Dark-first design',
                      }),
                      ' - Optimized for modern dark interfaces',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Cyberpunk aesthetic',
                      }),
                      ' - Futuristic, tech-inspired visual style',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'High contrast',
                      }),
                      ' - Ensuring readability and visual hierarchy',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Fluid animations',
                      }),
                      ' - Smooth, purposeful motion design',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-performance',
                children: '🚀 Performance',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Optimized components',
                      }),
                      ' - Minimal bundle size impact',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'CSS-in-JS',
                      }),
                      ' - Tailwind utility classes for runtime performance',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Code splitting',
                      }),
                      ' - Components load only when needed',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Tree shaking',
                      }),
                      ' - Unused code automatically removed',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-accessibility',
                children: '♿ Accessibility',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'WCAG 2.1 AA compliant',
                      }),
                      ' - Meeting modern accessibility standards',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Keyboard navigation',
                      }),
                      ' - Full keyboard support for all interactive elements',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Screen reader support',
                      }),
                      ' - Semantic HTML and ARIA attributes',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Focus management',
                      }),
                      ' - Clear focus indicators and logical tab order',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'foundation-elements',
                children: 'Foundation Elements',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'colors',
                children: 'Colors',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'Our color system provides semantic colors for consistent UI development:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Primary',
                      }),
                      ' - Purple accent colors for key actions',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Secondary',
                      }),
                      ' - Blue tones for supporting elements',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Success/Warning/Error',
                      }),
                      ' - Status communication colors',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Neutral',
                      }),
                      ' - Gray scale for backgrounds and text',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'typography',
                children: 'Typography',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Consistent type scale using Inter and Fira Code:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Headings',
                      }),
                      ' - Bold, impactful display text',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Body',
                      }),
                      ' - Readable content typography',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Code',
                      }),
                      ' - Monospace for technical content',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Captions',
                      }),
                      ' - Small supporting text',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'spacing',
                children: 'Spacing',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: '8px grid system for consistent spacing:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'xs',
                      }),
                      ': 4px',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'sm',
                      }),
                      ': 8px',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'md',
                      }),
                      ': 16px',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'lg',
                      }),
                      ': 24px',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'xl',
                      }),
                      ': 32px',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: '2xl',
                      }),
                      ': 48px',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'layout',
                children: 'Layout',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Flexible grid and container system:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Container',
                      }),
                      ' - Responsive max-width wrapper',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Grid',
                      }),
                      ' - 12-column responsive grid',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Flexbox utilities',
                      }),
                      ' - Quick layout helpers',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Spacing utilities',
                      }),
                      ' - Margin and padding classes',
                    ],
                  }),
                  '\n',
                ],
              }),
            ],
          }
        )
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = {
          ...(0,
          _workspaces_newth_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),
          ...props.components,
        }
        return MDXLayout
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
                ...props,
              }),
            })
          : _createMdxContent(props)
      }
    },
  },
])
