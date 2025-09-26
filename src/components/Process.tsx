import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';
import { getIconByName } from '@/lib/icons';

interface ProcessProps {
  data: WebContent['process'];
}

function ProcessStep({ process, index }: { process: WebContent['process'][0]; index: number }) {
  return (
    <div className="reveal relative">
      {/* Connection Line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 transform translate-y-1/2 z-0" style={{ background: 'linear-gradient(to right, #4B9DAA, #6ab1bb)' }}></div>
      )}

      <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
        {/* Step Number */}
        <div className="flex items-center justify-center w-16 h-16 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #4B9DAA, #3f8c98)' }}>
          {process.step}
        </div>

        {/* Icon */}
        <div className="text-4xl text-center mb-4">{getIconByName(process.icon)}</div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
          {process.title}
        </h3>

        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {process.description}
        </p>

        <ul className="space-y-2">
          {process.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-center text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Process({ data }: ProcessProps) {
  const ref = useGsapReveal(0.2);

  return (
    <section
      ref={ref}
      className="section bg-gray-50"
      id="process"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures every project delivers exceptional results
            through careful planning, execution, and continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {data.map((process, index) => (
            <ProcessStep
              key={process.step}
              process={process}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
