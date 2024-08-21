import { FeaturesSection } from "@/components/layout/features-section";
import { BookingSection } from "@/components/layout/booking";
import { CTASection } from "@/components/layout/cta-section";
import { IdeasSection } from "@/components/layout/ideas-section";

export default function Home() {
  return (
    <>
      <CTASection />
      <FeaturesSection />
      <IdeasSection />
      <BookingSection />
    </>
  );
}
