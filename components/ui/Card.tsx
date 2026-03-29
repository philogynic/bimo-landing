import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article className={`rounded-2xl border border-line bg-panel p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] ${className}`}>
      {children}
    </article>
  );
}
