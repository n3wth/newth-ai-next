import { j as e } from './iframe-D02P5oxD.js'
import { B as r } from './Button-r8z84KSs.js'
import { A as N } from './arrow-right-Bnbe0itW.js'
import { D as M } from './download-11BzjnSA.js'
import { c as a } from './createLucideIcon-FJiH0jrJ.js'
import { M as D } from './mail-DYVrHkpP.js'
import './preload-helper-PPVm8Dsz.js'
import './link-O0MyjLlL.js'
import './utils-Bzm_o1ou.js'
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  P = a('check', A)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C = [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
    ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
  ],
  E = a('external-link', C)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V = [
    [
      'path',
      {
        d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
        key: 'mvr1a0',
      },
    ],
  ],
  _ = a('heart', V)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  w = a('loader-circle', I)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = [
    [
      'path',
      {
        d: 'M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915',
        key: '1i5ecw',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  k = a('settings', G)
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  R = a('x', T),
  K = {
    title: 'Components/Buttons/Button',
    component: r,
    parameters: {
      layout: 'centered',
      backgrounds: { default: 'dark' },
      docs: {
        toc: !0,
        description: {
          component: 'A versatile button component with multiple variants, sizes, and states.',
        },
      },
    },
    decorators: [
      (L) =>
        e.jsx('div', {
          className: 'min-h-[200px] flex items-center justify-center bg-black p-8',
          children: e.jsx(L, {}),
        }),
    ],
    tags: ['autodocs', 'component'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'ghost', 'destructive'],
        description: 'Visual style variant of the button',
        table: {
          type: { summary: '"primary" | "secondary" | "ghost" | "destructive"' },
          defaultValue: { summary: 'primary' },
          category: 'Appearance',
        },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        description: 'Size of the button',
        table: {
          type: { summary: '"sm" | "md" | "lg"' },
          defaultValue: { summary: 'md' },
          category: 'Appearance',
        },
      },
      iconPosition: {
        control: { type: 'select' },
        options: ['left', 'right'],
        description: 'Position of the icon relative to text',
        table: {
          type: { summary: '"left" | "right"' },
          defaultValue: { summary: 'right' },
          category: 'Icon',
        },
      },
      icon: {
        control: !1,
        description: 'Icon element to display in the button',
        table: { type: { summary: 'ReactNode' }, category: 'Icon' },
      },
      href: {
        control: 'text',
        description: 'URL to navigate to (renders button as a link)',
        table: { type: { summary: 'string' }, category: 'Navigation' },
      },
      external: {
        control: 'boolean',
        description: 'Open link in new tab (requires href)',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
          category: 'Navigation',
        },
      },
      disabled: {
        control: 'boolean',
        description: 'Disable button interaction',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
          category: 'State',
        },
      },
      loading: {
        control: 'boolean',
        description: 'Show loading spinner',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
          category: 'State',
        },
      },
      children: {
        control: 'text',
        description: 'Button label text',
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
        table: { type: { summary: '(event: MouseEvent) => void' }, category: 'Events' },
      },
    },
  },
  t = { args: { children: 'Primary Button', variant: 'primary' } },
  s = { args: { children: 'Secondary Button', variant: 'secondary' } },
  n = { args: { children: 'Ghost Button', variant: 'ghost' } },
  i = { name: 'Destructive (New)', args: { children: 'Delete Account', variant: 'destructive' } },
  o = { args: { children: 'Small Button', size: 'sm', variant: 'primary' } },
  c = { args: { children: 'Medium Button', size: 'md', variant: 'primary' } },
  d = { args: { children: 'Large Button', size: 'lg', variant: 'primary' } },
  l = { args: { children: 'Continue', variant: 'primary', icon: e.jsx(N, { size: 16 }) } },
  m = {
    args: {
      children: 'Download',
      variant: 'secondary',
      icon: e.jsx(M, { size: 16 }),
      iconPosition: 'left',
    },
  },
  p = {
    args: {
      'aria-label': 'Settings',
      variant: 'ghost',
      size: 'sm',
      children: e.jsx(k, { size: 16 }),
    },
  },
  u = {
    args: {
      children: 'Saving...',
      variant: 'primary',
      loading: !0,
      icon: e.jsx(w, { className: 'animate-spin', size: 16 }),
      iconPosition: 'left',
    },
  },
  g = { args: { children: 'Disabled Button', variant: 'primary', disabled: !0 } },
  h = {
    args: {
      children: 'Success!',
      variant: 'primary',
      className: 'bg-green-600 hover:bg-green-700',
      icon: e.jsx(P, { size: 16 }),
    },
  },
  y = { args: { children: 'Failed', variant: 'destructive', icon: e.jsx(R, { size: 16 }) } },
  v = {
    args: {
      children: 'View Dashboard',
      href: '/dashboard',
      variant: 'primary',
      icon: e.jsx(N, { size: 16 }),
    },
  },
  b = {
    name: 'External Link',
    args: {
      children: 'View Documentation',
      href: 'https://example.com',
      external: !0,
      variant: 'secondary',
      icon: e.jsx(E, { size: 16 }),
    },
  },
  f = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex gap-3',
        children: [
          e.jsx(r, { variant: 'primary', children: 'Save Changes' }),
          e.jsx(r, { variant: 'secondary', children: 'Cancel' }),
        ],
      }),
  },
  x = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex gap-1 p-2 bg-gray-900 rounded-lg',
        children: [
          e.jsx(r, {
            variant: 'ghost',
            size: 'sm',
            'aria-label': 'Mail',
            children: e.jsx(D, { size: 16 }),
          }),
          e.jsx(r, {
            variant: 'ghost',
            size: 'sm',
            'aria-label': 'Settings',
            children: e.jsx(k, { size: 16 }),
          }),
          e.jsx(r, {
            variant: 'ghost',
            size: 'sm',
            'aria-label': 'Favorites',
            children: e.jsx(_, { size: 16 }),
          }),
        ],
      }),
  },
  B = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex items-center gap-4',
        children: [
          e.jsx(r, { size: 'sm', variant: 'primary', children: 'Small' }),
          e.jsx(r, { size: 'md', variant: 'primary', children: 'Medium' }),
          e.jsx(r, { size: 'lg', variant: 'primary', children: 'Large' }),
        ],
      }),
  },
  S = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex flex-wrap gap-4',
        children: [
          e.jsx(r, { variant: 'primary', children: 'Primary' }),
          e.jsx(r, { variant: 'secondary', children: 'Secondary' }),
          e.jsx(r, { variant: 'ghost', children: 'Ghost' }),
          e.jsx(r, { variant: 'destructive', children: 'Destructive' }),
        ],
      }),
  },
  z = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'flex flex-wrap gap-4',
        children: [
          e.jsx(r, {
            variant: 'primary',
            loading: !0,
            icon: e.jsx(w, { className: 'animate-spin', size: 16 }),
            iconPosition: 'left',
            children: 'Saving...',
          }),
          e.jsx(r, {
            variant: 'secondary',
            loading: !0,
            icon: e.jsx(w, { className: 'animate-spin', size: 16 }),
            iconPosition: 'left',
            children: 'Processing...',
          }),
          e.jsx(r, {
            variant: 'ghost',
            loading: !0,
            icon: e.jsx(w, { className: 'animate-spin', size: 16 }),
            iconPosition: 'left',
            children: 'Loading...',
          }),
        ],
      }),
  },
  j = {
    args: { children: 'Button' },
    render: () =>
      e.jsxs('div', {
        className: 'space-y-3 max-w-sm',
        children: [
          e.jsx(r, {
            variant: 'primary',
            size: 'lg',
            className: 'w-full',
            children: 'Get Started',
          }),
          e.jsx(r, {
            variant: 'secondary',
            size: 'lg',
            className: 'w-full',
            children: 'Learn More',
          }),
          e.jsxs('div', {
            className: 'grid grid-cols-2 gap-3',
            children: [
              e.jsx(r, { variant: 'ghost', size: 'md', children: 'Skip' }),
              e.jsx(r, { variant: 'primary', size: 'md', children: 'Next' }),
            ],
          }),
        ],
      }),
  }
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,
      ...t.parameters?.docs?.source,
    },
    description: {
      story: `The primary button is used for the main call-to-action on a page or within a section.
Use sparingly - typically one primary button per section.`,
      ...t.parameters?.docs?.description,
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
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,
      ...s.parameters?.docs?.source,
    },
    description: {
      story: `Secondary buttons are used for alternative actions or less important CTAs.
They provide visual hierarchy without competing with primary actions.`,
      ...s.parameters?.docs?.description,
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
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,
      ...n.parameters?.docs?.source,
    },
    description: {
      story: `Ghost buttons are subtle and used for tertiary actions or in toolbars.
They have minimal visual weight until hovered.`,
      ...n.parameters?.docs?.description,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Destructive (New)',
  args: {
    children: 'Delete Account',
    variant: 'destructive'
  }
}`,
      ...i.parameters?.docs?.source,
    },
    description: {
      story: `Destructive buttons are used for dangerous actions like deleting data.
Always pair with confirmation dialogs for critical actions.`,
      ...i.parameters?.docs?.description,
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
    children: 'Small Button',
    size: 'sm',
    variant: 'primary'
  }
}`,
      ...o.parameters?.docs?.source,
    },
    description: {
      story: 'Small buttons are used in compact spaces like tables or inline with text.',
      ...o.parameters?.docs?.description,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Medium Button',
    size: 'md',
    variant: 'primary'
  }
}`,
      ...c.parameters?.docs?.source,
    },
    description: {
      story: 'Medium is the default size, suitable for most use cases.',
      ...c.parameters?.docs?.description,
    },
  },
}
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'primary'
  }
}`,
      ...d.parameters?.docs?.source,
    },
    description: {
      story: 'Large buttons are used for prominent CTAs or on mobile interfaces.',
      ...d.parameters?.docs?.description,
    },
  },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Continue',
    variant: 'primary',
    icon: <ArrowRight size={16} />
  }
}`,
      ...l.parameters?.docs?.source,
    },
    description: {
      story: `Buttons can include icons to reinforce their action.
Icons appear on the right by default.`,
      ...l.parameters?.docs?.description,
    },
  },
}
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Download',
    variant: 'secondary',
    icon: <Download size={16} />,
    iconPosition: 'left'
  }
}`,
      ...m.parameters?.docs?.source,
    },
    description: {
      story: 'Icons can be positioned on the left for actions like "back" or "download".',
      ...m.parameters?.docs?.description,
    },
  },
}
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    'aria-label': 'Settings',
    variant: 'ghost',
    size: 'sm',
    children: <Settings size={16} />
  }
}`,
      ...p.parameters?.docs?.source,
    },
    description: {
      story: `Icon-only buttons save space in toolbars and navigation.
Always include an aria-label for accessibility.`,
      ...p.parameters?.docs?.description,
    },
  },
}
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Saving...',
    variant: 'primary',
    loading: true,
    icon: <Loader2 className="animate-spin" size={16} />,
    iconPosition: 'left'
  }
}`,
      ...u.parameters?.docs?.source,
    },
    description: {
      story: `Loading state shows a spinner and disables interaction.
Use when waiting for an async action to complete.`,
      ...u.parameters?.docs?.description,
    },
  },
}
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
}`,
      ...g.parameters?.docs?.source,
    },
    description: {
      story: `Disabled buttons prevent user interaction.
Use sparingly and provide context for why the action is unavailable.`,
      ...g.parameters?.docs?.description,
    },
  },
}
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Success!',
    variant: 'primary',
    className: 'bg-green-600 hover:bg-green-700',
    icon: <Check size={16} />
  }
}`,
      ...h.parameters?.docs?.source,
    },
    description: {
      story: 'Success state can be shown temporarily after a successful action.',
      ...h.parameters?.docs?.description,
    },
  },
}
y.parameters = {
  ...y.parameters,
  docs: {
    ...y.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Failed',
    variant: 'destructive',
    icon: <X size={16} />
  }
}`,
      ...y.parameters?.docs?.source,
    },
    description: {
      story: 'Error state indicates a failed action.',
      ...y.parameters?.docs?.description,
    },
  },
}
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'View Dashboard',
    href: '/dashboard',
    variant: 'primary',
    icon: <ArrowRight size={16} />
  }
}`,
      ...v.parameters?.docs?.source,
    },
    description: {
      story: `Buttons can act as links for navigation.
They render as anchor tags while maintaining button styling.`,
      ...v.parameters?.docs?.description,
    },
  },
}
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: `{
  name: 'External Link',
  args: {
    children: 'View Documentation',
    href: 'https://example.com',
    external: true,
    variant: 'secondary',
    icon: <ExternalLink size={16} />
  }
}`,
      ...b.parameters?.docs?.source,
    },
    description: {
      story: 'External links open in a new tab and should indicate this behavior.',
      ...b.parameters?.docs?.description,
    },
  },
}
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex gap-3">
      <Button variant="primary">Save Changes</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
}`,
      ...f.parameters?.docs?.source,
    },
    description: {
      story: 'A common button group pattern for forms.',
      ...f.parameters?.docs?.description,
    },
  },
}
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex gap-1 p-2 bg-gray-900 rounded-lg">
      <Button variant="ghost" size="sm" aria-label="Mail">
        <Mail size={16} />
      </Button>
      <Button variant="ghost" size="sm" aria-label="Settings">
        <Settings size={16} />
      </Button>
      <Button variant="ghost" size="sm" aria-label="Favorites">
        <Heart size={16} />
      </Button>
    </div>
}`,
      ...x.parameters?.docs?.source,
    },
    description: { story: 'Toolbar with icon buttons.', ...x.parameters?.docs?.description },
  },
}
B.parameters = {
  ...B.parameters,
  docs: {
    ...B.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex items-center gap-4">
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
}`,
      ...B.parameters?.docs?.source,
    },
    description: {
      story: 'Different button sizes in context.',
      ...B.parameters?.docs?.description,
    },
  },
}
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
}`,
      ...S.parameters?.docs?.source,
    },
    description: {
      story: 'All variants for visual comparison.',
      ...S.parameters?.docs?.description,
    },
  },
}
z.parameters = {
  ...z.parameters,
  docs: {
    ...z.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="primary" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">
        Saving...
      </Button>
      <Button variant="secondary" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">
        Processing...
      </Button>
      <Button variant="ghost" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">
        Loading...
      </Button>
    </div>
}`,
      ...z.parameters?.docs?.source,
    },
    description: {
      story: 'Loading states across different variants.',
      ...z.parameters?.docs?.description,
    },
  },
}
j.parameters = {
  ...j.parameters,
  docs: {
    ...j.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'Button'
  },
  render: () => <div className="space-y-3 max-w-sm">
      <Button variant="primary" size="lg" className="w-full">
        Get Started
      </Button>
      <Button variant="secondary" size="lg" className="w-full">
        Learn More
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="ghost" size="md">
          Skip
        </Button>
        <Button variant="primary" size="md">
          Next
        </Button>
      </div>
    </div>
}`,
      ...j.parameters?.docs?.source,
    },
    description: { story: 'Mobile-friendly button examples.', ...j.parameters?.docs?.description },
  },
}
const Q = [
  'Primary',
  'Secondary',
  'Ghost',
  'Destructive',
  'Small',
  'Medium',
  'Large',
  'WithIconRight',
  'WithIconLeft',
  'IconOnly',
  'Loading',
  'Disabled',
  'Success',
  'Error',
  'AsLink',
  'ExternalLinkButton',
  'ButtonGroup',
  'Toolbar',
  'SizeComparison',
  'AllVariants',
  'LoadingStates',
  'MobileButtons',
]
export {
  S as AllVariants,
  v as AsLink,
  f as ButtonGroup,
  i as Destructive,
  g as Disabled,
  y as Error,
  b as ExternalLinkButton,
  n as Ghost,
  p as IconOnly,
  d as Large,
  u as Loading,
  z as LoadingStates,
  c as Medium,
  j as MobileButtons,
  t as Primary,
  s as Secondary,
  B as SizeComparison,
  o as Small,
  h as Success,
  x as Toolbar,
  m as WithIconLeft,
  l as WithIconRight,
  Q as __namedExportsOrder,
  K as default,
}
