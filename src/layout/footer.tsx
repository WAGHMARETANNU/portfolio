import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetadata";

export default function Footer() {
  const myName = "Tannu Waghmare";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-transparent px-6 py-6 sm:px-14 md:px-20">
      
      {/* Main Contact Container - Reduced padding and rounded corners */}
      <div className="mx-auto w-full max-w-6xl rounded-2xl bg-accent p-6 text-background sm:p-10 lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side: Scaled down text */}
          <div className="flex flex-col gap-3 lg:max-w-md">
            <span className="w-fit rounded-full bg-background/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Available for work
            </span>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Let&apos;s talk about <br />
              <span className="text-white/70 text-2xl md:text-3xl font-medium">the next project.</span>
            </h2>
            <p className="text-sm opacity-80 max-w-sm">
              I’m currently looking for new opportunities. My inbox is always open!
            </p>
            
            <a 
              href={`mailto:${siteMetadata.email}`} 
              className="mt-2 text-lg font-medium underline underline-offset-4 transition-opacity hover:opacity-70 md:text-xl"
            >
              {siteMetadata.email}
            </a>
          </div>

          {/* Right Side: Normal sized button */}
          <div className="flex shrink-0 items-center justify-center lg:justify-end">
             <ContactButton />
          </div>

        </div>
      </div>

      {/* Social and Copyright - Reduced gap */}
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
        <p className="text-[12px] opacity-60">
          © {currentYear} {myName}. Built with Next.js & Tailwind.
        </p>
        
        <div className="flex gap-5">
          <a href="https://github.com/WAGHMARETANNU" target="_blank" rel="noreferrer">
            <GithubIcon className="h-5 w-5 fill-current transition-all hover:text-accent" />
          </a>
          <a href="https://www.linkedin.com/in/tannuwaghmare/" target="_blank" rel="noreferrer">
            <LinkedinIcon className="h-5 w-5 fill-current transition-all hover:text-accent" />
          </a>
        </div>
      </div>
    </footer>
  );
}