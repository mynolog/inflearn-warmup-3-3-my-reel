import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getMovies } from '@/actions/movieActions'
import { QUERY_KEY } from '@/constants/reactQuery'
import Main from '@/components/layout/main/Main'

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: getMovies,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="text-2xl text-mint-700">
        <Main />
      </div>
    </HydrationBoundary>
  )
}
