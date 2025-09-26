import type React from 'react';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import type { WebContent } from '../hooks/useFetchContent';

interface ContactProps {
  data: WebContent['contact'];
}

export default function Contact({ data }: ContactProps) {
  const ref = useGsapReveal(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // Show success message (you could use a toast notification)
    alert('Message sent successfully!');
  };

  return (
    <section
      ref={ref}
      className="section bg-white"
      id="contact"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <p className="reveal text-xl text-gray-600 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="reveal space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to start your project?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a clear vision or just an idea, we're here to help
                  turn it into reality. Let's discuss how we can work together to
                  create something amazing.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: '#e6f2f4' }}>
                  <Mail className="" size={24} color="#4B9DAA" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email us directly</p>
                  <a
                    href={`mailto:${data.email}`}
                    className="hover:underline"
                    style={{ color: '#4B9DAA' }}
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #e6f2f4, #f0fbfd)' }}>
                <h4 className="font-bold text-gray-900 mb-4">What happens next?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#4B9DAA' }}>1.</span>
                    We'll get back to you within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#4B9DAA' }}>2.</span>
                    Schedule a discovery call to discuss your project
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#4B9DAA' }}>3.</span>
                    Receive a detailed proposal and timeline
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={data.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={data.form.projectPlaceholder}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn--primary text-lg py-4 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {data.form.submitText}
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
