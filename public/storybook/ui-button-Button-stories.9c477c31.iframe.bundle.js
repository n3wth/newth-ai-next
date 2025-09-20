/*! For license information please see ui-button-Button-stories.9c477c31.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [687],
  {
    './components/ui/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./lib/utils.ts')
      const variants = {
          primary:
            'bg-white text-black hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]',
          secondary:
            'bg-transparent text-white/90 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]',
          ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
          destructive:
            'bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_20px_50px_rgba(239,68,68,0.25)]',
        },
        sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' },
        Button = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
          (
            {
              children,
              variant = 'primary',
              size = 'md',
              href,
              external,
              icon,
              iconPosition = 'right',
              loading = !1,
              className,
              disabled,
              ...props
            },
            ref
          ) => {
            const classes = (0, _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 font-sans',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
              ),
              content = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    icon &&
                      'left' === iconPosition &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                        className: 'mr-2',
                        children: icon,
                      }),
                    children,
                    icon &&
                      'right' === iconPosition &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                        className: 'ml-2',
                        children: icon,
                      }),
                  ],
                }
              )
            return href
              ? external
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('a', {
                    href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: classes,
                    children: content,
                  })
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                    { href, className: classes, children: content }
                  )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
                  ref,
                  className: classes,
                  disabled: disabled || loading,
                  ...props,
                  children: content,
                })
          }
        )
      Button.displayName = 'Button'
      try {
        ;((Button.displayName = 'Button'),
          (Button.__docgenInfo = {
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
                type: {
                  name: 'enum',
                  value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }],
                },
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'components/ui/Button.tsx#Button',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/ui/button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllVariants: () => AllVariants,
          AsLink: () => AsLink,
          ButtonGroup: () => ButtonGroup,
          Destructive: () => Destructive,
          Disabled: () => Disabled,
          Error: () => Error,
          ExternalLinkButton: () => ExternalLinkButton,
          Ghost: () => Ghost,
          IconOnly: () => IconOnly,
          Large: () => Large,
          Loading: () => Loading,
          LoadingStates: () => LoadingStates,
          Medium: () => Medium,
          MobileButtons: () => MobileButtons,
          Primary: () => Primary,
          Secondary: () => Secondary,
          SizeComparison: () => SizeComparison,
          Small: () => Small,
          Success: () => Success,
          Toolbar: () => Toolbar,
          WithIconLeft: () => WithIconLeft,
          WithIconRight: () => WithIconRight,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        ui_Button = __webpack_require__('./components/ui/Button.tsx'),
        arrow_right = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/arrow-right.js'
        ),
        download = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/download.js'),
        createLucideIcon = __webpack_require__(
          './node_modules/lucide-react/dist/esm/createLucideIcon.js'
        )
      const Settings = (0, createLucideIcon.A)('settings', [
          [
            'path',
            {
              d: 'M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915',
              key: '1i5ecw',
            },
          ],
          ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
        ]),
        LoaderCircle = (0, createLucideIcon.A)('loader-circle', [
          ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
        ]),
        Check = (0, createLucideIcon.A)('check', [
          ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
        ]),
        X = (0, createLucideIcon.A)('x', [
          ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
          ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
        ]),
        ExternalLink = (0, createLucideIcon.A)('external-link', [
          ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
          ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
          [
            'path',
            { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' },
          ],
        ])
      var mail = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/mail.js')
      const Heart = (0, createLucideIcon.A)('heart', [
          [
            'path',
            {
              d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
              key: 'mvr1a0',
            },
          ],
        ]),
        Button_stories = {
          title: 'Components/Buttons/Button',
          component: ui_Button.$,
          parameters: {
            layout: 'centered',
            backgrounds: { default: 'dark' },
            docs: {
              toc: !0,
              description: {
                component:
                  'A versatile button component with multiple variants, sizes, and states.',
              },
            },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'min-h-[200px] flex items-center justify-center bg-black p-8',
                children: (0, jsx_runtime.jsx)(Story, {}),
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
        Primary = { args: { children: 'Primary Button', variant: 'primary' } },
        Secondary = { args: { children: 'Secondary Button', variant: 'secondary' } },
        Ghost = { args: { children: 'Ghost Button', variant: 'ghost' } },
        Destructive = {
          name: 'Destructive (New)',
          args: { children: 'Delete Account', variant: 'destructive' },
        },
        Small = { args: { children: 'Small Button', size: 'sm', variant: 'primary' } },
        Medium = { args: { children: 'Medium Button', size: 'md', variant: 'primary' } },
        Large = { args: { children: 'Large Button', size: 'lg', variant: 'primary' } },
        WithIconRight = {
          args: {
            children: 'Continue',
            variant: 'primary',
            icon: (0, jsx_runtime.jsx)(arrow_right.A, { size: 16 }),
          },
        },
        WithIconLeft = {
          args: {
            children: 'Download',
            variant: 'secondary',
            icon: (0, jsx_runtime.jsx)(download.A, { size: 16 }),
            iconPosition: 'left',
          },
        },
        IconOnly = {
          args: {
            'aria-label': 'Settings',
            variant: 'ghost',
            size: 'sm',
            children: (0, jsx_runtime.jsx)(Settings, { size: 16 }),
          },
        },
        Loading = {
          args: {
            children: 'Saving...',
            variant: 'primary',
            loading: !0,
            icon: (0, jsx_runtime.jsx)(LoaderCircle, { className: 'animate-spin', size: 16 }),
            iconPosition: 'left',
          },
        },
        Disabled = { args: { children: 'Disabled Button', variant: 'primary', disabled: !0 } },
        Success = {
          args: {
            children: 'Success!',
            variant: 'primary',
            className: 'bg-green-600 hover:bg-green-700',
            icon: (0, jsx_runtime.jsx)(Check, { size: 16 }),
          },
        },
        Error = {
          args: {
            children: 'Failed',
            variant: 'destructive',
            icon: (0, jsx_runtime.jsx)(X, { size: 16 }),
          },
        },
        AsLink = {
          args: {
            children: 'View Dashboard',
            href: '/dashboard',
            variant: 'primary',
            icon: (0, jsx_runtime.jsx)(arrow_right.A, { size: 16 }),
          },
        },
        ExternalLinkButton = {
          name: 'External Link',
          args: {
            children: 'View Documentation',
            href: 'https://example.com',
            external: !0,
            variant: 'secondary',
            icon: (0, jsx_runtime.jsx)(ExternalLink, { size: 16 }),
          },
        },
        ButtonGroup = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-3',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, { variant: 'primary', children: 'Save Changes' }),
                (0, jsx_runtime.jsx)(ui_Button.$, { variant: 'secondary', children: 'Cancel' }),
              ],
            }),
        },
        Toolbar = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-1 p-2 bg-gray-900 rounded-lg',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'ghost',
                  size: 'sm',
                  'aria-label': 'Mail',
                  children: (0, jsx_runtime.jsx)(mail.A, { size: 16 }),
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'ghost',
                  size: 'sm',
                  'aria-label': 'Settings',
                  children: (0, jsx_runtime.jsx)(Settings, { size: 16 }),
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'ghost',
                  size: 'sm',
                  'aria-label': 'Favorites',
                  children: (0, jsx_runtime.jsx)(Heart, { size: 16 }),
                }),
              ],
            }),
        },
        SizeComparison = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  size: 'sm',
                  variant: 'primary',
                  children: 'Small',
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  size: 'md',
                  variant: 'primary',
                  children: 'Medium',
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  size: 'lg',
                  variant: 'primary',
                  children: 'Large',
                }),
              ],
            }),
        },
        AllVariants = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex flex-wrap gap-4',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, { variant: 'primary', children: 'Primary' }),
                (0, jsx_runtime.jsx)(ui_Button.$, { variant: 'secondary', children: 'Secondary' }),
                (0, jsx_runtime.jsx)(ui_Button.$, { variant: 'ghost', children: 'Ghost' }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'destructive',
                  children: 'Destructive',
                }),
              ],
            }),
        },
        LoadingStates = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex flex-wrap gap-4',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'primary',
                  loading: !0,
                  icon: (0, jsx_runtime.jsx)(LoaderCircle, { className: 'animate-spin', size: 16 }),
                  iconPosition: 'left',
                  children: 'Saving...',
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'secondary',
                  loading: !0,
                  icon: (0, jsx_runtime.jsx)(LoaderCircle, { className: 'animate-spin', size: 16 }),
                  iconPosition: 'left',
                  children: 'Processing...',
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'ghost',
                  loading: !0,
                  icon: (0, jsx_runtime.jsx)(LoaderCircle, { className: 'animate-spin', size: 16 }),
                  iconPosition: 'left',
                  children: 'Loading...',
                }),
              ],
            }),
        },
        MobileButtons = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'space-y-3 max-w-sm',
              children: [
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'primary',
                  size: 'lg',
                  className: 'w-full',
                  children: 'Get Started',
                }),
                (0, jsx_runtime.jsx)(ui_Button.$, {
                  variant: 'secondary',
                  size: 'lg',
                  className: 'w-full',
                  children: 'Learn More',
                }),
                (0, jsx_runtime.jsxs)('div', {
                  className: 'grid grid-cols-2 gap-3',
                  children: [
                    (0, jsx_runtime.jsx)(ui_Button.$, {
                      variant: 'ghost',
                      size: 'md',
                      children: 'Skip',
                    }),
                    (0, jsx_runtime.jsx)(ui_Button.$, {
                      variant: 'primary',
                      size: 'md',
                      children: 'Next',
                    }),
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = [
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
      ;((Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: 'Primary Button',\n    variant: 'primary'\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
          description: {
            story:
              'The primary button is used for the main call-to-action on a page or within a section.\nUse sparingly - typically one primary button per section.',
            ...Primary.parameters?.docs?.description,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Secondary Button',\n    variant: 'secondary'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
            description: {
              story:
                'Secondary buttons are used for alternative actions or less important CTAs.\nThey provide visual hierarchy without competing with primary actions.',
              ...Secondary.parameters?.docs?.description,
            },
          },
        }),
        (Ghost.parameters = {
          ...Ghost.parameters,
          docs: {
            ...Ghost.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Ghost Button',\n    variant: 'ghost'\n  }\n}",
              ...Ghost.parameters?.docs?.source,
            },
            description: {
              story:
                'Ghost buttons are subtle and used for tertiary actions or in toolbars.\nThey have minimal visual weight until hovered.',
              ...Ghost.parameters?.docs?.description,
            },
          },
        }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Destructive (New)',\n  args: {\n    children: 'Delete Account',\n    variant: 'destructive'\n  }\n}",
              ...Destructive.parameters?.docs?.source,
            },
            description: {
              story:
                'Destructive buttons are used for dangerous actions like deleting data.\nAlways pair with confirmation dialogs for critical actions.',
              ...Destructive.parameters?.docs?.description,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Small Button',\n    size: 'sm',\n    variant: 'primary'\n  }\n}",
              ...Small.parameters?.docs?.source,
            },
            description: {
              story: 'Small buttons are used in compact spaces like tables or inline with text.',
              ...Small.parameters?.docs?.description,
            },
          },
        }),
        (Medium.parameters = {
          ...Medium.parameters,
          docs: {
            ...Medium.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Medium Button',\n    size: 'md',\n    variant: 'primary'\n  }\n}",
              ...Medium.parameters?.docs?.source,
            },
            description: {
              story: 'Medium is the default size, suitable for most use cases.',
              ...Medium.parameters?.docs?.description,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Large Button',\n    size: 'lg',\n    variant: 'primary'\n  }\n}",
              ...Large.parameters?.docs?.source,
            },
            description: {
              story: 'Large buttons are used for prominent CTAs or on mobile interfaces.',
              ...Large.parameters?.docs?.description,
            },
          },
        }),
        (WithIconRight.parameters = {
          ...WithIconRight.parameters,
          docs: {
            ...WithIconRight.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Continue',\n    variant: 'primary',\n    icon: <ArrowRight size={16} />\n  }\n}",
              ...WithIconRight.parameters?.docs?.source,
            },
            description: {
              story:
                'Buttons can include icons to reinforce their action.\nIcons appear on the right by default.',
              ...WithIconRight.parameters?.docs?.description,
            },
          },
        }),
        (WithIconLeft.parameters = {
          ...WithIconLeft.parameters,
          docs: {
            ...WithIconLeft.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Download',\n    variant: 'secondary',\n    icon: <Download size={16} />,\n    iconPosition: 'left'\n  }\n}",
              ...WithIconLeft.parameters?.docs?.source,
            },
            description: {
              story: 'Icons can be positioned on the left for actions like "back" or "download".',
              ...WithIconLeft.parameters?.docs?.description,
            },
          },
        }),
        (IconOnly.parameters = {
          ...IconOnly.parameters,
          docs: {
            ...IconOnly.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    'aria-label': 'Settings',\n    variant: 'ghost',\n    size: 'sm',\n    children: <Settings size={16} />\n  }\n}",
              ...IconOnly.parameters?.docs?.source,
            },
            description: {
              story:
                'Icon-only buttons save space in toolbars and navigation.\nAlways include an aria-label for accessibility.',
              ...IconOnly.parameters?.docs?.description,
            },
          },
        }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Saving...',\n    variant: 'primary',\n    loading: true,\n    icon: <Loader2 className=\"animate-spin\" size={16} />,\n    iconPosition: 'left'\n  }\n}",
              ...Loading.parameters?.docs?.source,
            },
            description: {
              story:
                'Loading state shows a spinner and disables interaction.\nUse when waiting for an async action to complete.',
              ...Loading.parameters?.docs?.description,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Disabled Button',\n    variant: 'primary',\n    disabled: true\n  }\n}",
              ...Disabled.parameters?.docs?.source,
            },
            description: {
              story:
                'Disabled buttons prevent user interaction.\nUse sparingly and provide context for why the action is unavailable.',
              ...Disabled.parameters?.docs?.description,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Success!',\n    variant: 'primary',\n    className: 'bg-green-600 hover:bg-green-700',\n    icon: <Check size={16} />\n  }\n}",
              ...Success.parameters?.docs?.source,
            },
            description: {
              story: 'Success state can be shown temporarily after a successful action.',
              ...Success.parameters?.docs?.description,
            },
          },
        }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...Error.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Failed',\n    variant: 'destructive',\n    icon: <X size={16} />\n  }\n}",
              ...Error.parameters?.docs?.source,
            },
            description: {
              story: 'Error state indicates a failed action.',
              ...Error.parameters?.docs?.description,
            },
          },
        }),
        (AsLink.parameters = {
          ...AsLink.parameters,
          docs: {
            ...AsLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'View Dashboard',\n    href: '/dashboard',\n    variant: 'primary',\n    icon: <ArrowRight size={16} />\n  }\n}",
              ...AsLink.parameters?.docs?.source,
            },
            description: {
              story:
                'Buttons can act as links for navigation.\nThey render as anchor tags while maintaining button styling.',
              ...AsLink.parameters?.docs?.description,
            },
          },
        }),
        (ExternalLinkButton.parameters = {
          ...ExternalLinkButton.parameters,
          docs: {
            ...ExternalLinkButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'External Link',\n  args: {\n    children: 'View Documentation',\n    href: 'https://example.com',\n    external: true,\n    variant: 'secondary',\n    icon: <ExternalLink size={16} />\n  }\n}",
              ...ExternalLinkButton.parameters?.docs?.source,
            },
            description: {
              story: 'External links open in a new tab and should indicate this behavior.',
              ...ExternalLinkButton.parameters?.docs?.description,
            },
          },
        }),
        (ButtonGroup.parameters = {
          ...ButtonGroup.parameters,
          docs: {
            ...ButtonGroup.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex gap-3">\n      <Button variant="primary">Save Changes</Button>\n      <Button variant="secondary">Cancel</Button>\n    </div>\n}',
              ...ButtonGroup.parameters?.docs?.source,
            },
            description: {
              story: 'A common button group pattern for forms.',
              ...ButtonGroup.parameters?.docs?.description,
            },
          },
        }),
        (Toolbar.parameters = {
          ...Toolbar.parameters,
          docs: {
            ...Toolbar.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex gap-1 p-2 bg-gray-900 rounded-lg">\n      <Button variant="ghost" size="sm" aria-label="Mail">\n        <Mail size={16} />\n      </Button>\n      <Button variant="ghost" size="sm" aria-label="Settings">\n        <Settings size={16} />\n      </Button>\n      <Button variant="ghost" size="sm" aria-label="Favorites">\n        <Heart size={16} />\n      </Button>\n    </div>\n}',
              ...Toolbar.parameters?.docs?.source,
            },
            description: {
              story: 'Toolbar with icon buttons.',
              ...Toolbar.parameters?.docs?.description,
            },
          },
        }),
        (SizeComparison.parameters = {
          ...SizeComparison.parameters,
          docs: {
            ...SizeComparison.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex items-center gap-4">\n      <Button size="sm" variant="primary">\n        Small\n      </Button>\n      <Button size="md" variant="primary">\n        Medium\n      </Button>\n      <Button size="lg" variant="primary">\n        Large\n      </Button>\n    </div>\n}',
              ...SizeComparison.parameters?.docs?.source,
            },
            description: {
              story: 'Different button sizes in context.',
              ...SizeComparison.parameters?.docs?.description,
            },
          },
        }),
        (AllVariants.parameters = {
          ...AllVariants.parameters,
          docs: {
            ...AllVariants.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex flex-wrap gap-4">\n      <Button variant="primary">Primary</Button>\n      <Button variant="secondary">Secondary</Button>\n      <Button variant="ghost">Ghost</Button>\n      <Button variant="destructive">Destructive</Button>\n    </div>\n}',
              ...AllVariants.parameters?.docs?.source,
            },
            description: {
              story: 'All variants for visual comparison.',
              ...AllVariants.parameters?.docs?.description,
            },
          },
        }),
        (LoadingStates.parameters = {
          ...LoadingStates.parameters,
          docs: {
            ...LoadingStates.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex flex-wrap gap-4">\n      <Button variant="primary" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">\n        Saving...\n      </Button>\n      <Button variant="secondary" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">\n        Processing...\n      </Button>\n      <Button variant="ghost" loading icon={<Loader2 className="animate-spin" size={16} />} iconPosition="left">\n        Loading...\n      </Button>\n    </div>\n}',
              ...LoadingStates.parameters?.docs?.source,
            },
            description: {
              story: 'Loading states across different variants.',
              ...LoadingStates.parameters?.docs?.description,
            },
          },
        }),
        (MobileButtons.parameters = {
          ...MobileButtons.parameters,
          docs: {
            ...MobileButtons.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="space-y-3 max-w-sm">\n      <Button variant="primary" size="lg" className="w-full">\n        Get Started\n      </Button>\n      <Button variant="secondary" size="lg" className="w-full">\n        Learn More\n      </Button>\n      <div className="grid grid-cols-2 gap-3">\n        <Button variant="ghost" size="md">\n          Skip\n        </Button>\n        <Button variant="primary" size="md">\n          Next\n        </Button>\n      </div>\n    </div>\n}',
              ...MobileButtons.parameters?.docs?.source,
            },
            description: {
              story: 'Mobile-friendly button examples.',
              ...MobileButtons.parameters?.docs?.description,
            },
          },
        }))
      try {
        ;((Button.displayName = 'Button'),
          (Button.__docgenInfo = {
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
                type: {
                  name: 'enum',
                  value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }],
                },
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'components/ui/button/Button.stories.tsx#Button',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Primary.displayName = 'Primary'),
          (Primary.__docgenInfo = {
            description:
              'The primary button is used for the main call-to-action on a page or within a section.\nUse sparingly - typically one primary button per section.',
            displayName: 'Primary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Primary'] = {
              docgenInfo: Primary.__docgenInfo,
              name: 'Primary',
              path: 'components/ui/button/Button.stories.tsx#Primary',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Secondary.displayName = 'Secondary'),
          (Secondary.__docgenInfo = {
            description:
              'Secondary buttons are used for alternative actions or less important CTAs.\nThey provide visual hierarchy without competing with primary actions.',
            displayName: 'Secondary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Secondary'] = {
              docgenInfo: Secondary.__docgenInfo,
              name: 'Secondary',
              path: 'components/ui/button/Button.stories.tsx#Secondary',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Ghost.displayName = 'Ghost'),
          (Ghost.__docgenInfo = {
            description:
              'Ghost buttons are subtle and used for tertiary actions or in toolbars.\nThey have minimal visual weight until hovered.',
            displayName: 'Ghost',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Ghost'] = {
              docgenInfo: Ghost.__docgenInfo,
              name: 'Ghost',
              path: 'components/ui/button/Button.stories.tsx#Ghost',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Destructive.displayName = 'Destructive'),
          (Destructive.__docgenInfo = {
            description:
              'Destructive buttons are used for dangerous actions like deleting data.\nAlways pair with confirmation dialogs for critical actions.',
            displayName: 'Destructive',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Destructive'] = {
              docgenInfo: Destructive.__docgenInfo,
              name: 'Destructive',
              path: 'components/ui/button/Button.stories.tsx#Destructive',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Small.displayName = 'Small'),
          (Small.__docgenInfo = {
            description:
              'Small buttons are used in compact spaces like tables or inline with text.',
            displayName: 'Small',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Small'] = {
              docgenInfo: Small.__docgenInfo,
              name: 'Small',
              path: 'components/ui/button/Button.stories.tsx#Small',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Medium.displayName = 'Medium'),
          (Medium.__docgenInfo = {
            description: 'Medium is the default size, suitable for most use cases.',
            displayName: 'Medium',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Medium'] = {
              docgenInfo: Medium.__docgenInfo,
              name: 'Medium',
              path: 'components/ui/button/Button.stories.tsx#Medium',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Large.displayName = 'Large'),
          (Large.__docgenInfo = {
            description: 'Large buttons are used for prominent CTAs or on mobile interfaces.',
            displayName: 'Large',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Large'] = {
              docgenInfo: Large.__docgenInfo,
              name: 'Large',
              path: 'components/ui/button/Button.stories.tsx#Large',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((WithIconRight.displayName = 'WithIconRight'),
          (WithIconRight.__docgenInfo = {
            description:
              'Buttons can include icons to reinforce their action.\nIcons appear on the right by default.',
            displayName: 'WithIconRight',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#WithIconRight'] = {
              docgenInfo: WithIconRight.__docgenInfo,
              name: 'WithIconRight',
              path: 'components/ui/button/Button.stories.tsx#WithIconRight',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((WithIconLeft.displayName = 'WithIconLeft'),
          (WithIconLeft.__docgenInfo = {
            description:
              'Icons can be positioned on the left for actions like "back" or "download".',
            displayName: 'WithIconLeft',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#WithIconLeft'] = {
              docgenInfo: WithIconLeft.__docgenInfo,
              name: 'WithIconLeft',
              path: 'components/ui/button/Button.stories.tsx#WithIconLeft',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((IconOnly.displayName = 'IconOnly'),
          (IconOnly.__docgenInfo = {
            description:
              'Icon-only buttons save space in toolbars and navigation.\nAlways include an aria-label for accessibility.',
            displayName: 'IconOnly',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#IconOnly'] = {
              docgenInfo: IconOnly.__docgenInfo,
              name: 'IconOnly',
              path: 'components/ui/button/Button.stories.tsx#IconOnly',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Loading.displayName = 'Loading'),
          (Loading.__docgenInfo = {
            description:
              'Loading state shows a spinner and disables interaction.\nUse when waiting for an async action to complete.',
            displayName: 'Loading',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Loading'] = {
              docgenInfo: Loading.__docgenInfo,
              name: 'Loading',
              path: 'components/ui/button/Button.stories.tsx#Loading',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Disabled.displayName = 'Disabled'),
          (Disabled.__docgenInfo = {
            description:
              'Disabled buttons prevent user interaction.\nUse sparingly and provide context for why the action is unavailable.',
            displayName: 'Disabled',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Disabled'] = {
              docgenInfo: Disabled.__docgenInfo,
              name: 'Disabled',
              path: 'components/ui/button/Button.stories.tsx#Disabled',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Success.displayName = 'Success'),
          (Success.__docgenInfo = {
            description: 'Success state can be shown temporarily after a successful action.',
            displayName: 'Success',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Success'] = {
              docgenInfo: Success.__docgenInfo,
              name: 'Success',
              path: 'components/ui/button/Button.stories.tsx#Success',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Error.displayName = 'Error'),
          (Error.__docgenInfo = {
            description: 'Error state indicates a failed action.',
            displayName: 'Error',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Error'] = {
              docgenInfo: Error.__docgenInfo,
              name: 'Error',
              path: 'components/ui/button/Button.stories.tsx#Error',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((AsLink.displayName = 'AsLink'),
          (AsLink.__docgenInfo = {
            description:
              'Buttons can act as links for navigation.\nThey render as anchor tags while maintaining button styling.',
            displayName: 'AsLink',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#AsLink'] = {
              docgenInfo: AsLink.__docgenInfo,
              name: 'AsLink',
              path: 'components/ui/button/Button.stories.tsx#AsLink',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((ExternalLinkButton.displayName = 'ExternalLinkButton'),
          (ExternalLinkButton.__docgenInfo = {
            description: 'External links open in a new tab and should indicate this behavior.',
            displayName: 'ExternalLinkButton',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#ExternalLinkButton'] =
              {
                docgenInfo: ExternalLinkButton.__docgenInfo,
                name: 'ExternalLinkButton',
                path: 'components/ui/button/Button.stories.tsx#ExternalLinkButton',
              }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((ButtonGroup.displayName = 'ButtonGroup'),
          (ButtonGroup.__docgenInfo = {
            description: 'A common button group pattern for forms.',
            displayName: 'ButtonGroup',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#ButtonGroup'] = {
              docgenInfo: ButtonGroup.__docgenInfo,
              name: 'ButtonGroup',
              path: 'components/ui/button/Button.stories.tsx#ButtonGroup',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((Toolbar.displayName = 'Toolbar'),
          (Toolbar.__docgenInfo = {
            description: 'Toolbar with icon buttons.',
            displayName: 'Toolbar',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#Toolbar'] = {
              docgenInfo: Toolbar.__docgenInfo,
              name: 'Toolbar',
              path: 'components/ui/button/Button.stories.tsx#Toolbar',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((SizeComparison.displayName = 'SizeComparison'),
          (SizeComparison.__docgenInfo = {
            description: 'Different button sizes in context.',
            displayName: 'SizeComparison',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#SizeComparison'] = {
              docgenInfo: SizeComparison.__docgenInfo,
              name: 'SizeComparison',
              path: 'components/ui/button/Button.stories.tsx#SizeComparison',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((AllVariants.displayName = 'AllVariants'),
          (AllVariants.__docgenInfo = {
            description: 'All variants for visual comparison.',
            displayName: 'AllVariants',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#AllVariants'] = {
              docgenInfo: AllVariants.__docgenInfo,
              name: 'AllVariants',
              path: 'components/ui/button/Button.stories.tsx#AllVariants',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((LoadingStates.displayName = 'LoadingStates'),
          (LoadingStates.__docgenInfo = {
            description: 'Loading states across different variants.',
            displayName: 'LoadingStates',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#LoadingStates'] = {
              docgenInfo: LoadingStates.__docgenInfo,
              name: 'LoadingStates',
              path: 'components/ui/button/Button.stories.tsx#LoadingStates',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((MobileButtons.displayName = 'MobileButtons'),
          (MobileButtons.__docgenInfo = {
            description: 'Mobile-friendly button examples.',
            displayName: 'MobileButtons',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/button/Button.stories.tsx#MobileButtons'] = {
              docgenInfo: MobileButtons.__docgenInfo,
              name: 'MobileButtons',
              path: 'components/ui/button/Button.stories.tsx#MobileButtons',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/utils.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn })
      var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/clsx/dist/clsx.mjs'
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/tailwind-merge/dist/bundle-mjs.mjs'
        )
      function cn(...inputs) {
        return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.QP)(
          (0, clsx__WEBPACK_IMPORTED_MODULE_0__.$)(inputs)
        )
      }
    },
    './node_modules/lucide-react/dist/esm/createLucideIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => createLucideIcon })
      var react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      const toPascalCase = (string) => {
          const camelCase = ((string) =>
            string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
              p2 ? p2.toUpperCase() : p1.toLowerCase()
            ))(string)
          return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
        },
        mergeClasses = (...classes) =>
          classes
            .filter(
              (className, index, array) =>
                Boolean(className) && '' !== className.trim() && array.indexOf(className) === index
            )
            .join(' ')
            .trim(),
        hasA11yProp = (props) => {
          for (const prop in props)
            if (prop.startsWith('aria-') || 'role' === prop || 'title' === prop) return !0
        }
      var defaultAttributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }
      const Icon = (0, react.forwardRef)(
          (
            {
              color = 'currentColor',
              size = 24,
              strokeWidth = 2,
              absoluteStrokeWidth,
              className = '',
              children,
              iconNode,
              ...rest
            },
            ref
          ) =>
            (0, react.createElement)(
              'svg',
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth: absoluteStrokeWidth
                  ? (24 * Number(strokeWidth)) / Number(size)
                  : strokeWidth,
                className: mergeClasses('lucide', className),
                ...(!children && !hasA11yProp(rest) && { 'aria-hidden': 'true' }),
                ...rest,
              },
              [
                ...iconNode.map(([tag, attrs]) => (0, react.createElement)(tag, attrs)),
                ...(Array.isArray(children) ? children : [children]),
              ]
            )
        ),
        createLucideIcon = (iconName, iconNode) => {
          const Component = (0, react.forwardRef)(({ className, ...props }, ref) => {
            return (0, react.createElement)(Icon, {
              ref,
              iconNode,
              className: mergeClasses(
                `lucide-${((string = toPascalCase(iconName)), string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())}`,
                `lucide-${iconName}`,
                className
              ),
              ...props,
            })
            var string
          })
          return ((Component.displayName = toPascalCase(iconName)), Component)
        }
    },
    './node_modules/lucide-react/dist/esm/icons/arrow-right.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ArrowRight })
      const ArrowRight = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'arrow-right',
        [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/download.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Download })
      const Download = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'download',
        [
          ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
          ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
          ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/mail.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Mail })
      const Mail = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('mail', [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
      ])
    },
  },
])
