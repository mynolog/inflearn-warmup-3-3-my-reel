import { TABLES } from '@/constants/supabase'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = await params
  const supabase = await createServerSupabaseClient()

  if (!slug) {
    return NextResponse.json({ error: 'slug가 필요합니다.' }, { status: 400 })
  }

  const { data: movieData, error: movieError } = await supabase
    .from(TABLES.MOVIES)
    .select('like_count')
    .eq('slug', slug)
    .single()

  if (movieError) {
    return NextResponse.json({ error: movieError.message }, { status: 500 })
  }

  const newLikeCount = movieData.like_count - 1

  const { error } = await supabase
    .from(TABLES.MOVIES)
    .update({ like_count: newLikeCount })
    .eq('slug', slug)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ like_count: newLikeCount })
}
