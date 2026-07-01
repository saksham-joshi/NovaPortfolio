import LinkedinImg from '../svgs/Linkedin'
import {
  SiGithub,
  SiGithubHex,
  SiGmail,
  SiGmailHex,
  SiInstagram,
  SiInstagramHex,
  SiX,
  SiXHex,
  SiYoutube,
  SiYoutubeHex
} from '@icons-pack/react-simple-icons'

export const DATA_SOCIAL_MEDIA = [
  {
    name: 'Github',
    link: 'https://github.com/saksham-joshi',
    icon: (size: number) => <SiGithub size={size} color={SiGithubHex} />
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sakshamjoshi27/',
    icon: (size: number) => LinkedinImg(size)
  },
  {
    name: 'YouTube',
    link: 'https://youtube.com/c/Saksham-Joshi',
    icon: (size: number) => <SiYoutube size={size} color={SiYoutubeHex} />
  },
  {
    name: 'E-mail',
    link: 'mailto:social.sakshamjoshi@gmail.com',
    icon: (size: number) => <SiGmail size={size} color={SiGmailHex} />
  },
  {
    name: 'X-Twitter',
    link: 'https://twitter.com/sakshamjoshi27',
    icon: (size: number) => <SiX size={size} color={SiXHex} />
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sakshamjoshi27/',
    icon: (size: number) => <SiInstagram size={size} color={SiInstagramHex} />
  }
] as const
