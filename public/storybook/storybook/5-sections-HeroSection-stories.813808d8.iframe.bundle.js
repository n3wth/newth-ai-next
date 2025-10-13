/*! For license information please see 5-sections-HeroSection-stories.813808d8.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [6419],
  {
    './components/WarpBackgroundLazy.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
    './components/sections/HeroSectionOptimized.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
    './components/ui/SimpleAnimatedButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
    './node_modules/lucide-react/dist/esm/createLucideIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
      'use strict'
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
    './node_modules/lucide-react/dist/esm/icons/chevron-down.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
      const ChevronDown = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'chevron-down',
        [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]
      )
    },
    './node_modules/next/dist/shared/lib/dynamic.js': (module, exports, __webpack_require__) => {
      'use strict'
      ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, { enumerable: !0, get: all[name] })
        })(exports, {
          default: function () {
            return dynamic
          },
          noSSR: function () {
            return noSSR
          },
        }))
      const _interop_require_default = __webpack_require__(
          './node_modules/@swc/helpers/cjs/_interop_require_default.cjs'
        ),
        _jsxruntime = __webpack_require__('./node_modules/next/dist/compiled/react/jsx-runtime.js'),
        _loadablesharedruntime =
          (__webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
          _interop_require_default._(
            __webpack_require__('./node_modules/next/dist/shared/lib/loadable.shared-runtime.js')
          )),
        isServerSide = 'undefined' == typeof window
      function convertModule(mod) {
        return { default: (null == mod ? void 0 : mod.default) || mod }
      }
      function noSSR(LoadableInitializer, loadableOptions) {
        if ((delete loadableOptions.webpack, delete loadableOptions.modules, !isServerSide))
          return LoadableInitializer(loadableOptions)
        const Loading = loadableOptions.loading
        return () =>
          (0, _jsxruntime.jsx)(Loading, { error: null, isLoading: !0, pastDelay: !1, timedOut: !1 })
      }
      function dynamic(dynamicOptions, options) {
        let loadableFn = _loadablesharedruntime.default,
          loadableOptions = {
            loading: (param) => {
              let { error, isLoading, pastDelay } = param
              return null
            },
          }
        ;(dynamicOptions instanceof Promise
          ? (loadableOptions.loader = () => dynamicOptions)
          : 'function' == typeof dynamicOptions
            ? (loadableOptions.loader = dynamicOptions)
            : 'object' == typeof dynamicOptions &&
              (loadableOptions = { ...loadableOptions, ...dynamicOptions }),
          (loadableOptions = { ...loadableOptions, ...options }))
        const loaderFn = loadableOptions.loader
        return (
          loadableOptions.loadableGenerated &&
            ((loadableOptions = { ...loadableOptions, ...loadableOptions.loadableGenerated }),
            delete loadableOptions.loadableGenerated),
          'boolean' != typeof loadableOptions.ssr || loadableOptions.ssr
            ? loadableFn({
                ...loadableOptions,
                loader: () =>
                  null != loaderFn
                    ? loaderFn().then(convertModule)
                    : Promise.resolve(convertModule(() => null)),
              })
            : (delete loadableOptions.webpack,
              delete loadableOptions.modules,
              noSSR(loadableFn, loadableOptions))
        )
      }
      ;('function' == typeof exports.default ||
        ('object' == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, '__esModule', { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default))
    },
    './node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'LoadableContext', {
          enumerable: !0,
          get: function () {
            return LoadableContext
          },
        }))
      const LoadableContext = __webpack_require__(
        './node_modules/@swc/helpers/cjs/_interop_require_default.cjs'
      )
        ._(__webpack_require__('./node_modules/next/dist/compiled/react/index.js'))
        .default.createContext(null)
    },
    './node_modules/next/dist/shared/lib/loadable.shared-runtime.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      'use strict'
      ;(Object.defineProperty(exports, '__esModule', { value: !0 }),
        Object.defineProperty(exports, 'default', {
          enumerable: !0,
          get: function () {
            return _default
          },
        }))
      const _react = __webpack_require__(
          './node_modules/@swc/helpers/cjs/_interop_require_default.cjs'
        )._(__webpack_require__('./node_modules/next/dist/compiled/react/index.js')),
        _loadablecontextsharedruntime = __webpack_require__(
          './node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js'
        )
      const ALL_INITIALIZERS = [],
        READY_INITIALIZERS = []
      let initialized = !1
      function load(loader) {
        let promise = loader(),
          state = { loading: !0, loaded: null, error: null }
        return (
          (state.promise = promise
            .then((loaded) => ((state.loading = !1), (state.loaded = loaded), loaded))
            .catch((err) => {
              throw ((state.loading = !1), (state.error = err), err)
            })),
          state
        )
      }
      function createLoadableComponent(loadFn, options) {
        let opts = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
            },
            options
          ),
          subscription = null
        function init() {
          if (!subscription) {
            const sub = new LoadableSubscription(loadFn, opts)
            subscription = {
              getCurrentValue: sub.getCurrentValue.bind(sub),
              subscribe: sub.subscribe.bind(sub),
              retry: sub.retry.bind(sub),
              promise: sub.promise.bind(sub),
            }
          }
          return subscription.promise()
        }
        if (
          ('undefined' == typeof window && ALL_INITIALIZERS.push(init),
          !initialized && 'undefined' != typeof window)
        ) {
          const moduleIds = opts.webpack ? opts.webpack() : opts.modules
          moduleIds &&
            READY_INITIALIZERS.push((ids) => {
              for (const moduleId of moduleIds) if (ids.includes(moduleId)) return init()
            })
        }
        function LoadableComponent(props, ref) {
          !(function useLoadableModule() {
            init()
            const context = _react.default.useContext(_loadablecontextsharedruntime.LoadableContext)
            context &&
              Array.isArray(opts.modules) &&
              opts.modules.forEach((moduleName) => {
                context(moduleName)
              })
          })()
          const state = _react.default.useSyncExternalStore(
            subscription.subscribe,
            subscription.getCurrentValue,
            subscription.getCurrentValue
          )
          return (
            _react.default.useImperativeHandle(ref, () => ({ retry: subscription.retry }), []),
            _react.default.useMemo(
              () =>
                state.loading || state.error
                  ? _react.default.createElement(opts.loading, {
                      isLoading: state.loading,
                      pastDelay: state.pastDelay,
                      timedOut: state.timedOut,
                      error: state.error,
                      retry: subscription.retry,
                    })
                  : state.loaded
                    ? _react.default.createElement(
                        (function resolve(obj) {
                          return obj && obj.default ? obj.default : obj
                        })(state.loaded),
                        props
                      )
                    : null,
              [props, state]
            )
          )
        }
        return (
          (LoadableComponent.preload = () => init()),
          (LoadableComponent.displayName = 'LoadableComponent'),
          _react.default.forwardRef(LoadableComponent)
        )
      }
      class LoadableSubscription {
        promise() {
          return this._res.promise
        }
        retry() {
          ;(this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 }))
          const { _res: res, _opts: opts } = this
          ;(res.loading &&
            ('number' == typeof opts.delay &&
              (0 === opts.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 })
                  }, opts.delay))),
            'number' == typeof opts.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 })
              }, opts.timeout))),
            this._res.promise
              .then(() => {
                ;(this._update({}), this._clearTimeouts())
              })
              .catch((_err) => {
                ;(this._update({}), this._clearTimeouts())
              }),
            this._update({}))
        }
        _update(partial) {
          ;((this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...partial,
          }),
            this._callbacks.forEach((callback) => callback()))
        }
        _clearTimeouts() {
          ;(clearTimeout(this._delay), clearTimeout(this._timeout))
        }
        getCurrentValue() {
          return this._state
        }
        subscribe(callback) {
          return (
            this._callbacks.add(callback),
            () => {
              this._callbacks.delete(callback)
            }
          )
        }
        constructor(loadFn, opts) {
          ;((this._loadFn = loadFn),
            (this._opts = opts),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry())
        }
      }
      function Loadable(opts) {
        return createLoadableComponent(load, opts)
      }
      function flushInitializers(initializers, ids) {
        let promises = []
        for (; initializers.length; ) {
          let init = initializers.pop()
          promises.push(init(ids))
        }
        return Promise.all(promises).then(() => {
          if (initializers.length) return flushInitializers(initializers, ids)
        })
      }
      ;((Loadable.preloadAll = () =>
        new Promise((resolveInitializers, reject) => {
          flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject)
        })),
        (Loadable.preloadReady = (ids) => (
          void 0 === ids && (ids = []),
          new Promise((resolvePreload) => {
            const res = () => ((initialized = !0), resolvePreload())
            flushInitializers(READY_INITIALIZERS, ids).then(res, res)
          })
        )),
        'undefined' != typeof window && (window.__NEXT_PRELOADREADY = Loadable.preloadReady))
      const _default = Loadable
    },
    './node_modules/next/dynamic.js': (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__('./node_modules/next/dist/shared/lib/dynamic.js')
    },
    './stories/5-sections/HeroSection.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomContent: () => CustomContent,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Sections/Hero',
          component: __webpack_require__('./components/sections/HeroSectionOptimized.tsx').K,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: { component: 'Full-screen hero section with animated background' },
            },
          },
        },
        Default = {},
        CustomContent = {
          args: {
            title: { line1: 'Building the future', line2: 'one line at a time.' },
            subtitle:
              'Full-stack developer passionate about creating exceptional digital experiences.',
            primaryCTA: { text: 'View Projects', href: '#projects' },
            secondaryCTA: { text: 'Contact Me', href: '#contact' },
          },
        },
        __namedExportsOrder = ['Default', 'CustomContent']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
        },
      }),
        (CustomContent.parameters = {
          ...CustomContent.parameters,
          docs: {
            ...CustomContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: {\n      line1: 'Building the future',\n      line2: 'one line at a time.'\n    },\n    subtitle: 'Full-stack developer passionate about creating exceptional digital experiences.',\n    primaryCTA: {\n      text: 'View Projects',\n      href: '#projects'\n    },\n    secondaryCTA: {\n      text: 'Contact Me',\n      href: '#contact'\n    }\n  }\n}",
              ...CustomContent.parameters?.docs?.source,
            },
          },
        }))
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
            (STORYBOOK_REACT_CLASSES['stories/5-sections/HeroSection.stories.tsx#HeroSection'] = {
              docgenInfo: HeroSection.__docgenInfo,
              name: 'HeroSection',
              path: 'stories/5-sections/HeroSection.stories.tsx#HeroSection',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
