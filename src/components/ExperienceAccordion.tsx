import { useState } from 'react'
import ExperienceCard from '../components/ExperienceCard'
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

type AccordionSection = {
  readonly title: string
  readonly experiences: readonly ExperienceItem[]
}

type ExperienceAccordionProps = {
  readonly sections: readonly AccordionSection[]
  readonly theme: NovaTheme
}

export default function ExperienceAccordion({ sections, theme }: ExperienceAccordionProps) {
  // Keep track of which accordion panels are open
  // Initialize the first panel as open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    [sections[0]?.title || '']: false
  })

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <div className="animate-fade-in mx-auto my-8 flex w-full max-w-[1100px] flex-col gap-4 select-none">
      {sections.map((section) => {
        const isOpen = !!openSections[section.title]
        return (
          <div
            key={section.title}
            className="border-theme-header bg-theme-body overflow-hidden rounded-[5px] border shadow-[2px_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300"
          >
            {/* Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className="text-theme-text bg-theme-body font-google-sans flex w-full cursor-pointer items-center justify-between border-b border-transparent p-5 text-left text-[18px] font-semibold transition-colors duration-200 select-none focus:outline-hidden sm:text-[20px]"
              style={{
                borderBottomColor: isOpen ? theme.headerColor : 'transparent'
              }}
            >
              <span>{section.title}</span>
              {/* Chevron Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Content Drawer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[3250px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-6 p-4 sm:p-6">
                {section.experiences.map((experience, idx) => (
                  <ExperienceCard
                    key={idx}
                    index={idx}
                    totalCards={section.experiences.length}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
