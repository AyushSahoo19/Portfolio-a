import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsShowcaseSection } from "@/components/projects-showcase-section"
import { WorkplaceSection } from "@/components/workplace-section"
import { ResearchSection } from "@/components/research-section"
import { ApplicationsSection } from "@/components/applications-section"
import { MiscellaneousSection } from "@/components/miscellaneous-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsShowcaseSection />
        <WorkplaceSection />
        <ResearchSection />
        <ApplicationsSection />
        <MiscellaneousSection />
        <ToolsSection />
        <ContactSection />
      </main>
    </div>
  )
}
