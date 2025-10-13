'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [5489],
  {
    './stories/1-foundations/Typography.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BodyText: () => BodyText,
          Gradients: () => Gradients,
          Headings: () => Headings,
          Monospace: () => Monospace,
          TextStyles: () => TextStyles,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Foundations/Typography',
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Typography system and text styles' } },
          },
        },
        Headings = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'space-y-8 p-8',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                      className: 'text-6xl font-bold text-white',
                      children: 'Heading 1',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                      className: 'text-5xl font-bold text-white',
                      children: 'Heading 2',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                      className: 'text-4xl font-bold text-white',
                      children: 'Heading 3',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h4', {
                      className: 'text-3xl font-semibold text-white',
                      children: 'Heading 4',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h5', {
                      className: 'text-2xl font-semibold text-white',
                      children: 'Heading 5',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h6', {
                      className: 'text-xl font-semibold text-white',
                      children: 'Heading 6',
                    }),
                  ],
                }),
              }),
            }),
        },
        Gradients = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'space-y-6 p-8',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className:
                      'text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent',
                    children: 'Violet Gradient',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className:
                      'text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent',
                    children: 'Blue Gradient',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className:
                      'text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent',
                    children: 'Green Gradient',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className:
                      'text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent',
                    children: 'Pink Gradient',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className:
                      'text-5xl font-bold bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent',
                    children: 'Multi-Color Gradient',
                  }),
                ],
              }),
            }),
        },
        BodyText = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'space-y-6 p-8 max-w-3xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-sm font-semibold text-gray-400 mb-2',
                        children: 'Large',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-gray-300 leading-relaxed',
                        children:
                          'This is large body text used for important introductions and hero content. It provides excellent readability while maintaining visual hierarchy.',
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-sm font-semibold text-gray-400 mb-2',
                        children: 'Regular',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-base text-gray-300 leading-relaxed',
                        children:
                          'Regular body text is the foundation of content presentation. It balances readability with information density, making it perfect for articles, descriptions, and general content areas.',
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-sm font-semibold text-gray-400 mb-2',
                        children: 'Small',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-sm text-gray-400 leading-relaxed',
                        children:
                          'Small text is used for supporting information, captions, and metadata. It provides additional context without competing with primary content.',
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-sm font-semibold text-gray-400 mb-2',
                        children: 'Extra Small',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xs text-gray-500 leading-relaxed',
                        children:
                          'Extra small text is reserved for labels, timestamps, and tertiary information that needs to be present but not prominent.',
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        Monospace = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'space-y-6 p-8',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-2',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-lg font-semibold text-white mb-4',
                        children: 'Terminal Text',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-green-400',
                        children: '$ npm install @newth/design-system',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-gray-400',
                        children: '+ @newth/design-system@1.0.0',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-blue-400',
                        children: '✓ Installation complete',
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'p-4 bg-gray-900 rounded-lg',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('pre', {
                      className: 'font-mono text-sm text-gray-300',
                      children:
                        "const config = {\n  theme: 'cyberpunk',\n  animations: true,\n  performance: 'optimized'\n}",
                    }),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-1',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-xs text-gray-500',
                        children: 'SHA: a1b2c3d4e5f6g7h8i9j0',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-xs text-gray-500',
                        children: 'Build: 2024.1.0-stable',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'font-mono text-xs text-gray-500',
                        children: 'Status: READY',
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        TextStyles = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'space-y-8 p-8',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'grid grid-cols-2 gap-8',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                          className: 'text-sm font-semibold text-gray-400 mb-4',
                          children: 'Font Weights',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                          className: 'space-y-2',
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-thin text-white',
                              children: 'Thin (100)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-light text-white',
                              children: 'Light (300)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-normal text-white',
                              children: 'Regular (400)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-medium text-white',
                              children: 'Medium (500)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-semibold text-white',
                              children: 'Semibold (600)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-bold text-white',
                              children: 'Bold (700)',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg font-black text-white',
                              children: 'Black (900)',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                          className: 'text-sm font-semibold text-gray-400 mb-4',
                          children: 'Text Colors',
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                          className: 'space-y-2',
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-white',
                              children: 'Primary White',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-gray-300',
                              children: 'Light Gray',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-gray-400',
                              children: 'Medium Gray',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-gray-500',
                              children: 'Dark Gray',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-violet-400',
                              children: 'Accent Violet',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-blue-400',
                              children: 'Accent Blue',
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                              className: 'text-lg text-green-400',
                              children: 'Accent Green',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
        },
        __namedExportsOrder = ['Headings', 'Gradients', 'BodyText', 'Monospace', 'TextStyles']
      ;((Headings.parameters = {
        ...Headings.parameters,
        docs: {
          ...Headings.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="bg-black min-h-screen">\n      <div className="space-y-8 p-8">\n        <div className="space-y-4">\n          <h1 className="text-6xl font-bold text-white">Heading 1</h1>\n          <h2 className="text-5xl font-bold text-white">Heading 2</h2>\n          <h3 className="text-4xl font-bold text-white">Heading 3</h3>\n          <h4 className="text-3xl font-semibold text-white">Heading 4</h4>\n          <h5 className="text-2xl font-semibold text-white">Heading 5</h5>\n          <h6 className="text-xl font-semibold text-white">Heading 6</h6>\n        </div>\n      </div>\n    </div>\n}',
            ...Headings.parameters?.docs?.source,
          },
        },
      }),
        (Gradients.parameters = {
          ...Gradients.parameters,
          docs: {
            ...Gradients.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen">\n      <div className="space-y-6 p-8">\n        <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">\n          Violet Gradient\n        </h2>\n        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">\n          Blue Gradient\n        </h2>\n        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">\n          Green Gradient\n        </h2>\n        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">\n          Pink Gradient\n        </h2>\n        <h2 className="text-5xl font-bold bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">\n          Multi-Color Gradient\n        </h2>\n      </div>\n    </div>\n}',
              ...Gradients.parameters?.docs?.source,
            },
          },
        }),
        (BodyText.parameters = {
          ...BodyText.parameters,
          docs: {
            ...BodyText.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen">\n      <div className="space-y-6 p-8 max-w-3xl">\n        <div>\n          <h3 className="text-sm font-semibold text-gray-400 mb-2">Large</h3>\n          <p className="text-xl text-gray-300 leading-relaxed">\n            This is large body text used for important introductions and hero content. It provides\n            excellent readability while maintaining visual hierarchy.\n          </p>\n        </div>\n\n        <div>\n          <h3 className="text-sm font-semibold text-gray-400 mb-2">Regular</h3>\n          <p className="text-base text-gray-300 leading-relaxed">\n            Regular body text is the foundation of content presentation. It balances readability\n            with information density, making it perfect for articles, descriptions, and general\n            content areas.\n          </p>\n        </div>\n\n        <div>\n          <h3 className="text-sm font-semibold text-gray-400 mb-2">Small</h3>\n          <p className="text-sm text-gray-400 leading-relaxed">\n            Small text is used for supporting information, captions, and metadata. It provides\n            additional context without competing with primary content.\n          </p>\n        </div>\n\n        <div>\n          <h3 className="text-sm font-semibold text-gray-400 mb-2">Extra Small</h3>\n          <p className="text-xs text-gray-500 leading-relaxed">\n            Extra small text is reserved for labels, timestamps, and tertiary information that needs\n            to be present but not prominent.\n          </p>\n        </div>\n      </div>\n    </div>\n}',
              ...BodyText.parameters?.docs?.source,
            },
          },
        }),
        (Monospace.parameters = {
          ...Monospace.parameters,
          docs: {
            ...Monospace.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen">\n      <div className="space-y-6 p-8">\n        <div className="space-y-2">\n          <h3 className="text-lg font-semibold text-white mb-4">Terminal Text</h3>\n          <p className="font-mono text-green-400">$ npm install @newth/design-system</p>\n          <p className="font-mono text-gray-400">+ @newth/design-system@1.0.0</p>\n          <p className="font-mono text-blue-400">✓ Installation complete</p>\n        </div>\n\n        <div className="p-4 bg-gray-900 rounded-lg">\n          <pre className="font-mono text-sm text-gray-300">\n            {`const config = {\n  theme: \'cyberpunk\',\n  animations: true,\n  performance: \'optimized\'\n}`}\n          </pre>\n        </div>\n\n        <div className="space-y-1">\n          <p className="font-mono text-xs text-gray-500">SHA: a1b2c3d4e5f6g7h8i9j0</p>\n          <p className="font-mono text-xs text-gray-500">Build: 2024.1.0-stable</p>\n          <p className="font-mono text-xs text-gray-500">Status: READY</p>\n        </div>\n      </div>\n    </div>\n}',
              ...Monospace.parameters?.docs?.source,
            },
          },
        }),
        (TextStyles.parameters = {
          ...TextStyles.parameters,
          docs: {
            ...TextStyles.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen">\n      <div className="space-y-8 p-8">\n        <div className="grid grid-cols-2 gap-8">\n          <div>\n            <h3 className="text-sm font-semibold text-gray-400 mb-4">Font Weights</h3>\n            <div className="space-y-2">\n              <p className="text-lg font-thin text-white">Thin (100)</p>\n              <p className="text-lg font-light text-white">Light (300)</p>\n              <p className="text-lg font-normal text-white">Regular (400)</p>\n              <p className="text-lg font-medium text-white">Medium (500)</p>\n              <p className="text-lg font-semibold text-white">Semibold (600)</p>\n              <p className="text-lg font-bold text-white">Bold (700)</p>\n              <p className="text-lg font-black text-white">Black (900)</p>\n            </div>\n          </div>\n\n          <div>\n            <h3 className="text-sm font-semibold text-gray-400 mb-4">Text Colors</h3>\n            <div className="space-y-2">\n              <p className="text-lg text-white">Primary White</p>\n              <p className="text-lg text-gray-300">Light Gray</p>\n              <p className="text-lg text-gray-400">Medium Gray</p>\n              <p className="text-lg text-gray-500">Dark Gray</p>\n              <p className="text-lg text-violet-400">Accent Violet</p>\n              <p className="text-lg text-blue-400">Accent Blue</p>\n              <p className="text-lg text-green-400">Accent Green</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n}',
              ...TextStyles.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
