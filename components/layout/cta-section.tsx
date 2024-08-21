import { Button, buttonVariants } from "@/components/ui/button";
import { homeConfig } from "@/config/marketing";
import Link from "next/link";
import { SectionWrapper } from "../typography";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { badgeVariants } from "../ui/badge";

export const CTASection = async () => {
  return (
    <SectionWrapper className="min-h-screen md:min-h-fit">
      <Link
        className={badgeVariants({
          variant: "default",
        })}
        href={siteConfig.links.twitter}
        target="_blank"
      >
      @fullstack_nyc
      </Link>
      <p className="text-sm font-mono uppercase">Exactly what you ask for</p>
      <p className="text-6xl font-extrabold">{homeConfig.heading}</p>
      <p className="text-2xl pb-4">{homeConfig.subHeading}</p>
      <div className=" inline-flex space-x-2">
        <Link
          className={buttonVariants({
            variant: "default",
            className: "capitalize rounded-3xl",
          })}
          href={homeConfig.btnURL}
        >
          {homeConfig.btnText}
        </Link>
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "capitalize",
          })}
          href={homeConfig.featureBtnUrl}
        >
          {homeConfig.featureBtnText} <Icons.chevronRight className="h-5 w-5" />
        </Link>
      </div>
    </SectionWrapper>
  );
};
