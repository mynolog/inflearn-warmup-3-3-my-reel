'use client'

import Skeleton from '../common/skeleton/Skeleton'

export default function MovieDetailSkeleton() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-3">
      <div className="w-full md:w-1/3 max-w-sm">
        <Skeleton aspectRatio="2/3" className="w-full rounded-md" />
      </div>

      <div className="w-full md:w-2/3 flex flex-col px-6 gap-5">
        <Skeleton width="75%" height="40px" className="rounded-lg" />
        <Skeleton width="90%" height="150px" className="rounded-lg" />
        <div className="text-lg font-bold flex items-center gap-2">
          <Skeleton width="20px" height="20px" className="rounded-full" />
          <Skeleton width="170px" height="20px" className="rounded-lg" />
        </div>
        <Skeleton width="200px" height="20px" className="rounded-lg" />
        <Skeleton width="200px" height="20px" className="rounded-lg" />
      </div>
    </div>
  )
}
