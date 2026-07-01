import { useState, useEffect } from 'react'
import type { NovaThemeProps } from '../types/theme'

export default function TopButton(_: NovaThemeProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run initially in case page loaded already scrolled
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      title="Go up"
      id="topbutton"
      className="border-theme-text text-theme-body bg-theme-text hover:text-theme-text fixed right-[1.5rem] bottom-[1.2rem] z-50 flex cursor-pointer items-center justify-center rounded-full border p-[15px] shadow-lg transition-all duration-300 ease-in-out hover:bg-transparent focus:outline-hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="topbutton-arrow"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="h-5 w-5 sm:h-6 sm:w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </button>
  )
}
