import Button from '../components/Button'
import ResumeViewer from '../components/ResumeViewer'
import type { NovaThemeProps } from '../types/theme'

const RESUME_URL = '/docs/Resume_SakshamJoshi.pdf'

export default function Resume(_: NovaThemeProps) {
  return (
    <div className="flex max-h-[3200px] flex-col">
      <main className="animate-fade-in-up mx-auto flex w-[100%] flex-1 flex-col items-center px-[10px] pt-5 pb-2">
        {/* Download Resume Button */}
        <section className="mt-4 mb-8 flex justify-center select-none">
          <Button text="📃 Download Resume" href={RESUME_URL} newTab={true} />
        </section>

        {/* Responsive PDF Viewer */}
        <ResumeViewer fileUrl={RESUME_URL} />
      </main>
    </div>
  )
}
