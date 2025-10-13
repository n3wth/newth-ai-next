'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [8745],
  {
    './components/WarpBackground.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          WarpBackground: () => WarpBackground,
          WarpBackgroundLazy: () => WarpBackgroundLazy_WarpBackgroundLazy,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        utils = __webpack_require__('./lib/utils.ts'),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      var proxy = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        dynamic = __webpack_require__('./node_modules/next/dynamic.js')
      const WarpBackgroundDynamic = __webpack_require__.n(dynamic)()(
          () =>
            Promise.resolve()
              .then(
                __webpack_require__.bind(__webpack_require__, './components/WarpBackground.tsx')
              )
              .then((mod) => ({ default: mod.WarpBackground })),
          {
            loadableGenerated: { webpack: () => ['./components/WarpBackground.tsx'] },
            ssr: !1,
            loading: () => (0, jsx_runtime.jsx)(WarpBackgroundFallback, {}),
          }
        ),
        WarpBackgroundFallback = () =>
          (0, jsx_runtime.jsxs)('div', {
            className: 'absolute inset-0 bg-black',
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: 'absolute inset-0 opacity-10',
                style: {
                  background:
                    '\n          linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),\n          linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)\n        ',
                  backgroundSize: '50px 50px',
                },
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'absolute inset-0 flex items-center justify-center',
                children: (0, jsx_runtime.jsx)('div', {
                  className:
                    'w-8 h-8 border-2 border-violet-500/20 border-t-violet-500/40 rounded-full animate-spin',
                }),
              }),
            ],
          }),
        WarpBackgroundLazy_WarpBackgroundLazy = (props) =>
          (0, jsx_runtime.jsx)(react.Suspense, {
            fallback: (0, jsx_runtime.jsx)(WarpBackgroundFallback, {}),
            children: (0, jsx_runtime.jsx)(WarpBackgroundDynamic, { ...props }),
          })
      WarpBackgroundLazy_WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'
      try {
        ;((WarpBackgroundLazy_WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'),
          (WarpBackgroundLazy_WarpBackgroundLazy.__docgenInfo = {
            description: '',
            displayName: 'WarpBackgroundLazy',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/WarpBackgroundLazy.tsx#WarpBackgroundLazy'] = {
              docgenInfo: WarpBackgroundLazy_WarpBackgroundLazy.__docgenInfo,
              name: 'WarpBackgroundLazy',
              path: 'components/WarpBackgroundLazy.tsx#WarpBackgroundLazy',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      const AnimatedShape = react.memo(({ x, y, delay, type, colorSet, reduceMotion }) => {
        const colors = [
            ['#FF006E', '#FB5607', '#FFBE0B'],
            ['#8338EC', '#3A86FF', '#06FFB4'],
            ['#FF4365', '#00D9FF', '#FFF700'],
            ['#C77DFF', '#7209B7', '#560BAD'],
            ['#F72585', '#B5179E', '#7209B7'],
            ['#4CC9F0', '#4361EE', '#3F37C9'],
            ['#F94144', '#F3722C', '#F8961E'],
          ],
          palette = colors[colorSet % colors.length],
          shapeVariants = {
            cube: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: {
                left: `${x}%`,
                top: `${y}%`,
                width: '100px',
                height: '100px',
                transformStyle: 'preserve-3d',
              },
              animate: reduceMotion
                ? { opacity: [0.3, 0.5, 0.3] }
                : {
                    rotateX: [0, 360],
                    rotateY: [0, -360],
                    z: ['-800px', '500px'],
                    scale: [0.2, 3],
                    opacity: [0, 1, 1, 0],
                  },
              transition: reduceMotion
                ? { duration: 4, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 6, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.3, 0.7, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: 'absolute inset-0',
                  style: {
                    background: `linear-gradient(135deg, ${palette[0]}33, ${palette[1]}22)`,
                    border: `2px solid ${palette[0]}66`,
                    boxShadow: `0 0 60px ${palette[0]}44, inset 0 0 30px ${palette[1]}33`,
                  },
                }),
                !reduceMotion &&
                  (0, jsx_runtime.jsx)(proxy.P.div, {
                    className: 'absolute inset-0',
                    style: { background: `${palette[2]}22`, mixBlendMode: 'screen' },
                    animate: { opacity: [0, 1, 0], x: [-2, 2, -2] },
                    transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 2 },
                  }),
              ],
            }),
            pyramid: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%` },
              animate: reduceMotion
                ? { opacity: [0.2, 0.4, 0.2] }
                : {
                    rotateY: [0, 720],
                    z: ['-1000px', '400px'],
                    scale: [0.1, 2.5],
                    opacity: [0, 0.9, 0.9, 0],
                  },
              transition: reduceMotion
                ? { duration: 5, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 7, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.4, 0.8, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: 0,
                    height: 0,
                    borderLeft: '60px solid transparent',
                    borderRight: '60px solid transparent',
                    borderBottom: `100px solid ${palette[1]}44`,
                    filter: `drop-shadow(0 0 40px ${palette[0]}66)`,
                  },
                }),
                (0, jsx_runtime.jsx)(proxy.P.div, {
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: '-60px',
                    width: 0,
                    height: 0,
                    borderLeft: '60px solid transparent',
                    borderRight: '60px solid transparent',
                    borderBottom: `100px solid ${palette[2]}33`,
                    mixBlendMode: 'overlay',
                  },
                  animate: { scaleX: [1, 1.1, 1], opacity: [0, 1, 0] },
                  transition: { duration: 0.2, repeat: 1 / 0, repeatDelay: 1.5 },
                }),
              ],
            }),
            sphere: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%`, width: '80px', height: '80px' },
              animate: reduceMotion
                ? { opacity: [0.2, 0.4, 0.2] }
                : { z: ['-600px', '300px'], scale: [0.3, 2], opacity: [0, 0.8, 0.8, 0] },
              transition: reduceMotion
                ? { duration: 4, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 5, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.3, 0.7, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 30% 30%, ${palette[0]}55, ${palette[1]}33, transparent)`,
                    border: `2px solid ${palette[1]}44`,
                    boxShadow: `0 0 80px ${palette[0]}55, inset 0 0 40px ${palette[2]}33`,
                  },
                }),
                !reduceMotion &&
                  (0, jsx_runtime.jsx)(proxy.P.div, {
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: palette[2],
                      opacity: 0.2,
                      mixBlendMode: 'multiply',
                    },
                    animate: { x: [-3, 3, 0], y: [0, -3, 3] },
                    transition: { duration: 0.15, repeat: 1 / 0, repeatDelay: 3 },
                  }),
              ],
            }),
            helix: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%`, width: '120px', height: '120px' },
              animate: reduceMotion
                ? { opacity: [0.2, 0.4, 0.2] }
                : {
                    rotate: [0, 1080],
                    z: ['-1200px', '200px'],
                    scale: [0.1, 2.5],
                    opacity: [0, 0.7, 0.7, 0],
                  },
              transition: reduceMotion
                ? { duration: 6, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 8, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.35, 0.75, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    background: `conic-gradient(from 0deg at 50% 50%, ${palette[0]}44, ${palette[1]}44, ${palette[2]}44, ${palette[0]}44)`,
                    borderRadius: '50%',
                    filter: 'blur(2px)',
                  },
                }),
                (0, jsx_runtime.jsx)(proxy.P.div, {
                  style: {
                    position: 'absolute',
                    inset: '20%',
                    background: `conic-gradient(from 180deg at 50% 50%, ${palette[2]}66, transparent, ${palette[1]}66)`,
                    borderRadius: '50%',
                  },
                  animate: reduceMotion ? {} : { rotate: [0, -360] },
                  transition: reduceMotion ? {} : { duration: 2, repeat: 1 / 0, ease: 'linear' },
                }),
              ],
            }),
            prism: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%`, width: '90px', height: '90px' },
              animate: reduceMotion
                ? { opacity: [0.2, 0.4, 0.2] }
                : {
                    rotateY: [0, 360],
                    rotateZ: [0, 180],
                    z: ['-700px', '350px'],
                    scale: [0.2, 2.2],
                    opacity: [0, 0.9, 0.9, 0],
                  },
              transition: reduceMotion
                ? { duration: 5, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 6, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.3, 0.7, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${palette[0]}44, ${palette[1]}33, ${palette[2]}44)`,
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: `0 0 60px ${palette[1]}66`,
                  },
                }),
                !reduceMotion &&
                  (0, jsx_runtime.jsx)(proxy.P.div, {
                    style: {
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(45deg, ${palette[2]}55, transparent)`,
                      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                      mixBlendMode: 'screen',
                    },
                    animate: { opacity: [0, 1, 0] },
                    transition: { duration: 0.1, repeat: 1 / 0, repeatDelay: 2.5 },
                  }),
              ],
            }),
            torus: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%`, width: '100px', height: '100px' },
              animate: reduceMotion
                ? { opacity: [0.2, 0.4, 0.2] }
                : {
                    rotateX: [0, 360],
                    rotateY: [0, -720],
                    z: ['-900px', '400px'],
                    scale: [0.2, 2.8],
                    opacity: [0, 0.8, 0.8, 0],
                  },
              transition: reduceMotion
                ? { duration: 6, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 7, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.35, 0.7, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: `20px solid ${palette[1]}44`,
                    boxShadow: `0 0 80px ${palette[0]}66, inset 0 0 40px ${palette[2]}44`,
                  },
                }),
                (0, jsx_runtime.jsx)(proxy.P.div, {
                  style: {
                    position: 'absolute',
                    inset: '30%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${palette[2]}66, transparent)`,
                  },
                  animate: reduceMotion ? {} : { scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] },
                  transition: reduceMotion ? {} : { duration: 2, repeat: 1 / 0, ease: 'easeInOut' },
                }),
              ],
            }),
            grid: (0, jsx_runtime.jsxs)(proxy.P.div, {
              className: 'absolute pointer-events-none',
              style: { left: `${x}%`, top: `${y}%`, width: '150px', height: '150px' },
              animate: reduceMotion
                ? { opacity: [0.2, 0.3, 0.2] }
                : {
                    rotateX: [75, 75],
                    rotateZ: [0, 180],
                    z: ['-1000px', '300px'],
                    scale: [0.1, 3],
                    opacity: [0, 0.6, 0.6, 0],
                  },
              transition: reduceMotion
                ? { duration: 7, repeat: 1 / 0, delay, ease: 'easeInOut' }
                : { duration: 9, repeat: 1 / 0, delay, ease: 'easeOut', times: [0, 0.4, 0.8, 1] },
              children: [
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    backgroundImage: `\n                repeating-linear-gradient(0deg, transparent, transparent 9px, ${palette[0]}44 10px),\n                repeating-linear-gradient(90deg, transparent, transparent 9px, ${palette[1]}44 10px)\n              `,
                  },
                }),
                (0, jsx_runtime.jsx)(proxy.P.div, {
                  style: {
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${palette[2]}88, transparent)`,
                  },
                  animate: reduceMotion ? {} : { y: [0, 150] },
                  transition: reduceMotion ? {} : { duration: 2, repeat: 1 / 0, ease: 'linear' },
                }),
              ],
            }),
          }
        return shapeVariants[type] || shapeVariants.cube
      })
      AnimatedShape.displayName = 'AnimatedShape'
      const seededRandom = (seed) => {
          const x = 1e4 * Math.sin(seed)
          return x - Math.floor(x)
        },
        WarpBackground = react.memo(({ children, className, ...props }) => {
          const prefersReducedMotion = (function useReducedMotion() {
              const [prefersReducedMotion, setPrefersReducedMotion] = (0, react.useState)(!1)
              return (
                (0, react.useEffect)(() => {
                  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
                  setPrefersReducedMotion(mediaQuery.matches)
                  const handleChange = (event) => {
                    setPrefersReducedMotion(event.matches)
                  }
                  return (
                    mediaQuery.addEventListener
                      ? mediaQuery.addEventListener('change', handleChange)
                      : mediaQuery.addListener(handleChange),
                    () => {
                      mediaQuery.removeEventListener
                        ? mediaQuery.removeEventListener('change', handleChange)
                        : mediaQuery.removeListener(handleChange)
                    }
                  )
                }, []),
                prefersReducedMotion
              )
            })(),
            shapes = (0, react.useMemo)(() => {
              const shapeArray = [],
                types = ['cube', 'pyramid', 'sphere', 'helix', 'prism', 'torus', 'grid']
              for (let i = 0; i < 20; i++)
                shapeArray.push({
                  id: i,
                  x: 10 + 80 * seededRandom(2 * i),
                  y: 10 + 80 * seededRandom(3 * i),
                  delay: 8 * seededRandom(5 * i),
                  type: types[Math.floor(seededRandom(7 * i) * types.length)],
                  colorSet: Math.floor(7 * seededRandom(11 * i)),
                })
              return shapeArray
            }, [])
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, utils.cn)('relative overflow-hidden', className),
            ...props,
            children: [
              (0, jsx_runtime.jsx)('div', { className: 'absolute inset-0 bg-black' }),
              (0, jsx_runtime.jsxs)('div', {
                className: 'absolute inset-0 transform-gpu',
                style: { perspective: '500px', perspectiveOrigin: '50% 50%' },
                children: [
                  (0, jsx_runtime.jsx)('div', {
                    className: 'absolute inset-0 opacity-20',
                    style: {
                      background:
                        '\n                linear-gradient(rgba(139,92,246,0.02) 1px, transparent 1px),\n                linear-gradient(90deg, rgba(139,92,246,0.02) 1px, transparent 1px)\n              ',
                      backgroundSize: '50px 50px',
                      transform: 'rotateX(85deg) translateZ(-300px)',
                      transformOrigin: 'center bottom',
                      maskImage:
                        'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 50%, transparent)',
                    },
                  }),
                  shapes.map((shape) =>
                    (0, jsx_runtime.jsx)(
                      AnimatedShape,
                      {
                        x: shape.x,
                        y: shape.y,
                        delay: shape.delay,
                        type: shape.type,
                        colorSet: shape.colorSet,
                        reduceMotion: prefersReducedMotion,
                      },
                      `shape-${shape.id}`
                    )
                  ),
                ],
              }),
              children,
            ],
          })
        })
      WarpBackground.displayName = 'WarpBackground'
      try {
        ;((WarpBackground.displayName = 'WarpBackground'),
          (WarpBackground.__docgenInfo = {
            description: '',
            displayName: 'WarpBackground',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/WarpBackground.tsx#WarpBackground'] = {
              docgenInfo: WarpBackground.__docgenInfo,
              name: 'WarpBackground',
              path: 'components/WarpBackground.tsx#WarpBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((WarpBackgroundLazy.displayName = 'WarpBackgroundLazy'),
          (WarpBackgroundLazy.__docgenInfo = {
            description: '',
            displayName: 'WarpBackgroundLazy',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/WarpBackground.tsx#WarpBackgroundLazy'] = {
              docgenInfo: WarpBackgroundLazy.__docgenInfo,
              name: 'WarpBackgroundLazy',
              path: 'components/WarpBackground.tsx#WarpBackgroundLazy',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
