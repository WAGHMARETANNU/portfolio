import { NextSeo } from "next-seo";
import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  // Fallback URL to prevent canonical link errors if siteUrl is missing
  const baseUrl = siteMetadata.siteUrl || "https://tannu-waghmare.pages.dev";

  return (
    <>
      <NextSeo
        title="Tannu Waghmare | Full Stack Developer"
        description="Portfolio of Tannu Waghmare, a B.Tech CS student and Full Stack Developer. Explore innovative web projects and modern development expertise."
        canonical={baseUrl}
        openGraph={{
          url: baseUrl,
          title: "Tannu Waghmare | Full Stack Developer",
          description: "Explore my projects in Web and Mobile development.",
          images: [
            {
              url: `${baseUrl}/images/heroProfile.png`,
              width: 1200,
              height: 630,
              alt: "Tannu Waghmare - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName || "Tannu Waghmare Portfolio",
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer, React Developer, Next.js, Portfolio, Web Development, B.Tech CS, Tannu Waghmare",
          },
        ]}
      />
      
      <LandingHero />
      {/* This will now work because SKILLS_DATA uses 'sectionName' */}
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}