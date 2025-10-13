'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [4757],
  {
    './stories/1-foundations/Spacing.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Gap: () => Gap,
          Margin: () => Margin,
          Padding: () => Padding,
          Scale: () => Scale,
          SpaceUtilities: () => SpaceUtilities,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Foundations/Spacing',
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Spacing system based on 8px grid' } },
          },
          tags: ['autodocs', 'foundations'],
        },
        Scale = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen p-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'max-w-4xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-2xl font-bold text-white mb-8',
                    children: 'Spacing Scale',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className: 'space-y-4',
                    children: [
                      { name: '0', value: '0px', className: 'w-0' },
                      { name: '0.5', value: '2px', className: 'w-0.5' },
                      { name: '1', value: '4px', className: 'w-1' },
                      { name: '1.5', value: '6px', className: 'w-1.5' },
                      { name: '2', value: '8px', className: 'w-2' },
                      { name: '2.5', value: '10px', className: 'w-2.5' },
                      { name: '3', value: '12px', className: 'w-3' },
                      { name: '3.5', value: '14px', className: 'w-3.5' },
                      { name: '4', value: '16px', className: 'w-4' },
                      { name: '5', value: '20px', className: 'w-5' },
                      { name: '6', value: '24px', className: 'w-6' },
                      { name: '7', value: '28px', className: 'w-7' },
                      { name: '8', value: '32px', className: 'w-8' },
                      { name: '9', value: '36px', className: 'w-9' },
                      { name: '10', value: '40px', className: 'w-10' },
                      { name: '11', value: '44px', className: 'w-11' },
                      { name: '12', value: '48px', className: 'w-12' },
                      { name: '14', value: '56px', className: 'w-14' },
                      { name: '16', value: '64px', className: 'w-16' },
                      { name: '20', value: '80px', className: 'w-20' },
                      { name: '24', value: '96px', className: 'w-24' },
                      { name: '28', value: '112px', className: 'w-28' },
                      { name: '32', value: '128px', className: 'w-32' },
                      { name: '36', value: '144px', className: 'w-36' },
                      { name: '40', value: '160px', className: 'w-40' },
                      { name: '44', value: '176px', className: 'w-44' },
                      { name: '48', value: '192px', className: 'w-48' },
                      { name: '52', value: '208px', className: 'w-52' },
                      { name: '56', value: '224px', className: 'w-56' },
                      { name: '60', value: '240px', className: 'w-60' },
                      { name: '64', value: '256px', className: 'w-64' },
                      { name: '72', value: '288px', className: 'w-72' },
                      { name: '80', value: '320px', className: 'w-80' },
                      { name: '96', value: '384px', className: 'w-96' },
                    ].map(({ name, value, className }) =>
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'flex items-center gap-4',
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                              className: 'text-gray-400 text-sm w-12 text-right font-mono',
                              children: name,
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                              className: `${className} h-8 bg-violet-500 rounded`,
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                              className: 'text-gray-500 text-xs font-mono',
                              children: value,
                            }),
                          ],
                        },
                        name
                      )
                    ),
                  }),
                ],
              }),
            }),
        },
        Padding = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen p-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'max-w-5xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-2xl font-bold text-white mb-8',
                    children: 'Padding Examples',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'grid md:grid-cols-2 gap-6',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Uniform Padding',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'space-y-4',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'p-2 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'p-2 (8px)',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'p-4 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'p-4 (16px)',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'p-6 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'p-6 (24px)',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'p-8 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'p-8 (32px)',
                                    }),
                                  }
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Directional Padding',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'space-y-4',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'pt-8 pb-2 px-4 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'pt-8 pb-2 px-4',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'py-2 px-8 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'py-2 px-8',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'pl-12 pr-4 py-4 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'pl-12 pr-4 py-4',
                                    }),
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-gray-900 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className: 'p-4 pr-16 bg-violet-500/20 rounded m-px',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                      className: 'bg-gray-700 rounded text-xs text-center py-2',
                                      children: 'p-4 pr-16',
                                    }),
                                  }
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        Margin = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen p-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'max-w-5xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-2xl font-bold text-white mb-8',
                    children: 'Margin Examples',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'grid md:grid-cols-2 gap-6',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Uniform Margin',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              'div',
                              {
                                className: 'space-y-2',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'm-2 bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'm-2 (8px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'm-4 bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'm-4 (16px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'm-6 bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'm-6 (24px)',
                                  }),
                                ],
                              }
                            ),
                          }),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Negative Margin',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-8 rounded overflow-hidden',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-violet-500/20 p-4 rounded',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className:
                                      '-mx-4 bg-violet-500 rounded p-3 text-xs text-center',
                                    children: '-mx-4',
                                  }
                                ),
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                className: 'bg-violet-500/20 p-4 rounded mt-4',
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'div',
                                  {
                                    className:
                                      '-mt-8 bg-violet-500 rounded p-3 text-xs text-center',
                                    children: '-mt-8',
                                  }
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        Gap = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen p-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'max-w-5xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-2xl font-bold text-white mb-8',
                    children: 'Gap in Flexbox & Grid',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-8',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Flexbox Gap',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'space-y-4',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-sm text-gray-500 mb-2',
                                    children: 'gap-2 (8px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'flex gap-2',
                                    children: [1, 2, 3, 4].map((i) =>
                                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'bg-violet-500 rounded p-4 text-xs text-center',
                                          children: 'Item',
                                        },
                                        i
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-sm text-gray-500 mb-2',
                                    children: 'gap-4 (16px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'flex gap-4',
                                    children: [1, 2, 3, 4].map((i) =>
                                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'bg-violet-500 rounded p-4 text-xs text-center',
                                          children: 'Item',
                                        },
                                        i
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-sm text-gray-500 mb-2',
                                    children: 'gap-8 (32px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'flex gap-8',
                                    children: [1, 2, 3, 4].map((i) =>
                                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'bg-violet-500 rounded p-4 text-xs text-center',
                                          children: 'Item',
                                        },
                                        i
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Grid Gap',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'space-y-4',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-sm text-gray-500 mb-2',
                                    children: 'gap-4 (16px)',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'grid grid-cols-4 gap-4',
                                    children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
                                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'bg-violet-500 rounded p-4 text-xs text-center',
                                          children: 'Cell',
                                        },
                                        i
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-sm text-gray-500 mb-2',
                                    children: 'gap-x-2 gap-y-6',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'grid grid-cols-4 gap-x-2 gap-y-6',
                                    children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
                                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        'div',
                                        {
                                          className:
                                            'bg-violet-500 rounded p-4 text-xs text-center',
                                          children: 'Cell',
                                        },
                                        i
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        SpaceUtilities = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'bg-black min-h-screen p-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                className: 'max-w-5xl',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h2', {
                    className: 'text-2xl font-bold text-white mb-8',
                    children: 'Space Between/Around',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'grid md:grid-cols-2 gap-6',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Vertical Spacing (space-y)',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                className: 'space-y-4',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 1',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 2',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 3',
                                  }),
                                ],
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                className: 'text-xs text-gray-500 mt-4',
                                children: 'space-y-4',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                            className: 'text-lg font-semibold text-gray-400 mb-4',
                            children: 'Horizontal Spacing (space-x)',
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                className: 'flex space-x-4',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 1',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 2',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'bg-violet-500 rounded p-3 text-xs text-center',
                                    children: 'Item 3',
                                  }),
                                ],
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                className: 'text-xs text-gray-500 mt-4',
                                children: 'space-x-4',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'mt-8',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h3', {
                        className: 'text-lg font-semibold text-gray-400 mb-4',
                        children: 'Common Patterns',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                        className: 'grid md:grid-cols-3 gap-4',
                        children: [
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h4', {
                                className: 'text-sm font-medium text-white mb-3',
                                children: 'Card Spacing',
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                className: 'p-6 bg-gray-800 rounded',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h5', {
                                    className: 'text-white font-semibold mb-2',
                                    children: 'Title',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                                    className: 'text-gray-400 text-sm',
                                    children: 'Content with p-6',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h4', {
                                className: 'text-sm font-medium text-white mb-3',
                                children: 'Button Group',
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                className: 'flex gap-3',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'button',
                                    {
                                      className: 'px-4 py-2 bg-violet-500 rounded text-sm',
                                      children: 'Save',
                                    }
                                  ),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    'button',
                                    {
                                      className: 'px-4 py-2 bg-gray-700 rounded text-sm',
                                      children: 'Cancel',
                                    }
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                            className: 'bg-gray-900 p-4 rounded',
                            children: [
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h4', {
                                className: 'text-sm font-medium text-white mb-3',
                                children: 'Section Spacing',
                              }),
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                                className: 'space-y-8',
                                children: [
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'h-8 bg-gray-700 rounded',
                                  }),
                                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                                    className: 'h-8 bg-gray-700 rounded',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        },
        __namedExportsOrder = ['Scale', 'Padding', 'Margin', 'Gap', 'SpaceUtilities']
      ;((Scale.parameters = {
        ...Scale.parameters,
        docs: {
          ...Scale.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <div className=\"bg-black min-h-screen p-8\">\n      <div className=\"max-w-4xl\">\n        <h2 className=\"text-2xl font-bold text-white mb-8\">Spacing Scale</h2>\n        <div className=\"space-y-4\">\n          {[{\n          name: '0',\n          value: '0px',\n          className: 'w-0'\n        }, {\n          name: '0.5',\n          value: '2px',\n          className: 'w-0.5'\n        }, {\n          name: '1',\n          value: '4px',\n          className: 'w-1'\n        }, {\n          name: '1.5',\n          value: '6px',\n          className: 'w-1.5'\n        }, {\n          name: '2',\n          value: '8px',\n          className: 'w-2'\n        }, {\n          name: '2.5',\n          value: '10px',\n          className: 'w-2.5'\n        }, {\n          name: '3',\n          value: '12px',\n          className: 'w-3'\n        }, {\n          name: '3.5',\n          value: '14px',\n          className: 'w-3.5'\n        }, {\n          name: '4',\n          value: '16px',\n          className: 'w-4'\n        }, {\n          name: '5',\n          value: '20px',\n          className: 'w-5'\n        }, {\n          name: '6',\n          value: '24px',\n          className: 'w-6'\n        }, {\n          name: '7',\n          value: '28px',\n          className: 'w-7'\n        }, {\n          name: '8',\n          value: '32px',\n          className: 'w-8'\n        }, {\n          name: '9',\n          value: '36px',\n          className: 'w-9'\n        }, {\n          name: '10',\n          value: '40px',\n          className: 'w-10'\n        }, {\n          name: '11',\n          value: '44px',\n          className: 'w-11'\n        }, {\n          name: '12',\n          value: '48px',\n          className: 'w-12'\n        }, {\n          name: '14',\n          value: '56px',\n          className: 'w-14'\n        }, {\n          name: '16',\n          value: '64px',\n          className: 'w-16'\n        }, {\n          name: '20',\n          value: '80px',\n          className: 'w-20'\n        }, {\n          name: '24',\n          value: '96px',\n          className: 'w-24'\n        }, {\n          name: '28',\n          value: '112px',\n          className: 'w-28'\n        }, {\n          name: '32',\n          value: '128px',\n          className: 'w-32'\n        }, {\n          name: '36',\n          value: '144px',\n          className: 'w-36'\n        }, {\n          name: '40',\n          value: '160px',\n          className: 'w-40'\n        }, {\n          name: '44',\n          value: '176px',\n          className: 'w-44'\n        }, {\n          name: '48',\n          value: '192px',\n          className: 'w-48'\n        }, {\n          name: '52',\n          value: '208px',\n          className: 'w-52'\n        }, {\n          name: '56',\n          value: '224px',\n          className: 'w-56'\n        }, {\n          name: '60',\n          value: '240px',\n          className: 'w-60'\n        }, {\n          name: '64',\n          value: '256px',\n          className: 'w-64'\n        }, {\n          name: '72',\n          value: '288px',\n          className: 'w-72'\n        }, {\n          name: '80',\n          value: '320px',\n          className: 'w-80'\n        }, {\n          name: '96',\n          value: '384px',\n          className: 'w-96'\n        }].map(({\n          name,\n          value,\n          className\n        }) => <div key={name} className=\"flex items-center gap-4\">\n              <span className=\"text-gray-400 text-sm w-12 text-right font-mono\">{name}</span>\n              <div className={`${className} h-8 bg-violet-500 rounded`} />\n              <span className=\"text-gray-500 text-xs font-mono\">{value}</span>\n            </div>)}\n        </div>\n      </div>\n    </div>\n}",
            ...Scale.parameters?.docs?.source,
          },
        },
      }),
        (Padding.parameters = {
          ...Padding.parameters,
          docs: {
            ...Padding.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen p-8">\n      <div className="max-w-5xl">\n        <h2 className="text-2xl font-bold text-white mb-8">Padding Examples</h2>\n        <div className="grid md:grid-cols-2 gap-6">\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Uniform Padding</h3>\n            <div className="space-y-4">\n              <div className="bg-gray-900 rounded">\n                <div className="p-2 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-2 (8px)</div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="p-4 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-4 (16px)</div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="p-6 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-6 (24px)</div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="p-8 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-8 (32px)</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Directional Padding</h3>\n            <div className="space-y-4">\n              <div className="bg-gray-900 rounded">\n                <div className="pt-8 pb-2 px-4 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">pt-8 pb-2 px-4</div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="py-2 px-8 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">py-2 px-8</div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="pl-12 pr-4 py-4 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">\n                    pl-12 pr-4 py-4\n                  </div>\n                </div>\n              </div>\n              <div className="bg-gray-900 rounded">\n                <div className="p-4 pr-16 bg-violet-500/20 rounded m-px">\n                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-4 pr-16</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n}',
              ...Padding.parameters?.docs?.source,
            },
          },
        }),
        (Margin.parameters = {
          ...Margin.parameters,
          docs: {
            ...Margin.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen p-8">\n      <div className="max-w-5xl">\n        <h2 className="text-2xl font-bold text-white mb-8">Margin Examples</h2>\n        <div className="grid md:grid-cols-2 gap-6">\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Uniform Margin</h3>\n            <div className="bg-gray-900 p-4 rounded">\n              <div className="space-y-2">\n                <div className="m-2 bg-violet-500 rounded p-3 text-xs text-center">m-2 (8px)</div>\n                <div className="m-4 bg-violet-500 rounded p-3 text-xs text-center">m-4 (16px)</div>\n                <div className="m-6 bg-violet-500 rounded p-3 text-xs text-center">m-6 (24px)</div>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Negative Margin</h3>\n            <div className="bg-gray-900 p-8 rounded overflow-hidden">\n              <div className="bg-violet-500/20 p-4 rounded">\n                <div className="-mx-4 bg-violet-500 rounded p-3 text-xs text-center">-mx-4</div>\n              </div>\n              <div className="bg-violet-500/20 p-4 rounded mt-4">\n                <div className="-mt-8 bg-violet-500 rounded p-3 text-xs text-center">-mt-8</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n}',
              ...Margin.parameters?.docs?.source,
            },
          },
        }),
        (Gap.parameters = {
          ...Gap.parameters,
          docs: {
            ...Gap.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen p-8">\n      <div className="max-w-5xl">\n        <h2 className="text-2xl font-bold text-white mb-8">Gap in Flexbox & Grid</h2>\n\n        <div className="space-y-8">\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Flexbox Gap</h3>\n            <div className="space-y-4">\n              <div>\n                <p className="text-sm text-gray-500 mb-2">gap-2 (8px)</p>\n                <div className="flex gap-2">\n                  {[1, 2, 3, 4].map(i => <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">\n                      Item\n                    </div>)}\n                </div>\n              </div>\n              <div>\n                <p className="text-sm text-gray-500 mb-2">gap-4 (16px)</p>\n                <div className="flex gap-4">\n                  {[1, 2, 3, 4].map(i => <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">\n                      Item\n                    </div>)}\n                </div>\n              </div>\n              <div>\n                <p className="text-sm text-gray-500 mb-2">gap-8 (32px)</p>\n                <div className="flex gap-8">\n                  {[1, 2, 3, 4].map(i => <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">\n                      Item\n                    </div>)}\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Grid Gap</h3>\n            <div className="space-y-4">\n              <div>\n                <p className="text-sm text-gray-500 mb-2">gap-4 (16px)</p>\n                <div className="grid grid-cols-4 gap-4">\n                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">\n                      Cell\n                    </div>)}\n                </div>\n              </div>\n              <div>\n                <p className="text-sm text-gray-500 mb-2">gap-x-2 gap-y-6</p>\n                <div className="grid grid-cols-4 gap-x-2 gap-y-6">\n                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">\n                      Cell\n                    </div>)}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n}',
              ...Gap.parameters?.docs?.source,
            },
          },
        }),
        (SpaceUtilities.parameters = {
          ...SpaceUtilities.parameters,
          docs: {
            ...SpaceUtilities.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="bg-black min-h-screen p-8">\n      <div className="max-w-5xl">\n        <h2 className="text-2xl font-bold text-white mb-8">Space Between/Around</h2>\n\n        <div className="grid md:grid-cols-2 gap-6">\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">Vertical Spacing (space-y)</h3>\n            <div className="bg-gray-900 p-4 rounded">\n              <div className="space-y-4">\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 1</div>\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 2</div>\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 3</div>\n              </div>\n              <p className="text-xs text-gray-500 mt-4">space-y-4</p>\n            </div>\n          </div>\n\n          <div>\n            <h3 className="text-lg font-semibold text-gray-400 mb-4">\n              Horizontal Spacing (space-x)\n            </h3>\n            <div className="bg-gray-900 p-4 rounded">\n              <div className="flex space-x-4">\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 1</div>\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 2</div>\n                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 3</div>\n              </div>\n              <p className="text-xs text-gray-500 mt-4">space-x-4</p>\n            </div>\n          </div>\n        </div>\n\n        <div className="mt-8">\n          <h3 className="text-lg font-semibold text-gray-400 mb-4">Common Patterns</h3>\n          <div className="grid md:grid-cols-3 gap-4">\n            <div className="bg-gray-900 p-4 rounded">\n              <h4 className="text-sm font-medium text-white mb-3">Card Spacing</h4>\n              <div className="p-6 bg-gray-800 rounded">\n                <h5 className="text-white font-semibold mb-2">Title</h5>\n                <p className="text-gray-400 text-sm">Content with p-6</p>\n              </div>\n            </div>\n            <div className="bg-gray-900 p-4 rounded">\n              <h4 className="text-sm font-medium text-white mb-3">Button Group</h4>\n              <div className="flex gap-3">\n                <button className="px-4 py-2 bg-violet-500 rounded text-sm">Save</button>\n                <button className="px-4 py-2 bg-gray-700 rounded text-sm">Cancel</button>\n              </div>\n            </div>\n            <div className="bg-gray-900 p-4 rounded">\n              <h4 className="text-sm font-medium text-white mb-3">Section Spacing</h4>\n              <div className="space-y-8">\n                <div className="h-8 bg-gray-700 rounded"></div>\n                <div className="h-8 bg-gray-700 rounded"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n}',
              ...SpaceUtilities.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
