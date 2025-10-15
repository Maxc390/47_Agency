import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductFeatureSlice, Project } from "@/types/content";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { RichText, PrismicText } from "@/components/RichText";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `ProductFeature`.
 */
export type ProductFeatureProps = {
  slice: ProductFeatureSlice;
  project?: Project;
};

/**
 * Component for "ProductFeature" Slices.
 */
const ProductFeature: FC<ProductFeatureProps> = ({ slice, project }) => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-black py-16 text-white md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
        <FadeIn
          className="translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
          vars={{ duration: 1 }}
          start="top 70%"
        >
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt || ""}
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </FadeIn>

        <FadeIn className="translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-3 lg:row-start-1">
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
          <div className="max-w-lg text-base text-gray-300">
            <RichText field={slice.primary.description} />
          </div>
        </FadeIn>

        {/* Project */}

        {project && (
          <FadeIn
            className="animate-in relative translate-y-16 self-end bg-white/10 opacity-0 will-change-transform"
            vars={{ duration: 1, delay: 1 }}
          >
            <Image
              src={project.project_image.url}
              alt={project.project_image.alt || ""}
              width={400}
              height={300}
              className="mx-auto -mt-10 w-full -rotate-12 md:-mt-20"
            />

            <div className="flex justify-between p-10 pt-4">
              <div className="space-y-1">
                <h3 className="font-display text-4xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {project.category || "Web Application"}
                </p>
                <Link href={`/projects/${project.uid}`}>
                  <ButtonLink
                    link={{ text: "See Project", url: `/projects/${project.uid}` }}
                    variant="Secondary"
                    className="mt-6"
                  >
                    See Project
                  </ButtonLink>
                </Link>
              </div>
              {project.live_link && (
                <ButtonLink
                  link={project.live_link}
                  variant="Primary"
                  className="mt-4"
                >
                  Live Demo
                </ButtonLink>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </Bounded>
  );
};

export default ProductFeature;
