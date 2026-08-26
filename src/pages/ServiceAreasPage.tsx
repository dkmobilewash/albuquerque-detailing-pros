import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import { locationContent } from '../data/locations';

const SERVICE_AREAS_FAQS = [
  { question: 'Do you charge extra for outlying areas?', answer: 'We offer flat, transparent pricing across our full service area with no hidden travel fees.' },
  { question: 'What if my neighborhood is not listed?', answer: 'We frequently service areas beyond our featured list. Contact us to confirm availability at your address.' },
  { question: 'Can you service rural or unpaved driveways?', answer: 'Yes, our self-contained van works well on gravel, dirt, and rural driveways.' },
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Service Areas"
        description="Explore the full list of areas we serve across the Albuquerque metro for mobile auto detailing, ceramic coating, and fleet washing."
        keywords="Albuquerque detailing service areas, mobile detailing coverage map"
      />
      <FAQSchema faqs={SERVICE_AREAS_FAQS} id="schema-faq-service-areas" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Service Areas</h1>
          <p className="text-gray-300">A closer look at every neighborhood and community we serve.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {locationContent.map((loc) => (
          <div key={loc.slug} className="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-bold text-lg mb-1">{loc.name}</h2>
              <p className="text-sm text-gray-600 max-w-2xl">{loc.environment}</p>
            </div>
            <Link
              to={`/${loc.slug}`}
              className="whitespace-nowrap bg-black text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-800 text-center"
            >
              View {loc.name}
            </Link>
          </div>
        ))}
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Service Area FAQs</h2>
          <div className="space-y-4">
            {SERVICE_AREAS_FAQS.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
