'use client'

import type { MovieRowWithLikeStatus } from '@/types/movies'
import { useState } from 'react'
import MovieCard from './MovieCard'

interface MovieCardContainerProps {
  movie: MovieRowWithLikeStatus
}

export default function MovieCardContainer({ movie }: MovieCardContainerProps) {
  // 개별 이미지 로딩 상태
  const [isLoaded, setIsLoaded] = useState(false)

  return <MovieCard movie={movie} isLoaded={isLoaded} onLoad={() => setIsLoaded(true)} />
}
