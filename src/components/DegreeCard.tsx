import type { NovaTheme } from '../types/theme'

type DegreeData = {
  readonly title: string
  readonly subtitle: string
  readonly logoPath: string // Static import string
  readonly altName: string
  readonly duration: string
  readonly descriptions: readonly string[]
  readonly websiteUrl?: string
}

type DegreeCardProps = {
  readonly degree: DegreeData
  readonly theme: NovaTheme
}

export default function DegreeCard({ degree, theme }: DegreeCardProps) {
  return (
    <div className="animate-fade-in-up my-6 flex w-full flex-col items-center justify-center md:flex-row">
      {degree.logoPath && (
        <div className="z-10 flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white p-[10px] shadow-lg transition-transform duration-500 hover:rotate-6 sm:h-[180px] sm:w-[180px]">
          <img
            src={degree.logoPath}
            alt={degree.altName}
            className="max-h-[90%] max-w-[90%] object-contain select-none"
          />
        </div>
      )}
      <div
        className="m-[10px] w-full overflow-hidden rounded-[7px] border border-gray-200 shadow-[5px_5px_5px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-xl md:w-[90%]"
        style={{ backgroundColor: theme.body }}
      >
        {/* Card Header */}
        <div
          className="flex flex-col p-4 sm:flex-row sm:justify-between"
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className="flex flex-1 flex-col justify-center">
            <h2
              className="font-google-sans-medium text-[20px] font-semibold sm:text-[23px]"
              style={{ color: theme.text }}
            >
              {degree.title}
            </h2>
            <h3
              className="font-google-sans-medium mt-[7px] mb-[5px] text-[16px] sm:text-[18px]"
              style={{ color: theme.text }}
            >
              {degree.subtitle}
            </h3>
          </div>
          <div className="mt-2 flex items-start sm:mt-0 sm:justify-end">
            <h3
              className="font-google-sans text-[14px] font-semibold sm:text-[16px]"
              style={{ color: theme.text }}
            >
              {degree.duration}
            </h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col gap-3 p-4">
          {degree.descriptions.map((sentence, index) => (
            <p
              key={index}
              className="font-google-sans m-0 px-[10px] text-[14px] leading-relaxed sm:text-[16px]"
              style={{ color: theme.text }}
            >
              {sentence}
            </p>
          ))}

          {degree.websiteUrl && (
            <div className="mt-2 flex justify-end">
              <a
                href={degree.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-theme-header text-theme-text font-google-sans inline-block cursor-pointer rounded-[7px] px-4 py-2 text-[14px] font-medium transition-all duration-300 select-none sm:text-[16px]"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
