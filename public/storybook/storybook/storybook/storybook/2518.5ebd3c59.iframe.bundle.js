/*! For license information please see 2518.5ebd3c59.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [2518],
  {
    './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { N: () => AnimatePresence })
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        LayoutGroupContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs'
        ),
        use_constant = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-constant.mjs'
        ),
        use_isomorphic_effect = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs'
        ),
        PresenceContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/PresenceContext.mjs'
        ),
        is_html_element = __webpack_require__(
          './node_modules/motion-dom/dist/es/utils/is-html-element.mjs'
        ),
        MotionConfigContext = __webpack_require__(
          './node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs'
        )
      function setRef(ref, value) {
        if ('function' == typeof ref) return ref(value)
        null != ref && (ref.current = value)
      }
      function useComposedRefs(...refs) {
        return react.useCallback(
          (function composeRefs(...refs) {
            return (node) => {
              let hasCleanup = !1
              const cleanups = refs.map((ref) => {
                const cleanup = setRef(ref, node)
                return (hasCleanup || 'function' != typeof cleanup || (hasCleanup = !0), cleanup)
              })
              if (hasCleanup)
                return () => {
                  for (let i = 0; i < cleanups.length; i++) {
                    const cleanup = cleanups[i]
                    'function' == typeof cleanup ? cleanup() : setRef(refs[i], null)
                  }
                }
            }
          })(...refs),
          refs
        )
      }
      class PopChildMeasure extends react.Component {
        getSnapshotBeforeUpdate(prevProps) {
          const element = this.props.childRef.current
          if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent,
              parentWidth = ((0, is_html_element.s)(parent) && parent.offsetWidth) || 0,
              size = this.props.sizeRef.current
            ;((size.height = element.offsetHeight || 0),
              (size.width = element.offsetWidth || 0),
              (size.top = element.offsetTop),
              (size.left = element.offsetLeft),
              (size.right = parentWidth - size.width - size.left))
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      function PopChild({ children, isPresent, anchorX, root }) {
        const id = (0, react.useId)(),
          ref = (0, react.useRef)(null),
          size = (0, react.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce } = (0, react.useContext)(MotionConfigContext.Q),
          composedRef = useComposedRefs(ref, children?.ref)
        return (
          (0, react.useInsertionEffect)(() => {
            const { width, height, top, left, right } = size.current
            if (isPresent || !ref.current || !width || !height) return
            const x = 'left' === anchorX ? `left: ${left}` : `right: ${right}`
            ref.current.dataset.motionPopId = id
            const style = document.createElement('style')
            nonce && (style.nonce = nonce)
            const parent = root ?? document.head
            return (
              parent.appendChild(style),
              style.sheet &&
                style.sheet.insertRule(
                  `\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            ${x}px !important;\n            top: ${top}px !important;\n          }\n        `
                ),
              () => {
                parent.contains(style) && parent.removeChild(style)
              }
            )
          }, [isPresent]),
          (0, jsx_runtime.jsx)(PopChildMeasure, {
            isPresent,
            childRef: ref,
            sizeRef: size,
            children: react.cloneElement(children, { ref: composedRef }),
          })
        )
      }
      const PresenceChild = ({
        children,
        initial,
        isPresent,
        onExitComplete,
        custom,
        presenceAffectsLayout,
        mode,
        anchorX,
        root,
      }) => {
        const presenceChildren = (0, use_constant.M)(newChildrenMap),
          id = (0, react.useId)()
        let isReusedContext = !0,
          context = (0, react.useMemo)(
            () => (
              (isReusedContext = !1),
              {
                id,
                initial,
                isPresent,
                custom,
                onExitComplete: (childId) => {
                  presenceChildren.set(childId, !0)
                  for (const isComplete of presenceChildren.values()) if (!isComplete) return
                  onExitComplete && onExitComplete()
                },
                register: (childId) => (
                  presenceChildren.set(childId, !1),
                  () => presenceChildren.delete(childId)
                ),
              }
            ),
            [isPresent, presenceChildren, onExitComplete]
          )
        return (
          presenceAffectsLayout && isReusedContext && (context = { ...context }),
          (0, react.useMemo)(() => {
            presenceChildren.forEach((_, key) => presenceChildren.set(key, !1))
          }, [isPresent]),
          react.useEffect(() => {
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete()
          }, [isPresent]),
          'popLayout' === mode &&
            (children = (0, jsx_runtime.jsx)(PopChild, { isPresent, anchorX, root, children })),
          (0, jsx_runtime.jsx)(PresenceContext.t.Provider, { value: context, children })
        )
      }
      function newChildrenMap() {
        return new Map()
      }
      var use_presence = __webpack_require__(
        './node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs'
      )
      const getChildKey = (child) => child.key || ''
      function onlyElements(children) {
        const filtered = []
        return (
          react.Children.forEach(children, (child) => {
            ;(0, react.isValidElement)(child) && filtered.push(child)
          }),
          filtered
        )
      }
      const AnimatePresence = ({
        children,
        custom,
        initial = !0,
        onExitComplete,
        presenceAffectsLayout = !0,
        mode = 'sync',
        propagate = !1,
        anchorX = 'left',
        root,
      }) => {
        const [isParentPresent, safeToRemove] = (0, use_presence.xQ)(propagate),
          presentChildren = (0, react.useMemo)(() => onlyElements(children), [children]),
          presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey),
          isInitialRender = (0, react.useRef)(!0),
          pendingPresentChildren = (0, react.useRef)(presentChildren),
          exitComplete = (0, use_constant.M)(() => new Map()),
          [diffedChildren, setDiffedChildren] = (0, react.useState)(presentChildren),
          [renderedChildren, setRenderedChildren] = (0, react.useState)(presentChildren)
        ;(0, use_isomorphic_effect.E)(() => {
          ;((isInitialRender.current = !1), (pendingPresentChildren.current = presentChildren))
          for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i])
            presentKeys.includes(key)
              ? exitComplete.delete(key)
              : !0 !== exitComplete.get(key) && exitComplete.set(key, !1)
          }
        }, [renderedChildren, presentKeys.length, presentKeys.join('-')])
        const exitingChildren = []
        if (presentChildren !== diffedChildren) {
          let nextChildren = [...presentChildren]
          for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i],
              key = getChildKey(child)
            presentKeys.includes(key) ||
              (nextChildren.splice(i, 0, child), exitingChildren.push(child))
          }
          return (
            'wait' === mode && exitingChildren.length && (nextChildren = exitingChildren),
            setRenderedChildren(onlyElements(nextChildren)),
            setDiffedChildren(presentChildren),
            null
          )
        }
        const { forceRender } = (0, react.useContext)(LayoutGroupContext.L)
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: renderedChildren.map((child) => {
            const key = getChildKey(child),
              isPresent =
                !(propagate && !isParentPresent) &&
                (presentChildren === renderedChildren || presentKeys.includes(key))
            return (0, jsx_runtime.jsx)(
              PresenceChild,
              {
                isPresent,
                initial: !(isInitialRender.current && !initial) && void 0,
                custom,
                presenceAffectsLayout,
                mode,
                root,
                onExitComplete: isPresent
                  ? void 0
                  : () => {
                      if (!exitComplete.has(key)) return
                      exitComplete.set(key, !0)
                      let isEveryExitComplete = !0
                      ;(exitComplete.forEach((isExitComplete) => {
                        isExitComplete || (isEveryExitComplete = !1)
                      }),
                        isEveryExitComplete &&
                          (forceRender?.(),
                          setRenderedChildren(pendingPresentChildren.current),
                          propagate && safeToRemove?.(),
                          onExitComplete && onExitComplete()))
                    },
                anchorX,
                children: child,
              },
              key
            )
          }),
        })
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
    './node_modules/styled-jsx/style.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__('./node_modules/styled-jsx/dist/index/index.js').style
    },
  },
])
