//SEO Related settings
export const DATA_SEO = {
  title: 'Saksham Joshi Portfolio',
  description:
    'Saksham Joshi — Creator of the SRON programming language. Expert in C++, systems programming, interpreters, compilers, and DBMS internals.',
  og: {
    title: 'Saksham Joshi Portfolio',
    type: 'website',
    url: 'http://sakshamjoshi.vercel.app/icons/desc.png'
  }
}

function getDateDiff(laterDate: Date, earlierDate: Date): { years: number; months: number } {
  let years = laterDate.getUTCFullYear() - earlierDate.getUTCFullYear()
  let months = laterDate.getUTCMonth() - earlierDate.getUTCMonth()

  // If the month hasn't occurred yet this year, subtract a year
  if (months < 0) {
    years--
    months += 12
  }

  // If the day hasn't occurred yet this month, subtract a month
  if (laterDate.getUTCDate() < earlierDate.getUTCDate()) {
    months--
    if (months < 0) {
      years--
      months += 12
    }
  }

  return { years, months }
}

//Home Page
export const DATA_HOMEPAGE = {
  title: 'Saksham Joshi',
  logoName: 'SakshamJoshi',
  nickname: 'Creator of SRON',
  subTitle:
    'A Self-taught developer focused on developing advanced, low-level systems and technologies.',
  resumeLink: '/resume',
  url: {
    repo: 'https://github.com/saksham-joshi/NovaPortfolio',
    github: 'https://github.com/saksham-joshi',
    githubProjects: 'https://github.com/saksham-joshi?tab=repositories'
  },
  iq: '137+',
  age: getDateDiff(new Date(), new Date(2003, 5, 27)), // month requires 0th index
  codingExperience: getDateDiff(new Date(), new Date(2022, 2, 1)) // month requires 0th index
}
