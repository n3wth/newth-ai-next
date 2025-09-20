'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [187],
  {
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
          default: () => Footer_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        Container = __webpack_require__('./components/layout/Container.tsx'),
        social = __webpack_require__('./lib/config/social.ts')
      const Footer_stories = {
          title: 'Layout/Footer',
          component: function Footer() {
            const currentYear = new Date().getFullYear()
            return (0, jsx_runtime.jsx)('footer', {
              className: 'border-t border-white/10 bg-black',
              children: (0, jsx_runtime.jsx)(Container.m, {
                className: 'py-8',
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4',
                  children: [
                    (0, jsx_runtime.jsxs)('p', {
                      className: 'text-sm text-gray-400 order-2 sm:order-1',
                      children: ['© ', currentYear, ' Oliver Newth. All rights reserved.'],
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'flex flex-wrap gap-x-6 gap-y-2 text-sm order-1 sm:order-2',
                      children: [
                        (0, jsx_runtime.jsx)(link_default(), {
                          href: '/#projects',
                          className: 'text-gray-400 hover:text-white transition-colors',
                          children: 'Projects',
                        }),
                        (0, jsx_runtime.jsx)(link_default(), {
                          href: '/work',
                          className: 'text-gray-400 hover:text-white transition-colors',
                          children: 'Work',
                        }),
                        (0, jsx_runtime.jsx)('a', {
                          href: social.l.github,
                          className: 'text-gray-400 hover:text-white transition-colors',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: 'GitHub',
                        }),
                        (0, jsx_runtime.jsx)('a', {
                          href: social.l.linkedin,
                          className: 'text-gray-400 hover:text-white transition-colors',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: 'LinkedIn',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          },
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
              (0, jsx_runtime.jsx)('div', {
                className: 'bg-gradient-to-b from-gray-900 to-black',
                children: (0, jsx_runtime.jsx)(Story, {}),
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
