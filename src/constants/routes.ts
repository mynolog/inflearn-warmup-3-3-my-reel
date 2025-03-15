export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAIL: (id: string) => `/movies/${id}`,
} as const
