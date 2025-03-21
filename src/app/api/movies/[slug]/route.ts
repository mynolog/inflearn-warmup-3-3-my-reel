import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'
import { ERROR_RESPONSE } from '@/constants/error'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params

    if (!slug) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.MISSING_SLUG.message },
        { status: ERROR_RESPONSE.MISSING_SLUG.status },
      )
    }

    const supabase = await createServerSupabaseClient()
    const { data: movie, error } = await supabase
      .from(TABLES.MOVIES)
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.DB_ERROR.message },
        { status: ERROR_RESPONSE.DB_ERROR.status },
      )
    }

    if (!movie) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.MOVIE_NOT_FOUND.message },
        { status: ERROR_RESPONSE.MOVIE_NOT_FOUND.status },
      )
    }

    return NextResponse.json(movie)
  } catch (error) {
    console.error('[GET /api/movies/:slug] Error: ', error)
    return NextResponse.json(
      { error: ERROR_RESPONSE.SERVER_ERROR.message },
      { status: ERROR_RESPONSE.SERVER_ERROR.status },
    )
  }
}
