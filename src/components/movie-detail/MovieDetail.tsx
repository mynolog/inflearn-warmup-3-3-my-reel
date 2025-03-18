'use client'

import { MovieRow } from '@/types/movies'
import Image from 'next/image'

interface MovieDetailProps {
  movie: MovieRow
  likeCount: number
  isLiked: boolean
  likeMovie: () => void
  unlikeMovie: () => void
}

export default function MovieDetail({
  movie,
  likeCount,
  isLiked,
  likeMovie,
  unlikeMovie,
}: MovieDetailProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
      <div className="w-full md:w-1/3 max-w-sm flex flex-col gap-3">
        <Image src={movie.image_url} priority width={500} height={750} alt={movie.slug} />
        <div className="flex items-center gap-2 font-bold text-xl">
          {isLiked ? (
            <i
              className="fa-solid fa-heart text-red-500 cursor-pointer transition-transform transform hover:scale-110 active:scale-90"
              onClick={unlikeMovie}
            />
          ) : (
            <i
              className="fa-regular fa-heart text-red-500 cursor-pointer transition-transform transform hover:scale-110 active:scale-90"
              onClick={likeMovie}
            />
          )}
          <span>{likeCount}</span>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6 gap-4">
        <h2 className="text-3xl font-extrabold">{movie.title}</h2>
        <p className="text-lg">{movie.overview}</p>
        <div className="overflow-hidden rounded-lg border-2 border-gray-300">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-bold">⭐ Vote Average</td>
                <td className="p-2">{movie.vote_average}</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">🔥 Popularity</td>
                <td className="p-2">{movie.popularity}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">📅 Release Date</td>
                <td className="p-2">{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
