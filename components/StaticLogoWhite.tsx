export function StaticLogoWhite() {
  const asciiLogo = ['█▄ █ █▀▀ █ █ █ ▀█▀ █ █', '█ ▀█ █▀▀ ▀▄▀▄▀  █  █▀█', '█  █ █▄▄  ▀ ▀   █  █ █']
  const asciiDotAI = ['  ▄▀█ █', '  █▀█ █', '°']

  return (
    <div className="flex items-center">
      <pre className="font-mono text-[10px] leading-[10px] whitespace-pre select-none flex items-center gap-1 text-white">
        <div className="relative">
          <div className="relative">
            {asciiLogo.map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        </div>
        <div className="text-white/60 text-[8px] leading-[8px] -mt-0.5">
          {asciiDotAI.map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
        </div>
      </pre>
    </div>
  )
}
