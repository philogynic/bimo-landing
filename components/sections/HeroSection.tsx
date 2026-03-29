import { Button } from "@/components/ui/Button";
import type { HeroContent } from "@/src/types/content";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden border-b border-line/70 bg-[radial-gradient(circle_at_top_right,_rgba(58,110,165,0.15),_transparent_45%),linear-gradient(180deg,#f7f6f2_0%,#f4f2ec_100%)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="animate-fade-up opacity-0 [animation-delay:40ms]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Personal Portfolio
          </p>
          <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl">{content.name}</h1>
          <p className="mt-4 text-lg font-medium text-ink/90 sm:text-xl">{content.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{content.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact">{content.primaryCtaLabel}</Button>
            <Button href="#projects" variant="outline">
              {content.secondaryCtaLabel}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up rounded-2xl border border-line bg-panel p-6 opacity-0 [animation-delay:160ms] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {content.focusHeading}
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink">
            {content.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 border-t border-line pt-6 text-sm text-muted">{content.focusFooter}</p>
        </div>
      </div>
    </header>
  );
}
