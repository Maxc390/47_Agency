import { FC } from "react";
import { ProjectListSlice } from "@/types/content";
import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";
import { RichText } from "@/components/RichText";
import { ProjectDisplay } from "./ProjectDisplay";

/**
 * Props for `ProjectList`.
 */
export type ProjectListProps = {
  slice: ProjectListSlice;
  index?: number;
};

/**
 * Component for "ProjectList" Slices.
 */
const ProjectList: FC<ProjectListProps> = ({ slice, index = 0 }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-8 bg-black py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          {slice.primary.eyebrow}
        </p>
        <RevealText
          field={slice.primary.heading}
          as="h2"
          id={`project-list-heading-${index}`}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <div className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          <RichText field={slice.primary.body} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12">
          {slice.primary.projects.map((item, index) => {
            if (item.project) {
              return (
                <ProjectDisplay
                  key={item.project.id || index}
                  project={item.project}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default ProjectList;
