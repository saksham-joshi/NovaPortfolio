import ImageGeu from '../assets/images/geu.png'
import ImageGehu from '../assets/images/gehu.png'

export const DATA_CURRENT_COURSE = {
  course: [
    {
      title: 'Graphic Era University, Dehradun',
      subtitle: "Master's in Computer Application",
      logoPath: ImageGeu,
      altName: 'Graphic Era University',
      duration: '2025 - 2027',
      descriptions: [
        '⚡ I have studied Advance Operating System (Unix, Linux, Real-time systems, Google File System, Unix File System etc.)',
        '⚡ Apart from this, I have studied Computer Networking in Cisco Packet Tracer software.',
        '⚡ Also, I was able to get pretty good grades while managing my internship, projects and academics.'
      ],
      websiteUrl: 'https://geu.ac.in/'
    }
  ]
} as const

export const DATA_DEGREE = {
  degrees: [
    {
      title: 'Graphic Era Hill University, Bhimtal',
      subtitle: "Bachelor's in Computer Application",
      logoPath: ImageGehu,
      altName: 'Graphic Era Hill University',
      duration: '2021 - 2024',
      descriptions: [
        "⚡ I started learning programming from my bachelor's starting with C programming language and the fundamentals of computers.",
        '⚡ Apart from this, I learned and deeply understood the working of computer softwares and programming languages.',
        '⚡ My coursework includes Data Structures and Algorithms (DSA), Scripting Languages, Data Analysis, Computer Graphics, Computer-Based Numerical and Statistical Techniques.'
      ],
      websiteUrl: 'https://gehu.ac.in/'
    }
  ]
} as const

import ImageBcaSeminar from '../assets/images/eduGallery/bca_seminar.jpg'
import ImageCppComp from '../assets/images/eduGallery/cpp_competition.jpg'
import ImageCppQuiz from '../assets/images/eduGallery/cpp_quiz.png'
import ImageSeminar2 from '../assets/images/eduGallery/seminar_2.jpg'
import ImageBcaDegree from '../assets/images/eduGallery/bca_degree.jpg'
import ImageBcaConvocation from '../assets/images/eduGallery/convocation_2024.jpg'
import ImageSron21 from '../assets/images/eduGallery/sron_v2_1.jpg'
import ImageBloodDonate from '../assets/images/eduGallery/blood_donate.jpg'
import ImageSih2025 from '../assets/images/eduGallery/sih.jpg'

export const EDUCATION_GALLERY: NovaGalleryType[] = [
  {
    title: 'Participated in Quiz',
    subtitle: 'Participated in C++ Quiz which I won further',
    img: ImageBcaSeminar,
    altName: 'C++ QUIZ',
    colorCode: '#FFBB0099'
  },
  {
    title: 'Receiving Certificate',
    subtitle: 'Got #1 in C++ Competition',
    img: ImageCppComp,
    altName: 'Receiving certificate from (Prof) Dr. MC Lohani',
    colorCode: '#0C9D5899'
  },
  {
    title: 'Again #1',
    subtitle: '#1 again in C++ Quiz',
    img: ImageCppQuiz,
    altName: 'Receiving certificate from (Prof) Dr. MC Lohani',
    colorCode: '#2A73CC'
  },
  {
    title: 'Seminars',
    subtitle: 'Actively participated in Seminars',
    img: ImageSeminar2,
    altName: 'Seminars',
    colorCode: '#356effff'
  },
  {
    title: "Bachelor's Degree",
    subtitle: 'BCA Degree Received',
    img: ImageBcaDegree,
    altName: 'BCA Degree',
    colorCode: '#4285F499'
  },
  {
    title: "Bachelor's Convocation",
    subtitle: 'Attended 2024 Convocation at GEHU Dehradun',
    img: ImageBcaConvocation,
    altName: 'Convocation',
    colorCode: '#1F70C199'
  },
  {
    title: 'Launched SRON v2.1',
    subtitle: 'Celebrating launch of version 2.1 of SRON',
    img: ImageSron21,
    altName: "SRON v2.1's Cake Cutting",
    colorCode: '#c39a42ff'
  },
  {
    title: 'Blood donation',
    subtitle: 'Donating blood for welfare',
    img: ImageBloodDonate,
    altName: 'Donating blood for welfare',
    colorCode: '#cc2929ff'
  },
  {
    title: 'SIH 2025',
    subtitle: 'Participated in SIH 2025',
    img: ImageSih2025,
    altName: 'Hackathon',
    colorCode: '#D83B0199'
  }
] as const

import ImageIq137 from '../assets/certifications/arealme-iq-137.png'
import ImageCpp1 from '../assets/certifications/certificate_cpp1.jpg'
import ImageCpp2 from '../assets/certifications/certificate_cpp2.jpg'
import type { NovaGalleryType } from '../types/galleryType'

export const CERTIFICATION_GALLERY: NovaGalleryType[] = [
  {
    title: 'IQ 137',
    subtitle: 'Achieved IQ of 137 in July 2026',
    img: ImageIq137,
    altName: 'IQ 137',
    colorCode: '#b6f9ff'
  },
  {
    title: '#1 in C++ Quiz',
    subtitle: 'Certificate of #1 in C++ Quiz',
    img: ImageCpp1,
    altName: '#1 in C++',
    colorCode: '#00aec9'
  },
  {
    title: 'Again #1 in C++ Competition',
    subtitle: 'Certificate of #1 in C++ Competition',
    img: ImageCpp2,
    altName: '#1 in C++',
    colorCode: '#c10000'
  }
]
