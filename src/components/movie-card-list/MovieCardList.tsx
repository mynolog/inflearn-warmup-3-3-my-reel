'use client'

import type { MovieRowWithLikeStatus } from '@/types/movies'
import MovieCardContainer from '../movie-card/MovieCardContainer'

interface MovieCardListProps {
  movies: MovieRowWithLikeStatus[]
}

export default function MovieCardList({ movies }: MovieCardListProps) {
  return (
    <ul className="w-full h-full gap-1 grid grid-cols-3 md:grid-cols-4">
      {movies && movies.map((movie) => <MovieCardContainer key={movie.id} movie={movie} />)}
    </ul>
  )
}
