;(() => {
  'use strict'
  var deferred,
    leafPrototypes,
    getProto,
    inProgress,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId]
    if (void 0 !== cachedModule) return cachedModule.exports
    var module = (__webpack_module_cache__[moduleId] = { id: moduleId, loaded: !1, exports: {} })
    return (
      __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ),
      (module.loaded = !0),
      module.exports
    )
  }
  ;((__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.amdO = {}),
    (deferred = []),
    (__webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (!chunkIds) {
        var notFulfilled = 1 / 0
        for (i = 0; i < deferred.length; i++) {
          for (
            var [chunkIds, fn, priority] = deferred[i], fulfilled = !0, j = 0;
            j < chunkIds.length;
            j++
          )
            (!1 & priority || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
              ? chunkIds.splice(j--, 1)
              : ((fulfilled = !1), priority < notFulfilled && (notFulfilled = priority))
          if (fulfilled) {
            deferred.splice(i--, 1)
            var r = fn()
            void 0 !== r && (result = r)
          }
        }
        return result
      }
      priority = priority || 0
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
        deferred[i] = deferred[i - 1]
      deferred[i] = [chunkIds, fn, priority]
    }),
    (__webpack_require__.n = (module) => {
      var getter = module && module.__esModule ? () => module.default : () => module
      return (__webpack_require__.d(getter, { a: getter }), getter)
    }),
    (getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value
      if ('object' == typeof value && value) {
        if (4 & mode && value.__esModule) return value
        if (16 & mode && 'function' == typeof value.then) return value
      }
      var ns = Object.create(null)
      __webpack_require__.r(ns)
      var def = {}
      leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)]
      for (
        var current = 2 & mode && value;
        ('object' == typeof current || 'function' == typeof current) &&
        !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => value[key]))
      return ((def.default = () => value), __webpack_require__.d(ns, def), ns)
    }),
    (__webpack_require__.d = (exports, definition) => {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, { enumerable: !0, get: definition[key] })
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (chunkId) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (promises, key) => (__webpack_require__.f[key](chunkId, promises), promises),
          []
        )
      )),
    (__webpack_require__.u = (chunkId) =>
      (({
        64: 'LogoVariants-stories',
        69: 'backgrounds-WarpBackground-stories',
        79: 'backgrounds-ParticleFieldBackground-stories',
        88: '8-examples-HomePage-stories',
        91: '4-animations-Meteors-stories',
        134: 'ui-button-SimpleAnimatedButton-stories',
        135: '8-examples-DemoPages-stories',
        145: '5-sections-ProjectGrid-stories',
        150: 'backgrounds-WaveformBackground-stories',
        152: 'backgrounds-NeuralNetworkBackground-stories',
        165: 'Components-mdx',
        187: '6-layouts-Footer-stories',
        235: 'backgrounds-DataFlowBackground-stories',
        240: '6-layouts-Navigation-stories',
        291: 'backgrounds-OrbitingAtomsBackground-stories',
        350: '7-cards-ProjectCard-stories',
        377: 'Foundations-mdx',
        419: '5-sections-HeroSection-stories',
        464: '1-foundations-BackgroundShapes-stories',
        475: '7-cards-TerminalCard-stories',
        483: 'ui-button-TerminalButton-stories',
        489: '1-foundations-Typography-stories',
        542: 'Logo-stories',
        555: 'Welcome-mdx',
        566: 'backgrounds-CodeRainBackground-stories',
        586: '1-foundations-Colors-stories',
        626: 'GettingStarted-mdx',
        687: 'ui-button-Button-stories',
        724: 'LogoGlitchAnimations-stories',
        757: '1-foundations-Spacing-stories',
        771: '5-sections-ContactSection-stories',
        964: 'backgrounds-GlitchBackground-stories',
      })[chunkId] || chunkId) +
      '.' +
      {
        64: 'a3a469ab',
        69: '8c09e5b8',
        79: '60ba5b8c',
        80: 'c5f8fc2a',
        88: 'e173b829',
        91: 'e2377b53',
        106: '2b7744a5',
        134: '2ed18543',
        135: '351a7bec',
        145: '85a2355a',
        150: '56320182',
        152: '2b367d9b',
        165: '696e8aa4',
        187: '2b6c8822',
        235: '6d00318c',
        237: '94a17b4c',
        240: '28bdb552',
        291: '0a3ef10c',
        294: '3d012009',
        330: '34eb7558',
        350: 'a52e6e18',
        357: '77e87a39',
        377: 'ffe7a4e1',
        381: '3e69369e',
        419: '28984e6a',
        464: '6a3c8155',
        475: 'e4d77f0f',
        483: 'a2511488',
        489: 'b6c0da5c',
        542: '77781322',
        555: '00150251',
        566: '1f59a403',
        586: '2a4d33dc',
        609: 'bb7ef528',
        626: '7108c1ed',
        646: '66f65a30',
        676: '637b5eb8',
        681: 'd4b3798d',
        687: '9c477c31',
        724: 'db1dfb38',
        735: 'cbd93f7b',
        757: '07c35201',
        762: '4f81d412',
        771: '675a41a7',
        964: '12b9798f',
      }[chunkId] +
      '.iframe.bundle.js'),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)),
    (inProgress = {}),
    (__webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) inProgress[url].push(done)
      else {
        var script, needAttach
        if (void 0 !== key)
          for (
            var scripts = document.getElementsByTagName('script'), i = 0;
            i < scripts.length;
            i++
          ) {
            var s = scripts[i]
            if (
              s.getAttribute('src') == url ||
              s.getAttribute('data-webpack') == 'newth-ai-next:' + key
            ) {
              script = s
              break
            }
          }
        ;(script ||
          ((needAttach = !0),
          ((script = document.createElement('script')).charset = 'utf-8'),
          (script.timeout = 120),
          __webpack_require__.nc && script.setAttribute('nonce', __webpack_require__.nc),
          script.setAttribute('data-webpack', 'newth-ai-next:' + key),
          (script.src = url)),
          (inProgress[url] = [done]))
        var onScriptComplete = (prev, event) => {
            ;((script.onerror = script.onload = null), clearTimeout(timeout))
            var doneFns = inProgress[url]
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns && doneFns.forEach((fn) => fn(event)),
              prev)
            )
              return prev(event)
          },
          timeout = setTimeout(
            onScriptComplete.bind(null, void 0, { type: 'timeout', target: script }),
            12e4
          )
        ;((script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script))
      }
    }),
    (__webpack_require__.r = (exports) => {
      ;('undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 }))
    }),
    (__webpack_require__.nmd = (module) => (
      (module.paths = []),
      module.children || (module.children = []),
      module
    )),
    (__webpack_require__.p = ''),
    (() => {
      var installedChunks = { 354: 0 }
      ;((__webpack_require__.f.j = (chunkId, promises) => {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
          ? installedChunks[chunkId]
          : void 0
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2])
          else if (354 != chunkId) {
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] = [resolve, reject])
            )
            promises.push((installedChunkData[2] = promise))
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error()
            __webpack_require__.l(
              url,
              (event) => {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) &&
                    (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType = event && ('load' === event.type ? 'missing' : event.type),
                    realSrc = event && event.target && event.target.src
                  ;((error.message =
                    'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')'),
                    (error.name = 'ChunkLoadError'),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error))
                }
              },
              'chunk-' + chunkId,
              chunkId
            )
          } else installedChunks[chunkId] = 0
      }),
        (__webpack_require__.O.j = (chunkId) => 0 === installedChunks[chunkId]))
      var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var moduleId,
            chunkId,
            [chunkIds, moreModules, runtime] = data,
            i = 0
          if (chunkIds.some((id) => 0 !== installedChunks[id])) {
            for (moduleId in moreModules)
              __webpack_require__.o(moreModules, moduleId) &&
                (__webpack_require__.m[moduleId] = moreModules[moduleId])
            if (runtime) var result = runtime(__webpack_require__)
          }
          for (
            parentChunkLoadingFunction && parentChunkLoadingFunction(data);
            i < chunkIds.length;
            i++
          )
            ((chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                installedChunks[chunkId][0](),
              (installedChunks[chunkId] = 0))
          return __webpack_require__.O(result)
        },
        chunkLoadingGlobal = (self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || [])
      ;(chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
          null,
          chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
        )))
    })(),
    (__webpack_require__.nc = void 0))
})()
