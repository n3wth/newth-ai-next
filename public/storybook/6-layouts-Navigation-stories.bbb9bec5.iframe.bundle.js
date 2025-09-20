/*! For license information please see 6-layouts-Navigation-stories.bbb9bec5.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [240],
  {
    './components/layout/Container.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { m: () => Container })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./lib/utils.ts')
      const sizes = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      }
      function Container({ children, className, size = 'xl' }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
          className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
            'mx-auto px-4 sm:px-6 lg:px-8',
            sizes[size],
            className
          ),
          children,
        })
      }
      try {
        ;((Container.displayName = 'Container'),
          (Container.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/layout/Container.tsx#Container'] = {
              docgenInfo: Container.__docgenInfo,
              name: 'Container',
              path: 'components/layout/Container.tsx#Container',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './lib/config/social.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => socialLinks })
      const socialLinks = {
        github: 'https://github.com/n3wth',
        linkedin: 'https://linkedin.com/in/newth',
        email: 'oliver@newth.ai',
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
    './node_modules/lucide-react/dist/esm/icons/briefcase.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Briefcase })
      const Briefcase = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'briefcase',
        [
          ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
          ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' }],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/folder-open.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => FolderOpen })
      const FolderOpen = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'folder-open',
        [
          [
            'path',
            {
              d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
              key: 'usdka0',
            },
          ],
        ]
      )
    },
    './node_modules/lucide-react/dist/esm/icons/github.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => Github })
      const Github = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)('github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef',
          },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
      ])
    },
    './stories/6-layouts/Navigation.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          KeyboardNavigation: () => KeyboardNavigation,
          MobileMenuToggle: () => MobileMenuToggle,
          MobileView: () => MobileView,
          StickyNavigation: () => StickyNavigation,
          WithActiveLink: () => WithActiveLink,
          WithGradientBackground: () => WithGradientBackground,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Navigation_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        folder_open = __webpack_require__(
          './node_modules/lucide-react/dist/esm/icons/folder-open.js'
        ),
        briefcase = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/briefcase.js'),
        github = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/github.js'),
        react = __webpack_require__('./node_modules/next/dist/compiled/react/index.js'),
        Container = __webpack_require__('./components/layout/Container.tsx'),
        social = __webpack_require__('./lib/config/social.ts')
      function StaticLogoWhite() {
        return (0, jsx_runtime.jsx)('div', {
          className: 'flex items-center',
          children: (0, jsx_runtime.jsxs)('pre', {
            className:
              'font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1 text-white',
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: 'relative',
                children: (0, jsx_runtime.jsx)('div', {
                  className: 'relative',
                  children: [
                    '█▄ █ █▀▀ █ █ █ ▀█▀ █ █',
                    '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█',
                    '█  █ █▄▄  ▀ ▀   █  █ █',
                  ].map((line, lineIndex) =>
                    (0, jsx_runtime.jsx)('div', { children: line }, lineIndex)
                  ),
                }),
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'text-white/60 text-[8px] leading-[8px] -mt-0.5',
                children: ['  ▄▀█ █', '  █▀█ █', '°'].map((line, lineIndex) =>
                  (0, jsx_runtime.jsx)('div', { children: line }, lineIndex)
                ),
              }),
            ],
          }),
        })
      }
      const Navigation_stories = {
          title: 'Layout/Navigation',
          component: function NavigationStorybook() {
            const [isMenuOpen, setIsMenuOpen] = (0, react.useState)(!1),
              [isScrolled] = (0, react.useState)(!1),
              navItems = [
                { text: 'Projects', href: '/projects', icon: folder_open.A },
                { text: 'Work', href: '/work', icon: briefcase.A },
                { text: 'GitHub', href: social.l.github, external: !0, icon: github.A },
              ]
            return (0, jsx_runtime.jsx)('nav', {
              className:
                'relative w-full transition-all duration-300 ' +
                (isMenuOpen || isScrolled
                  ? 'bg-black/95 backdrop-blur-sm'
                  : 'bg-black/70 backdrop-blur-sm'),
              children: (0, jsx_runtime.jsx)(Container.m, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'flex h-20 items-center justify-between',
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      className: 'flex items-center',
                      children: (0, jsx_runtime.jsx)(link_default(), {
                        href: '/',
                        className: 'flex items-center relative z-[103] group',
                        children: (0, jsx_runtime.jsx)(StaticLogoWhite, {}),
                      }),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'hidden md:flex md:space-x-2',
                      children: navItems.map((item) =>
                        item.external
                          ? (0, jsx_runtime.jsx)(
                              'a',
                              {
                                href: item.href,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className:
                                  'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                                children: item.text,
                              },
                              item.href
                            )
                          : (0, jsx_runtime.jsx)(
                              link_default(),
                              {
                                href: item.href,
                                className:
                                  'px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center font-sans font-medium',
                                children: item.text,
                              },
                              item.href
                            )
                      ),
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: 'md:hidden',
                      children: (0, jsx_runtime.jsx)('button', {
                        onClick: () => setIsMenuOpen(!isMenuOpen),
                        className:
                          'relative p-3 -mr-3 text-white z-[102] hover:bg-white/10 rounded-lg transition-colors',
                        'aria-label': 'Toggle menu',
                        type: 'button',
                        children: (0, jsx_runtime.jsxs)('div', {
                          className: 'relative w-6 h-6 pointer-events-none',
                          children: [
                            (0, jsx_runtime.jsx)('span', {
                              className:
                                'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ' +
                                (isMenuOpen ? 'rotate-45 top-[11px]' : 'top-[5px]'),
                            }),
                            (0, jsx_runtime.jsx)('span', {
                              className:
                                'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 top-[11px] ' +
                                (isMenuOpen ? 'opacity-0' : 'opacity-100'),
                            }),
                            (0, jsx_runtime.jsx)('span', {
                              className:
                                'block w-6 h-0.5 bg-white transition-all duration-300 ease-out absolute left-0 ' +
                                (isMenuOpen ? '-rotate-45 top-[11px]' : 'top-[17px]'),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          },
          parameters: {
            layout: 'fullscreen',
            backgrounds: { default: 'dark' },
            docs: {
              description: {
                component: 'Main navigation bar with responsive menu and accessibility features',
              },
            },
          },
          argTypes: {
            currentPath: {
              control: 'select',
              options: ['/', '/projects', '/blog', '/contact'],
              description: 'Current active path for navigation highlighting',
              table: { type: { summary: 'string' }, defaultValue: { summary: '/' } },
            },
            showMobileMenu: {
              control: 'boolean',
              description: 'Control mobile menu visibility (for testing)',
              table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
            },
            onNavigate: {
              action: 'navigated',
              description: 'Called when a navigation link is clicked',
              table: { type: { summary: '(path: string) => void' } },
            },
            onMenuToggle: {
              action: 'menu-toggled',
              description: 'Called when mobile menu is toggled',
              table: { type: { summary: '() => void' } },
            },
          },
          args: {},
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'bg-black w-full',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
          tags: ['autodocs', 'layout'],
        },
        Default = {},
        WithGradientBackground = {
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'bg-gradient-to-b from-black via-gray-900 to-black',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        StickyNavigation = {
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsxs)('div', {
                className: 'min-h-screen bg-black',
                children: [
                  (0, jsx_runtime.jsx)('div', {
                    className: 'sticky top-0 z-50',
                    children: (0, jsx_runtime.jsx)(Story, {}),
                  }),
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'p-8 space-y-4',
                    children: [
                      (0, jsx_runtime.jsx)('h1', {
                        className: 'text-4xl font-bold text-white',
                        children: 'Page Content',
                      }),
                      (0, jsx_runtime.jsx)('p', {
                        className: 'text-gray-400',
                        children: 'Scroll to see sticky navigation behavior',
                      }),
                      (0, jsx_runtime.jsx)('div', {
                        className: 'h-[150vh] bg-gray-900/50 rounded-lg p-8',
                        children: (0, jsx_runtime.jsx)('p', {
                          className: 'text-gray-500',
                          children: 'Long content area...',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        },
        MobileView = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'bg-black max-w-[375px] mx-auto',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        WithActiveLink = {
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsxs)('div', {
                className: 'bg-black',
                children: [
                  (0, jsx_runtime.jsx)('p', {
                    className: 'text-center text-gray-500 py-4 text-sm',
                    children: 'Note: Active link styles depend on current route',
                  }),
                  (0, jsx_runtime.jsx)(Story, {}),
                ],
              }),
          ],
        },
        MobileMenuToggle = { parameters: { viewport: { defaultViewport: 'mobile1' } } },
        KeyboardNavigation = {},
        __namedExportsOrder = [
          'Default',
          'WithGradientBackground',
          'StickyNavigation',
          'MobileView',
          'WithActiveLink',
          'MobileMenuToggle',
          'KeyboardNavigation',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
          description: {
            story: 'Default navigation appearance',
            ...Default.parameters?.docs?.description,
          },
        },
      }),
        (WithGradientBackground.parameters = {
          ...WithGradientBackground.parameters,
          docs: {
            ...WithGradientBackground.parameters?.docs,
            source: {
              originalSource:
                '{\n  decorators: [Story => <div className="bg-gradient-to-b from-black via-gray-900 to-black">\n        <Story />\n      </div>]\n}',
              ...WithGradientBackground.parameters?.docs?.source,
            },
            description: {
              story: 'Navigation with gradient background',
              ...WithGradientBackground.parameters?.docs?.description,
            },
          },
        }),
        (StickyNavigation.parameters = {
          ...StickyNavigation.parameters,
          docs: {
            ...StickyNavigation.parameters?.docs,
            source: {
              originalSource:
                '{\n  decorators: [Story => <div className="min-h-screen bg-black">\n        <div className="sticky top-0 z-50">\n          <Story />\n        </div>\n        <div className="p-8 space-y-4">\n          <h1 className="text-4xl font-bold text-white">Page Content</h1>\n          <p className="text-gray-400">Scroll to see sticky navigation behavior</p>\n          <div className="h-[150vh] bg-gray-900/50 rounded-lg p-8">\n            <p className="text-gray-500">Long content area...</p>\n          </div>\n        </div>\n      </div>]\n}',
              ...StickyNavigation.parameters?.docs?.source,
            },
            description: {
              story: 'Navigation with content below to show sticky behavior',
              ...StickyNavigation.parameters?.docs?.description,
            },
          },
        }),
        (MobileView.parameters = {
          ...MobileView.parameters,
          docs: {
            ...MobileView.parameters?.docs,
            source: {
              originalSource:
                '{\n  parameters: {\n    viewport: {\n      defaultViewport: \'mobile1\'\n    }\n  },\n  decorators: [Story => <div className="bg-black max-w-[375px] mx-auto">\n        <Story />\n      </div>]\n}',
              ...MobileView.parameters?.docs?.source,
            },
            description: {
              story: 'Mobile view simulation',
              ...MobileView.parameters?.docs?.description,
            },
          },
        }),
        (WithActiveLink.parameters = {
          ...WithActiveLink.parameters,
          docs: {
            ...WithActiveLink.parameters?.docs,
            source: {
              originalSource:
                '{\n  decorators: [Story => <div className="bg-black">\n        <p className="text-center text-gray-500 py-4 text-sm">\n          Note: Active link styles depend on current route\n        </p>\n        <Story />\n      </div>]\n}',
              ...WithActiveLink.parameters?.docs?.source,
            },
            description: {
              story: 'With active link highlighting',
              ...WithActiveLink.parameters?.docs?.description,
            },
          },
        }),
        (MobileMenuToggle.parameters = {
          ...MobileMenuToggle.parameters,
          docs: {
            ...MobileMenuToggle.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  }\n  // TODO: Re-enable play function when Storybook testing is properly configured\n  // play: async ({ canvasElement }) => {\n  //   const canvas = within(canvasElement)\n  //   // Testing code would go here\n  // },\n}",
              ...MobileMenuToggle.parameters?.docs?.source,
            },
            description: {
              story: 'Mobile menu interaction testing\nTests opening and closing the mobile menu',
              ...MobileMenuToggle.parameters?.docs?.description,
            },
          },
        }),
        (KeyboardNavigation.parameters = {
          ...KeyboardNavigation.parameters,
          docs: {
            ...KeyboardNavigation.parameters?.docs,
            source: {
              originalSource:
                '{\n  // TODO: Re-enable play function when Storybook testing is properly configured\n  // play: async ({ canvasElement }) => {\n  //   const canvas = within(canvasElement)\n  //   // Testing code would go here\n  // },\n}',
              ...KeyboardNavigation.parameters?.docs?.source,
            },
            description: {
              story: 'Keyboard navigation testing\nTests Tab and Enter key interactions',
              ...KeyboardNavigation.parameters?.docs?.description,
            },
          },
        }))
      try {
        ;((Default.displayName = 'Default'),
          (Default.__docgenInfo = {
            description: 'Default navigation appearance',
            displayName: 'Default',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/6-layouts/Navigation.stories.tsx#Default'] = {
              docgenInfo: Default.__docgenInfo,
              name: 'Default',
              path: 'stories/6-layouts/Navigation.stories.tsx#Default',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((WithGradientBackground.displayName = 'WithGradientBackground'),
          (WithGradientBackground.__docgenInfo = {
            description: 'Navigation with gradient background',
            displayName: 'WithGradientBackground',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/6-layouts/Navigation.stories.tsx#WithGradientBackground'
            ] = {
              docgenInfo: WithGradientBackground.__docgenInfo,
              name: 'WithGradientBackground',
              path: 'stories/6-layouts/Navigation.stories.tsx#WithGradientBackground',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((StickyNavigation.displayName = 'StickyNavigation'),
          (StickyNavigation.__docgenInfo = {
            description: 'Navigation with content below to show sticky behavior',
            displayName: 'StickyNavigation',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/6-layouts/Navigation.stories.tsx#StickyNavigation'] =
              {
                docgenInfo: StickyNavigation.__docgenInfo,
                name: 'StickyNavigation',
                path: 'stories/6-layouts/Navigation.stories.tsx#StickyNavigation',
              }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((MobileView.displayName = 'MobileView'),
          (MobileView.__docgenInfo = {
            description: 'Mobile view simulation',
            displayName: 'MobileView',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/6-layouts/Navigation.stories.tsx#MobileView'] = {
              docgenInfo: MobileView.__docgenInfo,
              name: 'MobileView',
              path: 'stories/6-layouts/Navigation.stories.tsx#MobileView',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((WithActiveLink.displayName = 'WithActiveLink'),
          (WithActiveLink.__docgenInfo = {
            description: 'With active link highlighting',
            displayName: 'WithActiveLink',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/6-layouts/Navigation.stories.tsx#WithActiveLink'] = {
              docgenInfo: WithActiveLink.__docgenInfo,
              name: 'WithActiveLink',
              path: 'stories/6-layouts/Navigation.stories.tsx#WithActiveLink',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((MobileMenuToggle.displayName = 'MobileMenuToggle'),
          (MobileMenuToggle.__docgenInfo = {
            description:
              'Mobile menu interaction testing\nTests opening and closing the mobile menu',
            displayName: 'MobileMenuToggle',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/6-layouts/Navigation.stories.tsx#MobileMenuToggle'] =
              {
                docgenInfo: MobileMenuToggle.__docgenInfo,
                name: 'MobileMenuToggle',
                path: 'stories/6-layouts/Navigation.stories.tsx#MobileMenuToggle',
              }))
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        ;((KeyboardNavigation.displayName = 'KeyboardNavigation'),
          (KeyboardNavigation.__docgenInfo = {
            description: 'Keyboard navigation testing\nTests Tab and Enter key interactions',
            displayName: 'KeyboardNavigation',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/6-layouts/Navigation.stories.tsx#KeyboardNavigation'
            ] = {
              docgenInfo: KeyboardNavigation.__docgenInfo,
              name: 'KeyboardNavigation',
              path: 'stories/6-layouts/Navigation.stories.tsx#KeyboardNavigation',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
