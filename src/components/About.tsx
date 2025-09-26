import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';

interface AboutProps {
  data: WebContent['about'];
}

function TeamMember({ member }: { member: WebContent['about']['team'][0] }) {
  return (
    <div className="reveal text-center group">
      <div className="relative mb-4 inline-block">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full group-hover:from-blue-500/30 transition-all duration-300"></div>
      </div>
      <h4 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
        {member.name}
      </h4>
      <p className="text-sm text-gray-600">{member.role}</p>
    </div>
  );
}

function PhilosophyItem({ item }: { item: WebContent['about']['philosophy'][0] }) {
  return (
    <div className="reveal bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function About({ data }: AboutProps) {
  const ref = useGsapReveal(0.15);

  return (
    <section
      ref={ref}
      className="section bg-gray-50"
      id="about"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.title}
              </h2>
              <p className="reveal text-xl text-gray-600 leading-relaxed">
                {data.content}
              </p>
            </div>

            {/* Philosophy */}
            <div className="space-y-4">
              {data.philosophy.map((item, index) => (
                <PhilosophyItem key={index} item={item} />
              ))}
            </div>
          </div>

          {/* About Image */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B9DAA33] to-[#4B9DAA11] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={data.image}
                  alt="TechX team collaboration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="reveal text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h3>
          <p className="reveal text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Seven passionate innovators united by a shared vision:
            transforming complex challenges into elegant digital solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {data.team.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
