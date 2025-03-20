'use client'

import Link from 'next/link'
import Logo from './Logo'
import { ROUTES } from '@/constants/routes'
import { useSearchStore } from '@/stores/useSearchStore'

interface LogoLinkProps {
  className?: string
}

export default function LogoLink({ className }: LogoLinkProps) {
  const { setSearchQuery } = useSearchStore()

  const handleLogoClick = () => {
    setSearchQuery('')
  }

  return (
    <Link href={ROUTES.HOME}>
      <Logo className={`${className}`} onClick={handleLogoClick} />
    </Link>
  )
}
