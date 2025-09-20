import { j as n } from './iframe-D02P5oxD.js'
import { c as t } from './utils-Bzm_o1ou.js'
const i = { sm: 'max-w-2xl', md: 'max-w-4xl', lg: 'max-w-6xl', xl: 'max-w-7xl', full: 'max-w-full' }
function a({ children: e, className: l, size: s = 'xl' }) {
  return n.jsx('div', { className: t('mx-auto px-4 sm:px-6 lg:px-8', i[s], l), children: e })
}
try {
  ;((a.displayName = 'Container'),
    (a.__docgenInfo = {
      description: '',
      displayName: 'Container',
      props: {
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
        size: {
          defaultValue: { value: 'xl' },
          description: '',
          name: 'size',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"sm"' },
              { value: '"md"' },
              { value: '"lg"' },
              { value: '"xl"' },
              { value: '"full"' },
            ],
          },
        },
      },
    }))
} catch {}
const o = { github: 'https://github.com/n3wth', linkedin: 'https://linkedin.com/in/newth' }
export { a as C, o as s }
