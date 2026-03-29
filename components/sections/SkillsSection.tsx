import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import type { SkillCategory } from "@/src/types/content";

interface SkillsSectionProps {
  items: SkillCategory[];
}

export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Core capabilities">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((category) => (
          <Card key={category.title}>
            <h3 className="text-base font-semibold text-ink">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
