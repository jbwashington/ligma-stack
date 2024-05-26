import { Button, buttonVariants } from "@/app/components/ui/button";
import { homeConfig } from "@/config/marketing";
import Link from "next/link";

export const CTASection = async () => {
  return (
    <section className="p-24 space-y-4">
      <p className="text-4xl font-extrabold">{homeConfig.heading}</p>
      <p className="text-2xl font-light">{homeConfig.subHeading}</p>
      <Link href={homeConfig.btnURL}>
        <Button
          className={buttonVariants({
            variant: "default",
            className: "capitalize",
          })}
        >
          {homeConfig.btnText}
        </Button>
      </Link>
    </section>
  );
};
