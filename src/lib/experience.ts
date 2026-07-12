import ImageArterns from '../assets/images/experience/arterns-logo.png'
import ImageCodeKaroYaaro from '../assets/images/experience/codekaroyaaro-logo.png'
import ImageCosmoPortfolio from '../assets/images/experience/cosmo-portfolio.png'
import ImageMasterPortfolio from '../assets/images/experience/master-portfolio.png'
// import ImageHaveYourPR from '../assets/images/experience/haveyourpr.png'
// import ImageUniteWings from '../assets/images/experience/unite-wings.png'
// import ImageMaryornEsports from '../assets/images/experience/maryorn-esports.png'
// import ImageMaryornLogix from '../assets/images/experience/maryorn-logix.png'

export const DATA_EXPERIENCE = {
  title: 'Experience',
  subtitle: 'Startup, Internship and Open Source',
  description:
    'Worked across multiple startups, completed internships, and contributed to open-source projects, consistently delivering high-quality softwares and great results.',
  sections: [
    // {
    //   title: 'Startups',
    //   experiences: [
    //     {
    //       title: 'Founder & CTO',
    //       company: 'HaveYourPR Agency',
    //       orgUrl: 'https://haveyourpr.com',
    //       logo: ImageHaveYourPR,
    //       duration: 'June 2026 - Present',
    //       location: 'On-site',
    //       description:
    //         'Founded this PR agency with three other co-founders. Led the entire technical development of the startup, including frontend, backend, database design, authentication, deployment, domain registration and configuration, custom domain email setup, and the development of a comprehensive admin panel to manage clients and automate internal operations. Additionally, developed multiple PR strategies to help clients expand their reach and acquire more customers. Built a strong professional network with influencers, local businesses, small-scale enterprises, and politicians.',
    //       color: '#ffffff'
    //     },
    //     {
    //       title: 'Founder',
    //       company: 'Unite Wings Educational Confederation',
    //       orgUrl: 'https://unitewings.com',
    //       logo: ImageUniteWings,
    //       duration: 'July 2024 - Sept 2024',
    //       location: 'Hybrid',
    //       description:
    //         '[FAILED STARTUP] In this startup, we provided resume-building services, mock interviews, and educational courses to students. We hired more than 20 interns, including content writers, C++ engineers, software testers, front-end developers, and HR interns. Within a month, we gained more than 300 followers on LinkedIn. We also launched the SRON Contributors Program, through which we recruited C++ engineers and software testers to test and improve my programming language, SRON. I left the startup due to the incompetence and mismanagement of my co-founder, and the startup eventually failed.',
    //       color: '#ffffff'
    //     },
    //     {
    //       title: 'Founder',
    //       company: 'Maryorn Esports',
    //       orgUrl: '',
    //       logo: ImageMaryornEsports,
    //       duration: 'March 2022 - June 2022',
    //       location: 'Online',
    //       description:
    //         "[FAILED STARTUP] Founded an esports organization focused on PUBG Mobile (now BGMI in India). Created and managed the organization\'s social media accounts and a professionally structured Discord server. Recruited and managed two Tier-2 esports lineups, each consisting of five players, and regularly registered them for daily scrims and tournaments to support their competitive practice. Organized two esports events. The first was a 1v1 Team Deathmatch (TDM) Tournament, which attracted 20 participants. The winner received a certificate and free entry to the second tournament. The second event was unsuccessful due to a ₹10 registration fee, resulting in no participant registrations. Owing to this outcome and increasing academic commitments, I decided to discontinue the organization.",
    //       color: '#ffffff'
    //     },
    //     {
    //       title: 'Founder',
    //       company: 'Maryorn Logix',
    //       orgUrl: '',
    //       logo: ImageMaryornLogix,
    //       duration: 'June 2020 - Nov 2020',
    //       location: 'Online',
    //       description:
    //         "[FAILED STARTUP] Launched a solo software publishing start-up focusing on Android applications. Created custom Android applications on the AppGeyser.com and published on the Google Play Store. Successfully released five applications: M4 (web browser), Wall-X (wallpaper app), Crossy (crossword puzzle game), Task (to-do app) and Truth and Dare (bottle game). Google announced Android 11 in September 2020 and required developers to upgrade their apps to satisfy the latest platform requirements. At that point my programming experience was zero, and I was unable to make the necessary updates myself. I wrote to AppGeyser's support team, but unfortunately, I didn't get any response. So my google play console account got suspended at the end because the apps were not meeting the updated requirements and and my startup failed.",
    //       color: '#ffffff'
    //     }
    //   ]
    // },
    {
      title: 'Internships',
      experiences: [
        {
          title: 'Software Engineer Intern',
          company: 'Arterns Technologies Pvt Ltd',
          orgUrl: 'https://arterns.in/',
          logo: ImageArterns,
          duration: 'May 2025 - Nov 2025',
          location: 'Hybrid',
          description:
            'Developed an employee verification API using Bun, Elysia.js, Redis, and PostgreSQL, capable of handling more than 20,000 requests per second. Developed a static file hosting service to quickly download images, audios, videos, documents, etc., using FastAPI, Python, and Ngrok, capable of handling 10,000 requests per second. Designed safe, secure, and precise schemas for PostgreSQL databases to restrict access to certain roles using Row-Level Security. Implemented the entire login system using Next.js and Redis, writing Lua scripts for Redis (deployed on Upstash) to power an OTP verification login flow for a client\'s system while ensuring rate limiting to prevent attacks. Maintained client websites and ensured 100% uptime of their services throughout my internship. Set up the email system and created multiple custom emails for a client\'s startup using Lark Suite by updating the MX, A, and TXT records in the client\'s Hostinger DNS/nameservers.',
          color: '#000000'
        },
        {
          title: 'Coding Tutor',
          company: 'CodeKaroYaaro: International Kids Coding School',
          orgUrl: 'https://codekaroyaaro.com/',
          logo: ImageCodeKaroYaaro,
          duration: 'Nov 2023 - Feb 2024',
          location: 'Remote',
          description:
            'Completed a paid internship where I taught Python and web development to students aged 7–18, covering foundational programming concepts, logical thinking, and hands-on project development while adapting instruction to multiple learning levels.',
          color: '#ee3c26'
        }
      ]
    },
    {
      title: 'Open Source',
      experiences: [
        {
          title: 'Contributor and Maintainer',
          company: 'CosmoPortfolio',
          orgUrl: 'https://github.com/agusain2001/CosmoPortfolio',
          logo: ImageCosmoPortfolio,
          duration: 'Jan 2026 - Feb 2026',
          location: 'Remote',
          description:
            'Architected complete routing system with React Router DOM and lazy loading using Suspense, improving initial page load time and overall site performance. Built responsive multi-page portfolio with Home, Skills, Projects, and Contact pages, ensuring seamless navigation and user experience across all devices. Optimized performance by implementing cursor observer caching, smooth scroll effects, and conditional rendering of CommandPalette and EasterEggs for non-touch devices.',
          color: '#325dadff'
        },
        {
          title: 'Contributor of Code and Design',
          company: 'MasterPortfolio',
          orgUrl: 'https://github.com/ashutosh1919/masterPortfolio',
          logo: ImageMasterPortfolio,
          duration: 'Dec 2025 - Jan 2026',
          location: 'Remote',
          description:
            'Developed and implemented a comprehensive Resume page feature with PDF rendering capabilities using ReactPDF, enabling users to view and download resumes directly on the website without external navigation. Enhanced mobile responsiveness across multiple React.js components, including the navbar and experience cards, improving user experience through responsive design adjustments for mobile, tablet, and desktop viewports. Fixed navbar style and responsiveness issues for screens below 1104px width, ensuring proper hamburger menu display.',
          color: '#000000'
        }
      ]
    }
  ]
} as const
