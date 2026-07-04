import { DATA_HOMEPAGE } from '../lib/data'
import type { NovaTheme } from '../types/theme'

function formatYearsMonths(duration: { years: number; months: number }) {
  return `${duration.years} yr${duration.years === 1 ? '' : 's'} ${duration.months} mo${duration.months === 1 ? '' : 's'}`
}

const homepageStats = [
  {
    label: 'IQ',
    value: DATA_HOMEPAGE.iq
  },
  {
    label: 'Coding Exp',
    value: formatYearsMonths(DATA_HOMEPAGE.codingExperience)
  },
  {
    label: 'Age',
    value: formatYearsMonths(DATA_HOMEPAGE.age)
  }
]

export default function HeroSectionCards(theme: NovaTheme) {
  return (
    <div className="mb-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:mr-10 lg:grid-cols-3">
      {homepageStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-theme-highlight/25 overflow-hidden rounded-lg border px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:px-5 sm:py-4"
          style={{
            borderColor: theme.headerColor
          }}
        >
          <p
            className="font-google-sans-medium mb-1 text-center text-[12px] uppercase sm:text-left"
            style={{ color: theme.secondaryText }}
          >
            {stat.label}
          </p>
          <p
            className="font-google-sans-bold text-center text-[24px] leading-tight sm:text-left sm:text-[26px] lg:text-[24px]"
            style={{ color: theme.text }}
          >
            {stat.value}
          </p>
          {/* <p className="font-google-sans mt-1 text-center text-[13px] sm:text-left">
            {stat.caption}
          </p> */}
        </div>
      ))}
    </div>
  )
}
