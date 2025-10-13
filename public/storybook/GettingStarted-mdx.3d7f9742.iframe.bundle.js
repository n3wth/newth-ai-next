;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [3626],
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
    './stories/GettingStarted.mdx': (
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
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
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
                { title: 'Getting Started' }
              ),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: 'getting-started',
                children: 'Getting Started',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Quick guide to using the n3wth.AI component library in your projects.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'installation',
                children: 'Installation',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'prerequisites',
                children: 'Prerequisites',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Node.js 18+ and npm 9+',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'React 18 or 19',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'TypeScript 5+',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'package-installation',
                children: 'Package Installation',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-bash',
                    children:
                      '# Clone the repository\ngit clone https://github.com/n3wth/newth-ai-next-v1.git\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm run dev\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'project-setup',
                children: 'Project Setup',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '1-configure-tailwind-css',
                children: '1. Configure Tailwind CSS',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-javascript',
                    children:
                      "// tailwind.config.js\nmodule.exports = {\n  content: [\n    './src/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n  theme: {\n    extend: {\n      colors: {\n        purple: {\n          400: '#a78bfa',\n          500: '#8b5cf6',\n          600: '#7c3aed',\n        },\n      },\n    },\n  },\n  plugins: [],\n}\n",
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '2-import-global-styles',
                children: '2. Import Global Styles',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-css',
                    children:
                      '/* app/globals.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '3-set-up-dark-mode',
                children: '3. Set Up Dark Mode',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-tsx',
                    children:
                      '// app/layout.tsx\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <html lang="en" className="dark">\n      <body className="dark bg-black text-white">\n        {children}\n      </body>\n    </html>\n  )\n}\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'using-components',
                children: 'Using Components',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'basic-usage',
                children: 'Basic Usage',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-tsx',
                    children:
                      "import { Button } from '@/components/ui/button'\nimport { Card } from '@/components/ui/card'\nimport { CodeRain } from '@/components/backgrounds/CodeRain'\n\nexport default function HomePage() {\n  return (\n    <div className=\"relative min-h-screen\">\n      <CodeRain />\n      <div className=\"relative z-10 p-8\">\n        <Card>\n          <h1>Welcome to n3wth.AI</h1>\n          <Button onClick={() => console.log('Clicked!')}>\n            Get Started\n          </Button>\n        </Card>\n      </div>\n    </div>\n  )\n}\n",
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'advanced-patterns',
                children: 'Advanced Patterns',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-tsx',
                    children:
                      '// Custom theme provider\nimport { ThemeProvider } from \'@/components/theme-provider\'\n\n// Wrap your app\n<ThemeProvider defaultTheme="dark">\n  <App />\n</ThemeProvider>\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'development-workflow',
                children: 'Development Workflow',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'available-scripts',
                children: 'Available Scripts',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-bash',
                    children:
                      '# Development\nnpm run dev          # Start Next.js dev server\nnpm run storybook    # Start Storybook\n\n# Building\nnpm run build        # Build for production\nnpm run build:storybook  # Build Storybook\n\n# Testing\nnpm run test         # Run tests\nnpm run lint         # Lint code\nnpm run type-check   # TypeScript checks\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'component-development',
                children: 'Component Development',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      'Create component in ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: 'components/',
                      }),
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      'Add story file ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: 'Component.stories.tsx',
                      }),
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      'Write tests in ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: 'Component.test.tsx',
                      }),
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Document props and usage',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'best-practices',
                children: 'Best Practices',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'performance',
                children: 'Performance',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Use dynamic imports for heavy components',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Implement React.memo for pure components',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Lazy load background animations',
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
                    children: 'Always include aria-labels',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Ensure keyboard navigation works',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Test with screen readers',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Check color contrast ratios',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: 'code-quality',
                children: 'Code Quality',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Follow TypeScript strict mode',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Use ESLint and Prettier',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Write comprehensive tests',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Document complex logic',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'resources',
                children: 'Resources',
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
                      {
                        href: 'https://storybook.newth.ai',
                        rel: 'nofollow',
                        children: 'Component Storybook',
                      }
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
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'support',
                children: 'Support',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'For issues and questions:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      'Open an issue on ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
                        href: 'https://github.com/n3wth/newth-ai-next-v1/issues',
                        rel: 'nofollow',
                        children: 'GitHub',
                      }),
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Contact the team at support@newth.ai',
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
