;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [555],
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
    './stories/Welcome.mdx': (
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
        _Users_oliver_GitHub_newth_ai_next_v1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/@mdx-js/react/lib/index.js'),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/blocks.mjs'
        )
      function _createMdxContent(props) {
        const _components = {
          a: 'a',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          hr: 'hr',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0,
          _Users_oliver_GitHub_newth_ai_next_v1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),
          ...props.components,
        }
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,
                { title: 'Welcome' }
              ),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: 'n3wthai-component-library',
                children: 'n3wth.AI Component Library',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
                children: [
                  'Welcome to the ',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                    children: 'n3wth.AI',
                  }),
                  ' design system and component library. This comprehensive collection showcases our modern, accessible React components built with cutting-edge web technologies.',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: '-design-philosophy',
                children: '🎨 Design Philosophy',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Our components embody a futuristic, cyberpunk-inspired aesthetic with:',
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
                      ' optimized for modern interfaces',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Fluid animations',
                      }),
                      ' powered by Framer Motion',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Accessibility',
                      }),
                      ' built into every component',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Performance',
                      }),
                      ' optimized with React 19 and Next.js 15',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: '-quick-start',
                children: '🚀 Quick Start',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Browse our component categories:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'foundations',
                children: 'Foundations',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/foundations-colors--docs', children: 'Colors' }
                        ),
                      }),
                      ' - Our color palette and theming system',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/foundations-typography--docs', children: 'Typography' }
                        ),
                      }),
                      ' - Font styles and text components',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/foundations-spacing--docs', children: 'Spacing' }
                        ),
                      }),
                      ' - Consistent spacing system',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'components',
                children: 'Components',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/ui-button-button--docs', children: 'Buttons' }
                        ),
                      }),
                      ' - Interactive button variations',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/cards-projectcard--docs', children: 'Cards' }
                        ),
                      }),
                      ' - Content container components',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/backgrounds-coderain--docs', children: 'Backgrounds' }
                        ),
                      }),
                      ' - Animated background effects',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'sections',
                children: 'Sections',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/sections-herosection--docs', children: 'Hero Sections' }
                        ),
                      }),
                      ' - Landing page hero components',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: '/story/layouts-navigation--docs', children: 'Navigation' }
                        ),
                      }),
                      ' - Navigation and header components',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: '-technology-stack',
                children: '💻 Technology Stack',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Built with modern tools and frameworks:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'React 19',
                      }),
                      ' - Latest React features',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Next.js 15',
                      }),
                      ' - Full-stack React framework',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'TypeScript',
                      }),
                      ' - Type-safe development',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Tailwind CSS',
                      }),
                      ' - Utility-first styling',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: 'Framer Motion',
                      }),
                      ' - Smooth animations',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: '-key-features',
                children: '🎯 Key Features',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'performance-first',
                children: 'Performance First',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Optimized bundle sizes',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Code splitting',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Lazy loading',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Server-side rendering',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'developer-experience',
                children: 'Developer Experience',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Hot module replacement',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'TypeScript support',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Comprehensive documentation',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Interactive playground',
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
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'WCAG 2.1 AA compliant',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Keyboard navigation',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Screen reader support',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Focus management',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: '-resources',
                children: '📚 Resources',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: 'https://github.com/n3wth/newth-ai-next-v1',
                        rel: 'nofollow',
                        children: 'GitHub Repository',
                      }
                    ),
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: 'https://newth.ai', rel: 'nofollow', children: 'Live Demo' }
                    ),
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: 'https://docs.newth.ai', rel: 'nofollow', children: 'Documentation' }
                    ),
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
                  children: 'Built with ❤️ by the n3wth.AI team',
                }),
              }),
            ],
          }
        )
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = {
          ...(0,
          _Users_oliver_GitHub_newth_ai_next_v1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),
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
