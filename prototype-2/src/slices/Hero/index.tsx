import { FC } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { HeroSlice } from "@/types/content";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";
import { RichText } from "@/components/RichText";

gsap.registerPlugin(useGSAP);

/**
 * Props for `Hero`.
 */
export type HeroProps = {
  slice: HeroSlice;
};

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn
        vars={{ scale: 1, opacity: 0.5 }}
        className="absolute inset-0 opacity-0 motion-safe:scale-125"
      >
        <Image
          src={slice.primary.image.url}
          alt={slice.primary.image.alt || ""}
          priority
          fill
          className="object-cover motion-reduce:opacity-50"
        />
      </FadeIn>

      <div className="relative flex h-screen flex-col justify-center">
        <RevealText
          field={slice.primary.heading}
          id="hero-heading"
          className="font-display max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl"
          staggerAmount={0.2}
          duration={1.7}
          as="h1"
        />

        <FadeIn
          className="mt-6 max-w-md translate-y-8 text-lg text-neutral-100"
          vars={{ delay: 1, duration: 1.3 }}
        >
          <RichText field={slice.primary.body} />
        </FadeIn>

        <FadeIn
          className="mt-8 translate-y-5"
          vars={{ delay: 1.7, duration: 1.1 }}
        >
          {slice.primary.button.map((link, index) => (
            <ButtonLink
              key={index}
              link={link}
              className="w-fit"
              variant="Secondary"
            />
          ))}
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;
