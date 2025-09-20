import { j as e } from './iframe-D02P5oxD.js'
import { B as a } from './Button-r8z84KSs.js'
import { C as i, s as r } from './social-DvTmwasA.js'
function s({
  title: t = 'Ready to ship something amazing?',
  subtitle: n = 'I work with teams that move fast and dream big.',
}) {
  return e.jsx('section', {
    className: 'py-32 bg-black',
    children: e.jsx(i, {
      children: e.jsxs('div', {
        className: 'text-center',
        children: [
          e.jsx('h2', {
            className: 'text-3xl sm:text-4xl font-normal mb-6 text-white font-sans',
            children: t,
          }),
          e.jsx('p', { className: 'text-lg text-gray-400 mb-12 font-sans', children: n }),
          e.jsxs('div', {
            className: 'flex flex-col sm:flex-row gap-4 justify-center mb-8',
            children: [
              e.jsx(a, { href: r.github, external: !0, variant: 'primary', children: 'GitHub' }),
              e.jsx(a, {
                href: r.linkedin,
                external: !0,
                variant: 'secondary',
                children: 'LinkedIn',
              }),
            ],
          }),
          e.jsx('div', {
            className: 'pt-8 border-t border-gray-800',
            children: e.jsx('a', {
              href: 'https://storybook.newth.ai',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-sm text-gray-500 hover:text-gray-300 transition-colors',
              children: 'Component Library →',
            }),
          }),
        ],
      }),
    }),
  })
}
try {
  ;((s.displayName = 'ContactSection'),
    (s.__docgenInfo = {
      description: '',
      displayName: 'ContactSection',
      props: {
        title: {
          defaultValue: { value: 'Ready to ship something amazing?' },
          description: '',
          name: 'title',
          required: !1,
          type: { name: 'string' },
        },
        subtitle: {
          defaultValue: { value: 'I work with teams that move fast and dream big.' },
          description: '',
          name: 'subtitle',
          required: !1,
          type: { name: 'string' },
        },
      },
    }))
} catch {}
export { s as C }
