import { j as e } from './iframe-D02P5oxD.js'
import { L as x } from './link-O0MyjLlL.js'
import { c as b, a as m } from './design-system-D6hAg_Yw.js'
import './preload-helper-PPVm8Dsz.js'
function i({
  href: r,
  onClick: u,
  variant: d = 'primary',
  size: p = 'md',
  children: f,
  className: g,
  external: h = !1,
}) {
  const y = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' },
    c = b(m.button[d].base, m.button[d].hover, y[p], 'uppercase tracking-wider', g),
    l = e.jsxs(e.Fragment, {
      children: [
        e.jsx('span', { className: 'text-gray-600', children: '[' }),
        f,
        e.jsx('span', { className: 'text-gray-600', children: ']' }),
      ],
    })
  return r
    ? h
      ? e.jsx('a', {
          href: r,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: c,
          children: l,
        })
      : e.jsx(x, { href: r, className: c, children: l })
    : e.jsx('button', { onClick: u, className: c, children: l })
}
try {
  ;((i.displayName = 'TerminalButton'),
    (i.__docgenInfo = {
      description: '',
      displayName: 'TerminalButton',
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
          type: {
            name: 'enum',
            value: [{ value: '"primary"' }, { value: '"secondary"' }, { value: '"ghost"' }],
          },
        },
        size: {
          defaultValue: { value: 'md' },
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }] },
        },
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
        external: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'external',
          required: !1,
          type: { name: 'boolean' },
        },
      },
    }))
} catch {}
const C = {
    title: 'Components/Buttons/Terminal',
    component: i,
    parameters: {
      layout: 'centered',
      backgrounds: { default: 'dark' },
      docs: {
        description: { component: 'Terminal-style button with typewriter effect and ASCII border' },
      },
    },
    argTypes: { href: { control: 'text' } },
  },
  a = { args: { children: 'Execute Command' } },
  n = { args: { children: 'Deploy Project' } },
  t = { args: { children: 'View Documentation', href: '/docs' } },
  s = { args: { children: 'View Source', href: 'https://github.com' } },
  o = { args: { children: 'Download CLI', onClick: () => alert('Download started!') } }
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Execute Command'
  }
}`,
      ...a.parameters?.docs?.source,
    },
  },
}
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Deploy Project'
  }
}`,
      ...n.parameters?.docs?.source,
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
    children: 'View Documentation',
    href: '/docs'
  }
}`,
      ...t.parameters?.docs?.source,
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
    children: 'View Source',
    href: 'https://github.com'
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
    children: 'Download CLI',
    onClick: () => alert('Download started!')
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
const V = ['Default', 'WithIcon', 'AsLink', 'GitHubLink', 'DownloadAction']
export {
  t as AsLink,
  a as Default,
  o as DownloadAction,
  s as GitHubLink,
  n as WithIcon,
  V as __namedExportsOrder,
  C as default,
}
