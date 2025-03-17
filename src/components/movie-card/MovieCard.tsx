'use client'

import type { MovieRow } from '@/types/movies'
import Image from 'next/image'
import DimOverlay from './DimOverlay'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

interface MovieCardProps {
  movie: MovieRow
  isLoaded: boolean
  onLoad: () => void
}

export default function MovieCard({ movie, onLoad, isLoaded }: MovieCardProps) {
  return (
    <div className="col-span-1">
      <div className="relative w-full max-w-sm">
        <Link href={ROUTES.MOVIE_DETAIL(movie.slug)}>
          <DimOverlay title={movie.title} />
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
