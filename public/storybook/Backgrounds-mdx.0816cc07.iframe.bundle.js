;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [3308],
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
    './stories/Backgrounds.mdx': (
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
                { title: 'Backgrounds/Overview' }
              ),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: 'background-animations',
                children: 'Background Animations',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'Dynamic, interactive background effects that bring life to your applications.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'available-backgrounds',
                children: 'Available Backgrounds',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'Our collection of animated backgrounds provides various visual effects suitable for different use cases:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-coderain-background',
                children: '🌊 CodeRain Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  'Matrix-style falling code animation perfect for tech-focused interfaces.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Customizable speed and density',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Multiple character sets',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Color themes',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-glitch-background',
                children: '⚡ Glitch Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Cyberpunk-inspired glitch effects for edgy, modern designs.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Random glitch intervals',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Adjustable intensity',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'RGB color splits',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-neural-network-background',
                children: '🌐 Neural Network Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Interconnected nodes visualization representing AI and connectivity.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Interactive node connections',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Dynamic movement',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Customizable node count',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-warp-background',
                children: '🌀 Warp Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Space warp effect creating depth and motion.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Speed controls',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Star density options',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Direction configuration',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-waveform-background',
                children: '📊 Waveform Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Audio waveform-style animations for music and media applications.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Frequency visualization',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Amplitude controls',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Color gradients',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-particle-field-background',
                children: '💫 Particle Field Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Floating particles with physics-based movement.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Particle count control',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Interaction effects',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Speed variations',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '-data-flow-background',
                children: '🔄 Data Flow Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Flowing data streams representing information transfer.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Flow direction',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Stream density',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Speed controls',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
                id: '️-orbiting-atoms-background',
                children: '⚛️ Orbiting Atoms Background',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'Atomic orbit animations for science and tech themes.',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Orbit speed',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Electron count',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Nucleus styling',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'implementation',
                children: 'Implementation',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'All background components are optimized for performance using:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'RequestAnimationFrame for smooth animations',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Canvas rendering for complex effects',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'React.memo to prevent unnecessary re-renders',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Cleanup on unmount to prevent memory leaks',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'usage',
                children: 'Usage',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: 'language-tsx',
                    children:
                      'import { CodeRainBackground } from \'@/components/backgrounds/CodeRainBackground\'\n\nexport default function Page() {\n  return (\n    <div className="relative min-h-screen">\n      <CodeRainBackground />\n      <div className="relative z-10">\n        {/* Your content here */}\n      </div>\n    </div>\n  )\n}\n',
                  }
                ),
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'performance-considerations',
                children: 'Performance Considerations',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      'Use ',
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: 'will-change',
                      }),
                      ' CSS property for GPU acceleration',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Implement visibility API to pause animations when tab is inactive',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Consider reduced motion preferences for accessibility',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Lazy load background components when not immediately visible',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: 'accessibility',
                children: 'Accessibility',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: 'All animated backgrounds respect user preferences:',
              }),
              '\n',
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: 'prefers-reduced-motion',
                      }),
                      ' media query support',
                    ],
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Option to disable animations',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Ensure sufficient contrast for overlaid content',
                  }),
                  '\n',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: 'Provide static alternatives when needed',
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
