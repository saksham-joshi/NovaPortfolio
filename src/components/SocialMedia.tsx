import { DATA_SOCIAL_MEDIA } from '../lib/socialMedia'
import type { NovaTheme } from '../types/theme'

type SocialMediaProps = {
  theme: NovaTheme
}

export default function SocialMedia({ theme }: SocialMediaProps) {
  return (
    <div className="animate-fade-in flex flex-wrap justify-center gap-3 py-4 select-none">
      {DATA_SOCIAL_MEDIA.map((media) => {
        // Inline CSS variable for brand color hover transition
        const itemStyle = {
          '--brand-color': theme.shadowColor,
          '--hover-color': theme.text
        } as React.CSSProperties

        return (
          <a
            key={media.name}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            title={media.name}
            style={itemStyle}
            className="group flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full bg-[var(--brand-color)] transition-all duration-300 ease-in-out hover:bg-[var(--hover-color)] [&>svg]:!fill-white"
          >
            {/* Call the icon function with size 20 */}
            {media.icon(22)}
          </a>
        )
      })}
    </div>
  )
}
