import { j as e } from './iframe-D02P5oxD.js'
import './preload-helper-PPVm8Dsz.js'
const i = {
    title: 'Foundations/Colors & Palette',
    parameters: {
      layout: 'padded',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Color palette used throughout the application' } },
    },
  },
  a = ({ name: d, value: t, textColor: o = 'white' }) =>
    e.jsxs('div', {
      className: 'space-y-2',
      children: [
        e.jsx('div', {
          className:
            'w-full h-24 rounded-lg flex items-center justify-center font-mono text-sm border border-gray-800',
          style: { backgroundColor: t, color: o },
          children: t,
        }),
        e.jsx('p', { className: 'text-sm text-gray-400', children: d }),
      ],
    }),
  r = {
    render: () =>
      e.jsxs('div', {
        className: 'grid grid-cols-2 md:grid-cols-4 gap-4 p-4',
        children: [
          e.jsx(a, { name: 'Black', value: '#000000' }),
          e.jsx(a, { name: 'White', value: '#FFFFFF', textColor: 'black' }),
          e.jsx(a, { name: 'Violet', value: '#8b5cf6' }),
          e.jsx(a, { name: 'Purple', value: '#a855f7' }),
          e.jsx(a, { name: 'Blue', value: '#3b82f6' }),
          e.jsx(a, { name: 'Green', value: '#10b981' }),
          e.jsx(a, { name: 'Red', value: '#ef4444' }),
          e.jsx(a, { name: 'Orange', value: '#f59e0b' }),
        ],
      }),
  },
  s = {
    render: () =>
      e.jsxs('div', {
        className: 'space-y-4 p-4',
        children: [
          e.jsxs('div', {
            className: 'space-y-2',
            children: [
              e.jsx('div', {
                className:
                  'h-24 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 border border-white/10',
              }),
              e.jsx('p', { className: 'text-sm text-gray-400', children: 'Primary Gradient' }),
            ],
          }),
          e.jsxs('div', {
            className: 'space-y-2',
            children: [
              e.jsx('div', {
                className:
                  'h-24 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border border-white/10',
              }),
              e.jsx('p', { className: 'text-sm text-gray-400', children: 'Diagonal Gradient' }),
            ],
          }),
          e.jsxs('div', {
            className: 'space-y-2',
            children: [
              e.jsx('div', {
                className:
                  'h-24 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 border border-white/10',
              }),
              e.jsx('p', { className: 'text-sm text-gray-400', children: 'Success Gradient' }),
            ],
          }),
          e.jsxs('div', {
            className: 'space-y-2',
            children: [
              e.jsx('div', {
                className:
                  'h-24 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 border border-white/10',
              }),
              e.jsx('p', { className: 'text-sm text-gray-400', children: 'Warning Gradient' }),
            ],
          }),
        ],
      }),
  }
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <ColorSwatch name="Black" value="#000000" />
      <ColorSwatch name="White" value="#FFFFFF" textColor="black" />
      <ColorSwatch name="Violet" value="#8b5cf6" />
      <ColorSwatch name="Purple" value="#a855f7" />
      <ColorSwatch name="Blue" value="#3b82f6" />
      <ColorSwatch name="Green" value="#10b981" />
      <ColorSwatch name="Red" value="#ef4444" />
      <ColorSwatch name="Orange" value="#f59e0b" />
    </div>
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4 p-4">
      <div className="space-y-2">
        <div className="h-24 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 border border-white/10" />
        <p className="text-sm text-gray-400">Primary Gradient</p>
      </div>
      <div className="space-y-2">
        <div className="h-24 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border border-white/10" />
        <p className="text-sm text-gray-400">Diagonal Gradient</p>
      </div>
      <div className="space-y-2">
        <div className="h-24 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 border border-white/10" />
        <p className="text-sm text-gray-400">Success Gradient</p>
      </div>
      <div className="space-y-2">
        <div className="h-24 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 border border-white/10" />
        <p className="text-sm text-gray-400">Warning Gradient</p>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const c = ['Primary', 'Gradients']
export { s as Gradients, r as Primary, c as __namedExportsOrder, i as default }
