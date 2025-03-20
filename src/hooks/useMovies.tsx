import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'
import { CONFIG_ERROR } from '@/constants/error'

export function useMovies() {
  return useInfiniteQuery<{ movies: MovieRow[]; page: number; hasNextPage: boolean }>({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: async ({
      pageParam = 1,
    }): Promise<{ movies: MovieRow[]; page: number; hasNextPage: boolean }> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

      if (!baseUrl) {
        throw new Error(CONFIG_ERROR.MISSING_BASE_URL.message)
      }
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIES}?page=${pageParam}`)
      return res.json()
    },
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.page + 1 : null),
    initialPageParam: 1,
    staleTime: 0,
  })
}
