'use client'

import { Righteous } from 'next/font/google'

interface LogoProps {
  className?: string
  onClick: () => void
}

const righteous = Righteous({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Logo({ className = '', onClick }: LogoProps) {
  return (
    <div className={`${righteous.className} font-righteous ${className}`} onClick={onClick}>
      myReel
    </div>
  )
}
