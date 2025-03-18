import { useState, useEffect } from 'react'
import { LikedMovie, MovieRow } from '@/types/movies'
import { API_ENDPOINTS } from '@/constants/routes'
import { LikeMovieResponseDTO } from '@/dto/movie'

export function useLikeMovie(slug: string, initialLikeCount: MovieRow['like_count']) {
  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [isLiked, setIsLiked] = useState(false)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (!baseUrl) {
    throw new Error('baseUrl이 없습니다.')
  }

  // 컴포넌트가 마운트될 때, 로컬 스토리지에서 좋아요 상태 초기화
  useEffect(() => {
    const likedMovies: LikedMovie[] = JSON.parse(localStorage.getItem('likedMovies') || '[]')
    const movieLiked = likedMovies.some((movie) => movie.slug === slug)
    setIsLiked(movieLiked)

    if (movieLiked) {
      // 영화가 좋아요 목록에 있으면, 해당 좋아요 수를 설정
      const likedMovie = likedMovies.find((movie) => movie.slug === slug)
      if (likedMovie) {
        setLikeCount(likedMovie.likeCount)
      }
    } else {
      // 좋아요 목록에 없으면 기본값으로 설정
      setLikeCount(initialLikeCount)
    }
  }, [slug, initialLikeCount])

  const likeMovie = async () => {
    try {
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.LIKE(slug)}`, {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('Failed to like the movie')
      }

      const data: LikeMovieResponseDTO = await res.json()
      setLikeCount(data.like_count) // 서버에서 받아온 새로운 좋아요 수로 업데이트
      setIsLiked(true)

      // 로컬 스토리지에 영화 추가 또는 업데이트
      const likedMovies: LikedMovie[] = JSON.parse(localStorage.getItem('likedMovies') || '[]')

      // 이미 좋아요를 누른 영화가 있다면, likeCount를 업데이트
      const existingMovieIndex = likedMovies.findIndex((movie) => movie.slug === slug)

      if (existingMovieIndex >= 0) {
        likedMovies[existingMovieIndex].likeCount = data.like_count // 좋아요 수 업데이트
      } else {
        // 좋아요를 누른 적이 없다면 새로 추가
        const newLikedMovie = { slug, likeCount: data.like_count }
        likedMovies.push(newLikedMovie)
      }

      localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
    } catch (error) {
      console.error(error)
    }
  }

  const unlikeMovie = async () => {
    try {
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.UNLIKE(slug)}`, {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('Failed to unlike the movie')
      }

      const data: LikeMovieResponseDTO = await res.json()

      setLikeCount(data.like_count)
      setIsLiked(false)

      // 로컬 스토리지에서 해당 영화 정보 삭제
      const likedMovies: LikedMovie[] = JSON.parse(localStorage.getItem('likedMovies') || '[]')
      const updatedLikedMovies = likedMovies.filter((movie) => movie.slug !== slug)

      // 로컬 스토리지 갱신
      localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    likeCount,
    isLiked,
    likeMovie,
    unlikeMovie,
  }
}
