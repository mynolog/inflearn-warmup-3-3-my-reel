import { TABLES } from '@/constants/supabase'
import type { MovieRow } from '@/types/movies'
import { createServerSupabaseClient } from '@/utils/supabase/server'

function handleError(error: unknown) {
  if (error) {
    console.error(error)
    throw error
  }
}

export async function getMovies(): Promise<MovieRow[]> {
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from(TABLES.MOVIES)
    .select('*')
    .order('order_index', { ascending: true })

  if (error) {
    handleError(error)
  }

  return data ?? []
}
