/*! For license information please see 7-cards-ProjectCard-stories.7c7b4f61.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9350],
  {
    './components/ProjectCard.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { U: () => ProjectCard })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js'),
        _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/download.js'),
        _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/github.js'),
        _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/globe.js'),
        _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/star.js'),
        _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./lib/utils.ts')
      const ProjectCard = (0, react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ProjectCard({
        project,
      }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: 'group relative',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className:
              'relative h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'flex items-start justify-between mb-4',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-xl font-medium text-white mb-2',
                        children: project.title,
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                        className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(
                          'inline-flex px-2 py-1 text-xs font-medium rounded-full border',
                          {
                            active: 'bg-green-500/20 text-green-400 border-green-500/30',
                            experimental: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                            archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
                          }[project.status]
                        ),
                        children: project.status,
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex gap-2',
                    children: [
                      project.github &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                          href: project.github,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                          'aria-label': 'View on GitHub',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,
                            { className: 'h-4 w-4 text-gray-400' }
                          ),
                        }),
                      project.link &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                          href: project.link,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                          'aria-label': 'Visit project',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,
                            { className: 'h-4 w-4 text-gray-400' }
                          ),
                        }),
                      project.demo &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                          href: project.demo,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                          'aria-label': 'View demo',
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
                            { className: 'h-4 w-4 text-gray-400' }
                          ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                className: 'text-gray-400 text-sm mb-4 line-clamp-2',
                children: project.description,
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'flex flex-wrap gap-2 mb-4',
                children: [
                  (project.tags || project.tech || []).slice(0, 3).map((tag) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'span',
                      {
                        className:
                          'px-2 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10',
                        children: tag,
                      },
                      tag
                    )
                  ),
                  (project.tags || project.tech || []).length > 3 &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                      className: 'px-2 py-1 text-xs font-medium rounded-lg text-gray-500',
                      children: ['+', (project.tags || project.tech || []).length - 3, ' more'],
                    }),
                ],
              }),
              project.stats &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex items-center gap-4 pt-4 border-t border-white/5',
                  children: [
                    project.stats.stars &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        className: 'flex items-center gap-1 text-xs text-gray-500',
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_6__.A,
                            { className: 'h-3 w-3' }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                            children: project.stats.stars,
                          }),
                        ],
                      }),
                    project.stats.downloads &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        className: 'flex items-center gap-1 text-xs text-gray-500',
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_ArrowUpRight_Download_Github_Globe_Star_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,
                            { className: 'h-3 w-3' }
                          ),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                            children: project.stats.downloads,
                          }),
                        ],
                      }),
                  ],
                }),
              project.featured &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'absolute -top-2 -right-2',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                    className: 'inline-flex rounded-full h-3 w-3 bg-purple-500',
                  }),
                }),
            ],
          }),
        })
      })
      try {
        ;((ProjectCard.displayName = 'ProjectCard'),
          (ProjectCard.__docgenInfo = {
            description: '',
            displayName: 'ProjectCard',
            props: {
              project: {
                defaultValue: null,
                description: '',
                name: 'project',
                required: !0,
                type: { name: 'Project' },
              },
              index: {
                defaultValue: null,
                description: '',
                name: 'index',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ProjectCard.tsx#ProjectCard'] = {
              docgenInfo: ProjectCard.__docgenInfo,
              name: 'ProjectCard',
              path: 'components/ProjectCard.tsx#ProjectCard',
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
    './node_modules/lucide-react/dist/esm/icons/download.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Download })
      const Download = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'download',
        [
          ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
          ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
          ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
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
    './node_modules/lucide-react/dist/esm/icons/globe.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Globe })
      const Globe = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('globe', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
        ['path', { d: 'M2 12h20', key: '9i4pu4' }],
      ])
    },
    './node_modules/lucide-react/dist/esm/icons/star.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Star })
      const Star = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('star', [
        [
          'path',
          {
            d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
            key: 'r04s7s',
          },
        ],
      ])
    },
    './stories/7-cards/ProjectCard.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Featured: () => Featured,
          Grid: () => Grid,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/ProjectCard.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Components/Cards/Project',
          component: _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__.U,
          parameters: {
            layout: 'centered',
            backgrounds: { default: 'dark' },
            docs: {
              description: { component: 'Interactive project card with hover effects and metrics' },
            },
          },
        },
        Default = {
          args: {
            project: {
              id: 'example-project',
              title: 'Example Project',
              description: 'A showcase project demonstrating modern web development techniques',
              year: '2024',
              tags: ['React', 'TypeScript', 'Tailwind'],
              tech: ['React', 'TypeScript', 'Tailwind'],
              status: 'active',
              featured: !1,
              color: 'text-blue-400',
            },
          },
        },
        Featured = {
          args: {
            project: {
              id: 'featured-project',
              title: 'Featured AI Project',
              description:
                'Production-ready AI solution with advanced capabilities and real-time processing',
              year: '2024',
              tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
              tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
              status: 'active',
              link: 'https://example.com',
              github: 'https://github.com',
              featured: !0,
              color: 'text-violet-400',
              metrics: [
                { label: '99.9% uptime', color: 'text-green-400' },
                { label: '<5ms latency', color: 'text-blue-400' },
              ],
            },
          },
        },
        Grid = {
          args: {
            project: {
              id: 'default',
              title: 'Project',
              description: 'Description',
              tags: ['Tech'],
              tech: ['Tech'],
              featured: !1,
              status: 'active',
            },
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    project: {
                      id: 'project-1',
                      title: 'E-commerce Platform',
                      description: 'Full-stack solution with payment processing',
                      year: '2024',
                      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
                      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
                      status: 'active',
                      featured: !0,
                      color: 'text-emerald-400',
                      metrics: [
                        { label: '10K+ users', color: 'text-emerald-400' },
                        { label: '$1M+ processed', color: 'text-green-400' },
                      ],
                    },
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__.U,
                  {
                    project: {
                      id: 'project-2',
                      title: 'Data Analytics Dashboard',
                      description: 'Real-time visualization and reporting',
                      year: '2024',
                      tags: ['React', 'D3.js', 'WebSockets'],
                      tech: ['React', 'D3.js', 'WebSockets'],
                      status: 'active',
                      featured: !1,
                      color: 'text-orange-400',
                    },
                  }
                ),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'Featured', 'Grid']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    project: {\n      id: 'example-project',\n      title: 'Example Project',\n      description: 'A showcase project demonstrating modern web development techniques',\n      year: '2024',\n      tags: ['React', 'TypeScript', 'Tailwind'],\n      tech: ['React', 'TypeScript', 'Tailwind'],\n      // backward compat\n      status: 'active' as const,\n      featured: false,\n      color: 'text-blue-400'\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Featured.parameters = {
          ...Featured.parameters,
          docs: {
            ...Featured.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    project: {\n      id: 'featured-project',\n      title: 'Featured AI Project',\n      description: 'Production-ready AI solution with advanced capabilities and real-time processing',\n      year: '2024',\n      tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],\n      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],\n      // backward compat\n      status: 'active' as const,\n      link: 'https://example.com',\n      github: 'https://github.com',\n      featured: true,\n      color: 'text-violet-400',\n      metrics: [{\n        label: '99.9% uptime',\n        color: 'text-green-400'\n      }, {\n        label: '<5ms latency',\n        color: 'text-blue-400'\n      }]\n    }\n  }\n}",
              ...Featured.parameters?.docs?.source,
            },
          },
        }),
        (Grid.parameters = {
          ...Grid.parameters,
          docs: {
            ...Grid.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    project: {\n      id: 'default',\n      title: 'Project',\n      description: 'Description',\n      tags: ['Tech'],\n      tech: ['Tech'],\n      featured: false,\n      status: 'active' as const\n    }\n  },\n  render: () => <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl\">\n      <ProjectCard project={{\n      id: 'project-1',\n      title: 'E-commerce Platform',\n      description: 'Full-stack solution with payment processing',\n      year: '2024',\n      tags: ['Next.js', 'Stripe', 'PostgreSQL'],\n      tech: ['Next.js', 'Stripe', 'PostgreSQL'],\n      // backward compat\n      status: 'active' as const,\n      featured: true,\n      color: 'text-emerald-400',\n      metrics: [{\n        label: '10K+ users',\n        color: 'text-emerald-400'\n      }, {\n        label: '$1M+ processed',\n        color: 'text-green-400'\n      }]\n    }} />\n      <ProjectCard project={{\n      id: 'project-2',\n      title: 'Data Analytics Dashboard',\n      description: 'Real-time visualization and reporting',\n      year: '2024',\n      tags: ['React', 'D3.js', 'WebSockets'],\n      tech: ['React', 'D3.js', 'WebSockets'],\n      // backward compat\n      status: 'active' as const,\n      featured: false,\n      color: 'text-orange-400'\n    }} />\n    </div>\n}",
              ...Grid.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
