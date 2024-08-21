import { FeaturesSection } from "@/components/layout/features-section";
import { BookingSection } from "@/components/layout/booking";
import { CTASection } from "@/components/layout/cta-section";
import { IdeasSection } from "@/components/layout/ideas-section";
import { allProjects as projects } from "contentlayer/generated";
import { ProjectsSection } from "@/components/layout/projects-section";

export default function Home() {
  return (
    <>
      <CTASection />
      <ProjectsSection projects={projects} />
      <FeaturesSection />
      <IdeasSection />
      <BookingSection />
    </>
  );
}
