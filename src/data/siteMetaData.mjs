export const metadata = {
  title: "Tannu Waghmare | Full Stack Developer",
  description: "Portfolio of Tannu Waghmare, a B.Tech CS student",
  siteUrl: "https://tannu-waghmare.pages.dev", // Add this line!
  openGraph: {
    title: "Tannu Waghmare | Full Stack Developer",
    description: "Explore my projects in Web and Mobile development.",
    url: "https://tannu-waghmare.pages.dev", // Update this to Cloudflare
    siteName: "Tannu Waghmare Portfolio",
    images: [
      {
        url: "/images/heroProfile.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// This line is the most important fix:
export const siteMetadata = metadata;