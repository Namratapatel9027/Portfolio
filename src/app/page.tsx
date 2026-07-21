import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TickerTape } from "@/components/TickerTape";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CertificationsTeaser } from "@/components/CertificationsTeaser";
import { EducationSection } from "@/components/EducationSection";

import { PublicationsSection } from "@/components/PublicationsSection";
import { DomainsSection } from "@/components/DomainsSection";
import { FunFactsSection } from "@/components/FunFactsSection";
import { ExploreMoreSection } from "@/components/ExploreMoreSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GlobalMoon } from "@/components/GlobalMoon";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-transparent relative z-10">
      <GlobalMoon />
      <Navbar />
      <div className="relative w-full">
        <HeroSection />
        <AboutSection />
      </div>
      <TickerTape />
      <TechStack />
      <ExperienceTimeline />
      <ProjectsSection />
      <MethodologySection />
      <EducationSection />
      <DomainsSection />
      <PublicationsSection />
      <FunFactsSection />
      <ExploreMoreSection />
      <ContactSection />
      
      {/* Footer / Contact stub */}
      <Footer />
    </main>
  );
}
