// Ensure there are NO duplicate exports in this file
export const siteMetadata = {
  title: "Tannu Waghmare | Full Stack Developer",
  description: "Portfolio of Tannu Waghmare, a B.Tech CS student and Full Stack Developer.",
  siteUrl: "https://tannu-waghmare.pages.dev",
  siteName: "Tannu Waghmare Portfolio",
  email: "amitchauhan263871@gmail.com",
  openGraph: {
    title: "Tannu Waghmare | Full Stack Developer",
    description: "Explore my projects in Web and Mobile development.",
    url: "https://tannu-waghmare.pages.dev",
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

// Next.js sometimes prefers default exports for .mjs, 
// but your components are using Named Imports { siteMetadata }
//export default siteMetadata;
export { siteMetadata };