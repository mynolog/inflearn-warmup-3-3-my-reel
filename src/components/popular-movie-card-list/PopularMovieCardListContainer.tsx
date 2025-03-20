import { useEffect, useState } from 'react'
import { usePopularMovies } from '@/hooks/usePopularMovies'
import { LikedMovie } from '@/types/movies'
import PopularMovieCardList from './PopularMovieCardList'
import PopularMovieCardListSkeleton from './PopularMovieCardListSkeleton'

export default function PopularMovieCardListContainer() {
  const popularMoviesQuery = usePopularMovies()
  const [likedMovies, setLikedMovies] = useState<LikedMovie[]>([])

  useEffect(() => {
    try {
      const storedLikes = JSON.parse(localStorage.getItem('likedMovies') || '[]')
      setLikedMovies(storedLikes)
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      setLikedMovies([])
    }
  }, [])

  if (popularMoviesQuery.isLoading) return <PopularMovieCardListSkeleton />
  if (popularMoviesQuery.isError) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>

  const popularMovies = popularMoviesQuery.data?.movies ?? []

  if (!popularMovies.length) return <div>결과 없음</div>

  const popularMoviesWithLikeStatus = popularMovies.map((movie) => ({
    ...movie,
    isLiked: likedMovies.some((likedMovie) => likedMovie.slug === movie.slug),
  }))

  return <PopularMovieCardList popularMovies={popularMoviesWithLikeStatus} />
}
