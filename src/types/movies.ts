import { Database } from 'types_db'

export type MovieRow = Database['public']['Tables']['myreel_movies']['Row']

export type MovieRowWithLikeStatus = MovieRow & {
  isLiked: boolean
}

export interface LikedMovie {
  slug: string
  likeCount: number
}
