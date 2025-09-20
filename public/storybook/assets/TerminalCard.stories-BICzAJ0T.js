import { r as m, j as e } from './iframe-D02P5oxD.js'
import { c as u, a as c } from './design-system-D6hAg_Yw.js'
import { m as x } from './proxy-BHIPz7UP.js'
import './preload-helper-PPVm8Dsz.js'
const n = m.memo(function ({ variant: t = 'default', className: i, children: d, hover: l = !0 }) {
  const p = u(c.card[t].base, l && c.card[t].hover, i)
  return e.jsx(x.div, {
    whileHover: l ? { scale: 1.02 } : void 0,
    transition: { type: 'spring', stiffness: 300 },
    className: p,
    children: d,
  })
})
try {
  ;((n.displayName = 'TerminalCard'),
    (n.__docgenInfo = {
      description: '',
      displayName: 'TerminalCard',
      props: {
        variant: {
          defaultValue: null,
          description: '',
          name: 'variant',
          required: !1,
          type: { name: 'enum', value: [{ value: '"default"' }, { value: '"elevated"' }] },
        },
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
        hover: {
          defaultValue: null,
          description: '',
          name: 'hover',
          required: !1,
          type: { name: 'boolean' },
        },
      },
    }))
} catch {}
const h = {
    title: 'Components/Cards/Terminal',
    component: n,
    parameters: {
      layout: 'centered',
      backgrounds: { default: 'dark' },
      docs: {
        description: { component: 'Terminal-style card with ASCII borders and monospace text' },
      },
    },
    argTypes: {},
  },
  s = {
    args: {
      children: e.jsxs('div', {
        className: 'space-y-2',
        children: [
          e.jsx('p', { className: 'text-green-400', children: '$ npm run build' }),
          e.jsx('p', { className: 'text-gray-400', children: 'Building for production...' }),
          e.jsx('p', { className: 'text-blue-400', children: '✓ Compiled successfully' }),
        ],
      }),
    },
  },
  a = {
    args: {
      children: e.jsxs('div', {
        className: 'space-y-2 font-mono text-sm',
        children: [
          e.jsxs('div', {
            className: 'flex justify-between',
            children: [
              e.jsx('span', { className: 'text-gray-400', children: 'CPU:' }),
              e.jsx('span', { className: 'text-green-400', children: '12%' }),
            ],
          }),
          e.jsxs('div', {
            className: 'flex justify-between',
            children: [
              e.jsx('span', { className: 'text-gray-400', children: 'Memory:' }),
              e.jsx('span', { className: 'text-yellow-400', children: '67%' }),
            ],
          }),
          e.jsxs('div', {
            className: 'flex justify-between',
            children: [
              e.jsx('span', { className: 'text-gray-400', children: 'Disk:' }),
              e.jsx('span', { className: 'text-red-400', children: '89%' }),
            ],
          }),
        ],
      }),
    },
  },
  r = {
    args: {
      children: e.jsx('pre', {
        className: 'text-sm text-gray-300',
        children: e.jsx('code', {
          children: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);`,
        }),
      }),
    },
  }
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: <div className="space-y-2">
        <p className="text-green-400">$ npm run build</p>
        <p className="text-gray-400">Building for production...</p>
        <p className="text-blue-400">✓ Compiled successfully</p>
      </div>
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: <div className="space-y-2 font-mono text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">CPU:</span>
          <span className="text-green-400">12%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className="text-yellow-400">67%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Disk:</span>
          <span className="text-red-400">89%</span>
        </div>
      </div>
  }
}`,
      ...a.parameters?.docs?.source,
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
    children: <pre className="text-sm text-gray-300">
        <code>{\`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);\`}</code>
      </pre>
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
const j = ['Default', 'SystemInfo', 'CodeBlock']
export { r as CodeBlock, s as Default, a as SystemInfo, j as __namedExportsOrder, h as default }
