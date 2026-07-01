import { useState } from 'react'
import { Link } from '../lib/router'
import { DATA_HOMEPAGE } from '../lib/data'
import type { NovaTheme } from '../types/theme'

type HeaderProps = {
  theme: NovaTheme
}

export default function Header(_: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/home' },
    { label: 'Education', to: '/education' },
    { label: 'Experience', to: '/experience' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ]

  return (
    <header className="animate-fade-in font-google-sans mx-auto flex w-[90%] flex-col px-[10px] py-5 pt-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full items-center justify-between">
        <Link
          to="/home"
          className="flex items-center text-center text-[1.5em] tracking-wider no-underline select-none"
        >
          <span className="text-theme-text leading-none font-normal">&lt;</span>
          <span className="font-agustina text-theme-text translate-y-[0.2em] px-[10px] leading-none font-extrabold">
            {DATA_HOMEPAGE.logoName}
          </span>
          <span className="text-theme-text leading-none font-normal">/&gt;</span>
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-theme-text hover:text-theme-secondary block cursor-pointer p-2 focus:outline-hidden lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="relative h-[2px] w-[18px]">
            <span
              className={`bg-theme-text absolute left-0 h-full w-full transition-all duration-300 ${
                isOpen ? 'top-0 rotate-45' : '-top-[5px]'
              }`}
            />
            <span
              className={`bg-theme-text absolute left-0 h-full w-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`bg-theme-text absolute left-0 h-full w-full transition-all duration-300 ${
                isOpen ? 'top-0 -rotate-45' : 'top-[5px]'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`w-full overflow-hidden transition-all duration-300 ease-out lg:block lg:w-auto lg:overflow-visible ${
          isOpen ? 'mt-4 max-h-[370px]' : 'max-h-0 lg:max-h-none'
        }`}
      >
        <ul className="m-0 flex list-none flex-col p-0 lg:flex-row lg:items-center lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full lg:w-auto">
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                activeClassName="font-google-sans-bold font-bold"
                className="text-theme-text font-google-sans hover:bg-theme-highlight block rounded-[5px] px-5 py-4 no-underline transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
