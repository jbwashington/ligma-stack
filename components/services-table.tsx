

import { featuresConfig, ideasConfig } from "@/config/marketing";
import { H2, SectionWrapper } from "./typography";
import { Icons } from "./layout/icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const ServicesTable = async () => {
  return (
    <SectionWrapper className="space-y-4">
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
    </SectionWrapper>
  );
};
