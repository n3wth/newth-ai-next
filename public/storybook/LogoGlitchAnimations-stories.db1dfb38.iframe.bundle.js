'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [724],
  {
    './components/LogoGlitchAnimations.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllGlitchTypes: () => AllGlitchTypes,
          EffectComparison: () => EffectComparison,
          GlitchMonochrome: () => GlitchMonochrome,
          GlitchWithColors: () => GlitchWithColors,
          LiveRandomGlitches: () => LiveRandomGlitches,
          MaximumChaos: () => MaximumChaos,
          SubtleGlitch: () => SubtleGlitch,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/AnimatedLogo.tsx'
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
      const GlitchDemo = ({ mode, description }) => {
          const [key, setKey] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(0)
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
              const interval = setInterval(() => {
                setKey((prev) => prev + 1)
              }, 3e3)
              return () => clearInterval(interval)
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '2rem',
                border: '1px solid #333',
                borderRadius: '8px',
                background: '#0a0a0a',
                minWidth: '300px',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                  {
                    enableColorOnHover: !0,
                    enableColorOnGlitch: !0,
                    baseSaturation: 85,
                    colorIntensity: 1,
                  },
                  key
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  style: { textAlign: 'center' },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      style: { color: '#fff', fontWeight: 'bold', marginBottom: '0.25rem' },
                      children: mode,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      style: { color: '#888', fontSize: '0.875rem' },
                      children: description,
                    }),
                  ],
                }),
              ],
            })
          )
        },
        __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Effects/Logo Glitch Animations',
          component: _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
          parameters: {
            layout: 'padded',
            docs: {
              description: {
                component:
                  'All the glitch animation types that randomly occur on the logo. These happen automatically every few seconds.',
              },
            },
            backgrounds: { default: 'dark' },
          },
          tags: ['autodocs'],
        },
        LiveRandomGlitches = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !0,
            baseSaturation: 85,
            colorIntensity: 1,
          },
          parameters: {
            docs: {
              description: {
                story:
                  'Live logo with random glitch effects occurring every 3-5 seconds. Hover to see rainbow effect.',
              },
            },
          },
        },
        AllGlitchTypes = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
                padding: '2rem',
                background: '#000',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Typewriter',
                  description: 'Progressive character reveal with scanning effect',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Blocks',
                  description: 'Morphing between different ASCII block characters',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'ASCII Rain',
                  description: 'Matrix-style falling characters',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Corruption',
                  description: 'Random character corruption with special symbols',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Scan Lines',
                  description: 'CRT monitor-style horizontal scan effect',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Pixel Sort',
                  description: 'Data-moshing effect with sorted pixels',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlitchDemo, {
                  mode: 'Single Invert',
                  description: 'Random single character color inversion',
                }),
              ],
            }),
          parameters: {
            docs: {
              description: {
                story:
                  'Gallery showing all 7 glitch animation types. Each logo remounts every 3 seconds to demonstrate the effect.',
              },
            },
          },
        },
        GlitchWithColors = {
          args: {
            enableColorOnHover: !1,
            enableColorOnGlitch: !0,
            baseSaturation: 90,
            colorIntensity: 1,
          },
          parameters: {
            docs: {
              description: { story: 'Logo with colors only during glitch effects (not on hover)' },
            },
          },
        },
        GlitchMonochrome = {
          args: {
            enableColorOnHover: !1,
            enableColorOnGlitch: !1,
            baseSaturation: 0,
            colorIntensity: 0,
          },
          parameters: {
            docs: { description: { story: 'Pure monochrome glitch effects without any color' } },
          },
        },
        SubtleGlitch = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !0,
            baseSaturation: 50,
            colorIntensity: 0.3,
          },
          parameters: {
            docs: { description: { story: 'Subtle glitch effects with reduced color intensity' } },
          },
        },
        MaximumChaos = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !0,
            baseSaturation: 100,
            colorIntensity: 1,
          },
          parameters: {
            docs: {
              description: {
                story:
                  'Maximum visual chaos with full saturation and intensity on both hover and glitch',
              },
            },
          },
        },
        EffectComparison = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                padding: '2rem',
                background: '#000',
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                      {
                        enableColorOnHover: !0,
                        enableColorOnGlitch: !1,
                        baseSaturation: 85,
                        colorIntensity: 1,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      style: { color: '#888' },
                      children: 'Hover colors only',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                      {
                        enableColorOnHover: !1,
                        enableColorOnGlitch: !0,
                        baseSaturation: 85,
                        colorIntensity: 1,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      style: { color: '#888' },
                      children: 'Glitch colors only',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                      {
                        enableColorOnHover: !0,
                        enableColorOnGlitch: !0,
                        baseSaturation: 85,
                        colorIntensity: 1,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      style: { color: '#888' },
                      children: 'Both effects',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                      {
                        enableColorOnHover: !1,
                        enableColorOnGlitch: !1,
                        baseSaturation: 0,
                        colorIntensity: 0,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                      style: { color: '#888' },
                      children: 'No colors',
                    }),
                  ],
                }),
              ],
            }),
          parameters: {
            docs: {
              description: { story: 'Side-by-side comparison of different effect combinations' },
            },
          },
        },
        __namedExportsOrder = [
          'LiveRandomGlitches',
          'AllGlitchTypes',
          'GlitchWithColors',
          'GlitchMonochrome',
          'SubtleGlitch',
          'MaximumChaos',
          'EffectComparison',
        ]
      ;((LiveRandomGlitches.parameters = {
        ...LiveRandomGlitches.parameters,
        docs: {
          ...LiveRandomGlitches.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: true,\n    baseSaturation: 85,\n    colorIntensity: 1\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Live logo with random glitch effects occurring every 3-5 seconds. Hover to see rainbow effect.'\n      }\n    }\n  }\n}",
            ...LiveRandomGlitches.parameters?.docs?.source,
          },
        },
      }),
        (AllGlitchTypes.parameters = {
          ...AllGlitchTypes.parameters,
          docs: {
            ...AllGlitchTypes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    display: \'grid\',\n    gridTemplateColumns: \'repeat(auto-fit, minmax(320px, 1fr))\',\n    gap: \'1.5rem\',\n    padding: \'2rem\',\n    background: \'#000\'\n  }}>\n      <GlitchDemo mode="Typewriter" description="Progressive character reveal with scanning effect" />\n      <GlitchDemo mode="Blocks" description="Morphing between different ASCII block characters" />\n      <GlitchDemo mode="ASCII Rain" description="Matrix-style falling characters" />\n      <GlitchDemo mode="Corruption" description="Random character corruption with special symbols" />\n      <GlitchDemo mode="Scan Lines" description="CRT monitor-style horizontal scan effect" />\n      <GlitchDemo mode="Pixel Sort" description="Data-moshing effect with sorted pixels" />\n      <GlitchDemo mode="Single Invert" description="Random single character color inversion" />\n    </div>,\n  parameters: {\n    docs: {\n      description: {\n        story: \'Gallery showing all 7 glitch animation types. Each logo remounts every 3 seconds to demonstrate the effect.\'\n      }\n    }\n  }\n}',
              ...AllGlitchTypes.parameters?.docs?.source,
            },
          },
        }),
        (GlitchWithColors.parameters = {
          ...GlitchWithColors.parameters,
          docs: {
            ...GlitchWithColors.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: false,\n    enableColorOnGlitch: true,\n    baseSaturation: 90,\n    colorIntensity: 1\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Logo with colors only during glitch effects (not on hover)'\n      }\n    }\n  }\n}",
              ...GlitchWithColors.parameters?.docs?.source,
            },
          },
        }),
        (GlitchMonochrome.parameters = {
          ...GlitchMonochrome.parameters,
          docs: {
            ...GlitchMonochrome.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: false,\n    enableColorOnGlitch: false,\n    baseSaturation: 0,\n    colorIntensity: 0\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Pure monochrome glitch effects without any color'\n      }\n    }\n  }\n}",
              ...GlitchMonochrome.parameters?.docs?.source,
            },
          },
        }),
        (SubtleGlitch.parameters = {
          ...SubtleGlitch.parameters,
          docs: {
            ...SubtleGlitch.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: true,\n    baseSaturation: 50,\n    colorIntensity: 0.3\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Subtle glitch effects with reduced color intensity'\n      }\n    }\n  }\n}",
              ...SubtleGlitch.parameters?.docs?.source,
            },
          },
        }),
        (MaximumChaos.parameters = {
          ...MaximumChaos.parameters,
          docs: {
            ...MaximumChaos.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: true,\n    baseSaturation: 100,\n    colorIntensity: 1\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Maximum visual chaos with full saturation and intensity on both hover and glitch'\n      }\n    }\n  }\n}",
              ...MaximumChaos.parameters?.docs?.source,
            },
          },
        }),
        (EffectComparison.parameters = {
          ...EffectComparison.parameters,
          docs: {
            ...EffectComparison.parameters?.docs,
            source: {
              originalSource:
                "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(2, 1fr)',\n    gap: '2rem',\n    padding: '2rem',\n    background: '#000'\n  }}>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '1rem'\n    }}>\n        <AnimatedLogo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={85} colorIntensity={1} />\n        <span style={{\n        color: '#888'\n      }}>Hover colors only</span>\n      </div>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '1rem'\n    }}>\n        <AnimatedLogo enableColorOnHover={false} enableColorOnGlitch={true} baseSaturation={85} colorIntensity={1} />\n        <span style={{\n        color: '#888'\n      }}>Glitch colors only</span>\n      </div>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '1rem'\n    }}>\n        <AnimatedLogo enableColorOnHover={true} enableColorOnGlitch={true} baseSaturation={85} colorIntensity={1} />\n        <span style={{\n        color: '#888'\n      }}>Both effects</span>\n      </div>\n      <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '1rem'\n    }}>\n        <AnimatedLogo enableColorOnHover={false} enableColorOnGlitch={false} baseSaturation={0} colorIntensity={0} />\n        <span style={{\n        color: '#888'\n      }}>No colors</span>\n      </div>\n    </div>,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Side-by-side comparison of different effect combinations'\n      }\n    }\n  }\n}",
              ...EffectComparison.parameters?.docs?.source,
            },
          },
        }))
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
            (STORYBOOK_REACT_CLASSES['components/LogoGlitchAnimations.stories.tsx#AnimatedLogo'] = {
              docgenInfo: AnimatedLogo.__docgenInfo,
              name: 'AnimatedLogo',
              path: 'components/LogoGlitchAnimations.stories.tsx#AnimatedLogo',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
