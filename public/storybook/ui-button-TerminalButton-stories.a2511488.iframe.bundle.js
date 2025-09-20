'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [483],
  {
    './components/ui/button/TerminalButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AsLink: () => AsLink,
          Default: () => Default,
          DownloadAction: () => DownloadAction,
          GitHubLink: () => GitHubLink,
          WithIcon: () => WithIcon,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TerminalButton_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        design_system = __webpack_require__('./lib/design-system.ts')
      function TerminalButton_TerminalButton({
        href,
        onClick,
        variant = 'primary',
        size = 'md',
        children,
        className,
        external = !1,
      }) {
        const classes = (0, design_system.cn)(
            design_system.iN.button[variant].base,
            design_system.iN.button[variant].hover,
            { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }[size],
            'uppercase tracking-wider',
            className
          ),
          content = (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)('span', { className: 'text-gray-600', children: '[' }),
              children,
              (0, jsx_runtime.jsx)('span', { className: 'text-gray-600', children: ']' }),
            ],
          })
        return href
          ? external
            ? (0, jsx_runtime.jsx)('a', {
                href,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: classes,
                children: content,
              })
            : (0, jsx_runtime.jsx)(link_default(), { href, className: classes, children: content })
          : (0, jsx_runtime.jsx)('button', { onClick, className: classes, children: content })
      }
      try {
        ;((TerminalButton_TerminalButton.displayName = 'TerminalButton'),
          (TerminalButton_TerminalButton.__docgenInfo = {
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
                type: {
                  name: 'enum',
                  value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }],
                },
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/ui/TerminalButton.tsx#TerminalButton'] = {
              docgenInfo: TerminalButton_TerminalButton.__docgenInfo,
              name: 'TerminalButton',
              path: 'components/ui/TerminalButton.tsx#TerminalButton',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      const TerminalButton_stories = {
          title: 'Components/Buttons/Terminal',
          component: TerminalButton_TerminalButton,
          parameters: {
            layout: 'centered',
            backgrounds: { default: 'dark' },
            docs: {
              description: {
                component: 'Terminal-style button with typewriter effect and ASCII border',
              },
            },
          },
          argTypes: { href: { control: 'text' } },
        },
        Default = { args: { children: 'Execute Command' } },
        WithIcon = { args: { children: 'Deploy Project' } },
        AsLink = { args: { children: 'View Documentation', href: '/docs' } },
        GitHubLink = { args: { children: 'View Source', href: 'https://github.com' } },
        DownloadAction = {
          args: { children: 'Download CLI', onClick: () => alert('Download started!') },
        },
        __namedExportsOrder = ['Default', 'WithIcon', 'AsLink', 'GitHubLink', 'DownloadAction']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    children: 'Execute Command'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    children: 'Deploy Project'\n  }\n}",
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (AsLink.parameters = {
          ...AsLink.parameters,
          docs: {
            ...AsLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'View Documentation',\n    href: '/docs'\n  }\n}",
              ...AsLink.parameters?.docs?.source,
            },
          },
        }),
        (GitHubLink.parameters = {
          ...GitHubLink.parameters,
          docs: {
            ...GitHubLink.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'View Source',\n    href: 'https://github.com'\n  }\n}",
              ...GitHubLink.parameters?.docs?.source,
            },
          },
        }),
        (DownloadAction.parameters = {
          ...DownloadAction.parameters,
          docs: {
            ...DownloadAction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Download CLI',\n    onClick: () => alert('Download started!')\n  }\n}",
              ...DownloadAction.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((TerminalButton.displayName = 'TerminalButton'),
          (TerminalButton.__docgenInfo = {
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
                type: {
                  name: 'enum',
                  value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }],
                },
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/ui/button/TerminalButton.stories.tsx#TerminalButton'
            ] = {
              docgenInfo: TerminalButton.__docgenInfo,
              name: 'TerminalButton',
              path: 'components/ui/button/TerminalButton.stories.tsx#TerminalButton',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/design-system.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn, iN: () => componentVariants })
      const componentVariants = {
          button: {
            primary: {
              base: 'px-8 py-4 bg-violet-500 text-black font-mono font-bold transition-all',
              hover: 'hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            secondary: {
              base: 'px-8 py-4 border border-violet-500 text-violet-400 font-mono font-bold transition-all',
              hover:
                'hover:bg-violet-500 hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
            },
            ghost: {
              base: 'px-4 py-2 text-violet-400 font-mono transition-all',
              hover: 'hover:text-violet-300 hover:bg-violet-500/10',
            },
          },
          card: {
            default: {
              base: 'p-6 bg-black border border-violet-500/30 transition-all',
              hover: 'hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
            },
            elevated: {
              base: 'p-6 bg-gray-900 border border-violet-500/50 shadow-lg',
              hover: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
            },
          },
          badge: {
            default: {
              base: 'px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-400',
            },
            solid: { base: 'px-3 py-1 text-xs font-mono bg-violet-500 text-black' },
          },
        },
        cn = (...classes) => classes.filter(Boolean).join(' ')
    },
  },
])
