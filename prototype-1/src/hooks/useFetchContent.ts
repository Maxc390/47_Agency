import { useEffect, useState } from 'react';

export interface WebContent {
  site: {
    title: string;
    tagline: string;
    email: string;
    heroCta: string;
  };
  navigation: {
    logo: string;
    links: Array<{ label: string; href: string }>;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
    heroImage: string;
    stats: Array<{ number: string; label: string }>;
  };
  capabilities: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
  portfolio: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    summary: string;
    technologies: string[];
    link: string;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
    // icon: string;
    details: string[];
  }>;
  brands: Array<{
    name: string;
    logo: string;
  }>;
  testimonials: Array<{
    id: string;
    author: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
  }>;
  about: {
    title: string;
    content: string;
    philosophy: Array<{
      title: string;
      description: string;
    }>;
    team: Array<{
      name: string;
      role: string;
      image: string;
    }>;
    image: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    cta: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      projectPlaceholder: string;
      submitText: string;
    };
  };
  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
    social: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
}

export function useFetchContent() {
  const [content, setContent] = useState<WebContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/webContent.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch webContent.json');
        return res.json();
      })
      .then((data: WebContent) => setContent(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}
