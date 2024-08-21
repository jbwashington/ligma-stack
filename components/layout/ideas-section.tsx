import { featuresConfig, ideasConfig } from "@/config/marketing";
import { H2, SectionWrapper } from "../typography";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "./icons";

export const IdeasSection = async () => {
  return (
    <SectionWrapper className="space-y-4" inverted>
      <H2>{ideasConfig.description}</H2>
      <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {ideasConfig.project.map((project, index) => (
          <div className="flex h-[180px] flex-col rounded-md p-6" key={index}>
            <div className="space-y-2">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm">{project.timeline}</p>
              <p className="text-sm">${project.budget}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/pricing"
        className={buttonVariants({
          variant: "default",
          className: "rounded-3xl capitalize",
        })}
      >
        Explore packages <Icons.chevronRight className="w-4 h-4" />
      </Link>
    </SectionWrapper>
  );
};
