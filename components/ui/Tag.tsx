import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-panel px-4 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
