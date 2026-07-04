import Button from '../components/Button'
import SoftwareSkill from '../components/SoftwareSkill'
import { DATA_HOMEPAGE } from '../lib/data'
import { DATA_SKILLS } from '../lib/skills'
import type { NovaThemeProps } from '../types/theme'

// Import profile image
import ProfileImg from '../assets/images/self/bw-rounded-corner.png'

function formatYearsMonths(duration: { years: number; months: number }) {
  return `${duration.years} yr${duration.years === 1 ? '' : 's'} ${duration.months} mo${duration.months === 1 ? '' : 's'}`
}

export default function Home({ theme }: NovaThemeProps) {
  const homepageStats = [
    {
      label: 'IQ',
      value: DATA_HOMEPAGE.iq,
      caption: 'Problem solving'
    },
    {
      label: 'Coding',
      value: formatYearsMonths(DATA_HOMEPAGE.codingExperience),
      caption: 'Experience'
    },
    {
      label: 'Age',
      value: formatYearsMonths(DATA_HOMEPAGE.age),
      caption: 'Current'
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Greeting Section */}
      <main className="animate-fade-in-up mx-auto mt-8 w-[90%] flex-1 px-[10px] py-5">
        <section className="flex flex-col justify-between gap-8 md:flex-row md:items-center md:gap-4">
          <div className="flex flex-1 flex-col justify-center">
            <h1
              className="font-google-sans-bold mt-0 text-center text-[35px] leading-tight select-none sm:text-[50px] md:mt-16 md:text-left lg:text-[70px]"
              style={{ color: theme.text }}
            >
              {DATA_HOMEPAGE.title}
            </h1>
            {DATA_HOMEPAGE.nickname && (
              <h2
                className="font-google-sans-bold-italic mt-2 mb-4 text-center text-[22px] select-none sm:text-[25px] md:text-left lg:text-[30px]"
                style={{ color: theme.text }}
              >
                ( {DATA_HOMEPAGE.nickname} )
              </h2>
            )}
            {/* <p
              className="font-google-sans-medium mt-2 mb-6 text-center text-[16px] leading-relaxed sm:text-[20px] md:mr-10 md:text-left lg:text-[30px]"
              style={{ color: theme.secondaryText }}
            >
              {DATA_HOMEPAGE.subTitle}
            </p> */}
            <div className="mb-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:mr-10 lg:grid-cols-3">
              {homepageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="overflow-hidden rounded-lg border bg-theme-highlight/25 px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:px-5 sm:py-4"
                  style={{
                    borderColor: theme.headerColor,
                    
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
                  <p
                    className="font-google-sans mt-1 text-center text-[13px] sm:text-left"
          
                  >
                    {stat.caption}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center md:justify-start">
              <Button text="📃 View My Resume" href="/resume" className="mt-2" />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <img
              src={ProfileImg}
              alt="Saksham Joshi profile"
              className="h-auto max-w-[80%] select-none sm:max-w-[60%] md:max-w-full"
            />
          </div>
        </section>

        {/* Skills Section ("What I Do?") */}
        <section className="mt-20 select-none md:mt-24">
          <div className="mb-10 text-center">
            <h1
              className="font-google-sans text-center text-[30px] leading-normal font-bold select-none sm:text-[50px] lg:text-[60px]"
              style={{ color: theme.text }}
            >
              What I Do?
            </h1>
          </div>

          <div className="flex flex-col gap-16">
            {DATA_SKILLS.map((skill, index) => {
              const isEven = index % 2 === 0
              const last_index = DATA_SKILLS.length - 1
              return (
                <>
                  <div
                    key={skill.title}
                    className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12"
                  >
                    {/* Image Div */}
                    <div
                      className={`flex w-full items-center justify-center md:mt-0 md:w-1/2 ${
                        !isEven ? 'animate-fade-in-right md:order-2' : 'animate-fade-in-left'
                      }`}
                    >
                      <div className="w-full max-w-[80%] md:max-w-full">
                        <skill.fileName theme={theme} width={null} height={null} />
                      </div>
                    </div>

                    {/* Text Div */}
                    <div
                      className={`flex w-full flex-col md:w-1/2 ${!isEven ? 'md:order-1' : ''} md:ml-12`}
                    >
                      <h2
                        className="font-google-sans mb-4 text-center text-[28px] leading-tight font-normal sm:text-[40px] lg:text-[56px]"
                        style={{ color: theme.text }}
                      >
                        {skill.title}
                      </h2>

                      {/* Skills Icons */}
                      <SoftwareSkill logos={skill.softwareSkills} />

                      {/* Skill descriptions */}
                      <div className="mt-4 flex flex-col gap-3">
                        {skill.skills.map((sentence, sIdx) => (
                          <p
                            key={sIdx}
                            className="font-google-sans m-0 p-0 text-center text-[15px] leading-relaxed sm:text-[18px] md:text-left lg:text-[20px]"
                            style={{ color: theme.secondaryText }}
                          >
                            {sentence}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index !== last_index && (
                    <div className="inline-flex w-full items-center justify-center">
                      <hr
                        className="my-8 h-1 w-64 rounded-sm border-0"
                        style={{ backgroundColor: theme.imageHighlight }}
                      />
                      <div
                        className="bg-neutral-primary absolute left-1/2 -translate-x-1/2 px-4"
                        style={{ backgroundColor: theme.body }}
                      >
                        <svg
                          className="text-body h-6 w-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill={theme.imageHighlight}
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke={theme.imageHighlight}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
