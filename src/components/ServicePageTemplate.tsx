import { useState } from 'react';
import { Check, ChevronDown, Phone } from 'lucide-react';
import SEO from './SEO';
import { FAQSchema } from './SchemaMarkup';
import RelatedServices from './RelatedServices';
import { getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import type { FAQItem } from '../types';

interface BenefitOrAudience {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  imageUrl?: string;
  introText?: string;
  whatIncluded: string[];
  benefits: BenefitOrAudience[];
  whoFor: BenefitOrAudience[];
  faqs: FAQItem[];
  relatedServiceSlugs?: string[];
}

export default function ServicePageTemplate({
  slug,
  title,
  subtitle,
  metaTitle,
  metaDescription,
  keywords,
  imageUrl,
  introText,
  whatIncluded,
  benefits,
  whoFor,
  faqs,
  relatedServiceSlugs,
}: ServicePageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <div>
      <SEO title={metaTitle} description={metaDescription} keywords={keywords} />
      <FAQSchema faqs={faqs} id={`schema-faq-service-${slug}`} />

      <section className="relative pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-300 mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
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
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              width={640}
              height={480}
              loading="eager"
              decoding="async"
              className="rounded-lg w-full h-auto object-cover"
            />
          )}
        </div>
      </section>

      {introText && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 leading-relaxed">{introText}</p>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">What's Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-white border border-gray-200 rounded-lg p-4">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Who Is This For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoFor.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg">
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
                {openFaqIndex === index && (
                  <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Book Your {title}?</h2>
          <p className="text-gray-300 mb-8">We come to you anywhere in the Albuquerque metro.</p>
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

      <RelatedServices currentSlug={slug} slugs={relatedServiceSlugs} />
    </div>
  );
}
