import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'

export async function GET(request: Request) {
  const supabase = await createServerSupabaseClient()

  const { searchParams } = new URL(request.url)
  const searchQuery = searchParams.get('query') || ''

  let query = supabase.from(TABLES.MOVIES).select('*')

  if (searchQuery) {
    query = query.ilike('title', `%${searchQuery}%`)
  } else {
    query = query.order('order_index', { ascending: true })
  }

  const { data: movies, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(movies, {
    headers: {
      'Cache-Control': 's-maxage=1800, stale-while-revalidate',
    },
  })
}
