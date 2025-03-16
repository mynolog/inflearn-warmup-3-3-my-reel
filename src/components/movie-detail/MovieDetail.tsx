'use client'

import { MovieRow } from '@/types/movies'
import Image from 'next/image'

interface MovieDetailProps {
  movie: MovieRow
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
      <div className="w-full md:w-1/3 max-w-sm">
        <Image src={movie.image_url} priority width={500} height={750} alt={movie.slug} />
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6 gap-4">
        <h2 className="text-3xl font-extrabold">{movie.title}</h2>
        <p className="text-lg">{movie.overview}</p>
        <div className="text-lg font-bold">
          <i className="fas fa-star mr-1" />
          <span>Vote Average: {movie.vote_average}</span>
        </div>
        <div className="text-lg font-bold">Popularity: {movie.popularity}</div>
        <div className="text-lg font-bold">Release Data: {movie.release_date}</div>
      </div>
    </div>
  )
}
