'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9088],
  {
    './components/WarpBackgroundLazy.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => WarpBackgroundLazy })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dynamic.js'
        ),
        next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_dynamic__WEBPACK_IMPORTED_MODULE_1__
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const WarpBackgroundDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(
          () =>
            Promise.all([__webpack_require__.e(8831), __webpack_require__.e(5092)])
              .then(
                __webpack_require__.bind(__webpack_require__, './components/WarpBackground.tsx')
              )
              .then((mod) => ({ default: mod.WarpBackground })),
          {
            loadableGenerated: { webpack: () => ['./components/WarpBackground.tsx'] },
            ssr: !1,
            loading: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WarpBackgroundFallback, {}),
          }
        ),
        WarpBackgroundFallback = () =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'absolute inset-0 bg-black',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'absolute inset-0 opacity-10',
                style: {
                  background:
                    '\n          linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),\n          linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)\n        ',
                  backgroundSize: '50px 50px',
                },
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'absolute inset-0 flex items-center justify-center',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'w-8 h-8 border-2 border-violet-500/20 border-t-violet-500/40 rounded-full animate-spin',
                }),
              }),
            ],
          }),
        WarpBackgroundLazy = (props) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react__WEBPACK_IMPORTED_MODULE_2__.Suspense,
            {
              fallback: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                WarpBackgroundFallback,
                {}
              ),
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                WarpBackgroundDynamic,
                { ...props }
              ),
            }
          )
      WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'
      try {
        ;((WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'),
          (WarpBackgroundLazy.__docgenInfo = {
            description: '',
            displayName: 'WarpBackgroundLazy',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/WarpBackgroundLazy.tsx#WarpBackgroundLazy'] = {
              docgenInfo: WarpBackgroundLazy.__docgenInfo,
              name: 'WarpBackgroundLazy',
              path: 'components/WarpBackgroundLazy.tsx#WarpBackgroundLazy',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
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
          role: 'region',
          'aria-labelledby': 'contact-heading',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_layout_Container__WEBPACK_IMPORTED_MODULE_2__.m,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'text-center',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    id: 'contact-heading',
                    className: 'text-3xl sm:text-4xl font-normal mb-6 text-white font-sans',
                    children: title,
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                    className: 'text-lg text-gray-400 mb-12 font-sans',
                    children: subtitle,
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'flex flex-col sm:flex-row gap-4 justify-center mb-8',
                    role: 'group',
                    'aria-label': 'Social media links',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.$,
                        {
                          href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.github,
                          external: !0,
                          variant: 'primary',
                          'aria-label': 'Visit my GitHub profile',
                          children: 'GitHub',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__.$,
                        {
                          href: _lib_config_social__WEBPACK_IMPORTED_MODULE_3__.l.linkedin,
                          external: !0,
                          variant: 'secondary',
                          'aria-label': 'Visit my LinkedIn profile',
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
                      'aria-label': 'View my component library on Storybook (opens in new tab)',
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
        _components_WarpBackgroundLazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/WarpBackgroundLazy.tsx'
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
          role: 'banner',
          'aria-labelledby': 'hero-heading',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_WarpBackgroundLazy__WEBPACK_IMPORTED_MODULE_3__.v,
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
                      id: 'hero-heading',
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
                      role: 'group',
                      'aria-label': 'Primary actions',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: primaryCTA.href,
                            variant: 'primary',
                            'aria-label': 'View my work and projects',
                            children: [
                              primaryCTA.text,
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_1__.A,
                                { className: 'ml-2 h-4 w-4', 'aria-hidden': 'true' }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: secondaryCTA.href,
                            variant: 'secondary',
                            'aria-label': 'Contact me',
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
              'aria-label': 'Scroll down for more content',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
                { className: 'h-6 w-6 text-white/40 animate-bounce', 'aria-hidden': 'true' }
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
                (!respectDoNotTrack || '1' !== navigator.doNotTrack) &&
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
          }, [analyticsState.sessionId, generateSessionId, enableLocalStorage]),
            (0, react.useEffect)(() => {
              const interval = setInterval(() => {
                const now = Date.now()
                now - analyticsState.lastActivity > 60 * sessionTimeout * 1e3 &&
                  setAnalyticsState((prev) => ({
                    ...prev,
                    sessionId: generateSessionId(),
                    eventsCount: 0,
                    lastActivity: now,
                  }))
              }, 6e4)
              return () => clearInterval(interval)
            }, [analyticsState.lastActivity, sessionTimeout, generateSessionId]))
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
            }, [enableLocalStorage, generateSessionId])
          return {
            trackEvent,
            trackProjectClick,
            setConsent,
            consentGiven: analyticsState.consentGiven,
            sessionId: analyticsState.sessionId,
            isTrackingAllowed: isTrackingAllowed(),
            getAnalyticsSummary,
            clearAnalyticsData,
            eventQueue: eventQueue.slice(-10),
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
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
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
            _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.span,
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
              role: 'main',
              'aria-label': 'Homepage',
              children: [
                (0, jsx_runtime.jsx)(HeroSectionOptimized.K, {}),
                (0, jsx_runtime.jsx)('section', {
                  id: 'projects',
                  className: 'py-32 px-6 bg-black relative z-10',
                  role: 'region',
                  'aria-labelledby': 'projects-heading',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'max-w-7xl mx-auto',
                    children: [
                      (0, jsx_runtime.jsx)('h2', {
                        id: 'projects-heading',
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
