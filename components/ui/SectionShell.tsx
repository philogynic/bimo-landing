import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}

export function SectionShell({ id, eyebrow, title, children }: SectionShellProps) {
  return (
    <section id={id} className="border-t border-line/70 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title) && (
          <header className="mb-8 max-w-3xl animate-fade-up opacity-0 [animation-delay:50ms]">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>}
          </header>
        )}
        <div className="animate-fade-up opacity-0 [animation-delay:120ms]">{children}</div>
      </div>
    </section>
  );
}
