import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    // Keep both to be safe, but imageUrl is what the Card needs
    images: ["/images/projects/jsontreeDark.webp"],
    imageUrl: ["/images/projects/jsontreeDark.webp"], 
    image: { LIGHT: "/images/projects/jsontreeDark.webp", DARK: "/images/projects/jsontreeDark.webp" },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Scss", "Vite", "React-router-dom", "Redux", "Vercel"],
    images: ["/images/projects/manyGamesDark.webp"],
    imageUrl: ["/images/projects/manyGamesDark.webp"],
    image: { LIGHT: "/images/projects/manyGamesDark.webp", DARK: "/images/projects/manyGamesDark.webp" },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    images: ["/images/projects/kanbanDark.webp"],
    imageUrl: ["/images/projects/kanbanDark.webp"],
    image: { LIGHT: "/images/projects/kanbanDark.webp", DARK: "/images/projects/kanbanDark.webp" },
  }
];
export const PROJECTS_CARD = [
  {
    name: "WaitMed App",
    favicon: "/favicon.ico", // Ensure you have a favicon path
    description: "A healthcare-tech solution.",
    imageUrl: ["/waitmed.png"], // Changed from 'images' to 'imageUrl'
    sourceCodeHref: "https://github.com/SOHAM-THUMMAR/wait_med",
    liveWebsiteHref: "",
  },
  {
    name: "TaskFlow",
    favicon: "/favicon.ico",
    description: "Task management system.",
    imageUrl: ["/taskflow.png"], // Changed from 'images' to 'imageUrl'
    sourceCodeHref: "https://github.com/WAGHMARETANNU/taskflow",
    liveWebsiteHref: "",
  },
  {
    name: "Personal Account Book",
    favicon: "/favicon.ico",
    description: "Desktop-based financial tracking.",
    imageUrl: ["/personal_account_book.png"], // Changed from 'images' to 'imageUrl'
    sourceCodeHref: "https://github.com/WAGHMARETANNU/Personal_Account_Book",
    liveWebsiteHref: "",
  }
];