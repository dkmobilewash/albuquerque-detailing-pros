import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { locationContent } from '../data/locations';

export default function LocationsPage() {
  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Service Area Locations"
        description="Albuquerque Detailing Pros serves Albuquerque, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos, and Sandia Heights."
        keywords="mobile detailing locations, Albuquerque metro service areas"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-gray-300">
            Mobile auto detailing across the greater Albuquerque metro. Select your area to learn more.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationContent.map((loc) => (
            <Link
              key={loc.slug}
              to={`/${loc.slug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <MapPin className="w-6 h-6 mb-3" />
              <h2 className="font-bold text-lg mb-2">{loc.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{loc.environment}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold">
                View Area <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
