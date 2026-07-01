import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfViewerProps {
  fileUrl: string
}

export default function ResumeViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  // Track the actual rendered width of the page container so pages can
  // size themselves to fill it exactly (no hardcoded pixel guesses).
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width)
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="flex w-full justify-center pb-8 select-none">
      <div className="w-[95%] md:w-[70%]">
        <div
          ref={containerRef}
          className="flex max-w-full flex-col items-center gap-4 overflow-hidden rounded-[8px] border border-gray-200 bg-white p-1 shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
        >
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <p className="animate-pulse py-10 font-medium text-slate-500">Loading PDF...</p>
            }
            error={<p className="py-10 font-medium text-rose-500">Failed to load PDF.</p>}
            className="flex flex-col items-center gap-4"
          >
            {numPages &&
              containerWidth > 0 &&
              Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="max-w-full"
                  width={containerWidth}
                  // Render at full device pixel ratio so text/lines stay
                  // crisp on high-DPI screens instead of being upscaled.
                  devicePixelRatio={Math.max(window.devicePixelRatio || 1, 2)}
                />
              ))}
          </Document>
        </div>
      </div>
    </section>
  )
}
