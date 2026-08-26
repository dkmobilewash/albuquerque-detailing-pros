import { useState } from 'react';
import { Phone, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import ContactFormModal from '../components/ContactFormModal';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const FLEET_FAQS = [
  { question: 'How does fleet pricing work?', answer: 'Pricing is customized based on fleet size, vehicle types, and how often you need service.' },
  { question: 'Do vehicles need to be taken out of service?', answer: 'No, we detail vehicles in rotation on-site so your fleet keeps operating.' },
  { question: 'What businesses use your fleet service?', answer: 'Dealerships, contractors, delivery fleets, rideshare drivers, and property managers with multiple vehicles.' },
  { question: 'Can we set a recurring schedule?', answer: 'Yes, weekly, biweekly, or monthly schedules are available and can be adjusted as your fleet changes.' },
];

export default function FleetPage() {
  const { openBookingModal } = useBookingModal();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Fleet & Commercial Detailing"
        description="Recurring on-site fleet and dealership detailing in Albuquerque, NM. Keep your vehicles clean without taking them out of service. Get a custom fleet quote."
        keywords="fleet detailing Albuquerque, dealership car wash Albuquerque, commercial vehicle detailing"
      />
      <FAQSchema faqs={FLEET_FAQS} id="schema-faq-fleet" />

      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Fleet & Dealership Detailing</h1>
          <p className="text-gray-300 mb-8">
            Recurring, on-site detailing programs for dealerships, contractors, and delivery fleets across the
            Albuquerque metro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setContactOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Get a Fleet Quote
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
        <h2 className="text-2xl font-bold mb-8 text-center">Why Businesses Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'No Downtime', text: 'We detail vehicles on-site while your fleet keeps operating.' },
            { title: 'Custom Schedules', text: 'Weekly, biweekly, or monthly service built around your operations.' },
            { title: 'Consistent Presentation', text: 'Every vehicle held to the same standard, every visit.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <Check className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Dealerships', 'Contractors & Work Trucks', 'Delivery & Rideshare Fleets', 'Property Managers'].map(
              (item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <p className="font-semibold">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Fleet FAQs</h2>
        <div className="space-y-4">
          {FLEET_FAQS.map((faq) => (
            <div key={faq.question} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Set Up a Fleet Program?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openBookingModal}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Book Now
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10"
            >
              Request a Fleet Quote
            </button>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
