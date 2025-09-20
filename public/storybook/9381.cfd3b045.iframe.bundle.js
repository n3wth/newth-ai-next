'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [9381],
  {
    './components/AnimatedLogo.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { H: () => AnimatedLogo })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/styled-jsx/style.js'
        ),
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      function AnimatedLogo({
        enableColorOnHover = !0,
        enableColorOnGlitch = !1,
        baseSaturation = 85,
        colorIntensity = 1,
      } = {}) {
        const [frame, setFrame] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
          [glitchMode, setGlitchMode] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)('normal'),
          [, setCharStates] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
          [isHovered, setIsHovered] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),
          [invertedCharIndex, setInvertedCharIndex] = (0,
          react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1),
          [glitchIntensity, setGlitchIntensity] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(
            0
          ),
          lastGlitchTime = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(Date.now()),
          glitchDuration = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0),
          glitchStartTime = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0),
          glitchEndTime = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(Date.now()),
          targetIntensity = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0),
          asciiLogo = [
            '█▄ █ █▀▀ █ █ █ ▀█▀ █ █',
            '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█',
            '█  █ █▄▄  ▀ ▀   █  █ █',
          ],
          asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°'],
          blockChars = ['█', '▓', '▒', '░', '▄', '▀', '▌', '▐', '■', '□', '▪', '▫'],
          asciiSets = {
            blocks: ['█', '▓', '▒', '░'],
            lines: ['─', '│', '┌', '┐', '└', '┘', '├', '┤', '┬', '┴', '┼'],
            dots: ['•', '◦', '◉', '○', '◌', '◍', '◎', '●'],
            angles: ['◢', '◣', '◤', '◥', '◸', '◹', '◺', '◿'],
            shades: ['░', '▒', '▓', '█'],
            bars: [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
          }
        ;((0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
          const states = [...asciiLogo.join('').split(''), ...asciiDotAI.join('').split('')].map(
            (char) => ({ char, visible: !0, variant: 0 })
          )
          setCharStates(states)
        }, [asciiLogo, asciiDotAI]),
          (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
            const interval = setInterval(() => {
              const elapsed = Date.now() - glitchStartTime.current
              if ('normal' !== glitchMode && glitchDuration.current > 0) {
                const progress = elapsed / glitchDuration.current
                if (progress < 0.2) {
                  setGlitchIntensity((progress / 0.2) ** 2 * targetIntensity.current)
                } else if (progress < 0.8) setGlitchIntensity(targetIntensity.current)
                else if (progress < 1) {
                  setGlitchIntensity((1 - ((progress - 0.8) / 0.2) ** 2) * targetIntensity.current)
                } else setGlitchIntensity(0)
              } else
                setGlitchIntensity(
                  isHovered ? (prev) => Math.min(1, prev + 0.1) : (prev) => Math.max(0, prev - 0.1)
                )
            }, 100)
            return () => clearInterval(interval)
          }, [glitchMode, isHovered]),
          (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
            const startTime = Date.now(),
              modes = [
                'typewriter',
                'blocks',
                'ascii-rain',
                'corruption',
                'scan-lines',
                'pixel-sort',
                'single-invert',
              ]
            let lastModeIndex = -1
            const interval = setInterval(() => {
              const now = Date.now(),
                timeSinceStart = now - startTime,
                timeSinceLastGlitch = now - lastGlitchTime.current
              if (timeSinceStart < 5e3) return
              if (isHovered)
                return (
                  setGlitchMode('normal'),
                  setInvertedCharIndex(-1),
                  void (targetIntensity.current = 0)
                )
              if (
                now - glitchEndTime.current > 3e3 &&
                timeSinceLastGlitch > 5e3 &&
                Math.random() < 0.03
              ) {
                const availableModes = modes.filter((_, index) => index !== lastModeIndex),
                  randomMode = availableModes[Math.floor(Math.random() * availableModes.length)]
                switch (
                  ((lastModeIndex = modes.indexOf(randomMode)),
                  setGlitchMode(randomMode),
                  (lastGlitchTime.current = now),
                  (glitchStartTime.current = now),
                  randomMode)
                ) {
                  case 'typewriter':
                  case 'blocks':
                    ;((targetIntensity.current = 0.8 + 0.2 * Math.random()),
                      (glitchDuration.current = 1200 + 600 * Math.random()))
                    break
                  case 'corruption':
                  case 'pixel-sort':
                    ;((targetIntensity.current = 0.3 + 0.4 * Math.random()),
                      (glitchDuration.current = 600 + 600 * Math.random()))
                    break
                  case 'single-invert':
                    const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length,
                      randomChar = Math.floor(Math.random() * totalChars)
                    ;(setInvertedCharIndex(randomChar),
                      (targetIntensity.current = 1),
                      (glitchDuration.current = 1500 + 1500 * Math.random()))
                    break
                  default:
                    ;((targetIntensity.current = 0.5 + 0.5 * Math.random()),
                      (glitchDuration.current = 900 + 600 * Math.random()))
                }
                setTimeout(() => {
                  ;(setGlitchMode('normal'),
                    setInvertedCharIndex(-1),
                    (targetIntensity.current = 0),
                    (glitchEndTime.current = Date.now()))
                }, glitchDuration.current)
              }
            }, 500)
            return () => clearInterval(interval)
          }, [isHovered, asciiLogo, asciiDotAI]),
          (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
            const interval = setInterval(() => {
              setFrame((prev) => prev + 1)
            }, 200)
            return () => clearInterval(interval)
          }, []))
        const transformChar = (char, index, lineIndex, isAISuffix = !1) => {
          if (' ' === char) return char
          if (glitchIntensity < 0.01) return char
          const adjustedIndex = isAISuffix ? index + 24 : index,
            adjustedLineIndex = isAISuffix ? lineIndex + 3 : lineIndex
          switch (glitchMode) {
            case 'typewriter':
              const totalChars = asciiLogo.join('').length + asciiDotAI.join('').length,
                typewriterProgress = (2 * frame * glitchIntensity) % (totalChars + 20),
                distanceFromCursor = Math.abs(
                  adjustedIndex + 25 * adjustedLineIndex - typewriterProgress
                )
              return adjustedIndex + 25 * adjustedLineIndex > typewriterProgress
                ? Math.random() < glitchIntensity
                  ? '░'
                  : char
                : distanceFromCursor < 3
                  ? ' ' === char
                    ? char
                    : Math.random() < glitchIntensity
                      ? '▓'
                      : char
                  : char
            case 'blocks':
              if (Math.random() < glitchIntensity) {
                const wave = 0.5 * Math.sin(0.05 * frame + 0.3 * adjustedIndex) + 0.5,
                  blockIndex = Math.floor(wave * blockChars.length * glitchIntensity)
                return ' ' !== char && '°' !== char ? blockChars[blockIndex] : char
              }
              return char
            case 'ascii-rain':
              const fallPosition = (frame * (0.1 * glitchIntensity) + 2 * adjustedIndex) % 20
              if (Math.random() < 0.3 * glitchIntensity) {
                if (fallPosition < asciiSets.bars.length)
                  return asciiSets.bars[Math.floor(fallPosition)]
                if (fallPosition < asciiSets.bars.length + 2) return '░'
              }
              return char
            case 'corruption':
              if (Math.random() < 0.15 * glitchIntensity) {
                const corruptSets = [...asciiSets.dots, ...asciiSets.angles, '▲', '▼', '◀', '▶']
                return corruptSets[Math.floor(Math.random() * corruptSets.length)]
              }
              return char
            case 'scan-lines':
              const scanPosition = (frame / 2) % 10,
                scanInt =
                  Math.exp(-Math.abs(3 * adjustedLineIndex - scanPosition)) * glitchIntensity
              return scanInt > 0.3
                ? ' ' === char
                  ? char
                  : '▬'
                : scanInt > 0.1
                  ? ' ' === char
                    ? char
                    : '═'
                  : char
            case 'pixel-sort':
              const sortWave = 0.5 * Math.sin(0.1 * frame + adjustedLineIndex) + 0.5,
                sortThreshold = 0.5 * Math.sin(0.05 * frame) + 0.5
              if (
                Math.random() < sortThreshold * glitchIntensity * 0.3 &&
                adjustedIndex > 20 * sortWave
              ) {
                const shadeIndex = Math.floor(
                  (0.2 * frame + adjustedIndex) % asciiSets.shades.length
                )
                return asciiSets.shades[shadeIndex]
              }
              return char
            default:
              return char
          }
        }
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
          onMouseEnter: () => setIsHovered(!0),
          onMouseLeave: () => setIsHovered(!1),
          className: 'jsx-8b149244b4742c05 flex items-center',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('pre', {
              className:
                'jsx-8b149244b4742c05 font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'jsx-8b149244b4742c05 relative',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'jsx-8b149244b4742c05 relative',
                    children: asciiLogo.map((line, lineIndex) => {
                      let charOffset = 0
                      for (let i = 0; i < lineIndex; i++) charOffset += asciiLogo[i].length
                      return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                        {
                          className: 'text-white',
                          style: {
                            filter:
                              'scan-lines' === glitchMode && lineIndex === (frame / 2) % 3
                                ? 'brightness(1.5) contrast(1.2)'
                                : 'corruption' === glitchMode
                                  ? `hue-rotate(${30 * Math.sin(0.05 * frame)}deg)`
                                  : 'none',
                          },
                          children: line.split('').map((char, charIndex) => {
                            const isInverted =
                                'single-invert' === glitchMode &&
                                charOffset + charIndex === invertedCharIndex,
                              displayChar = transformChar(char, charIndex, lineIndex),
                              isGlitching = displayChar !== char,
                              waveOffset = 30 * Math.sin(0.03 * frame + 2 * lineIndex),
                              hue = (((15 * charIndex - 2 * frame + waveOffset) % 360) + 360) % 360,
                              showColor =
                                (enableColorOnHover && isHovered) ||
                                (enableColorOnGlitch &&
                                  'normal' !== glitchMode &&
                                  glitchIntensity > 0),
                              dynamicSaturation = baseSaturation + 10 * Math.sin(0.05 * frame),
                              appliedSaturation = showColor
                                ? dynamicSaturation * colorIntensity
                                : 0,
                              lightness = 55 + 10 * Math.sin(0.07 * frame + 0.2 * charIndex),
                              baseColor = showColor
                                ? `hsl(${hue}, ${appliedSaturation}%, ${lightness}%)`
                                : 'currentColor'
                            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.span,
                              {
                                className: 'inline-block',
                                animate: {
                                  y:
                                    'ascii-rain' === glitchMode && Math.random() < 0.1
                                      ? [0, 2, 0]
                                      : 'blocks' === glitchMode
                                        ? [0, Math.random() < 0.05 ? -1 : 0, 0]
                                        : 0,
                                  scale:
                                    'typewriter' === glitchMode && '░' === displayChar
                                      ? [1, 0.8, 1]
                                      : 1,
                                },
                                transition: { duration: 0.1, ease: 'easeInOut' },
                                style: {
                                  opacity: ' ' === displayChar ? 0 : 1,
                                  color: isInverted
                                    ? `rgba(0, 0, 0, ${glitchIntensity})`
                                    : isGlitching && 'typewriter' !== glitchMode
                                      ? `rgba(150, 150, 150, ${glitchIntensity})`
                                      : baseColor,
                                  backgroundColor: isInverted
                                    ? `rgba(255, 255, 255, ${glitchIntensity})`
                                    : 'transparent',
                                  padding: isInverted ? '0 1px' : '0',
                                  textShadow: 'none',
                                  filter:
                                    '█' === char || '▓' === char
                                      ? 'brightness(1.2)'
                                      : 'brightness(1)',
                                  transition: 'none',
                                },
                                children: displayChar,
                              },
                              charIndex
                            )
                          }),
                        },
                        lineIndex
                      )
                    }),
                  }),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'jsx-8b149244b4742c05 text-gray-400 text-[8px] leading-[8px] -mt-0.5',
                  children: asciiDotAI.map((line, lineIndex) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,
                      {
                        animate: {
                          opacity:
                            'typewriter' === glitchMode ? [(2 * frame) % 100 > 80 ? 1 : 0.3] : 1,
                        },
                        transition: { duration: 0.2 },
                        children: line.split('').map((char, charIndex) => {
                          const globalCharIndexAI =
                              asciiLogo.join('').length + 8 * lineIndex + charIndex,
                            isInverted =
                              'single-invert' === glitchMode &&
                              globalCharIndexAI === invertedCharIndex,
                            displayChar = transformChar(char, charIndex, lineIndex, !0),
                            isGlitching = displayChar !== char,
                            continuedIndex = 24 + charIndex,
                            waveOffset = 30 * Math.sin(0.03 * frame + 2 * lineIndex),
                            hue =
                              (((15 * continuedIndex - 2 * frame + waveOffset) % 360) + 360) % 360,
                            showColor =
                              (enableColorOnHover && isHovered) ||
                              (enableColorOnGlitch &&
                                'normal' !== glitchMode &&
                                glitchIntensity > 0),
                            dynamicSaturation = baseSaturation + 10 * Math.sin(0.05 * frame),
                            appliedSaturation = showColor ? dynamicSaturation * colorIntensity : 0,
                            lightness = 55 + 10 * Math.sin(0.07 * frame + 0.2 * charIndex),
                            baseColor = showColor
                              ? `hsl(${hue}, ${appliedSaturation}%, ${lightness}%)`
                              : 'currentColor'
                          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'span',
                            {
                              style: {
                                opacity: ' ' === displayChar ? 0 : 1,
                                color: isInverted
                                  ? `rgba(0, 0, 0, ${glitchIntensity})`
                                  : isGlitching && 'typewriter' !== glitchMode
                                    ? `rgba(150, 150, 150, ${glitchIntensity})`
                                    : baseColor,
                                backgroundColor: isInverted
                                  ? `rgba(255, 255, 255, ${glitchIntensity})`
                                  : 'transparent',
                                padding: isInverted ? '0 1px' : '0',
                                transition: 'none',
                              },
                              className: 'jsx-8b149244b4742c05',
                              children: displayChar,
                            },
                            charIndex
                          )
                        }),
                      },
                      lineIndex
                    )
                  ),
                }),
              ],
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),
              {
                id: '8b149244b4742c05',
                children:
                  '@keyframes gradientShift{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes dissolve{0%{opacity:1;filter:blur(0px)}50%{opacity:.5;filter:blur(3px)}100%{opacity:1;filter:blur(0px)}}',
              }
            ),
          ],
        })
      }
      try {
        ;((AnimatedLogo.displayName = 'AnimatedLogo'),
          (AnimatedLogo.__docgenInfo = {
            description:
              'Renders an animated ASCII art logo with dynamic glitch effects and interactive coloring.\nThe component cycles through various visual distortions at random intervals and reveals\na vibrant rainbow animation on hover.',
            displayName: 'AnimatedLogo',
            props: {
              enableColorOnHover: {
                defaultValue: { value: 'true' },
                description: 'If true, the logo displays a rainbow color effect on mouse hover.',
                name: 'enableColorOnHover',
                required: !1,
                type: { name: 'boolean' },
              },
              enableColorOnGlitch: {
                defaultValue: { value: 'false' },
                description: 'If true, the logo shows colors during random glitch animations.',
                name: 'enableColorOnGlitch',
                required: !1,
                type: { name: 'boolean' },
              },
              baseSaturation: {
                defaultValue: { value: '85' },
                description: 'The base saturation level (0-100) for the color effects.',
                name: 'baseSaturation',
                required: !1,
                type: { name: 'number' },
              },
              colorIntensity: {
                defaultValue: { value: '1' },
                description: 'A multiplier (0-1) to control the intensity of the applied colors.',
                name: 'colorIntensity',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/AnimatedLogo.tsx#AnimatedLogo'] = {
              docgenInfo: AnimatedLogo.__docgenInfo,
              name: 'AnimatedLogo',
              path: 'components/AnimatedLogo.tsx#AnimatedLogo',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
