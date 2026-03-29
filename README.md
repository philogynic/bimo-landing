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

## Deploy (Vercel)

1. Import this repository in Vercel.
2. Add environment variables from `.env.example`.
3. Use default Next.js build settings.
