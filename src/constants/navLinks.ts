import { ROUTES } from './routes'

interface NavLink {
  label: 'Movies' | 'Dramas'
  href: (typeof ROUTES)[keyof typeof ROUTES]
}

export const NAV_LINKS: NavLink[] = [{ label: 'Movies', href: ROUTES.MOVIES }] as const
