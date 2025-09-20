import { P as c } from './ProjectGridSimple-DhIIPOU0.js'
import './iframe-D02P5oxD.js'
import './preload-helper-PPVm8Dsz.js'
import './link-O0MyjLlL.js'
import './utils-Bzm_o1ou.js'
import './proxy-BHIPz7UP.js'
import './arrow-up-right-1us6speA.js'
import './createLucideIcon-FJiH0jrJ.js'
import './github-uSdV2o3H.js'
const P = {
    title: 'Sections/Project Grid',
    component: c,
    parameters: {
      layout: 'padded',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Grid layout for displaying project cards' } },
    },
  },
  o = [
    {
      id: 'ai-memory',
      title: 'AI Memory Layer',
      description: 'Production-ready memory system for LLMs with sub-millisecond response times',
      year: '2024',
      tags: ['TypeScript', 'Redis', 'MCP Protocol'],
      tech: ['TypeScript', 'Redis', 'MCP Protocol'],
      status: 'active',
      link: 'https://example.com',
      github: 'https://github.com',
      featured: !0,
      color: 'text-violet-400',
      metrics: [
        { label: '5ms response', color: 'text-violet-400' },
        { label: '1000+ users', color: 'text-green-400' },
      ],
    },
    {
      id: 'data-viz',
      title: 'Data Visualization Platform',
      description: 'Interactive dashboards for complex data analysis',
      year: '2024',
      tags: ['React', 'D3.js', 'WebGL'],
      tech: ['React', 'D3.js', 'WebGL'],
      status: 'experimental',
      featured: !1,
      color: 'text-blue-400',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solution',
      description: 'Full-stack marketplace with real-time inventory',
      year: '2024',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      status: 'active',
      featured: !0,
      color: 'text-emerald-400',
      metrics: [{ label: '99.9% uptime', color: 'text-green-400' }],
    },
  ],
  e = { args: { projects: o } },
  t = { args: { projects: [o[0]] } },
  r = { args: { projects: [...o, ...o].map((s, a) => ({ ...s, id: `${s.id}-${a}` })) } }
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    projects: sampleProjects
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
}
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    projects: [sampleProjects[0]]
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
}
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    projects: [...sampleProjects, ...sampleProjects].map((p, i) => ({
      ...p,
      id: \`\${p.id}-\${i}\`
    }))
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
const y = ['Default', 'SingleProject', 'ManyProjects']
export {
  e as Default,
  r as ManyProjects,
  t as SingleProject,
  y as __namedExportsOrder,
  P as default,
}
