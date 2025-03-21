import type { Metadata } from 'next'
import type { MovieRow } from '@/types/movies'
import { API_ENDPOINTS } from '@/constants/routes'
import Main from './Main'

interface GenerateMetadataParams {
  params: { slug: string }
  searchParams?: Record<string, string | string[] | undefined>
}

export async function generateMetadata({ params }: GenerateMetadataParams): Promise<Metadata> {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}${API_ENDPOINTS.MOVIE_DETAIL(slug)}`)

  if (!res.ok) {
    return {
      title: '영화 정보를 찾을 수 없습니다.',
      description: '해당 영화의 정보를 가져올 수 없습니다.',
      openGraph: { images: [] },
    }
  }

  const movie: MovieRow = await res.json()

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [{ url: movie.image_url }],
    },
  }
}

export default async function MovieDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  return (
    <div className="max-w-4xl mx-auto flex items-center md:items-start py-20 px-4 absolute top-0 bottom-0 left-0 right-0">
      <Main slug={slug} />
    </div>
  )
}
