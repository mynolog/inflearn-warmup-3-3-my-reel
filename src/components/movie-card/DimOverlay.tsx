'use client'

interface DimOverlayProps {
  title: string
  likeCount: number
  isLiked: boolean
}

export default function DimOverlay({ title, likeCount, isLiked }: DimOverlayProps) {
  return (
    <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-75 cursor-pointer transition-hover">
      <div className="flex flex-col gap-5 text-white text-xs sm:text-sm md:text-md font-bold text-center px-6">
        <p>{title}</p>
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {isLiked ? (
            <i className="fa-solid fa-heart text-red-500" />
          ) : (
            <i className="fa-regular fa-heart text-red-500" />
          )}
          <span className="text-sm">{likeCount}</span>
        </div>
      </div>
    </div>
  )
}
