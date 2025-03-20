export const QUERY_KEY = {
  MOVIES: ['movies'],
  SEARCH_MOVIES: ['searchMovies'],
  MOVIE_DETAILS: (slug: string) => ['movies', slug],
  POPULAR_MOVIES: ['popularMovies'],
} as const
