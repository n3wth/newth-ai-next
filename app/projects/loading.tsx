export default function ProjectsLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header Skeleton */}
        <div className="relative pt-32 pb-16 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="h-16 bg-white/10 rounded animate-pulse mb-4 max-w-md"></div>
            <div className="h-6 bg-white/5 rounded animate-pulse max-w-3xl"></div>
          </div>
        </div>

        {/* Filters Skeleton */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-b border-white/5">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search skeleton */}
            <div className="flex-1 relative">
              <div className="h-10 bg-white/5 rounded-lg animate-pulse"></div>
            </div>

            {/* Status Filter skeleton */}
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-24 bg-white/5 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Tags skeleton */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-8 bg-white/5 rounded-lg animate-pulse"
                style={{ width: `${60 + Math.random() * 40}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="h-6 bg-white/5 rounded animate-pulse mb-8 w-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 animate-pulse">
                {/* Project image skeleton */}
                <div className="h-48 bg-white/10 rounded-lg mb-4"></div>

                {/* Project title skeleton */}
                <div className="h-6 bg-white/10 rounded mb-3 w-3/4"></div>

                {/* Project description skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-white/5 rounded w-full"></div>
                  <div className="h-4 bg-white/5 rounded w-5/6"></div>
                </div>

                {/* Project tags skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 bg-white/5 rounded-full animate-pulse"
                      style={{ width: `${40 + Math.random() * 30}px` }}
                    ></div>
                  ))}
                </div>

                {/* Project status and links skeleton */}
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-white/5 rounded w-20"></div>
                  <div className="h-8 bg-white/10 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="h-32 bg-white/5 animate-pulse"></div>
    </div>
  )
}
