import { j as e } from './iframe-D02P5oxD.js'
import { S as a } from './SimpleAnimatedButton-CMMme-ft.js'
import { c as o } from './createLucideIcon-FJiH0jrJ.js'
import { M as i } from './mail-DYVrHkpP.js'
import './preload-helper-PPVm8Dsz.js'
import './link-O0MyjLlL.js'
import './proxy-BHIPz7UP.js'
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c = [
    [
      'path',
      {
        d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
        key: '1s2grr',
      },
    ],
    ['path', { d: 'M20 2v4', key: '1rf3ol' }],
    ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
    ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
  ],
  m = o('sparkles', c),
  S = {
    title: 'Components/Buttons/Simple Animated',
    component: a,
    parameters: {
      layout: 'centered',
      backgrounds: { default: 'dark' },
      docs: { description: { component: 'Lightweight animated button with hover effects' } },
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'ghost'],
        description: 'Visual style variant',
        table: {
          type: { summary: '"primary" | "secondary" | "ghost"' },
          defaultValue: { summary: 'primary' },
          category: 'Appearance',
        },
      },
      children: {
        control: 'text',
        description: 'Button content',
        table: { type: { summary: 'ReactNode' }, category: 'Content' },
      },
      className: {
        control: 'text',
        description: 'Additional CSS classes',
        table: { type: { summary: 'string' }, category: 'Styling' },
      },
      onClick: {
        action: 'clicked',
        description: 'Click event handler',
        table: { type: { summary: '() => void' }, category: 'Events' },
      },
    },
  },
  r = { args: { children: 'Get Started', variant: 'primary' } },
  t = { args: { children: 'Learn More', variant: 'secondary' } },
  s = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex gap-4',
        children: [
          e.jsxs(a, {
            variant: 'primary',
            children: [e.jsx(m, { className: 'mr-2 h-4 w-4' }), 'AI Powered'],
          }),
          e.jsxs(a, {
            variant: 'secondary',
            children: ['Contact Us', e.jsx(i, { className: 'ml-2 h-4 w-4' })],
          }),
        ],
      }),
  },
  n = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex items-center gap-4',
        children: [
          e.jsx(a, { className: 'text-sm py-1.5 px-3', children: 'Small' }),
          e.jsx(a, { children: 'Medium' }),
          e.jsx(a, { className: 'text-lg py-3 px-6', children: 'Large' }),
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
    children: 'Get Started',
    variant: 'primary'
  }
}`,
      ...r.parameters?.docs?.source,
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
    children: 'Learn More',
    variant: 'secondary'
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
    children: 'Button'
  },
  render: () => <div className="flex gap-4">
      <SimpleAnimatedButton variant="primary">
        <Sparkles className="mr-2 h-4 w-4" />
        AI Powered
      </SimpleAnimatedButton>
      <SimpleAnimatedButton variant="secondary">
        Contact Us
        <Mail className="ml-2 h-4 w-4" />
      </SimpleAnimatedButton>
    </div>
}`,
      ...s.parameters?.docs?.source,
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
    children: 'Button'
  },
  render: () => <div className="flex items-center gap-4">
      <SimpleAnimatedButton className="text-sm py-1.5 px-3">Small</SimpleAnimatedButton>
      <SimpleAnimatedButton>Medium</SimpleAnimatedButton>
      <SimpleAnimatedButton className="text-lg py-3 px-6">Large</SimpleAnimatedButton>
    </div>
}`,
      ...n.parameters?.docs?.source,
    },
  },
}
const x = ['Primary', 'Secondary', 'WithIcons', 'Sizes']
export {
  r as Primary,
  t as Secondary,
  n as Sizes,
  s as WithIcons,
  x as __namedExportsOrder,
  S as default,
}
