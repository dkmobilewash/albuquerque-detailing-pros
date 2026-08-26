import { Link } from 'react-router-dom';
import { Car, Sparkles, Droplets, Wand2, Shield, Lightbulb, Cog, Truck, type LucideIcon } from 'lucide-react';
import { SERVICES } from '../config/business';

const ICON_MAP: Record<string, LucideIcon> = {
  Car,
  Sparkles,
  Droplets,
  Wand2,
  Shield,
  Lightbulb,
  Cog,
  Truck,
};

export default function HomepageServiceSections() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Car;
            const to = service.slug === 'fleet-commercial-detailing' ? '/fleet' : `/service/${service.slug}`;
            return (
              <Link
                key={service.slug}
                to={to}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <IconComponent className="w-8 h-8 mb-3" />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
