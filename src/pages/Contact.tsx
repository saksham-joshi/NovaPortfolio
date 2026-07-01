import TalkingOnPhone from '../illustrations/TalkingOnPhone'
import BlogsImg from '../illustrations/BlogsImg'
import SocialMedia from '../components/SocialMedia'
import Button from '../components/Button'
import { DATA_HOMEPAGE } from '../lib/data'
import { DATA_CONTACT_PAGE } from '../lib/contact'
import type { NovaThemeProps } from '../types/theme'

export default function Contact({ theme }: NovaThemeProps) {
  const contactData = DATA_CONTACT_PAGE.contactSection
  const blogSection = DATA_CONTACT_PAGE.blogSection

  return (
    <div className="flex min-h-screen flex-col">
      <main className="animate-fade-in-up mx-auto w-[90%] flex-1 px-[10px] py-5">
        {/* Contact Me Section */}
        <section className="mt-4 flex flex-col items-center justify-between gap-8 select-none md:flex-row md:gap-12">
          {/* Image */}
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="w-full max-w-[80%]">
              <TalkingOnPhone theme={theme} width={null} height={null} />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col justify-center text-center">
            <h1 className="text-theme-text font-google-sans-bold mt-0 mb-4 text-[35px] leading-tight select-none sm:text-[50px] lg:text-[60px]">
              {contactData.title}
            </h1>
            <p className="text-theme-secondary font-google-sans-medium mt-2 mb-6 text-[16px] leading-relaxed sm:text-[18px] lg:text-[20px]">
              {contactData.description}
            </p>

            {/* Social Media Circular Links */}
            <div className="flex w-full justify-center">
              <SocialMedia theme={theme} />
            </div>

            {/* Resume Button */}
            <div className="mt-6 flex w-full justify-center">
              <Button text="📄 See My Resume" href={DATA_HOMEPAGE.resumeLink} />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-20 flex flex-col items-center justify-between gap-8 select-none sm:mt-24 md:flex-row md:gap-12">
          {/* Details */}
          <div className="flex flex-1 flex-col justify-center text-center">
            <h1 className="text-theme-text font-google-sans-bold mt-0 mb-4 text-[35px] leading-tight select-none sm:text-[50px] lg:text-[60px]">
              {blogSection.title}
            </h1>
            <p className="text-theme-secondary font-google-sans-medium mt-2 mb-6 text-[16px] leading-relaxed sm:text-[18px] lg:text-[20px]">
              {blogSection.subtitle}
            </p>

            {/* Subscription Button */}
            <div className="flex w-full justify-center">
              <Button
                text="Subscribe my Newsletter"
                href={blogSection.link}
                newTab={true}
              />
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="w-full max-w-[80%] md:max-w-full">
              <BlogsImg theme={theme} width={null} height={null} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
