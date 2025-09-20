import { j as e } from './iframe-D02P5oxD.js'
import { H as o } from './HeroSectionOptimized-D_Kn_0DN.js'
import { P as a } from './ProjectGridSimple-DhIIPOU0.js'
import { C as s } from './ContactSection-BrWY-Med.js'
import './preload-helper-PPVm8Dsz.js'
import './WarpBackground-CZe-78A1.js'
import './utils-Bzm_o1ou.js'
import './proxy-BHIPz7UP.js'
import './SimpleAnimatedButton-CMMme-ft.js'
import './link-O0MyjLlL.js'
import './arrow-right-Bnbe0itW.js'
import './createLucideIcon-FJiH0jrJ.js'
import './chevron-down-BEOEM9hO.js'
import './arrow-up-right-1us6speA.js'
import './github-uSdV2o3H.js'
import './Button-r8z84KSs.js'
import './social-DvTmwasA.js'
function i() {
  const r = [
    {
      id: 'r3-memory',
      title: 'r3 — Intelligent Memory for AI',
      description:
        'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
      year: '2025',
      tags: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
      tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
      status: 'active',
      link: 'https://r3.newth.ai',
      github: 'https://github.com/n3wth/r3',
      featured: !0,
      color: 'text-violet-400',
      metrics: [
        { label: '5ms response', color: 'text-violet-400' },
        { label: 'MCP native', color: 'text-green-400' },
      ],
    },
    {
      id: 'meat-game',
      title: 'Meat — The Game',
      description:
        'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
      year: '2025',
      tags: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
      tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
      status: 'experimental',
      link: 'https://meat.newth.ai',
      featured: !0,
      color: 'text-red-400',
      metrics: [
        { label: '100% meat', color: 'text-red-400' },
        { label: '0% vegetarian', color: 'text-pink-400' },
      ],
    },
    {
      id: 'quartz-knowledge',
      title: 'Personal Knowledge Graph',
      description:
        '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
      year: '2025',
      tags: ['Quartz', 'Obsidian', 'Knowledge Management'],
      tech: ['Quartz', 'Obsidian', 'Knowledge Management'],
      status: 'active',
      github: 'https://github.com/n3wth/quartz',
      featured: !1,
      color: 'text-emerald-400',
      metrics: [
        { label: '1000+ notes', color: 'text-emerald-400' },
        { label: 'Always growing', color: 'text-teal-400' },
      ],
    },
    {
      id: 'neuros',
      title: 'Neuros — AI Dev Experiments',
      description:
        'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
      year: '2025',
      tags: ['TypeScript', 'MCP', 'AI Tools'],
      tech: ['TypeScript', 'MCP', 'AI Tools'],
      status: 'experimental',
      github: 'https://github.com/n3wth/neuros',
      featured: !1,
      color: 'text-orange-400',
      metrics: [
        { label: 'Experimental', color: 'text-orange-400' },
        { label: 'Open source', color: 'text-amber-400' },
      ],
    },
  ]
  return e.jsxs('main', {
    className: 'flex flex-col relative bg-black',
    children: [
      e.jsx(o, {}),
      e.jsx('section', {
        id: 'projects',
        className: 'py-32 px-6 bg-black relative z-10',
        children: e.jsxs('div', {
          className: 'max-w-7xl mx-auto',
          children: [
            e.jsx('h2', {
              className: 'text-4xl font-bold mb-16 text-white',
              children: 'Featured Projects',
            }),
            e.jsx(a, { projects: r }),
          ],
        }),
      }),
      e.jsx(s, {}),
    ],
  })
}
const A = {
    title: 'Examples/Pages/Home',
    component: i,
    parameters: {
      layout: 'fullscreen',
      docs: { description: { component: 'Complete home page with all sections' } },
    },
  },
  t = {}
t.parameters = {
  ...t.parameters,
  docs: { ...t.parameters?.docs, source: { originalSource: '{}', ...t.parameters?.docs?.source } },
}
const M = ['Default']
export { t as Default, M as __namedExportsOrder, A as default }
