export default function WorkLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black text-white">
          {/* Subtle gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Back button skeleton */}
            <div className="h-6 w-32 bg-white/10 rounded animate-pulse mb-8"></div>

            {/* Title skeleton */}
            <div className="space-y-4 mb-6">
              <div className="h-16 bg-white/10 rounded animate-pulse max-w-2xl"></div>
              <div className="h-16 bg-white/10 rounded animate-pulse max-w-xl"></div>
            </div>

            {/* Description skeleton */}
            <div className="h-6 bg-white/5 rounded animate-pulse max-w-2xl mb-12"></div>

            {/* Quick stats skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-8 bg-white/10 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-white/5 rounded animate-pulse w-20"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline Skeleton */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="relative">
                  {/* Timeline connector skeleton */}
                  {index !== 3 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent" />
                  )}

                  <div className="flex gap-8">
                    {/* Company icon skeleton */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>

                    {/* Content skeleton */}
                    <div className="flex-1 pb-8">
                      <div className="mb-4">
                        {/* Company name skeleton */}
                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2 w-32"></div>
                        {/* Role and period skeleton */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-48"></div>
                          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24"></div>
                        </div>
                      </div>

                      {/* Description skeleton */}
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6 w-full"></div>

                      {/* Achievements skeleton */}
                      <div className="mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3 w-32"></div>
                        <div className="space-y-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse flex-1"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack skeleton */}
                      <div className="flex flex-wrap gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                            style={{ width: `${60 + Math.random() * 40}px` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section Skeleton */}
            <div className="mt-24 pt-24 border-t border-gray-200 dark:border-gray-800">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8 w-48"></div>

              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i}>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2 w-64"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2 w-48"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Skeleton */}
        <section className="py-24 px-4 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6 mx-auto max-w-md"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8 mx-auto max-w-lg"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mx-auto w-40"></div>
          </div>
        </section>
      </main>

      {/* Footer skeleton */}
      <div className="h-32 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>
    </div>
  )
}
