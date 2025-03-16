'use client'

import type { MovieRow } from '@/types/movies'
import MovieCardContainer from '../movie-card/MovieCardContainer'

interface MovieCardListProps {
  movies: MovieRow[]
  isLoading: boolean
}

export default function MovieCardList({ movies, isLoading }: MovieCardListProps) {
  return (
    <ul className="w-full h-full gap-1 grid grid-cols-3 md:grid-cols-4">
      {isLoading && <div>Loading...</div>}
      {movies && movies.map((movie) => <MovieCardContainer key={movie.id} movie={movie} />)}
    </ul>
  )
}
