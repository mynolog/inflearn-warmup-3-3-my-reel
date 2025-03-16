'use client'

import type { MovieRow } from '@/types/movies'
import MovieCard from './MovieCard'

interface MovieCardContainerProps {
  movie: MovieRow
}

export default function MovieCardContainer({ movie }: MovieCardContainerProps) {
  return <MovieCard movie={movie} />
}
