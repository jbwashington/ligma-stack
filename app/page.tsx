import { CheckCheckIcon, Clock, Currency, LucideIcon, Pencil, Ruler, Stars } from "lucide-react";
import { BookingSection } from "@/components/layout/booking";
import { CTASection } from "@/components/layout/cta-section";
import { allProjects as projects } from "contentlayer/generated";
import { ProjectsSection } from "@/components/layout/projects-section";
import {FeatureCarousel} from "@/components/layout/feature-carousel";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { H1 } from "@/components/typography";

type Feature = {
  icon: LucideIcon;
  text: string;
};

const features: Feature[] = [
  { icon: Currency, text: "One flat fee, paid over time" },
  { icon: Clock, text: "On time delivery" },
  { icon: Clock, text: "Clear communication" },
  { icon: Pencil, text: "Expert guidance and support" },
  { icon: CheckCheckIcon, text: "Quick and easy process" },
  { icon: Stars, text: "100% American" },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="inline-flex items-center">
      <div 
      className={buttonVariants({variant: "outline", size: "icon", className: "mr-4 h-7 w-7"})}
      >
        <feature.icon className="w-3 h-3" />
      </div>
      <p className="text-sm font-mono  font-semibold uppercase">
        {feature.text}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <CTASection />
      <Separator className="mt-8 max-w-4xl mx-auto" />
      <FeatureCarousel
        className="gap-[3rem] [--duration:25s] motion-reduce:overflow-auto py-12"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
        fade={true}
        pauseOnHover={true}
      >
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </FeatureCarousel>
        <H1>Recent Work</H1>
      <ProjectsSection projects={projects} />
      <BookingSection />
    </>
  );
}
