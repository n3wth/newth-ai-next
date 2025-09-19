/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        border: 'var(--border)',
      },
      animation: {
        aurora: 'aurora 15s linear infinite',
        float: 'float 20s ease-in-out infinite',
        glow: 'glow 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        meteor: 'meteor linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translateY(100%) rotate(0deg)' },
          '100%': { transform: 'translateY(-100%) rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-20px) translateX(10px) scale(1.05)' },
          '50%': { transform: 'translateY(10px) translateX(-5px) scale(0.95)' },
          '75%': { transform: 'translateY(-10px) translateX(-10px) scale(1.02)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(150px)' },
          '50%': { opacity: '0.8', filter: 'blur(100px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        meteor: {
          '0%': { transform: 'rotate(35deg) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'rotate(35deg) translateX(300px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
