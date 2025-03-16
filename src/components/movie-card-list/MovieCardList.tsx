'use client'

import { useMovies } from '@/hooks/useMovies'
import MovieCard from '../movie-card/MovieCard'

export default function MovieCardList() {
  const { data: movies = [], isLoading } = useMovies()

  return (
    <ul className="w-full h-full gap-1 grid grid-cols-3 md:grid-cols-4">
      {isLoading && <div>Loading...</div>}
      {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  )
}
