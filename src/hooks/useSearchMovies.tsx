'use client'

import { useQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from '@/constants/routes'
import { QUERY_KEY } from '@/constants/reactQuery'
import { MovieRow } from '@/types/movies'
import { useSearchStore } from '@/stores/useSearchStore'
import { CONFIG_ERROR, ERROR_RESPONSE } from '@/constants/error'

export function useSearchMovies() {
  const { searchQuery } = useSearchStore()

  return useQuery<MovieRow[]>({
    queryKey: [QUERY_KEY.SEARCH_MOVIES, searchQuery],
    queryFn: async (): Promise<MovieRow[]> => {
      if (!searchQuery) return []

      // fetch 요청 자체를 디바운스 (300ms 대기 후 실행)
      await new Promise((resolve) => setTimeout(resolve, 300))

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      if (!baseUrl) throw new Error(CONFIG_ERROR.MISSING_BASE_URL.message)

      const res = await fetch(
        `${baseUrl}${API_ENDPOINTS.MOVIES}?query=${encodeURIComponent(searchQuery)}`,
      )

      if (!res.ok) {
        throw new Error(ERROR_RESPONSE.FETCH_MOVIE_FAIL.message)
      }

      const data = await res.json()
      return data.movies as MovieRow[]
    },
    enabled: !!searchQuery,
    staleTime: 1000 * 60 * 5,
  })
}
