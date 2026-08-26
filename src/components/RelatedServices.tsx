import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../config/business';

interface RelatedServicesProps {
  currentSlug?: string;
  slugs?: string[];
}

export default function RelatedServices({ currentSlug, slugs }: RelatedServicesProps) {
  const items = slugs
    ? SERVICES.filter((s) => slugs.includes(s.slug))
    : SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((service) => (
            <Link
              key={service.slug}
              to={`/service/${service.slug}`}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-black">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
