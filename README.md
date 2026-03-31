# Bimo Landing Page

Personal portfolio landing page built with Next.js + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL`: deployed URL (for canonical + sitemap)
- `NEXT_PUBLIC_FORM_ENDPOINT`: Formspree/Web3Forms endpoint

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy (GitHub Pages)

1. Set repository visibility to public.
2. In GitHub Settings > Pages, set Source to GitHub Actions.
3. Add repo variable `NEXT_PUBLIC_FORM_ENDPOINT` (or set it as a secret).
4. Push to `main` and wait for the `deploy-pages` workflow.
5. Visit `https://philogynic.github.io/bimo-landing/`.
