import { allProjects } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);
  return { title: project.title };
};

export const ProjectPage = async ({ params }: { params: { slug: string } }) => {

  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: project.body.code }}
      />
    </article>
  );
};
