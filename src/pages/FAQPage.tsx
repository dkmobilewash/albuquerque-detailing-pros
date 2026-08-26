import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import { faqs } from '../data/services';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about mobile auto detailing, ceramic coating, pricing, and service areas from Albuquerque Detailing Pros."
        keywords="mobile detailing FAQ, car detailing questions Albuquerque"
      />
      <FAQSchema faqs={faqs} id="schema-faq-faqpage" />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300">Everything you need to know about booking a mobile detail with us.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
