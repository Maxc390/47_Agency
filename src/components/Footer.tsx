import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import type { WebContent } from '../hooks/useFetchContent';

interface FooterProps {
  data: WebContent['footer'] & Pick<WebContent['site'], 'email'>;
}

export default function Footer({ data }: FooterProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'twitter':
        return Twitter;
      default:
        return Github;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient">
                TechX
              </div>
              <p className="text-gray-400 text-sm">
                Building web products & designs that matter.
                Quality and speed in perfect harmony.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                {data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${data.email}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {data.email}
                </a>
                <div className="flex space-x-3 pt-2">
                  {data.social.map((social, index) => {
                    const IconComponent = getIconComponent(social.icon);
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: '#4B9DAA' }}
                        aria-label={social.platform}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>{data.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {data.links.slice(0, 2).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition-colors"
                  style={{ color: '#4B9DAA' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
