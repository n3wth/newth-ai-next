/*! For license information please see 8-examples-HomePage-stories.e173b829.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [88],
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
    './components/sections/ContactSection.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { c: () => ContactSection })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/ui/Button.tsx'
        ),
        _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/layout/Container.tsx'
        ),
        _lib_config_social__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./lib/config/social.ts')
      function ContactSection({
        title = 'Ready to ship something amazing?',
        subtitle = 'I work with teams that move fast and dream big.',
      }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('section', {
          className: 'py-32 bg-black',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__.m,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'text-center',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-3xl sm:text-4xl font-normal mb-6 text-white font-sans',
                    children: title,
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-lg text-gray-400 mb-12 font-sans',
                    children: subtitle,
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex flex-col sm:flex-row gap-4 justify-center mb-8',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.$,
                        {
                          href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.github,
                          external: !0,
                          variant: 'primary',
                          children: 'GitHub',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.$,
                        {
                          href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.linkedin,
                          external: !0,
                          variant: 'secondary',
                          children: 'LinkedIn',
                        }
                      ),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'pt-8 border-t border-gray-800',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                      href: 'https://storybook.newth.ai',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'text-sm text-gray-500 hover:text-gray-300 transition-colors',
                      children: 'Component Library →',
                    }),
                  }),
                ],
              }),
            }
          ),
        })
      }
      try {
        ;((ContactSection.displayName = 'ContactSection'),
          (ContactSection.__docgenInfo = {
            description: '',
            displayName: 'ContactSection',
            props: {
              title: {
                defaultValue: { value: 'Ready to ship something amazing?' },
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              subtitle: {
                defaultValue: { value: 'I work with teams that move fast and dream big.' },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/sections/ContactSection.tsx#ContactSection'] = {
              docgenInfo: ContactSection.__docgenInfo,
              name: 'ContactSection',
              path: 'components/sections/ContactSection.tsx#ContactSection',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/sections/HeroSectionOptimized.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { K: () => HeroSection })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/arrow-right.js'),
        _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/chevron-down.js'),
        _components_WarpBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/WarpBackground.tsx'
        ),
        _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './components/ui/SimpleAnimatedButton.tsx'
        )
      function HeroSection({
        title = { line1: 'I ship AI products', line2: 'at massive scale.' },
        subtitle = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
        primaryCTA = { text: 'See My Work', href: '#projects' },
        secondaryCTA = { text: 'Get in Touch', href: '/contact' },
      }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('section', {
          className:
            'relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_WarpBackground__WEBPACK_IMPORTED_MODULE_3__.N,
              { className: 'absolute inset-0' }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'w-full text-center',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-6 md:space-y-8',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('h1', {
                      className:
                        'text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-[-0.02em] leading-[1.05] text-white',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                          className: 'block',
                          children: title.line1,
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                          className:
                            'block bg-gradient-to-br from-violet-200 via-purple-200 to-violet-400 bg-clip-text text-transparent',
                          children: title.line2,
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className:
                        'text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-[1.6] font-light px-6',
                      children: subtitle,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row gap-4 justify-center pt-4',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: primaryCTA.href,
                            variant: 'primary',
                            children: [
                              primaryCTA.text,
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_1__.A,
                                { className: 'ml-2 h-4 w-4' }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: secondaryCTA.href,
                            variant: 'secondary',
                            children: secondaryCTA.text,
                          }
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'absolute bottom-10 left-1/2 -translate-x-1/2 z-10',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
                { className: 'h-6 w-6 text-white/40 animate-bounce' }
              ),
            }),
          ],
        })
      }
      try {
        ;((HeroSection.displayName = 'HeroSection'),
          (HeroSection.__docgenInfo = {
            description: '',
            displayName: 'HeroSection',
            props: {
              title: {
                defaultValue: {
                  value:
                    "{\n    line1: 'I ship AI products',\n    line2: 'at massive scale.',\n  }",
                },
                description: '',
                name: 'title',
                required: !1,
                type: { name: '{ line1: string; line2: string; }' },
              },
              subtitle: {
                defaultValue: {
                  value:
                    'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
                },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              primaryCTA: {
                defaultValue: { value: "{\n    text: 'See My Work',\n    href: '#projects',\n  }" },
                description: '',
                name: 'primaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
              secondaryCTA: {
                defaultValue: { value: "{\n    text: 'Get in Touch',\n    href: '/contact',\n  }" },
                description: '',
                name: 'secondaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/sections/HeroSectionOptimized.tsx#HeroSection'] = {
              docgenInfo: HeroSection.__docgenInfo,
              name: 'HeroSection',
              path: 'components/sections/HeroSectionOptimized.tsx#HeroSection',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/sections/ProjectGridSimple.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => ProjectGrid })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        _barrel_optimize_names_ArrowUpRight_Github_lucide_react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js'),
        _barrel_optimize_names_ArrowUpRight_Github_lucide_react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/github.js'),
        _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./lib/utils.ts'),
        framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        )
      function ProjectGrid({ projects, className }) {
        const getGridClass = (index) =>
          0 === index
            ? 'lg:col-span-2'
            : 1 === index || 2 === index
              ? 'lg:col-span-1'
              : 3 === index
                ? 'lg:col-span-2'
                : 'lg:col-span-1'
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
            'grid grid-cols-1 lg:grid-cols-3 gap-6',
            className
          ),
          children: projects.map((project, index) => {
            var _project_tech
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              framer_motion__WEBPACK_IMPORTED_MODULE_5__.P.div,
              {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                  'relative group',
                  getGridClass(index)
                ),
                whileHover: { y: -2, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className:
                    'relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] overflow-hidden',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                        className:
                          'absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent blur-3xl',
                      }),
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'mb-4',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'span',
                            { className: 'text-xs text-gray-500 font-sans', children: project.year }
                          ),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                          className:
                            'text-xl sm:text-2xl font-semibold mb-3 text-white font-sans transition-colors duration-300',
                          children: project.title,
                        }),
                        project.metrics &&
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                            className: 'flex gap-4 mb-4',
                            children: project.metrics.map((metric, i) =>
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'span',
                                {
                                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(
                                    'text-sm font-medium',
                                    metric.color
                                  ),
                                  children: metric.label,
                                },
                                i
                              )
                            ),
                          }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                          className: 'text-gray-500 mb-6 font-sans leading-relaxed',
                          children: project.description,
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'flex flex-wrap gap-2 mb-6',
                          children:
                            null === (_project_tech = project.tech) || void 0 === _project_tech
                              ? void 0
                              : _project_tech.map((tech) =>
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'span',
                                    {
                                      className:
                                        'px-3 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 font-mono transition-colors duration-200 hover:text-gray-400 hover:bg-white/[0.05]',
                                      children: tech,
                                    },
                                    tech
                                  )
                                ),
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                          className: 'flex gap-4',
                          children: [
                            project.link &&
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                {
                                  href: project.link,
                                  className:
                                    'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                                  children: [
                                    'Visit',
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_ArrowUpRight_Github_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
                                      {
                                        className:
                                          'w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5',
                                      }
                                    ),
                                  ],
                                }
                              ),
                            project.github &&
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                {
                                  href: project.github,
                                  className:
                                    'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                                  children: [
                                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_ArrowUpRight_Github_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,
                                      {
                                        className:
                                          'w-4 h-4 transition-transform group-hover/link:scale-110',
                                      }
                                    ),
                                    'Code',
                                  ],
                                }
                              ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              },
              project.id
            )
          }),
        })
      }
      try {
        ;((ProjectGrid.displayName = 'ProjectGrid'),
          (ProjectGrid.__docgenInfo = {
            description: '',
            displayName: 'ProjectGrid',
            props: {
              projects: {
                defaultValue: null,
                description: '',
                name: 'projects',
                required: !0,
                type: { name: 'Project[]' },
              },
              showFeaturedOnly: {
                defaultValue: null,
                description: '',
                name: 'showFeaturedOnly',
                required: !1,
                type: { name: 'boolean' },
              },
              maxItems: {
                defaultValue: null,
                description: '',
                name: 'maxItems',
                required: !1,
                type: { name: 'number' },
              },
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
            (STORYBOOK_REACT_CLASSES['components/sections/ProjectGridSimple.tsx#ProjectGrid'] = {
              docgenInfo: ProjectGrid.__docgenInfo,
              name: 'ProjectGrid',
              path: 'components/sections/ProjectGridSimple.tsx#ProjectGrid',
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
    './components/ui/SimpleAnimatedButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => SimpleAnimatedButton })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        )
      function SimpleAnimatedButton({
        href,
        onClick,
        children,
        variant = 'primary',
        className = '',
      }) {
        const baseClasses = `\n    inline-flex items-center justify-center\n    px-7 py-3.5\n    text-base font-medium\n    rounded-xl\n    transition-all duration-300\n    select-none\n    ${{ primary: 'bg-white text-black hover:bg-gray-200 transition-colors', secondary: 'bg-transparent text-white border border-white/30 hover:bg-white hover:text-black transition-all' }[variant]}\n    ${className}\n  `,
          content = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.span,
            {
              className: 'flex items-center gap-2',
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              transition: { type: 'spring', stiffness: 400, damping: 20 },
              children,
            }
          )
        return href
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              next_link__WEBPACK_IMPORTED_MODULE_2___default(),
              { href, className: baseClasses, children: content }
            )
          : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
              onClick,
              className: baseClasses,
              children: content,
            })
      }
      try {
        ;((SimpleAnimatedButton.displayName = 'SimpleAnimatedButton'),
          (SimpleAnimatedButton.__docgenInfo = {
            description: '',
            displayName: 'SimpleAnimatedButton',
            props: {
              href: {
                defaultValue: null,
                description: '',
                name: 'href',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
              variant: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'variant',
                required: !1,
                type: { name: 'enum', value: [{ value: '"primary"' }, { value: '"secondary"' }] },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/ui/SimpleAnimatedButton.tsx#SimpleAnimatedButton'
            ] = {
              docgenInfo: SimpleAnimatedButton.__docgenInfo,
              name: 'SimpleAnimatedButton',
              path: 'components/ui/SimpleAnimatedButton.tsx#SimpleAnimatedButton',
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
    './node_modules/lucide-react/dist/esm/createLucideIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => createLucideIcon })
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      const toPascalCase = (string) => {
          const camelCase = ((string) =>
            string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
              p2 ? p2.toUpperCase() : p1.toLowerCase()
            ))(string)
          return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
        },
        mergeClasses = (...classes) =>
          classes
            .filter(
              (className, index, array) =>
                Boolean(className) && '' !== className.trim() && array.indexOf(className) === index
            )
            .join(' ')
            .trim(),
        hasA11yProp = (props) => {
          for (const prop in props)
            if (prop.startsWith('aria-') || 'role' === prop || 'title' === prop) return !0
        }
      var defaultAttributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }
      const Icon = (0, react.forwardRef)(
          (
            {
              color = 'currentColor',
              size = 24,
              strokeWidth = 2,
              absoluteStrokeWidth,
              className = '',
              children,
              iconNode,
              ...rest
            },
            ref
          ) =>
            (0, react.createElement)(
              'svg',
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth: absoluteStrokeWidth
                  ? (24 * Number(strokeWidth)) / Number(size)
                  : strokeWidth,
                className: mergeClasses('lucide', className),
                ...(!children && !hasA11yProp(rest) && { 'aria-hidden': 'true' }),
                ...rest,
              },
              [
                ...iconNode.map(([tag, attrs]) => (0, react.createElement)(tag, attrs)),
                ...(Array.isArray(children) ? children : [children]),
              ]
            )
        ),
        createLucideIcon = (iconName, iconNode) => {
          const Component = (0, react.forwardRef)(({ className, ...props }, ref) => {
            return (0, react.createElement)(Icon, {
              ref,
              iconNode,
              className: mergeClasses(
                `lucide-${((string = toPascalCase(iconName)), string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
                `lucide-${iconName}`,
                className
              ),
              ...props,
            })
            var string
          })
          return ((Component.displayName = toPascalCase(iconName)), Component)
        }
    },
    './node_modules/lucide-react/dist/esm/icons/arrow-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ArrowRight })
      const ArrowRight = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'arrow-right',
        [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/arrow-up-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ArrowUpRight })
      const ArrowUpRight = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'arrow-up-right',
        [
          ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
          ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/chevron-down.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
      const ChevronDown = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'chevron-down',
        [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/github.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Github })
      const Github = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef',
          },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
      ])
    },
    './stories/8-examples/HomePage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => HomePage_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        HeroSectionOptimized = __webpack_require__(
          './components/sections/HeroSectionOptimized.tsx'
        ),
        ProjectGridSimple = __webpack_require__('./components/sections/ProjectGridSimple.tsx'),
        ContactSection = __webpack_require__('./components/sections/ContactSection.tsx')
      const HomePage_stories = {
          title: 'Examples/Pages/Home',
          component: function Home() {
            return (0, jsx_runtime.jsxs)('main', {
              className: 'flex flex-col relative bg-black',
              children: [
                (0, jsx_runtime.jsx)(HeroSectionOptimized.K, {}),
                (0, jsx_runtime.jsx)('section', {
                  id: 'projects',
                  className: 'py-32 px-6 bg-black relative z-10',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'max-w-7xl mx-auto',
                    children: [
                      (0, jsx_runtime.jsx)('h2', {
                        className: 'text-4xl font-bold mb-16 text-white',
                        children: 'Featured Projects',
                      }),
                      (0, jsx_runtime.jsx)(ProjectGridSimple.s, {
                        projects: [
                          {
                            id: 'r3-memory',
                            title: 'r3 — Intelligent Memory for AI',
                            description:
                              'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
                            year: '2025',
                            tags: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
                            tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
                            status: 'active',
                            link: 'https://r3.newth.ai',
                            github: 'https://github.com/n3wth/r3',
                            featured: !0,
                            color: 'text-violet-400',
                            metrics: [
                              { label: '5ms response', color: 'text-violet-400' },
                              { label: 'MCP native', color: 'text-green-400' },
                            ],
                          },
                          {
                            id: 'meat-game',
                            title: 'Meat — The Game',
                            description:
                              'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
                            year: '2025',
                            tags: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
                            tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
                            status: 'experimental',
                            link: 'https://meat.newth.ai',
                            featured: !0,
                            color: 'text-red-400',
                            metrics: [
                              { label: '100% meat', color: 'text-red-400' },
                              { label: '0% vegetarian', color: 'text-pink-400' },
                            ],
                          },
                          {
                            id: 'quartz-knowledge',
                            title: 'Personal Knowledge Graph',
                            description:
                              '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
                            year: '2025',
                            tags: ['Quartz', 'Obsidian', 'Knowledge Management'],
                            tech: ['Quartz', 'Obsidian', 'Knowledge Management'],
                            status: 'active',
                            github: 'https://github.com/n3wth/quartz',
                            featured: !1,
                            color: 'text-emerald-400',
                            metrics: [
                              { label: '1000+ notes', color: 'text-emerald-400' },
                              { label: 'Always growing', color: 'text-teal-400' },
                            ],
                          },
                          {
                            id: 'neuros',
                            title: 'Neuros — AI Dev Experiments',
                            description:
                              'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
                            year: '2025',
                            tags: ['TypeScript', 'MCP', 'AI Tools'],
                            tech: ['TypeScript', 'MCP', 'AI Tools'],
                            status: 'experimental',
                            github: 'https://github.com/n3wth/neuros',
                            featured: !1,
                            color: 'text-orange-400',
                            metrics: [
                              { label: 'Experimental', color: 'text-orange-400' },
                              { label: 'Open source', color: 'text-amber-400' },
                            ],
                          },
                        ],
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(ContactSection.c, {}),
              ],
            })
          },
          parameters: {
            layout: 'fullscreen',
            docs: { description: { component: 'Complete home page with all sections' } },
          },
        },
        Default = {},
        __namedExportsOrder = ['Default']
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
        },
      }
    },
  },
])
