/*! For license information please see 2699.05307764.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [2699],
  {
    './node_modules/@vercel/analytics/dist/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
    './node_modules/lucide-react/dist/esm/icons/arrow-up-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
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
      'use strict'
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
      'use strict'
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
  },
])
