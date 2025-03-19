import { ERROR_RESPONSE } from '@/constants/error'
import { TABLES } from '@/constants/supabase'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params
    const supabase = await createServerSupabaseClient()

    if (!slug) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.MISSING_SLUG.message },
        { status: ERROR_RESPONSE.MISSING_SLUG.status },
      )
    }

    const { data: movieData, error: movieError } = await supabase
      .from(TABLES.MOVIES)
      .select('like_count')
      .eq('slug', slug)
      .single()

    if (movieError) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.SERVER_ERROR.message },
        { status: ERROR_RESPONSE.SERVER_ERROR.status },
      )
    }

    return NextResponse.json({ like_count: movieData.like_count })
  } catch (error) {
    console.error('[GET api/movies/:slug/like] Error: ', error)
    return NextResponse.json(
      { error: ERROR_RESPONSE.SERVER_ERROR.message },
      { status: ERROR_RESPONSE.SERVER_ERROR.status },
    )
  }
}

export async function POST(_: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params
    const supabase = await createServerSupabaseClient()

    if (!slug) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.MISSING_SLUG.message },
        { status: ERROR_RESPONSE.MISSING_SLUG.status },
      )
    }

    const { data: movieData, error: movieError } = await supabase
      .from(TABLES.MOVIES)
      .select('like_count')
      .eq('slug', slug)
      .single()

    if (movieError) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.DB_ERROR.message },
        { status: ERROR_RESPONSE.DB_ERROR.status },
      )
    }

    const newLikeCount = movieData.like_count + 1

    const { error } = await supabase
      .from(TABLES.MOVIES)
      .update({ like_count: newLikeCount })
      .eq('slug', slug)

    if (error) {
      return NextResponse.json(
        { error: ERROR_RESPONSE.SERVER_ERROR.message },
        { status: ERROR_RESPONSE.SERVER_ERROR.status },
      )
    }

    return NextResponse.json({ like_count: newLikeCount })
  } catch (error) {
    console.error('[POST api/movies/:slug/like] Error: ', error)
    return NextResponse.json(
      { error: ERROR_RESPONSE.SERVER_ERROR.message },
      { status: ERROR_RESPONSE.SERVER_ERROR.status },
    )
  }
}
