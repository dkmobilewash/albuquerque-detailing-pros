import { useState } from 'react';
import { ChevronDown, Phone, Check } from 'lucide-react';
import SEO from '../../components/SEO';
import { FAQSchema } from '../../components/SchemaMarkup';
import CeramicCoatingDiagram from '../../components/CeramicCoatingDiagram';
import RelatedServices from '../../components/RelatedServices';
import { getPhoneLink, formatPhoneDisplay } from '../../config/business';
import { useBookingModal } from '../../context/BookingModalContext';
import { optimizeImageUrl } from '../../utils/imageOptimization';

const TIERS = [
  { name: 'Single-Layer Coating', duration: '2 years', text: 'Entry-level nano-ceramic protection, ideal for daily drivers on a budget.' },
  { name: 'Multi-Layer Coating', duration: '3-4 years', text: 'Additional coating layers for deeper gloss and stronger chemical resistance.', featured: true },
  { name: 'Premium Coating + Wheels/Trim', duration: '5+ years', text: 'Our longest-lasting protection, including wheel and trim ceramic sealant.' },
];

const PROCESS_STEPS = [
  { step: 'Full Wash & Decontamination', text: 'Two-bucket hand wash and clay bar treatment remove all surface contaminants.' },
  { step: 'Paint Correction', text: 'Machine polishing removes existing swirl marks and oxidation before coating.' },
  { step: 'Surface Prep', text: 'Panel wipe-down removes any polishing oils so the coating bonds properly.' },
  { step: 'Coating Application', text: 'Professional-grade ceramic coating is applied panel by panel by hand.' },
  { step: 'Cure Time', text: 'The vehicle is kept dry and undisturbed while the coating cures and bonds.' },
];

const FAQS = [
  { question: 'How long does ceramic coating last in Albuquerque\'s climate?', answer: 'Between 2 and 5+ years depending on the tier selected, with proper maintenance washing.' },
  { question: 'Does ceramic coating prevent scratches?', answer: 'It adds a sacrificial, scratch-resistant layer but does not make paint scratch-proof.' },
  { question: 'Do I need paint correction first?', answer: 'Yes, we correct existing swirl marks and oxidation before applying the coating since it locks in the current condition of the paint.' },
  { question: 'How long does the full process take?', answer: 'Typically one to two full days depending on correction needs and coating tier.' },
  { question: 'Is ceramic coating worth it in New Mexico?', answer: 'For most vehicles parked outdoors, yes — the multi-year UV and hard-water protection pays for itself compared to repeated wax application.' },
  { question: 'Can ceramic coating be applied to wheels and trim?', answer: 'Yes, our Premium tier includes wheel and trim ceramic sealant.' },
  { question: 'Do I still need to wash my car after coating?', answer: 'Yes, regular washing is still needed, though the coating makes it faster and easier.' },
  { question: 'What can damage or void a ceramic coating?', answer: 'Improper washing with harsh chemicals or abrasive tools can shorten the coating\'s lifespan.' },
];

export default function CeramicCoatingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Ceramic Coating"
        description="Multi-year nano-ceramic paint protection in Albuquerque, NM, engineered for intense sun, dust, and hard water. Protect your vehicle's finish for years, not months."
        keywords="ceramic coating Albuquerque, nano ceramic coating car, paint protection Albuquerque"
      />
      <FAQSchema faqs={FAQS} id="schema-faq-ceramic-coating-page" />

      <section
        className="relative py-20 bg-black text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url(${optimizeImageUrl(
            'https://picsum.photos/seed/adp-ceramic-hero/1600/900',
            { width: 1600, quality: 70 }
          )})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ceramic Coating Built for New Mexico</h1>
          <p className="text-lg text-gray-300 mb-8">
            Multi-year nano-ceramic paint protection engineered for intense sun, dust, and hard water.
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

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 text-center">What Is Ceramic Coating?</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          Ceramic coating is a liquid polymer that chemically bonds with your vehicle's clear coat, creating a
          hard, hydrophobic layer of protection. Unlike wax or sealant, which sit on top of the paint and break
          down within months, a professional-grade ceramic coating bonds at the molecular level and holds up for
          years against Albuquerque's intense UV, dust, and hard water.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">See the Difference</h2>
          <CeramicCoatingDiagram />
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Coating Tiers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`border rounded-lg p-6 ${tier.featured ? 'border-black border-2' : 'border-gray-200'}`}>
              {tier.featured && (
                <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-3">{tier.duration} protection</p>
              <p className="text-sm text-gray-600">{tier.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Application Process</h2>
          <ol className="space-y-4">
            {PROCESS_STEPS.map((item, index) => (
              <li key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{item.step}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why It Matters in New Mexico's Climate</h2>
        <ul className="space-y-3">
          {[
            "Albuquerque's elevation means significantly more intense UV exposure than lower-elevation cities.",
            'Mineral-rich water leaves hard water spots that etch into unprotected paint under the sun.',
            'Wind-blown dust settles constantly, and a ceramic surface resists it bonding as aggressively.',
            'Wax and sealant break down faster in high-UV, low-humidity conditions than in milder climates.',
          ].map((point) => (
            <li key={point} className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg bg-white">
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
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Protect Your Paint for Years, Not Months</h2>
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

      <RelatedServices slugs={['paint-correction', 'exterior-detailing', 'headlight-restoration']} />
    </div>
  );
}
