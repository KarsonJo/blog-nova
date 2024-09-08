import AboutMeSection from "@/features/home/components/about-me-section";
import ClientCommentsSection from "@/features/home/components/client-comments-section";
import FeaturesSection from "@/features/home/components/features-section";
import HeroSection from "@/features/home/components/hero-section";
import HireMeSection from "@/features/home/components/hire-me-section";
import SkillsSection from "@/features/home/components/skills-section";
import WorksSection from "@/features/home/components/works-section";

export default async function Home() {
  return (
    <main className="dark:bg-zinc-900 dark:text-white">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <FeaturesSection />
      <WorksSection />
      <ClientCommentsSection />
      <HireMeSection />
    </main>
  );
}
