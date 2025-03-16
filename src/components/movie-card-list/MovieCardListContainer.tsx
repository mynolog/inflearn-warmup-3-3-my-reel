'use client'

import { useMovies } from '@/hooks/useMovies'
import { useSearchMovies } from '@/hooks/useSearchMovies'
import MovieCardList from './MovieCardList'
import { useSearchStore } from '@/stores/useSearchStore'

export default function MovieCardListContainer() {
  const { searchQuery } = useSearchStore()

  const moviesQuery = useMovies()
  const searchMoviesQuery = useSearchMovies()

  const movies = searchQuery ? searchMoviesQuery.data : moviesQuery.data
  const isLoading = searchQuery ? searchMoviesQuery.isLoading : moviesQuery.isLoading

  return <MovieCardList movies={movies ?? []} isLoading={isLoading} />
}
