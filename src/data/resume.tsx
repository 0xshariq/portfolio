import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sharique Chaudhary",
  initials: "SC",
  url: "https://dillion.io",
  location: "Mumbai , India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khanshariq92213@gmail.com",
    tel: "+91 72081 79779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xshariq",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0xshariq/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sharique_Ch",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "New Horizon Institute of Technology and Management",
      href: "https://nhitm.ac.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeouDbHMu8ovm9X5GL_fISE-g2xFHLvbsi6A&s",
      start: "2023",
      end: "2027",
    }
  ],
  projects: [
    {
      title: "Quran App",
      href: "https://quran-next-app.vercel.app/",
      dates: "Oct - 2024",
      active: true,
      description:
        "Developed a Quran app with a beautiful UI and a lot of features.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://quran-next-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/quran-next-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quran.png",
      video:
        "",
    },
    {
      title: "Extra Care Medical Center",
      href: "https://hospital-website-ashy-eight.vercel.app",
      dates: "Sept 2024",
      active: true,
      description:
        "Developed a website for a medical center.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://hospital-website-ashy-eight.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/extra-care-medical-center",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medical-center.png",
      video: "",
    },
    {
      title: "Service Website",
      href: "https://service-website-cyan.vercel.app",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Service website for a company.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://service-website-cyan.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/service-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/service.png",
      video: "",
    },
    {
      title: "Music School Website",
      href: "https://music-school-app-two.vercel.app",
      dates: "Oct 2024",
      active: true,
      description:
        "Music school website.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://music-school-app-two.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/Music_School_App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/music-school.png",
      video: "",
    }
  ]
} as const;
