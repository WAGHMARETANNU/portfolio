import Head from "next/head";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetadata";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About | ${siteMetadata.title}`}
        description="Learn more about Tannu Waghmare, a B.Tech CS student and Full Stack Developer. Discover the journey, skills, and projects that drive my passion for web development."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Tannu Waghmare - Full Stack Developer",
          description:
            "Dive into the story of Tannu Waghmare. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              // Fixed: Using the hardcoded path to your profile image 
              // instead of siteMetadata.twitterImage which was causing crashes
              url: `${siteMetadata.siteUrl}/images/heroProfile.png`,
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
              "Full Stack Developer, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, B.Tech CS, Tannu Waghmare, Professional Journey, Skills",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}