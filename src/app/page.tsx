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
import { ExploreMoreSection } from "@/components/ExploreMoreSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-transparent relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TickerTape />
      <TechStack />
      <ExperienceTimeline />
      <ProjectsSection />
      <MethodologySection />
      <CertificationsTeaser />
      <EducationSection />
      <PublicationsSection />
      <ExploreMoreSection />
      <ContactSection />
      
      {/* Footer / Contact stub */}
      <Footer />
    </main>
  );
}
