import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAP, SERVICE_AREAS, SERVICES } from '../config/business';
import type { FAQItem } from '../types';

function upsertScript(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeScript(id: string) {
  document.getElementById(id)?.remove();
}

const SERVICE_PRICE_RANGES: Record<string, { low: number; high: number }> = {
  'mobile-auto-detailing': { low: 150, high: 350 },
  'interior-detailing': { low: 100, high: 220 },
  'exterior-detailing': { low: 60, high: 220 },
  'paint-correction': { low: 350, high: 700 },
  'ceramic-coating': { low: 500, high: 1200 },
  'headlight-restoration': { low: 60, high: 100 },
  'engine-bay-detailing': { low: 60, high: 120 },
  'fleet-commercial-detailing': { low: 100, high: 400 },
};

const BREADCRUMB_LABELS: Record<string, string> = {
  '': 'Home',
  'car-detailing': 'Car Detailing',
  'ceramic-coating': 'Ceramic Coating',
  fleet: 'Fleet & Commercial',
  about: 'About',
  contact: 'Contact',
  'service-areas': 'Service Areas',
  gallery: 'Gallery',
  faq: 'FAQ',
  blog: 'Blog',
  locations: 'Locations',
  service: 'Services',
};

export default function SchemaMarkup() {
  const location = useLocation();

  useEffect(() => {
    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'AutoDetailing',
      '@id': `${NAP.website}/#business`,
      name: NAP.name,
      image: `${NAP.website}/og-image.jpg`,
      url: NAP.website,
      telephone: NAP.phoneRaw,
      email: NAP.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.streetAddress,
        addressLocality: NAP.city,
        addressRegion: NAP.state,
        postalCode: NAP.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: NAP.geo.lat,
        longitude: NAP.geo.lng,
      },
      areaServed: SERVICE_AREAS.map((area) => ({ '@type': 'City', name: area.name })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Maria S.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          reviewBody: 'Best mobile detailing in Albuquerque. My car looks brand new every time.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'James T.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          reviewBody: 'Ceramic coating held up perfectly through the summer. Highly recommend.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Angela R.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          reviewBody: 'Convenient, professional, and thorough. They came to my office in Rio Rancho.',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Detailing Services',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${NAP.website}/service/${service.slug}#service` },
        })),
      },
    };

    const serviceSchemas = SERVICES.map((service) => {
      const price = SERVICE_PRICE_RANGES[service.slug] ?? { low: 60, high: 500 };
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${NAP.website}/service/${service.slug}#service`,
        name: service.title,
        description: service.description,
        url: `${NAP.website}/service/${service.slug}`,
        provider: { '@id': `${NAP.website}/#business` },
        areaServed: SERVICE_AREAS.map((area) => area.name),
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: price.low,
          highPrice: price.high,
        },
      };
    });

    const segments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: NAP.website },
    ];
    let pathAccum = '';
    segments.forEach((segment, index) => {
      pathAccum += `/${segment}`;
      const label = BREADCRUMB_LABELS[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: label,
        item: `${NAP.website}${pathAccum}`,
      });
    });

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    };

    upsertScript('schema-local-business', localBusiness);
    upsertScript('schema-services', serviceSchemas);
    upsertScript('schema-breadcrumb', breadcrumbSchema);

    return () => {
      // Keep global business/service schema persistent across route changes;
      // only breadcrumb needs refreshing, which happens via upsert above.
    };
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      removeScript('schema-local-business');
      removeScript('schema-services');
      removeScript('schema-breadcrumb');
    };
  }, []);

  return null;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  id?: string;
}

export function FAQSchema({ faqs, id = 'schema-faq-page' }: FAQSchemaProps) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    upsertScript(id, faqSchema);

    return () => removeScript(id);
  }, [faqs, id]);

  return null;
}
