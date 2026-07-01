export type NovaTheme = {
  body: string
  text: string
  expTxtColor: string
  highlight: string
  dark: string
  secondaryText: string
  imageHighlight: string
  compImgHighlight: string
  jacketColor: string
  headerColor: string
  splashBg: string
  shadowColor: string
  lightBgColor: string
}

export type NovaThemeProps = {
  theme: NovaTheme
  className?: string // for tailwind css
}

export type NovaIllustrationProps = {
  theme: NovaTheme
  width: number | null
  height: number | null
  className?: string // for tailwind css
}
