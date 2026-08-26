import { useParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import ContactFormModal from '../components/ContactFormModal';
import { useState } from 'react';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { serviceProfiles } from '../data/locationServiceContent';
import { locationContent } from '../data/locations';

export default function FleetCommercialDetailingPage() {
  const { city } = useParams<{ city: string }>();
  const [contactOpen, setContactOpen] = useState(false);

  const locationMatch = locationContent.find((loc) => loc.slug === city);
  const cityName = locationMatch?.name || 'Albuquerque';
  const fleetProfile = serviceProfiles.find((s) => s.slug === 'fleet-commercial-detailing')!;

  return (
    <div className="pt-28 pb-0">
      <SEO
        title={`Fleet & Commercial Detailing in ${cityName}`}
        description={`Recurring on-site fleet and commercial vehicle detailing in ${cityName}, NM. Keep your vehicles clean without taking them out of service.`}
        keywords={`fleet detailing ${cityName}, commercial vehicle detailing ${cityName}`}
      />
      <FAQSchema faqs={fleetProfile.faqs} id={`schema-faq-fleet-${city}`} />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Fleet & Commercial Detailing in {cityName}</h1>
          <p className="text-gray-300 mb-8">{fleetProfile.shortDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setContactOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Get a Fleet Quote
            </button>
            <a href={getPhoneLink()} className="flex items-center gap-2 border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
              <Phone className="w-4 h-4" /> {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold">Why {cityName} Businesses Choose Us</h2>
        <p className="text-gray-700 leading-relaxed">{fleetProfile.whyChooseUs}</p>
        <h2 className="text-2xl font-bold pt-2">Our Advantage</h2>
        <p className="text-gray-700 leading-relaxed">{fleetProfile.ourAdvantage}</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Problems We Solve</h2>
          <div className="space-y-4">
            {fleetProfile.problems.map((problem) => (
              <div key={problem.title} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold mb-1">{problem.title}</h3>
                <p className="text-sm text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Set Up a Fleet Program in {cityName}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setContactOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Request a Fleet Quote
            </button>
            <a href={getPhoneLink()} className="flex items-center gap-2 border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
              <Phone className="w-4 h-4" /> Call {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
