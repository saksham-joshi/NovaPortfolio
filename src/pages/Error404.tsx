import { Link } from '../lib/router'
import type { NovaThemeProps } from '../types/theme'

export default function Error404({ theme }: NovaThemeProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="animate-fade-in-up mx-auto flex w-[90%] flex-1 flex-col items-center justify-center px-[10px] py-20 text-center select-none">
        <h1
          className="font-google-sans-bold mt-0 mb-2 text-[40px] leading-tight sm:text-[60px] lg:text-[80px]"
          style={{ color: theme.text }}
        >
          Woops
        </h1>
        <h1 className="font-google-sans-bold text-theme-secondary my-4 text-[70px] leading-none sm:text-[100px] lg:text-[140px]">
          404
        </h1>
        <p className="font-google-sans-medium mx-auto mb-8 max-w-[600px] text-[16px] leading-relaxed text-gray-500 sm:text-[20px] lg:text-[24px]">
          The requested page is unavailable at the moment!
        </p>

        {/* Go Home Button */}
        <Link
          to="/home"
          className="font-google-sans border-theme-text text-theme-body bg-theme-text hover:text-theme-text inline-flex cursor-pointer rounded-[6px] border px-[18px] py-[12px] text-[15px] leading-tight font-medium tracking-[2px] no-underline transition-all duration-300 ease-in-out select-none hover:bg-transparent sm:px-[22px] sm:py-[13px] sm:text-[18px]"
        >
          Go Home
        </Link>
      </main>
    </div>
  )
}
