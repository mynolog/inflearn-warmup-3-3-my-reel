'use client'

import { MovieRow } from '@/types/movies'
import MovieDetail from './MovieDetail'
import { useMovieBySlug } from '@/hooks/useMovieBySlug'
import MovieDetailSkeleton from './MovieDetailSkeleton'
import { useLikeMovie } from '@/hooks/useLikeMovie'

interface MovieDetailContainerProps {
  slug: MovieRow['slug']
}

export default function MovieDetailContainer({ slug }: MovieDetailContainerProps) {
  const { data: movie, isLoading, error } = useMovieBySlug(slug)
  const { likeCount, isLiked, likeMovie, unlikeMovie } = useLikeMovie(slug, movie?.like_count ?? 0)

  if (isLoading) return <MovieDetailSkeleton />
  if (error) return <div>{error.message}</div>
  if (!movie) return <div>해당 영화를 찾을 수 없습니다.</div>

  return (
    <MovieDetail
      movie={movie}
      likeCount={likeCount}
      isLiked={isLiked}
      likeMovie={likeMovie}
      unlikeMovie={unlikeMovie}
    />
  )
}
