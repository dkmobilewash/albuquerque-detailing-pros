import type { FAQItem } from '../types';

export type PackageCategory = 'full-detail' | 'exterior-only' | 'interior-only';

export interface PackageSEO {
  whatIsIt: string;
  whoNeedsIt: string;
  howOften: string;
  benefits: string;
  faqs: FAQItem[];
}

export interface Package {
  slug: string;
  name: string;
  tagline: string;
  category: PackageCategory;
  featured?: boolean;
  shortIntro: string;
  priceRange: string;
  whatsIncluded: string[];
  seo: PackageSEO;
}

export const packages: Package[] = [
  {
    slug: 'full-refresh',
    name: 'Full Refresh',
    tagline: 'Essential',
    category: 'full-detail',
    shortIntro:
      'A complete interior and exterior refresh for vehicles that need a solid reset without corrective work.',
    priceRange: '$150 - $220',
    whatsIncluded: [
      'Hand wash, wheel and tire cleaning, tire dressing',
      'Full interior vacuum including trunk and door jambs',
      'Interior wipe-down and dashboard UV protectant',
      'Window cleaning inside and out',
      'Spray wax exterior protection',
    ],
    seo: {
      whatIsIt:
        'The Full Refresh is our essential full-vehicle detail, combining a thorough hand wash and interior deep clean into one appointment. It resets a vehicle that has gone a few months without professional attention, without the corrective paint work included in higher tiers.',
      whoNeedsIt:
        'Ideal for daily drivers that are generally well maintained but due for a reset, or as a starting point before moving to a recurring maintenance schedule.',
      howOften:
        'Most customers book the Full Refresh every 8-12 weeks to maintain a clean baseline between more intensive services.',
      benefits:
        'Restores a clean, fresh look inside and out, protects paint with spray wax, and removes the dust and grime buildup common in Albuquerque\'s dry, dusty climate.',
      faqs: [
        {
          question: 'Does the Full Refresh remove swirl marks or scratches?',
          answer:
            'No, this package includes a hand wash and spray wax but not machine polishing. For swirl mark removal, see our Wax & Buff or Masterpiece Detail packages.',
        },
        {
          question: 'How long does it take?',
          answer: 'Typically 2-3 hours depending on vehicle size and condition.',
        },
        {
          question: 'Is this a good starting package if I have never had my car professionally detailed?',
          answer:
            'Yes, it is our most popular starting point and gives us a chance to assess whether your vehicle would benefit from paint correction or additional interior treatment.',
        },
        {
          question: 'Can I add ceramic coating to this package?',
          answer:
            'Ceramic coating requires a paint correction step first for best results, so we recommend the Masterpiece Detail or our standalone Ceramic Coating service for that.',
        },
        {
          question: 'Do you clean the trunk and door jambs too?',
          answer: 'Yes, the Full Refresh includes trunk vacuuming and door jamb wipe-down as standard.',
        },
      ],
    },
  },
  {
    slug: 'gold-standard',
    name: 'Gold Standard',
    tagline: 'Most Popular',
    category: 'full-detail',
    featured: true,
    shortIntro:
      'Our most popular full detail, combining deep interior cleaning with exterior clay bar decontamination and premium wax protection.',
    priceRange: '$250 - $350',
    whatsIncluded: [
      'Everything in Full Refresh',
      'Clay bar paint decontamination',
      'Steam cleaning of carpets and seats',
      'Leather conditioning treatment',
      'Premium carnauba wax application',
      'Engine bay wipe-down',
    ],
    seo: {
      whatIsIt:
        'The Gold Standard is our most requested full detail, adding clay bar decontamination and steam cleaning on top of the Full Refresh essentials for a deeper, longer-lasting result.',
      whoNeedsIt:
        'Great for families, commuters, and anyone whose vehicle sees regular daily use and could use a deeper reset than a basic wash and vacuum.',
      howOften:
        'Most customers schedule the Gold Standard every 10-14 weeks as their primary maintenance detail.',
      benefits:
        'Clay bar treatment removes bonded contaminants that washing alone cannot, steam cleaning lifts embedded dirt from carpet and seats, and premium wax extends paint protection longer than spray wax alone.',
      faqs: [
        {
          question: 'What does clay bar decontamination actually remove?',
          answer:
            'It removes bonded contaminants like tree sap, industrial fallout, and mineral deposits that sit on top of the clear coat but are not removed by washing.',
        },
        {
          question: 'Is steam cleaning safe for leather seats?',
          answer:
            'Yes, we use controlled, low-moisture steam appropriate for leather, followed by a conditioning treatment to prevent drying.',
        },
        {
          question: 'Why is this your most popular package?',
          answer:
            'It strikes the right balance between thoroughness and price for most daily-driven vehicles, without the added cost of full paint correction.',
        },
        {
          question: 'How long does the Gold Standard take?',
          answer: 'Typically 3-4 hours depending on vehicle size and interior condition.',
        },
        {
          question: 'Does this include ceramic coating?',
          answer:
            'No, but premium wax provides several months of protection. For multi-year protection, ask about adding our Ceramic Coating package.',
        },
      ],
    },
  },
  {
    slug: 'masterpiece-detail',
    name: 'Masterpiece Detail',
    tagline: 'Ultimate',
    category: 'full-detail',
    shortIntro:
      'Our top-tier full detail with single-stage paint correction, full ceramic-infused protection, and complete interior restoration.',
    priceRange: '$400 - $600',
    whatsIncluded: [
      'Everything in Gold Standard',
      'Single-stage machine paint correction',
      'Ceramic-infused paint sealant (6-12 month protection)',
      'Headlight restoration',
      'Full interior shampoo and extraction',
      'Wheel-off wheel well cleaning (where accessible)',
    ],
    seo: {
      whatIsIt:
        'The Masterpiece Detail is our most comprehensive package, combining single-stage paint correction with a ceramic-infused sealant and a full interior restoration for vehicles that need a complete top-to-bottom transformation.',
      whoNeedsIt:
        'Best for vehicles with visible swirl marks or oxidation, vehicles being prepared for sale or a big event, or owners who want the highest level of service available short of a full ceramic coating installation.',
      howOften:
        'Most owners book this annually or before a major event, sale, or trade-in, with Gold Standard details in between.',
      benefits:
        'Removes light swirl marks and oxidation, restores headlight clarity, and delivers a noticeably deeper, glassier finish than wax alone, with protection lasting 6-12 months.',
      faqs: [
        {
          question: 'How is this different from a full ceramic coating?',
          answer:
            'The Masterpiece Detail uses a ceramic-infused sealant lasting 6-12 months, while our standalone Ceramic Coating service applies a professional-grade coating lasting 2-5+ years.',
        },
        {
          question: 'Will paint correction remove all the scratches on my car?',
          answer:
            'Single-stage correction removes light swirl marks and oxidation. Deeper scratches may require multi-stage correction, which we can assess and quote separately.',
        },
        {
          question: 'How long does the Masterpiece Detail take?',
          answer: 'Typically 4-6 hours given the paint correction and full interior extraction involved.',
        },
        {
          question: 'Is this a good pre-sale package?',
          answer:
            'Yes, it is our top recommendation for vehicles being listed for sale or appraised for trade-in given the visual impact of corrected paint and a fully restored interior.',
        },
        {
          question: 'Do I need to do anything to prepare?',
          answer:
            'Just clear personal items from the interior and provide a shaded parking spot if possible, since paint correction works best out of direct sun.',
        },
      ],
    },
  },
  {
    slug: 'classic-exterior',
    name: 'Classic Exterior',
    tagline: 'Essential',
    category: 'exterior-only',
    shortIntro: 'A thorough hand wash, wheel cleaning, and spray wax for vehicles that just need exterior attention.',
    priceRange: '$60 - $90',
    whatsIncluded: [
      'Two-bucket hand wash',
      'Wheel and tire cleaning with dressing',
      'Door jamb wipe-down',
      'Window cleaning',
      'Spray wax protection',
    ],
    seo: {
      whatIsIt:
        'Classic Exterior is our entry-level exterior-only service, a careful hand wash and spray wax designed to safely remove dust and grime without stripping existing wax or sealant.',
      whoNeedsIt:
        'Great for vehicles with a healthy interior that just need regular exterior maintenance, or as a between-details maintenance wash.',
      howOften: 'Every 2-4 weeks for most Albuquerque metro drivers given regular dust accumulation.',
      benefits:
        'Safely removes dust and light grime without the scratching risk of automatic car washes, and refreshes spray wax protection each visit.',
      faqs: [
        {
          question: 'Will this remove existing wax or ceramic coating?',
          answer:
            'No, our two-bucket hand wash method and pH-neutral soap are safe for existing wax, sealant, or ceramic coating.',
        },
        {
          question: 'How is this different from an automatic car wash?',
          answer:
            'We hand wash with clean, dust-free mitts and a two-bucket method to avoid the swirl marks common with automatic brush washes.',
        },
        {
          question: 'How long does it take?', answer: 'Typically 45-60 minutes.',
        },
        {
          question: 'Does this include wheels and tires?',
          answer: 'Yes, wheel cleaning and tire dressing are included in every Classic Exterior appointment.',
        },
        {
          question: 'Can I book this on a recurring schedule?',
          answer: 'Yes, many customers book Classic Exterior every 2-4 weeks as a standing maintenance appointment.',
        },
      ],
    },
  },
  {
    slug: 'wax-and-buff',
    name: 'Wax & Buff',
    tagline: 'Popular',
    category: 'exterior-only',
    featured: true,
    shortIntro: 'Clay bar decontamination plus a machine-buffed premium wax for a deeper shine and longer protection.',
    priceRange: '$150 - $220',
    whatsIncluded: [
      'Everything in Classic Exterior',
      'Clay bar paint decontamination',
      'Machine-buffed premium carnauba wax',
      'Trim and plastic restoration dressing',
      'Exhaust tip polishing',
    ],
    seo: {
      whatIsIt:
        'Wax & Buff adds clay bar decontamination and a machine-applied premium wax on top of our Classic Exterior wash, delivering a noticeably deeper shine and longer protection window.',
      whoNeedsIt:
        'Ideal for owners who want their exterior looking its best without committing to full paint correction or ceramic coating.',
      howOften: 'Every 8-12 weeks to maintain the wax layer and keep contaminants from bonding to the clear coat.',
      benefits:
        'Removes bonded surface contaminants, restores faded trim and plastic, and provides 3-4 months of wax protection with a deeper, warmer gloss than spray wax alone.',
      faqs: [
        {
          question: 'What is clay bar decontamination for?',
          answer:
            'It removes bonded contaminants like tree sap and mineral deposits that sit on top of the paint and cannot be washed off.',
        },
        {
          question: 'How long does the wax last?',
          answer: 'Machine-buffed premium carnauba wax typically lasts 3-4 months under normal conditions.',
        },
        {
          question: 'Does this remove scratches?',
          answer: 'No, this package does not include machine correction. See Masterpiece Detail or our Paint Correction service for that.',
        },
        {
          question: 'How long does the appointment take?', answer: 'Typically 2-3 hours.',
        },
        {
          question: 'Is this a good option before selling my car?',
          answer: 'It is a solid mid-tier option, though we recommend Masterpiece Detail or Ceramic Coating for maximum resale impact.',
        },
      ],
    },
  },
  {
    slug: 'ceramic-coating-package',
    name: 'Ceramic Coating',
    tagline: 'Ultimate',
    category: 'exterior-only',
    shortIntro: 'Multi-year nano-ceramic paint protection engineered for New Mexico sun, dust, and hard water.',
    priceRange: '$500 - $1,200',
    whatsIncluded: [
      'Full paint decontamination and correction prep',
      'Single or multi-stage paint correction',
      'Professional-grade nano-ceramic coating application',
      'Wheel and trim ceramic sealant',
      '2-5+ year protection depending on tier',
    ],
    seo: {
      whatIsIt:
        'Our Ceramic Coating package is the ultimate long-term paint protection option, bonding a professional-grade nano-ceramic layer to your clear coat after full paint correction prep. See our dedicated Ceramic Coating page for full details on tiers and the application process.',
      whoNeedsIt:
        'Best for vehicles parked outdoors, high-mileage daily drivers, and anyone who wants to stop reapplying wax every few months in Albuquerque\'s high-UV climate.',
      howOften: 'Applied once and reassessed for a maintenance top-up every 2-3 years depending on the tier selected.',
      benefits:
        'Multi-year UV, chemical, and hard-water resistance, easier maintenance washing, and a deep, glassy finish that outlasts wax or sealant many times over.',
      faqs: [
        {
          question: 'How long does ceramic coating last?',
          answer: 'Depending on the tier, our coatings last between 2 and 5+ years with proper maintenance washing.',
        },
        {
          question: 'Does ceramic coating prevent scratches?',
          answer:
            'It adds a sacrificial, scratch-resistant layer but does not make paint scratch-proof. It significantly reduces swirl marks from washing.',
        },
        {
          question: 'Do I need paint correction first?',
          answer: 'Yes, we correct existing swirl marks and oxidation before applying the coating since it will lock in whatever condition the paint is in.',
        },
        {
          question: 'How long does the full process take?',
          answer: 'Typically a full day to two days depending on paint correction needs and coating tier.',
        },
        {
          question: 'Is ceramic coating worth it in New Mexico?',
          answer:
            'For most vehicles parked outdoors, yes. See our blog post on the cost-benefit breakdown for a full analysis.',
        },
      ],
    },
  },
  {
    slug: 'classic-interior',
    name: 'Classic Interior',
    tagline: 'Essential',
    category: 'interior-only',
    shortIntro: 'A thorough vacuum, wipe-down, and window cleaning to refresh your cabin.',
    priceRange: '$70 - $100',
    whatsIncluded: [
      'Full vacuum including trunk and under seats',
      'Dashboard and door panel wipe-down with UV protectant',
      'Window cleaning inside',
      'Cupholder and vent detailing',
      'Air freshener treatment',
    ],
    seo: {
      whatIsIt:
        'Classic Interior is our entry-level cabin refresh, covering a full vacuum, surface wipe-down, and interior glass cleaning for vehicles that need routine upkeep rather than deep restoration.',
      whoNeedsIt: 'Ideal for a quick reset between deeper interior services or for vehicles in generally good condition.',
      howOften: 'Every 6-8 weeks for most daily drivers.',
      benefits: 'Removes surface dust, restores a fresh scent, and protects dash and trim from UV fading with every visit.',
      faqs: [
        {
          question: 'Does this include stain removal?', answer: 'Light surface stains are addressed, but set-in stains require our Deep Shampoo package.',
        },
        { question: 'How long does it take?', answer: 'Typically 45-75 minutes.' },
        { question: 'Does this cover the trunk?', answer: 'Yes, trunk vacuuming is included.' },
        {
          question: 'Is this enough if I have pets?', answer: 'For light shedding, yes. For heavier pet hair or odor, we recommend our Deep Shampoo package.',
        },
        { question: 'Can I book this recurring?', answer: 'Yes, many customers set this up every 6-8 weeks.' },
      ],
    },
  },
  {
    slug: 'deep-shampoo',
    name: 'Deep Shampoo',
    tagline: 'Popular',
    category: 'interior-only',
    featured: true,
    shortIntro: 'Steam extraction and shampooing for carpets, seats, and mats plus leather conditioning.',
    priceRange: '$150 - $220',
    whatsIncluded: [
      'Everything in Classic Interior',
      'Steam extraction shampoo for carpets and seats',
      'Leather or upholstery conditioning',
      'Pet hair extraction',
      'Odor treatment',
    ],
    seo: {
      whatIsIt:
        'Deep Shampoo goes beyond surface cleaning with full steam extraction of carpets, seats, and floor mats, lifting embedded dirt, stains, and odor sources that vacuuming alone cannot reach.',
      whoNeedsIt:
        'Perfect for families, pet owners, and commuters dealing with stains, embedded dirt, or odor that a standard vacuum and wipe-down cannot resolve.',
      howOften: 'Every 3-4 months, or as needed for spills, pet accidents, or heavy use.',
      benefits: 'Lifts embedded dirt and stains, extracts pet hair from fibers, neutralizes odor at the source, and conditions leather to prevent cracking.',
      faqs: [
        {
          question: 'Will this remove old stains?', answer: 'Most stains improve significantly, though very old or set-in stains may require multiple treatments.',
        },
        {
          question: 'Is steam safe for leather?', answer: 'Yes, we use controlled steam appropriate for leather followed by conditioning to prevent drying.',
        },
        { question: 'How long does it take?', answer: 'Typically 2-3 hours depending on interior condition.' },
        {
          question: 'Does this handle pet odor?', answer: 'Yes, enzyme-based odor treatment is included. For severe odor, ask about our ozone treatment add-on.',
        },
        {
          question: 'How is this different from Mold Reset?', answer: 'Deep Shampoo addresses dirt, stains, and general odor. Mold Reset is a remediation service for water damage or active mold growth.',
        },
      ],
    },
  },
  {
    slug: 'mold-reset',
    name: 'Mold Reset',
    tagline: 'Remediation',
    category: 'interior-only',
    shortIntro: 'A remediation-focused service for vehicles with mold, mildew, or water damage odor.',
    priceRange: '$250 - $400',
    whatsIncluded: [
      'Full interior extraction and steam treatment',
      'Antimicrobial mold and mildew treatment',
      'Ozone odor neutralization',
      'Carpet and padding moisture assessment',
      'Post-treatment odor verification',
    ],
    seo: {
      whatIsIt:
        'Mold Reset is our remediation package for vehicles affected by water intrusion, mold, mildew, or persistent musty odor that standard cleaning cannot resolve.',
      whoNeedsIt:
        'Vehicles with a known water leak, flood exposure, or a musty smell that has developed over time, often from a slow leak around a window or sunroof seal.',
      howOften: 'As needed — this is a remediation service rather than a routine maintenance package.',
      benefits:
        'Antimicrobial treatment addresses the source of mold and mildew rather than masking it, and ozone treatment neutralizes odor at the molecular level for a lasting result.',
      faqs: [
        {
          question: 'Can you guarantee the odor will be completely gone?',
          answer:
            'In most cases yes, but severe cases involving saturated carpet padding may require padding replacement, which we can identify and recommend during assessment.',
        },
        {
          question: 'How do you find where the water is coming from?', answer: 'We inspect common leak points like window seals, sunroof drains, and door seals as part of the assessment.',
        },
        { question: 'Is ozone treatment safe?', answer: 'Yes, when performed by professionals with the vehicle unoccupied and properly ventilated afterward.' },
        { question: 'How long does this take?', answer: 'Typically a full day including drying and ozone treatment time.' },
        {
          question: 'What if the leak comes back?', answer: 'We recommend having the source leak repaired by a mechanic or body shop; our service addresses the interior contamination, not the mechanical leak itself.',
        },
      ],
    },
  },
];

export interface PackageLocation {
  name: string;
  slug: string;
}

export const locations: PackageLocation[] = [
  { name: 'Albuquerque', slug: 'albuquerque' },
  { name: 'Rio Rancho', slug: 'rio-rancho' },
  { name: 'Corrales', slug: 'corrales' },
];
