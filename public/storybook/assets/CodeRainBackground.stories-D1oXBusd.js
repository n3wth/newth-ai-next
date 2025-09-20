import { j as e } from './iframe-D02P5oxD.js'
import { C as a } from './CodeRainBackground-OYYFhmPD.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const c = {
    title: 'Effects/Backgrounds/Code Rain',
    component: a,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: 'Matrix-style code rain animation background' } },
    },
  },
  t = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(a, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className: 'text-4xl font-bold text-green-400',
              children: 'Enter the Matrix',
            }),
          }),
        ],
      }),
  },
  s = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(a, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center text-center',
            children: e.jsxs('div', {
              className: 'space-y-4',
              children: [
                e.jsx('h1', {
                  className: 'text-5xl font-bold text-green-400',
                  children: 'Code Rain',
                }),
                e.jsx('p', {
                  className: 'text-xl text-green-300',
                  children: 'Digital rain of characters',
                }),
              ],
            }),
          }),
        ],
      }),
  }
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <CodeRainBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-green-400">Enter the Matrix</h1>
      </div>
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <CodeRainBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-green-400">Code Rain</h1>
          <p className="text-xl text-green-300">Digital rain of characters</p>
        </div>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'WithContent']
export { t as Default, s as WithContent, o as __namedExportsOrder, c as default }
