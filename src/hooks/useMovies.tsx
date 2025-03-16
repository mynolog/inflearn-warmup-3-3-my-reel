import { useQuery } from '@tanstack/react-query'
import { CONFIG_ERROR, ERROR_RESPONSE } from '@/constants/error'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'

export function useMovies() {
  return useQuery<MovieRow[], Error>({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: async (): Promise<MovieRow[]> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      if (!baseUrl) throw new Error(CONFIG_ERROR.MISSING_BASE_URL.message)

      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIES}`, {
        next: { revalidate: 1800 },
      })
      if (!res.ok) {
        throw new Error(ERROR_RESPONSE.FETCH_MOVIE_FAIL.message)
      }
      return await res.json()
    },
    staleTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
