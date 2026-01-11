import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetadata";

export default function Footer() {
  const myName = "Tannu Waghmare";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      
      {/* Main Teal Box */}
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-accent p-8 text-background sm:p-12 lg:p-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side: Text and Heading */}
          <div className="flex flex-col gap-4 lg:max-w-xl">
            <span className="w-fit rounded-full bg-background/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Available for work
            </span>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s talk about <br />
              <span className="text-white/70">your next project.</span>
            </h2>
            <p className="text-lg opacity-80">
              I’m currently looking for new opportunities. My inbox is always open—whether for a potential project or just a friendly hi!
            </p>
            
            {/* Direct Email Link - Fills space on the left */}
            <a 
              href={`mailto:${siteMetadata.email}`} 
              className="mt-4 text-xl font-medium underline underline-offset-8 transition-opacity hover:opacity-70 md:text-2xl"
            >
              {siteMetadata.email}
            </a>
          </div>

          {/* Right Side: The Big Button */}
          <div className="flex shrink-0 items-center justify-center lg:justify-end">
            <div className="scale-125 lg:scale-[1.5]">
               <ContactButton />
            </div>
          </div>

        </div>
      </div>

      {/* Social and Copyright */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-sm opacity-60">
          © {currentYear} {myName}. Built with Next.js & Tailwind.
        </p>
        
        <div className="flex gap-6">
          <a href="https://github.com/WAGHMARETANNU" target="_blank" rel="noreferrer">
            <GithubIcon className="h-6 w-6 fill-current transition-all hover:-translate-y-1 hover:text-accent" />
          </a>
          <a href="https://www.linkedin.com/in/tannuwaghmare/" target="_blank" rel="noreferrer">
            <LinkedinIcon className="h-6 w-6 fill-current transition-all hover:-translate-y-1 hover:text-accent" />
          </a>
        </div>
      </div>
    </footer>
  );
}