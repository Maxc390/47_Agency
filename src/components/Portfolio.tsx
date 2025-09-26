import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioProps {
  data: WebContent['portfolio'];
}

function ProjectCard({ project }: { project: WebContent['portfolio'][0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4">
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <ExternalLink size={20} className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ data }: PortfolioProps) {
  const ref = useGsapReveal(0.1);

  return (
    <section
      ref={ref}
      className="section bg-white"
      id="portfolio"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our recent projects that demonstrate our expertise
            in web development, automation, and design.
          </p>
        </div>

        <div className="reveal">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            className="portfolio-swiper"
          >
            {data.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


    </section>
  );
}
