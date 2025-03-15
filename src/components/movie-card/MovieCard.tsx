'use client'

import Image from 'next/image'
import DimOverlay from './DimOverlay'
import Link from 'next/link'

export default function MovieCard() {
  return (
    <div className="col-span-1">
      <div className="relative w-full max-w-sm">
        <Link href="/movies/1">
          <DimOverlay title="Dune: Part Two" />
          <Image
            src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
            priority
            width={500}
            height={750}
            alt="image"
          />
        </Link>
      </div>
    </div>
  )
}
