import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialsProps {
  data: WebContent['testimonials'];
}

function TestimonialCard({ testimonial }: { testimonial: WebContent['testimonials'][0] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote size={32} className="text-blue-500" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-6">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className="text-yellow-400 fill-current"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  const ref = useGsapReveal(0.1);

  return (
    <section
      ref={ref}
      className="section bg-white"
      id="testimonials"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say
            about their experience working with TechX.
          </p>
        </div>

        <div className="reveal max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            className="testimonials-swiper"
          >
            {data.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


    </section>
  );
}
