import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'
import { CONFIG_ERROR, ERROR_RESPONSE } from '@/constants/error'

export function useMovieBySlug(slug: MovieRow['slug']) {
  return useQuery<MovieRow, Error>({
    queryKey: [QUERY_KEY.MOVIE_DETAILS, slug],
    queryFn: async (): Promise<MovieRow> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

      if (!baseUrl) {
        throw new Error(CONFIG_ERROR.MISSING_BASE_URL.message)
      }
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIE_DETAIL(slug)}`)
      if (!res.ok) throw new Error(ERROR_RESPONSE.FETCH_MOVIE_FAIL.message)

      const data: MovieRow = await res.json()
      if (!data) {
        throw new Error(ERROR_RESPONSE.MOVIE_NOT_FOUND.message)
      }
      return data
    },
    enabled: !!slug,
    staleTime: 0,
  })
}
