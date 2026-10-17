import Button from '../components/Button'
import ResumeViewer from '../components/ResumeViewer'
import type { NovaThemeProps } from '../types/theme'

const RESUME_URL_1 = '/docs/Resume_SakshamJoshi.pdf'
const RESUME_URL_2 = '/docs/Resume_SakshamJoshi_FullStack.pdf'

export default function Resume(_: NovaThemeProps) {
  const theme = _.theme
  return (
    <div className="flex max-h-[3200px] flex-col">
      {/* H1 Tag for SEO Optimization */}
      <h1 className="hidden">Resume of Saksham Joshi</h1>
      <main className="animate-fade-in-up mx-auto flex w-[100%] flex-1 flex-col items-center px-[10px] pt-5 pb-2">
        <section className="mt-4 mb-8 flex justify-center select-none">
          <Button text="📃 Download Resume [1/2]" href={RESUME_URL_1} newTab={true} />
        </section>
        <ResumeViewer fileUrl={RESUME_URL_1} />
      </main>

      {/* Quote-styled separator */}
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

      <main className="animate-fade-in-up mx-auto flex w-[100%] flex-1 flex-col items-center px-[10px] pt-5 pb-2">
        <section className="mt-4 mb-8 flex justify-center select-none">
          <Button text="📃 Download Resume [2/2]" href={RESUME_URL_2} newTab={true} />
        </section>
        <ResumeViewer fileUrl={RESUME_URL_2} />
      </main>
    </div>
  )
}
