import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import { API_ENDPOINTS } from '@/constants/routes'
import { MovieRow } from '@/types/movies'

export function useMovieBySlug(slug: MovieRow['slug']) {
  return useQuery<MovieRow, Error>({
    queryKey: [QUERY_KEY.MOVIE_DETAILS, slug],
    queryFn: async (): Promise<MovieRow> => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!
      const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIE_DETAIL(slug)}`)
      if (!res.ok) throw new Error('영화 정보를 불러올 수 없습니다.')

      const data: MovieRow = await res.json()
      if (!data) {
        throw new Error('영화 정보를 찾을 수 없습니다.')
      }
      return data
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
