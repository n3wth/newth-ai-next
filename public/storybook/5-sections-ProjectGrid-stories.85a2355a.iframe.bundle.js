/*! For license information please see 5-sections-ProjectGrid-stories.85a2355a.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [145],
  {
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
    './stories/5-sections/ProjectGrid.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          ManyProjects: () => ManyProjects,
          SingleProject: () => SingleProject,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Sections/Project Grid',
          component: __webpack_require__('./components/sections/ProjectGridSimple.tsx').s,
          parameters: {
            layout: 'padded',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Grid layout for displaying project cards' } },
          },
        },
        sampleProjects = [
          {
            id: 'ai-memory',
            title: 'AI Memory Layer',
            description:
              'Production-ready memory system for LLMs with sub-millisecond response times',
            year: '2024',
            tags: ['TypeScript', 'Redis', 'MCP Protocol'],
            tech: ['TypeScript', 'Redis', 'MCP Protocol'],
            status: 'active',
            link: 'https://example.com',
            github: 'https://github.com',
            featured: !0,
            color: 'text-violet-400',
            metrics: [
              { label: '5ms response', color: 'text-violet-400' },
              { label: '1000+ users', color: 'text-green-400' },
            ],
          },
          {
            id: 'data-viz',
            title: 'Data Visualization Platform',
            description: 'Interactive dashboards for complex data analysis',
            year: '2024',
            tags: ['React', 'D3.js', 'WebGL'],
            tech: ['React', 'D3.js', 'WebGL'],
            status: 'experimental',
            featured: !1,
            color: 'text-blue-400',
          },
          {
            id: 'ecommerce',
            title: 'E-commerce Solution',
            description: 'Full-stack marketplace with real-time inventory',
            year: '2024',
            tags: ['Next.js', 'Stripe', 'PostgreSQL'],
            tech: ['Next.js', 'Stripe', 'PostgreSQL'],
            status: 'active',
            featured: !0,
            color: 'text-emerald-400',
            metrics: [{ label: '99.9% uptime', color: 'text-green-400' }],
          },
        ],
        Default = { args: { projects: sampleProjects } },
        SingleProject = { args: { projects: [sampleProjects[0]] } },
        ManyProjects = {
          args: {
            projects: [...sampleProjects, ...sampleProjects].map((p, i) => ({
              ...p,
              id: `${p.id}-${i}`,
            })),
          },
        },
        __namedExportsOrder = ['Default', 'SingleProject', 'ManyProjects']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    projects: sampleProjects\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (SingleProject.parameters = {
          ...SingleProject.parameters,
          docs: {
            ...SingleProject.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    projects: [sampleProjects[0]]\n  }\n}',
              ...SingleProject.parameters?.docs?.source,
            },
          },
        }),
        (ManyProjects.parameters = {
          ...ManyProjects.parameters,
          docs: {
            ...ManyProjects.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    projects: [...sampleProjects, ...sampleProjects].map((p, i) => ({\n      ...p,\n      id: `${p.id}-${i}`\n    }))\n  }\n}',
              ...ManyProjects.parameters?.docs?.source,
            },
          },
        }))
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
            (STORYBOOK_REACT_CLASSES['stories/5-sections/ProjectGrid.stories.tsx#ProjectGrid'] = {
              docgenInfo: ProjectGrid.__docgenInfo,
              name: 'ProjectGrid',
              path: 'stories/5-sections/ProjectGrid.stories.tsx#ProjectGrid',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
