import { j as e } from './iframe-D02P5oxD.js'
import { L as s } from './link-O0MyjLlL.js'
import { C as n, s as a } from './social-DvTmwasA.js'
import './preload-helper-PPVm8Dsz.js'
import './utils-Bzm_o1ou.js'
function c() {
  const o = new Date().getFullYear()
  return e.jsx('footer', {
    className: 'border-t border-white/10 bg-black',
    children: e.jsx(n, {
      className: 'py-8',
      children: e.jsxs('div', {
        className: 'flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4',
        children: [
          e.jsxs('p', {
            className: 'text-sm text-gray-400 order-2 sm:order-1',
            children: ['© ', o, ' Oliver Newth. All rights reserved.'],
          }),
          e.jsxs('div', {
            className: 'flex flex-wrap gap-x-6 gap-y-2 text-sm order-1 sm:order-2',
            children: [
              e.jsx(s, {
                href: '/#projects',
                className: 'text-gray-400 hover:text-white transition-colors',
                children: 'Projects',
              }),
              e.jsx(s, {
                href: '/work',
                className: 'text-gray-400 hover:text-white transition-colors',
                children: 'Work',
              }),
              e.jsx('a', {
                href: a.github,
                className: 'text-gray-400 hover:text-white transition-colors',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'GitHub',
              }),
              e.jsx('a', {
                href: a.linkedin,
                className: 'text-gray-400 hover:text-white transition-colors',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'LinkedIn',
              }),
            ],
          }),
        ],
      }),
    }),
  })
}
const h = {
    title: 'Layout/Footer',
    component: c,
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Site footer with social links and copyright' } },
    },
  },
  r = {},
  t = {
    decorators: [
      (o) =>
        e.jsx('div', {
          className: 'bg-gradient-to-b from-gray-900 to-black',
          children: e.jsx(o, {}),
        }),
    ],
  }
r.parameters = {
  ...r.parameters,
  docs: { ...r.parameters?.docs, source: { originalSource: '{}', ...r.parameters?.docs?.source } },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div className="bg-gradient-to-b from-gray-900 to-black">
        <Story />
      </div>]
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
const p = ['Default', 'WithBackground']
export { r as Default, t as WithBackground, p as __namedExportsOrder, h as default }
