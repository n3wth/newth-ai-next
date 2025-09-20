import { r as u, j as e } from './iframe-D02P5oxD.js'
import { c as p } from './utils-Bzm_o1ou.js'
import './preload-helper-PPVm8Dsz.js'
function n(a) {
  const s = Math.sin(a) * 1e4
  return s - Math.floor(s)
}
const r = ({ number: a = 20, className: s }) => {
  const f = u.useMemo(
    () =>
      new Array(a).fill(!0).map((t, m) => {
        const o = m + 1
        return {
          top: Math.floor(n(o * 2) * 100),
          left: Math.floor(n(o * 3) * 100),
          delay: n(o * 5) * 3,
          duration: Math.floor(n(o * 7) * 5) + 5,
        }
      }),
    [a]
  )
  return e.jsx(e.Fragment, {
    children: f.map((t, m) =>
      e.jsx(
        'span',
        {
          className: p(
            'absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            s
          ),
          style: {
            top: `${t.top}%`,
            left: `${t.left}%`,
            animationDelay: `${t.delay}s`,
            animationDuration: `${t.duration}s`,
          },
        },
        m
      )
    ),
  })
}
try {
  ;((r.displayName = 'Meteors'),
    (r.__docgenInfo = {
      description: '',
      displayName: 'Meteors',
      props: {
        number: {
          defaultValue: { value: '20' },
          description: '',
          name: 'number',
          required: !1,
          type: { name: 'number' },
        },
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
      },
    }))
} catch {}
const x = {
    title: 'Effects/Animations/Meteors',
    component: r,
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Animated meteors falling across the screen' } },
    },
    argTypes: {
      number: {
        control: { type: 'range', min: 1, max: 50, step: 1 },
        description: 'Number of meteors',
      },
    },
  },
  l = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full h-screen bg-black overflow-hidden',
        children: e.jsx(r, {}),
      }),
  },
  c = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full h-screen bg-black overflow-hidden',
        children: e.jsx(r, { number: 5 }),
      }),
  },
  i = {
    render: () =>
      e.jsx('div', {
        className: 'relative w-full h-screen bg-black overflow-hidden',
        children: e.jsx(r, { number: 30 }),
      }),
  },
  d = {
    render: () =>
      e.jsxs('div', {
        className:
          'relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden',
        children: [
          e.jsx(r, { number: 10 }),
          e.jsx('div', {
            className: 'relative z-10 flex h-full items-center justify-center',
            children: e.jsx('h1', {
              className: 'text-6xl font-bold text-white',
              children: 'Meteor Shower',
            }),
          }),
        ],
      }),
  }
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors />
    </div>
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
  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors number={5} />
    </div>
}`,
      ...c.parameters?.docs?.source,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors number={30} />
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      <Meteors number={10} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Meteor Shower</h1>
      </div>
    </div>
}`,
      ...d.parameters?.docs?.source,
    },
  },
}
const g = ['Default', 'FewMeteors', 'ManyMeteors', 'WithContent']
export {
  l as Default,
  c as FewMeteors,
  i as ManyMeteors,
  d as WithContent,
  g as __namedExportsOrder,
  x as default,
}
