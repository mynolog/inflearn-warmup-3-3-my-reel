import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/reactQuery'
import Main from '@/components/layout/main/Main'
import { API_ENDPOINTS } from '@/constants/routes'

export default async function Home() {
  const queryClient = new QueryClient()

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  if (!baseUrl) {
    throw new Error('BASE_URL 환경 변수가 정의되지 않았습니다.')
  }

  const res = await fetch(`${baseUrl}${API_ENDPOINTS.MOVIES}`)
  const movies = res.ok ? await res.json() : []

  queryClient.setQueryData([QUERY_KEY.MOVIES, 'all'], movies)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  )
}
