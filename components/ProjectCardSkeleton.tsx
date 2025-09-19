export function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-6 bg-white/10 rounded w-3/4 mb-2" />
          <div className="h-5 bg-white/10 rounded w-20" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10" />
          <div className="w-8 h-8 rounded-lg bg-white/10" />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
      </div>

      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-white/10 rounded-lg w-16" />
        <div className="h-6 bg-white/10 rounded-lg w-20" />
        <div className="h-6 bg-white/10 rounded-lg w-14" />
      </div>

      <div className="h-px bg-white/5 my-4" />

      <div className="flex gap-4">
        <div className="h-4 bg-white/10 rounded w-12" />
        <div className="h-4 bg-white/10 rounded w-16" />
      </div>
    </div>
  )
}