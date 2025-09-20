import { j as e, r as p } from './iframe-D02P5oxD.js'
import { L as m } from './link-O0MyjLlL.js'
import { C as u, s as g } from './social-DvTmwasA.js'
import { c as x } from './createLucideIcon-FJiH0jrJ.js'
import { G as v } from './github-uSdV2o3H.js'
import './preload-helper-PPVm8Dsz.js'
import './utils-Bzm_o1ou.js'
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b = [
    ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
    ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' }],
  ],
  f = x('briefcase', b)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y = [
    [
      'path',
      {
        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
        key: 'usdka0',
      },
    ],
  ],
  N = x('folder-open', y)
function k() {
  const t = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █'],
    d = ['  ▄▀█ █', '  █▀█ █', '°']
  return e.jsx('div', {
    className: 'flex items-center',
    children: e.jsxs('pre', {
      className:
        'font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1 text-white',
      children: [
        e.jsx('div', {
          className: 'relative',
          children: e.jsx('div', {
            className: 'relative',
            children: t.map((s, r) => e.jsx('div', { children: s }, r)),
          }),
        }),
        e.jsx('div', {
          className: 'text-white/60 text-[8px] leading-[8px] -mt-0.5',
          children: d.map((s, r) => e.jsx('div', { children: s }, r)),
        }),
      ],
    }),
  })
}
function j() {
  const [t, d] = p.useState(!1),
    [s] = p.useState(!1),
    r = () => d(!t),
    h = [
      { text: 'Projects', href: '/projects', icon: N },
      { text: 'Work', href: '/work', icon: f },
      { text: 'GitHub', href: g.github, external: !0, icon: v },
    ]
  return e.jsx('nav', {
    className: `relative w-full transition-all duration-300 ${t || s ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/70 backdrop-blur-sm'}`,
    children: e.jsx(u, {
      children: e.jsxs('div', {
        className: 'flex h-20 items-center justify-between',
        children: [
          e.jsx('div', {
            className: 'flex items-center',
            children: e.jsx(m, {
              href: '/',
              className: 'flex items-center relative z-[103] group',
              children: e.jsx(k, {}),
            }),
          }),
          e.jsx('div', {
            className: 'hidden md:flex md:space-x-2',
            children: h.map((a) =>
              a.external
                ? e.jsx(
                    'a',
                    {
                      href: a.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                      children: a.text,
                    },
                    a.href
                  )
                : e.jsx(
                    m,
                    {
                      href: a.href,
                      className:
                        'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                      children: a.text,
                    },
                    a.href
                  )
            ),
          }),
          e.jsx('div', {
            className: 'md:hidden',
            children: e.jsx('button', {
              onClick: r,
              className:
                'relative p-3 -mr-3 text-white z-[102] hover:bg-white/10 rounded-lg transition-colors',
              'aria-label': 'Toggle menu',
              type: 'button',
              children: e.jsxs('div', {
                className: 'relative w-6 h-6 pointer-events-none',
                children: [
                  e.jsx('span', {
                    className: `block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ${t ? 'rotate-45 top-[11px]' : 'top-[5px]'}`,
                  }),
                  e.jsx('span', {
                    className: `block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 top-[11px] ${t ? 'opacity-0' : 'opacity-100'}`,
                  }),
                  e.jsx('span', {
                    className: `block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ${t ? '-rotate-45 top-[11px]' : 'top-[17px]'}`,
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  })
}
const V = {
    title: 'Layout/Navigation',
    component: j,
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: {
        description: {
          component: 'Main navigation bar with responsive menu and accessibility features',
        },
      },
    },
    decorators: [(t) => e.jsx('div', { className: 'bg-black w-full', children: e.jsx(t, {}) })],
    tags: ['autodocs', 'layout'],
  },
  o = {},
  i = {
    decorators: [
      (t) =>
        e.jsx('div', {
          className: 'bg-gradient-to-b from-black via-gray-900 to-black',
          children: e.jsx(t, {}),
        }),
    ],
  },
  n = {
    decorators: [
      (t) =>
        e.jsxs('div', {
          className: 'min-h-screen bg-black',
          children: [
            e.jsx('div', { className: 'sticky top-0 z-50', children: e.jsx(t, {}) }),
            e.jsxs('div', {
              className: 'p-8 space-y-4',
              children: [
                e.jsx('h1', {
                  className: 'text-4xl font-bold text-white',
                  children: 'Page Content',
                }),
                e.jsx('p', {
                  className: 'text-gray-400',
                  children: 'Scroll to see sticky navigation behavior',
                }),
                e.jsx('div', {
                  className: 'h-[150vh] bg-gray-900/50 rounded-lg p-8',
                  children: e.jsx('p', {
                    className: 'text-gray-500',
                    children: 'Long content area...',
                  }),
                }),
              ],
            }),
          ],
        }),
    ],
  },
  c = {
    parameters: { viewport: { defaultViewport: 'mobile1' } },
    decorators: [
      (t) => e.jsx('div', { className: 'bg-black max-w-[375px] mx-auto', children: e.jsx(t, {}) }),
    ],
  },
  l = {
    decorators: [
      (t) =>
        e.jsxs('div', {
          className: 'bg-black',
          children: [
            e.jsx('p', {
              className: 'text-center text-gray-500 py-4 text-sm',
              children: 'Note: Active link styles depend on current route',
            }),
            e.jsx(t, {}),
          ],
        }),
    ],
  }
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: { originalSource: '{}', ...o.parameters?.docs?.source },
    description: { story: 'Default navigation appearance', ...o.parameters?.docs?.description },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        <Story />
      </div>]
}`,
      ...i.parameters?.docs?.source,
    },
    description: {
      story: 'Navigation with gradient background',
      ...i.parameters?.docs?.description,
    },
  },
}
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div className="min-h-screen bg-black">
        <div className="sticky top-0 z-50">
          <Story />
        </div>
        <div className="p-8 space-y-4">
          <h1 className="text-4xl font-bold text-white">Page Content</h1>
          <p className="text-gray-400">Scroll to see sticky navigation behavior</p>
          <div className="h-[150vh] bg-gray-900/50 rounded-lg p-8">
            <p className="text-gray-500">Long content area...</p>
          </div>
        </div>
      </div>]
}`,
      ...n.parameters?.docs?.source,
    },
    description: {
      story: 'Navigation with content below to show sticky behavior',
      ...n.parameters?.docs?.description,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  decorators: [Story => <div className="bg-black max-w-[375px] mx-auto">
        <Story />
      </div>]
}`,
      ...c.parameters?.docs?.source,
    },
    description: { story: 'Mobile view simulation', ...c.parameters?.docs?.description },
  },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div className="bg-black">
        <p className="text-center text-gray-500 py-4 text-sm">
          Note: Active link styles depend on current route
        </p>
        <Story />
      </div>]
}`,
      ...l.parameters?.docs?.source,
    },
    description: { story: 'With active link highlighting', ...l.parameters?.docs?.description },
  },
}
const C = ['Default', 'WithGradientBackground', 'StickyNavigation', 'MobileView', 'WithActiveLink']
export {
  o as Default,
  c as MobileView,
  n as StickyNavigation,
  l as WithActiveLink,
  i as WithGradientBackground,
  C as __namedExportsOrder,
  V as default,
}
