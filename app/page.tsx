import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteContent } from "@/src/content/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroSection content={siteContent.hero} />
      <main>
        <AboutSection content={siteContent.about} />
        <SkillsSection items={siteContent.skills} />
        <ProjectsSection items={siteContent.projects} />
        <TestimonialsSection items={siteContent.testimonials} />
        <FaqSection items={siteContent.faq} />
        <ContactSection content={siteContent.contact} />
      </main>
      <FooterSection email={siteContent.contact.email} socials={siteContent.socials} />
    </>
  );
}
