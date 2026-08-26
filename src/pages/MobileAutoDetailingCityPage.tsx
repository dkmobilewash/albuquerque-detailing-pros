import { useState } from 'react';
import { ChevronDown, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import PopularPackages from '../components/PopularPackages';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const VALUE_PROPS = [
  { icon: MapPin, title: 'We Come to You', text: 'No shop drop-off — we detail your vehicle at your home, office, or job site.' },
  { icon: ShieldCheck, title: 'Self-Contained Equipment', text: 'Our vans carry their own water and power, compliant with most HOA rules.' },
  { icon: Clock, title: 'Flexible Scheduling', text: 'Daytime, evening, and weekend appointments across the metro.' },
  { icon: ShieldCheck, title: 'Climate-Specific Process', text: "Built around Albuquerque's sun, dust, and hard water." },
];

const FAQS = [
  { question: 'How much does mobile auto detailing cost in Albuquerque, NM?', answer: 'Pricing ranges from about $150 to $600 depending on package and vehicle condition. See our full pricing guide for details.' },
  { question: 'Do you really come to my address?', answer: 'Yes, our self-contained vans bring their own water and power directly to your driveway, office, or job site anywhere in Albuquerque.' },
  { question: 'How long does an appointment take?', answer: 'Most full details take 2-4 hours depending on vehicle size and condition.' },
  { question: 'What areas of Albuquerque do you serve?', answer: 'We serve the entire Albuquerque metro including the Northeast Heights, West Side, Downtown, and surrounding neighborhoods.' },
  { question: 'Can I book a recurring appointment?', answer: 'Yes, most customers set up a recurring schedule every 8-12 weeks.' },
  { question: 'Do you offer ceramic coating?', answer: 'Yes, we offer multi-year ceramic coating built for Albuquerque\'s high-UV climate.' },
  { question: 'Is mobile detailing more expensive than a shop?', answer: 'Pricing is comparable to traditional shops once you factor in the time saved by not dropping off your vehicle.' },
  { question: 'How do I know which package to choose?', answer: 'We can recommend a package based on your vehicle\'s condition during booking, or you can take our self-assessment quiz.' },
];

const MAINTENANCE_TIPS = [
  'Wash your car in shade or during cooler parts of the day to avoid hard water spotting.',
  'Use a windshield sunshade year-round to slow interior UV fading.',
  'Rinse dust off before wiping to avoid introducing swirl marks.',
  'Schedule a full detail every 8-12 weeks given Albuquerque\'s dust and sun exposure.',
];

export default function MobileAutoDetailingCityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Mobile Auto Detailing Albuquerque NM"
        description="Professional mobile auto detailing in Albuquerque, NM. We come to your home or office with a full range of interior, exterior, and ceramic coating services."
        keywords="mobile auto detailing Albuquerque NM, mobile car detailing near me"
      />
      <FAQSchema faqs={FAQS} id="schema-faq-city-mobile-detailing" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mobile Auto Detailing in Albuquerque, NM</h1>
          <p className="text-gray-300 mb-8">
            Professional detailing that comes to you, built specifically for New Mexico's climate.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <item.icon className="w-7 h-7 mx-auto mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <PopularPackages />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Maintenance Tips for Albuquerque Drivers</h2>
          <ul className="space-y-3">
            {MAINTENANCE_TIPS.map((tip) => (
              <li key={tip} className="text-gray-700 text-sm bg-white border border-gray-200 rounded-lg p-4">
                {tip}
              </li>
            ))}
          </ul>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Mobile Detailing in Albuquerque</h2>
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
