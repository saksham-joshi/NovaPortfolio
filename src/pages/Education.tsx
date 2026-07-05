import MortarBoard from '../illustrations/MortarBoard'
import CompetitiveSites from '../components/CompetitiveSites'
import DegreeCard from '../components/DegreeCard'
import GalleryCard from '../components/GalleryCard'
import { CERTIFICATION_GALLERY, DATA_CURRENT_COURSE, DATA_DEGREE, EDUCATION_GALLERY } from '../lib/education'
import type { NovaThemeProps } from '../types/theme'

export default function Education({ theme }: NovaThemeProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="animate-fade-in-up mx-auto w-[90%] flex-1 px-[10px] py-5">
        {/* Header Block */}
        <section className="mt-4 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="w-full max-w-[95%] sm:max-w-full">
              <MortarBoard theme={theme} width={null} height={null} />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center text-center md:text-left">
            <h1
              className="font-google-sans-bold mt-0 text-center text-[35px] leading-tight select-none sm:text-[50px] lg:text-[60px]"
              style={{ color: theme.text }}
            >
              EDUCATIONAL
            </h1>
            <h3
              className="font-google-sans mt-2 mb-6 text-center text-[18px] font-semibold tracking-widest sm:text-[22px] lg:text-[25px]"
              style={{ color: theme.text }}
            >
              Q U A L I F I C A T I O N S
            </h3>

            {/* Competitive Programming Sites */}
            <div className="flex w-full items-center justify-center">
              <CompetitiveSites />
            </div>
          </div>
        </section>

        {/* Currently Pursuing */}
        {DATA_CURRENT_COURSE.course.length > 0 && (
          <section className="mt-16 select-none md:mt-24">
            <h2
              className="font-google-sans mb-8 text-center text-[30px] font-bold sm:text-[40px] lg:text-[50px]"
              style={{ color: theme.text }}
            >
              Currently Pursuing
            </h2>
            <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6">
              {DATA_CURRENT_COURSE.course.map((course, index) => (
                <DegreeCard degree={course} theme={theme} key={index} />
              ))}
            </div>
          </section>
        )}

        {/* Degrees Received */}
        {DATA_DEGREE.degrees.length > 0 && (
          <section className="mt-16 select-none md:mt-24">
            <h2
              className="font-google-sans mb-8 text-center text-[30px] font-bold sm:text-[40px] lg:text-[50px]"
              style={{ color: theme.text }}
            >
              Degrees Received
            </h2>
            <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6">
              {DATA_DEGREE.degrees.map((degree, index) => (
                <DegreeCard degree={degree} theme={theme} key={index} />
              ))}
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        {EDUCATION_GALLERY.gallery.length > 0 && (
          <section className="mt-16 select-none md:mt-24">
            <h2
              className="font-google-sans mb-8 text-center text-[30px] font-bold sm:text-[40px] lg:text-[50px]"
              style={{ color: theme.text }}
            >
              Certifications
            </h2>
            <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {EDUCATION_GALLERY.gallery.map((photoObject, index) => (
                <GalleryCard gallery={photoObject} theme={theme} key={index} />
              ))}
            </div>
          </section>
        )}

         {/* Gallery Grid */}
        {CERTIFICATION_GALLERY.length > 0 && (
          <section className="mt-16 select-none md:mt-24">
            <h2
              className="font-google-sans mb-8 text-center text-[30px] font-bold sm:text-[40px] lg:text-[50px]"
              style={{ color: theme.text }}
            >
              Gallery
            </h2>
            <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATION_GALLERY.map((photoObject, index) => (
                <GalleryCard gallery={photoObject} theme={theme} key={index} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
