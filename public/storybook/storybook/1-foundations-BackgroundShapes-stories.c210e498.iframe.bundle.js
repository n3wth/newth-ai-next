'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [6464],
  {
    './stories/1-foundations/BackgroundShapes.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllShapes: () => AllShapes,
          AnimatedBackground: () => AnimatedBackground,
          AsciiCube: () => AsciiCube,
          AsciiGrid: () => AsciiGrid,
          AsciiPyramid: () => AsciiPyramid,
          DigitalRain: () => DigitalRain,
          GlitchSmoke: () => GlitchSmoke,
          GlitchTrail: () => GlitchTrail,
          WireframeSphere: () => WireframeSphere,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Foundations/Background Shapes',
          parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } },
        },
        ShapeShowcase = ({ className, label }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'relative w-full h-screen bg-black overflow-hidden',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: `${className} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'absolute bottom-8 left-8 text-white/60 font-mono text-sm',
                children: label,
              }),
            ],
          }),
        AsciiCube = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-ascii-cube',
              label: '.shape-ascii-cube - 3D ASCII grid cube',
            }),
        },
        AsciiPyramid = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-ascii-pyramid',
              label: '.shape-ascii-pyramid - 3D pyramid with glitch',
            }),
        },
        GlitchSmoke = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-glitch-smoke',
              label: '.shape-glitch-smoke - Rising smoke with glitch',
            }),
        },
        AsciiGrid = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-ascii-grid',
              label: '.shape-ascii-grid - 3D perspective grid',
            }),
        },
        DigitalRain = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-digital-rain',
              label: '.shape-digital-rain - Matrix-style rain',
            }),
        },
        WireframeSphere = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-wireframe-sphere',
              label: '.shape-wireframe-sphere - Rotating wireframe',
            }),
        },
        GlitchTrail = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShapeShowcase, {
              className: 'shape-glitch-trail',
              label: '.shape-glitch-trail - RGB shadow trail',
            }),
        },
        AllShapes = {
          name: 'All ASCII Glitch Shapes',
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full h-screen bg-black overflow-hidden',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'background-shapes',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-ascii-cube',
                      style: { top: '10%', left: '5%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-glitch-smoke',
                      style: { top: '60%', right: '10%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-ascii-grid',
                      style: { bottom: '20%', left: '30%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-wireframe-sphere',
                      style: { top: '30%', right: '25%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-glitch-trail',
                      style: { bottom: '10%', right: '40%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-digital-rain',
                      style: { top: '45%', left: '15%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-ascii-pyramid',
                      style: { top: '15%', right: '45%' },
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'absolute inset-0 flex items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'text-center',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-6xl font-bold text-white mb-4',
                        children: 'Background Shapes',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-white/60',
                        children: 'Blocky geometric animations',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        AnimatedBackground = {
          name: 'Animated Background Example',
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full h-screen bg-black overflow-hidden',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'background-shapes',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-ascii-cube',
                      style: { top: '-150px', left: '-100px' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-glitch-smoke',
                      style: { bottom: '-50px', right: '-200px' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-wireframe-sphere',
                      style: { top: '40%', left: '70%' },
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className: 'shape-digital-rain',
                      style: { top: '60%', left: '10%' },
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'absolute inset-0 flex items-center justify-center z-10',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'glass-panel p-12 rounded-2xl text-center',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-5xl font-bold text-white mb-4',
                        children: 'Your Content Here',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-white/80 mb-8',
                        children: 'Shapes animate in the background',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
                        className: 'btn-primary',
                        children: 'Get Started',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = [
          'AsciiCube',
          'AsciiPyramid',
          'GlitchSmoke',
          'AsciiGrid',
          'DigitalRain',
          'WireframeSphere',
          'GlitchTrail',
          'AllShapes',
          'AnimatedBackground',
        ]
      ;((AsciiCube.parameters = {
        ...AsciiCube.parameters,
        docs: {
          ...AsciiCube.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <ShapeShowcase className="shape-ascii-cube" label=".shape-ascii-cube - 3D ASCII grid cube" />\n}',
            ...AsciiCube.parameters?.docs?.source,
          },
        },
      }),
        (AsciiPyramid.parameters = {
          ...AsciiPyramid.parameters,
          docs: {
            ...AsciiPyramid.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-ascii-pyramid" label=".shape-ascii-pyramid - 3D pyramid with glitch" />\n}',
              ...AsciiPyramid.parameters?.docs?.source,
            },
          },
        }),
        (GlitchSmoke.parameters = {
          ...GlitchSmoke.parameters,
          docs: {
            ...GlitchSmoke.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-glitch-smoke" label=".shape-glitch-smoke - Rising smoke with glitch" />\n}',
              ...GlitchSmoke.parameters?.docs?.source,
            },
          },
        }),
        (AsciiGrid.parameters = {
          ...AsciiGrid.parameters,
          docs: {
            ...AsciiGrid.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-ascii-grid" label=".shape-ascii-grid - 3D perspective grid" />\n}',
              ...AsciiGrid.parameters?.docs?.source,
            },
          },
        }),
        (DigitalRain.parameters = {
          ...DigitalRain.parameters,
          docs: {
            ...DigitalRain.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-digital-rain" label=".shape-digital-rain - Matrix-style rain" />\n}',
              ...DigitalRain.parameters?.docs?.source,
            },
          },
        }),
        (WireframeSphere.parameters = {
          ...WireframeSphere.parameters,
          docs: {
            ...WireframeSphere.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-wireframe-sphere" label=".shape-wireframe-sphere - Rotating wireframe" />\n}',
              ...WireframeSphere.parameters?.docs?.source,
            },
          },
        }),
        (GlitchTrail.parameters = {
          ...GlitchTrail.parameters,
          docs: {
            ...GlitchTrail.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ShapeShowcase className="shape-glitch-trail" label=".shape-glitch-trail - RGB shadow trail" />\n}',
              ...GlitchTrail.parameters?.docs?.source,
            },
          },
        }),
        (AllShapes.parameters = {
          ...AllShapes.parameters,
          docs: {
            ...AllShapes.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'All ASCII Glitch Shapes',\n  render: () => <div className=\"relative w-full h-screen bg-black overflow-hidden\">\n      <div className=\"background-shapes\">\n        <div className=\"shape-ascii-cube\" style={{\n        top: '10%',\n        left: '5%'\n      }} />\n        <div className=\"shape-glitch-smoke\" style={{\n        top: '60%',\n        right: '10%'\n      }} />\n        <div className=\"shape-ascii-grid\" style={{\n        bottom: '20%',\n        left: '30%'\n      }} />\n        <div className=\"shape-wireframe-sphere\" style={{\n        top: '30%',\n        right: '25%'\n      }} />\n        <div className=\"shape-glitch-trail\" style={{\n        bottom: '10%',\n        right: '40%'\n      }} />\n        <div className=\"shape-digital-rain\" style={{\n        top: '45%',\n        left: '15%'\n      }} />\n        <div className=\"shape-ascii-pyramid\" style={{\n        top: '15%',\n        right: '45%'\n      }} />\n      </div>\n      <div className=\"absolute inset-0 flex items-center justify-center\">\n        <div className=\"text-center\">\n          <h1 className=\"text-6xl font-bold text-white mb-4\">Background Shapes</h1>\n          <p className=\"text-white/60\">Blocky geometric animations</p>\n        </div>\n      </div>\n    </div>\n}",
              ...AllShapes.parameters?.docs?.source,
            },
          },
        }),
        (AnimatedBackground.parameters = {
          ...AnimatedBackground.parameters,
          docs: {
            ...AnimatedBackground.parameters?.docs,
            source: {
              originalSource:
                '{\n  name: \'Animated Background Example\',\n  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">\n      <div className="background-shapes">\n        <div className="shape-ascii-cube" style={{\n        top: \'-150px\',\n        left: \'-100px\'\n      }} />\n        <div className="shape-glitch-smoke" style={{\n        bottom: \'-50px\',\n        right: \'-200px\'\n      }} />\n        <div className="shape-wireframe-sphere" style={{\n        top: \'40%\',\n        left: \'70%\'\n      }} />\n        <div className="shape-digital-rain" style={{\n        top: \'60%\',\n        left: \'10%\'\n      }} />\n      </div>\n      <div className="absolute inset-0 flex items-center justify-center z-10">\n        <div className="glass-panel p-12 rounded-2xl text-center">\n          <h1 className="text-5xl font-bold text-white mb-4">Your Content Here</h1>\n          <p className="text-white/80 mb-8">Shapes animate in the background</p>\n          <button className="btn-primary">Get Started</button>\n        </div>\n      </div>\n    </div>\n}',
              ...AnimatedBackground.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
