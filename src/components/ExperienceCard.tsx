import type { NovaTheme } from '../types/theme'

type ExperienceItem = {
  readonly title: string
  readonly company: string
  readonly orgUrl: string
  readonly logo: string // static import path
  readonly duration: string
  readonly location: string
  readonly description: string
  readonly color: string
}

type ExperienceCardProps = {
  readonly index: number
  readonly totalCards: number
  readonly experience: ExperienceItem
  readonly theme: NovaTheme
}

export default function ExperienceCard({
  index,
  totalCards,
  experience,
  theme
}: ExperienceCardProps) {
  // Compute spacing depending on the card order
  const cardSpacing = index === 0 ? 'mt-6' : 'mt-[50px]'

  return (
    <div
      className={`flex w-full flex-col items-center md:flex-row ${cardSpacing} animate-fade-in-up`}
    >
      {/* Logo Div */}
      <div className="mb-4 flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[4px_3px_20px_-2px_rgba(128,128,128,0.5)] md:mr-6 md:mb-0">
        <img
          className="h-full w-full object-cover select-none"
          src={experience.logo}
          alt={`${experience.company} logo`}
          onError={(err) => {
            console.error('Cannot load the image: ', err)
          }}
        />
      </div>

      {/* Stepper (Only on larger viewports) */}
      <div className="relative mx-2 hidden w-[30px] flex-col items-center justify-start self-stretch select-none md:flex">
        {/* Circular Stepper Dot */}
        <div className="z-10 h-5 w-5 rounded-full" style={{ backgroundColor: theme.headerColor }} />
        {/* Stepper Connector Line */}
        {index !== totalCards - 1 && (
          <div
            className="absolute top-5 -bottom-[80px] w-[2px]"
            style={{ backgroundColor: theme.headerColor }}
          />
        )}
      </div>

      {/* Arrow Pointing Left (Only on larger viewports) */}
      <div
        className="z-10 mt-10 -mr-[10px] ml-[10px] hidden h-0 w-0 self-start border-t-10 border-r-10 border-b-10 border-t-transparent border-b-transparent transition-colors duration-300 md:block"
        style={{ borderRightColor: theme.body }}
      />

      {/* Card Content Container */}
      <div
        className="flex w-full flex-1 flex-col rounded-[10px] border border-gray-200 p-5 shadow-[4px_3px_20px_-2px_rgba(128,128,128,0.4)] transition-shadow duration-300 hover:shadow-xl"
        style={{ background: theme.body }}
      >
        {/* Card Header (Title & Company + Duration & Location) */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <h3
              className="font-google-sans m-0 text-[20px] font-semibold tracking-wide"
              style={{ color: theme.text }}
            >
              {experience.title}
            </h3>
            <p className="font-google-sans mt-1 mb-0 text-[16px]">
              <a
                href={experience.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-transparent transition-all duration-200 hover:decoration-current"
                style={{ color: theme.text }}
              >
                {experience.company}
              </a>
            </p>
          </div>
          <div className="flex flex-col text-center sm:items-end sm:text-right">
            <p className="font-google-sans m-0 text-[14px] font-medium text-gray-500 sm:text-[16px]">
              {experience.duration}
            </p>
            <p className="font-google-sans mt-1 mb-0 text-[14px] font-medium text-gray-500 sm:text-[16px]">
              {experience.location}
            </p>
          </div>
        </div>

        {/* Card Description */}
        <div
          className="font-google-sans mt-5 text-justify text-[15px] leading-relaxed sm:text-[16px]"
          style={{ color: theme.text }}
        >
          {experience.description}
        </div>
      </div>
    </div>
  )
}
