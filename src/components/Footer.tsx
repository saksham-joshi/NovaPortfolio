import { DATA_HOMEPAGE } from '../lib/data'
import type { NovaTheme } from '../types/theme'

type FooterProps = {
  theme: NovaTheme
}

export default function Footer(_: FooterProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center px-[10px] pt-10 pb-2 hover:overline">
      <p className="font-google-sans text-center text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
        <a
          href={DATA_HOMEPAGE.url.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-theme-text hover:text-theme-secondary font-extrabold no-underline transition-colors duration-300"
        >
          &lt; Star this Portfolio on GitHub /&gt;
        </a>
      </p>
    </div>
  )
}
