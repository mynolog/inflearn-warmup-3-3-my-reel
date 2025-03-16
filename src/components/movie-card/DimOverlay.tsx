'use client'

interface DimOverlayProps {
  title: string
}

export default function DimOverlay({ title }: DimOverlayProps) {
  return (
    <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-75 cursor-pointer transition-hover">
      <span className="text-white text-md sm:text-lg font-bold text-center px-6">{title}</span>
    </div>
  )
}
