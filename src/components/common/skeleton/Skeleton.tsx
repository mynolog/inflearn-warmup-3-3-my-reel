'use client'

interface SkeletonProps {
  width?: string
  height?: string
  aspectRatio?: string
  borderRadius?: string
  className?: string
}

export default function Skeleton({
  width = '100%',
  height,
  aspectRatio,
  className = '',
  borderRadius = 'rounded-md',
}: SkeletonProps) {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${borderRadius} ${
        aspectRatio ? `aspect-[${aspectRatio}]` : ''
      } ${className}`}
      style={{
        width,
        height: aspectRatio ? undefined : height,
      }}
    />
  )
}
