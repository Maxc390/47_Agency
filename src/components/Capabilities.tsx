import type React from 'react';
import { useGsapReveal, useGsapHover } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';
import { getIconByName } from '@/lib/icons';

interface CapabilitiesProps {
  data: WebContent['capabilities'];
}

function CapabilityCard({ capability }: { capability: WebContent['capabilities'][0] }) {
  const hoverRef = useGsapHover();

  return (
    <div
      ref={hoverRef as React.RefObject<HTMLDivElement>}
      className="reveal bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
    >
      <div className="text-4xl mb-6">{getIconByName(capability.icon)}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {capability.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {capability.description}
      </p>
      <ul className="space-y-3">
        {capability.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#4B9DAA' }}></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Capabilities({ data }: CapabilitiesProps) {
  const ref = useGsapReveal(0.2);

  return (
    <section
      ref={ref}
      className="section bg-gray-50"
      id="services"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Do Best
          </h2>
          <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in building high-quality web products and impactful graphic designs —
            with a strong belief that quality and speed can go hand-in-hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((capability, index) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
