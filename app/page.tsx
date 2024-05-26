import { FeaturesSection } from "@/app/components/layout/features-section";
import { BookingSection } from "./components/layout/booking";
import { CTASection } from "./components/layout/cta-section";



export default function Home() {
  return (
    <>
      <CTASection />
      <FeaturesSection />
      <BookingSection />
    </>
  );
}
