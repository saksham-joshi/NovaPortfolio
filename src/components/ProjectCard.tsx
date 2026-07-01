import type { NovaTheme } from '../types/theme'

type ProjectLink = {
  readonly text: string
  readonly url: string
  readonly icon: string // static import path
}

type ProjectData = {
  readonly title: string
  readonly icon: string // static import path
  readonly description: string
  readonly techStack: readonly string[]
  readonly metrics?: readonly string[]
  readonly links: readonly ProjectLink[]
}

type ProjectCardProps = {
  readonly repo: ProjectData
  readonly theme: NovaTheme
}

export default function ProjectCard({ repo, theme }: ProjectCardProps) {
  return (
    <div
      className="animate-fade-in-up mb-8 flex flex-1 cursor-pointer flex-col rounded-[10px] p-6 transition-all duration-300 ease-in-out select-none hover:-translate-y-1 hover:shadow-2xl sm:p-8"
      style={{
        backgroundColor: theme.headerColor,
        boxShadow: `0px 2px 10px ${theme.imageHighlight}44` // added small opacity to look softer and premium
      }}
    >
      {/* Card Header (Logo + Title) */}
      <div className="mb-4 flex items-center select-none">
        {repo.icon && (
          <img
            src={repo.icon}
            alt={`${repo.title} logo`}
            className="mr-4 h-[50px] w-[50px] rounded-full object-contain select-none"
            onError={(err) => {
              console.error('Cannot load the image: ', err)
            }}
          />
        )}
        <h2
          className="font-google-sans-bold m-0 text-[22px] font-bold sm:text-[24px]"
          style={{ color: theme.text }}
        >
          {repo.title}
        </h2>
      </div>

      {/* Metrics Chips */}
      {repo.metrics && (
        <div className="mb-4 flex flex-wrap gap-2 select-none">
          {repo.metrics.map((metric, index) => (
            <span
              key={index}
              className="font-google-sans rounded-full border px-[10px] py-[5px] text-[12px] font-semibold opacity-90 transition-all duration-200 select-none"
              style={{
                backgroundColor: 'transparent',
                color: theme.text,
                borderColor: theme.text
              }}
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      {/* Project Description */}
      <p
        className="font-google-sans mb-6 flex-grow text-[15px] leading-relaxed sm:text-[16px]"
        style={{ color: theme.text }}
      >
        {repo.description}
      </p>

      {/* Project Footer (Tech Stack + Action Links) */}
      <div className="mt-auto">
        {repo.techStack && (
          <div className="mb-6 flex flex-wrap gap-2 select-none">
            {repo.techStack.map((tech, index) => (
              <span
                key={index}
                className="font-google-sans rounded-full border px-[10px] py-[5px] text-[12px] font-bold opacity-95 transition-all duration-200 select-none"
                style={{
                  backgroundColor: theme.body,
                  color: theme.text,
                  borderColor: theme.text
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        <div className="mt-4 flex flex-wrap gap-3 select-none">
          {repo.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-google-sans flex cursor-pointer items-center rounded-[5px] border px-4 py-2 text-[14px] font-semibold no-underline transition-all duration-200 select-none hover:underline hover:opacity-75 sm:text-[16px]"
              style={{
                backgroundColor: theme.text,
                color: theme.body,
                borderColor: theme.text
              }}
            >
              {link.icon && (
                <img
                  src={link.icon}
                  alt=""
                  className="mr-2 h-4 w-4 object-contain brightness-0 invert select-none"
                />
              )}
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
