import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, Phone, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import PopularPackages from '../components/PopularPackages';
import { getPhoneLink, formatPhoneDisplay, SERVICES } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import type { LocationContent } from '../data/locations';

interface LocationPageProps {
  content: LocationContent;
}

export default function LocationPage({ content }: LocationPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div className="pt-28 pb-0">
      <SEO title={content.seoTitle} description={content.seoDescription} />
      <FAQSchema faqs={content.faqs} id={`schema-faq-location-${content.slug}`} />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{content.heroTitle}</h1>
          <p className="text-gray-300 mb-8">{content.heroSubtitle}</p>
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

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-2xl font-bold mb-2">Why {content.name} Trusts Us</h2>
        <p className="text-gray-700 leading-relaxed">{content.whyUs[0]}</p>
        <p className="text-gray-700 leading-relaxed">{content.whyUs[1]}</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Client Stories from {content.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {content.clientStories.map((story) => (
              <div key={story.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.text}</p>
                <div className="flex gap-2 text-sm italic text-gray-700">
                  <Quote className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{story.quote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
        <p className="text-gray-700 leading-relaxed">{content.whatSetsUsApart}</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
          <ol className="space-y-4">
            {content.process.map((step, index) => (
              <li key={step.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.step}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-lg p-8">
          <h2 className="text-xl font-bold mb-3">A Note From Our Founder</h2>
          <p className="text-gray-300 leading-relaxed">{content.founderText}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Services Available in {content.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/${content.slug}/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium hover:border-black"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PopularPackages />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">FAQs for {content.name}</h2>
        <div className="space-y-3">
          {content.faqs.map((faq, index) => (
            <div key={faq.question} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaqIndex === index && <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Your {content.name} Detail Today</h2>
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
              <Phone className="w-4 h-4" /> Call {formatPhoneDisplay()}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
