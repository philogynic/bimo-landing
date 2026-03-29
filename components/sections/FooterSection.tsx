interface FooterSectionProps {
  email: string;
  socials: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterSection({ email, socials }: FooterSectionProps) {
  return (
    <footer className="border-t border-line bg-panel py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-ink">Bimo Chandra</p>
          <p className="text-xs text-muted">{new Date().getFullYear()} - Built with Next.js and Tailwind CSS</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${email}`}
            className="underline decoration-line underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email
          </a>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
