import { Project } from "contentlayer/generated";
import { ProjectCard } from "../project-card";

export const ProjectsSection = async ({projects}:{projects: Project[]}) => {

    return (
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 text-2xl">Projects</h1>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    );

}
