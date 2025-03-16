import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'

export function useMovies() {
  return useQuery<MovieRow[]>({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: async (): Promise<MovieRow[]> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIES}`)
      return res.json()
    },
    staleTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
