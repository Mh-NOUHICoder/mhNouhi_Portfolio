import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
  title: "LifeGuard AI",
  projectUrls: {
    site: {
      url: "https://lifeguard-ai.vercel.app/", // replace if deployed
      icon: <RiExternalLinkLine size={20} />,
    },
    repo: {
      owner: "Mh-NOUHICoder",
      name: "lifeguard-ai",
      showStarCount: true,
    },
  },
  imageUrl: "/images/lg-ai.png",
  description: `An AI-powered real-time emergency assistant that analyzes live camera input to detect critical situations and guide users with instant response recommendations. Built for hackathon-level rapid deployment and real-world impact.`,

  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI API Integration",
    "WebRTC / Camera API",
    "Vercel",
  ],

  cards: {
    a: {
      title: "Real-Time AI Scene Analysis",
      text: `Implemented live camera capture and AI-powered scene interpretation to classify emergency severity. Designed a dynamic severity scoring system with visual indicators and actionable guidance.`,
    },
    b: {
      title: "Production-Ready Architecture",
      text: `Built with a scalable Next.js App Router structure, modular components, and API abstraction for AI providers. Optimized performance, rate-limit handling, and UX flow for critical-use scenarios.`,
    },
  },
},
  {
    title: "Golden Screen",
    projectUrls: {
      site: {
        url: "https://goldenscreen.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        owner: "Mh-NOUHICoder",
        name: "alx-project-nexus",
        showStarCount: false,
      },
    },
    imageUrl: "/images/golden-screen.png",
    description: `A cinematic movie recommendation platform built with React, Next.js, and Tailwind. Features a hero search bar, genre and language filters, responsive movie grids, and personalized recommendations.`,
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
      "TMDb API",
    ],
    cards: {
      a: {
        title: "Interactive Movie Discovery",
        text: `Designed a premium UI with a cinematic hero section, scrollable dropdown filters, and responsive layouts. Implemented dynamic search and genre-based recommendations powered by TMDb API.`,
      },
      b: {
        title: "Responsive & Accessible Design",
        text: `Built reusable components in Figma and React with accessibility in mind. Optimized layouts for mobile and desktop, ensuring smooth navigation and a polished, branded experience across devices.`,
      },
    },
  },
  {
    title: "ShareXpress",
    projectUrls: {
      site: {
        url: "https://mhnouhi.pythonanywhere.com/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        owner: "Mh-NOUHICoder",
        name: "ShareXpress",
        showStarCount: false,
      },
    },
    imageUrl: "/images/sharexpress_preview.png",
    description: `A full-stack, secure file-sharing platform built with Flask. Features user authentication, web uploads, short shareable download links, and a management dashboard.`,
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "HTML/CSS/JavaScript",
      "Bootstrap",
      "SQLite/PostgreSQL",
    ],
    cards: {
      a: {
        title: "Secure File Sharing Platform",
        text: `Built a robust file-sharing system with secure uploads, time-limited links, and password protection. Implemented QR code generation for easy mobile sharing and large file support with progress tracking.`,
      },
      b: {
        title: "User Analytics & Management",
        text: `Developed comprehensive user authentication with role-based access. Created an admin dashboard with real-time analytics, download tracking, and file management capabilities for monitoring user engagement.`,
      },
    },
  },
  {
    title: "TechFest 2025 Website",
    projectUrls: {
      site: {
        url: "https://techfest-landing-page-navy.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "Techfest_landing_page",
        owner: "Mh-NOUHICoder",
        showStarCount: true,
      },
    },
    imageUrl: "/images/TechFest_event.png",
    description: `A vibrant, responsive landing page for a tech event featuring animated stats, clear CTAs, and a modern gradient UI to boost registration and engagement.`,
    tech: [
      "React 18+",
      "Tailwind CSS 3+",
      "React Icons",
      "Font Awesome",
      "Vite",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Modern Event Landing Page",
        text: `Designed and developed a responsive landing page with animated statistics and interactive elements. Implemented smooth animations using Framer Motion to create an engaging user experience that drives event registrations.`,
      },
      b: {
        title: "Performance-Optimized Design",
        text: `Built with React 18 and Vite for fast loading speeds. Utilized Tailwind CSS for consistent, maintainable styling across all devices. Focused on conversion optimization with strategic call-to-action placement.`,
      },
    },
  },
  {
    title: "Fast Fitness",
    projectUrls: {
      site: {
        url: "http://fastfitness.infinityfreeapp.com/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        owner: "Mh-NOUHICoder",
        name: "fun_fitness",
        showStarCount: true,
      },
    },
    imageUrl: "/images/fun_fitness.png",
    description: `A comprehensive fitness center website with membership management, class scheduling, and admin dashboard. Built with modern web technologies for optimal performance and user experience.`,
    tech: ["HTML", "CSS", "jQuery", "PHP", "MySQL", "Laragon"],
    cards: {
      a: {
        title: "Fitness Management System",
        text: `Developed a complete fitness platform with membership registration, class booking system, and payment integration. Created responsive designs that work seamlessly across desktop and mobile devices.`,
      },
      b: {
        title: "Admin Dashboard & Analytics",
        text: `Built an extensive admin panel for managing members, classes, and facility bookings. Implemented user authentication, attendance tracking, and revenue analytics to help gym owners monitor business performance.`,
      },
    },
  },
];
