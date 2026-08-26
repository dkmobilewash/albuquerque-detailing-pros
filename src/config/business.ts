import type { ServiceArea, Service } from '../types';

export const NAP = {
  name: 'Albuquerque Detailing Pros',
  fullName: 'Albuquerque Detailing Pros',
  streetAddress: '10400 Academy Rd NE',
  city: 'Albuquerque',
  state: 'NM',
  zip: '87111',
  phone: '(505) 295-5375',
  phoneRaw: '+1-505-295-5375',
  email: 'info@abqdetailingpros.com',
  website: 'https://albuquerquedetailing.com',
  geo: {
    lat: 35.1329,
    lng: -106.5324,
  },
};

export const BRAND_COLORS = {
  primary: '#000000',
  dark: '#1a1a1a',
  darker: '#ffffff',
};

export const PRIMARY_KEYWORDS = [
  'mobile auto detailing Albuquerque',
  'car detailing Albuquerque NM',
  'ceramic coating Albuquerque',
  'mobile car detailing near me',
  'auto detailing Rio Rancho',
  'interior car detailing Albuquerque',
  'fleet detailing Albuquerque',
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Albuquerque', slug: 'albuquerque' },
  { name: 'Rio Rancho', slug: 'rio-rancho' },
  { name: 'Corrales', slug: 'corrales' },
  { name: 'North Valley', slug: 'north-valley' },
  { name: 'Tanoan', slug: 'tanoan' },
  { name: 'Paradise Hills', slug: 'paradise-hills' },
  { name: 'Los Ranchos', slug: 'los-ranchos' },
  { name: 'Sandia Heights', slug: 'sandia-heights' },
];

export const BUSINESS_HOURS = [
  { days: 'Monday - Saturday', hours: '8:00 AM - 6:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

export const SOCIAL_PROFILES = {
  facebook: 'https://www.facebook.com/albuquerquedetailingpros',
  instagram: 'https://www.instagram.com/albuquerquedetailingpros',
};

export const SERVICES: Service[] = [
  {
    title: 'Mobile Auto Detailing',
    slug: 'mobile-auto-detailing',
    description: 'Full interior and exterior detailing that comes to your driveway, office, or job site.',
    icon: 'Car',
  },
  {
    title: 'Interior Detailing',
    slug: 'interior-detailing',
    description: 'Deep vacuuming, steam cleaning, stain extraction, and conditioning for every surface inside your vehicle.',
    icon: 'Sparkles',
  },
  {
    title: 'Exterior Detailing',
    slug: 'exterior-detailing',
    description: 'Hand wash, clay bar decontamination, and gloss-enhancing wax for a showroom finish.',
    icon: 'Droplets',
  },
  {
    title: 'Paint Correction',
    slug: 'paint-correction',
    description: 'Machine polishing that removes swirl marks, oxidation, and light scratches to restore true gloss.',
    icon: 'Wand2',
  },
  {
    title: 'Ceramic Coating',
    slug: 'ceramic-coating',
    description: 'Multi-year nano-ceramic paint protection built for New Mexico sun, dust, and hard water.',
    icon: 'Shield',
  },
  {
    title: 'Headlight Restoration',
    slug: 'headlight-restoration',
    description: 'Removes UV oxidation and yellowing to restore clarity, safety, and curb appeal.',
    icon: 'Lightbulb',
  },
  {
    title: 'Engine Bay Detailing',
    slug: 'engine-bay-detailing',
    description: 'Safe degreasing and dressing of your engine bay for a clean, inspection-ready finish.',
    icon: 'Cog',
  },
  {
    title: 'Fleet & Commercial Detailing',
    slug: 'fleet-commercial-detailing',
    description: 'Recurring on-site washing and detailing programs for dealerships, fleets, and contractors.',
    icon: 'Truck',
  },
];

export function formatPhoneDisplay(): string {
  return NAP.phone;
}

export function getPhoneLink(): string {
  return `tel:${NAP.phoneRaw}`;
}

export function getFullAddress(): string {
  return `${NAP.streetAddress}, ${NAP.city}, ${NAP.state} ${NAP.zip}`;
}

export function getGoogleMapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`;
}

export function getServiceAreasString(): string {
  return SERVICE_AREAS.map((a) => a.name).join(', ');
}
