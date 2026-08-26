import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import PopularPackages from '../components/PopularPackages';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const FAQS = [
  { question: 'Do you service Albuquerque Acres?', answer: 'Yes, we regularly detail vehicles throughout Albuquerque Acres and the surrounding Northeast Heights foothills area.' },
  { question: 'Can you work on larger properties with long driveways?', answer: 'Yes, Albuquerque Acres\' larger lots are no problem for our self-contained mobile setup.' },
  { question: 'Is ceramic coating recommended for this area?', answer: 'Given the exposed, higher-elevation location near the foothills, we strongly recommend ceramic coating for UV and dust protection.' },
  { question: 'How do I book an appointment?', answer: 'Book online through our booking form or call us directly to schedule a visit to your Albuquerque Acres property.' },
];

export default function AlbuquerqueAcresPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Mobile Auto Detailing in Albuquerque Acres"
        description="Mobile auto detailing serving Albuquerque Acres, a foothills community in Northeast Albuquerque. Full interior and exterior detailing at your property."
        keywords="mobile detailing Albuquerque Acres, car detailing Northeast Heights Albuquerque"
      />
      <FAQSchema faqs={FAQS} id="schema-faq-albuquerque-acres" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mobile Auto Detailing in Albuquerque Acres</h1>
          <p className="text-gray-300 mb-8">
            Foothills-ready detailing for one of Northeast Albuquerque's most spacious communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openBookingModal} className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              Book Now
            </button>
            <a href={getPhoneLink()} className="flex items-center gap-2 border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
              <Phone className="w-4 h-4" /> {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold">Built for Albuquerque Acres' Larger Lots</h2>
        <p className="text-gray-700 leading-relaxed">
          Albuquerque Acres' larger residential lots and foothills proximity mean more direct sun exposure and
          seasonal dust than denser city neighborhoods. Our self-contained van comfortably handles long driveways
          and multiple vehicles in a single visit, without relying on your home's water or power.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Given the elevation and open exposure common throughout the neighborhood, we typically recommend UV-
          protectant interior treatment and ceramic coating more strongly here than for valley-floor properties.
        </p>
      </section>

      <PopularPackages />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Albuquerque Acres FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div key={faq.question} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold"
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaqIndex === index && <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Your Albuquerque Acres Detail</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openBookingModal} className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              Book Now
            </button>
            <a href={getPhoneLink()} className="flex items-center gap-2 border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
              <Phone className="w-4 h-4" /> Call {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
