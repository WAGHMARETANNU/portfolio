import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  // Use your actual details here to avoid import errors
  const myEmail = "tannuwaghmare15@gmail.com";
  const myName = "Tannu Waghmare";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      {/* Contact Section */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${myEmail}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-7xl"
        >
          <span>{myEmail}</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>

      {/* Social and Copyright Section */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-muted-foreground/20 pt-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {myName}. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="https://github.com/WAGHMARETANNU" target="_blank" rel="noreferrer">
            <GithubIcon className="h-6 w-6 fill-current transition-colors hover:text-accent" />
          </a>
          <a href="https://www.linkedin.com/in/tannuwaghmare/" target="_blank" rel="noreferrer">
            <LinkedinIcon className="h-6 w-6 fill-current transition-colors hover:text-accent" />
          </a>
        </div>
      </div>
    </footer>
  );
}