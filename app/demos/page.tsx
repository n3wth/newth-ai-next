import Link from 'next/link'

export default function DemosIndex() {
  const demos = [
    {
      title: 'Logo Effects & Keyframes',
      description: 'ASCII animations with keyframe helper for testing',
      path: '/demos/logo-effects',
      new: true,
    },
    {
      title: 'Background Effects',
      description: 'Various background patterns and effects',
      path: '/demos/backgrounds-demo',
    },
    {
      title: 'Standalone Hero',
      description: 'Hero section without header component',
      path: '/demos/hero-no-header',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Development Demos</h1>
          <p className="text-gray-400">Component and effect demonstrations for development</p>
        </div>

        <div className="grid gap-4">
          {demos.map((demo) => (
            <Link
              key={demo.path}
              href={demo.path}
              className="block p-6 border border-gray-800 rounded-lg bg-black/50 hover:bg-black/70 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{demo.title}</h2>
                {demo.new && (
                  <span className="px-2 py-1 text-xs font-mono bg-purple-500/20 text-purple-400 rounded">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-gray-400 mt-2">{demo.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-4 border border-gray-800 rounded-lg bg-black/50">
          <p className="text-sm text-gray-500 font-mono">
            Access demos directly: <code className="text-gray-400">/demos/[demo-name]</code>
          </p>
        </div>
      </div>
    </div>
  )
}
