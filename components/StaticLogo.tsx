import { cn } from '@/lib/utils'

interface StaticLogoProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'ascii' | 'text' | 'svg'
}

export function StaticLogo({ className, size = 'md', variant = 'ascii' }: StaticLogoProps) {
  const sizeClasses = {
    xs: 'text-[6px] leading-[6px]',
    sm: 'text-[8px] leading-[8px]',
    md: 'text-[10px] leading-[10px]',
    lg: 'text-[14px] leading-[14px]',
    xl: 'text-[20px] leading-[20px]',
  }

  if (variant === 'text') {
    const textSizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-xl',
      xl: 'text-3xl',
    }

    return (
      <span className={cn('font-mono font-bold tracking-tight', textSizes[size], className)}>
        n3wth<span className="text-gray-500">.AI</span>
      </span>
    )
  }

  if (variant === 'svg') {
    const svgSizes = {
      xs: 16,
      sm: 24,
      md: 32,
      lg: 48,
      xl: 64,
    }

    const svgSize = svgSizes[size]

    return (
      <svg
        width={svgSize * 3}
        height={svgSize}
        viewBox="0 0 96 32"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="24" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="white">
          n3wth
          <tspan fill="#888" fontSize="16">
            .AI
          </tspan>
        </text>
      </svg>
    )
  }

  // ASCII variant (default)
  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']

  const asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']

  return (
    <div className={cn('flex items-center', className)}>
      <pre
        className={cn(
          'font-mono whitespace-pre select-none flex items-center gap-1',
          sizeClasses[size]
        )}
      >
        <div className="text-white">
          {asciiLogo.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <div className="text-gray-400" style={{ fontSize: '0.8em' }}>
          {asciiDotAI.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </pre>
    </div>
  )
}
