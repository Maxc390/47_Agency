import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { ProjectMeta } from "@/components/ProjectMeta";
import { RichText } from "@/components/RichText";
import { Project } from "@/types/content";

type ProjectDisplayProps = {
  project: Project;
};

export const ProjectDisplay = ({ project }: ProjectDisplayProps) => {

  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 2.5 }}
      start="top 50%"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={project.hero_image?.url || project.project_image?.url || ""}
          alt={project.hero_image?.alt || project.project_image?.alt || ""}
          className="object-cover"
          fill
          sizes="100vw"
          quality={90}
        />
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: "url(/noisetexture.jpg)", backgroundSize: "auto", backgroundRepeat: "repeat" }}
        />
      </div>

      <FadeIn
        className="relative z-10 grid translate-y-8"
        vars={{ duration: 3, delay: 0.8 }}
        start="top 50%"
      >
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          {project.title}
        </h3>

        <p className="mb-8 text-base font-semibold text-gray-300">
          {project.category || "Web Application"}
        </p>

        <div className="mb-10 max-w-md text-lg text-gray-300">
          <RichText field={project.description} />
        </div>

        <ProjectMeta
          category={project.category}
          technologies={project.technologies}
          className="mb-10"
        />

        <div className="flex flex-wrap gap-4">
          <Link href={`/projects/${project.uid}`}>
            <ButtonLink link={{ text: "See Project", url: `/projects/${project.uid}` }} variant="Secondary">
              See Project
            </ButtonLink>
          </Link>

          {project.live_link && (
            <ButtonLink link={project.live_link} variant="Primary">
              Live Demo
            </ButtonLink>
          )}
        </div>
      </FadeIn>
    </FadeIn>
  );
};