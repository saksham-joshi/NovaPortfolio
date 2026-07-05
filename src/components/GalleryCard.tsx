import type { NovaTheme } from '../types/theme'

type GalleryPhoto = {
  readonly title: string
  readonly subtitle: string
  readonly img: string
  readonly altName: string
  readonly colorCode: string
}

type GalleryCardProps = {
  readonly gallery: GalleryPhoto
  readonly theme: NovaTheme
}

export default function GalleryCard({ gallery, theme }: GalleryCardProps) {
  return (
    <div className="animate-fade-in-up flex w-full flex-col overflow-hidden rounded-[5px] border border-gray-200 shadow-[5px_5px_5px_rgba(0,0,0,0.05)] transition-all duration-300 select-none hover:shadow-xl">
      {/* Photo Container */}
      <div className="group relative w-full overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/75 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <h3 className="font-google-sans translate-y-4 transform text-center font-medium tracking-widest text-white uppercase transition-transform duration-300 select-none group-hover:translate-y-0">
            {gallery.altName}
          </h3>
        </div>

        {/* Card Header Background */}
        <div
          className="flex w-full items-center justify-center p-1"
          style={{ backgroundColor: gallery.colorCode }}
        >
          <img
            className="z-10 m-[3px] h-[200px] w-auto max-w-[95%] rounded-[4px] object-contain select-none"
            src={gallery.img}
            alt={gallery.altName}
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <h2
          className="font-google-sans my-2 text-[18px] font-semibold sm:text-[20px]"
          style={{ color: theme.text }}
        >
          {gallery.title}
        </h2>
        <h3
          className="font-google-sans my-1 text-[15px] sm:text-[18px]"
          style={{ color: theme.secondaryText }}
        >
          {gallery.subtitle}
        </h3>
      </div>
    </div>
  )
}
