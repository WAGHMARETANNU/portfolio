import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE = [
  {
    index: 0,
    title: "WaitMed App",
    href: "/projects",
    tags: ["Flutter", "Dart", "Healthcare Tech", "Firebase"],
    images: ["/waitmed.png"],
    imageUrl: ["/waitmed.png"], 
    image: { LIGHT: "/waitmed.png", DARK: "/waitmed.png" },
  },
  {
    index: 1,
    title: "TaskFlow",
    href: "/projects",
    tags: ["PHP", "Laravel", "Bootstrap", "Apache","MVC","task management"],
    images: ["/taskflow.png"],
    imageUrl: ["/taskflow.png"],
    image: { LIGHT: "/taskflow.png", DARK: "/taskflow.png" },
  },
  {
    index: 2,
    title: "Personal Account Book",
    href: "/projects",
    tags: ["c#", ".NET Framwork", "Microsoft SQL Server", "Desktop","finance management"],
    images: ["/personal_account_book.png"],
    imageUrl: ["/personal_account_book.png"],
    image: { LIGHT: "/personal_account_book.png", DARK: "/personal_account_book.png" },
  }
];

export const PROJECTS_CARD = [
  {
    name: "WaitMed App",
    favicon: "/favicon.ico",
    description: "A healthcare-tech solution.",
    imageUrl: ["/waitmed.png"],
    sourceCodeHref: "https://github.com/SOHAM-THUMMAR/wait_med",
    liveWebsiteHref: "",
  },
  {
    name: "TaskFlow",
    favicon: "/favicon.ico",
    description: "Task management system.",
    imageUrl: ["/taskflow.png"],
    sourceCodeHref: "https://github.com/WAGHMARETANNU/taskflow",
    liveWebsiteHref: "",
  },
  {
    name: "Personal Account Book",
    favicon: "/favicon.ico",
    description: "Desktop-based financial tracking.",
    imageUrl: ["/personal_account_book.png"],
    sourceCodeHref: "https://github.com/WAGHMARETANNU/Personal_Account_Book",
    liveWebsiteHref: "",
  }
];