import { r as v, j as e } from './iframe-D02P5oxD.js'
import { L as x } from './link-O0MyjLlL.js'
import { c as g } from './utils-Bzm_o1ou.js'
const b = {
    primary:
      'bg-white text-black hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]',
    secondary:
      'bg-transparent text-white/90 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
    destructive:
      'bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_20px_50px_rgba(239,68,68,0.25)]',
  },
  y = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' },
  s = v.forwardRef(
    (
      {
        children: l,
        variant: o = 'primary',
        size: d = 'md',
        href: t,
        external: u,
        icon: a,
        iconPosition: i = 'right',
        loading: m = !1,
        className: p,
        disabled: c,
        ...h
      },
      f
    ) => {
      const r = g(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 font-sans',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          b[o],
          y[d],
          p
        ),
        n = e.jsxs(e.Fragment, {
          children: [
            a && i === 'left' && e.jsx('span', { className: 'mr-2', children: a }),
            l,
            a && i === 'right' && e.jsx('span', { className: 'ml-2', children: a }),
          ],
        })
      return t
        ? u
          ? e.jsx('a', {
              href: t,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: r,
              children: n,
            })
          : e.jsx(x, { href: t, className: r, children: n })
        : e.jsx('button', { ref: f, className: r, disabled: c || m, ...h, children: n })
    }
  )
s.displayName = 'Button'
try {
  ;((s.displayName = 'Button'),
    (s.__docgenInfo = {
      description: '',
      displayName: 'Button',
      props: {
        variant: {
          defaultValue: { value: 'primary' },
          description: '',
          name: 'variant',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"primary"' },
              { value: '"secondary"' },
              { value: '"ghost"' },
              { value: '"destructive"' },
            ],
          },
        },
        size: {
          defaultValue: { value: 'md' },
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }] },
        },
        href: {
          defaultValue: null,
          description: '',
          name: 'href',
          required: !1,
          type: { name: 'string' },
        },
        external: {
          defaultValue: null,
          description: '',
          name: 'external',
          required: !1,
          type: { name: 'boolean' },
        },
        icon: {
          defaultValue: null,
          description: '',
          name: 'icon',
          required: !1,
          type: { name: 'ReactNode' },
        },
        iconPosition: {
          defaultValue: { value: 'right' },
          description: '',
          name: 'iconPosition',
          required: !1,
          type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }] },
        },
        loading: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'loading',
          required: !1,
          type: { name: 'boolean' },
        },
      },
    }))
} catch {}
export { s as B }
