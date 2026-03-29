import type { SiteContent } from "@/src/types/content";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
  "https://formspree.io/f/your-form-id";

export const siteContent: SiteContent = {
  hero: {
    name: "Christoforus Bimo",
    role: "Full Stack Data Analyst",
    subtitle:
      "I create insights from your messy data",
    primaryCtaLabel: "Contact Me",
    secondaryCtaLabel: "View Projects",
    focusHeading: "Focus Areas",
    focusAreas: [
      "Modern data stack setup and optimization for business-ready reporting.",
      "Analytics engineering workflows that improve data trust and speed.",
      "Actionable analysis for growth, retention, and product decision-making."
    ],
    focusFooter: "Available for freelance analytics projects and long-term collaboration."
  },
  about: {
    title: "I help to enable analytics capability for your company",
    bio: "I am a Jakarta-based full stack data analyst",
    highlights: [
      "10+ years building analytics capability",
      "Specialized in GCP"
    ],
    location: "Jakarta, Indonesia",
    availability: "Open to freelance and full-time opportunities"
  },
  skills: [
    {
      title: "Data Engineering",
      items: ["BigQuery", "Fivetran", "Datastream"]
    },
    {
      title: "Analytics Engineering",
      items: ["dbt", "Airflow"]
    },
    {
      title: "Data Analyst/Scientist",
      items: ["Customer Analytics", "App Behavior", "Marketing Analytics", "Growth Analytics", "Machine Learning"]
    }
  ],
  projects: [
    {
      title: "XXXX",
      summary:
        "ABC xxxx",
      tech: ["tech A", "tech B"],
      status: "Live",
      demoUrl: "https://example.com/demo"
    },
    {
      title: "YYY",
      summary:
        "Abc xxx",
      tech: ["tech A", "tech B"],
      status: "In Progress",
      repoUrl: "https://github.com/example/creator-booking"
    }
  ],
  testimonials: [
    {
      quote:
        "Bimo delivered high-quality frontend work quickly and improved both perceived polish and actual conversion rates.",
      author: "Nadia Putri",
      role: "Product Manager",
      company: "Studio Meridian"
    },
    {
      quote:
        "Communication was clear, implementation was clean, and the final site was far easier to maintain than our previous setup.",
      author: "Arif Rahman",
      role: "Founder",
      company: "Pixel Forge"
    }
  ],
  faq: [
    {
      question: "What kind of projects do you usually take?",
      answer:
        "I focus on portfolio sites, product landing pages, and frontend-heavy web applications that need strong UX and maintainable code."
    },
    {
      question: "How fast can we launch?",
      answer:
        "For a focused landing page scope, most engagements can launch within one to two weeks after final content and assets are ready."
    },
    {
      question: "Do you work with existing teams?",
      answer:
        "Yes. I regularly work with product managers, designers, and backend engineers and can adapt to your existing workflow."
    }
  ],
  contact: {
    email: "hello@bimo.dev",
    formEndpoint,
    successMessage: "Thanks for reaching out. I will get back to you within 1-2 business days."
  },
  socials: [
    { label: "GitHub", href: "https://github.com/chbimo" },
    { label: "LinkedIn", href: "https://linkedin.com/in/chbimo" },
    { label: "X", href: "https://x.com/chbimo" }
  ]
};
