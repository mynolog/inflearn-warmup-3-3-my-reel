import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  // Next.js 15에서는 params를 비동기적으로 접근해야 함
  const { slug } = await params

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  console.log('Fetching movie with slug:', slug)

  const supabase = await createServerSupabaseClient()
  const { data: movie, error } = await supabase
    .from(TABLES.MOVIES)
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // movie === undefined 일 경우 예외처리하여 movie 객체가 리턴되는 것을 보장
  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 }) // 영화가 없을 경우 예외 처리
  }

  return NextResponse.json(movie)
}
