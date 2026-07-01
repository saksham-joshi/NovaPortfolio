import React from 'react'

type SkillLogo = {
  readonly skillName: string
  readonly icon: (size: number) => React.JSX.Element
}

type SoftwareSkillProps = {
  readonly logos: readonly SkillLogo[]
}

export default function SoftwareSkill({ logos }: SoftwareSkillProps) {
  return (
    <div className="py-4 select-none">
      <ul className="m-0 flex list-none flex-wrap justify-center gap-4 p-0 sm:gap-6">
        {logos.map((logo) => (
          <li
            key={logo.skillName}
            className="group relative flex cursor-pointer items-center justify-center p-2 transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Tooltip overlay */}
            <span className="bg-theme-jacket text-theme-body font-google-sans pointer-events-none absolute -top-8 left-1/2 z-50 -translate-x-1/2 scale-0 rounded-[4px] px-2 py-1 text-[12px] font-bold whitespace-nowrap shadow-md transition-all duration-150 group-hover:scale-100 group-active:scale-100">
              {logo.skillName}
            </span>

            {/* Icon wrapper */}
            <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300">
              {logo.icon(40)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
