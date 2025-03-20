'use client'

import type { MovieRowWithLikeStatus } from '@/types/movies'
import MovieCardContainer from '../movie-card/MovieCardContainer'

interface PopularMovieCardListProps {
  popularMovies: MovieRowWithLikeStatus[]
}

export default function PopularMovieCardList({ popularMovies }: PopularMovieCardListProps) {
  return (
    <div className="w-2/3 flex flex-col gap-2 mx-auto">
      <h3 className="text-xl font-bold">많은 사람들이 좋아하는 영화</h3>
      <ul className="w-full h-full gap-1 grid grid-cols-5 mx-auto">
        {popularMovies &&
          popularMovies.map((movie) => <MovieCardContainer key={movie.id} movie={movie} />)}
      </ul>
    </div>
  )
}
