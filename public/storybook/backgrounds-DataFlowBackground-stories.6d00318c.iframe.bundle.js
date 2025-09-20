'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [235],
  {
    './components/backgrounds/DataFlowBackground.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithContent: () => WithContent,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./components/backgrounds/DataFlowBackground.tsx')
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Effects/Backgrounds/Data Flow',
          component: _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
          parameters: {
            layout: 'fullscreen',
            docs: { description: { component: 'Animated data flow visualization with particles' } },
          },
        },
        Default = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                    className: 'text-5xl font-bold text-white',
                    children: 'Data Flow',
                  }),
                }),
              ],
            }),
        },
        WithContent = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'relative w-full min-h-[400px] h-screen',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_backgrounds_DataFlowBackground__WEBPACK_IMPORTED_MODULE_1__.v,
                  { className: 'absolute inset-0' }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'relative z-10 flex h-full items-center justify-center text-center',
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'space-y-4',
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('h1', {
                        className: 'text-6xl font-bold text-cyan-400',
                        children: 'Real-time Data',
                      }),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                        className: 'text-xl text-cyan-300',
                        children: 'Visualizing information streams',
                      }),
                    ],
                  }),
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Default', 'WithContent']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <DataFlowBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center">\n        <h1 className="text-5xl font-bold text-white">Data Flow</h1>\n      </div>\n    </div>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithContent.parameters = {
          ...WithContent.parameters,
          docs: {
            ...WithContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="relative w-full min-h-[400px] h-screen">\n      <DataFlowBackground className="absolute inset-0" />\n      <div className="relative z-10 flex h-full items-center justify-center text-center">\n        <div className="space-y-4">\n          <h1 className="text-6xl font-bold text-cyan-400">Real-time Data</h1>\n          <p className="text-xl text-cyan-300">Visualizing information streams</p>\n        </div>\n      </div>\n    </div>\n}',
              ...WithContent.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((DataFlowBackground.displayName = 'DataFlowBackground'),
          (DataFlowBackground.__docgenInfo = {
            description: '',
            displayName: 'DataFlowBackground',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/backgrounds/DataFlowBackground.stories.tsx#DataFlowBackground'
            ] = {
              docgenInfo: DataFlowBackground.__docgenInfo,
              name: 'DataFlowBackground',
              path: 'components/backgrounds/DataFlowBackground.stories.tsx#DataFlowBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
