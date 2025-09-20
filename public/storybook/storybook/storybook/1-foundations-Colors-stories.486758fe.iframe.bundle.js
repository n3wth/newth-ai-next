'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [2586],
  {
    './stories/1-foundations/Colors.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Gradients: () => Gradients,
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Foundations/Colors & Palette',
          parameters: {
            layout: 'padded',
            backgrounds: { default: 'dark' },
            docs: { description: { component: 'Color palette used throughout the application' } },
          },
        },
        ColorSwatch = ({ name, value, textColor = 'white' }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className:
                  'w-full h-24 rounded-lg flex items-center justify-center font-mono text-sm border border-gray-800',
                style: { backgroundColor: value, color: textColor },
                children: value,
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                className: 'text-sm text-gray-400',
                children: name,
              }),
            ],
          }),
        Primary = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'grid grid-cols-2 md:grid-cols-4 gap-4 p-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Black',
                  value: '#000000',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'White',
                  value: '#FFFFFF',
                  textColor: 'black',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Violet',
                  value: '#8b5cf6',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Purple',
                  value: '#a855f7',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Blue',
                  value: '#3b82f6',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Green',
                  value: '#10b981',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Red',
                  value: '#ef4444',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorSwatch, {
                  name: 'Orange',
                  value: '#f59e0b',
                }),
              ],
            }),
        },
        Gradients = {
          render: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className: 'space-y-4 p-4',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'h-24 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 border border-white/10',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className: 'text-sm text-gray-400',
                      children: 'Primary Gradient',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'h-24 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border border-white/10',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className: 'text-sm text-gray-400',
                      children: 'Diagonal Gradient',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'h-24 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 border border-white/10',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className: 'text-sm text-gray-400',
                      children: 'Success Gradient',
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                      className:
                        'h-24 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 border border-white/10',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className: 'text-sm text-gray-400',
                      children: 'Warning Gradient',
                    }),
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Primary', 'Gradients']
      ;((Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">\n      <ColorSwatch name="Black" value="#000000" />\n      <ColorSwatch name="White" value="#FFFFFF" textColor="black" />\n      <ColorSwatch name="Violet" value="#8b5cf6" />\n      <ColorSwatch name="Purple" value="#a855f7" />\n      <ColorSwatch name="Blue" value="#3b82f6" />\n      <ColorSwatch name="Green" value="#10b981" />\n      <ColorSwatch name="Red" value="#ef4444" />\n      <ColorSwatch name="Orange" value="#f59e0b" />\n    </div>\n}',
            ...Primary.parameters?.docs?.source,
          },
        },
      }),
        (Gradients.parameters = {
          ...Gradients.parameters,
          docs: {
            ...Gradients.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div className="space-y-4 p-4">\n      <div className="space-y-2">\n        <div className="h-24 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 border border-white/10" />\n        <p className="text-sm text-gray-400">Primary Gradient</p>\n      </div>\n      <div className="space-y-2">\n        <div className="h-24 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border border-white/10" />\n        <p className="text-sm text-gray-400">Diagonal Gradient</p>\n      </div>\n      <div className="space-y-2">\n        <div className="h-24 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 border border-white/10" />\n        <p className="text-sm text-gray-400">Success Gradient</p>\n      </div>\n      <div className="space-y-2">\n        <div className="h-24 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 border border-white/10" />\n        <p className="text-sm text-gray-400">Warning Gradient</p>\n      </div>\n    </div>\n}',
              ...Gradients.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
