import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'

export function useMovies() {
  return useInfiniteQuery<{ movies: MovieRow[]; page: number; hasNextPage: boolean }>({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: async ({
      pageParam = 1,
    }): Promise<{ movies: MovieRow[]; page: number; hasNextPage: boolean }> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIES}?page=${pageParam}`)
      return res.json()
    },
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.page + 1 : null),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
