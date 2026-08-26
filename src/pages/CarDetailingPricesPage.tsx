import { useState } from 'react';
import { AlertTriangle, ChevronDown, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import CostGuideForm from '../components/CostGuideForm';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

const PRICE_TIERS = [
  { name: 'Budget', price: '$50 - $100', description: 'Basic wash and vacuum, typically from independent or non-specialized providers.' },
  { name: 'Standard', price: '$150 - $250', description: 'A solid full interior and exterior detail with hand washing and wax.', },
  { name: 'Premium', price: '$300 - $450', description: 'Clay bar decontamination, steam cleaning, and premium protection.', featured: true },
  { name: 'Ultimate', price: '$500 - $800+', description: 'Paint correction, ceramic coating, and complete interior restoration.' },
];

const RED_FLAGS = [
  'No visible insurance or licensing information',
  'Prices that seem far below the market average with no explanation',
  'No before-and-after photos of past work',
  'Vague descriptions of what is actually included in a package',
  'No online reviews or an unusually small number of reviews',
  'Pressure to pay in full before any work begins',
  'Unwillingness to answer questions about products used',
  'No clear cancellation or satisfaction policy',
];

const PRICE_FAQS = [
  { question: 'Why do detailing prices vary so much?', answer: 'Price depends on vehicle size, condition, and the specific services included — a basic wash costs far less than paint correction and ceramic coating.' },
  { question: 'Is the cheapest option ever a good deal?', answer: 'Rarely. Extremely low prices usually mean rushed work, diluted products, or hidden upsells once the technician arrives.' },
  { question: 'Do you charge extra for larger vehicles?', answer: 'Yes, SUVs and trucks typically cost slightly more than sedans due to additional surface area and time required.' },
  { question: 'Are mobile detailing prices different from shop prices?', answer: 'Our mobile pricing is comparable to or better than traditional shops once you account for the time and convenience of not having to drop off your vehicle.' },
  { question: 'What is included in the price I see?', answer: 'Each package lists exactly what is included — see our packages page for a full breakdown by tier.' },
  { question: 'Do you offer discounts for recurring service?', answer: 'Yes, customers on a recurring maintenance schedule typically receive better per-visit pricing than one-time appointments.' },
  { question: 'How do I get an exact quote?', answer: 'Contact us with your vehicle details and desired package and we will provide an exact quote before booking.' },
  { question: 'Is a deposit required?', answer: 'No deposit is required for most standard appointments; payment is collected after service is complete.' },
];

export default function CarDetailingPricesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO
        title="Car Detailing Prices in Albuquerque"
        description="See average car detailing prices in Albuquerque, NM, from basic washes to full ceramic coating packages, plus red flags to watch for when choosing a detailer."
        keywords="car detailing prices Albuquerque, mobile detailing cost, ceramic coating price Albuquerque"
      />
      <FAQSchema faqs={PRICE_FAQS} id="schema-faq-prices-albuquerque" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Car Detailing Prices in Albuquerque</h1>
          <p className="text-gray-300 mb-8">Transparent pricing across every package tier, no hidden fees.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openBookingModal}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Get a Custom Quote
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

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Average Price Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {PRICE_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`border rounded-lg p-6 ${tier.featured ? 'border-black border-2' : 'border-gray-200'}`}
              >
                {tier.featured && (
                  <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <p className="text-xl font-bold mb-3">{tier.price}</p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">8 Red Flags When Choosing a Detailer</h2>
          <ul className="space-y-3">
            {RED_FLAGS.map((flag) => (
              <li key={flag} className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                {flag}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CostGuideForm city="Albuquerque" sourcePage="/car-detailing-prices-albuquerque" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Pricing FAQs</h2>
          <div className="space-y-3">
            {PRICE_FAQS.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
