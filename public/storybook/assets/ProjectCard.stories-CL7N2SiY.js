import { r as d, j as e } from './iframe-D02P5oxD.js'
import { c as m } from './utils-Bzm_o1ou.js'
import { G as p } from './github-uSdV2o3H.js'
import { c } from './createLucideIcon-FJiH0jrJ.js'
import { A as u } from './arrow-up-right-1us6speA.js'
import { D as h } from './download-11BzjnSA.js'
import './preload-helper-PPVm8Dsz.js'
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
    ['path', { d: 'M2 12h20', key: '9i4pu4' }],
  ],
  g = c('globe', x)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b = [
    [
      'path',
      {
        d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
        key: 'r04s7s',
      },
    ],
  ],
  f = c('star', b),
  a = d.memo(function ({ project: t }) {
    const n = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      experimental: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    }
    return e.jsx('div', {
      className: 'group relative',
      children: e.jsxs('div', {
        className:
          'relative h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1',
        children: [
          e.jsxs('div', {
            className: 'flex items-start justify-between mb-4',
            children: [
              e.jsxs('div', {
                children: [
                  e.jsx('h3', {
                    className: 'text-xl font-medium text-white mb-2',
                    children: t.title,
                  }),
                  e.jsx('span', {
                    className: m(
                      'inline-flex px-2 py-1 text-xs font-medium rounded-full border',
                      n[t.status]
                    ),
                    children: t.status,
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'flex gap-2',
                children: [
                  t.github &&
                    e.jsx('a', {
                      href: t.github,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                      'aria-label': 'View on GitHub',
                      children: e.jsx(p, { className: 'h-4 w-4 text-gray-400' }),
                    }),
                  t.link &&
                    e.jsx('a', {
                      href: t.link,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                      'aria-label': 'Visit project',
                      children: e.jsx(g, { className: 'h-4 w-4 text-gray-400' }),
                    }),
                  t.demo &&
                    e.jsx('a', {
                      href: t.demo,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors',
                      'aria-label': 'View demo',
                      children: e.jsx(u, { className: 'h-4 w-4 text-gray-400' }),
                    }),
                ],
              }),
            ],
          }),
          e.jsx('p', {
            className: 'text-gray-400 text-sm mb-4 line-clamp-2',
            children: t.description,
          }),
          e.jsxs('div', {
            className: 'flex flex-wrap gap-2 mb-4',
            children: [
              (t.tags || t.tech || [])
                .slice(0, 3)
                .map((i) =>
                  e.jsx(
                    'span',
                    {
                      className:
                        'px-2 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10',
                      children: i,
                    },
                    i
                  )
                ),
              (t.tags || t.tech || []).length > 3 &&
                e.jsxs('span', {
                  className: 'px-2 py-1 text-xs font-medium rounded-lg text-gray-500',
                  children: ['+', (t.tags || t.tech || []).length - 3, ' more'],
                }),
            ],
          }),
          t.stats &&
            e.jsxs('div', {
              className: 'flex items-center gap-4 pt-4 border-t border-white/5',
              children: [
                t.stats.stars &&
                  e.jsxs('div', {
                    className: 'flex items-center gap-1 text-xs text-gray-500',
                    children: [
                      e.jsx(f, { className: 'h-3 w-3' }),
                      e.jsx('span', { children: t.stats.stars }),
                    ],
                  }),
                t.stats.downloads &&
                  e.jsxs('div', {
                    className: 'flex items-center gap-1 text-xs text-gray-500',
                    children: [
                      e.jsx(h, { className: 'h-3 w-3' }),
                      e.jsx('span', { children: t.stats.downloads }),
                    ],
                  }),
              ],
            }),
          t.featured &&
            e.jsx('div', {
              className: 'absolute -top-2 -right-2',
              children: e.jsx('span', {
                className: 'inline-flex rounded-full h-3 w-3 bg-purple-500',
              }),
            }),
        ],
      }),
    })
  })
try {
  ;((a.displayName = 'ProjectCard'),
    (a.__docgenInfo = {
      description: '',
      displayName: 'ProjectCard',
      props: {
        project: {
          defaultValue: null,
          description: '',
          name: 'project',
          required: !0,
          type: { name: 'Project' },
        },
        index: {
          defaultValue: null,
          description: '',
          name: 'index',
          required: !1,
          type: { name: 'number' },
        },
      },
    }))
} catch {}
const S = {
    title: 'Components/Cards/Project',
    component: a,
    parameters: {
      layout: 'centered',
      backgrounds: { default: 'dark' },
      docs: {
        description: { component: 'Interactive project card with hover effects and metrics' },
      },
    },
  },
  r = {
    args: {
      project: {
        id: 'example-project',
        title: 'Example Project',
        description: 'A showcase project demonstrating modern web development techniques',
        year: '2024',
        tags: ['React', 'TypeScript', 'Tailwind'],
        tech: ['React', 'TypeScript', 'Tailwind'],
        status: 'active',
        featured: !1,
        color: 'text-blue-400',
      },
    },
  },
  s = {
    args: {
      project: {
        id: 'featured-project',
        title: 'Featured AI Project',
        description:
          'Production-ready AI solution with advanced capabilities and real-time processing',
        year: '2024',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
        tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
        status: 'active',
        link: 'https://example.com',
        github: 'https://github.com',
        featured: !0,
        color: 'text-violet-400',
        metrics: [
          { label: '99.9% uptime', color: 'text-green-400' },
          { label: '<5ms latency', color: 'text-blue-400' },
        ],
      },
    },
  },
  o = {
    args: {
      project: {
        id: 'default',
        title: 'Project',
        description: 'Description',
        tags: ['Tech'],
        tech: ['Tech'],
        featured: !1,
        status: 'active',
      },
    },
    render: () =>
      e.jsxs('div', {
        className: 'grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl',
        children: [
          e.jsx(a, {
            project: {
              id: 'project-1',
              title: 'E-commerce Platform',
              description: 'Full-stack solution with payment processing',
              year: '2024',
              tags: ['Next.js', 'Stripe', 'PostgreSQL'],
              tech: ['Next.js', 'Stripe', 'PostgreSQL'],
              status: 'active',
              featured: !0,
              color: 'text-emerald-400',
              metrics: [
                { label: '10K+ users', color: 'text-emerald-400' },
                { label: '$1M+ processed', color: 'text-green-400' },
              ],
            },
          }),
          e.jsx(a, {
            project: {
              id: 'project-2',
              title: 'Data Analytics Dashboard',
              description: 'Real-time visualization and reporting',
              year: '2024',
              tags: ['React', 'D3.js', 'WebSockets'],
              tech: ['React', 'D3.js', 'WebSockets'],
              status: 'active',
              featured: !1,
              color: 'text-orange-400',
            },
          }),
        ],
      }),
  }
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    project: {
      id: 'example-project',
      title: 'Example Project',
      description: 'A showcase project demonstrating modern web development techniques',
      year: '2024',
      tags: ['React', 'TypeScript', 'Tailwind'],
      tech: ['React', 'TypeScript', 'Tailwind'],
      // backward compat
      status: 'active' as const,
      featured: false,
      color: 'text-blue-400'
    }
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    project: {
      id: 'featured-project',
      title: 'Featured AI Project',
      description: 'Production-ready AI solution with advanced capabilities and real-time processing',
      year: '2024',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      // backward compat
      status: 'active' as const,
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
      color: 'text-violet-400',
      metrics: [{
        label: '99.9% uptime',
        color: 'text-green-400'
      }, {
        label: '<5ms latency',
        color: 'text-blue-400'
      }]
    }
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    project: {
      id: 'default',
      title: 'Project',
      description: 'Description',
      tags: ['Tech'],
      tech: ['Tech'],
      featured: false,
      status: 'active' as const
    }
  },
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl">
      <ProjectCard project={{
      id: 'project-1',
      title: 'E-commerce Platform',
      description: 'Full-stack solution with payment processing',
      year: '2024',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      // backward compat
      status: 'active' as const,
      featured: true,
      color: 'text-emerald-400',
      metrics: [{
        label: '10K+ users',
        color: 'text-emerald-400'
      }, {
        label: '$1M+ processed',
        color: 'text-green-400'
      }]
    }} />
      <ProjectCard project={{
      id: 'project-2',
      title: 'Data Analytics Dashboard',
      description: 'Real-time visualization and reporting',
      year: '2024',
      tags: ['React', 'D3.js', 'WebSockets'],
      tech: ['React', 'D3.js', 'WebSockets'],
      // backward compat
      status: 'active' as const,
      featured: false,
      color: 'text-orange-400'
    }} />
    </div>
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
const _ = ['Default', 'Featured', 'Grid']
export { r as Default, s as Featured, o as Grid, _ as __namedExportsOrder, S as default }
