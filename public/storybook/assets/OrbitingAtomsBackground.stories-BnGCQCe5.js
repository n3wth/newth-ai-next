import { j as e } from './iframe-D02P5oxD.js'
import { O as r } from './OrbitingAtomsBackground-BaaSnCjC.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const c = {
    title: 'Effects/Backgrounds/Orbiting Atoms',
    component: r,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: '3D atomic particles orbiting in space' } },
    },
  },
  t = {
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: [
          e.jsx(r, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className: 'text-5xl font-bold text-white',
              children: 'Quantum Space',
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
          e.jsx(r, { className: 'absolute inset-0' }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className:
                'text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
              children: 'Atomic Structure',
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
      <OrbitingAtomsBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Quantum Space</h1>
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
      <OrbitingAtomsBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Atomic Structure
        </h1>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'WithGradientText']
export { t as Default, s as WithGradientText, o as __namedExportsOrder, c as default }
