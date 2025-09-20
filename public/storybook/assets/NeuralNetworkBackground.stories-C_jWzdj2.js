import { j as e } from './iframe-D02P5oxD.js'
import { N as a } from './NeuralNetworkBackground-O-mech4j.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const i = {
    title: 'Effects/Backgrounds/Neural Network',
    component: a,
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: { component: 'Interactive neural network visualization with connected nodes' },
      },
    },
  },
  s = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(a, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsxs('div', {
              className: 'text-center space-y-4',
              children: [
                e.jsx('h1', {
                  className: 'text-5xl font-bold text-white',
                  children: 'Neural Network',
                }),
                e.jsx('p', {
                  className: 'text-xl text-gray-300',
                  children: 'Visualizing AI connections',
                }),
              ],
            }),
          }),
        ],
      }),
  },
  t = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full h-[400px]',
        children: e.jsx(a, { className: 'absolute inset-0' }),
      }),
  }
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <NeuralNetworkBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Neural Network</h1>
          <p className="text-xl text-gray-300">Visualizing AI connections</p>
        </div>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full h-[400px]">
      <NeuralNetworkBackground className="absolute inset-0" />
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'Minimal']
export { s as Default, t as Minimal, o as __namedExportsOrder, i as default }
