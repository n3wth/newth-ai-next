import { j as e } from './iframe-D02P5oxD.js'
import { G as a } from './GlitchBackground-MgwDpsm5.js'
import './preload-helper-PPVm8Dsz.js'
import './style-CizCTe6A.js'
import './proxy-BHIPz7UP.js'
const o = {
    title: 'Effects/Backgrounds/Glitch',
    component: a,
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: { component: 'Glitch effect animated background with distortion patterns' },
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
              children: 'GLITCH',
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
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className:
                'text-6xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
              children: 'CYBERPUNK',
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
      <GlitchBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">GLITCH</h1>
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
      <GlitchBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
          CYBERPUNK
        </h1>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const d = ['Default', 'WithNeonText']
export { t as Default, s as WithNeonText, d as __namedExportsOrder, o as default }
