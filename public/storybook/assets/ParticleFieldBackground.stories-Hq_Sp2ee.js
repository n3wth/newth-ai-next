import { j as e } from './iframe-D02P5oxD.js'
import { P as a } from './ParticleFieldBackground-A8WPgPKZ.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const i = {
    title: 'Effects/Backgrounds/Particle Field',
    component: a,
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: { component: 'Interactive particle field with mouse-following effects' },
      },
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
              className: 'text-5xl font-bold text-white',
              children: 'Interactive Particles',
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
                  className:
                    'text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent',
                  children: 'Particle Physics',
                }),
                e.jsx('p', {
                  className: 'text-xl text-gray-300',
                  children: 'Move your mouse to interact',
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
      <ParticleFieldBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Interactive Particles</h1>
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
      <ParticleFieldBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Particle Physics
          </h1>
          <p className="text-xl text-gray-300">Move your mouse to interact</p>
        </div>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'WithContent']
export { t as Default, s as WithContent, o as __namedExportsOrder, i as default }
