/*! For license information please see 5-sections-HeroSection-stories.28984e6a.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [419],
  {
    './components/sections/HeroSectionOptimized.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { K: () => HeroSection })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/arrow-right.js'),
        _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/lucide-react/dist/esm/icons/chevron-down.js'),
        _components_WarpBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './components/WarpBackground.tsx'
        ),
        _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './components/ui/SimpleAnimatedButton.tsx'
        )
      function HeroSection({
        title = { line1: 'I ship AI products', line2: 'at massive scale.' },
        subtitle = 'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
        primaryCTA = { text: 'See My Work', href: '#projects' },
        secondaryCTA = { text: 'Get in Touch', href: '/contact' },
      }) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('section', {
          className:
            'relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_WarpBackground__WEBPACK_IMPORTED_MODULE_3__.N,
              { className: 'absolute inset-0' }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className:
                'relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'w-full text-center',
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'space-y-6 md:space-y-8',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('h1', {
                      className:
                        'text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-semibold tracking-[-0.02em] leading-[1.05] text-white',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                          className: 'block',
                          children: title.line1,
                        }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
                          className:
                            'block bg-gradient-to-br from-violet-200 via-purple-200 to-violet-400 bg-clip-text text-transparent',
                          children: title.line2,
                        }),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('p', {
                      className:
                        'text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-[1.6] font-light px-6',
                      children: subtitle,
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row gap-4 justify-center pt-4',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: primaryCTA.href,
                            variant: 'primary',
                            children: [
                              primaryCTA.text,
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_1__.A,
                                { className: 'ml-2 h-4 w-4' }
                              ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _components_ui_SimpleAnimatedButton__WEBPACK_IMPORTED_MODULE_4__.w,
                          {
                            href: secondaryCTA.href,
                            variant: 'secondary',
                            children: secondaryCTA.text,
                          }
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
              className: 'absolute bottom-10 left-1/2 -translate-x-1/2 z-10',
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_ArrowRight_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,
                { className: 'h-6 w-6 text-white/40 animate-bounce' }
              ),
            }),
          ],
        })
      }
      try {
        ;((HeroSection.displayName = 'HeroSection'),
          (HeroSection.__docgenInfo = {
            description: '',
            displayName: 'HeroSection',
            props: {
              title: {
                defaultValue: {
                  value:
                    "{\n    line1: 'I ship AI products',\n    line2: 'at massive scale.',\n  }",
                },
                description: '',
                name: 'title',
                required: !1,
                type: { name: '{ line1: string; line2: string; }' },
              },
              subtitle: {
                defaultValue: {
                  value:
                    'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
                },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              primaryCTA: {
                defaultValue: { value: "{\n    text: 'See My Work',\n    href: '#projects',\n  }" },
                description: '',
                name: 'primaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
              secondaryCTA: {
                defaultValue: { value: "{\n    text: 'Get in Touch',\n    href: '/contact',\n  }" },
                description: '',
                name: 'secondaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/sections/HeroSectionOptimized.tsx#HeroSection'] = {
              docgenInfo: HeroSection.__docgenInfo,
              name: 'HeroSection',
              path: 'components/sections/HeroSectionOptimized.tsx#HeroSection',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
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
    './node_modules/lucide-react/dist/esm/icons/chevron-down.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => ChevronDown })
      const ChevronDown = (0,
      __webpack_require__('./node_modules/lucide-react/dist/esm/createLucideIcon.js').A)(
        'chevron-down',
        [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]
      )
    },
    './stories/5-sections/HeroSection.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CustomContent: () => CustomContent,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Sections/Hero',
          component: __webpack_require__('./components/sections/HeroSectionOptimized.tsx').K,
          parameters: {
            layout: 'fullscreen',
            docs: {
              description: { component: 'Full-screen hero section with animated background' },
            },
          },
        },
        Default = {},
        CustomContent = {
          args: {
            title: { line1: 'Building the future', line2: 'one line at a time.' },
            subtitle:
              'Full-stack developer passionate about creating exceptional digital experiences.',
            primaryCTA: { text: 'View Projects', href: '#projects' },
            secondaryCTA: { text: 'Contact Me', href: '#contact' },
          },
        },
        __namedExportsOrder = ['Default', 'CustomContent']
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: { originalSource: '{}', ...Default.parameters?.docs?.source },
        },
      }),
        (CustomContent.parameters = {
          ...CustomContent.parameters,
          docs: {
            ...CustomContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: {\n      line1: 'Building the future',\n      line2: 'one line at a time.'\n    },\n    subtitle: 'Full-stack developer passionate about creating exceptional digital experiences.',\n    primaryCTA: {\n      text: 'View Projects',\n      href: '#projects'\n    },\n    secondaryCTA: {\n      text: 'Contact Me',\n      href: '#contact'\n    }\n  }\n}",
              ...CustomContent.parameters?.docs?.source,
            },
          },
        }))
      try {
        ;((HeroSection.displayName = 'HeroSection'),
          (HeroSection.__docgenInfo = {
            description: '',
            displayName: 'HeroSection',
            props: {
              title: {
                defaultValue: {
                  value:
                    "{\n    line1: 'I ship AI products',\n    line2: 'at massive scale.',\n  }",
                },
                description: '',
                name: 'title',
                required: !1,
                type: { name: '{ line1: string; line2: string; }' },
              },
              subtitle: {
                defaultValue: {
                  value:
                    'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
                },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              primaryCTA: {
                defaultValue: { value: "{\n    text: 'See My Work',\n    href: '#projects',\n  }" },
                description: '',
                name: 'primaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
              secondaryCTA: {
                defaultValue: { value: "{\n    text: 'Get in Touch',\n    href: '/contact',\n  }" },
                description: '',
                name: 'secondaryCTA',
                required: !1,
                type: { name: '{ text: string; href: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/5-sections/HeroSection.stories.tsx#HeroSection'] = {
              docgenInfo: HeroSection.__docgenInfo,
              name: 'HeroSection',
              path: 'stories/5-sections/HeroSection.stories.tsx#HeroSection',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
])
