import MovieDetailContainer from '@/components/movie-detail/MovieDetailContainer'
import { MovieRow } from '@/types/movies'

interface MainProps {
  slug: MovieRow['slug']
}

export default function Main({ slug }: MainProps) {
  return <MovieDetailContainer slug={slug} />
}
