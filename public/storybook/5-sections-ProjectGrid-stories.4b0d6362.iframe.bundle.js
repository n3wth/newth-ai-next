/*! For license information please see 5-sections-ProjectGrid-stories.4b0d6362.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9145],
  {
    './components/sections/ProjectGridSimple.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => ProjectGrid })
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        arrow_up_right = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/arrow-up-right.js'
        ),
        github = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/github.js'),
        utils = __webpack_require__('./lib/utils.ts'),
        proxy = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        dist = __webpack_require__('./node_modules/@vercel/analytics/dist/index.mjs')
      function useProjectAnalytics() {
        const { trackProjectClick, isTrackingAllowed } = (function useAnalytics(options = {}) {
          const { enableLocalStorage = !1, sessionTimeout = 30, respectDoNotTrack = !0 } = options,
            [analyticsState, setAnalyticsState] = (0, react.useState)({
              sessionId: '',
              eventsCount: 0,
              lastActivity: Date.now(),
              consentGiven: null,
            }),
            [eventQueue, setEventQueue] = (0, react.useState)([]),
            generateSessionId = (0, react.useCallback)(
              () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              []
            ),
            isTrackingAllowed = (0, react.useCallback)(
              () =>
                (!respectDoNotTrack ||
                  'undefined' == typeof navigator ||
                  '1' !== navigator.doNotTrack) &&
                !1 !== analyticsState.consentGiven,
              [respectDoNotTrack, analyticsState.consentGiven]
            )
          ;((0, react.useEffect)(() => {
            if (!analyticsState.sessionId) {
              const newSessionId = generateSessionId()
              if (
                (setAnalyticsState((prev) => ({
                  ...prev,
                  sessionId: newSessionId,
                  lastActivity: Date.now(),
                })),
                enableLocalStorage)
              )
                try {
                  const consent = localStorage.getItem('analytics-consent')
                  null !== consent &&
                    setAnalyticsState((prev) => ({ ...prev, consentGiven: 'true' === consent }))
                } catch (error) {}
            }
          }, [enableLocalStorage]),
            (0, react.useEffect)(() => {
              const interval = setInterval(() => {
                setAnalyticsState((prev) => {
                  const now = Date.now()
                  return now - prev.lastActivity > 60 * sessionTimeout * 1e3
                    ? { ...prev, sessionId: generateSessionId(), eventsCount: 0, lastActivity: now }
                    : prev
                })
              }, 6e4)
              return () => clearInterval(interval)
            }, [sessionTimeout]))
          const setConsent = (0, react.useCallback)(
              (consent) => {
                if (
                  (setAnalyticsState((prev) => ({ ...prev, consentGiven: consent })),
                  enableLocalStorage)
                )
                  try {
                    localStorage.setItem('analytics-consent', consent.toString())
                  } catch (error) {}
                consent || setEventQueue([])
              },
              [enableLocalStorage]
            ),
            trackEvent = (0, react.useCallback)(
              (event) => {
                if (!isTrackingAllowed()) return
                const fullEvent = {
                  ...event,
                  timestamp: Date.now(),
                  sessionId: analyticsState.sessionId,
                }
                ;(setEventQueue((prev) => [...prev, fullEvent]),
                  setAnalyticsState((prev) => ({
                    ...prev,
                    lastActivity: Date.now(),
                    eventsCount: prev.eventsCount + 1,
                  })))
                const privacyFriendlyProperties = {
                  ...event.properties,
                  sessionId: analyticsState.sessionId,
                }
                try {
                  ;(0, dist.u4)(event.name, privacyFriendlyProperties)
                } catch (error) {}
              },
              [isTrackingAllowed, analyticsState.sessionId]
            ),
            trackProjectClick = (0, react.useCallback)(
              (projectId, projectTitle, linkType, position) => {
                const eventData = {
                  projectId,
                  projectTitle,
                  linkType,
                  position,
                  timestamp: Date.now(),
                  userAgent: navigator.userAgent,
                  referrer: document.referrer,
                }
                trackEvent({
                  name: 'project_click',
                  properties: {
                    projectId,
                    projectTitle,
                    linkType,
                    position,
                    hasReferrer: !!eventData.referrer,
                    isMobile: /Mobile|Android/i.test(eventData.userAgent || ''),
                    isDesktop: !/Mobile|Android/i.test(eventData.userAgent || ''),
                  },
                })
              },
              [trackEvent]
            ),
            getAnalyticsSummary = (0, react.useCallback)(
              () => ({
                sessionId: analyticsState.sessionId,
                eventsCount: analyticsState.eventsCount,
                queuedEvents: eventQueue.length,
                trackingAllowed: isTrackingAllowed(),
                consentGiven: analyticsState.consentGiven,
                lastActivity: new Date(analyticsState.lastActivity).toISOString(),
              }),
              [analyticsState, eventQueue.length, isTrackingAllowed]
            ),
            clearAnalyticsData = (0, react.useCallback)(() => {
              if (
                (setEventQueue([]),
                setAnalyticsState((prev) => ({
                  ...prev,
                  eventsCount: 0,
                  sessionId: generateSessionId(),
                  lastActivity: Date.now(),
                })),
                enableLocalStorage)
              )
                try {
                  localStorage.removeItem('analytics-consent')
                } catch (error) {}
            }, [enableLocalStorage, generateSessionId]),
            trackingAllowed = (0, react.useMemo)(() => isTrackingAllowed(), [isTrackingAllowed])
          return {
            trackEvent,
            trackProjectClick,
            setConsent,
            consentGiven: analyticsState.consentGiven,
            sessionId: analyticsState.sessionId,
            isTrackingAllowed: trackingAllowed,
            getAnalyticsSummary,
            clearAnalyticsData,
            eventQueue: (0, react.useMemo)(() => eventQueue.slice(-10), [eventQueue]),
          }
        })({ enableLocalStorage: !1, respectDoNotTrack: !0 })
        return { trackProjectClick, isTrackingAllowed }
      }
      function ProjectGrid({ projects, className }) {
        const { trackProjectClick, isTrackingAllowed } = useProjectAnalytics(),
          getGridClass = (index) =>
            0 === index
              ? 'lg:col-span-2'
              : 1 === index || 2 === index
                ? 'lg:col-span-1'
                : 3 === index
                  ? 'lg:col-span-2'
                  : 'lg:col-span-1',
          handleProjectClick = (projectId, projectTitle, linkType, position) => {
            isTrackingAllowed && trackProjectClick(projectId, projectTitle, linkType, position)
          }
        return (0, jsx_runtime.jsx)('div', {
          className: (0, utils.cn)('grid grid-cols-1 lg:grid-cols-3 gap-6', className),
          children: projects.map((project, index) => {
            var _project_tech
            return (0, jsx_runtime.jsx)(
              proxy.P.div,
              {
                className: (0, utils.cn)('relative group', getGridClass(index)),
                whileHover: { y: -2, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } },
                'data-analytics-project-id': project.id,
                'data-analytics-project-title': project.title,
                'data-analytics-position': index,
                children: (0, jsx_runtime.jsxs)('div', {
                  className:
                    'relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] overflow-hidden',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className:
                        'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                      children: (0, jsx_runtime.jsx)('div', {
                        className:
                          'absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent blur-3xl',
                      }),
                    }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, jsx_runtime.jsx)('div', {
                          className: 'mb-4',
                          children: (0, jsx_runtime.jsx)('span', {
                            className: 'text-xs text-gray-500 font-sans',
                            children: project.year,
                          }),
                        }),
                        (0, jsx_runtime.jsx)('h3', {
                          className:
                            'text-xl sm:text-2xl font-semibold mb-3 text-white font-sans transition-colors duration-300',
                          children: project.title,
                        }),
                        project.metrics &&
                          (0, jsx_runtime.jsx)('div', {
                            className: 'flex gap-4 mb-4',
                            children: project.metrics.map((metric, i) =>
                              (0, jsx_runtime.jsx)(
                                'span',
                                {
                                  className: (0, utils.cn)('text-sm font-medium', metric.color),
                                  children: metric.label,
                                },
                                i
                              )
                            ),
                          }),
                        (0, jsx_runtime.jsx)('p', {
                          className: 'text-gray-500 mb-6 font-sans leading-relaxed',
                          children: project.description,
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'flex flex-wrap gap-2 mb-6',
                          children:
                            null === (_project_tech = project.tech) || void 0 === _project_tech
                              ? void 0
                              : _project_tech.map((tech) =>
                                  (0, jsx_runtime.jsx)(
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
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex gap-4',
                          children: [
                            project.link &&
                              (0, jsx_runtime.jsxs)(link_default(), {
                                href: project.link,
                                className:
                                  'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                                onClick: () =>
                                  handleProjectClick(project.id, project.title, 'visit', index),
                                'data-analytics-link-type': 'visit',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: [
                                  'Visit',
                                  (0, jsx_runtime.jsx)(arrow_up_right.A, {
                                    className:
                                      'w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5',
                                  }),
                                ],
                              }),
                            project.github &&
                              (0, jsx_runtime.jsxs)(link_default(), {
                                href: project.github,
                                className:
                                  'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                                onClick: () =>
                                  handleProjectClick(project.id, project.title, 'github', index),
                                'data-analytics-link-type': 'github',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: [
                                  (0, jsx_runtime.jsx)(github.A, {
                                    className:
                                      'w-4 h-4 transition-transform group-hover/link:scale-110',
                                  }),
                                  'Code',
                                ],
                              }),
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
    './node_modules/@vercel/analytics/dist/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { u4: () => track })
      var console = __webpack_require__('./node_modules/console-browserify/index.js')
      function isBrowser() {
        return 'undefined' != typeof window
      }
      function detectEnvironment() {
        try {
          const env = 'production'
          if ('development' === env || 'test' === env) return 'development'
        } catch (e) {}
        return 'production'
      }
      function getMode() {
        return (isBrowser() ? window.vam : detectEnvironment()) || 'production'
      }
      function isProduction() {
        return 'production' === getMode()
      }
      function isDevelopment() {
        return 'development' === getMode()
      }
      function removeKey(key, { [key]: _, ...rest }) {
        return rest
      }
      function track(name2, properties, options) {
        var _a, _b
        if (!isBrowser()) {
          const msg =
            '[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment'
          if (!isProduction()) throw new Error(msg)
          return void console.warn(msg)
        }
        if (properties)
          try {
            const props = (function parseProperties(properties, options) {
              if (!properties) return
              let props = properties
              const errorProperties = []
              for (const [key, value] of Object.entries(properties))
                'object' == typeof value &&
                  null !== value &&
                  (options.strip ? (props = removeKey(key, props)) : errorProperties.push(key))
              if (errorProperties.length > 0 && !options.strip)
                throw Error(
                  `The following properties are not valid: ${errorProperties.join(', ')}. Only strings, numbers, booleans, and null are allowed.`
                )
              return props
            })(properties, { strip: isProduction() })
            null == (_b = window.va) ||
              _b.call(window, 'event', { name: name2, data: props, options })
          } catch (err) {
            err instanceof Error && isDevelopment() && console.error(err)
          }
        else null == (_a = window.va) || _a.call(window, 'event', { name: name2, options })
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
