import { j as e } from './iframe-D02P5oxD.js'
import { D as s } from './DataFlowBackground-D8KoObpf.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const c = {
    title: 'Effects/Backgrounds/Data Flow',
    component: s,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: 'Animated data flow visualization with particles' } },
    },
  },
  t = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(s, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className: 'text-5xl font-bold text-white',
              children: 'Data Flow',
            }),
          }),
        ],
      }),
  },
  a = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(s, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center text-center',
            children: e.jsxs('div', {
              className: 'space-y-4',
              children: [
                e.jsx('h1', {
                  className: 'text-6xl font-bold text-cyan-400',
                  children: 'Real-time Data',
                }),
                e.jsx('p', {
                  className: 'text-xl text-cyan-300',
                  children: 'Visualizing information streams',
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
      <DataFlowBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Data Flow</h1>
      </div>
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <DataFlowBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-cyan-400">Real-time Data</h1>
          <p className="text-xl text-cyan-300">Visualizing information streams</p>
        </div>
      </div>
    </div>
}`,
      ...a.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'WithContent']
export { t as Default, a as WithContent, o as __namedExportsOrder, c as default }
