import type { MovieRow } from '@/types/movies'

export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAIL: (slug: MovieRow['slug']) => `/movies/${slug}`,
} as const

export const API_ENDPOINTS = {
  MOVIES: '/api/movies',
  MOST_LIKED: '/api/movies/most-liked',

  MOVIE_DETAIL: (slug: MovieRow['slug']) => `/api/movies/${slug}`,
  LIKE: (slug: MovieRow['slug']) => `/api/movies/${slug}/like`,
  UNLIKE: (slug: MovieRow['slug']) => `/api/movies/${slug}/unlike`,
} as const
