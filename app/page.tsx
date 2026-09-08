import { Hero } from "@/components/hero";
import { NowSection } from "@/components/now-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <NowSection />
      </main>
    </>
  );
}
