import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

import { Database, DatabaseBackup, DatabaseZapIcon } from "lucide-react";

export const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    organisation: {
      name: "Void-Music Group Project", // This must be inside an object
      href: "https://github.com/SOHAM-THUMMAR/Void-Music", // You must provide a link (or "#")
    },
    location: "Remote",
    date: "3 Months", // This MUST be lowercase 'date'
    description: "Worked in a team environment to build a music streaming platform using PHP and MySql",
  },
  {
    title: "Collaborative Developer",
    organisation: {
      name:"Wait-Med Group Project",
      href: "https://github.com/SOHAM-THUMMAR/wait_med"},
    location: "Remote",
    date: "3 Months",
    description:
      "Worked in a team environment to build a dynamic crowd status for hospitals platform using Flutter and Firebase. Handled database optimization and ensured seamless integration between frontend and backend components.",
  }
];
