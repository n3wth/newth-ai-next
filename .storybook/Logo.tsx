import React from 'react'
import { AnimatedLogo } from '../components/AnimatedLogo'

export const StorybookLogo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        background:
          'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
          animation: 'shimmer 3s infinite',
        }}
      />

      <AnimatedLogo
        enableColorOnHover={true}
        enableColorOnGlitch={true}
        baseSaturation={90}
        colorIntensity={1.2}
        scale={0.5}
      />

      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  )
}
