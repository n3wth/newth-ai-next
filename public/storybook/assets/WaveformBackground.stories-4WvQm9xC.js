import { j as e } from './iframe-D02P5oxD.js'
import { W as a } from './WaveformBackground-DKzqUuVw.js'
import './preload-helper-PPVm8Dsz.js'
import './proxy-BHIPz7UP.js'
const c = {
    title: 'Effects/Backgrounds/Waveform',
    component: a,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: 'Animated audio waveform visualization background' } },
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
              children: 'Sound Waves',
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
                    'text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text',
                  children: 'Audio Visualizer',
                }),
                e.jsx('p', {
                  className: 'text-xl text-gray-300',
                  children: 'Rhythmic waveform animations',
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
      <WaveformBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Sound Waves</h1>
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
      <WaveformBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
            Audio Visualizer
          </h1>
          <p className="text-xl text-gray-300">Rhythmic waveform animations</p>
        </div>
      </div>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
const o = ['Default', 'WithMusicTheme']
export { t as Default, s as WithMusicTheme, o as __namedExportsOrder, c as default }
