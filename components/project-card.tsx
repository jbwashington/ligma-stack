import { Project } from "contentlayer/generated";
import Link from "next/link";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";

export const ProjectCard = async (project: Project) => {
  return (
    <Link href={project.url}>
      <Card className="mb-8">
        <Image
          src={project.image}
          alt={`Image for ${project.title}`}
          width={350}
          height={350}
        />
        <CardTitle>{project.title}</CardTitle>
      </Card>
    </Link>
  );
};
