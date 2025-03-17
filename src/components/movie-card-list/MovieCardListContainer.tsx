'use client'

import { useInView } from 'react-intersection-observer'
import { useMovies } from '@/hooks/useMovies'
import { useSearchMovies } from '@/hooks/useSearchMovies'
import MovieCardList from './MovieCardList'
import { useSearchStore } from '@/stores/useSearchStore'
import MovieCardListSkeleton from './MovieCardListSkeleton'
import { useEffect } from 'react'

export default function MovieCardListContainer() {
  const { searchQuery } = useSearchStore()

  // 검색어가 있으면 검색 API, 없으면 무한 스크롤 API 사용
  const moviesQuery = useMovies()
  const searchMoviesQuery = useSearchMovies()

  const isSearching = !!searchQuery
  const isLoading = isSearching ? searchMoviesQuery.isLoading : moviesQuery.isLoading
  const isFetching = isSearching ? searchMoviesQuery.isFetching : moviesQuery.isFetching
  const hasNextPage = !isSearching && moviesQuery.hasNextPage // 검색은 한 페이지만 존재

  const { ref, inView } = useInView({
    threshold: 0.1, // 10% 보이면 감지
    rootMargin: '50px', // 50px 전에 미리 감지
  })

  // 검색이 아닐 경우에만 무한 스크롤 감지
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      console.log('Fetching next page...')
      moviesQuery.fetchNextPage()
    }
  }, [inView, hasNextPage, isFetching])

  // 로딩 중이면 스켈레톤 표시
  if (isLoading) return <MovieCardListSkeleton />

  // 데이터가 없으면 예외 처리
  const movies = isSearching
    ? (searchMoviesQuery.data ?? []) // 검색 결과
    : (moviesQuery.data?.pages.flatMap((page) => page.movies) ?? []) // 무한 스크롤 결과를 1차원 배열 형태로 저장

  if (!movies.length) return <div>영화 목록을 불러올 수 없습니다.</div>

  return (
    <>
      <MovieCardList movies={movies} />
      {!isSearching && <div ref={ref} style={{ height: '1px', visibility: 'hidden' }} />}
    </>
  )
}
