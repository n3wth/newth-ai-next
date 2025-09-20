const e = {
    button: {
      primary: {
        base: 'px-8 py-4 bg-violet-500 text-black font-mono font-bold transition-all',
        hover: 'hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
      },
      secondary: {
        base: 'px-8 py-4 border border-violet-500 text-violet-400 font-mono font-bold transition-all',
        hover: 'hover:bg-violet-500 hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]',
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
  },
  r = (...o) => o.filter(Boolean).join(' ')
export { e as a, r as c }
