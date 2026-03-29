import { SectionShell } from "@/components/ui/SectionShell";
import type { FaqItem } from "@/src/types/content";

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <SectionShell id="faq" eyebrow="FAQ" title="Common questions">
      <div className="space-y-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-line bg-panel p-5">
            <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-ink marker:content-none">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
