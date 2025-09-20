/*! For license information please see ui-button-SimpleAnimatedButton-stories.2ed18543.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [134],
  {
    './components/ui/SimpleAnimatedButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { w: () => SimpleAnimatedButton })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs'
        ),
        next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/next/link.js'),
        next_link__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        )
      function SimpleAnimatedButton({
        href,
        onClick,
        children,
        variant = 'primary',
        className = '',
      }) {
        const baseClasses = `\n    inline-flex items-center justify-center\n    px-7 py-3.5\n    text-base font-medium\n    rounded-xl\n    transition-all duration-300\n    select-none\n    ${{ primary: 'bg-white text-black hover:bg-gray-200 transition-colors', secondary: 'bg-transparent text-white border border-white/30 hover:bg-white hover:text-black transition-all' }[variant]}\n    ${className}\n  `,
          content = (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            framer_motion__WEBPACK_IMPORTED_MODULE_1__.P.span,
            {
              className: 'flex items-center gap-2',
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              transition: { type: 'spring', stiffness: 400, damping: 20 },
              children,
            }
          )
        return href
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              next_link__WEBPACK_IMPORTED_MODULE_2___default(),
              { href, className: baseClasses, children: content }
            )
          : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('button', {
              onClick,
              className: baseClasses,
              children: content,
            })
      }
      try {
        ;((SimpleAnimatedButton.displayName = 'SimpleAnimatedButton'),
          (SimpleAnimatedButton.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/ui/SimpleAnimatedButton.tsx#SimpleAnimatedButton'
            ] = {
              docgenInfo: SimpleAnimatedButton.__docgenInfo,
              name: 'SimpleAnimatedButton',
              path: 'components/ui/SimpleAnimatedButton.tsx#SimpleAnimatedButton',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/ui/button/SimpleAnimatedButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          Secondary: () => Secondary,
          Sizes: () => Sizes,
          WithIcons: () => WithIcons,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SimpleAnimatedButton_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        ui_SimpleAnimatedButton = __webpack_require__('./components/ui/SimpleAnimatedButton.tsx')
      const Sparkles = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'sparkles',
        [
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
        ]
      )
      var mail = __webpack_require__('./node_modules/lucide-react/dist/esm/icons/mail.js')
      const SimpleAnimatedButton_stories = {
          title: 'Components/Buttons/Simple Animated',
          component: ui_SimpleAnimatedButton.w,
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
        Primary = { args: { children: 'Get Started', variant: 'primary' } },
        Secondary = { args: { children: 'Learn More', variant: 'secondary' } },
        WithIcons = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, jsx_runtime.jsxs)(ui_SimpleAnimatedButton.w, {
                  variant: 'primary',
                  children: [
                    (0, jsx_runtime.jsx)(Sparkles, { className: 'mr-2 h-4 w-4' }),
                    'AI Powered',
                  ],
                }),
                (0, jsx_runtime.jsxs)(ui_SimpleAnimatedButton.w, {
                  variant: 'secondary',
                  children: [
                    'Contact Us',
                    (0, jsx_runtime.jsx)(mail.A, { className: 'ml-2 h-4 w-4' }),
                  ],
                }),
              ],
            }),
        },
        Sizes = {
          args: { children: 'Button' },
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, jsx_runtime.jsx)(ui_SimpleAnimatedButton.w, {
                  className: 'text-sm py-1.5 px-3',
                  children: 'Small',
                }),
                (0, jsx_runtime.jsx)(ui_SimpleAnimatedButton.w, { children: 'Medium' }),
                (0, jsx_runtime.jsx)(ui_SimpleAnimatedButton.w, {
                  className: 'text-lg py-3 px-6',
                  children: 'Large',
                }),
              ],
            }),
        },
        __namedExportsOrder = ['Primary', 'Secondary', 'WithIcons', 'Sizes']
      ;((Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    children: 'Get Started',\n    variant: 'primary'\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: 'Learn More',\n    variant: 'secondary'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (WithIcons.parameters = {
          ...WithIcons.parameters,
          docs: {
            ...WithIcons.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex gap-4">\n      <SimpleAnimatedButton variant="primary">\n        <Sparkles className="mr-2 h-4 w-4" />\n        AI Powered\n      </SimpleAnimatedButton>\n      <SimpleAnimatedButton variant="secondary">\n        Contact Us\n        <Mail className="ml-2 h-4 w-4" />\n      </SimpleAnimatedButton>\n    </div>\n}',
              ...WithIcons.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: \'Button\'\n  },\n  render: () => <div className="flex items-center gap-4">\n      <SimpleAnimatedButton className="text-sm py-1.5 px-3">Small</SimpleAnimatedButton>\n      <SimpleAnimatedButton>Medium</SimpleAnimatedButton>\n      <SimpleAnimatedButton className="text-lg py-3 px-6">Large</SimpleAnimatedButton>\n    </div>\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((SimpleAnimatedButton.displayName = 'SimpleAnimatedButton'),
          (SimpleAnimatedButton.__docgenInfo = {
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
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/ui/button/SimpleAnimatedButton.stories.tsx#SimpleAnimatedButton'
            ] = {
              docgenInfo: SimpleAnimatedButton.__docgenInfo,
              name: 'SimpleAnimatedButton',
              path: 'components/ui/button/SimpleAnimatedButton.stories.tsx#SimpleAnimatedButton',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
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
