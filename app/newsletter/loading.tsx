export default function NewsletterLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        <div className="relative py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* Badge skeleton */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2">
                <div className="h-4 w-4 bg-purple-400/20 rounded animate-pulse"></div>
                <div className="h-4 w-24 bg-purple-400/20 rounded animate-pulse"></div>
              </div>

              {/* Title skeleton */}
              <div className="h-16 bg-white/10 rounded animate-pulse mb-6 mx-auto max-w-md"></div>

              {/* Description skeleton */}
              <div className="space-y-2 mb-12">
                <div className="h-6 bg-white/5 rounded animate-pulse mx-auto max-w-2xl"></div>
                <div className="h-6 bg-white/5 rounded animate-pulse mx-auto max-w-xl"></div>
              </div>

              {/* Benefits skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 p-6">
                      <div className="h-5 w-5 bg-purple-400/20 rounded mb-3 animate-pulse"></div>
                      <div className="h-6 bg-white/10 rounded mb-2 w-24 animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded w-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup skeleton */}
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
                <div className="h-8 bg-white/10 rounded mb-4 w-48 mx-auto animate-pulse"></div>
                <div className="h-12 bg-white/10 rounded mb-4 w-full animate-pulse"></div>
                <div className="h-10 bg-purple-500/20 rounded w-32 mx-auto animate-pulse"></div>
              </div>

              {/* Recent Topics skeleton */}
              <div className="mt-20">
                <div className="h-8 bg-white/10 rounded mb-8 w-48 mx-auto animate-pulse"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <span className="text-purple-400">→</span>
                      <div className="h-4 bg-white/5 rounded animate-pulse flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="h-32 bg-white/5 animate-pulse"></div>
    </div>
  )
}
