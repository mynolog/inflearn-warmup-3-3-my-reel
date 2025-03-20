import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'
import { ERROR_RESPONSE } from '@/constants/error'

export async function GET(_: Request) {
  try {
    const supabase = await createServerSupabaseClient()
    const { data: movies, error } = await supabase
      .from(TABLES.MOVIES)
      .select('*')
      .order('like_count', { ascending: false })
      .limit(6)

    if (error) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.DB_ERROR.message },
        { status: ERROR_RESPONSE.DB_ERROR.status },
      )
    }

    if (!movies) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.MOVIE_NOT_FOUND.message },
        { status: ERROR_RESPONSE.MOVIE_NOT_FOUND.status },
      )
    }

    return NextResponse.json({ movies })
  } catch (error) {
    console.error(error)
  }
}
