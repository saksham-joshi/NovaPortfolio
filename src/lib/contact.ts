import ProfileImg from '../assets/images/self/bw-rounded-corner.png'
import AvatarImg from '../assets/svgs/blogs_image.svg'

export const DATA_CONTACT_PAGE = {
  contactSection: {
    title: 'Contact Me',
    profileImg: ProfileImg,
    description: 'I am active on LinkedIn and GitHub but inactive on X and Instagram.'
  },
  blogSection: {
    title: 'Newsletter',
    subtitle:
      'I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.',
    link: 'https://www.linkedin.com/newsletters/7178072356291018752/',
    avatarImg: AvatarImg
  }
} as const
