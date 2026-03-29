export interface HeroContent {
  name: string;
  role: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  focusHeading: string;
  focusAreas: string[];
  focusFooter: string;
}

export interface AboutContent {
  title: string;
  bio: string;
  highlights: string[];
  location: string;
  availability: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  status: "Live" | "In Progress" | "Concept";
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactContent {
  email: string;
  formEndpoint: string;
  successMessage: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillCategory[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  faq: FaqItem[];
  contact: ContactContent;
  socials: Array<{
    label: string;
    href: string;
  }>;
}
