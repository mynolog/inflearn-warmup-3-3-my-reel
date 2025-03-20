'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500) // 500px 이상 스크롤 시 버튼 표시
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed flex justify-center items-center w-12 h-12 bottom-16 right-8 z-50
                   bg-black/80 text-white text-xl p-3 rounded-full shadow-2xl 
                   hover:bg-gray-900 hover:ring-2 hover:ring-white transition-all"
      >
        ▲
      </button>
    )
  )
}
