import { H as r } from './HeroSectionOptimized-D_Kn_0DN.js'
import './iframe-D02P5oxD.js'
import './preload-helper-PPVm8Dsz.js'
import './WarpBackground-CZe-78A1.js'
import './utils-Bzm_o1ou.js'
import './proxy-BHIPz7UP.js'
import './SimpleAnimatedButton-CMMme-ft.js'
import './link-O0MyjLlL.js'
import './arrow-right-Bnbe0itW.js'
import './createLucideIcon-FJiH0jrJ.js'
import './chevron-down-BEOEM9hO.js'
const f = {
    title: 'Sections/Hero',
    component: r,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: 'Full-screen hero section with animated background' } },
    },
  },
  e = {},
  t = {
    args: {
      title: { line1: 'Building the future', line2: 'one line at a time.' },
      subtitle: 'Full-stack developer passionate about creating exceptional digital experiences.',
      primaryCTA: { text: 'View Projects', href: '#projects' },
      secondaryCTA: { text: 'Contact Me', href: '#contact' },
    },
  }
e.parameters = {
  ...e.parameters,
  docs: { ...e.parameters?.docs, source: { originalSource: '{}', ...e.parameters?.docs?.source } },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    title: {
      line1: 'Building the future',
      line2: 'one line at a time.'
    },
    subtitle: 'Full-stack developer passionate about creating exceptional digital experiences.',
    primaryCTA: {
      text: 'View Projects',
      href: '#projects'
    },
    secondaryCTA: {
      text: 'Contact Me',
      href: '#contact'
    }
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
const g = ['Default', 'CustomContent']
export { t as CustomContent, e as Default, g as __namedExportsOrder, f as default }
