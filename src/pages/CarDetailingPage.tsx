import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import HomePagePackageSelector from '../components/HomePagePackageSelector';
import { SERVICES, getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

export default function CarDetailingPage() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Car Detailing Services & Packages"
        description="Explore all mobile car detailing services and packages from Albuquerque Detailing Pros, including interior detailing, ceramic coating, and paint correction."
        keywords="car detailing Albuquerque, detailing packages, mobile car detailing services"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Car Detailing Services & Packages</h1>
          <p className="text-gray-300 mb-8">
            Every service we offer, from a quick exterior refresh to full ceramic coating protection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openBookingModal}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Book Now
            </button>
            <a
              href={getPhoneLink()}
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10"
            >
              <Phone className="w-4 h-4" /> {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Individual Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to={service.slug === 'fleet-commercial-detailing' ? '/fleet' : `/service/${service.slug}`}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <HomePagePackageSelector />

      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Not Sure Which Package Fits Your Vehicle?</h2>
        <p className="text-gray-600 mb-8">
          See average pricing for every package on our{' '}
          <Link to="/car-detailing-prices-albuquerque" className="underline font-semibold">
            Albuquerque pricing guide
          </Link>
          , or contact us and we'll recommend the right starting point.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
        >
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
