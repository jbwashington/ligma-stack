import { allProjects, Project } from "contentlayer/generated";
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

export const ProjectCard = async (project: Project) => {
    return(
        <div className="mb-8">
        <h2 className="mb-1 text-xl">
          <Link href={project.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {project.title}
          </Link>
        </h2>
        <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: project.body.html }} />
      </div>
    )
}