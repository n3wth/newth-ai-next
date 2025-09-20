'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [69],
  {
    './components/backgrounds/WarpBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          HalfHeight: () => HalfHeight,
          WithContent: () => WithContent,
          WithOverlay: () => WithOverlay,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/WarpBackground.tsx'
        ),
        _components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/ui/Button.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Effects/Backgrounds/Warp',
          component: _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__.N,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: {
                component: '3D animated background with floating blocks and warp effect',
              },
            },
          },
          tags: ['autodocs'],
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__.N,
                { className: 'absolute inset-0' }
              ),
            }),
        },
        WithContent = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__.N,
                {
                  className: 'absolute inset-0',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'relative z-10 flex h-full items-center justify-center',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      className: 'text-center space-y-6',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                          className: 'text-6xl font-bold text-white',
                          children: 'Welcome to the Future',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                          className: 'text-xl text-white/80 max-w-md mx-auto',
                          children:
                            'Experience the next generation of web interfaces with immersive 3D backgrounds',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.$,
                          { variant: 'primary', size: 'lg', children: 'Get Started' }
                        ),
                      ],
                    }),
                  }),
                }
              ),
            }),
        },
        HalfHeight = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full h-[50vh]',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__.N,
                { className: 'absolute inset-0' }
              ),
            }),
        },
        WithOverlay = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _components_WarpBackground__WEBPACK_IMPORTED_MODULE_1__.N,
                {
                  className: 'absolute inset-0',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'relative z-10 flex h-full items-center justify-center',
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                        className: 'text-4xl font-bold text-white',
                        children: 'Gradient Overlay Effect',
                      }),
                    }),
                  ],
                }
              ),
            }),
        },
        __namedExportsOrder = ['Default', 'WithContent', 'HalfHeight', 'WithOverlay']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <WarpBackground className="absolute inset-0" />\n    </div>\n}',
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
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <WarpBackground className="absolute inset-0">\n        <div className="relative z-10 flex h-full items-center justify-center">\n          <div className="text-center space-y-6">\n            <h1 className="text-6xl font-bold text-white">Welcome to the Future</h1>\n            <p className="text-xl text-white/80 max-w-md mx-auto">\n              Experience the next generation of web interfaces with immersive 3D backgrounds\n            </p>\n            <Button variant="primary" size="lg">\n              Get Started\n            </Button>\n          </div>\n        </div>\n      </WarpBackground>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }),
        (HalfHeight.parameters = {
          ...HalfHeight.parameters,
          docs: {
            ...HalfHeight.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full h-[50vh]">\n      <WarpBackground className="absolute inset-0" />\n    </div>\n}',
              ...HalfHeight.parameters?.docs?.source,
            },
          },
        }),
        (WithOverlay.parameters = {
          ...WithOverlay.parameters,
          docs: {
            ...WithOverlay.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <WarpBackground className="absolute inset-0">\n        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]" />\n        <div className="relative z-10 flex h-full items-center justify-center">\n          <h2 className="text-4xl font-bold text-white">Gradient Overlay Effect</h2>\n        </div>\n      </WarpBackground>\n    </div>\n}',
              ...WithOverlay.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((WarpBackground.displayName = 'WarpBackground'),
          (WarpBackground.__docgenInfo = {
            description: '',
            displayName: 'WarpBackground',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/WarpBackground.stories.tsx#WarpBackground'
            ] = {
              docgenInfo: WarpBackground.__docgenInfo,
              name: 'WarpBackground',
              path: 'components/backgrounds/WarpBackground.stories.tsx#WarpBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/ui/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./lib/utils.ts')
      const variants = {
          primary:
            'bg-white text-black hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]',
          secondary:
            'bg-transparent text-white/90 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]',
          ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
          destructive:
            'bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_20px_50px_rgba(239,68,68,0.25)]',
        },
        sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' },
        Button = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
          (
            {
              children,
              variant = 'primary',
              size = 'md',
              href,
              external,
              icon,
              iconPosition = 'right',
              loading = !1,
              className,
              disabled,
              ...props
            },
            ref
          ) => {
            const classes = (0, _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 font-sans',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
              ),
              content = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    icon &&
                      'left' === iconPosition &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                        className: 'mr-2',
                        children: icon,
                      }),
                    children,
                    icon &&
                      'right' === iconPosition &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                        className: 'ml-2',
                        children: icon,
                      }),
                  ],
                }
              )
            return href
              ? external
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                    href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: classes,
                    children: content,
                  })
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                    { href, className: classes, children: content }
                  )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
                  ref,
                  className: classes,
                  disabled: disabled || loading,
                  ...props,
                  children: content,
                })
          }
        )
      Button.displayName = 'Button'
      try {
        ;((Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              variant: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"ghost"' },
                    { value: '"destructive"' },
                  ],
                },
              },
              size: {
                defaultValue: { value: 'md' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }],
                },
              },
              href: {
                defaultValue: null,
                description: '',
                name: 'href',
                required: !1,
                type: { name: 'string' },
              },
              external: {
                defaultValue: null,
                description: '',
                name: 'external',
                required: !1,
                type: { name: 'boolean' },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              iconPosition: {
                defaultValue: { value: 'right' },
                description: '',
                name: 'iconPosition',
                required: !1,
                type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }] },
              },
              loading: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'components/ui/Button.tsx#Button',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
