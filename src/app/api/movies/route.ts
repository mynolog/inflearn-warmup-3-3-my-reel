import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'

export async function GET(request: Request) {
  const supabase = await createServerSupabaseClient()

  const { searchParams } = new URL(request.url)
  const searchQuery = searchParams.get('query') || ''
  const page = Number(searchParams.get('page')) || 1
  const LIMIT = 12
  const offset = (page - 1) * LIMIT

  let query = supabase
    .from(TABLES.MOVIES)
    .select('*')
    // like_count 많은 순 정렬
    .order('like_count', { ascending: false })
    // like_count가 동률일 경우 order_index 낮은 순 정렬
    .order('order_index', { ascending: true })
    .range(offset, offset + LIMIT - 1)

  if (searchQuery) {
    query = query.ilike('title', `%${searchQuery}%`)
  } else {
    query = query.order('order_index', { ascending: true })
  }

  const { data: movies, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const { count } = await supabase.from(TABLES.MOVIES).select('*', { count: 'exact', head: true })

  return NextResponse.json(
    {
      movies,
      page,
      hasNextPage: offset + movies.length < (count || 0),
    },
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    },
  )
}
