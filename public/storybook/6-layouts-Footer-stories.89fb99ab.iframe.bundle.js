'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [6187],
  {
    './components/Footer.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => Footer })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/layout/Container.tsx'
        ),
        _lib_config_social__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./lib/config/social.ts')
      function Footer() {
        const currentYear = new Date().getFullYear()
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('footer', {
          className: 'border-t border-white/10 bg-black',
          role: 'contentinfo',
          'aria-label': 'Site footer',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__.m,
            {
              className: 'py-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('p', {
                    className: 'text-sm text-gray-400 order-2 sm:order-1',
                    children: ['© ', currentYear, ' Oliver Newth. All rights reserved.'],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('nav', {
                    className: 'flex flex-wrap gap-x-6 gap-y-2 text-sm order-1 sm:order-2',
                    'aria-label': 'Footer navigation',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                        {
                          href: '/#projects',
                          className: 'text-gray-400 hover:text-white transition-colors',
                          'aria-label': 'Go to projects section',
                          children: 'Projects',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                        {
                          href: '/work',
                          className: 'text-gray-400 hover:text-white transition-colors',
                          'aria-label': 'View my work page',
                          children: 'Work',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                        href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.github,
                        className: 'text-gray-400 hover:text-white transition-colors',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Visit my GitHub profile (opens in new tab)',
                        children: 'GitHub',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                        href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.linkedin,
                        className: 'text-gray-400 hover:text-white transition-colors',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Visit my LinkedIn profile (opens in new tab)',
                        children: 'LinkedIn',
                      }),
                    ],
                  }),
                ],
              }),
            }
          ),
        })
      }
    },
    './components/layout/Container.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => Container })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./lib/utils.ts')
      const sizes = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      }
      function Container({ children, className, size = 'xl' }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
            'mx-auto px-4 sm:px-6 lg:px-8',
            sizes[size],
            className
          ),
          children,
        })
      }
      try {
        ;((Container.displayName = 'Container'),
          (Container.__docgenInfo = {
            description: '',
            displayName: 'Container',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'xl' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                    { value: '"xl"' },
                    { value: '"full"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/layout/Container.tsx#Container'] = {
              docgenInfo: Container.__docgenInfo,
              name: 'Container',
              path: 'components/layout/Container.tsx#Container',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/config/social.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => socialLinks })
      const socialLinks = {
        github: 'https://github.com/n3wth',
        linkedin: 'https://linkedin.com/in/newth',
        email: 'oliver@newth.ai',
      }
    },
    './stories/6-layouts/Footer.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithBackground: () => WithBackground,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Layout/Footer',
          component: __webpack_require__('./components/Footer.tsx').w,
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Site footer with social links and copyright' } },
          },
        },
        Default = {},
        WithBackground = {
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'bg-gradient-to-b from-gray-900 to-black',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        __namedExportsOrder = ['Default', 'WithBackground']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
        },
      }),
        (WithBackground.parameters = {
          ...WithBackground.parameters,
          docs: {
            ...WithBackground.parameters?.docs,
            source: {
              originalSource:
                '{\n  decorators: [Story => <div className="bg-gradient-to-b from-gray-900 to-black">\n        <Story />\n      </div>]\n}',
              ...WithBackground.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
