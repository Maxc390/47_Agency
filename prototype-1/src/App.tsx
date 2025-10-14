import React from 'react';
import { useFetchContent } from './hooks/useFetchContent';
import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading TechX...</p>
      </div>
    </div>
  );
}

function ErrorMessage({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          <h2 className="font-bold text-lg mb-2">Failed to load content</h2>
          <p className="text-sm">{error.message}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="btn btn--primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const { content, loading, error } = useFetchContent();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!content) return <ErrorMessage error={new Error('No content available')} />;

  return (
    <div className="min-h-screen">
      <Header data={{ ...content.navigation, email: content.site.email }} />

      <main>
        <Hero data={content.hero} />
        <Capabilities data={content.capabilities} />
        <Portfolio data={content.portfolio} />
        <Process data={content.process} />
        <Testimonials data={content.testimonials} />
        <About data={content.about} />
        <Contact data={content.contact} />
      </main>

      <Footer data={{ ...content.footer, email: content.site.email }} />
    </div>
  );
}
