import { j as e } from './iframe-D02P5oxD.js'
import { L as i } from './link-O0MyjLlL.js'
import { c as t } from './utils-Bzm_o1ou.js'
import { m as c } from './proxy-BHIPz7UP.js'
import { A as p } from './arrow-up-right-1us6speA.js'
import { G as x } from './github-uSdV2o3H.js'
function n({ projects: a, className: l }) {
  const o = (r) =>
    r === 0
      ? 'lg:col-span-2'
      : r === 1 || r === 2
        ? 'lg:col-span-1'
        : r === 3
          ? 'lg:col-span-2'
          : 'lg:col-span-1'
  return e.jsx('div', {
    className: t('grid grid-cols-1 lg:grid-cols-3 gap-6', l),
    children: a.map((r, d) =>
      e.jsx(
        c.div,
        {
          className: t('relative group', o(d)),
          whileHover: { y: -2, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } },
          children: e.jsxs('div', {
            className:
              'relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] overflow-hidden',
            children: [
              e.jsx('div', {
                className:
                  'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                children: e.jsx('div', {
                  className:
                    'absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent blur-3xl',
                }),
              }),
              e.jsxs('div', {
                className: 'relative',
                children: [
                  e.jsx('div', {
                    className: 'mb-4',
                    children: e.jsx('span', {
                      className: 'text-xs text-gray-500 font-sans',
                      children: r.year,
                    }),
                  }),
                  e.jsx('h3', {
                    className:
                      'text-xl sm:text-2xl font-semibold mb-3 text-white font-sans transition-colors duration-300',
                    children: r.title,
                  }),
                  r.metrics &&
                    e.jsx('div', {
                      className: 'flex gap-4 mb-4',
                      children: r.metrics.map((s, m) =>
                        e.jsx(
                          'span',
                          { className: t('text-sm font-medium', s.color), children: s.label },
                          m
                        )
                      ),
                    }),
                  e.jsx('p', {
                    className: 'text-gray-500 mb-6 font-sans leading-relaxed',
                    children: r.description,
                  }),
                  e.jsx('div', {
                    className: 'flex flex-wrap gap-2 mb-6',
                    children: r.tech?.map((s) =>
                      e.jsx(
                        'span',
                        {
                          className:
                            'px-3 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 font-mono transition-colors duration-200 hover:text-gray-400 hover:bg-white/[0.05]',
                          children: s,
                        },
                        s
                      )
                    ),
                  }),
                  e.jsxs('div', {
                    className: 'flex gap-4',
                    children: [
                      r.link &&
                        e.jsxs(i, {
                          href: r.link,
                          className:
                            'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                          children: [
                            'Visit',
                            e.jsx(p, {
                              className:
                                'w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5',
                            }),
                          ],
                        }),
                      r.github &&
                        e.jsxs(i, {
                          href: r.github,
                          className:
                            'inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link',
                          children: [
                            e.jsx(x, {
                              className: 'w-4 h-4 transition-transform group-hover/link:scale-110',
                            }),
                            'Code',
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        r.id
      )
    ),
  })
}
try {
  ;((n.displayName = 'ProjectGrid'),
    (n.__docgenInfo = {
      description: '',
      displayName: 'ProjectGrid',
      props: {
        projects: {
          defaultValue: null,
          description: '',
          name: 'projects',
          required: !0,
          type: { name: 'Project[]' },
        },
        showFeaturedOnly: {
          defaultValue: null,
          description: '',
          name: 'showFeaturedOnly',
          required: !1,
          type: { name: 'boolean' },
        },
        maxItems: {
          defaultValue: null,
          description: '',
          name: 'maxItems',
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
export { n as P }
