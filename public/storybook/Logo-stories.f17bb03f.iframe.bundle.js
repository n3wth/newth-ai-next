'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [542],
  {
    './components/Logo.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ColorIntensityComparison: () => ColorIntensityComparison,
          DarkBackground: () => DarkBackground,
          Default: () => Default,
          Monochrome: () => Monochrome,
          Playground: () => Playground,
          SaturationComparison: () => SaturationComparison,
          VividRainbow: () => VividRainbow,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/AnimatedLogo.tsx'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Brand/Logo',
          component: _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
          parameters: {
            layout: 'centered',
            backgrounds: {
              default: 'black',
              values: [
                { name: 'black', value: '#000000' },
                { name: 'dark', value: '#0a0a0a' },
              ],
            },
            docs: {
              description: {
                component: 'The n3wth.AI ASCII art logo with glitch effects and rainbow animations',
              },
            },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { zoom: 3 },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
          tags: ['autodocs'],
          argTypes: {
            enableColorOnHover: {
              control: 'boolean',
              description: 'Enable rainbow colors on hover',
              defaultValue: !0,
            },
            enableColorOnGlitch: {
              control: 'boolean',
              description: 'Enable colors during glitch effects',
              defaultValue: !1,
            },
            baseSaturation: {
              control: { type: 'range', min: 0, max: 100, step: 5 },
              description: 'Base saturation level (0-100)',
              defaultValue: 85,
            },
            colorIntensity: {
              control: { type: 'range', min: 0, max: 1, step: 0.1 },
              description: 'How much color to apply (0-1)',
              defaultValue: 1,
            },
          },
        },
        Default = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !1,
            baseSaturation: 85,
            colorIntensity: 1,
          },
        },
        VividRainbow = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !1,
            baseSaturation: 100,
            colorIntensity: 1,
          },
          parameters: {
            docs: {
              description: {
                story: 'Maximum saturation and intensity for vivid rainbow effects on hover',
              },
            },
          },
        },
        Monochrome = {
          args: {
            enableColorOnHover: !1,
            enableColorOnGlitch: !1,
            baseSaturation: 0,
            colorIntensity: 0,
          },
          parameters: {
            docs: { description: { story: 'Pure white logo with glitch effects but no color' } },
          },
        },
        ColorIntensityComparison = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !1,
            baseSaturation: 85,
            colorIntensity: 1,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: { display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' },
              children: [0, 0.25, 0.5, 0.75, 1].map((intensity) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                        {
                          enableColorOnHover: !0,
                          enableColorOnGlitch: !1,
                          baseSaturation: 85,
                          colorIntensity: intensity,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                        style: { fontSize: '0.75rem', color: '#666' },
                        children: [100 * intensity, '% intensity'],
                      }),
                    ],
                  },
                  intensity
                )
              ),
            }),
        },
        SaturationComparison = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !1,
            baseSaturation: 85,
            colorIntensity: 1,
          },
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              style: { display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' },
              children: [0, 25, 50, 75, 100].map((saturation) =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _AnimatedLogo__WEBPACK_IMPORTED_MODULE_1__.H,
                        {
                          enableColorOnHover: !0,
                          enableColorOnGlitch: !1,
                          baseSaturation: saturation,
                          colorIntensity: 1,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('span', {
                        style: { fontSize: '0.75rem', color: '#666' },
                        children: [saturation, '% saturation'],
                      }),
                    ],
                  },
                  saturation
                )
              ),
            }),
        },
        DarkBackground = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !0,
            baseSaturation: 90,
            colorIntensity: 1,
          },
          parameters: { backgrounds: { default: 'dark' } },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                style: { padding: '2rem', background: '#0a0a0a', borderRadius: '8px' },
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Playground = {
          args: {
            enableColorOnHover: !0,
            enableColorOnGlitch: !1,
            baseSaturation: 85,
            colorIntensity: 1,
          },
          parameters: {
            docs: {
              description: {
                story: 'Use the controls to experiment with different configurations',
              },
            },
          },
        },
        __namedExportsOrder = [
          'Default',
          'VividRainbow',
          'Monochrome',
          'ColorIntensityComparison',
          'SaturationComparison',
          'DarkBackground',
          'Playground',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: false,\n    baseSaturation: 85,\n    colorIntensity: 1\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (VividRainbow.parameters = {
          ...VividRainbow.parameters,
          docs: {
            ...VividRainbow.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: false,\n    baseSaturation: 100,\n    colorIntensity: 1\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Maximum saturation and intensity for vivid rainbow effects on hover'\n      }\n    }\n  }\n}",
              ...VividRainbow.parameters?.docs?.source,
            },
          },
        }),
        (Monochrome.parameters = {
          ...Monochrome.parameters,
          docs: {
            ...Monochrome.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: false,\n    enableColorOnGlitch: false,\n    baseSaturation: 0,\n    colorIntensity: 0\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Pure white logo with glitch effects but no color'\n      }\n    }\n  }\n}",
              ...Monochrome.parameters?.docs?.source,
            },
          },
        }),
        (ColorIntensityComparison.parameters = {
          ...ColorIntensityComparison.parameters,
          docs: {
            ...ColorIntensityComparison.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: false,\n    baseSaturation: 85,\n    colorIntensity: 1\n  },\n  render: () => <div style={{\n    display: 'flex',\n    gap: '2rem',\n    alignItems: 'center',\n    flexWrap: 'wrap'\n  }}>\n      {[0, 0.25, 0.5, 0.75, 1].map(intensity => <div key={intensity} style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '0.5rem'\n    }}>\n          <Logo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={85} colorIntensity={intensity} />\n          <span style={{\n        fontSize: '0.75rem',\n        color: '#666'\n      }}>{intensity * 100}% intensity</span>\n        </div>)}\n    </div>\n}",
              ...ColorIntensityComparison.parameters?.docs?.source,
            },
          },
        }),
        (SaturationComparison.parameters = {
          ...SaturationComparison.parameters,
          docs: {
            ...SaturationComparison.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: false,\n    baseSaturation: 85,\n    colorIntensity: 1\n  },\n  render: () => <div style={{\n    display: 'flex',\n    gap: '2rem',\n    alignItems: 'center',\n    flexWrap: 'wrap'\n  }}>\n      {[0, 25, 50, 75, 100].map(saturation => <div key={saturation} style={{\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      gap: '0.5rem'\n    }}>\n          <Logo enableColorOnHover={true} enableColorOnGlitch={false} baseSaturation={saturation} colorIntensity={1} />\n          <span style={{\n        fontSize: '0.75rem',\n        color: '#666'\n      }}>{saturation}% saturation</span>\n        </div>)}\n    </div>\n}",
              ...SaturationComparison.parameters?.docs?.source,
            },
          },
        }),
        (DarkBackground.parameters = {
          ...DarkBackground.parameters,
          docs: {
            ...DarkBackground.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: true,\n    baseSaturation: 90,\n    colorIntensity: 1\n  },\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  decorators: [Story => <div style={{\n    padding: '2rem',\n    background: '#0a0a0a',\n    borderRadius: '8px'\n  }}>\n        <Story />\n      </div>]\n}",
              ...DarkBackground.parameters?.docs?.source,
            },
          },
        }),
        (Playground.parameters = {
          ...Playground.parameters,
          docs: {
            ...Playground.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    enableColorOnHover: true,\n    enableColorOnGlitch: false,\n    baseSaturation: 85,\n    colorIntensity: 1\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Use the controls to experiment with different configurations'\n      }\n    }\n  }\n}",
              ...Playground.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
