import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  WilliamMlogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "William Mawdsley",
  initials: "WM",
  location: "Manchester, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Manchester",
  about:
    "Product Designer, currently studying Product Design & Craft at Manchester School of Art.",
  summary:
    "Studying Product Design & Craft with a focus into ceramics. Driven by a passion for bringing ideas to life through tangible expression. Learning ceramic techniques, with a keen eye for detail and a dedication to exploring the boundaries of material and form. Seeking opportunities to leverage my creative expertise and analytical approach in diverse design fields, with a particular interest in the intricate world of watchmaking.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1636779531326439451/rGOcaqOj_400x400.jpg",
  personalWebsiteUrl: "https://Williammawdsley.com",
  contact: {
    email: "Williammawdsley@outlook.com",
    tel: "+447496090789",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/williammawdsley",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/WillTMawdsley",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Manchester Metropolitan University",
      degree: "Product Design & Craft",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Lockular",
      link: "https://lockular.com",
      badges: [],
      title: "Software Tester",
      //logo: Lockular,
      start: "2021",
      end: "2024",
      description:
        "I tested and reported software bugs within their software. This allowed me to gain a basic understanding of C++ and machine code. I also installed and configured software on numerous devices",
    },
    {
      company: "Pheasant Inn",
      link: "https://www.pheasantinn.co.uk",
      badges: [],
      title: "Waiting and Housekeeping",
      //logo: ClevertechLogo,
      start: "2023",
      end: "2024",
      description:
        "Worked in housekeeping as well as waiting on the public during serving hours",
    },
    {
      company: "B4RN",
      link: "https://b4rn.org.uk",
      badges: [],
      title: "Volunteer",
      //logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Volunteer at the B4RN Computer Club, assisting member of the public with their electronics",
    },
  ],
  skills: [
    "Design",
    "Ceramics",
    "Watchmaking",
    "IPFS",
    "Next.JS",
    "Product Support",
    "Product Testing",
  ],
  projects: [
    {
      title: "Boundaries",
      techStack: [
        "Unit X",
        "Response",
        "Ceramic",
        "Plaster",
        "Slip",
        "Art",
      ],
      description: "My response to the brief 'boundaries' within the topic of Y1 Unit X",
      logo: ConsultlyLogo,
      link: {
        label: "boundaries",
        href: "/about",
      },
    },
  
  ],
} as const;
