'use client'

import MovieCard from '../movie-card/MovieCard'

export default function MovieCardList() {
  return (
    <div className="w-full h-full gap-1 grid grid-cols-3 md:grid-cols-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}
