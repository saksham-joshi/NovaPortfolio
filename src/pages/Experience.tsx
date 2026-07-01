import WorkingOnLaptop from '../illustrations/WorkingOnLaptop'
import ExperienceAccordion from '../components/ExperienceAccordion'
import { DATA_EXPERIENCE } from '../lib/experience'
import type { NovaThemeProps } from '../types/theme'

export default function Experience({ theme }: NovaThemeProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="animate-fade-in-up mx-auto w-[90%] flex-1 px-[10px] py-5">
        {/* Heading Section */}
        <section className="mt-4 flex flex-col items-center justify-between gap-8 select-none md:flex-row md:gap-12">
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="w-full max-w-full">
              <WorkingOnLaptop theme={theme} width={null} height={null} />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center text-center">
            <h1
              className="font-google-sans-bold mt-0 mb-2 text-[35px] leading-tight select-none sm:text-[50px] lg:text-[60px]"
              style={{ color: theme.text }}
            >
              {DATA_EXPERIENCE.title}
            </h1>
            <h3
              className="font-google-sans mt-1 mb-4 text-[20px] leading-snug font-semibold sm:text-[25px] lg:text-[30px]"
              style={{ color: theme.text }}
            >
              {DATA_EXPERIENCE.subtitle}
            </h3>
            <p
              className="font-google-sans-medium mt-2 text-[16px] leading-relaxed sm:text-[18px] lg:text-[20px]"
              style={{ color: theme.secondaryText }}
            >
              {DATA_EXPERIENCE.description}
            </p>
          </div>
        </section>

        {/* Experience Accordion Section */}
        <section className="mt-16 md:mt-24">
          <ExperienceAccordion sections={DATA_EXPERIENCE.sections} theme={theme} />
        </section>
      </main>
    </div>
  )
}
