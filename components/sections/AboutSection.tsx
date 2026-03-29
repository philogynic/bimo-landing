import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import type { AboutContent } from "@/src/types/content";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionShell id="about" eyebrow="About" title={content.title}>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <p className="max-w-2xl text-base leading-relaxed text-muted">{content.bio}</p>
        <div className="space-y-4">
          <p className="text-sm text-ink">
            <strong className="font-semibold">Location:</strong> {content.location}
          </p>
          <p className="text-sm text-ink">
            <strong className="font-semibold">Availability:</strong> {content.availability}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {content.highlights.map((highlight) => (
              <Tag key={highlight}>{highlight}</Tag>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
