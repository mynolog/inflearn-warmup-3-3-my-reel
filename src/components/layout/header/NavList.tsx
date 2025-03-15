import { NAV_LINKS } from '@/constants/navLinks'

export default function NavList() {
  return (
    <ul>
      {NAV_LINKS.map((navItem) => (
        <li key={navItem.label + navItem.href}>{navItem.label}</li>
      ))}
    </ul>
  )
}
