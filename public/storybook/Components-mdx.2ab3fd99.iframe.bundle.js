;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [2165],
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
    './stories/Components.mdx': (
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
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
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
                { title: 'Components/Overview' }
              ),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: 'component-library',
                children: 'Component Library',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'A comprehensive collection of reusable React components built with TypeScript and Tailwind CSS.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'component-categories',
                children: 'Component Categories',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'ui-components',
                children: 'UI Components',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Core interface elements for building applications:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Buttons',
                      }),
                      ' - Primary, secondary, and variant button styles',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Forms',
                      }),
                      ' - Input fields, checkboxes, selects, and form layouts',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Modals',
                      }),
                      ' - Dialog and overlay components',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Cards',
                      }),
                      ' - Content containers with various layouts',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Navigation',
                      }),
                      ' - Headers, sidebars, and menu components',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'background-components',
                children: 'Background Components',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Dynamic animated backgrounds for visual interest:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'CodeRain',
                      }),
                      ' - Matrix-style falling code animation',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'GridPattern',
                      }),
                      ' - Animated grid backgrounds',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'ParticleField',
                      }),
                      ' - Interactive particle effects',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'GradientMesh',
                      }),
                      ' - Smooth animated gradients',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'layout-components',
                children: 'Layout Components',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Structure and organize your application:',
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
                      ' - Responsive width containers',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Grid',
                      }),
                      ' - Flexible grid layouts',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Stack',
                      }),
                      ' - Vertical and horizontal stacks',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Section',
                      }),
                      ' - Page section wrappers',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'data-display',
                children: 'Data Display',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Present information effectively:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Tables',
                      }),
                      ' - Sortable, filterable data tables',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Lists',
                      }),
                      ' - Various list layouts and styles',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Stats',
                      }),
                      ' - Statistics and metric displays',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Charts',
                      }),
                      ' - Data visualization components',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'component-standards',
                children: 'Component Standards',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'props--types',
                children: 'Props & Types',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'All components include:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Full TypeScript definitions',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'JSDoc documentation',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Default props where appropriate',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Proper prop validation',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'styling',
                children: 'Styling',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Components follow consistent patterns:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Tailwind utility classes',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'CSS-in-JS for dynamic styles',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Dark mode support',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Responsive by default',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'accessibility',
                children: 'Accessibility',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Every component ensures:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Semantic HTML structure',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'ARIA labels and roles',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Keyboard navigation',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Focus management',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'testing',
                children: 'Testing',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Components include:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Unit tests with Vitest',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Visual regression tests',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Accessibility audits',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Storybook documentation',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'usage-examples',
                children: 'Usage Examples',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-tsx',
                    children:
                      "import { Button } from '@/components/ui/button'\nimport { Card } from '@/components/ui/card'\n\nfunction MyComponent() {\n  return (\n    <Card>\n      <Button variant=\"primary\">\n        Click me\n      </Button>\n    </Card>\n  )\n}\n",
                  }
                ),
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
