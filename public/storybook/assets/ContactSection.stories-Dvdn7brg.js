import { j as t } from './iframe-D02P5oxD.js'
import { C as e } from './ContactSection-BrWY-Med.js'
import './preload-helper-PPVm8Dsz.js'
import './Button-r8z84KSs.js'
import './link-O0MyjLlL.js'
import './utils-Bzm_o1ou.js'
import './social-DvTmwasA.js'
const l = {
    title: 'Sections/Contact',
    component: e,
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Contact section with social links and call-to-action' } },
    },
  },
  o = {},
  r = {
    decorators: [
      (a) =>
        t.jsx('div', {
          className: 'bg-gradient-to-b from-black via-purple-900/10 to-black',
          children: t.jsx(a, {}),
        }),
    ],
  }
o.parameters = {
  ...o.parameters,
  docs: { ...o.parameters?.docs, source: { originalSource: '{}', ...o.parameters?.docs?.source } },
}
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div className="bg-gradient-to-b from-black via-purple-900/10 to-black">
        <Story />
      </div>]
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
const u = ['Default', 'WithGradientBackground']
export { o as Default, r as WithGradientBackground, u as __namedExportsOrder, l as default }
