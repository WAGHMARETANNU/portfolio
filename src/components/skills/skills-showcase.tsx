import { AnimatePresence } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

// Fixed: Changed from a tuple [ { ... } ] to an array { ... }[] 
// to allow multiple sections (Frontend, Backend, etc.)
export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>
        {/* Added safety check to ensure skills exists before mapping */}
        {skills && skills.map((section) => (
          <div key={section.sectionName} className="mt-4">
            <span className="text-xs font-semibold text-foreground sm:text-sm">
              {section.sectionName}
            </span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
              <AnimatePresence>
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`${section.sectionName}-${pill.name}-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebounced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}