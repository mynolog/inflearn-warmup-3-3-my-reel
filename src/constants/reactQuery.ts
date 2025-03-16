export const QUERY_KEY = {
  MOVIES: ['movies'],
  MOVIE_DETAILS: (id: string) => ['movies', id],
} as const
