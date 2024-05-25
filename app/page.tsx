import { FeaturesSection } from "@/app/components/layout/features-section";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { homeConfig } from "@/config/marketing";

export default function Home() {
  return (
    <>
      <section className="items-center p-24 space-y-4">
        <p className="text-4xl font-extrabold">{homeConfig.heading}</p>
        <p className="text-2xl font-light">{homeConfig.subHeading}</p>
        <Button
          className={buttonVariants({
            variant: "default",
            className: "capitalize",
          })}
        >
          {homeConfig.btnText}
        </Button>
      </section>
      <FeaturesSection />
    </>
  );
}
