import {
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiDotnet,      // For .NET
  SiLaravel,     // For Laravel
  SiPhp,         // For PHP
  SiFlutter,     // For Flutter
  SiDart,        // For Dart
  SiFirebase,    // For Firebase
  SiMysql,       // For MySQL
} from "react-icons/si";
// Existing local SVGs (Keep these as they are likely in the public folder)
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

// Note: We are NOT importing LaravelSvg or FlutterSvg here 
// because we will use the "Si" versions we added in the previous step instead.

export const SKILLS_DATA: SkillsShowcaseProps[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: PythonSvg },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: ".NET", icon: SiDotnet },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tailwind", icon: TailwindcssSvg },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Node.js", icon: NodejsSvg },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
];
