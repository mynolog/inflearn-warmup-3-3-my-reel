'use client'

import type { MovieRowWithLikeStatus } from '@/types/movies'
import Image from 'next/image'
import DimOverlay from './DimOverlay'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

interface MovieCardProps {
  movie: MovieRowWithLikeStatus
  isLoaded: boolean
  onLoad: () => void
}

export default function MovieCard({ movie, onLoad, isLoaded }: MovieCardProps) {
  return (
    <div className="col-span-1">
      <div className="relative w-full max-w-sm">
        <Link href={ROUTES.MOVIE_DETAIL(movie.slug)}>
          <DimOverlay title={movie.title} likeCount={movie.like_count} isLiked={movie.isLiked} />
          <Image
            src={movie.image_url}
            priority
            width={500}
            height={750}
            alt={movie.slug}
            onLoad={onLoad}
            className={`transition-opacity duration-350 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>
      </div>
    </div>
  )
}
