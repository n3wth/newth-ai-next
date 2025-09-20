import { j as e } from './iframe-D02P5oxD.js'
import './preload-helper-PPVm8Dsz.js'
const u = {
    title: 'Foundations/Background Shapes',
    parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } },
  },
  a = ({ className: p, label: h }) =>
    e.jsxs('div', {
      className: 'relative w-full h-screen bg-black overflow-hidden',
      children: [
        e.jsx('div', { className: `${p} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` }),
        e.jsx('div', {
          className: 'absolute bottom-8 left-8 text-white/60 font-mono text-sm',
          children: h,
        }),
      ],
    }),
  s = {
    render: () =>
      e.jsx(a, { className: 'shape-ascii-cube', label: '.shape-ascii-cube - 3D ASCII grid cube' }),
  },
  r = {
    render: () =>
      e.jsx(a, {
        className: 'shape-ascii-pyramid',
        label: '.shape-ascii-pyramid - 3D pyramid with glitch',
      }),
  },
  t = {
    render: () =>
      e.jsx(a, {
        className: 'shape-glitch-smoke',
        label: '.shape-glitch-smoke - Rising smoke with glitch',
      }),
  },
  i = {
    render: () =>
      e.jsx(a, { className: 'shape-ascii-grid', label: '.shape-ascii-grid - 3D perspective grid' }),
  },
  l = {
    render: () =>
      e.jsx(a, {
        className: 'shape-digital-rain',
        label: '.shape-digital-rain - Matrix-style rain',
      }),
  },
  c = {
    render: () =>
      e.jsx(a, {
        className: 'shape-wireframe-sphere',
        label: '.shape-wireframe-sphere - Rotating wireframe',
      }),
  },
  o = {
    render: () =>
      e.jsx(a, {
        className: 'shape-glitch-trail',
        label: '.shape-glitch-trail - RGB shadow trail',
      }),
  },
  d = {
    name: 'All ASCII Glitch Shapes',
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full h-screen bg-black overflow-hidden',
        children: [
          e.jsxs('div', {
            className: 'background-shapes',
            children: [
              e.jsx('div', { className: 'shape-ascii-cube', style: { top: '10%', left: '5%' } }),
              e.jsx('div', {
                className: 'shape-glitch-smoke',
                style: { top: '60%', right: '10%' },
              }),
              e.jsx('div', {
                className: 'shape-ascii-grid',
                style: { bottom: '20%', left: '30%' },
              }),
              e.jsx('div', {
                className: 'shape-wireframe-sphere',
                style: { top: '30%', right: '25%' },
              }),
              e.jsx('div', {
                className: 'shape-glitch-trail',
                style: { bottom: '10%', right: '40%' },
              }),
              e.jsx('div', { className: 'shape-digital-rain', style: { top: '45%', left: '15%' } }),
              e.jsx('div', {
                className: 'shape-ascii-pyramid',
                style: { top: '15%', right: '45%' },
              }),
            ],
          }),
          e.jsx('div', {
            className: 'absolute inset-0 flex items-center justify-center',
            children: e.jsxs('div', {
              className: 'text-center',
              children: [
                e.jsx('h1', {
                  className: 'text-6xl font-bold text-white mb-4',
                  children: 'Background Shapes',
                }),
                e.jsx('p', { className: 'text-white/60', children: 'Blocky geometric animations' }),
              ],
            }),
          }),
        ],
      }),
  },
  m = {
    name: 'Animated Background Example',
    render: () =>
      e.jsxs('div', {
        className: 'relative w-full h-screen bg-black overflow-hidden',
        children: [
          e.jsxs('div', {
            className: 'background-shapes',
            children: [
              e.jsx('div', {
                className: 'shape-ascii-cube',
                style: { top: '-150px', left: '-100px' },
              }),
              e.jsx('div', {
                className: 'shape-glitch-smoke',
                style: { bottom: '-50px', right: '-200px' },
              }),
              e.jsx('div', {
                className: 'shape-wireframe-sphere',
                style: { top: '40%', left: '70%' },
              }),
              e.jsx('div', { className: 'shape-digital-rain', style: { top: '60%', left: '10%' } }),
            ],
          }),
          e.jsx('div', {
            className: 'absolute inset-0 flex items-center justify-center z-10',
            children: e.jsxs('div', {
              className: 'glass-panel p-12 rounded-2xl text-center',
              children: [
                e.jsx('h1', {
                  className: 'text-5xl font-bold text-white mb-4',
                  children: 'Your Content Here',
                }),
                e.jsx('p', {
                  className: 'text-white/80 mb-8',
                  children: 'Shapes animate in the background',
                }),
                e.jsx('button', { className: 'btn-primary', children: 'Get Started' }),
              ],
            }),
          }),
        ],
      }),
  }
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-ascii-cube" label=".shape-ascii-cube - 3D ASCII grid cube" />
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
  render: () => <ShapeShowcase className="shape-ascii-pyramid" label=".shape-ascii-pyramid - 3D pyramid with glitch" />
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-glitch-smoke" label=".shape-glitch-smoke - Rising smoke with glitch" />
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-ascii-grid" label=".shape-ascii-grid - 3D perspective grid" />
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-digital-rain" label=".shape-digital-rain - Matrix-style rain" />
}`,
      ...l.parameters?.docs?.source,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-wireframe-sphere" label=".shape-wireframe-sphere - Rotating wireframe" />
}`,
      ...c.parameters?.docs?.source,
    },
  },
}
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <ShapeShowcase className="shape-glitch-trail" label=".shape-glitch-trail - RGB shadow trail" />
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  name: 'All ASCII Glitch Shapes',
  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="background-shapes">
        <div className="shape-ascii-cube" style={{
        top: '10%',
        left: '5%'
      }} />
        <div className="shape-glitch-smoke" style={{
        top: '60%',
        right: '10%'
      }} />
        <div className="shape-ascii-grid" style={{
        bottom: '20%',
        left: '30%'
      }} />
        <div className="shape-wireframe-sphere" style={{
        top: '30%',
        right: '25%'
      }} />
        <div className="shape-glitch-trail" style={{
        bottom: '10%',
        right: '40%'
      }} />
        <div className="shape-digital-rain" style={{
        top: '45%',
        left: '15%'
      }} />
        <div className="shape-ascii-pyramid" style={{
        top: '15%',
        right: '45%'
      }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Background Shapes</h1>
          <p className="text-white/60">Blocky geometric animations</p>
        </div>
      </div>
    </div>
}`,
      ...d.parameters?.docs?.source,
    },
  },
}
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Animated Background Example',
  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="background-shapes">
        <div className="shape-ascii-cube" style={{
        top: '-150px',
        left: '-100px'
      }} />
        <div className="shape-glitch-smoke" style={{
        bottom: '-50px',
        right: '-200px'
      }} />
        <div className="shape-wireframe-sphere" style={{
        top: '40%',
        left: '70%'
      }} />
        <div className="shape-digital-rain" style={{
        top: '60%',
        left: '10%'
      }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="glass-panel p-12 rounded-2xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Your Content Here</h1>
          <p className="text-white/80 mb-8">Shapes animate in the background</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </div>
}`,
      ...m.parameters?.docs?.source,
    },
  },
}
const x = [
  'AsciiCube',
  'AsciiPyramid',
  'GlitchSmoke',
  'AsciiGrid',
  'DigitalRain',
  'WireframeSphere',
  'GlitchTrail',
  'AllShapes',
  'AnimatedBackground',
]
export {
  d as AllShapes,
  m as AnimatedBackground,
  s as AsciiCube,
  i as AsciiGrid,
  r as AsciiPyramid,
  l as DigitalRain,
  t as GlitchSmoke,
  o as GlitchTrail,
  c as WireframeSphere,
  x as __namedExportsOrder,
  u as default,
}
