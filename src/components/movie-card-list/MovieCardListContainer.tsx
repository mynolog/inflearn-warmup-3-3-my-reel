'use client'

import { useMovies } from '@/hooks/useMovies'
import { useSearchMovies } from '@/hooks/useSearchMovies'
import MovieCardList from './MovieCardList'
import { useSearchStore } from '@/stores/useSearchStore'
import MovieCardListSkeleton from './MovieCardListSkeleton'

export default function MovieCardListContainer() {
  const { searchQuery } = useSearchStore()

  const moviesQuery = useMovies()
  const searchMoviesQuery = useSearchMovies()

  const movies = searchQuery ? searchMoviesQuery.data : moviesQuery.data
  const isLoading = searchQuery ? searchMoviesQuery.isLoading : moviesQuery.isLoading
  const isFetching = searchQuery ? searchMoviesQuery.isFetching : moviesQuery.isFetching

  if (isLoading || isFetching) return <MovieCardListSkeleton />
  if (!movies) return <div>영화 목록을 불러올 수 없습니다.</div>

  return <MovieCardList movies={movies} />
}
