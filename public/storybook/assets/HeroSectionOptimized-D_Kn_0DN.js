import { j as e } from './iframe-D02P5oxD.js'
import { W as l } from './WarpBackground-CZe-78A1.js'
import { S as i } from './SimpleAnimatedButton-CMMme-ft.js'
import { A as o } from './arrow-right-Bnbe0itW.js'
import { C as c } from './chevron-down-BEOEM9hO.js'
function a({
  title: t = { line1: 'I ship AI products', line2: 'at massive scale.' },
  subtitle:
    n = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
  primaryCTA: r = { text: 'See My Work', href: '#projects' },
  secondaryCTA: s = { text: 'Get in Touch', href: '/contact' },
}) {
  return e.jsxs('section', {
    className:
      'relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center',
    children: [
      e.jsx(l, { className: 'absolute inset-0' }),
      e.jsx('div', {
        className:
          'relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8',
        children: e.jsx('div', {
          className: 'w-full text-center',
          children: e.jsxs('div', {
            className: 'space-y-6 md:space-y-8',
            children: [
              e.jsxs('h1', {
                className:
                  'text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-[-0.02em] leading-[1.05] text-white',
                children: [
                  e.jsx('span', { className: 'block', children: t.line1 }),
                  e.jsx('span', {
                    className:
                      'block bg-gradient-to-br from-violet-200 via-purple-200 to-violet-400 bg-clip-text text-transparent',
                    children: t.line2,
                  }),
                ],
              }),
              e.jsx('p', {
                className:
                  'text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-[1.6] font-light px-6',
                children: n,
              }),
              e.jsxs('div', {
                className: 'flex flex-col sm:flex-row gap-4 justify-center pt-4',
                children: [
                  e.jsxs(i, {
                    href: r.href,
                    variant: 'primary',
                    children: [r.text, e.jsx(o, { className: 'ml-2 h-4 w-4' })],
                  }),
                  e.jsx(i, { href: s.href, variant: 'secondary', children: s.text }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsx('div', {
        className: 'absolute bottom-10 left-1/2 -translate-x-1/2 z-10',
        children: e.jsx(c, { className: 'h-6 w-6 text-white/40 animate-bounce' }),
      }),
    ],
  })
}
try {
  ;((a.displayName = 'HeroSection'),
    (a.__docgenInfo = {
      description: '',
      displayName: 'HeroSection',
      props: {
        title: {
          defaultValue: {
            value: `{
    line1: 'I ship AI products',
    line2: 'at massive scale.',
  }`,
          },
          description: '',
          name: 'title',
          required: !1,
          type: { name: '{ line1: string; line2: string; }' },
        },
        subtitle: {
          defaultValue: {
            value:
              'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
          },
          description: '',
          name: 'subtitle',
          required: !1,
          type: { name: 'string' },
        },
        primaryCTA: {
          defaultValue: {
            value: `{
    text: 'See My Work',
    href: '#projects',
  }`,
          },
          description: '',
          name: 'primaryCTA',
          required: !1,
          type: { name: '{ text: string; href: string; }' },
        },
        secondaryCTA: {
          defaultValue: {
            value: `{
    text: 'Get in Touch',
    href: '/contact',
  }`,
          },
          description: '',
          name: 'secondaryCTA',
          required: !1,
          type: { name: '{ text: string; href: string; }' },
        },
      },
    }))
} catch {}
export { a as H }
