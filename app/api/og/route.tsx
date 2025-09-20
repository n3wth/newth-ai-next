import { ImageResponse } from 'next/og'

// Using Node.js runtime for better static generation compatibility
// export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'Oliver Newth'
    const subtitle = searchParams.get('subtitle') || 'AI Developer'
    const type = searchParams.get('type') || 'default'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, #000000 50%)',
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(139, 92, 246, 0.03) 49%, rgba(139, 92, 246, 0.03) 51%, transparent 52%),
                                linear-gradient(-45deg, transparent 48%, rgba(139, 92, 246, 0.03) 49%, rgba(139, 92, 246, 0.03) 51%, transparent 52%)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '80px',
            }}
          >
            {type === 'project' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    borderRadius: '9999px',
                    padding: '8px 24px',
                    fontSize: '18px',
                    color: '#c4b5fd',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  PROJECT
                </div>
              </div>
            )}

            <h1
              style={{
                fontSize: type === 'project' ? '72px' : '84px',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '20px',
                background: 'linear-gradient(to bottom right, #ffffff, #e9d5ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: '32px',
                color: '#9ca3af',
                fontWeight: 400,
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: '60px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  }}
                />
                <span
                  style={{
                    fontSize: '24px',
                    color: '#e5e7eb',
                    fontWeight: 500,
                  }}
                >
                  newth.ai
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
