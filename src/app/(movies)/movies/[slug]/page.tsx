import Main from './Main'

interface MovieDetailPageProps {
  params: {
    slug: string
  }
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  // Next.js 15에서는 params를 비동기적으로 접근해야 함
  const { slug } = await params

  return (
    <div className="max-w-4xl mx-auto flex items-center md:items-start py-20 px-4 absolute top-0 bottom-0 left-0 right-0">
      <Main slug={slug} />
    </div>
  )
}
