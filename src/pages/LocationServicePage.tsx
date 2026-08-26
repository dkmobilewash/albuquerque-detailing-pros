import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import { optimizeImageUrl } from '../utils/imageOptimization';
import type { LocationContent } from '../data/locations';
import type { ServiceProfile } from '../data/locationServiceContent';

interface LocationServicePageProps {
  location: LocationContent;
  service: ServiceProfile;
}

export default function LocationServicePage({ location, service }: LocationServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  const title = `${service.name} in ${location.name}, NM`;
  const metaDescription = `${service.shortDesc} Serving ${location.name} and the greater Albuquerque metro.`;

  return (
    <div className="pt-28 pb-0">
      <SEO title={title} description={metaDescription} />
      <FAQSchema faqs={service.faqs} id={`schema-faq-locsvc-${location.slug}-${service.slug}`} />

      <div className="pb-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/${location.slug}`} className="hover:text-black">{location.name}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black font-medium">{service.name}</span>
        </div>
      </div>

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-300 mb-8">{service.shortDesc}</p>
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

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">{location.name}'s Environment</h2>
            <p className="text-gray-700 leading-relaxed">{location.environment}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Why Choose Us in {location.name}</h2>
            <p className="text-gray-700 leading-relaxed">{service.whyChooseUs}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Advantage</h2>
            <p className="text-gray-700 leading-relaxed">{service.ourAdvantage}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Common Problems We Solve</h2>
            <div className="space-y-4">
              {service.problems.map((problem) => (
                <div key={problem.title} className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold mb-1">{problem.title}</h3>
                  <p className="text-sm text-gray-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Process</h2>
            <ol className="space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-fit lg:sticky lg:top-28">
          <img
            src={optimizeImageUrl('https://picsum.photos/seed/adp-founder/300/300', { width: 300, quality: 80 })}
            alt="Founder of Albuquerque Detailing Pros"
            width={120}
            height={120}
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="font-bold mb-2">A Note From Our Founder</h3>
          <p className="text-sm text-gray-600 mb-4">
            "We built our {service.name.toLowerCase()} process specifically around {location.name}'s conditions —
            not a one-size-fits-all checklist. If you have questions before booking, feel free to call me directly."
          </p>
          <a
            href={getPhoneLink()}
            className="flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-md text-sm font-semibold hover:bg-gray-800"
          >
            <Phone className="w-4 h-4" /> {formatPhoneDisplay()}
          </a>
        </aside>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {service.name} FAQs for {location.name}
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, index) => (
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

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Other Services in {location.name}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to={`/${location.slug}`}
            className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
          >
            <Check className="w-3.5 h-3.5" /> View All {location.name} Services
          </Link>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book {service.name} in {location.name}</h2>
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
