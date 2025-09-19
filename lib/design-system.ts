/**
 * Design System Configuration
 * Centralized design tokens and theme configuration
 */

export const designTokens = {
  // Color Palette
  colors: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6', // Main brand violet
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    semantic: {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
    terminal: {
      bg: '#000000',
      text: '#ffffff',
      prompt: '#8b5cf6',
      comment: '#6b7280',
      active: '#10b981',
    }
  },

  // Typography
  typography: {
    fonts: {
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    lineHeights: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    }
  },

  // Spacing
  spacing: {
    0: '0px',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem',    // 96px
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(139, 92, 246, 0.5)',
    'glow-lg': '0 0 30px rgba(139, 92, 246, 0.3)',
  },

  // Animations
  animations: {
    durations: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    easings: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },

  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    overlay: 100,
    modal: 200,
    popover: 300,
    tooltip: 400,
    notification: 500,
  }
} as const

// ASCII Art Library
export const asciiArt = {
  logo: {
    main: [
      "█▄ █ █▀▀ █ █ █ ▀█▀ █ █",
      "█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█",
      "█  █ █▄▄  ▀ ▀   █  █ █"
    ],
    dotAI: [
      "  ▄▀█ █",
      "  █▀█ █",
      "°"
    ]
  },
  dividers: {
    horizontal: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    dots: "• • • • • • • • • • • • • • • • • • • •",
    dashed: "- - - - - - - - - - - - - - - - - - - -",
  },
  patterns: {
    diagonal: [
      "╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲",
      "╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱"
    ]
  },
  brackets: {
    open: "[",
    close: "]",
    angle: { open: "<", close: ">" },
    curly: { open: "{", close: "}" },
  },
  prompts: {
    terminal: ">_",
    shell: "$",
    arrow: ">",
    hash: "#",
  }
} as const

// Component Variants
export const componentVariants = {
  button: {
    primary: {
      base: "px-8 py-4 bg-violet-500 text-black font-mono font-bold transition-all",
      hover: "hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
    },
    secondary: {
      base: "px-8 py-4 border border-violet-500 text-violet-400 font-mono font-bold transition-all",
      hover: "hover:bg-violet-500 hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
    },
    ghost: {
      base: "px-4 py-2 text-violet-400 font-mono transition-all",
      hover: "hover:text-violet-300 hover:bg-violet-500/10",
    }
  },
  card: {
    default: {
      base: "p-6 bg-black border border-violet-500/30 transition-all",
      hover: "hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    },
    elevated: {
      base: "p-6 bg-gray-900 border border-violet-500/50 shadow-lg",
      hover: "hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    }
  },
  badge: {
    default: {
      base: "px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-400",
    },
    solid: {
      base: "px-3 py-1 text-xs font-mono bg-violet-500 text-black",
    }
  }
} as const

// Helper functions
export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const getColor = (path: string) => {
  const keys = path.split('.')
  let value: any = designTokens.colors
  for (const key of keys) {
    value = value[key]
  }
  return value
}

export const getSpacing = (size: keyof typeof designTokens.spacing) => {
  return designTokens.spacing[size]
}

export const getFontSize = (size: keyof typeof designTokens.typography.sizes) => {
  return designTokens.typography.sizes[size]
}