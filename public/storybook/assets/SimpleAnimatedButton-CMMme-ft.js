import { j as a } from './iframe-D02P5oxD.js'
import { L as m } from './link-O0MyjLlL.js'
import { m as c } from './proxy-BHIPz7UP.js'
function r({ href: e, onClick: i, children: s, variant: l = 'primary', className: o = '' }) {
  const t = `
    inline-flex items-center justify-center
    px-7 py-3.5
    text-base font-medium
    rounded-xl
    transition-all duration-300
    select-none
    ${{ primary: 'bg-white text-black hover:bg-gray-200 transition-colors', secondary: 'bg-transparent text-white border border-white/30 hover:bg-white hover:text-black transition-all' }[l]}
    ${o}
  `,
    n = a.jsx(c.span, {
      className: 'flex items-center gap-2',
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      transition: { type: 'spring', stiffness: 400, damping: 20 },
      children: s,
    })
  return e
    ? a.jsx(m, { href: e, className: t, children: n })
    : a.jsx('button', { onClick: i, className: t, children: n })
}
try {
  ;((r.displayName = 'SimpleAnimatedButton'),
    (r.__docgenInfo = {
      description: '',
      displayName: 'SimpleAnimatedButton',
      props: {
        href: {
          defaultValue: null,
          description: '',
          name: 'href',
          required: !1,
          type: { name: 'string' },
        },
        onClick: {
          defaultValue: null,
          description: '',
          name: 'onClick',
          required: !1,
          type: { name: '(() => void)' },
        },
        variant: {
          defaultValue: { value: 'primary' },
          description: '',
          name: 'variant',
          required: !1,
          type: { name: 'enum', value: [{ value: '"primary"' }, { value: '"secondary"' }] },
        },
        className: {
          defaultValue: { value: '' },
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
      },
    }))
} catch {}
export { r as S }
