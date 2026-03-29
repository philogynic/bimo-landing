import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import type { TestimonialItem } from "@/src/types/content";

interface TestimonialsSectionProps {
  items: TestimonialItem[];
}

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <SectionShell id="testimonials" eyebrow="Testimonials" title="What collaborators say">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={`${item.author}-${item.role}`}>
            <blockquote className="text-sm leading-relaxed text-ink">"{item.quote}"</blockquote>
            <p className="mt-5 text-sm font-semibold text-ink">{item.author}</p>
            <p className="text-xs text-muted">
              {item.role}
              {item.company ? `, ${item.company}` : ""}
            </p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
