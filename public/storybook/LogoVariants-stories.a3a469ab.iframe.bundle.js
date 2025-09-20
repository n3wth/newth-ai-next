'use strict'
;(self.webpackChunknewth_ai_next = self.webpackChunknewth_ai_next || []).push([
  [64],
  {
    './components/LogoVariants.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllVariants: () => AllVariants,
          HeaderLogo: () => HeaderLogo,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => LogoVariants_stories,
        }))
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        AnimatedLogo = __webpack_require__('./components/AnimatedLogo.tsx'),
        utils = __webpack_require__('./lib/utils.ts')
      function StaticLogo({ className, size = 'md', variant = 'ascii' }) {
        if ('text' === variant) {
          const textSizes = {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-xl',
            xl: 'text-3xl',
          }
          return (0, jsx_runtime.jsxs)('span', {
            className: (0, utils.cn)(
              'font-mono font-bold tracking-tight',
              textSizes[size],
              className
            ),
            children: [
              'n3wth',
              (0, jsx_runtime.jsx)('span', { className: 'text-gray-500', children: '.AI' }),
            ],
          })
        }
        if ('svg' === variant) {
          const svgSize = { xs: 16, sm: 24, md: 32, lg: 48, xl: 64 }[size]
          return (0, jsx_runtime.jsx)('svg', {
            width: 3 * svgSize,
            height: svgSize,
            viewBox: '0 0 96 32',
            className,
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, jsx_runtime.jsxs)('text', {
              x: '0',
              y: '24',
              fontFamily: 'monospace',
              fontSize: '20',
              fontWeight: 'bold',
              fill: 'white',
              children: [
                'n3wth',
                (0, jsx_runtime.jsx)('tspan', { fill: '#888', fontSize: '16', children: '.AI' }),
              ],
            }),
          })
        }
        return (0, jsx_runtime.jsx)('div', {
          className: (0, utils.cn)('flex items-center', className),
          children: (0, jsx_runtime.jsxs)('pre', {
            className: (0, utils.cn)(
              'font-mono whitespace-pre select-none flex items-center gap-1',
              {
                xs: 'text-[6px] leading-[6px]',
                sm: 'text-[8px] leading-[8px]',
                md: 'text-[10px] leading-[10px]',
                lg: 'text-[14px] leading-[14px]',
                xl: 'text-[20px] leading-[20px]',
              }[size]
            ),
            children: [
              (0, jsx_runtime.jsx)('div', {
                className: 'text-white',
                children: [
                  '█▄ █ █▀▀ █ █ █ ▀█▀ █ █',
                  '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█',
                  '█  █ █▄▄  ▀ ▀   █  █ █',
                ].map((line, i) => (0, jsx_runtime.jsx)('div', { children: line }, i)),
              }),
              (0, jsx_runtime.jsx)('div', {
                className: 'text-gray-400',
                style: { fontSize: '0.8em' },
                children: ['  ▄▀█ █', '  █▀█ █', '°'].map((line, i) =>
                  (0, jsx_runtime.jsx)('div', { children: line }, i)
                ),
              }),
            ],
          }),
        })
      }
      try {
        ;((StaticLogo.displayName = 'StaticLogo'),
          (StaticLogo.__docgenInfo = {
            description: '',
            displayName: 'StaticLogo',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'md' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                    { value: '"xs"' },
                    { value: '"xl"' },
                  ],
                },
              },
              variant: {
                defaultValue: { value: 'ascii' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"text"' }, { value: '"ascii"' }, { value: '"svg"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/StaticLogo.tsx#StaticLogo'] = {
              docgenInfo: StaticLogo.__docgenInfo,
              name: 'StaticLogo',
              path: 'components/StaticLogo.tsx#StaticLogo',
            }))
      } catch (__react_docgen_typescript_loader_error) {}
      const LogoVariants_stories = {
          title: 'Brand/Logo Variants',
          parameters: {
            layout: 'centered',
            backgrounds: {
              default: 'black',
              values: [
                { name: 'black', value: '#000000' },
                { name: 'dark', value: '#0a0a0a' },
              ],
            },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                style: { zoom: 2 },
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        AllVariants = {
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                padding: '2rem',
                minWidth: '600px',
              },
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  style: {
                    padding: '3rem',
                    background:
                      'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  },
                  children: [
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
                        animation: 'shimmer 4s infinite',
                      },
                    }),
                    (0, jsx_runtime.jsx)('h2', {
                      style: {
                        color: '#fff',
                        marginTop: 0,
                        fontSize: '2rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #fff 0%, #9333ea 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        position: 'relative',
                        zIndex: 1,
                      },
                      children: 'n3wth.AI Logo System',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        display: 'inline-block',
                        padding: '2rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        zIndex: 1,
                      },
                      children: (0, jsx_runtime.jsx)('img', {
                        src: '/logo-custom.svg',
                        alt: 'n3wth.AI',
                        style: { height: '50px', width: 'auto' },
                      }),
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      style: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginTop: '1.5rem',
                        fontSize: '0.9rem',
                        position: 'relative',
                        zIndex: 1,
                      },
                      children: 'Custom ASCII-block logo with animated rainbow gradient on .AI',
                    }),
                    (0, jsx_runtime.jsx)('style', {
                      children:
                        '\n          @keyframes shimmer {\n            0% { transform: translateX(-100%); }\n            100% { transform: translateX(200%); }\n          }\n        ',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h4', {
                      style: {
                        color: '#888',
                        marginBottom: '1rem',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: 'React Component - AnimatedLogo (Used in app)',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        padding: '2rem',
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      },
                      children: (0, jsx_runtime.jsx)(AnimatedLogo.H, {
                        baseSaturation: 85,
                        colorIntensity: 1,
                        enableColorOnHover: !0,
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h4', {
                      style: {
                        color: '#888',
                        marginBottom: '1rem',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: 'Static Text Variant',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        padding: '2rem',
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      },
                      children: (0, jsx_runtime.jsx)(StaticLogo, { variant: 'text', size: 'lg' }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h4', {
                      style: {
                        color: '#888',
                        marginBottom: '1rem',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: 'Block-Based SVG (Used in Storybook header)',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        padding: '2rem',
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, jsx_runtime.jsx)('img', {
                        src: '/logo-storybook.svg',
                        alt: 'n3wth.AI',
                        style: { height: '30px', width: 'auto' },
                      }),
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      style: { color: '#666', fontSize: '11px', marginTop: '0.5rem' },
                      children:
                        'SVG with rectangles forming ASCII blocks + rainbow gradient animation',
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h4', {
                      style: {
                        color: '#888',
                        marginBottom: '1rem',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: 'ASCII Art Component',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        padding: '2rem',
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      },
                      children: (0, jsx_runtime.jsx)(StaticLogo, { variant: 'ascii', size: 'md' }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)('h4', {
                      style: {
                        color: '#888',
                        marginBottom: '1rem',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      },
                      children: 'ASCII Art SVG (Now in Storybook header!)',
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      style: {
                        padding: '2rem',
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, jsx_runtime.jsx)('img', {
                        src: '/logo-ascii-art.svg',
                        alt: 'n3wth.AI ASCII',
                        style: { height: '36px', width: 'auto' },
                      }),
                    }),
                    (0, jsx_runtime.jsx)('p', {
                      style: { color: '#666', fontSize: '11px', marginTop: '0.5rem' },
                      children: 'True ASCII characters with rainbow gradient + glitch effects',
                    }),
                  ],
                }),
              ],
            }),
        },
        HeaderLogo = {
          name: 'Storybook Header Logo',
          render: () =>
            (0, jsx_runtime.jsxs)('div', {
              style: { padding: '2rem' },
              children: [
                (0, jsx_runtime.jsx)('h3', {
                  style: { color: '#fff', marginBottom: '2rem' },
                  children: 'Current Storybook Header Logo',
                }),
                (0, jsx_runtime.jsx)('div', {
                  style: {
                    padding: '1rem',
                    background: '#0a0a0a',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    display: 'inline-block',
                  },
                  children: (0, jsx_runtime.jsx)('img', {
                    src: '/logo-storybook.svg',
                    alt: 'n3wth.AI',
                    style: { height: '40px' },
                  }),
                }),
                (0, jsx_runtime.jsxs)('p', {
                  style: { color: '#888', marginTop: '2rem', maxWidth: '600px' },
                  children: [
                    'This SVG file is located at ',
                    (0, jsx_runtime.jsx)('code', { children: '/public/logo-storybook.svg' }),
                    " and is used by Storybook's theme configuration. Due to Storybook's architecture, the header cannot render React components, only static images.",
                  ],
                }),
              ],
            }),
        },
        __namedExportsOrder = ['AllVariants', 'HeaderLogo']
      ;((AllVariants.parameters = {
        ...AllVariants.parameters,
        docs: {
          ...AllVariants.parameters?.docs,
          source: {
            originalSource:
              "{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '3rem',\n    padding: '2rem',\n    minWidth: '600px'\n  }}>\n      {/* Hero Section with Custom Logo */}\n      <div style={{\n      padding: '3rem',\n      background: 'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',\n      borderRadius: '16px',\n      border: '1px solid rgba(147, 51, 234, 0.3)',\n      marginBottom: '3rem',\n      textAlign: 'center',\n      position: 'relative',\n      overflow: 'hidden'\n    }}>\n        {/* Background animation */}\n        <div style={{\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        right: 0,\n        bottom: 0,\n        background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',\n        animation: 'shimmer 4s infinite'\n      }} />\n\n        <h2 style={{\n        color: '#fff',\n        marginTop: 0,\n        fontSize: '2rem',\n        fontWeight: '800',\n        background: 'linear-gradient(135deg, #fff 0%, #9333ea 100%)',\n        WebkitBackgroundClip: 'text',\n        WebkitTextFillColor: 'transparent',\n        backgroundClip: 'text',\n        position: 'relative',\n        zIndex: 1\n      }}>\n          n3wth.AI Logo System\n        </h2>\n\n        {/* Featured Logo */}\n        <div style={{\n        display: 'inline-block',\n        padding: '2rem',\n        background: 'rgba(0, 0, 0, 0.5)',\n        borderRadius: '12px',\n        backdropFilter: 'blur(10px)',\n        position: 'relative',\n        zIndex: 1\n      }}>\n          <img src=\"/logo-custom.svg\" alt=\"n3wth.AI\" style={{\n          height: '50px',\n          width: 'auto'\n        }} />\n        </div>\n\n        <p style={{\n        color: 'rgba(255, 255, 255, 0.7)',\n        marginTop: '1.5rem',\n        fontSize: '0.9rem',\n        position: 'relative',\n        zIndex: 1\n      }}>\n          Custom ASCII-block logo with animated rainbow gradient on .AI\n        </p>\n\n        <style>{`\n          @keyframes shimmer {\n            0% { transform: translateX(-100%); }\n            100% { transform: translateX(200%); }\n          }\n        `}</style>\n      </div>\n\n      {/* Animated Logo - The main component */}\n      <div>\n        <h4 style={{\n        color: '#888',\n        marginBottom: '1rem',\n        fontSize: '12px',\n        textTransform: 'uppercase',\n        letterSpacing: '1px'\n      }}>\n          React Component - AnimatedLogo (Used in app)\n        </h4>\n        <div style={{\n        padding: '2rem',\n        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',\n        borderRadius: '12px',\n        border: '1px solid rgba(255,255,255,0.1)'\n      }}>\n          <AnimatedLogo baseSaturation={85} colorIntensity={1} enableColorOnHover />\n        </div>\n      </div>\n\n      {/* Static Logo Text Variant */}\n      <div>\n        <h4 style={{\n        color: '#888',\n        marginBottom: '1rem',\n        fontSize: '12px',\n        textTransform: 'uppercase',\n        letterSpacing: '1px'\n      }}>\n          Static Text Variant\n        </h4>\n        <div style={{\n        padding: '2rem',\n        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',\n        borderRadius: '12px',\n        border: '1px solid rgba(255,255,255,0.1)'\n      }}>\n          <StaticLogo variant=\"text\" size=\"lg\" />\n        </div>\n      </div>\n\n      {/* SVG Version (What Storybook uses) */}\n      <div>\n        <h4 style={{\n        color: '#888',\n        marginBottom: '1rem',\n        fontSize: '12px',\n        textTransform: 'uppercase',\n        letterSpacing: '1px'\n      }}>\n          Block-Based SVG (Used in Storybook header)\n        </h4>\n        <div style={{\n        padding: '2rem',\n        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',\n        borderRadius: '12px',\n        border: '1px solid rgba(255,255,255,0.1)',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center'\n      }}>\n          <img src=\"/logo-storybook.svg\" alt=\"n3wth.AI\" style={{\n          height: '30px',\n          width: 'auto'\n        }} />\n        </div>\n        <p style={{\n        color: '#666',\n        fontSize: '11px',\n        marginTop: '0.5rem'\n      }}>\n          SVG with rectangles forming ASCII blocks + rainbow gradient animation\n        </p>\n      </div>\n\n      {/* ASCII Art Version */}\n      <div>\n        <h4 style={{\n        color: '#888',\n        marginBottom: '1rem',\n        fontSize: '12px',\n        textTransform: 'uppercase',\n        letterSpacing: '1px'\n      }}>\n          ASCII Art Component\n        </h4>\n        <div style={{\n        padding: '2rem',\n        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',\n        borderRadius: '12px',\n        border: '1px solid rgba(255,255,255,0.1)'\n      }}>\n          <StaticLogo variant=\"ascii\" size=\"md\" />\n        </div>\n      </div>\n\n      {/* ASCII Art SVG (New Storybook Header Logo) */}\n      <div>\n        <h4 style={{\n        color: '#888',\n        marginBottom: '1rem',\n        fontSize: '12px',\n        textTransform: 'uppercase',\n        letterSpacing: '1px'\n      }}>\n          ASCII Art SVG (Now in Storybook header!)\n        </h4>\n        <div style={{\n        padding: '2rem',\n        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',\n        borderRadius: '12px',\n        border: '1px solid rgba(255,255,255,0.1)',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center'\n      }}>\n          <img src=\"/logo-ascii-art.svg\" alt=\"n3wth.AI ASCII\" style={{\n          height: '36px',\n          width: 'auto'\n        }} />\n        </div>\n        <p style={{\n        color: '#666',\n        fontSize: '11px',\n        marginTop: '0.5rem'\n      }}>\n          True ASCII characters with rainbow gradient + glitch effects\n        </p>\n      </div>\n    </div>\n}",
            ...AllVariants.parameters?.docs?.source,
          },
        },
      }),
        (HeaderLogo.parameters = {
          ...HeaderLogo.parameters,
          docs: {
            ...HeaderLogo.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Storybook Header Logo',\n  render: () => <div style={{\n    padding: '2rem'\n  }}>\n      <h3 style={{\n      color: '#fff',\n      marginBottom: '2rem'\n    }}>Current Storybook Header Logo</h3>\n      <div style={{\n      padding: '1rem',\n      background: '#0a0a0a',\n      borderRadius: '8px',\n      border: '1px solid #333',\n      display: 'inline-block'\n    }}>\n        <img src=\"/logo-storybook.svg\" alt=\"n3wth.AI\" style={{\n        height: '40px'\n      }} />\n      </div>\n      <p style={{\n      color: '#888',\n      marginTop: '2rem',\n      maxWidth: '600px'\n    }}>\n        This SVG file is located at <code>/public/logo-storybook.svg</code> and is used by\n        Storybook&apos;s theme configuration. Due to Storybook&apos;s architecture, the header\n        cannot render React components, only static images.\n      </p>\n    </div>\n}",
              ...HeaderLogo.parameters?.docs?.source,
            },
          },
        }))
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
  },
])
