'use client'

import Skeleton from '../common/skeleton/Skeleton'

export default function MovieCardListSkeleton() {
  return (
    <div className="w-full h-full gap-1 grid grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 16 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full aspect-[2/3] rounded-lg transition-opacity duration-300 opacity-100"
        />
      ))}
    </div>
  )
}
