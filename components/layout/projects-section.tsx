import { Project } from "contentlayer/generated";
import { ProjectCard } from "../project-card";

export const ProjectsSection = async ({projects}:{projects: Project[]}) => {

    return (
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">
        Blog
        </h1>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    );

}
