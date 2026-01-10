import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    images: ["/images/projects/jsontreeDark.webp"],
    image: { LIGHT: "/images/projects/jsontreeDark.webp", DARK: "/images/projects/jsontreeDark.webp" },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Scss", "Vite", "React-router-dom", "Redux", "Vercel"],
    images: ["/images/projects/manyGamesDark.webp"],
    image: { LIGHT: "/images/projects/manyGamesDark.webp", DARK: "/images/projects/manyGamesDark.webp" },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    images: ["/images/projects/kanbanDark.webp"],
    image: { LIGHT: "/images/projects/kanbanDark.webp", DARK: "/images/projects/kanbanDark.webp" },
  }
];

export const PROJECTS_CARD = [
  {
    name: "WaitMed App",
    description: "A healthcare-tech solution.",
    images: ["/waitmed.png"],
    image: { LIGHT: "/waitmed.png", DARK: "/waitmed.png" },
    githubUrl: "https://github.com/SOHAM-THUMMAR/wait_med",
    deployUrl: "",
    tags: ["Flutter", "Firebase"],
  },
  {
    name: "TaskFlow",
    description: "Task management system.",
    images: ["/taskflow.png"],
    image: { LIGHT: "/taskflow.png", DARK: "/taskflow.png" },
    githubUrl: "https://github.com/WAGHMARETANNU/taskflow",
    deployUrl: "",
    tags: ["Laravel", "PHP"],
  },
  {
    name: "Personal Account Book",
    description: "Desktop-based financial tracking.",
    images: ["/personal_account_book.png"],
    image: { LIGHT: "/personal_account_book.png", DARK: "/personal_account_book.png" },
    githubUrl: "https://github.com/WAGHMARETANNU/Personal_Account_Book",
    deployUrl: "",
    tags: [".NET", "C#"],
  }
];

