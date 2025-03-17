'use client'

import { useQuery } from '@tanstack/react-query'
import { API_ENDPOINTS } from '@/constants/routes'
import { QUERY_KEY } from '@/constants/reactQuery'
import { MovieRow } from '@/types/movies'
import { useSearchStore } from '@/stores/useSearchStore'

export function useSearchMovies() {
  const { searchQuery } = useSearchStore()

  return useQuery<MovieRow[]>({
    queryKey: [QUERY_KEY.SEARCH_MOVIES, searchQuery],
    queryFn: async (): Promise<MovieRow[]> => {
      if (!searchQuery) return []
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!
      const res = await fetch(
        `${baseUrl}${API_ENDPOINTS.MOVIES}?query=${encodeURIComponent(searchQuery)}`,
      )

      if (!res.ok) {
        throw new Error('영화 정보를 불러올 수 없습니다.')
      }

      const data = await res.json()
      return data.movies as MovieRow[]
    },
    enabled: !!searchQuery,
  })
}
