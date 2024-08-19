import { Button, buttonVariants } from "@/components/ui/button";
import { homeConfig } from "@/config/marketing";
import Link from "next/link";
import { SectionWrapper } from "../typography";
import { Icons } from "./icons";

export const CTASection = async () => {
  return (
    <SectionWrapper>
      <p className="text-4xl font-extrabold">{homeConfig.heading}</p>
      <p className="text-2xl font-light pb-4">{homeConfig.subHeading}</p>
<div className=" inline-flex space-x-2">
      <Link
          className={buttonVariants({
            variant: "default",
            className: "capitalize",
          })}
       href={homeConfig.btnURL}>{homeConfig.btnText}</Link>
      <Link
          className={buttonVariants({
            variant: "ghost",
            className: "capitalize",
          })}
       href={homeConfig.featureBtnUrl}>
      {homeConfig.featureBtnText} <Icons.chevronRight className="h-5 w-5" /></Link>
</div>
    </SectionWrapper>
  );
};
