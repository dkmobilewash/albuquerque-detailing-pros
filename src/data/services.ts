import type { Service, ServiceArea, FAQItem } from '../types';
import { SERVICES, SERVICE_AREAS } from '../config/business';

export { blogPosts } from './blogPosts';

export const services: Service[] = SERVICES;
export const serviceAreas: ServiceArea[] = SERVICE_AREAS;

export const faqs: FAQItem[] = [
  {
    question: 'Do you really come to my location, or do I need to drop off my car?',
    answer:
      "We come to you. Our mobile detailing vans are fully self-contained with their own water and power, so we can detail your vehicle at your home, office, or job site anywhere in the Albuquerque metro.",
  },
  {
    question: 'How long does a full detail take?',
    answer:
      'Most full details take 2-4 hours depending on vehicle size and condition. Interior-only or exterior-only services typically take 1-2 hours.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Albuquerque, Rio Rancho, Corrales, North Valley, Tanoan, Paradise Hills, Los Ranchos, Sandia Heights, and the surrounding metro area. See our full service areas page for details.',
  },
  {
    question: 'Is ceramic coating worth it for my vehicle?',
    answer:
      "For most vehicles that park outdoors in Albuquerque's intense sun, yes. It provides multi-year UV, chemical, and hard-water protection that wax and sealants cannot match. We're happy to give you an honest assessment for your specific vehicle.",
  },
  {
    question: 'Do you offer recurring service for businesses or fleets?',
    answer:
      'Yes. We offer scheduled fleet and commercial detailing programs for dealerships, contractors, and businesses managing multiple vehicles. Visit our fleet page or contact us for custom pricing.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards, debit cards, and cash. Payment is collected after service is complete.',
  },
  {
    question: 'Do I need to provide water or power?',
    answer:
      'No. Our vans carry their own water tank and generator power, so we do not rely on your home or business utilities. This also makes us compliant with most HOA and apartment complex restrictions on at-home washing.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can book online through our booking form, call us directly at (505) 295-5375, or use the "Book Now" button available on every page of our site. We typically confirm appointments within 24 hours.',
  },
];
