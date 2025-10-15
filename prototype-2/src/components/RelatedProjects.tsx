import Image from "next/image";
import { getAllProjects } from "@/lib/content";
import { TransitionLink } from "./TransitionLink";

type RelatedProjectsProps = {
  currentProjectUid: string;
};

export const RelatedProjects = async ({
  currentProjectUid,
}: RelatedProjectsProps) => {
  const allProjects = await getAllProjects();

  const otherProjects = allProjects.filter(
    (project) => project.uid !== currentProjectUid,
  );

  if (otherProjects.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        Other Projects
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjects.slice(0, 4).map((project) => (
          <li key={project.uid}>
            <TransitionLink 
              href={`/projects/${project.uid}`} 
              className="group"
            >
              <div className="relative aspect-square w-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={project.project_image.url}
                  alt={project.project_image.alt || ""}
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-4 space-y-1 text-white">
                <h3 className="font-display text-xl">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {project.category || "Web Application"}
                </p>
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};