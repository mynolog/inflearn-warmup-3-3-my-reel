import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { TABLES } from '@/constants/supabase'

export async function GET() {
  const supabase = await createServerSupabaseClient()

  const { data: movies, error } = await supabase
    .from(TABLES.MOVIES)
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(movies, {
    headers: {
      'Cache-Control': 's-maxage=1800, stale-while-revalidate',
    },
  })
}
