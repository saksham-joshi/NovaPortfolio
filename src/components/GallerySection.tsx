import type { NovaTheme } from '../types/theme'
import GalleryCard from './GalleryCard'

type GallerySectionProp = {
  readonly title: string
  readonly theme: NovaTheme
  readonly data: {
    readonly title: string
    readonly subtitle: string
    readonly img: string
    readonly altName: string
    readonly colorCode: string
  }[]
}

export default function GallerySection({ title, theme, data }: GallerySectionProp) {
  return (
    <section className="mt-16 select-none md:mt-24">
      <h2
        className="font-google-sans mb-8 text-center text-[30px] font-bold sm:text-[40px] lg:text-[50px]"
        style={{ color: theme.text }}
      >
        {title}
      </h2>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((photoObject, index) => (
          <GalleryCard gallery={photoObject} theme={theme} key={index} />
        ))}
      </div>
    </section>
  )
}
