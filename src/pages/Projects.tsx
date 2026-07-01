import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'

import ProjectDesign from '../illustrations/ProjectDesign'
import { DATA_HOMEPAGE } from '../lib/data'
import { DATA_PROJECTS, DATA_PROJECTS_HEADER } from '../lib/projects'
import type { NovaThemeProps } from '../types/theme'

export default function Projects({ theme }: NovaThemeProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="animate-fade-in-up mx-auto w-[90%] flex-1 px-[10px] py-5">
        {/* Heading Section */}
        <section className="mt-4 flex flex-col items-center justify-between gap-8 select-none md:flex-row md:gap-12">
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="w-full max-w-full">
              <ProjectDesign theme={theme} width={null} height={null} />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center text-center">
            <h1
              className="font-google-sans-bold mt-0 mb-4 text-[35px] leading-tight select-none sm:text-[50px] lg:text-[60px]"
              style={{ color: theme.text }}
            >
              {DATA_PROJECTS_HEADER.title}
            </h1>
            <p
              className="font-google-sans-medium mt-2 text-[16px] leading-relaxed sm:text-[18px] lg:text-[20px]"
              style={{ color: theme.secondaryText }}
            >
              {DATA_PROJECTS_HEADER.description}
            </p>
          </div>
        </section>

        {/* Project Cards Grid */}
        <section className="mt-16 select-none md:mt-24">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DATA_PROJECTS.map((repo, index) => (
              <ProjectCard repo={repo} theme={theme} key={index} />
            ))}
          </div>
        </section>

        {/* "More Projects" Action Button */}
        <section className="mt-12 mb-8 flex justify-center select-none">
          <Button
            text="More Projects"
            href={DATA_HOMEPAGE.url.githubProjects}
            newTab={true}
          />
        </section>
      </main>
    </div>
  )
}
