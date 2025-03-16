import type { MovieRow } from '@/types/movies'

export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAIL: (slug: MovieRow['slug']) => `/movies/${slug}`,
} as const

export const API_ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIE_DETAIL: (slug: MovieRow['slug']) => `/api/movies/${slug}`,
}
