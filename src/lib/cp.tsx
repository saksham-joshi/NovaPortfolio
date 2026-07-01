import { SiLeetcode, SiHackerrank, SiCodeforces } from '@icons-pack/react-simple-icons'

export const DATA_COMPETITIVE_SITES = [
  {
    siteName: 'LeetCode',
    profileLink: 'https://leetcode.com/saksham-joshi/',
    icon: (size: number) => {
      return <SiLeetcode color="default" size={size} />
    }
  },
  {
    siteName: 'HackerRank',
    profileLink: 'https://www.hackerrank.com/profile/social_sakshamj1',
    icon: (size: number) => {
      return <SiHackerrank color="default" size={size} />
    }
  },
  {
    siteName: 'Codeforces',
    profileLink: 'https://codeforces.com/profile/saksham-joshi',
    icon: (size: number) => {
      return <SiCodeforces color="default" size={size} />
    }
  }
] as const
