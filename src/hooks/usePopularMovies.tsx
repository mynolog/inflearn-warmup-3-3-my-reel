import type { MovieRow } from '@/types/movies'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { CONFIG_ERROR } from '@/constants/error'

export function usePopularMovies() {
  return useQuery<{ movies: MovieRow[] }>({
    queryKey: [QUERY_KEY.POPULAR_MOVIES],
    queryFn: async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

      if (!baseUrl) {
        throw new Error(CONFIG_ERROR.MISSING_BASE_URL.message)
      }

      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOST_LIKED}`)
      return res.json()
    },
    staleTime: 0,
  })
}
