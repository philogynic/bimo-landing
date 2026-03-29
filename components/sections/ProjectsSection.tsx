import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import type { ProjectItem } from "@/src/types/content";

interface ProjectsSectionProps {
  items: ProjectItem[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
              <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {project.status}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm font-medium">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-line underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-line underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Repository
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
