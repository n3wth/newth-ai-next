import { j as e } from './iframe-D02P5oxD.js'
import { W as t } from './WarpBackground-CZe-78A1.js'
import { B as i } from './Button-r8z84KSs.js'
import './preload-helper-PPVm8Dsz.js'
import './utils-Bzm_o1ou.js'
import './proxy-BHIPz7UP.js'
import './link-O0MyjLlL.js'
const x = {
    title: 'Effects/Backgrounds/Warp',
    component: t,
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: { component: '3D animated background with floating blocks and warp effect' },
      },
    },
    tags: ['autodocs'],
  },
  a = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: e.jsx(t, { className: 'absolute inset-0' }),
      }),
  },
  s = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: e.jsx(t, {
          className: 'absolute inset-0',
          children: e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsxs('div', {
              className: 'text-center space-y-6',
              children: [
                e.jsx('h1', {
                  className: 'text-6xl font-bold text-white',
                  children: 'Welcome to the Future',
                }),
                e.jsx('p', {
                  className: 'text-xl text-white/80 max-w-md mx-auto',
                  children:
                    'Experience the next generation of web interfaces with immersive 3D backgrounds',
                }),
                e.jsx(i, { variant: 'primary', size: 'lg', children: 'Get Started' }),
              ],
            }),
          }),
        }),
      }),
  },
  r = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full h-[50vh]',
        children: e.jsx(t, { className: 'absolute inset-0' }),
      }),
  },
  n = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full min-h-[400px] h-screen',
        children: e.jsxs(t, {
          className: 'absolute inset-0',
          children: [
            e.jsx('div', {
              className:
                'absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]',
            }),
            e.jsx('div', {
              className: 'relative z-10 flex h-full items-center justify-center',
              children: e.jsx('h2', {
                className: 'text-4xl font-bold text-white',
                children: 'Gradient Overlay Effect',
              }),
            }),
          ],
        }),
      }),
  }
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <WarpBackground className="absolute inset-0" />
    </div>
}`,
      ...a.parameters?.docs?.source,
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
      <WarpBackground className="absolute inset-0">
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-white">Welcome to the Future</h1>
            <p className="text-xl text-white/80 max-w-md mx-auto">
              Experience the next generation of web interfaces with immersive 3D backgrounds
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </WarpBackground>
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full h-[50vh]">
      <WarpBackground className="absolute inset-0" />
    </div>
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full min-h-[400px] h-screen">
      <WarpBackground className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Gradient Overlay Effect</h2>
        </div>
      </WarpBackground>
    </div>
}`,
      ...n.parameters?.docs?.source,
    },
  },
}
const p = ['Default', 'WithContent', 'HalfHeight', 'WithOverlay']
export {
  a as Default,
  r as HalfHeight,
  s as WithContent,
  n as WithOverlay,
  p as __namedExportsOrder,
  x as default,
}
