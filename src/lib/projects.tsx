import ImageSron from '../assets/images/project/sron.png'
import ImageNovaPortfolio from '../assets/images/project/nova-portfolio.png'
import ImageSentivox from '../assets/images/project/sentivox.png'

import ImageGithub from '../assets/svgs/github.svg'
import ImageEye from '../assets/svgs/eye.svg'
import ImageDownload from '../assets/svgs/download.svg'
import ImageBook from '../assets/svgs/book.svg'

import {
  SiCplusplus,
  SiC,
  SiLlvm,
  SiLinux,
  SiGnubash,
  SiCplusplusHex,
  SiLlvmHex,
  SiGnubashHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiSupabase,
  SiSupabaseHex,
  SiBun,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiPnpmHex,
  SiVercelHex,
  SiPnpm,
  SiVercel,
  SiRender,
  SiRenderHex
} from '@icons-pack/react-simple-icons'

import ElysiajsImg from '../svgs/Elysiajs'
import RedisImg from '../svgs/RedisImg'
import { CURRENT_THEME } from './theme'

export const DATA_PROJECTS_HEADER = {
  title: 'Projects',
  description:
    'My projects makes use of vast variety of latest technology tools. My best experience is to write compilers, interpreters and full stack applications.'
} as const

export const DATA_PROJECTS = [
  {
    title: 'SRON',
    icon: ImageSron,
    description:
      'Designed and developed a high-performance, cross-platform programming language with 90+ built-in functions and 101 keywords, achieving execution speeds faster than Python, Java, C#, and JavaScript in multiple bench-marks. Engineered compiler and interpreter from scratch using C++ incorporating automatic garbage collection and dynamic memory management.',
    techStack: [
      (size: number) => <SiC size={size} color="#5d82acff" />,
      (size: number) => <SiCplusplus size={size} color={SiCplusplusHex} />,
      (size: number) => <SiLlvm size={size} color={SiLlvmHex} />,
      (size: number) => <SiLinux size={size} color={CURRENT_THEME.dark} />,
      (size: number) => <SiGnubash size={size} color={SiGnubashHex} />
    ],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/saksham-joshi/SRON',
        icon: ImageGithub
      },
      {
        text: 'Docs',
        url: 'https://sron.gitbook.io/docs',
        icon: ImageBook
      },
      {
        text: 'Download',
        url: 'https://sronlang.github.io/download.html',
        icon: ImageDownload
      }
    ]
  },
  {
    title: 'Senti-Vox',
    icon: ImageSentivox,
    description:
      'A site + API to analyze the sentiment of multi-lingual text with extremely fast speed and accuracy. API is developed using elysia.js with bun runtime deployed in render. Site is developed using Supabase and Next.js with Bun runtime deployed in Vercel. Senti-vox supports English, Hindi, Marathi and Tamil.',
    techStack: [
      (size: number) => <SiNextdotjs size={size} color={SiNextdotjsHex} />,
      (size: number) => <SiSupabase size={size} color={SiSupabaseHex} />,
      (size: number) => <SiBun size={size} color="#ff34a4ff" />,
      (size: number) => ElysiajsImg(size),
      (size: number) => RedisImg(size),
      (size: number) => <SiRender size={size} color={SiRenderHex} />
    ],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/saksham-joshi/Senti-Vox',
        icon: ImageGithub
      },
      {
        text: 'View',
        url: 'https://senti-vox.vercel.app',
        icon: ImageEye
      }
    ]
  },
  {
    title: 'NovaPortfolio',
    icon: ImageNovaPortfolio,
    description:
      'Developed a fully responsive React.js portfolio template with 15+ color themes for software developers with many sections including skills, projects, experience, and resume viewer functionality. Designed multi-file configuration system for easy customization, enabling developers to deploy personalized portfolios in minutes with their favourite themes.',
    techStack: [
      (size: number) => <SiReact size={size} color={SiReactHex} />,
      (size: number) => <SiTailwindcss size={size} color={SiTailwindcssHex} />,
      (size: number) => <SiTypescript size={size} color={SiTypescriptHex} />,
      (size: number) => <SiPnpm size={size} color={SiPnpmHex} />,
      (size: number) => <SiVercel size={size} color={SiVercelHex} />
    ],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/saksham-joshi/NovaPortfolio',
        icon: ImageGithub
      },
      {
        text: 'View',
        url: 'https://sakshamjoshi.vercel.app',
        icon: ImageEye
      }
    ]
  }
] as const
