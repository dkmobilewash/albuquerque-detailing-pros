import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronRight, Phone, Star } from 'lucide-react';
import SEO from './SEO';
import { FAQSchema } from './SchemaMarkup';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import { packages, locations, type Package } from '../data/packages';

interface PackagePageTemplateProps {
  pkg: Package;
  locationSlug?: string;
  locationName?: string;
}

export default function PackagePageTemplate({ pkg, locationSlug, locationName }: PackagePageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  const cityLabel = locationName ? ` in ${locationName}` : '';
  const metaTitle = `${pkg.name} Detailing Package${cityLabel} | Albuquerque Detailing Pros`;
  const metaDescription = `${pkg.shortIntro} ${cityLabel ? `Available in ${locationName}.` : ''}`.trim();

  const relatedPackages = packages.filter((p) => p.category === pkg.category && p.slug !== pkg.slug);

  return (
    <div>
      <SEO title={metaTitle} description={metaDescription} />
      <FAQSchema faqs={pkg.seo.faqs} id={`schema-faq-package-${pkg.slug}${locationSlug ? `-${locationSlug}` : ''}`} />

      <div className="pt-28 pb-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/car-detailing" className="hover:text-black">Packages</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-black font-medium">{pkg.name}{locationName ? ` - ${locationName}` : ''}</span>
        </div>
      </div>

      <section className="relative py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {pkg.featured && (
            <span className="inline-flex items-center gap-1 bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              <Star className="w-3 h-3" /> MOST POPULAR
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {pkg.name}{locationName ? ` in ${locationName}` : ''}
          </h1>
          <p className="text-lg text-gray-300 mb-2">{pkg.tagline}</p>
          <p className="text-gray-300 mb-8">{pkg.shortIntro}</p>
          <p className="text-2xl font-bold mb-8">{pkg.priceRange}</p>
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">What's Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pkg.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {!locationSlug && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Available In These Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/${pkg.slug}/${loc.slug}`}
                  className="bg-white border border-gray-200 rounded-lg px-5 py-4 text-center font-medium hover:border-black"
                >
                  {pkg.name} in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-3">What Is {pkg.name}?</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.seo.whatIsIt}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Who Needs This Package?</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.seo.whoNeedsIt}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">How Often Should You Book It?</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.seo.howOften}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Benefits</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.seo.benefits}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {pkg.seo.faqs.map((faq, index) => (
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

      {relatedPackages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPackages.map((related) => (
                <Link
                  key={related.slug}
                  to={`/${related.slug}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold mb-1">{related.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{related.tagline}</p>
                  <p className="text-sm text-gray-600">{related.shortIntro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book {pkg.name}{locationName ? ` in ${locationName}` : ''}</h2>
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
