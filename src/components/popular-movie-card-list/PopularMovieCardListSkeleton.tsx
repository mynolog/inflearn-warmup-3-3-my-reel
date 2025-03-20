'use client'

import Skeleton from '../common/skeleton/Skeleton'

export default function PopularMovieCardListSkeleton() {
  return (
    <div className="w-2/3 flex flex-col gap-2 mx-auto">
      <h3 className="text-xl font-bold">많은 사람들이 좋아하는 영화</h3>
      <div className="w-full h-full gap-1 grid grid-cols-3 lg:grid-cols-6 mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} width="100%" height="200px" className="rounded-lg" />
        ))}
      </div>
    </div>
  )
}
