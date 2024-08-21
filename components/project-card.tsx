import { Project } from "contentlayer/generated";
import Link from "next/link";
import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { badgeVariants } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export const ProjectCard = async (project: Project) => {
  return (
    <Link href={`https://${project.title}`}>
      <Card className="flex flex-col relative">
        <CardHeader className="max-w-52">
          <div className="space-y-2">
            <div className="inline-flex space-x-2">
              {project.categories.map((category) => (
                <p
                  key={category}
                  className={badgeVariants({
                    variant: "default",
                  })}
                >
                  {category}
                </p>
              ))}
            </div>
            <CardTitle className="font-extrabold text-sm">
              {project.title}
            </CardTitle>
            <CardDescription className="text-xs">
              {project.description}
            </CardDescription>
          </div>
        </CardHeader>
        <ExternalLink className="h-4 w-4 absolute bottom-2 right-2 text-muted-foreground" />
      </Card>
    </Link>
  );
};
