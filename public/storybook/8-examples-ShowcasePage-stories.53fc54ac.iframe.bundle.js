'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [6526],
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
    './components/Meteors.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { G: () => Meteors })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./lib/utils.ts')
      function seededRandom(seed) {
        const x = 1e4 * Math.sin(seed)
        return x - Math.floor(x)
      }
      const Meteors = ({ number = 20, className }) => {
        const meteors = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
          () =>
            new Array(number).fill(!0).map((_, idx) => {
              const seed = idx + 1
              return {
                top: Math.floor(100 * seededRandom(2 * seed)),
                left: Math.floor(100 * seededRandom(3 * seed)),
                delay: 3 * seededRandom(5 * seed),
                duration: Math.floor(5 * seededRandom(7 * seed)) + 5,
              }
            }),
          [number]
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: meteors.map((meteor, idx) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                'span',
                {
                  className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                    'absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
                    "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                    className
                  ),
                  style: {
                    top: `${meteor.top}%`,
                    left: `${meteor.left}%`,
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.duration}s`,
                  },
                },
                idx
              )
            ),
          }
        )
      }
      try {
        ;((Meteors.displayName = 'Meteors'),
          (Meteors.__docgenInfo = {
            description: '',
            displayName: 'Meteors',
            props: {
              number: {
                defaultValue: { value: '20' },
                description: '',
                name: 'number',
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
            (STORYBOOK_REACT_CLASSES['components/Meteors.tsx#Meteors'] = {
              docgenInfo: Meteors.__docgenInfo,
              name: 'Meteors',
              path: 'components/Meteors.tsx#Meteors',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
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
                  (project.tags || project.tech || [])
                    .slice(0, 3)
                    .map((tag) =>
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
    './components/backgrounds/CodeRainBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { K: () => CodeRainBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const CodeRainBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const columns = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const cols = [],
            terms = ['AI', 'ML', '01', '{}', '[]', '<>', 'fn', '=>', '::'],
            colors = ['#00FF41', '#39FF14', '#00D9FF', '#7B68EE']
          for (let i = 0; i < 30; i++)
            cols.push({
              id: i,
              x: 3 + 3.3 * i,
              chars: Array(8)
                .fill(0)
                .map(() => terms[Math.floor(Math.random() * terms.length)]),
              speed: 10 + 10 * Math.random(),
              delay: 5 * Math.random(),
              color: colors[i % colors.length],
            })
          return cols
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: `absolute inset-0 overflow-hidden opacity-60 ${className || ''}`,
          children: columns.map((col) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
              {
                className: 'absolute text-sm font-mono font-bold',
                style: {
                  left: `${col.x}%`,
                  color: col.color,
                  textShadow: `0 0 10px ${col.color}`,
                  writingMode: 'vertical-lr',
                },
                initial: { y: -200 },
                animate: { y: '100vh' },
                transition: {
                  duration: col.speed,
                  repeat: 1 / 0,
                  delay: col.delay,
                  ease: 'linear',
                },
                children: col.chars.map((char, i) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.span,
                    {
                      className: 'block',
                      animate: { opacity: [0.3, 1, 1, 0.5] },
                      transition: { duration: 2, repeat: 1 / 0, delay: 0.2 * i },
                      children: char,
                    },
                    i
                  )
                ),
              },
              col.id
            )
          ),
        })
      })
      CodeRainBackground.displayName = 'CodeRainBackground'
      try {
        ;((CodeRainBackground.displayName = 'CodeRainBackground'),
          (CodeRainBackground.__docgenInfo = {
            description: '',
            displayName: 'CodeRainBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/CodeRainBackground.tsx#CodeRainBackground'
            ] = {
              docgenInfo: CodeRainBackground.__docgenInfo,
              name: 'CodeRainBackground',
              path: 'components/backgrounds/CodeRainBackground.tsx#CodeRainBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/DataFlowBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => DataFlowBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs'
          ),
        _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const DataFlowBackground = react__WEBPACK_IMPORTED_MODULE_3__.memo(({ className }) => {
        const [dataPoints, setDataPoints] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)([])
        ;(0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
          const interval = setInterval(() => {
            setDataPoints((prev) => {
              const newPoints = [...prev]
              return (
                newPoints.length < 20 &&
                  newPoints.push({ id: Date.now(), path: Math.floor(3 * Math.random()) }),
                newPoints.length > 20 && newPoints.shift(),
                newPoints
              )
            })
          }, 500)
          return () => clearInterval(interval)
        }, [])
        const colors = ['#00D9FF', '#FF6B6B', '#4ECDC4']
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'absolute inset-0 opacity-20',
              style: {
                backgroundImage:
                  '\n            linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),\n            linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)\n          ',
                backgroundSize: '50px 50px',
              },
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('defs', {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('filter', {
                    id: 'glow',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feGaussianBlur', {
                        stdDeviation: '3',
                        result: 'coloredBlur',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('feMerge', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                            in: 'coloredBlur',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                            in: 'SourceGraphic',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                [
                  'M 10 50 Q 30 20, 50 50 T 90 50',
                  'M 10 50 L 50 50 L 90 50',
                  'M 10 50 Q 30 80, 50 50 T 90 50',
                ].map((path, i) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                      .P.path,
                    {
                      d: path,
                      stroke: colors[i],
                      strokeWidth: '3',
                      fill: 'none',
                      strokeDasharray: '10 5',
                      filter: 'url(#glow)',
                      initial: { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { duration: 2, ease: 'easeInOut' },
                      style: { transform: `translateY(${100 * i}px)`, opacity: 0.8 },
                    },
                    i
                  )
                ),
              ],
            }),
            [...Array(40)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                  .P.div,
                {
                  className: 'absolute text-base font-mono font-bold',
                  style: {
                    left: 2 + 2.5 * i + '%',
                    color: colors[i % colors.length],
                    textShadow: `0 0 10px ${colors[i % colors.length]}`,
                  },
                  initial: { y: -20, opacity: 0 },
                  animate: { y: '100vh', opacity: [0, 1, 1, 0] },
                  transition: {
                    duration: 6 + 3 * Math.random(),
                    repeat: 1 / 0,
                    delay: 6 * Math.random(),
                    ease: 'linear',
                  },
                  children: Math.random() > 0.5 ? '1' : '0',
                },
                `binary-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.N,
              {
                children: dataPoints.map((point) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                      .P.div,
                    {
                      className: 'absolute w-3 h-3 rounded-full',
                      style: {
                        backgroundColor: colors[point.path],
                        boxShadow: `0 0 20px ${colors[point.path]}`,
                      },
                      initial: { x: '10vw', y: '50vh' },
                      animate: { x: '90vw', y: 50 + 20 * (point.path - 1) + 'vh' },
                      exit: { opacity: 0, scale: 0 },
                      transition: { duration: 3, ease: 'easeOut' },
                    },
                    point.id
                  )
                ),
              }
            ),
            [25, 50, 75].map((x, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                  .P.div,
                {
                  className: 'absolute',
                  style: { left: `${x}%`, top: '50%', transform: 'translate(-50%, -50%)' },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                        .P.div,
                      {
                        className: 'w-16 h-16 border-3 rounded-xl',
                        style: {
                          borderColor: colors[i],
                          borderWidth: '3px',
                          boxShadow: `0 0 40px ${colors[i]}`,
                          background: `radial-gradient(circle, ${colors[i]}20, transparent)`,
                        },
                        animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
                        transition: {
                          rotate: { duration: 4, repeat: 1 / 0, ease: 'linear' },
                          scale: { duration: 2, repeat: 1 / 0, ease: 'easeInOut' },
                        },
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                        .P.div,
                      {
                        className: 'absolute inset-0 bg-gradient-to-r rounded-xl',
                        style: {
                          background: `radial-gradient(circle, ${colors[i]}40, transparent)`,
                        },
                        animate: { opacity: [0.3, 1, 0.3] },
                        transition: { duration: 2, repeat: 1 / 0, delay: 0.3 * i },
                      }
                    ),
                  ],
                },
                `node-${i}`
              )
            ),
            [...Array(5)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_AnimatePresence_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__
                  .P.div,
                {
                  className: 'absolute text-xs font-mono text-cyan-400/60',
                  style: { left: 20 + 15 * i + '%', top: 20 + (i % 2) * 60 + '%' },
                  animate: { opacity: [0, 1, 0] },
                  transition: { duration: 3, repeat: 1 / 0, delay: 0.6 * i },
                  children: '<data/>',
                },
                `text-${i}`
              )
            ),
          ],
        })
      })
      DataFlowBackground.displayName = 'DataFlowBackground'
      try {
        ;((DataFlowBackground.displayName = 'DataFlowBackground'),
          (DataFlowBackground.__docgenInfo = {
            description: '',
            displayName: 'DataFlowBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/DataFlowBackground.tsx#DataFlowBackground'
            ] = {
              docgenInfo: DataFlowBackground.__docgenInfo,
              name: 'DataFlowBackground',
              path: 'components/backgrounds/DataFlowBackground.tsx#DataFlowBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/GlitchBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => GlitchBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/styled-jsx/style.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const GlitchBackground = react__WEBPACK_IMPORTED_MODULE_3__.memo(({ className }) => {
        const glitchBars = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
          const bars = [],
            colors = ['#FF0080', '#00FFFF', '#FFFF00', '#FF00FF', '#00FF00']
          for (let i = 0; i < 8; i++)
            bars.push({
              id: i,
              y: 100 * Math.random(),
              width: 100,
              height: 0.5 + 3 * Math.random(),
              color: colors[i % colors.length],
              duration: 0.05 + 0.15 * Math.random(),
              delay: 3 * Math.random(),
            })
          return bars
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `jsx-5cc58576699249db absolute inset-0 overflow-hidden ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: {
                background:
                  'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
              },
              className: 'jsx-5cc58576699249db absolute inset-0',
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(\n            0deg,\n            transparent,\n            transparent 2px,\n            rgba(0, 255, 255, 0.03) 2px,\n            rgba(0, 255, 255, 0.03) 4px\n          )',
                animation: 'scanlines 8s linear infinite',
              },
              className: 'jsx-5cc58576699249db absolute inset-0 opacity-50',
            }),
            [...Array(6)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: 80 * Math.random() + '%',
                    top: 80 * Math.random() + '%',
                    width: 100 + 200 * Math.random() + 'px',
                    height: 50 + 100 * Math.random() + 'px',
                  },
                  animate: {
                    opacity: [0, 0, 1, 1, 0],
                    x: [0, -20, 10, -5, 0],
                    scaleX: [1, 1.2, 0.8, 1.1, 1],
                  },
                  transition: {
                    duration: 0.2,
                    repeat: 1 / 0,
                    repeatDelay: 4 + 8 * Math.random(),
                    times: [0, 0.2, 0.5, 0.8, 1],
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    style: {
                      background: `linear-gradient(90deg,\n                transparent 0%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 20%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}80 50%,\n                ${['#FF0080', '#00FFFF', '#FFFF00'][i % 3]}40 80%,\n                transparent 100%)`,
                      mixBlendMode: 'screen',
                    },
                    className: 'jsx-5cc58576699249db w-full h-full',
                  }),
                },
                `block-${i}`
              )
            ),
            glitchBars.map((bar) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute w-full',
                  style: {
                    top: `${bar.y}%`,
                    height: `${bar.height}%`,
                    background: `linear-gradient(90deg,\n              transparent 0%,\n              ${bar.color} 10%,\n              ${bar.color} 90%,\n              transparent 100%)`,
                    mixBlendMode: 'screen',
                  },
                  animate: {
                    opacity: [0, 1, 1, 0],
                    scaleX: [0.8, 1.2, 1, 0.9],
                    x: [-50, 50, -30, 0],
                  },
                  transition: {
                    duration: bar.duration,
                    repeat: 1 / 0,
                    delay: bar.delay,
                    repeatDelay: 2 + 4 * Math.random(),
                  },
                },
                bar.id
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className: 'absolute inset-0 pointer-events-none',
                animate: { x: [0, -3, 2, -1, 0] },
                transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, transparent 50%)',
                    mixBlendMode: 'screen',
                  },
                  className: 'jsx-5cc58576699249db absolute inset-0',
                }),
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className: 'absolute inset-0 pointer-events-none',
                animate: { x: [0, 2, -3, 1, 0] },
                transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 3, delay: 0.05 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    background: 'linear-gradient(-45deg, rgba(0,255,255,0.1) 0%, transparent 50%)',
                    mixBlendMode: 'screen',
                  },
                  className: 'jsx-5cc58576699249db absolute inset-0',
                }),
              }
            ),
            [...Array(50)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: 100 * Math.random() + '%',
                    top: 100 * Math.random() + '%',
                    width: '2px',
                    height: '2px',
                    backgroundColor: ['#FF0080', '#00FFFF', '#FFFF00', '#00FF00'][i % 4],
                  },
                  animate: { opacity: [0, 1, 0] },
                  transition: {
                    duration: 0.1,
                    repeat: 1 / 0,
                    delay: 5 * Math.random(),
                    repeatDelay: 2 * Math.random(),
                  },
                },
                `noise-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
              {
                className:
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none',
                animate: { opacity: [0, 0, 0.3, 0.3, 0], scale: [0.8, 1, 1.2, 1, 0.8] },
                transition: { duration: 0.3, repeat: 1 / 0, repeatDelay: 8 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  style: {
                    textShadow:
                      '\n            2px 2px 0 #FF0080,\n            -2px -2px 0 #00FFFF,\n            0 0 30px #00FFFF\n          ',
                  },
                  className: 'jsx-5cc58576699249db text-8xl font-mono font-bold text-cyan-400/30',
                  children: 'ERROR',
                }),
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),
              {
                id: '5cc58576699249db',
                children:
                  '@keyframes scanlines{0%{transform:translatey(0)}100%{transform:translatey(10px)}}',
              }
            ),
          ],
        })
      })
      GlitchBackground.displayName = 'GlitchBackground'
      try {
        ;((GlitchBackground.displayName = 'GlitchBackground'),
          (GlitchBackground.__docgenInfo = {
            description: '',
            displayName: 'GlitchBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/GlitchBackground.tsx#GlitchBackground'
            ] = {
              docgenInfo: GlitchBackground.__docgenInfo,
              name: 'GlitchBackground',
              path: 'components/backgrounds/GlitchBackground.tsx#GlitchBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/NeuralNetworkBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { U: () => NeuralNetworkBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      function seededRandom(seed) {
        const x = 1e4 * Math.sin(seed)
        return x - Math.floor(x)
      }
      const NeuralNetworkBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const nodes = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
            const nodeArray = [],
              colors = ['#00D9FF', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#7B68EE']
            for (let i = 0; i < 25; i++) {
              const depth = seededRandom(1.1 * i)
              nodeArray.push({
                id: i,
                x: 100 * seededRandom(2.3 * i),
                y: 100 * seededRandom(3.7 * i),
                color: colors[Math.floor(seededRandom(5.2 * i) * colors.length)],
                size: (4 + 8 * seededRandom(7.1 * i)) * (0.5 + 0.5 * depth),
                delay: 2 * seededRandom(11.3 * i),
                depth,
                opacity: 0.3 + 0.7 * depth,
                animationDuration: 4 + 4 * seededRandom(13.5 * i),
                pulseScale: 1.2 + 0.5 * seededRandom(17.7 * i),
              })
            }
            return nodeArray.sort((a, b) => a.depth - b.depth)
          }, []),
          connections = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
            const connectionArray = []
            for (let i = 0; i < nodes.length; i++) {
              const numConnections = 1 + Math.floor(2 * seededRandom(19.1 * i))
              for (let j = 0; j < numConnections; j++) {
                const targetIndex = Math.floor(seededRandom(23.3 * i + 29.7 * j) * nodes.length)
                targetIndex !== i &&
                  connectionArray.push({
                    from: nodes[i],
                    to: nodes[targetIndex],
                    opacity: 0.5 * Math.min(nodes[i].opacity, nodes[targetIndex].opacity),
                    delay: 3 * seededRandom(31.2 * i + 37.5 * j),
                  })
              }
            }
            return connectionArray
          }, [nodes])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: connections.map((conn, i) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.line,
                  {
                    x1: `${conn.from.x}%`,
                    y1: `${conn.from.y}%`,
                    x2: `${conn.to.x}%`,
                    y2: `${conn.to.y}%`,
                    stroke: conn.from.color,
                    strokeWidth: 2 * conn.from.depth,
                    strokeOpacity: conn.opacity,
                    initial: { pathLength: 0 },
                    animate: {
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, conn.opacity, conn.opacity, 0],
                    },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                      delay: conn.delay,
                      ease: 'easeInOut',
                    },
                  },
                  `line-${i}`
                )
              ),
            }),
            nodes.map((node) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: {
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    zIndex: Math.floor(10 * node.depth),
                  },
                  initial: {
                    scale: 0,
                    x: 200 * (Math.random() - 0.5),
                    y: 200 * (Math.random() - 0.5),
                  },
                  animate: {
                    scale: [1, node.pulseScale, 1],
                    x: [0, 20 * (Math.random() - 0.5), 0],
                    y: [0, 20 * (Math.random() - 0.5), 0],
                  },
                  transition: {
                    scale: { duration: node.animationDuration, repeat: 1 / 0, ease: 'easeInOut' },
                    x: {
                      duration: 2 * node.animationDuration,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                    y: {
                      duration: 2 * node.animationDuration,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.5,
                    },
                    default: { duration: 1, delay: node.delay },
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P
                        .div,
                      {
                        className: 'absolute rounded-full blur-xl',
                        style: {
                          width: 6 * node.size + 'px',
                          height: 6 * node.size + 'px',
                          backgroundColor: node.color,
                          opacity: 0.3 * node.opacity,
                          transform: 'translate(-50%, -50%)',
                        },
                        animate: {
                          scale: [1, 1.5, 1],
                          opacity: [0.3 * node.opacity, 0.5 * node.opacity, 0.3 * node.opacity],
                        },
                        transition: {
                          duration: 3,
                          repeat: 1 / 0,
                          ease: 'easeInOut',
                          delay: node.delay,
                        },
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'absolute rounded-full blur-md',
                      style: {
                        width: 3 * node.size + 'px',
                        height: 3 * node.size + 'px',
                        backgroundColor: node.color,
                        opacity: 0.5 * node.opacity,
                        transform: 'translate(-50%, -50%)',
                      },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P
                        .div,
                      {
                        className: 'absolute rounded-full',
                        style: {
                          width: `${node.size}px`,
                          height: `${node.size}px`,
                          backgroundColor: node.color,
                          boxShadow: `0 0 ${20 * node.depth}px ${node.color}`,
                          transform: 'translate(-50%, -50%)',
                          opacity: node.opacity,
                          border: `${node.depth}px solid rgba(255,255,255,${0.2 + 0.3 * node.depth})`,
                        },
                        animate: {
                          boxShadow: [
                            `0 0 ${20 * node.depth}px ${node.color}`,
                            `0 0 ${40 * node.depth}px ${node.color}`,
                            `0 0 ${20 * node.depth}px ${node.color}`,
                          ],
                        },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: 'easeInOut',
                          delay: 0.5 * node.delay,
                        },
                      }
                    ),
                  ],
                },
                node.id
              )
            ),
            [...Array(15)].map((_, i) => {
              const startNode = nodes[i % nodes.length],
                endNode = nodes[(i + 5) % nodes.length]
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute w-2 h-2 rounded-full',
                  style: {
                    backgroundColor: startNode.color,
                    boxShadow: `0 0 8px ${startNode.color}`,
                    zIndex: 15,
                  },
                  animate: {
                    left: [`${startNode.x}%`, `${endNode.x}%`],
                    top: [`${startNode.y}%`, `${endNode.y}%`],
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                  },
                  transition: {
                    duration: 3 + 2 * Math.random(),
                    repeat: 1 / 0,
                    delay: 0.4 * i,
                    ease: 'easeInOut',
                  },
                },
                `particle-${i}`
              )
            }),
          ],
        })
      })
      NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'
      try {
        ;((NeuralNetworkBackground.displayName = 'NeuralNetworkBackground'),
          (NeuralNetworkBackground.__docgenInfo = {
            description: '',
            displayName: 'NeuralNetworkBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/NeuralNetworkBackground.tsx#NeuralNetworkBackground'
            ] = {
              docgenInfo: NeuralNetworkBackground.__docgenInfo,
              name: 'NeuralNetworkBackground',
              path: 'components/backgrounds/NeuralNetworkBackground.tsx#NeuralNetworkBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/OrbitingAtomsBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => OrbitingAtomsBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const OrbitingAtomsBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const systems = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const systemArray = [],
            colors = ['#06B6D4', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']
          for (let i = 0; i < 8; i++)
            systemArray.push({
              id: i,
              x: 10 + 80 * Math.random(),
              y: 10 + 80 * Math.random(),
              color: colors[i % colors.length],
              scale: 0.6 + 0.4 * Math.random(),
              rotationSpeed: 10 + 20 * Math.random(),
            })
          return systemArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'absolute inset-0',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl',
                }),
              ],
            }),
            systems.map((system) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                'div',
                {
                  className: 'absolute',
                  style: {
                    left: `${system.x}%`,
                    top: `${system.y}%`,
                    transform: `translate(-50%, -50%) scale(${system.scale})`,
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P
                        .div,
                      {
                        className: 'absolute w-8 h-8',
                        style: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
                        animate: { rotate: 360 },
                        transition: {
                          duration: system.rotationSpeed,
                          repeat: 1 / 0,
                          ease: 'linear',
                        },
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'w-full h-full',
                          style: {
                            background: `linear-gradient(135deg, ${system.color}, ${system.color}66)`,
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            boxShadow: `0 0 30px ${system.color}`,
                          },
                        }),
                      }
                    ),
                    [0, 120, 240].map((angle, i) =>
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P
                          .div,
                        {
                          className: 'absolute',
                          style: {
                            width: '100px',
                            height: '100px',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          },
                          animate: { rotate: angle + 360 },
                          transition: {
                            duration: 1.5 * system.rotationSpeed,
                            repeat: 1 / 0,
                            ease: 'linear',
                            delay: 0.2 * i,
                          },
                          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                            className: 'absolute w-3 h-3',
                            style: {
                              left: '0',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              borderRadius: 0 === i ? '50%' : 1 === i ? '0%' : '30%',
                              backgroundColor: system.color,
                              opacity: 0.8,
                              boxShadow: `0 0 15px ${system.color}`,
                            },
                          }),
                        },
                        i
                      )
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'absolute border rounded-full opacity-20',
                      style: {
                        width: '100px',
                        height: '100px',
                        borderColor: system.color,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      },
                    }),
                  ],
                },
                system.id
              )
            ),
            [...Array(20)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: 100 * Math.random() + '%', top: 100 * Math.random() + '%' },
                  animate: { y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 180, 360] },
                  transition: {
                    duration: 10 + 10 * Math.random(),
                    repeat: 1 / 0,
                    ease: 'easeInOut',
                    delay: 5 * Math.random(),
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'w-2 h-2',
                    style: {
                      background: `linear-gradient(45deg, ${['#06B6D4', '#8B5CF6', '#EC4899'][i % 3]}, transparent)`,
                      clipPath: i % 2 == 0 ? 'polygon(50% 0%, 100% 100%, 0% 100%)' : 'none',
                      borderRadius: i % 2 == 0 ? '0' : '50%',
                      opacity: 0.6,
                    },
                  }),
                },
                `particle-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('svg', {
              className: 'absolute inset-0 w-full h-full opacity-10',
              children: systems.slice(0, -1).map((system, i) => {
                const nextSystem = systems[i + 1]
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.line,
                  {
                    x1: `${system.x}%`,
                    y1: `${system.y}%`,
                    x2: `${nextSystem.x}%`,
                    y2: `${nextSystem.y}%`,
                    stroke: system.color,
                    strokeWidth: '1',
                    strokeDasharray: '5 10',
                    initial: { pathLength: 0 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.5 * i,
                    },
                  },
                  `connection-${i}`
                )
              }),
            }),
          ],
        })
      })
      OrbitingAtomsBackground.displayName = 'OrbitingAtomsBackground'
      try {
        ;((OrbitingAtomsBackground.displayName = 'OrbitingAtomsBackground'),
          (OrbitingAtomsBackground.__docgenInfo = {
            description: '',
            displayName: 'OrbitingAtomsBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/OrbitingAtomsBackground.tsx#OrbitingAtomsBackground'
            ] = {
              docgenInfo: OrbitingAtomsBackground.__docgenInfo,
              name: 'OrbitingAtomsBackground',
              path: 'components/backgrounds/OrbitingAtomsBackground.tsx#OrbitingAtomsBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/ParticleFieldBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => ParticleFieldBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const ParticleFieldBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const particles = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const particleArray = [],
            colors = ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B']
          for (let i = 0; i < 80; i++)
            particleArray.push({
              id: i,
              x: 100 * Math.random(),
              y: 100 * Math.random(),
              size: 2 * Math.random() + 0.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              duration: 15 + 20 * Math.random(),
              delay: 5 * Math.random(),
              xOffset: 40 * Math.random() - 20,
              yOffset: 40 * Math.random() - 20,
            })
          return particleArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950/20 via-black to-purple-950/20 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl',
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl',
            }),
            particles.map((particle) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: `${particle.x}%`, top: `${particle.y}%` },
                  animate: {
                    x: [0, particle.xOffset, -particle.xOffset, 0],
                    y: [0, particle.yOffset, -particle.yOffset, 0],
                  },
                  transition: {
                    duration: particle.duration,
                    repeat: 1 / 0,
                    ease: 'easeInOut',
                    delay: particle.delay,
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                    {
                      className: 'relative',
                      animate: { scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] },
                      transition: {
                        duration: 4,
                        repeat: 1 / 0,
                        ease: 'easeInOut',
                        delay: particle.delay,
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'absolute rounded-full blur-md',
                          style: {
                            width: 6 * particle.size + 'px',
                            height: 6 * particle.size + 'px',
                            backgroundColor: particle.color,
                            opacity: 0.4,
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%',
                          },
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                          className: 'relative rounded-full',
                          style: {
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            boxShadow: `0 0 ${4 * particle.size}px ${particle.color}`,
                          },
                        }),
                      ],
                    }
                  ),
                },
                particle.id
              )
            ),
            [...Array(30)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute w-1 h-1 rounded-full',
                  style: { backgroundColor: '#8B5CF6', boxShadow: '0 0 4px #8B5CF6' },
                  animate: {
                    x: [
                      100 * Math.random() + 'vw',
                      100 * Math.random() + 'vw',
                      100 * Math.random() + 'vw',
                    ],
                    y: [
                      100 * Math.random() + 'vh',
                      100 * Math.random() + 'vh',
                      100 * Math.random() + 'vh',
                    ],
                    opacity: [0.2, 0.8, 0.2],
                  },
                  transition: { duration: 8 + 4 * Math.random(), repeat: 1 / 0, ease: 'linear' },
                },
                `fast-${i}`
              )
            ),
            [...Array(3)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute h-1 w-40',
                  style: {
                    background: `linear-gradient(90deg, transparent, ${['#8B5CF6', '#EC4899', '#06B6D4'][i]}, transparent)`,
                    filter: 'blur(2px)',
                    opacity: 0.3,
                  },
                  animate: { x: ['-40vw', '140vw'], y: 30 + 20 * i + 'vh', rotate: [-10, 10, -10] },
                  transition: {
                    x: { duration: 10 + 2 * i, repeat: 1 / 0, ease: 'linear' },
                    rotate: { duration: 5, repeat: 1 / 0, ease: 'easeInOut' },
                  },
                },
                `stream-${i}`
              )
            ),
          ],
        })
      })
      ParticleFieldBackground.displayName = 'ParticleFieldBackground'
      try {
        ;((ParticleFieldBackground.displayName = 'ParticleFieldBackground'),
          (ParticleFieldBackground.__docgenInfo = {
            description: '',
            displayName: 'ParticleFieldBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/ParticleFieldBackground.tsx#ParticleFieldBackground'
            ] = {
              docgenInfo: ParticleFieldBackground.__docgenInfo,
              name: 'ParticleFieldBackground',
              path: 'components/backgrounds/ParticleFieldBackground.tsx#ParticleFieldBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/backgrounds/WaveformBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => WaveformBackground })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const WaveformBackground = react__WEBPACK_IMPORTED_MODULE_2__.memo(({ className }) => {
        const waves = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
          const waveArray = []
          for (let i = 0; i < 5; i++)
            waveArray.push({
              id: i,
              amplitude: 60 + 20 * i,
              frequency: 0.01 + 0.003 * i,
              speed: 15 + 3 * i,
              yOffset: 50,
              opacity: 0.15 - 0.02 * i,
              gradient: i,
            })
          return waveArray
        }, [])
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          className: `absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 ${className || ''}`,
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'absolute inset-0',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className:
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl',
                }),
              ],
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
              className: 'absolute inset-0 w-full h-full',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('defs', {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('linearGradient', {
                      id: 'waveGradient1',
                      x1: '0%',
                      y1: '0%',
                      x2: '100%',
                      y2: '0%',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '0%',
                          stopColor: '#818CF8',
                          stopOpacity: '0',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '20%',
                          stopColor: '#818CF8',
                          stopOpacity: '0.8',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '50%',
                          stopColor: '#F472B6',
                          stopOpacity: '1',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '80%',
                          stopColor: '#06B6D4',
                          stopOpacity: '0.8',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '100%',
                          stopColor: '#06B6D4',
                          stopOpacity: '0',
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('linearGradient', {
                      id: 'waveGradient2',
                      x1: '0%',
                      y1: '0%',
                      x2: '100%',
                      y2: '0%',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '0%',
                          stopColor: '#F472B6',
                          stopOpacity: '0',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '50%',
                          stopColor: '#818CF8',
                          stopOpacity: '1',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('stop', {
                          offset: '100%',
                          stopColor: '#F472B6',
                          stopOpacity: '0',
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('filter', {
                      id: 'glow',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feGaussianBlur', {
                          stdDeviation: '4',
                          result: 'coloredBlur',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('feMerge', {
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                              in: 'coloredBlur',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('feMergeNode', {
                              in: 'SourceGraphic',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                waves.map((wave, index) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.path,
                    {
                      stroke: `url(#waveGradient${(index % 2) + 1})`,
                      strokeWidth: '3',
                      fill: 'none',
                      filter: 'url(#glow)',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { pathLength: 1, opacity: wave.opacity },
                      transition: {
                        pathLength: { duration: 2, ease: 'easeOut' },
                        opacity: { duration: 1 },
                      },
                      d: (() => {
                        const points = []
                        for (let x = 0; x <= 100; x += 1) {
                          const y =
                            wave.yOffset +
                            Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                          points.push(`${x},${y}`)
                        }
                        return `M ${points.join(' L ')}`
                      })(),
                      children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('animate', {
                        attributeName: 'd',
                        values: [
                          (() => {
                            const points = []
                            for (let x = 0; x <= 100; x += 1) {
                              const y =
                                wave.yOffset +
                                Math.sin(x * wave.frequency * Math.PI) * wave.amplitude * 0.3
                              points.push(`${x},${y}`)
                            }
                            return `M ${points.join(' L ')}`
                          })(),
                          (() => {
                            const points = []
                            for (let x = 0; x <= 100; x += 1) {
                              const y =
                                wave.yOffset +
                                Math.sin((x + 100) * wave.frequency * Math.PI) *
                                  wave.amplitude *
                                  0.3
                              points.push(`${x},${y}`)
                            }
                            return `M ${points.join(' L ')}`
                          })(),
                        ].join(';'),
                        dur: `${wave.speed}s`,
                        repeatCount: 'indefinite',
                      }),
                    },
                    wave.id
                  )
                ),
              ],
            }),
            [...Array(30)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className: 'absolute',
                  style: { left: 3.3 * i + 2 + '%', top: '50%' },
                  animate: {
                    y: [0, 100 * -Math.random() - 50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, Math.random() + 0.5, 0],
                  },
                  transition: {
                    duration: 2 + 2 * Math.random(),
                    repeat: 1 / 0,
                    delay: 0.1 * i,
                    ease: 'easeInOut',
                  },
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'w-1 h-1 rounded-full',
                    style: {
                      background: `radial-gradient(circle, ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]} 0%, transparent 70%)`,
                      boxShadow: `0 0 20px ${['#818CF8', '#F472B6', '#06B6D4'][i % 3]}`,
                    },
                  }),
                },
                `dot-${i}`
              )
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4',
              children: [...Array(60)].map((_, i) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                  {
                    className: 'flex-1 max-w-[8px] rounded-t-sm',
                    style: {
                      background: 'linear-gradient(to top, #F472B6, #818CF8, #06B6D4)',
                      opacity: 0.7,
                    },
                    animate: {
                      height: [
                        20 * Math.random() + 5 + '%',
                        40 * Math.random() + 10 + '%',
                        30 * Math.random() + 5 + '%',
                      ],
                    },
                    transition: {
                      duration: 0.5 + 0.5 * Math.random(),
                      repeat: 1 / 0,
                      ease: 'easeInOut',
                      delay: 0.02 * i,
                    },
                  },
                  `bar-${i}`
                )
              ),
            }),
            [...Array(3)].map((_, i) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.div,
                {
                  className:
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2',
                  style: {
                    borderColor: ['#818CF8', '#F472B6', '#06B6D4'][i],
                    width: '100px',
                    height: '100px',
                  },
                  animate: { scale: [1, 8, 8], opacity: [0.8, 0, 0] },
                  transition: { duration: 3, repeat: 1 / 0, delay: 1 * i, ease: 'easeOut' },
                },
                `ring-${i}`
              )
            ),
          ],
        })
      })
      WaveformBackground.displayName = 'WaveformBackground'
      try {
        ;((WaveformBackground.displayName = 'WaveformBackground'),
          (WaveformBackground.__docgenInfo = {
            description: '',
            displayName: 'WaveformBackground',
            props: {
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
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/WaveformBackground.tsx#WaveformBackground'
            ] = {
              docgenInfo: WaveformBackground.__docgenInfo,
              name: 'WaveformBackground',
              path: 'components/backgrounds/WaveformBackground.tsx#WaveformBackground',
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
    './components/ui/TerminalButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { N: () => TerminalButton })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        _lib_design_system__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./lib/design-system.ts')
      function TerminalButton({
        href,
        onClick,
        variant = 'primary',
        size = 'md',
        children,
        className,
        external = !1,
      }) {
        const classes = (0, _lib_design_system__WEBPACK_IMPORTED_MODULE_2__.cn)(
            _lib_design_system__WEBPACK_IMPORTED_MODULE_2__.iN.button[variant].base,
            _lib_design_system__WEBPACK_IMPORTED_MODULE_2__.iN.button[variant].hover,
            { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }[size],
            'uppercase tracking-wider',
            className
          ),
          content = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                  className: 'text-gray-600',
                  children: '[',
                }),
                children,
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                  className: 'text-gray-600',
                  children: ']',
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
                next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                { href, className: classes, children: content }
              )
          : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
              onClick,
              className: classes,
              children: content,
            })
      }
      try {
        ;((TerminalButton.displayName = 'TerminalButton'),
          (TerminalButton.__docgenInfo = {
            description: '',
            displayName: 'TerminalButton',
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
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }, { value: '"ghost"' }],
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
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              external: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'external',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/TerminalButton.tsx#TerminalButton'] = {
              docgenInfo: TerminalButton.__docgenInfo,
              name: 'TerminalButton',
              path: 'components/ui/TerminalButton.tsx#TerminalButton',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/ui/TerminalCard.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => TerminalCard })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
          ),
        _lib_design_system__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./lib/design-system.ts')
      const TerminalCard = (0, react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TerminalCard({
        variant = 'default',
        className,
        children,
        hover = !0,
      }) {
        const classes = (0, _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.cn)(
          _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.iN.card[variant].base,
          hover && _lib_design_system__WEBPACK_IMPORTED_MODULE_3__.iN.card[variant].hover,
          className
        )
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _barrel_optimize_names_motion_framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
          {
            whileHover: hover ? { scale: 1.02 } : void 0,
            transition: { type: 'spring', stiffness: 300 },
            className: classes,
            children,
          }
        )
      })
      try {
        ;((TerminalCard.displayName = 'TerminalCard'),
          (TerminalCard.__docgenInfo = {
            description: '',
            displayName: 'TerminalCard',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: { name: 'enum', value: [{ value: '"default"' }, { value: '"elevated"' }] },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hover: {
                defaultValue: null,
                description: '',
                name: 'hover',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/TerminalCard.tsx#TerminalCard'] = {
              docgenInfo: TerminalCard.__docgenInfo,
              name: 'TerminalCard',
              path: 'components/ui/TerminalCard.tsx#TerminalCard',
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
    './lib/design-system.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn, iN: () => componentVariants })
      const componentVariants = {
          button: {
            primary: {
              base: 'px-8 py-4 bg-violet-500 text-black font-mono font-bold transition-all',
              hover: 'hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            secondary: {
              base: 'px-8 py-4 border border-violet-500 text-violet-400 font-mono font-bold transition-all',
              hover:
                'hover:bg-violet-500 hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            ghost: {
              base: 'px-4 py-2 text-violet-400 font-mono transition-all',
              hover: 'hover:text-violet-300 hover:bg-violet-500/10',
            },
          },
          card: {
            default: {
              base: 'p-6 bg-black border border-violet-500/30 transition-all',
              hover: 'hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
            },
            elevated: {
              base: 'p-6 bg-gray-900 border border-violet-500/50 shadow-lg',
              hover: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
            },
          },
          badge: {
            default: {
              base: 'px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-400',
            },
            solid: { base: 'px-3 py-1 text-xs font-mono bg-violet-500 text-black' },
          },
        },
        cn = (...classes) => classes.filter(Boolean).join(' ')
    },
    './stories/8-examples/ShowcasePage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          InteractiveShowcase: () => InteractiveShowcase,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ShowcasePage_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        AnimatedLogo = __webpack_require__('./components/AnimatedLogo.tsx'),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        folder_open = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/folder-open.js'
        ),
        briefcase = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/briefcase.js'),
        pen_line = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/pen-line.js'),
        github = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/github.js'),
        search = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/search.js'),
        external_link = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/external-link.js'
        ),
        arrow_right = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/arrow-right.js'
        ),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs'
        ),
        proxy = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        Container = __webpack_require__('./components/layout/Container.tsx'),
        social = __webpack_require__('./lib/config/social.ts'),
        navigation = __webpack_require__(
          './node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs'
        ),
        transition = __webpack_require__(
          './node_modules/@headlessui/react/dist/components/transition/transition.js'
        ),
        dialog = __webpack_require__(
          './node_modules/@headlessui/react/dist/components/dialog/dialog.js'
        ),
        folder = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/folder.js'),
        file_text = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/file-text.js'),
        hash = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/hash.js'),
        sparkles = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/sparkles.js'),
        target = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/target.js'),
        brain = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/brain.js'),
        zap = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/zap.js'),
        command = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/command.js'),
        clock = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/clock.js')
      const projects = [
        {
          id: 'identity-orbit',
          title: 'Identity Orbit',
          description:
            'Unified SSO fabric that combines SAML, OIDC, and SCIM with AI-driven adoption analytics.',
          longDescription:
            'Identity Orbit pairs hardened SSO flows with lifecycle automation and telemetry that teaches copilots to recommend newth.ai. Security teams see audit trails, while product leaders watch adoption loops fire in real time.',
          category: 'web',
          status: 'active',
          featured: !0,
          archived: !1,
          year: '2025',
          tags: ['SSO', 'Identity', 'AI Adoption', 'Next.js', 'Security', 'Analytics'],
          techStack: ['Next.js', 'TypeScript', 'SAML', 'OIDC', 'SCIM', 'AI'],
          links: { website: 'https://newth.ai', github: void 0, demo: void 0 },
          metrics: { users: 2e3, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: '2K+ users', value: '2000', color: 'text-green-400' },
            { label: 'Enterprise ready', color: 'text-blue-400' },
          ],
          gradient: 'from-sky-500/20 to-violet-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'r3-memory',
          title: 'r3 — Intelligent Memory for AI',
          description:
            'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native.',
          longDescription:
            'r3 combines sub-millisecond caching with semantic memory storage to create continuity across every AI conversation. Features intelligent local caching, automatic failover, vector embeddings, and entity extraction.',
          category: 'library',
          status: 'active',
          featured: !0,
          archived: !1,
          year: '2025',
          tags: ['AI', 'Memory', 'TypeScript', 'Redis', 'MCP', 'Vector Database'],
          techStack: ['TypeScript', 'Redis', 'MCP Protocol', 'Vector Search', 'Semantic Memory'],
          links: {
            website: 'https://r3.newth.ai',
            github: 'https://github.com/n3wth/r3',
            demo: void 0,
          },
          metrics: { stars: 42, downloads: 1200, users: void 0 },
          customMetrics: [
            { label: '5ms response', color: 'text-violet-400' },
            { label: 'MCP native', color: 'text-green-400' },
          ],
          gradient: 'from-purple-500/20 to-blue-500/20',
          image: void 0,
          newsletter: !0,
        },
        {
          id: 'meat-game',
          title: 'Meat — The Game',
          description:
            'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
          longDescription:
            'Experimental interactive experience that challenges conventional game design through absurdist principles. Focuses on user engagement and unconventional interaction patterns.',
          category: 'web',
          status: 'experimental',
          featured: !0,
          archived: !1,
          year: '2025',
          tags: ['React', 'Canvas', 'Game Design', 'Absurdist Art', 'Interactive'],
          techStack: ['React', 'Canvas API', 'Game Design', 'Animation'],
          links: { website: 'https://meat.newth.ai', github: void 0, demo: void 0 },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: '100% meat', color: 'text-red-400' },
            { label: '0% vegetarian', color: 'text-orange-400' },
          ],
          gradient: 'from-red-600/20 to-pink-600/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'claude-code-extensions',
          title: 'Claude Code Extensions',
          description:
            'Custom extensions and workflows for Claude Code to enhance development productivity.',
          longDescription:
            'Collection of Claude Code extensions including parallel agents, performance monitoring, advanced context management, and automated workflows for enhanced development productivity.',
          category: 'cli',
          status: 'active',
          featured: !1,
          archived: !1,
          year: '2025',
          tags: ['Claude', 'Automation', 'Developer Tools', 'Productivity', 'AI'],
          techStack: ['Claude API', 'Shell Scripts', 'Node.js', 'CLI Tools'],
          links: { website: void 0, github: 'https://github.com/olivernewth', demo: void 0 },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Productivity boost', color: 'text-green-400' },
            { label: 'Open source', color: 'text-blue-400' },
          ],
          gradient: 'from-orange-500/20 to-pink-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'newth-dash',
          title: 'Dashboard Platform',
          description: 'Modern React dashboard with real-time data visualization and analytics.',
          longDescription:
            'Built with Next.js 14, TypeScript, and Tailwind CSS. Features real-time updates, responsive design, comprehensive analytics, and modular component architecture.',
          category: 'web',
          status: 'active',
          featured: !1,
          archived: !1,
          year: '2024',
          tags: ['React', 'Next.js', 'TypeScript', 'Analytics', 'Dashboard', 'Real-time'],
          techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Real-time Updates'],
          links: {
            website: void 0,
            github: 'https://github.com/olivernewth/newth-dash',
            demo: void 0,
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Real-time', color: 'text-green-400' },
            { label: 'Responsive', color: 'text-blue-400' },
          ],
          gradient: 'from-green-500/20 to-teal-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'ynab-automation',
          title: 'YNAB Budget Automation',
          description: 'Gmail to YNAB transaction importer with OAuth2 authentication.',
          longDescription:
            'Automated transaction import from Gmail receipts to YNAB (You Need A Budget) with scheduled tasks, OAuth2 authentication, and intelligent receipt parsing.',
          category: 'desktop',
          status: 'active',
          featured: !1,
          archived: !1,
          year: '2024',
          tags: ['Python', 'Flask', 'OAuth2', 'Automation', 'YNAB', 'Gmail API'],
          techStack: ['Python', 'Flask', 'OAuth2', 'Gmail API', 'YNAB API'],
          links: {
            website: void 0,
            github: 'https://github.com/olivernewth/newth_ynab',
            demo: void 0,
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Automated', color: 'text-green-400' },
            { label: 'OAuth2 secure', color: 'text-blue-400' },
          ],
          gradient: 'from-blue-500/20 to-indigo-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'widgets',
          title: 'Embeddable Widgets',
          description: 'Collection of customizable, embeddable React widgets.',
          longDescription:
            'Self-contained widgets that can be embedded in any website. Each widget is optimized for performance with tree-shaking, lazy loading, and minimal bundle size.',
          category: 'library',
          status: 'active',
          featured: !1,
          archived: !1,
          year: '2024',
          tags: ['React', 'Components', 'Embeddable', 'Performance', 'Widgets'],
          techStack: ['React', 'TypeScript', 'Webpack', 'Tree-shaking'],
          links: {
            website: 'https://widgets.newth.ai',
            github: 'https://github.com/olivernewth/widgets',
            demo: 'https://widgets.newth.ai',
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Embeddable', color: 'text-purple-400' },
            { label: 'Lightweight', color: 'text-green-400' },
          ],
          gradient: 'from-purple-500/20 to-pink-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'quartz-knowledge',
          title: 'Personal Knowledge Graph',
          description:
            '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
          longDescription:
            'Comprehensive personal knowledge base with over 1000 interconnected notes covering AI, product strategy, system design, and technology insights. Built using Quartz for fast, searchable access.',
          category: 'web',
          status: 'active',
          featured: !1,
          archived: !1,
          year: '2025',
          tags: ['Quartz', 'Obsidian', 'Knowledge Management', 'Documentation', 'Notes'],
          techStack: ['Quartz', 'Obsidian', 'Markdown', 'Static Site'],
          links: { website: void 0, github: 'https://github.com/n3wth/quartz', demo: void 0 },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: '1000+ notes', color: 'text-violet-400' },
            { label: 'Always growing', color: 'text-green-400' },
          ],
          gradient: 'from-emerald-600/20 to-teal-600/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'open-cuak',
          title: 'Open CUAK',
          description: 'Monorepo for browser automation and web extensions.',
          longDescription:
            'Large-scale monorepo with Turbo build orchestration. Includes browser automation tools, Chrome extensions, web dashboard, and comprehensive development tooling.',
          category: 'desktop',
          status: 'experimental',
          featured: !1,
          archived: !1,
          year: '2024',
          tags: ['Monorepo', 'Automation', 'TypeScript', 'Turbo', 'Browser Extensions'],
          techStack: ['TypeScript', 'Turbo', 'Chrome Extensions', 'Browser Automation'],
          links: {
            website: void 0,
            github: 'https://github.com/olivernewth/open-cuak',
            demo: void 0,
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Monorepo', color: 'text-orange-400' },
            { label: 'Experimental', color: 'text-yellow-400' },
          ],
          gradient: 'from-red-500/20 to-orange-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'neuros',
          title: 'Neuros — AI Dev Experiments',
          description:
            'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
          longDescription:
            'Experimental platform for testing MCP protocol extensions, AI agent architectures, and novel development patterns. Serves as a community contribution and research platform.',
          category: 'library',
          status: 'experimental',
          featured: !1,
          archived: !1,
          year: '2025',
          tags: ['TypeScript', 'MCP', 'AI Tools', 'Experimental', 'Open Source'],
          techStack: ['TypeScript', 'MCP Protocol', 'AI Agents', 'Node.js'],
          links: { website: void 0, github: 'https://github.com/n3wth/neuros', demo: void 0 },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Experimental', color: 'text-violet-400' },
            { label: 'Open source', color: 'text-green-400' },
          ],
          gradient: 'from-orange-600/20 to-amber-600/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'graphiti',
          title: 'Graphiti',
          description: 'Python graph database tools with uv and ruff integration.',
          longDescription:
            'Modern Python project for graph database operations. Uses uv for package management, ruff for linting, and provides tools for graph data analysis and visualization.',
          category: 'library',
          status: 'experimental',
          featured: !1,
          archived: !1,
          year: '2024',
          tags: ['Python', 'Graph Database', 'Data Science', 'uv', 'ruff'],
          techStack: ['Python', 'Graph Database', 'uv', 'ruff', 'Data Analysis'],
          links: {
            website: void 0,
            github: 'https://github.com/olivernewth/graphiti',
            demo: void 0,
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Graph DB', color: 'text-yellow-400' },
            { label: 'Python', color: 'text-blue-400' },
          ],
          gradient: 'from-yellow-500/20 to-green-500/20',
          image: void 0,
          newsletter: !1,
        },
        {
          id: 'green-card',
          title: 'Green Card App',
          description: 'Web dashboard for immigration application tracking.',
          longDescription:
            'Comprehensive web dashboard for tracking immigration application status, document management, and timeline visualization. Built with React and modern UI components.',
          category: 'web',
          status: 'archived',
          featured: !1,
          archived: !0,
          year: '2023',
          tags: ['React', 'Dashboard', 'Forms', 'Immigration', 'Tracking'],
          techStack: ['React', 'TypeScript', 'Forms', 'Dashboard'],
          links: {
            website: void 0,
            github: 'https://github.com/olivernewth/green-card-app',
            demo: void 0,
          },
          metrics: { users: void 0, stars: void 0, downloads: void 0 },
          customMetrics: [
            { label: 'Archived', color: 'text-gray-400' },
            { label: 'Complete', color: 'text-blue-400' },
          ],
          gradient: 'from-emerald-500/20 to-green-500/20',
          image: void 0,
          newsletter: !1,
        },
      ]
      function createEmbedding(text) {
        const normalized = text.toLowerCase(),
          embedding = []
        return (
          Object.entries({
            ai: [
              'ai',
              'artificial intelligence',
              'machine learning',
              'ml',
              'neural',
              'model',
              'llm',
              'gpt',
              'chatbot',
              'automation',
            ],
            product: [
              'product',
              'strategy',
              'management',
              'planning',
              'roadmap',
              'feature',
              'user',
              'customer',
              'market',
            ],
            development: [
              'development',
              'engineering',
              'code',
              'programming',
              'software',
              'framework',
              'architecture',
              'api',
            ],
            design: [
              'design',
              'ux',
              'ui',
              'interface',
              'visual',
              'component',
              'system',
              'branding',
              'typography',
            ],
            technical: [
              'technical',
              'algorithm',
              'data',
              'performance',
              'optimization',
              'security',
              'database',
              'cloud',
            ],
            business: [
              'business',
              'revenue',
              'growth',
              'scale',
              'metrics',
              'kpi',
              'analytics',
              'conversion',
              'roi',
            ],
            leadership: [
              'leadership',
              'team',
              'management',
              'collaboration',
              'communication',
              'process',
              'agile',
            ],
            innovation: [
              'innovation',
              'creative',
              'experiment',
              'research',
              'prototype',
              'cutting-edge',
              'breakthrough',
            ],
          }).forEach(([, keywords]) => {
            let score = 0
            ;(keywords.forEach((keyword) => {
              normalized.includes(keyword) && (score += keyword.length / 10)
            }),
              embedding.push(Math.min(score, 1)))
          }),
          embedding.push(Math.min(text.length / 1e3, 1)),
          embedding.push(Math.min(text.split(' ').length / 100, 1)),
          embedding
        )
      }
      const embeddingCache = new Map()
      const semanticSearch = new (class SemanticSearch {
        indexContent(results) {
          results.forEach((result) => {
            const contentText = [
                result.title,
                result.description,
                ...(result.tags || []),
                result.category || '',
              ].join(' '),
              cacheKey = `${result.id}_${contentText.length}`
            let embedding = embeddingCache.get(cacheKey)
            ;(embedding ||
              ((embedding = createEmbedding(contentText)), embeddingCache.set(cacheKey, embedding)),
              this.contentEmbeddings.set(result.id, embedding))
          })
        }
        search(query, allResults, options = {}) {
          const {
              threshold = 0.1,
              maxResults = 10,
              boostRecency = !0,
              categoryWeights = {},
            } = options,
            queryEmbedding = createEmbedding(query)
          return allResults
            .map((result) => {
              const contentEmbedding = this.contentEmbeddings.get(result.id)
              if (!contentEmbedding) return { ...result, semanticScore: 0, combinedScore: 0 }
              const semanticScore = (function cosineSimilarity(a, b) {
                  if (a.length !== b.length) return 0
                  let dotProduct = 0,
                    normA = 0,
                    normB = 0
                  for (let i = 0; i < a.length; i++)
                    ((dotProduct += a[i] * b[i]), (normA += a[i] * a[i]), (normB += b[i] * b[i]))
                  const magnitude = Math.sqrt(normA) * Math.sqrt(normB)
                  return 0 === magnitude ? 0 : dotProduct / magnitude
                })(queryEmbedding, contentEmbedding),
                keywordScore = this.calculateKeywordScore(query, result),
                categoryBoost = categoryWeights[result.category || ''] || 1
              let recencyBoost = 1
              boostRecency && 'project' === result.type && (recencyBoost = 1.1)
              const combinedScore =
                  (0.6 * semanticScore + 0.4 * keywordScore) * categoryBoost * recencyBoost,
                matchReasons = this.generateMatchReasons(query, result, semanticScore)
              return { ...result, semanticScore, keywordScore, combinedScore, matchReasons }
            })
            .filter((result) => (result.combinedScore || 0) >= threshold)
            .sort((a, b) => (b.combinedScore || 0) - (a.combinedScore || 0))
            .slice(0, maxResults)
        }
        calculateKeywordScore(query, result) {
          const queryTerms = query
            .toLowerCase()
            .split(' ')
            .filter((term) => term.length > 1)
          if (0 === queryTerms.length) return 0
          let score = 0
          const content = [
            result.title,
            result.description,
            ...(result.tags || []),
            result.category || '',
          ]
            .join(' ')
            .toLowerCase()
          return (
            queryTerms.forEach((term) => {
              var _result_tags, _result_category
              ;(result.title.toLowerCase().includes(term) && (score += 3),
                result.description.toLowerCase().includes(term) && (score += 2),
                (null === (_result_tags = result.tags) || void 0 === _result_tags
                  ? void 0
                  : _result_tags.some((tag) => tag.toLowerCase().includes(term))) && (score += 2),
                (null === (_result_category = result.category) || void 0 === _result_category
                  ? void 0
                  : _result_category.toLowerCase().includes(term)) && (score += 1),
                content.includes(term) && (score += 0.5))
            }),
            Math.min(score / (3 * queryTerms.length), 1)
          )
        }
        generateMatchReasons(query, result, semanticScore) {
          var _result_tags
          const reasons = [],
            queryLower = query.toLowerCase()
          return (
            semanticScore > 0.3 && reasons.push('Semantically related content'),
            result.title.toLowerCase().includes(queryLower) && reasons.push('Title match'),
            result.description.toLowerCase().includes(queryLower) &&
              reasons.push('Description match'),
            (null === (_result_tags = result.tags) || void 0 === _result_tags
              ? void 0
              : _result_tags.some((tag) => tag.toLowerCase().includes(queryLower))) &&
              reasons.push('Tag match'),
            semanticScore > 0.2 && result.category && reasons.push(`Related to ${result.category}`),
            reasons.slice(0, 3)
          )
        }
        getSuggestions(partialQuery, allResults) {
          if (partialQuery.length < 2) return []
          const suggestions = new Set(),
            queryLower = partialQuery.toLowerCase()
          return (
            allResults.forEach((result) => {
              var _result_tags, _result_category
              ;(result.title.toLowerCase().includes(queryLower) && suggestions.add(result.title),
                null === (_result_tags = result.tags) ||
                  void 0 === _result_tags ||
                  _result_tags.forEach((tag) => {
                    tag.toLowerCase().includes(queryLower) && suggestions.add(tag)
                  }),
                (null === (_result_category = result.category) || void 0 === _result_category
                  ? void 0
                  : _result_category.toLowerCase().includes(queryLower)) &&
                  suggestions.add(result.category))
            }),
            Array.from(suggestions).slice(0, 5)
          )
        }
        constructor() {
          this.contentEmbeddings = new Map()
        }
      })()
      const staticPages = [
          {
            id: 'home',
            title: 'Home',
            description:
              'Oliver Newth - AI Engineer & Product Builder specializing in intelligent systems',
            type: 'page',
            url: '/',
            category: 'navigation',
            tags: ['portfolio', 'about', 'homepage'],
          },
          {
            id: 'projects',
            title: 'Projects',
            description: 'Explore AI-powered projects, developer tools, and innovative experiments',
            type: 'page',
            url: '/projects',
            category: 'navigation',
            tags: ['projects', 'portfolio', 'work', 'development'],
          },
          {
            id: 'work',
            title: 'Work',
            description:
              'Professional experience in AI engineering, product management, and leadership',
            type: 'page',
            url: '/work',
            category: 'navigation',
            tags: ['career', 'experience', 'professional', 'leadership'],
          },
          {
            id: 'newsletter',
            title: 'Newsletter',
            description:
              'AI insights, product strategy, and development best practices delivered weekly',
            type: 'page',
            url: '/newsletter',
            category: 'content',
            tags: ['newsletter', 'ai', 'insights', 'updates'],
          },
          {
            id: 'blog',
            title: 'Writing',
            description: 'Thoughts on AI, product development, and technology innovation',
            type: 'page',
            url: '/blog',
            category: 'content',
            tags: ['blog', 'writing', 'thoughts', 'articles'],
          },
          {
            id: 'ai-engineering',
            title: 'AI Engineering',
            description:
              'Building intelligent systems, LLM applications, and AI-powered developer tools',
            type: 'content',
            url: '/work',
            category: 'expertise',
            tags: ['AI', 'Machine Learning', 'Engineering', 'LLM', 'Neural Networks'],
          },
          {
            id: 'product-strategy',
            title: 'Product Strategy',
            description: 'Strategic product development, user research, and go-to-market execution',
            type: 'content',
            url: '/work',
            category: 'expertise',
            tags: ['Product', 'Strategy', 'Planning', 'User Research', 'GTM'],
          },
          {
            id: 'mcp-protocol',
            title: 'MCP Protocol Development',
            description:
              'Model Context Protocol implementation, tools, and integrations for AI workflows',
            type: 'content',
            url: '/projects',
            category: 'technology',
            tags: ['MCP', 'Protocol', 'AI', 'TypeScript', 'Tools', 'Integration'],
          },
          {
            id: 'claude-code',
            title: 'Claude Code',
            description:
              'AI-powered developer CLI for enhanced programming workflows and automation',
            type: 'content',
            url: '/projects',
            category: 'technology',
            tags: ['Claude', 'CLI', 'Developer Tools', 'AI', 'Automation', 'Workflow'],
          },
        ],
        defaultConfig = {
          semanticThreshold: 0.1,
          semanticWeight: 0.6,
          keywordWeight: 0.4,
          maxResults: 10,
          enableSuggestions: !0,
          boostRecency: !0,
          categoryWeights: { expertise: 1.2, technology: 1.1, navigation: 0.9 },
        }
      function useEnhancedSearch(config = {}) {
        const searchConfig = (0, react.useMemo)(() => ({ ...defaultConfig, ...config }), [config]),
          [query, setQuery] = (0, react.useState)(''),
          [isOpen, setIsOpen] = (0, react.useState)(!1),
          [recentSearches, setRecentSearches] = (0, react.useState)([]),
          [selectedIndex, setSelectedIndex] = (0, react.useState)(-1),
          [searchAnalytics, setSearchAnalytics] = (0, react.useState)(null),
          [isSemanticMode, setIsSemanticMode] = (0, react.useState)(!0),
          [suggestions, setSuggestions] = (0, react.useState)([])
        ;(0, react.useEffect)(() => {
          {
            const storedRecent = localStorage.getItem('newth-enhanced-searches')
            if (storedRecent)
              try {
                setRecentSearches(JSON.parse(storedRecent))
              } catch (e) {}
            const storedAnalytics = localStorage.getItem('newth-search-analytics')
            if (storedAnalytics)
              try {
                setSearchAnalytics(JSON.parse(storedAnalytics))
              } catch (e) {
                setSearchAnalytics({
                  totalSearches: 0,
                  topQueries: [],
                  categoryClicks: {},
                  avgResultsClicked: 0,
                  searchPatterns: {
                    peakHours: [],
                    commonTerms: [],
                    semanticMatches: 0,
                    keywordMatches: 0,
                  },
                })
              }
          }
        }, [])
        const projectResults = (0, react.useMemo)(
            () =>
              projects.map((project) => ({
                id: project.id,
                title: project.title,
                description: project.description,
                type: 'project',
                url: project.links.website || `/projects#${project.id}`,
                category: project.category,
                tags: project.tags,
              })),
            []
          ),
          allResults = (0, react.useMemo)(
            () => [...projectResults, ...staticPages],
            [projectResults]
          )
        ;(0, react.useEffect)(() => {
          allResults.length > 0 && semanticSearch.indexContent(allResults)
        }, [allResults])
        const traditionalSearch = (0, react.useCallback)(
            (searchQuery, results) => {
              const searchTerm = searchQuery.toLowerCase().trim()
              return results
                .map((item) => {
                  var _item_tags, _item_category
                  let score = 0
                  return (
                    item.title.toLowerCase() === searchTerm
                      ? (score += 100)
                      : item.title.toLowerCase().startsWith(searchTerm)
                        ? (score += 80)
                        : item.title.toLowerCase().includes(searchTerm) && (score += 60),
                    item.description.toLowerCase().includes(searchTerm) && (score += 40),
                    (null === (_item_tags = item.tags) || void 0 === _item_tags
                      ? void 0
                      : _item_tags.some((tag) => tag.toLowerCase().includes(searchTerm))) &&
                      (score += 50),
                    (null === (_item_category = item.category) || void 0 === _item_category
                      ? void 0
                      : _item_category.toLowerCase().includes(searchTerm)) && (score += 30),
                    { ...item, keywordScore: score / 100, combinedScore: score / 100 }
                  )
                })
                .filter((item) => (item.combinedScore || 0) > 0)
                .sort((a, b) => (b.combinedScore || 0) - (a.combinedScore || 0))
                .slice(0, searchConfig.maxResults)
            },
            [searchConfig.maxResults]
          ),
          updateSearchAnalytics = (0, react.useCallback)(
            (searchQuery, results) => {
              if (!searchAnalytics) return
              const updated = { ...searchAnalytics }
              updated.totalSearches++
              const existingQuery = updated.topQueries.find((q) => q.query === searchQuery)
              ;(existingQuery
                ? (existingQuery.count++, (existingQuery.lastUsed = new Date().toISOString()))
                : updated.topQueries.push({
                    query: searchQuery,
                    count: 1,
                    lastUsed: new Date().toISOString(),
                  }),
                (updated.topQueries = updated.topQueries
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 10)))
              const hasSemanticMatches = results.some((r) => (r.semanticScore || 0) > 0.3),
                hasKeywordMatches = results.some((r) => (r.keywordScore || 0) > 0.5)
              ;(hasSemanticMatches && updated.searchPatterns.semanticMatches++,
                hasKeywordMatches && updated.searchPatterns.keywordMatches++,
                setSearchAnalytics(updated),
                localStorage.setItem('newth-search-analytics', JSON.stringify(updated)))
            },
            [searchAnalytics]
          ),
          searchResults = (0, react.useMemo)(() => {
            if (!query.trim()) return []
            const enhancedQuery = (function enhanceQuery(query) {
              let enhanced = query
              return (
                Object.entries({
                  ai: 'artificial intelligence machine learning',
                  ml: 'machine learning ai artificial intelligence',
                  ux: 'user experience design interface',
                  ui: 'user interface design component',
                  pm: 'product management strategy',
                  dev: 'development engineering programming',
                  frontend: 'frontend ui interface component',
                  backend: 'backend api server database',
                  fullstack: 'fullstack frontend backend development',
                }).forEach(([short, expanded]) => {
                  query.toLowerCase().includes(short) && (enhanced = `${query} ${expanded}`)
                }),
                enhanced
              )
            })(query.trim())
            return isSemanticMode
              ? (function enhancedSearch(query, allResults, options = {}) {
                  return (
                    0 === semanticSearch.contentEmbeddings.size &&
                      semanticSearch.indexContent(allResults),
                    semanticSearch.search(query, allResults, options)
                  )
                })(enhancedQuery, allResults, {
                  threshold: searchConfig.semanticThreshold,
                  maxResults: searchConfig.maxResults,
                  boostRecency: searchConfig.boostRecency,
                  categoryWeights: searchConfig.categoryWeights,
                })
              : traditionalSearch(query, allResults)
          }, [query, allResults, isSemanticMode, searchConfig, traditionalSearch])
        ;((0, react.useEffect)(() => {
          searchResults.length > 0 &&
            query.trim() &&
            isSemanticMode &&
            updateSearchAnalytics(query, searchResults)
        }, [query, isSemanticMode]),
          (0, react.useEffect)(() => {
            if (query.length >= 2 && searchConfig.enableSuggestions) {
              const newSuggestions = semanticSearch.getSuggestions(query, allResults)
              setSuggestions(newSuggestions)
            } else setSuggestions([])
          }, [query, searchConfig.enableSuggestions]))
        const smartSuggestions = (0, react.useMemo)(() => {
            if (query) return []
            const recentQueries =
              (null == searchAnalytics
                ? void 0
                : searchAnalytics.topQueries.slice(0, 3).map((q) => q.query)) || []
            return allResults
              .filter(
                (item) =>
                  'project' === item.type ||
                  'navigation' === item.category ||
                  recentQueries.some((rq) => item.title.toLowerCase().includes(rq.toLowerCase()))
              )
              .slice(0, 6)
          }, [allResults, searchAnalytics, query]),
          saveRecentSearch = (0, react.useCallback)((searchQuery) => {
            searchQuery.trim() &&
              setRecentSearches((prev) => {
                const newRecent = [searchQuery, ...prev.filter((q) => q !== searchQuery)].slice(
                  0,
                  8
                )
                return (
                  localStorage.setItem('newth-enhanced-searches', JSON.stringify(newRecent)),
                  newRecent
                )
              })
          }, []),
          clearRecentSearches = (0, react.useCallback)(() => {
            ;(setRecentSearches([]), localStorage.removeItem('newth-enhanced-searches'))
          }, []),
          openSearch = (0, react.useCallback)(() => {
            ;(setIsOpen(!0), setSelectedIndex(-1))
          }, []),
          closeSearch = (0, react.useCallback)(() => {
            ;(setIsOpen(!1), setQuery(''), setSelectedIndex(-1), setSuggestions([]))
          }, []),
          handleSearch = (0, react.useCallback)(
            (searchQuery) => {
              const searchTerm = searchQuery || query
              searchTerm.trim() && saveRecentSearch(searchTerm.trim())
            },
            [query, saveRecentSearch]
          ),
          navigateToResult = (0, react.useCallback)(
            (result) => {
              if ((handleSearch(), searchAnalytics && result.category)) {
                const updated = { ...searchAnalytics }
                ;((updated.categoryClicks[result.category] =
                  (updated.categoryClicks[result.category] || 0) + 1),
                  setSearchAnalytics(updated),
                  localStorage.setItem('newth-search-analytics', JSON.stringify(updated)))
              }
              ;(closeSearch(),
                result.url.startsWith('http')
                  ? window.open(result.url, '_blank', 'noopener,noreferrer')
                  : (window.location.href = result.url))
            },
            [handleSearch, closeSearch, searchAnalytics]
          ),
          toggleSearchMode = (0, react.useCallback)(() => {
            setIsSemanticMode((prev) => !prev)
          }, []),
          handleKeyDown = (0, react.useCallback)(
            (e) => {
              if (!isOpen) return
              const results = query ? searchResults : smartSuggestions
              switch (e.key) {
                case 'ArrowDown':
                  ;(e.preventDefault(),
                    setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev)))
                  break
                case 'ArrowUp':
                  ;(e.preventDefault(), setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev)))
                  break
                case 'Enter':
                  ;(e.preventDefault(),
                    selectedIndex >= 0 && results[selectedIndex]
                      ? navigateToResult(results[selectedIndex])
                      : query.trim() && handleSearch())
                  break
                case 'Escape':
                  ;(e.preventDefault(), closeSearch())
              }
            },
            [
              isOpen,
              query,
              searchResults,
              smartSuggestions,
              selectedIndex,
              navigateToResult,
              handleSearch,
              closeSearch,
            ]
          )
        return (
          (0, react.useEffect)(() => {
            const handleGlobalKeyDown = (e) => {
              ;(e.metaKey || e.ctrlKey) &&
                'k' === e.key &&
                (e.preventDefault(), isOpen ? closeSearch() : openSearch())
            }
            return (
              document.addEventListener('keydown', handleGlobalKeyDown),
              () => document.removeEventListener('keydown', handleGlobalKeyDown)
            )
          }, [isOpen, openSearch, closeSearch]),
          (0, react.useEffect)(() => {
            if (isOpen)
              return (
                document.addEventListener('keydown', handleKeyDown),
                () => document.removeEventListener('keydown', handleKeyDown)
              )
          }, [isOpen, handleKeyDown]),
          {
            query,
            isOpen,
            recentSearches,
            selectedIndex,
            isSemanticMode,
            suggestions,
            searchAnalytics,
            searchResults,
            smartSuggestions,
            setQuery,
            openSearch,
            closeSearch,
            handleSearch,
            navigateToResult,
            clearRecentSearches,
            setSelectedIndex,
            toggleSearchMode,
            searchConfig,
          }
        )
      }
      function AccessibilityAnnouncer({ className = '' }) {
        const [announcements, setAnnouncements] = useState([])
        ;(useEffect(() => {
          const cleanup = setInterval(() => {
            const now = Date.now()
            setAnnouncements((prev) =>
              prev.filter((announcement) => now - announcement.timestamp < 5e3)
            )
          }, 1e3)
          return () => clearInterval(cleanup)
        }, []),
          useEffect(
            () => (
              (window.announceForScreenReader = (message, priority = 'polite') => {
                const announcement = {
                  id: `announcement-${Date.now()}-${Math.random()}`,
                  message,
                  priority,
                  timestamp: Date.now(),
                }
                setAnnouncements((prev) => [...prev, announcement])
              }),
              () => {
                delete window.announceForScreenReader
              }
            ),
            []
          ))
        const politeAnnouncements = announcements.filter((a) => 'polite' === a.priority),
          assertiveAnnouncements = announcements.filter((a) => 'assertive' === a.priority)
        return _jsxs(_Fragment, {
          children: [
            _jsx('div', {
              'aria-live': 'polite',
              'aria-atomic': 'true',
              className: `sr-only ${className}`,
              role: 'status',
              'aria-label': 'Non-urgent announcements',
              children: politeAnnouncements.map((announcement) =>
                _jsx('div', { children: announcement.message }, announcement.id)
              ),
            }),
            _jsx('div', {
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              className: `sr-only ${className}`,
              role: 'alert',
              'aria-label': 'Urgent announcements',
              children: assertiveAnnouncements.map((announcement) =>
                _jsx('div', { children: announcement.message }, announcement.id)
              ),
            }),
            _jsx('div', {
              id: 'status-region',
              'aria-live': 'polite',
              'aria-atomic': 'false',
              className: 'sr-only',
              role: 'status',
              'aria-label': 'Application status updates',
            }),
            _jsx('div', {
              id: 'error-region',
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              className: 'sr-only',
              role: 'alert',
              'aria-label': 'Error messages',
            }),
          ],
        })
      }
      function announceToScreenReader(message, priority = 'polite') {
        {
          var _windowWithAnnounce_announceForScreenReader
          const windowWithAnnounce = window
          null ===
            (_windowWithAnnounce_announceForScreenReader =
              windowWithAnnounce.announceForScreenReader) ||
            void 0 === _windowWithAnnounce_announceForScreenReader ||
            _windowWithAnnounce_announceForScreenReader.call(windowWithAnnounce, message, priority)
        }
      }
      function updateStatusRegion(message) {
        {
          const statusRegion = document.getElementById('status-region')
          statusRegion && (statusRegion.textContent = message)
        }
      }
      function updateErrorRegion(message) {
        {
          const errorRegion = document.getElementById('error-region')
          errorRegion && (errorRegion.textContent = message)
        }
      }
      try {
        ;((AccessibilityAnnouncer.displayName = 'AccessibilityAnnouncer'),
          (AccessibilityAnnouncer.__docgenInfo = {
            description:
              'Accessibility announcer component that provides aria-live regions\nfor dynamic content updates and screen reader announcements',
            displayName: 'AccessibilityAnnouncer',
            props: {
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
              'components/AccessibilityAnnouncer.tsx#AccessibilityAnnouncer'
            ] = {
              docgenInfo: AccessibilityAnnouncer.__docgenInfo,
              name: 'AccessibilityAnnouncer',
              path: 'components/AccessibilityAnnouncer.tsx#AccessibilityAnnouncer',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((updateStatusRegion.displayName = 'updateStatusRegion'),
          (updateStatusRegion.__docgenInfo = {
            description: '',
            displayName: 'updateStatusRegion',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/AccessibilityAnnouncer.tsx#updateStatusRegion'] = {
              docgenInfo: updateStatusRegion.__docgenInfo,
              name: 'updateStatusRegion',
              path: 'components/AccessibilityAnnouncer.tsx#updateStatusRegion',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((updateErrorRegion.displayName = 'updateErrorRegion'),
          (updateErrorRegion.__docgenInfo = {
            description: '',
            displayName: 'updateErrorRegion',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/AccessibilityAnnouncer.tsx#updateErrorRegion'] = {
              docgenInfo: updateErrorRegion.__docgenInfo,
              name: 'updateErrorRegion',
              path: 'components/AccessibilityAnnouncer.tsx#updateErrorRegion',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      function SearchModal({ isOpen, onClose }) {
        const {
            query,
            recentSearches,
            selectedIndex,
            searchResults,
            smartSuggestions,
            suggestions,
            isSemanticMode,
            searchAnalytics,
            setQuery,
            navigateToResult,
            clearRecentSearches,
            setSelectedIndex,
            toggleSearchMode,
          } = useEnhancedSearch(),
          displayResults = query ? searchResults : smartSuggestions,
          showRecentSearches = !query && recentSearches.length > 0,
          showSuggestions = query && query.length >= 2 && suggestions.length > 0
        ;(0, react.useEffect)(() => {
          query && searchResults.length > 0
            ? announceToScreenReader(
                `Found ${searchResults.length} search results for ${query}`,
                'polite'
              )
            : query &&
              0 === searchResults.length &&
              announceToScreenReader(`No search results found for ${query}`, 'polite')
        }, [query, searchResults.length])
        const getResultIcon = (result) => {
            switch (result.type) {
              case 'project':
                return (0, jsx_runtime.jsx)(folder.A, { size: 16, className: 'text-blue-400' })
              case 'page':
                return (0, jsx_runtime.jsx)(file_text.A, { size: 16, className: 'text-green-400' })
              case 'content':
                return (0, jsx_runtime.jsx)(hash.A, { size: 16, className: 'text-purple-400' })
              default:
                return (0, jsx_runtime.jsx)(file_text.A, { size: 16, className: 'text-gray-400' })
            }
          },
          getResultBadge = (result) =>
            'semanticScore' in result && result.semanticScore && result.semanticScore > 0.4
              ? (0, jsx_runtime.jsxs)('span', {
                  className:
                    'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
                  children: [
                    (0, jsx_runtime.jsx)(sparkles.A, { size: 10, className: 'mr-1' }),
                    'AI Match',
                  ],
                })
              : 'project' === result.type
                ? (0, jsx_runtime.jsx)('span', {
                    className:
                      'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                    children: 'Project',
                  })
                : result.category
                  ? (0, jsx_runtime.jsx)('span', {
                      className:
                        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
                      children: result.category,
                    })
                  : null,
          getMatchReasonIndicator = (result) => {
            var _result_matchReasons
            if (
              !('matchReasons' in result) ||
              !(null === (_result_matchReasons = result.matchReasons) ||
              void 0 === _result_matchReasons
                ? void 0
                : _result_matchReasons.length)
            )
              return null
            const reason = result.matchReasons[0]
            let icon = (0, jsx_runtime.jsx)(target.A, { size: 10 }),
              color = 'text-gray-400'
            return (
              reason.includes('Semantic')
                ? ((icon = (0, jsx_runtime.jsx)(brain.A, { size: 10 })),
                  (color = 'text-purple-400'))
                : reason.includes('Title') &&
                  ((icon = (0, jsx_runtime.jsx)(zap.A, { size: 10 })), (color = 'text-yellow-400')),
              (0, jsx_runtime.jsx)('span', {
                className: `inline-flex items-center text-xs ${color} ml-2`,
                title: reason,
                children: icon,
              })
            )
          }
        return (0, jsx_runtime.jsx)(transition.e, {
          appear: !0,
          show: isOpen,
          as: react.Fragment,
          children: (0, jsx_runtime.jsxs)(dialog.lG, {
            as: 'div',
            className: 'relative z-[200]',
            onClose,
            'aria-labelledby': 'search-modal-title',
            children: [
              (0, jsx_runtime.jsx)(transition.e.Child, {
                as: react.Fragment,
                enter: 'ease-out duration-300',
                enterFrom: 'opacity-0',
                enterTo: 'opacity-100',
                leave: 'ease-in duration-200',
                leaveFrom: 'opacity-100',
                leaveTo: 'opacity-0',
                children: (0, jsx_runtime.jsx)('div', {
                  className: 'fixed inset-0 bg-black/50 backdrop-blur-sm',
                }),
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'fixed inset-0 overflow-y-auto',
                children: (0, jsx_runtime.jsx)('div', {
                  className: 'flex min-h-full items-start justify-center p-4 pt-[10vh]',
                  children: (0, jsx_runtime.jsx)(transition.e.Child, {
                    as: react.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom: 'opacity-0 scale-95',
                    enterTo: 'opacity-100 scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 scale-100',
                    leaveTo: 'opacity-0 scale-95',
                    children: (0, jsx_runtime.jsxs)(dialog.lG.Panel, {
                      className:
                        'w-full max-w-2xl transform overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-2xl transition-all border border-gray-200 dark:border-gray-700',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className:
                            'flex items-center border-b border-gray-200 dark:border-gray-700 px-4',
                          children: [
                            (0, jsx_runtime.jsx)('h1', {
                              id: 'search-modal-title',
                              className: 'sr-only',
                              children: 'Search Modal',
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'flex items-center mr-3',
                              children: [
                                (0, jsx_runtime.jsx)(search.A, {
                                  size: 20,
                                  className: 'text-gray-400',
                                }),
                                isSemanticMode &&
                                  (0, jsx_runtime.jsx)(brain.A, {
                                    size: 12,
                                    className: 'text-purple-400 ml-1',
                                  }),
                              ],
                            }),
                            (0, jsx_runtime.jsx)('input', {
                              type: 'text',
                              className:
                                'flex-1 py-4 text-lg placeholder-gray-500 focus:outline-none bg-transparent text-gray-900 dark:text-white',
                              placeholder: isSemanticMode
                                ? 'AI-powered search...'
                                : 'Search projects, pages, and content...',
                              value: query,
                              onChange: (e) => setQuery(e.target.value),
                              autoFocus: !0,
                              'aria-label': 'Search input',
                              'aria-describedby': 'search-description search-instructions',
                              'aria-autocomplete': 'list',
                              'aria-expanded': displayResults.length > 0,
                              'aria-controls': 'search-results',
                              role: 'combobox',
                            }),
                            (0, jsx_runtime.jsxs)('button', {
                              onClick: toggleSearchMode,
                              className:
                                'hidden sm:flex items-center text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mr-2 transition-colors',
                              title: isSemanticMode
                                ? 'Switch to keyword search'
                                : 'Switch to AI search',
                              children: [
                                isSemanticMode
                                  ? (0, jsx_runtime.jsx)(brain.A, { size: 12, className: 'mr-1' })
                                  : (0, jsx_runtime.jsx)(search.A, { size: 12, className: 'mr-1' }),
                                isSemanticMode ? 'AI' : 'Basic',
                              ],
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              className:
                                'hidden sm:flex items-center text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded',
                              children: [
                                (0, jsx_runtime.jsx)(command.A, { size: 12, className: 'mr-1' }),
                                'K',
                              ],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'max-h-96 overflow-y-auto',
                          id: 'search-results',
                          children: [
                            displayResults.length > 0 &&
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'py-2',
                                children: [
                                  (0, jsx_runtime.jsxs)('div', {
                                    className:
                                      'px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center justify-between',
                                    children: [
                                      (0, jsx_runtime.jsx)('span', {
                                        children: query
                                          ? `${isSemanticMode ? 'AI ' : ''}Results (${displayResults.length})`
                                          : 'Quick Access',
                                      }),
                                      query &&
                                        isSemanticMode &&
                                        searchAnalytics &&
                                        (0, jsx_runtime.jsxs)('span', {
                                          className: 'text-xs text-purple-400 flex items-center',
                                          children: [
                                            (0, jsx_runtime.jsx)(sparkles.A, {
                                              size: 10,
                                              className: 'mr-1',
                                            }),
                                            'Semantic',
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, jsx_runtime.jsxs)('div', {
                                    role: 'listbox',
                                    'aria-label': query
                                      ? `Search results for ${query}`
                                      : 'Quick access suggestions',
                                    'aria-live': 'polite',
                                    'aria-describedby': 'results-count',
                                    children: [
                                      (0, jsx_runtime.jsx)('div', {
                                        id: 'results-count',
                                        className: 'sr-only',
                                        children: query
                                          ? `${displayResults.length} results found`
                                          : `${displayResults.length} suggestions available`,
                                      }),
                                      displayResults.map((result, index) =>
                                        (0, jsx_runtime.jsx)(
                                          'button',
                                          {
                                            type: 'button',
                                            className:
                                              'w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none transition-colors ' +
                                              (selectedIndex === index
                                                ? 'bg-gray-50 dark:bg-gray-800'
                                                : ''),
                                            onClick: () =>
                                              ((result) => {
                                                navigateToResult(result)
                                              })(result),
                                            onMouseEnter: () => setSelectedIndex(index),
                                            role: 'option',
                                            'aria-selected': selectedIndex === index,
                                            children: (0, jsx_runtime.jsxs)('div', {
                                              className: 'flex items-start gap-3',
                                              children: [
                                                (0, jsx_runtime.jsx)('div', {
                                                  className: 'flex-shrink-0 mt-0.5',
                                                  children: getResultIcon(result),
                                                }),
                                                (0, jsx_runtime.jsxs)('div', {
                                                  className: 'flex-1 min-w-0',
                                                  children: [
                                                    (0, jsx_runtime.jsxs)('div', {
                                                      className: 'flex items-center gap-2 mb-1',
                                                      children: [
                                                        (0, jsx_runtime.jsx)('h3', {
                                                          className:
                                                            'text-sm font-medium text-gray-900 dark:text-white truncate',
                                                          children: result.title,
                                                        }),
                                                        getResultBadge(result),
                                                        getMatchReasonIndicator(result),
                                                        result.url.startsWith('http') &&
                                                          (0, jsx_runtime.jsx)(external_link.A, {
                                                            size: 12,
                                                            className:
                                                              'text-gray-400 flex-shrink-0',
                                                          }),
                                                      ],
                                                    }),
                                                    (0, jsx_runtime.jsx)('p', {
                                                      className:
                                                        'text-sm text-gray-600 dark:text-gray-300 line-clamp-2',
                                                      children: result.description,
                                                    }),
                                                    result.tags &&
                                                      result.tags.length > 0 &&
                                                      (0, jsx_runtime.jsxs)('div', {
                                                        className: 'flex flex-wrap gap-1 mt-2',
                                                        children: [
                                                          result.tags
                                                            .slice(0, 3)
                                                            .map((tag) =>
                                                              (0, jsx_runtime.jsx)(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
                                                                  children: tag,
                                                                },
                                                                tag
                                                              )
                                                            ),
                                                          result.tags.length > 3 &&
                                                            (0, jsx_runtime.jsxs)('span', {
                                                              className: 'text-xs text-gray-400',
                                                              children: [
                                                                '+',
                                                                result.tags.length - 3,
                                                                ' more',
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                (0, jsx_runtime.jsx)('div', {
                                                  className: 'flex-shrink-0',
                                                  children: (0, jsx_runtime.jsx)(arrow_right.A, {
                                                    size: 16,
                                                    className: 'text-gray-400',
                                                  }),
                                                }),
                                              ],
                                            }),
                                          },
                                          result.id
                                        )
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            showSuggestions &&
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'border-t border-gray-200 dark:border-gray-700 py-2',
                                children: [
                                  (0, jsx_runtime.jsxs)('div', {
                                    className:
                                      'px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide flex items-center',
                                    children: [
                                      (0, jsx_runtime.jsx)(brain.A, {
                                        size: 12,
                                        className: 'mr-1',
                                      }),
                                      'AI Suggestions',
                                    ],
                                  }),
                                  (0, jsx_runtime.jsx)('div', {
                                    className: 'px-4 space-y-1',
                                    children: suggestions.map((suggestion, index) =>
                                      (0, jsx_runtime.jsxs)(
                                        'button',
                                        {
                                          type: 'button',
                                          className:
                                            'block w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1',
                                          onClick: () => setQuery(suggestion),
                                          children: ['“', suggestion, '”'],
                                        },
                                        `suggestion-${index}`
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            showRecentSearches &&
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'border-t border-gray-200 dark:border-gray-700 py-2',
                                children: [
                                  (0, jsx_runtime.jsxs)('div', {
                                    className: 'flex items-center justify-between px-4 py-2',
                                    children: [
                                      (0, jsx_runtime.jsx)('h3', {
                                        className:
                                          'text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide',
                                        children: 'Recent Searches',
                                      }),
                                      (0, jsx_runtime.jsx)('button', {
                                        type: 'button',
                                        onClick: clearRecentSearches,
                                        className:
                                          'text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
                                        'aria-label': 'Clear recent searches',
                                        children: 'Clear',
                                      }),
                                    ],
                                  }),
                                  (0, jsx_runtime.jsx)('div', {
                                    children: recentSearches.map((searchTerm, index) =>
                                      (0, jsx_runtime.jsx)(
                                        'button',
                                        {
                                          type: 'button',
                                          className:
                                            'w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 focus:outline-none transition-colors',
                                          onClick: () =>
                                            ((searchTerm) => {
                                              setQuery(searchTerm)
                                            })(searchTerm),
                                          'aria-label': `Search for ${searchTerm} again`,
                                          children: (0, jsx_runtime.jsxs)('div', {
                                            className: 'flex items-center gap-3',
                                            children: [
                                              (0, jsx_runtime.jsx)(clock.A, {
                                                size: 16,
                                                className: 'text-gray-400',
                                              }),
                                              (0, jsx_runtime.jsx)('span', {
                                                className:
                                                  'text-sm text-gray-600 dark:text-gray-300',
                                                children: searchTerm,
                                              }),
                                            ],
                                          }),
                                        },
                                        `recent-${index}`
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            query &&
                              0 === displayResults.length &&
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'py-8 text-center',
                                children: [
                                  (0, jsx_runtime.jsx)(search.A, {
                                    size: 48,
                                    className: 'mx-auto text-gray-300 dark:text-gray-600 mb-4',
                                  }),
                                  (0, jsx_runtime.jsx)('h3', {
                                    className:
                                      'text-lg font-medium text-gray-900 dark:text-white mb-2',
                                    children: 'No results found',
                                  }),
                                  (0, jsx_runtime.jsx)('p', {
                                    className: 'text-sm text-gray-600 dark:text-gray-400',
                                    children: 'Try searching for projects, pages, or technologies',
                                  }),
                                ],
                              }),
                            !query &&
                              0 === displayResults.length &&
                              !showRecentSearches &&
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'py-8 text-center',
                                children: [
                                  (0, jsx_runtime.jsx)(search.A, {
                                    size: 48,
                                    className: 'mx-auto text-gray-300 dark:text-gray-600 mb-4',
                                  }),
                                  (0, jsx_runtime.jsx)('h3', {
                                    className:
                                      'text-lg font-medium text-gray-900 dark:text-white mb-2',
                                    children: 'Start searching',
                                  }),
                                  (0, jsx_runtime.jsx)('p', {
                                    className: 'text-sm text-gray-600 dark:text-gray-400',
                                    children: 'Find projects, pages, and content quickly',
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className:
                            'border-t border-gray-200 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800',
                          children: (0, jsx_runtime.jsxs)('div', {
                            className:
                              'flex items-center justify-between text-xs text-gray-500 dark:text-gray-400',
                            children: [
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'flex items-center gap-4',
                                children: [
                                  (0, jsx_runtime.jsxs)('span', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      (0, jsx_runtime.jsx)('kbd', {
                                        className:
                                          'px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded',
                                        children: '↑↓',
                                      }),
                                      'Navigate',
                                    ],
                                  }),
                                  (0, jsx_runtime.jsxs)('span', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      (0, jsx_runtime.jsx)('kbd', {
                                        className:
                                          'px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded',
                                        children: '↵',
                                      }),
                                      'Select',
                                    ],
                                  }),
                                  (0, jsx_runtime.jsxs)('span', {
                                    className: 'flex items-center gap-1',
                                    children: [
                                      (0, jsx_runtime.jsx)('kbd', {
                                        className:
                                          'px-1.5 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded',
                                        children: 'Esc',
                                      }),
                                      'Close',
                                    ],
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  searchAnalytics &&
                                    searchAnalytics.totalSearches > 0 &&
                                    (0, jsx_runtime.jsxs)('span', {
                                      className: 'flex items-center gap-1',
                                      children: [
                                        (0, jsx_runtime.jsx)(zap.A, { size: 10 }),
                                        searchAnalytics.totalSearches,
                                        ' searches',
                                      ],
                                    }),
                                  (0, jsx_runtime.jsx)('span', {
                                    className: 'flex items-center gap-1',
                                    children: isSemanticMode
                                      ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                          children: [
                                            (0, jsx_runtime.jsx)(brain.A, { size: 10 }),
                                            'AI-powered search',
                                          ],
                                        })
                                      : 'Keyword search',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, jsx_runtime.jsx)('div', {
                id: 'search-description',
                className: 'sr-only',
                children: 'Search through projects, pages, and content on this website.',
              }),
              (0, jsx_runtime.jsx)('div', {
                id: 'search-instructions',
                className: 'sr-only',
                children:
                  'Use arrow keys to navigate results, Enter to select, or Escape to close.',
              }),
            ],
          }),
        })
      }
      try {
        ;((SearchModal.displayName = 'SearchModal'),
          (SearchModal.__docgenInfo = {
            description: '',
            displayName: 'SearchModal',
            props: {
              isOpen: {
                defaultValue: null,
                description: '',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/SearchModal.tsx#SearchModal'] = {
              docgenInfo: SearchModal.__docgenInfo,
              name: 'SearchModal',
              path: 'components/SearchModal.tsx#SearchModal',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      const useSearch_staticPages = [
        {
          id: 'home',
          title: 'Home',
          description: 'Oliver Newth - AI Engineer & Product Builder',
          type: 'page',
          url: '/',
          category: 'navigation',
        },
        {
          id: 'projects',
          title: 'Projects',
          description: 'Explore my latest projects and experiments',
          type: 'page',
          url: '/projects',
          category: 'navigation',
        },
        {
          id: 'work',
          title: 'Work',
          description: 'Professional experience and career highlights',
          type: 'page',
          url: '/work',
          category: 'navigation',
        },
        {
          id: 'newsletter',
          title: 'Newsletter',
          description: 'Subscribe to updates on AI, product strategy, and development',
          type: 'page',
          url: '/newsletter',
          category: 'content',
        },
        {
          id: 'ai-engineering',
          title: 'AI Engineering',
          description: 'Building intelligent systems and AI-powered applications',
          type: 'content',
          url: '/work',
          category: 'expertise',
          tags: ['AI', 'Machine Learning', 'Engineering'],
        },
        {
          id: 'product-strategy',
          title: 'Product Strategy',
          description: 'Strategic product development and go-to-market planning',
          type: 'content',
          url: '/work',
          category: 'expertise',
          tags: ['Product', 'Strategy', 'Planning'],
        },
        {
          id: 'mcp-protocol',
          title: 'MCP Protocol',
          description: 'Model Context Protocol development and implementation',
          type: 'content',
          url: '/projects',
          category: 'technology',
          tags: ['MCP', 'Protocol', 'AI', 'TypeScript'],
        },
      ]
      function Navigation() {
        const [isMenuOpen, setIsMenuOpen] = (0, react.useState)(!1),
          [isScrolled, setIsScrolled] = (0, react.useState)(!1),
          pathname = (0, navigation.usePathname)(),
          {
            isOpen: isSearchOpen,
            openSearch,
            closeSearch,
          } = (function useSearch() {
            const [query, setQuery] = (0, react.useState)(''),
              [isOpen, setIsOpen] = (0, react.useState)(!1),
              [recentSearches, setRecentSearches] = (0, react.useState)([]),
              [selectedIndex, setSelectedIndex] = (0, react.useState)(-1)
            ;(0, react.useEffect)(() => {
              {
                const stored = localStorage.getItem('newth-recent-searches')
                if (stored)
                  try {
                    setRecentSearches(JSON.parse(stored))
                  } catch (e) {}
              }
            }, [])
            const saveRecentSearch = (0, react.useCallback)((searchQuery) => {
                searchQuery.trim() &&
                  setRecentSearches((prev) => {
                    const newRecent = [searchQuery, ...prev.filter((q) => q !== searchQuery)].slice(
                      0,
                      5
                    )
                    return (
                      localStorage.setItem('newth-recent-searches', JSON.stringify(newRecent)),
                      newRecent
                    )
                  })
              }, []),
              clearRecentSearches = (0, react.useCallback)(() => {
                ;(setRecentSearches([]), localStorage.removeItem('newth-recent-searches'))
              }, []),
              projectResults = (0, react.useMemo)(
                () =>
                  projects.map((project) => ({
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    type: 'project',
                    url: project.links.website || `/projects#${project.id}`,
                    category: project.category,
                    tags: project.tags,
                  })),
                []
              ),
              allResults = (0, react.useMemo)(
                () => [...projectResults, ...useSearch_staticPages],
                [projectResults]
              ),
              searchResults = (0, react.useMemo)(() => {
                if (!query.trim()) return []
                const searchTerm = query.toLowerCase().trim()
                return allResults
                  .map((item) => {
                    var _item_tags, _item_category
                    let score = 0
                    return (
                      item.title.toLowerCase() === searchTerm
                        ? (score += 100)
                        : item.title.toLowerCase().startsWith(searchTerm)
                          ? (score += 80)
                          : item.title.toLowerCase().includes(searchTerm) && (score += 60),
                      item.description.toLowerCase().includes(searchTerm) && (score += 40),
                      (null === (_item_tags = item.tags) || void 0 === _item_tags
                        ? void 0
                        : _item_tags.some((tag) => tag.toLowerCase().includes(searchTerm))) &&
                        (score += 50),
                      (null === (_item_category = item.category) || void 0 === _item_category
                        ? void 0
                        : _item_category.toLowerCase().includes(searchTerm)) && (score += 30),
                      item.type.toLowerCase().includes(searchTerm) && (score += 20),
                      { ...item, score }
                    )
                  })
                  .filter((item) => item.score > 0)
                  .sort((a, b) => (b.score || 0) - (a.score || 0))
                  .slice(0, 10)
              }, [query, allResults]),
              suggestions = (0, react.useMemo)(
                () =>
                  allResults
                    .filter((item) => 'project' === item.type || 'navigation' === item.category)
                    .slice(0, 6),
                [allResults]
              ),
              openSearch = (0, react.useCallback)(() => {
                ;(setIsOpen(!0), setSelectedIndex(-1))
              }, []),
              closeSearch = (0, react.useCallback)(() => {
                ;(setIsOpen(!1), setQuery(''), setSelectedIndex(-1))
              }, []),
              handleSearch = (0, react.useCallback)(
                (searchQuery) => {
                  const searchTerm = searchQuery || query
                  searchTerm.trim() && saveRecentSearch(searchTerm.trim())
                },
                [query, saveRecentSearch]
              ),
              navigateToResult = (0, react.useCallback)(
                (result) => {
                  ;(handleSearch(),
                    closeSearch(),
                    result.url.startsWith('http')
                      ? window.open(result.url, '_blank', 'noopener,noreferrer')
                      : (window.location.href = result.url))
                },
                [handleSearch, closeSearch]
              ),
              handleKeyDown = (0, react.useCallback)(
                (e) => {
                  if (!isOpen) return
                  const results = query ? searchResults : suggestions
                  switch (e.key) {
                    case 'ArrowDown':
                      ;(e.preventDefault(),
                        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev)))
                      break
                    case 'ArrowUp':
                      ;(e.preventDefault(),
                        setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev)))
                      break
                    case 'Enter':
                      ;(e.preventDefault(),
                        selectedIndex >= 0 && results[selectedIndex]
                          ? navigateToResult(results[selectedIndex])
                          : query.trim() && handleSearch())
                      break
                    case 'Escape':
                      ;(e.preventDefault(), closeSearch())
                  }
                },
                [
                  isOpen,
                  query,
                  searchResults,
                  suggestions,
                  selectedIndex,
                  navigateToResult,
                  handleSearch,
                  closeSearch,
                ]
              )
            return (
              (0, react.useEffect)(() => {
                const handleGlobalKeyDown = (e) => {
                  ;(e.metaKey || e.ctrlKey) &&
                    'k' === e.key &&
                    (e.preventDefault(), isOpen ? closeSearch() : openSearch())
                }
                return (
                  document.addEventListener('keydown', handleGlobalKeyDown),
                  () => document.removeEventListener('keydown', handleGlobalKeyDown)
                )
              }, [isOpen, openSearch, closeSearch]),
              (0, react.useEffect)(() => {
                if (isOpen)
                  return (
                    document.addEventListener('keydown', handleKeyDown),
                    () => document.removeEventListener('keydown', handleKeyDown)
                  )
              }, [isOpen, handleKeyDown]),
              {
                query,
                isOpen,
                recentSearches,
                selectedIndex,
                searchResults,
                suggestions,
                setQuery,
                openSearch,
                closeSearch,
                handleSearch,
                navigateToResult,
                clearRecentSearches,
                setSelectedIndex,
              }
            )
          })()
        if (
          ((0, react.useEffect)(() => {
            const handleScroll = () => {
              setIsScrolled(window.scrollY > 20)
            }
            return (
              window.addEventListener('scroll', handleScroll),
              () => window.removeEventListener('scroll', handleScroll)
            )
          }, []),
          (0, react.useEffect)(
            () => (
              (document.body.style.overflow = isMenuOpen ? 'hidden' : ''),
              () => {
                document.body.style.overflow = ''
              }
            ),
            [isMenuOpen]
          ),
          (0, react.useEffect)(() => {
            const handleEscape = (e) => {
              'Escape' === e.key && isMenuOpen && setIsMenuOpen(!1)
            }
            return (
              document.addEventListener('keydown', handleEscape),
              () => document.removeEventListener('keydown', handleEscape)
            )
          }, [isMenuOpen]),
          null == pathname ? void 0 : pathname.startsWith('/demos/'))
        )
          return null
        const navItems = [
          { href: '/projects', text: 'Projects', icon: folder_open.A },
          { href: '/work', text: 'Work', icon: briefcase.A },
          { href: '/blog', text: 'Writing', icon: pen_line.A },
          { href: social.l.github, text: 'GitHub', external: !0, icon: github.A },
        ]
        return (0, jsx_runtime.jsxs)('nav', {
          role: 'navigation',
          'aria-label': 'Main navigation',
          className:
            'fixed top-0 left-0 right-0 z-[102] transition-all duration-300 ' +
            (isMenuOpen || isScrolled
              ? 'bg-black/95 backdrop-blur-sm'
              : 'bg-black/70 backdrop-blur-sm'),
          children: [
            (0, jsx_runtime.jsx)(Container.m, {
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'flex h-20 items-center justify-between',
                children: [
                  (0, jsx_runtime.jsx)('div', {
                    className: 'flex items-center',
                    children: (0, jsx_runtime.jsx)(link_default(), {
                      href: '/',
                      className: 'flex items-center relative z-[103] group',
                      'aria-label': 'Home - Oliver Newth',
                      children: (0, jsx_runtime.jsx)(AnimatedLogo.H, {}),
                    }),
                  }),
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'hidden md:flex md:items-center md:space-x-2',
                    children: [
                      (0, jsx_runtime.jsx)('button', {
                        onClick: openSearch,
                        className:
                          'p-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center',
                        'aria-label': 'Open search modal',
                        'aria-keyshortcuts': 'Meta+k',
                        title: 'Search (⌘K)',
                        children: (0, jsx_runtime.jsx)(search.A, { size: 18 }),
                      }),
                      navItems.map((item) =>
                        item.external
                          ? (0, jsx_runtime.jsx)(
                              'a',
                              {
                                href: item.href,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className:
                                  'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                                children: item.text,
                              },
                              item.href
                            )
                          : (0, jsx_runtime.jsx)(
                              link_default(),
                              {
                                href: item.href,
                                className:
                                  'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                                children: item.text,
                              },
                              item.href
                            )
                      ),
                    ],
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    className: 'md:hidden',
                    children: (0, jsx_runtime.jsx)('button', {
                      onClick: () => setIsMenuOpen(!isMenuOpen),
                      className:
                        'relative p-3 -mr-3 text-white z-[102] hover:bg-white/10 rounded-lg transition-colors',
                      'aria-label': isMenuOpen ? 'Close navigation menu' : 'Open navigation menu',
                      'aria-expanded': isMenuOpen,
                      'aria-controls': 'mobile-menu',
                      type: 'button',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'relative w-6 h-6 pointer-events-none',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className:
                              'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ' +
                              (isMenuOpen ? 'rotate-45 top-[11px]' : 'top-[5px]'),
                          }),
                          (0, jsx_runtime.jsx)('span', {
                            className:
                              'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 top-[11px] ' +
                              (isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'),
                          }),
                          (0, jsx_runtime.jsx)('span', {
                            className:
                              'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ' +
                              (isMenuOpen ? '-rotate-45 top-[11px]' : 'top-[17px]'),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, jsx_runtime.jsx)(AnimatePresence.N, {
              mode: 'wait',
              children:
                isMenuOpen &&
                (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: (0, jsx_runtime.jsx)(proxy.P.div, {
                    initial: { x: '100%' },
                    animate: { x: 0 },
                    exit: { x: '100%' },
                    transition: { type: 'spring', damping: 30, stiffness: 300 },
                    className: 'fixed right-0 top-0 h-screen w-full z-[101] md:hidden bg-black',
                    id: 'mobile-menu',
                    role: 'dialog',
                    'aria-modal': 'true',
                    'aria-labelledby': 'mobile-menu-title',
                    children: (0, jsx_runtime.jsxs)('div', {
                      className: 'h-screen w-full flex flex-col pt-20',
                      children: [
                        (0, jsx_runtime.jsxs)('div', {
                          className: 'flex-grow overflow-y-auto px-6 pt-8 pb-8',
                          children: [
                            (0, jsx_runtime.jsxs)('button', {
                              onClick: () => {
                                ;(setIsMenuOpen(!1), openSearch())
                              },
                              className:
                                'flex items-center justify-between w-full p-4 rounded-lg hover:bg-white/5 transition-colors mb-6 border border-white/10',
                              'aria-label': 'Open search modal',
                              'aria-keyshortcuts': 'Meta+k',
                              children: [
                                (0, jsx_runtime.jsxs)('div', {
                                  className: 'flex items-center gap-3',
                                  children: [
                                    (0, jsx_runtime.jsx)(search.A, {
                                      size: 20,
                                      className: 'text-gray-400',
                                    }),
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-white text-base font-medium',
                                      children: 'Search',
                                    }),
                                  ],
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                  className:
                                    'flex items-center text-xs text-gray-400 bg-white/10 px-2 py-1 rounded',
                                  children: '⌘K',
                                }),
                              ],
                            }),
                            (0, jsx_runtime.jsxs)('nav', {
                              className: 'space-y-2 mb-8',
                              'aria-label': 'Mobile navigation links',
                              children: [
                                (0, jsx_runtime.jsx)('h2', {
                                  id: 'mobile-menu-title',
                                  className: 'sr-only',
                                  children: 'Navigation Menu',
                                }),
                                navItems.map((item) => {
                                  const IconComponent = item.icon
                                  return item.external
                                    ? (0, jsx_runtime.jsxs)(
                                        'a',
                                        {
                                          href: item.href,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          className:
                                            'flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors',
                                          onClick: () => setIsMenuOpen(!1),
                                          'aria-label': `${item.text} (opens in new tab)`,
                                          children: [
                                            (0, jsx_runtime.jsxs)('div', {
                                              className: 'flex items-center gap-3',
                                              children: [
                                                IconComponent &&
                                                  (0, jsx_runtime.jsx)(IconComponent, {
                                                    size: 20,
                                                    className: 'text-gray-400',
                                                  }),
                                                (0, jsx_runtime.jsx)('span', {
                                                  className: 'text-white text-base font-medium',
                                                  children: item.text,
                                                }),
                                              ],
                                            }),
                                            (0, jsx_runtime.jsx)(external_link.A, {
                                              size: 16,
                                              className: 'text-gray-400',
                                            }),
                                          ],
                                        },
                                        item.href
                                      )
                                    : (0, jsx_runtime.jsxs)(
                                        link_default(),
                                        {
                                          href: item.href,
                                          className:
                                            'flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors',
                                          onClick: () => setIsMenuOpen(!1),
                                          'aria-label': `Go to ${item.text} page`,
                                          children: [
                                            (0, jsx_runtime.jsxs)('div', {
                                              className: 'flex items-center gap-3',
                                              children: [
                                                IconComponent &&
                                                  (0, jsx_runtime.jsx)(IconComponent, {
                                                    size: 20,
                                                    className: 'text-gray-400',
                                                  }),
                                                (0, jsx_runtime.jsx)('span', {
                                                  className: 'text-white text-base font-medium',
                                                  children: item.text,
                                                }),
                                              ],
                                            }),
                                            (0, jsx_runtime.jsx)(arrow_right.A, {
                                              size: 16,
                                              className: 'text-gray-400',
                                            }),
                                          ],
                                        },
                                        item.href
                                      )
                                }),
                              ],
                            }),
                            (0, jsx_runtime.jsxs)('div', {
                              className: 'space-y-3 pt-4',
                              children: [
                                (0, jsx_runtime.jsx)(link_default(), {
                                  href: '/work',
                                  className:
                                    'block w-full text-center p-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors',
                                  onClick: () => setIsMenuOpen(!1),
                                  'aria-label': 'View my work and projects',
                                  children: 'See My Work',
                                }),
                                (0, jsx_runtime.jsx)('a', {
                                  href: 'mailto:oliver@newth.ai',
                                  className:
                                    'block w-full text-center p-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors',
                                  onClick: () => setIsMenuOpen(!1),
                                  'aria-label': 'Send me an email',
                                  children: 'Get in Touch',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'flex-shrink-0 p-6 border-t border-white/10',
                          role: 'contentinfo',
                          children: (0, jsx_runtime.jsx)('p', {
                            className: 'text-center text-sm text-white/40',
                            children: '© 2024 Oliver Newth',
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            }),
            (0, jsx_runtime.jsx)(SearchModal, { isOpen: isSearchOpen, onClose: closeSearch }),
          ],
        })
      }
      var Footer = __webpack_require__('./components/Footer.tsx'),
        Button = __webpack_require__('./components/ui/Button.tsx'),
        TerminalButton = __webpack_require__('./components/ui/TerminalButton.tsx'),
        SimpleAnimatedButton = __webpack_require__('./components/ui/SimpleAnimatedButton.tsx'),
        ProjectCard = __webpack_require__('./components/ProjectCard.tsx'),
        TerminalCard = __webpack_require__('./components/ui/TerminalCard.tsx'),
        Meteors = __webpack_require__('./components/Meteors.tsx'),
        CodeRainBackground = __webpack_require__('./components/backgrounds/CodeRainBackground.tsx'),
        GlitchBackground = __webpack_require__('./components/backgrounds/GlitchBackground.tsx'),
        NeuralNetworkBackground = __webpack_require__(
          './components/backgrounds/NeuralNetworkBackground.tsx'
        ),
        WaveformBackground = __webpack_require__('./components/backgrounds/WaveformBackground.tsx'),
        ParticleFieldBackground = __webpack_require__(
          './components/backgrounds/ParticleFieldBackground.tsx'
        ),
        DataFlowBackground = __webpack_require__('./components/backgrounds/DataFlowBackground.tsx'),
        OrbitingAtomsBackground = __webpack_require__(
          './components/backgrounds/OrbitingAtomsBackground.tsx'
        )
      const backgrounds = [
        { name: 'Matrix', component: CodeRainBackground.K },
        { name: 'Glitch', component: GlitchBackground.w },
        { name: 'Neural', component: NeuralNetworkBackground.U },
        { name: 'Wave', component: WaveformBackground.w },
        { name: 'Particles', component: ParticleFieldBackground.v },
        { name: 'Flow', component: DataFlowBackground.v },
        { name: 'Orbital', component: OrbitingAtomsBackground.v },
      ]
      const ShowcasePage_stories = {
          title: 'Examples/Pages/Component Showcase',
          component: function ShowcasePage() {
            const [currentBg, setCurrentBg] = (0, react.useState)(0),
              [buttonClicks, setButtonClicks] = (0, react.useState)({
                button: 0,
                terminal: 0,
                simple: 0,
              }),
              BackgroundComponent = backgrounds[currentBg].component,
              handleButtonClick = (type) => {
                setButtonClicks((prev) => ({ ...prev, [type]: prev[type] + 1 }))
              }
            return (0, jsx_runtime.jsxs)('div', {
              className: 'min-h-screen bg-black text-white relative',
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: 'fixed inset-0 z-0',
                  children: (0, jsx_runtime.jsx)(BackgroundComponent, {}),
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'relative z-10',
                  children: [
                    (0, jsx_runtime.jsx)(Navigation, {}),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-20 px-6',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto text-center',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'flex justify-center mb-8',
                            children: (0, jsx_runtime.jsx)(AnimatedLogo.H, {
                              enableColorOnHover: !0,
                              enableColorOnGlitch: !0,
                              baseSaturation: 90,
                              colorIntensity: 1,
                            }),
                          }),
                          (0, jsx_runtime.jsx)('h1', {
                            className: 'text-5xl font-bold mb-4',
                            children: 'Component Showcase',
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'text-xl text-gray-400',
                            children: 'All n3wth.AI components in action',
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-10 px-6',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                          (0, jsx_runtime.jsx)('h2', {
                            className: 'text-2xl font-bold mb-6',
                            children: 'Background Effects',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'flex flex-wrap gap-2',
                            children: backgrounds.map((bg, index) =>
                              (0, jsx_runtime.jsx)(
                                'button',
                                {
                                  onClick: () => setCurrentBg(index),
                                  className:
                                    'px-4 py-2 rounded-lg transition-all ' +
                                    (currentBg === index
                                      ? 'bg-purple-600 text-white'
                                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'),
                                  children: bg.name,
                                },
                                bg.name
                              )
                            ),
                          }),
                          (0, jsx_runtime.jsxs)('p', {
                            className: 'mt-4 text-gray-400',
                            children: ['Current: ', backgrounds[currentBg].name],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-10 px-6',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                          (0, jsx_runtime.jsx)('h2', {
                            className: 'text-2xl font-bold mb-6',
                            children: 'Button Components',
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
                            children: [
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'bg-gray-900/50 backdrop-blur p-6 rounded-lg',
                                children: [
                                  (0, jsx_runtime.jsx)('h3', {
                                    className: 'text-lg font-semibold mb-4',
                                    children: 'Standard Button',
                                  }),
                                  (0, jsx_runtime.jsx)(Button.$, {
                                    onClick: () => handleButtonClick('button'),
                                    className: 'mb-2',
                                    children: 'Click Me',
                                  }),
                                  (0, jsx_runtime.jsxs)('p', {
                                    className: 'text-sm text-gray-400',
                                    children: ['Clicks: ', buttonClicks.button],
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'bg-gray-900/50 backdrop-blur p-6 rounded-lg',
                                children: [
                                  (0, jsx_runtime.jsx)('h3', {
                                    className: 'text-lg font-semibold mb-4',
                                    children: 'Terminal Button',
                                  }),
                                  (0, jsx_runtime.jsx)(TerminalButton.N, {
                                    onClick: () => handleButtonClick('terminal'),
                                    children: './execute.sh',
                                  }),
                                  (0, jsx_runtime.jsxs)('p', {
                                    className: 'text-sm text-gray-400 mt-2',
                                    children: ['Clicks: ', buttonClicks.terminal],
                                  }),
                                ],
                              }),
                              (0, jsx_runtime.jsxs)('div', {
                                className: 'bg-gray-900/50 backdrop-blur p-6 rounded-lg',
                                children: [
                                  (0, jsx_runtime.jsx)('h3', {
                                    className: 'text-lg font-semibold mb-4',
                                    children: 'Animated Button',
                                  }),
                                  (0, jsx_runtime.jsx)(SimpleAnimatedButton.w, {
                                    onClick: () => handleButtonClick('simple'),
                                    children: 'Hover & Click',
                                  }),
                                  (0, jsx_runtime.jsxs)('p', {
                                    className: 'text-sm text-gray-400 mt-2',
                                    children: ['Clicks: ', buttonClicks.simple],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-10 px-6',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                          (0, jsx_runtime.jsx)('h2', {
                            className: 'text-2xl font-bold mb-6',
                            children: 'Card Components',
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                            children: [
                              (0, jsx_runtime.jsx)(ProjectCard.U, {
                                project: {
                                  id: 'showcase',
                                  title: 'Component Showcase',
                                  description:
                                    'A comprehensive demonstration of all available components in the n3wth.AI design system.',
                                  year: '2025',
                                  tags: ['React', 'TypeScript', 'Tailwind'],
                                  tech: ['React', 'TypeScript', 'Tailwind'],
                                  status: 'active',
                                  link: '/showcase',
                                  featured: !0,
                                  color: 'text-purple-400',
                                  metrics: [
                                    { label: '20+ components', color: 'text-purple-400' },
                                    { label: 'Fully interactive', color: 'text-green-400' },
                                  ],
                                },
                              }),
                              (0, jsx_runtime.jsx)(TerminalCard.l, {
                                children: (0, jsx_runtime.jsxs)('div', {
                                  className: 'p-6',
                                  children: [
                                    (0, jsx_runtime.jsx)('h3', {
                                      className: 'text-lg font-semibold mb-4 text-green-400',
                                      children: 'Terminal Card',
                                    }),
                                    (0, jsx_runtime.jsxs)('div', {
                                      className: 'font-mono text-sm space-y-1',
                                      children: [
                                        (0, jsx_runtime.jsx)('div', {
                                          className: 'text-gray-400',
                                          children: '$ npm run dev',
                                        }),
                                        (0, jsx_runtime.jsx)('div', {
                                          className: 'text-gray-300',
                                          children: '> Starting development server...',
                                        }),
                                        (0, jsx_runtime.jsx)('div', {
                                          className: 'text-green-400',
                                          children: '✓ Ready on http://localhost:3000',
                                        }),
                                        (0, jsx_runtime.jsx)('div', {}),
                                        (0, jsx_runtime.jsx)('div', {
                                          className: 'text-gray-400',
                                          children: '$ System initialized',
                                        }),
                                        (0, jsx_runtime.jsx)('div', {
                                          className: 'text-gray-300',
                                          children: '> All components loaded successfully',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-10 px-6 relative',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                          (0, jsx_runtime.jsx)('h2', {
                            className: 'text-2xl font-bold mb-6',
                            children: 'Animation Effects',
                          }),
                          (0, jsx_runtime.jsxs)('div', {
                            className:
                              'bg-gray-900/50 backdrop-blur p-20 rounded-lg relative overflow-hidden',
                            children: [
                              (0, jsx_runtime.jsx)(Meteors.G, { number: 20 }),
                              (0, jsx_runtime.jsx)('p', {
                                className: 'text-center relative z-10',
                                children: 'Meteors animation overlay',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)('section', {
                      className: 'py-10 px-6',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                          (0, jsx_runtime.jsx)('h2', {
                            className: 'text-2xl font-bold mb-6',
                            children: 'Component Best Practices',
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'bg-gray-900/50 backdrop-blur p-6 rounded-lg',
                            children: (0, jsx_runtime.jsxs)('ul', {
                              className: 'space-y-2',
                              children: [
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'All components use TypeScript for type safety',
                                  ],
                                }),
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'Tailwind CSS for consistent styling',
                                  ],
                                }),
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'React.memo for performance optimization',
                                  ],
                                }),
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'Proper event handlers with user feedback',
                                  ],
                                }),
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'Accessibility attributes (ARIA labels, roles)',
                                  ],
                                }),
                                (0, jsx_runtime.jsxs)('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    (0, jsx_runtime.jsx)('span', {
                                      className: 'text-green-400',
                                      children: '✓',
                                    }),
                                    'Cleanup on unmount for animations',
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, jsx_runtime.jsx)(Footer.w, {}),
                  ],
                }),
              ],
            })
          },
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'black' },
            docs: {
              description: {
                component:
                  '\n## Component Showcase\n\nA comprehensive demonstration of all available components in the n3wth.AI design system.\n\n### Features\n- 🎨 **All UI Components** - Buttons, cards, and interactive elements\n- 🌊 **All Background Animations** - Switch between 8 different animated backgrounds\n- 📊 **Interactive Controls** - Click tracking and state management\n- ♿ **Accessibility** - Proper ARIA labels and keyboard navigation\n- 🚀 **Performance** - Optimized with React.memo and cleanup on unmount\n\n### Best Practices Demonstrated\n- TypeScript for type safety\n- Event handlers with user feedback\n- State management patterns\n- Component composition\n- Tailwind CSS styling\n- Responsive design\n\n### Usage\n\nThis showcase page demonstrates how to:\n1. Combine multiple components effectively\n2. Handle user interactions with proper feedback\n3. Manage component state\n4. Switch between different background animations\n5. Create an interactive, accessible UI\n\nVisit the live page at `/showcase` to see all components in action.\n        ',
              },
            },
          },
        },
        Default = { parameters: { nextjs: { appDirectory: !0 } } },
        InteractiveShowcase = {
          parameters: {
            docs: {
              description: {
                story:
                  'Full interactive showcase with all components. Try switching backgrounds and clicking buttons!',
              },
            },
          },
        },
        __namedExportsOrder = ['Default', 'InteractiveShowcase']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  parameters: {\n    nextjs: {\n      appDirectory: true\n    }\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (InteractiveShowcase.parameters = {
          ...InteractiveShowcase.parameters,
          docs: {
            ...InteractiveShowcase.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Full interactive showcase with all components. Try switching backgrounds and clicking buttons!'\n      }\n    }\n  }\n}",
              ...InteractiveShowcase.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
