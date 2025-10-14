import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';

interface HeroProps {
  data: WebContent['hero'];
}

export default function Hero({ data }: HeroProps) {
  const ref = useGsapReveal(0.15);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f2f4] via-white to-[#f0fbfd] pt-20"
      id="hero"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="reveal text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {data.headline}
              </h1>
              <p className="reveal text-xl text-gray-600 leading-relaxed">
                {data.subheadline}
              </p>
            </div>

            {/* CTA */}
            <div className="reveal flex flex-col sm:flex-row gap-4">
              <a
                href={data.ctaLink}
                className="btn btn--primary text-lg px-8 py-4 group"
              >
                {data.ctaText}
                <ArrowRight
                  size={20}
                  className="text-[#4B9DAA] transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-8 pt-8 border-t">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4B9DAA33] to-[#4B9DAA11] rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={data.heroImage}
                  alt="TechX team collaboration"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
