import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    images: ["/images/projects/jsontreeDark.webp"],
    image: {
      LIGHT: "/images/projects/jsontreeDark.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Scss", "Vite", "React-router-dom", "Redux", "Vercel"],
    images: ["/images/projects/manyGamesDark.webp"],
    image: {
      LIGHT: "/images/projects/manyGamesDark.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    images: ["/images/projects/kanbanDark.webp"],
    image: {
      LIGHT: "/images/projects/kanbanDark.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD = [
  {
    name: "WaitMed App",
    description: "A healthcare-tech solution allowing patients to monitor real-time hospital visitor traffic.",
    images: ["/waitmed.png"],
    image: { LIGHT: "/waitmed.png", DARK: "/waitmed.png" },
    githubUrl: "https://github.com/SOHAM-THUMMAR/wait_med",
    deployUrl: "",
    tags: ["Flutter", "Firebase", "Dart", "Group Project"],
  },
  {
    name: "TaskFlow",
    description: "A comprehensive task management system featuring CRUD operations and user authentication.",
    images: ["/taskflow.png"],
    image: { LIGHT: "/taskflow.png", DARK: "/taskflow.png" },
    githubUrl: "https://github.com/WAGHMARETANNU/taskflow",
    deployUrl: "",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
  },
  {
    name: "Personal Account Book",
    description: "A desktop-based financial tracking application built with .NET.",
    images: ["/personal_account_book.png"],
    image: { LIGHT: "/personal_account_book.png", DARK: "/personal_account_book.png" },
    githubUrl: "https://github.com/WAGHMARETANNU/Personal_Account_Book",
    deployUrl: "",
    tags: [".NET", "C#", "SQL Server"],
  },
  {
    name: "Void-Music",
    description: "A collaborative PHP web application for music streaming.",
    images: ["/void_music.png"],
    image: { LIGHT: "/void_music.png", DARK: "/void_music.png" },
    githubUrl: "https://github.com/SOHAM-THUMMAR/Void-Music",
    deployUrl: "",
    tags: ["PHP", "JavaScript", "MySQL", "Group Project"],
  },
  {
    name: "Python File Explorer",
    description: "A GUI-based desktop utility for navigating and managing local file systems.",
    images: ["/main.py.png"],
    image: { LIGHT: "/main.py.png", DARK: "/main.py.png" },
    githubUrl: "https://github.com/WAGHMARETANNU/file_management_tool",
    deployUrl: "",
    tags: ["Python", "Tkinter", "OS Module"],
  },
];