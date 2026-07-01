type ButtonProps = {
  text: string
  href: string
  newTab?: boolean
  className?: string
}

export default function Button({ text, href, newTab = false, className = '' }: ButtonProps) {
  return (
    <div className={className}>
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="font-google-sans border-theme-text text-theme-body bg-theme-text hover:text-theme-text active:text-theme-text active:bg-theme-highlight inline-block cursor-pointer rounded-[6px] border px-[18px] py-[12px] text-center text-[15px] leading-tight font-medium tracking-[2px] transition-all duration-300 ease-in-out select-none hover:bg-transparent sm:px-[22px] sm:py-[13px] sm:text-[18px]"
      >
        {text}
      </a>
    </div>
  )
}
