import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const CHALLENGES = [
  { title: 'Intense UV Exposure', text: "Albuquerque's elevation means stronger UV rays that break down unprotected clear coat faster than lower-elevation cities." },
  { title: 'Hard Water Minerals', text: 'Mineral-rich water leaves spotting that etches into paint if left to air-dry under the sun.' },
  { title: 'Wind-Blown Dust', text: 'Fine desert dust settles constantly and can scratch paint if wiped instead of washed away.' },
];

const TIERS = [
  { name: 'Carnauba Wax', duration: '3-4 months', text: 'Warm, deep gloss with the shortest protection window. Best for enthusiasts who enjoy frequent application.' },
  { name: 'Synthetic Sealant', duration: '4-6 months', text: 'A sharper, more durable finish than wax at a moderate price point.' },
  { name: 'Ceramic Coating', duration: '5-10 years', text: 'Multi-year UV, chemical, and hard-water protection — the strongest option for outdoor-parked vehicles.', featured: true },
];

const FAQS = [
  { question: 'What is the best paint protection for Albuquerque\'s climate?', answer: 'Ceramic coating offers the strongest protection against Albuquerque\'s intense UV, dust, and hard water compared to wax or sealant.' },
  { question: 'How long does ceramic coating last?', answer: 'Between 2 and 10+ years depending on the tier selected and how well it is maintained.' },
  { question: 'Is paint correction required before ceramic coating?', answer: 'Yes, we correct existing swirl marks and oxidation first so the coating locks in the best possible finish.' },
  { question: 'How much does paint protection cost?', answer: 'Wax starts around $60-90, sealant around $150-220, and ceramic coating ranges from $500-1,200+ depending on vehicle and tier.' },
  { question: 'Does paint protection prevent rock chips?', answer: 'No, these protect against UV, chemical, and light scratching but not deep impacts. Paint protection film addresses rock chips separately.' },
  { question: 'How often do I need to reapply wax or sealant?', answer: 'Wax needs reapplication every 3-4 months and sealant every 4-6 months in Albuquerque\'s high-UV climate.' },
  { question: 'Is ceramic coating worth the cost?', answer: 'For most vehicles parked outdoors in Albuquerque, yes — see our detailed cost-benefit breakdown on our blog.' },
  { question: 'Can I apply this myself?', answer: 'DIY products exist but professional application ensures proper surface prep and bonding for maximum durability.' },
];

export default function PaintProtectionCityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Paint Enhancement & Protection Albuquerque"
        description="Compare paint protection options in Albuquerque, NM, from carnauba wax to multi-year ceramic coating, built for high-UV desert conditions."
        keywords="paint protection Albuquerque, ceramic coating Albuquerque, paint sealant Albuquerque"
      />
      <FAQSchema faqs={FAQS} id="schema-faq-city-paint-protection" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Paint Enhancement & Protection in Albuquerque</h1>
          <p className="text-gray-300 mb-8">
            The right protection tier for New Mexico's sun, dust, and hard water.
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
        <h2 className="text-2xl font-bold mb-8 text-center">Environmental Challenges in Albuquerque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CHALLENGES.map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Protection Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white border rounded-lg p-6 ${tier.featured ? 'border-black border-2' : 'border-gray-200'}`}
              >
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">{tier.duration}</p>
                <p className="text-sm text-gray-600">{tier.text}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Protect Your Paint Today</h2>
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
