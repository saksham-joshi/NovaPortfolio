//SEO Related settings
const seo = {
  title: "Saksham Joshi Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Saksham Joshi Portfolio",
    type: "website",
    url: "http://sakshamjoshi.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Saksham Joshi",
  logo_name: "SakshamJoshi",
  nickname: "Creator of SRON",
  subTitle:
    "A Self-taught developer focused on developing advanced, low-level systems and technologies.",
  resumeLink:
    "/resume",
  portfolio_repository: "https://github.com/saksham-joshi/NovaPortfolio",
  githubProfile: "https://github.com/saksham-joshi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/saksham-joshi",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sakshamjoshi27/",
    fontAwesomeIcon: "fab fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/Saksham-Joshi",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "E-mail",
    link: "mailto:social.sakshamjoshi@gmail.com",
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/sakshamjoshi27",
    fontAwesomeIcon: "fab fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sakshamjoshi27/",
    fontAwesomeIcon: "fab fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Low Level Programming",
      fileName: "LowLevelProgImg",
      skills: [
        "— Developing highly optimized technologies like compilers, interpreter etc.",
        "— Experience of working with complex cross-platform projects",
        "— Optimizing and maintaining multi-platform header files for applications",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
            color: "#5d82acff"
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "LLVM",
          fontAwesomeClassname: "simple-icons:llvm",
          style: {
            backgroundColor: "transparent",
            color: "#1a6586"
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",

            color: "#bd8e00ff",
          },
        },
        {
          skillName: "GNU",
          fontAwesomeClassname : "simple-icons:gnu",
          style:{
            backgroundColor: "transparent",
            color: "#A42E2B"
          }
        },
        {
          skillName: "Bash Scripting",
          fontAwesomeClassname : "simple-icons:gnubash",
          style:{
            backgroundColor: "transparent",
            color: "#4EAA25"
          }
        },
      ],
    },
    {
      title: "Python Programming",
      fileName: "PythonProgImg",
      skills: [
        "— Experience working on projects of multiple domains using Python",
        "— APIs, Data Analysis, Natural-language Processing and Desktop App Development",
        "— Deploying projects on Vercel and connecting domains from Hostinger to the vercel"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#386c97",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009485",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000ff",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PyQT5",
          fontAwesomeClassname: "simple-icons:qt",
          style: {
            color: "#41CD52",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "— I Have quite good experience working on different web based projects",
        "— I Know well to improve Search Engine Optimization(SEO) for better ranking on the web",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            backgroundColor: "transparent",
            color: "#37b6f1",
          },
        },
      ],
    },
    {
      title: "Extra Tech",
      fileName: "ExtraTechImg",
      skills: [
        "— I have worked on multiple projects with so many different technologies being used",
        "— These tools always helped me to improve the productivity as well as helped me in bringing better outputs",
      ],
      softwareSkills: [
        {
          skillName: "LinuxMint",
          fontAwesomeClassname: "simple-icons:linuxmint",
          style: {
            backgroundColor: "transparent",
            color: "#86BE43",
          },
        },
        {
          skillName: "Perplexity",
          fontAwesomeClassname: "simple-icons:perplexity",
          style: {
            color: "#1FB8CD",
          },
        },
        {
          skillName: "VirtualBox",
          fontAwesomeClassname: "simple-icons:virtualbox",
          style: {
            color: "#2F61B4",
          },
        },
        {
          skillName: "MarkDown",
          fontAwesomeClassname: "simple-icons:markdown",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "GitBook",
          fontAwesomeClassname: "simple-icons:gitbook",
          style: {
            color: "#02d7d7",
          },
        },
        {
          skillName: "VsCode",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#24acf2",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "StackOverflow",
          fontAwesomeClassname: "simple-icons:stackoverflow",
          style: {
            backgroundColor: "transparent",
            color: "#F58025",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
      ],
    },
  ],
};

const currentCourses = {
  course : [
    {
      title: "Graphic Era University, Dehradun",
      subtitle: "Master's in Computer Application",
      logo_path: "geu_logo.png",
      alt_name: "Graphic Era University",
      duration: "2025 - 2027",
      descriptions: [
        "⚡ I have studied Advance Operating System (Unix, Linux, Real-time systems, Google File System, Unix File System etc.)",
        "⚡ Apart from this, I have studied Computer Networking in Cisco Packet Tracer software.",
        "⚡ Also, I was able to get pretty good grades while managing my internship, projects and academics.",
      ],
      website_link: "https://geu.ac.in/",
    }
  ]
}

const degrees = {
  degrees: [
    {
      title: "Graphic Era Hill University, Bhimtal",
      subtitle: "Bachelor's in Computer Application",
      logo_path: "gehu_bgremoved.png",
      alt_name: "Graphic Era Hill University",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I started learning programming from my bachelor's starting with C programming language and the fundamentals of computers.",
        "⚡ Apart from this, I learned and deeply understood the working of computer softwares and programming languages.",
        "⚡ My coursework includes Data Structures and Algorithms (DSA), Scripting Languages, Data Analysis, Computer Graphics, Computer-Based Numerical and Statistical Techniques.",
      ],
      website_link: "https://gehu.ac.in/",
    },
  ],
};

const educationGallery = {
  gallery : [
    {
      title : "Participated in Quiz",
      subtitle : "Participated in C++ Quiz which I won further",
      img_path : "bca_seminar.jpg",
      alt_name : "C++ QUIZ",
      color_code: "#FFBB0099"
    },
    {
      title : "Receiving Certificate",
      subtitle : "Got #1 in C++ Competition",
      img_path : "cpp_competition.jpg",
      alt_name : "Receiving certificate from (Prof) Dr. MC Lohani",
      color_code: "#0C9D5899"
    },
    {
      title : "Again #1",
      subtitle : "#1 again in C++ Quiz",
      img_path : "cpp_quiz.png",
      alt_name : "Receiving certificate from (Prof) Dr. MC Lohani",
      color_code: "#2A73CC"
    },
    {
      title : "Seminars",
      subtitle : "Actively participated in Seminars",
      img_path: "seminar_2.jpg",
      alt_name : "Seminars",
      color_code : "#356effff"
    },
    {
      title : "Bachelor's Classmates",
      subtitle : "A memorable group photo with my batchmates",
      img_path: "farewell_to_seniors.jpg",
      alt_name: "Organized farwell party for Seniors",
      color_code : "#06b200ff"
    },
    {
      title : "Bachelor's Degree",
      subtitle : "BCA Degree Received",
      img_path : "bca_degree.jpg",
      alt_name : "BCA Degree",
      color_code: "#4285F499"
    },
    {
      title : "Bachelor's Convocation",
      subtitle : "Attended 2024 Convocation at GEHU Dehradun",
      img_path : "convocation_2024.jpg",
      alt_name : "Convocation",
      color_code: "#1F70C199"
    },
    {
      title : "Launched SRON v2.1",
      subtitle : "Celebrating launch of version 2.1 of SRON",
      img_path : "sron_v2_1.jpg",
      alt_name : "SRON v2.1's Cake Cutting",
      color_code: "#c39a42ff"
    },
    {
      title : "SIH 2025",
      subtitle : "Participated in SIH 2025",
      img_path : "sih.jpg",
      alt_name : "Hackathon",
      color_code: "#D83B0199"
    },
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups and NGOs, delivering strong and reliable contributions",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Software Enginner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft.png",
    //       duration: "June 2023 - Present",
    //       location: "Bangalore, India",
    //       description:
    //         "Working on C# .NET",
    //       color: "#000000",
    //     }
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Unite Wings Educational Confederation",
          company_url: "https://unitewings.com/",
          logo_path: "experience/unitewings-logo.png",
          duration: "May 2025 - Nov 2025",
          location: "Hybrid",
          description: "Delivered automated verification systems, GitHub-based data synchronization pipelines, and production-grade web deployments using FastAPI, Python, Next.js, and Vercel. Built responsive frontends and streamlined workflows that removed manual effort and improved operational efficiency.",
          color: "#000000",
        },
        {
          title: "Coding Tutor",
          company: "CodeKaroYaaro: International Kids Coding School",
          company_url: "https://codekaroyaaro.com/",
          logo_path: "experience/codekaroyaaro-logo.png",
          duration: "Nov 2023 - Feb 2024",
          location: "Remote",
          description:
            "Completed a paid internship where I taught Python and web development to students aged 7–18, covering foundational programming concepts, logical thinking, and hands-on project development while adapting instruction to multiple learning levels.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create developer tools like compilers, interpreters, header files etc.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self/bw-rounded-corner.png",
    description:
      "I am active on LinkedIn but inactive on X and Instagram.",
  },
  blogSection: {
    title: "Newsletter",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://www.linkedin.com/newsletters/7178072356291018752/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Clement Town, Dehradun, Uttarakhand, India",
    locality: "Dehradun",
    country: "India",
    region: "Uttarakhand",
    postalCode: "95129",
    streetAddress: "Clement Town",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/UFXQhwaYJEs2mbZs6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  currentCourses,
  degrees,
  educationGallery,
  experience,
  projectsHeader,
  contactPageData,
};






// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "paper-title",
//       name: "Paper Title",
//       createdAt: "2023-07-02",
//       description: "Paper published in ",
//       url: "https://arxiv.org/abs/",
//     },
//   ],
// };

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/saksham-joshi/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/profile/social_sakshamj1",
//     },
//   ],
// };