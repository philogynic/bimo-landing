import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  type?: "button" | "submit";
  className?: string;
}

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button({
  href,
  children,
  variant = "solid",
  type = "button",
  className = ""
}: ButtonProps) {
  const variantClass =
    variant === "solid"
      ? "bg-accent text-canvas hover:bg-accent/90"
      : "border border-line bg-canvas text-ink hover:bg-panel";

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}
