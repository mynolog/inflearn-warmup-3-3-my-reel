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
        <Skeleton width="90%" height="120px" className="rounded-lg" />
      </div>
    </div>
  )
}
