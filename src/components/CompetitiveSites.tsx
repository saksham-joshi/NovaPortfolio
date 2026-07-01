import { DATA_COMPETITIVE_SITES } from '../lib/cp'

export default function CompetitiveSites() {
  return (
    <div className="animate-fade-in py-2 select-none">
      <ul className="m-0 flex list-none flex-wrap justify-center gap-4 p-0 sm:justify-start">
        {DATA_COMPETITIVE_SITES.map((logo) => (
          <li
            key={logo.siteName}
            className="group relative flex cursor-pointer items-center justify-center p-2 transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Tooltip */}
            <span className="bg-theme-dark text-theme-body font-google-sans border-theme-highlight pointer-events-none absolute -top-8 left-1/2 z-50 -translate-x-1/2 scale-0 rounded-[4px] border px-2 py-1 text-[12px] whitespace-nowrap shadow-md transition-all duration-150 group-hover:scale-100">
              {logo.siteName}
            </span>

            <a
              href={logo.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-transform duration-300"
              aria-label={`Visit my ${logo.siteName} profile`}
            >
              {logo.icon(32)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
