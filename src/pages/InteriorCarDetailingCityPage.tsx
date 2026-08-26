import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const PROBLEM_CARDS = [
  { title: 'Families', text: 'Spilled snacks, sticky cupholders, and crumbs embedded in carpet fibers from daily school runs and road trips.' },
  { title: 'Pet Owners', text: 'Embedded hair, dander, and odor that regular vacuuming cannot fully remove from seats and carpet.' },
  { title: 'Commuters', text: 'Daily dust buildup, coffee stains, and UV-faded dash plastics from long hours behind the wheel.' },
];

const FAQS = [
  { question: 'What does interior car detailing in Albuquerque include?', answer: 'A full vacuum, steam extraction, stain treatment, leather/upholstery conditioning, and UV-protectant dressing for dash and trim.' },
  { question: 'Can you remove pet odor?', answer: 'Yes, we use enzyme-based treatment and, for severe cases, ozone treatment to neutralize odor at the source.' },
  { question: 'Do you offer ozone treatment?', answer: 'Yes, ozone treatment is available as an add-on for persistent odor or mold-related concerns.' },
  { question: 'How long does interior detailing take?', answer: 'Typically 1.5-3 hours depending on vehicle size and condition.' },
  { question: 'Can you remove old stains?', answer: 'Most stains improve significantly with steam extraction, though very old or set-in stains may need multiple treatments.' },
  { question: 'Do you clean leather seats?', answer: 'Yes, leather is cleaned and conditioned to prevent cracking from Albuquerque\'s dry climate and intense sun.' },
  { question: 'How often should I get an interior detail?', answer: 'Every 8-12 weeks is typical for daily-driven vehicles, more often for families with kids or pets.' },
  { question: 'Do you come to my home in Albuquerque?', answer: 'Yes, we are a fully mobile service and bring everything needed directly to your location.' },
];

export default function InteriorCarDetailingCityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Interior Car Detailing Albuquerque"
        description="Deep interior car detailing in Albuquerque, NM. Stain extraction, pet odor removal, and UV-protectant conditioning for dashboards, seats, and carpet."
        keywords="interior car detailing Albuquerque, pet odor removal car Albuquerque, car interior cleaning"
      />
      <FAQSchema faqs={FAQS} id="schema-faq-city-interior-detailing" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Interior Car Detailing in Albuquerque</h1>
          <p className="text-gray-300 mb-8">
            Deep cleaning for the dust, stains, and odor Albuquerque's dry climate leaves behind.
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

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Common Interior Problems We Solve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div key={card.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold">Our Deep Cleaning Process</h2>
          <p className="text-gray-700 leading-relaxed">
            We start with a full vacuum extraction of carpets, seats, and trunk before moving to steam cleaning,
            which lifts embedded dirt and stains that standard vacuuming leaves behind. Leather and upholstery are
            then conditioned to prevent the cracking common in Albuquerque's dry, high-UV climate.
          </p>
          <h2 className="text-2xl font-bold pt-2">Stain Extraction</h2>
          <p className="text-gray-700 leading-relaxed">
            Targeted stain treatment addresses coffee, food, and other common spills before they set permanently
            into carpet fibers.
          </p>
          <h2 className="text-2xl font-bold pt-2">Ozone Treatment</h2>
          <p className="text-gray-700 leading-relaxed">
            For vehicles with persistent smoke, pet, or musty odor, we offer ozone treatment that neutralizes odor
            at the molecular level rather than simply masking it.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Your Interior Detail</h2>
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
