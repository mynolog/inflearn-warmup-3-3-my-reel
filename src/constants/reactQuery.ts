export const QUERY_KEY = {
  MOVIES: ['movies'],
  SEARCH_MOVIES: ['searchMovies'],
  MOVIE_DETAILS: (id: string) => ['movies', id],
} as const
