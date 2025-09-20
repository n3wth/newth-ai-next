'use client'

import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { WarpBackground } from '@/components/WarpBackground'

/**
 * Demo component showing prefers-reduced-motion support
 * This is just for testing - not intended for production use
 */
export function ReducedMotionDemo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative min-h-screen">
      <WarpBackground className="absolute inset-0">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold">Reduced Motion Demo</h1>

            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
              <p className="text-lg mb-4">
                Motion Preference:{' '}
                <strong>{prefersReducedMotion ? 'Reduced' : 'Full Animation'}</strong>
              </p>

              <p className="text-sm text-gray-300 mb-4">
                {prefersReducedMotion
                  ? 'Animations are simplified for better accessibility.'
                  : 'Full animations are enabled.'}
              </p>

              <div className="text-xs text-gray-400 space-y-2">
                <p>To test reduced motion:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>macOS: System Preferences → Accessibility → Display → Reduce motion</li>
                  <li>Windows: Settings → Ease of Access → Display → Show animations</li>
                  <li>Browser DevTools: Rendering tab → Emulate CSS prefers-reduced-motion</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded bg-green-900/20 border border-green-500/20">
                <h3 className="font-semibold text-green-400 mb-2">When Motion is Reduced:</h3>
                <ul className="text-green-200 space-y-1 text-xs">
                  <li>• Shapes fade gently instead of zooming</li>
                  <li>• No glitch effects or RGB splitting</li>
                  <li>• Hover effects are minimal</li>
                  <li>• Focus on content over animation</li>
                </ul>
              </div>

              <div className="p-4 rounded bg-blue-900/20 border border-blue-500/20">
                <h3 className="font-semibold text-blue-400 mb-2">When Motion is Full:</h3>
                <ul className="text-blue-200 space-y-1 text-xs">
                  <li>• Complex 3D shape animations</li>
                  <li>• Glitch and RGB split effects</li>
                  <li>• Full hover transforms</li>
                  <li>• Rich visual experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WarpBackground>
    </div>
  )
}
