import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { NowSection } from "@/components/now-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <NowSection />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </>
  );
}
