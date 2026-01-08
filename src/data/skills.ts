import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiDotnet,
  SiFlutter,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiNodedotjs,
  SiGit,
  SiPostman
} from "react-icons/si";

export const SKILLS_DATA = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: ".NET", icon: SiDotnet },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
    ],
  },
];