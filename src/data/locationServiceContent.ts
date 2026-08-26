import type { FAQItem } from '../types';

export interface ServiceProfile {
  slug: string;
  name: string;
  shortDesc: string;
  whyChooseUs: string;
  ourAdvantage: string;
  problems: { title: string; description: string }[];
  process: string[];
  faqs: FAQItem[];
}

export const serviceProfiles: ServiceProfile[] = [
  {
    slug: 'mobile-auto-detailing',
    name: 'Mobile Auto Detailing',
    shortDesc: 'A full interior and exterior detail delivered at your home or workplace.',
    whyChooseUs:
      'Our vans are fully self-contained with their own water and power, so we bring the full detailing experience to you without relying on your utilities.',
    ourAdvantage:
      'Unlike shops that require a drop-off and a wait, we work around your schedule and location, saving you the trip and the downtime.',
    problems: [
      { title: 'No time to visit a shop', description: 'A full workday or family schedule leaves no room for a shop drop-off and pickup.' },
      { title: 'Dust buildup between washes', description: 'Regional dust settles fast, making maintenance washing a near-constant need.' },
      { title: 'HOA or apartment restrictions', description: 'Many communities restrict at-home washing, which our self-contained service is built to work around.' },
    ],
    process: [
      'Book your package and preferred time online or by phone',
      'We arrive with our fully equipped, self-contained van',
      'Quick walkaround to note any specific concerns',
      'Full interior and exterior service completed on-site',
      'Final walkthrough and payment once you are satisfied',
    ],
    faqs: [
      { question: 'How long does mobile detailing take?', answer: 'Most full details take 2-4 hours depending on vehicle size and condition.' },
      { question: 'Do I need to provide water or power?', answer: 'No, our vans are fully self-contained.' },
      { question: 'Can you come to my workplace?', answer: 'Yes, we regularly detail vehicles in office parking lots and garages during the workday.' },
      { question: 'What if it rains on my appointment day?', answer: 'We monitor weather and will reschedule if conditions would affect the quality of service.' },
      { question: 'Do you offer recurring appointments?', answer: 'Yes, most customers set up a recurring schedule every 8-12 weeks.' },
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards as well as cash.' },
      { question: 'Is a driveway required?', answer: 'A driveway, parking spot, or similar space with room to work around the vehicle is all we need.' },
      { question: 'How do I know which package to choose?', answer: 'We can recommend a package based on your vehicle\'s condition during booking or via our self-assessment quiz.' },
    ],
  },
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    shortDesc: 'Deep vacuuming, steam extraction, and conditioning for every interior surface.',
    whyChooseUs:
      'We use steam extraction and enzyme-based treatments rather than surface-level cleaning that only masks dirt and odor temporarily.',
    ourAdvantage:
      'Our interior process specifically targets the dust that works its way into vents and fibers in dry, high-desert conditions.',
    problems: [
      { title: 'Embedded dust in vents and fibers', description: 'Fine desert dust settles deep into HVAC vents and carpet fibers over time.' },
      { title: 'Pet hair and odor', description: 'Standard vacuuming rarely removes embedded pet hair or the odor sources beneath it.' },
      { title: 'UV-faded and cracked surfaces', description: 'Intense sun fades and dries dashboard plastic and leather without regular conditioning.' },
    ],
    process: [
      'Full interior walkthrough to identify problem areas',
      'Vacuum extraction of carpets, seats, and trunk',
      'Steam cleaning and stain treatment as needed',
      'Leather or upholstery conditioning',
      'UV-protectant dressing on dash and trim',
    ],
    faqs: [
      { question: 'Can you remove old stains?', answer: 'Most stains improve significantly with steam extraction, though very old stains may need multiple treatments.' },
      { question: 'Do you treat pet odor?', answer: 'Yes, enzyme-based odor treatment is included, with ozone treatment available for severe cases.' },
      { question: 'Is steam safe for leather?', answer: 'Yes, we use controlled steam followed by conditioning to prevent drying.' },
      { question: 'How long does interior detailing take?', answer: 'Typically 1.5-3 hours depending on vehicle size and condition.' },
      { question: 'How often should I book an interior detail?', answer: 'Every 8-12 weeks is typical for daily-driven vehicles.' },
      { question: 'Do you clean under the seats?', answer: 'Yes, full vacuum extraction includes under and around seats.' },
      { question: 'Will this fix a cracked dashboard?', answer: 'Conditioning slows further cracking but cannot fully reverse existing damage.' },
      { question: 'Can I book this alongside an exterior detail?', answer: 'Yes, many customers combine interior and exterior into a full detail package.' },
    ],
  },
  {
    slug: 'exterior-detailing',
    name: 'Exterior Detailing',
    shortDesc: 'Hand wash, decontamination, and gloss-enhancing protection for your paint.',
    whyChooseUs:
      'We hand wash using a two-bucket method and clean, dust-free mitts to avoid the swirl marks common with automatic car washes.',
    ourAdvantage: 'Our process is built around the abrasive, wind-blown dust common across the metro, minimizing scratching risk during every wash.',
    problems: [
      { title: 'Swirl marks from improper washing', description: 'Automatic washes and dry wiping introduce fine scratches over time.' },
      { title: 'Hard water spotting', description: 'Mineral-rich water left to air-dry etches into paint under intense sun.' },
      { title: 'Dust and sand abrasion', description: 'Fine desert dust acts like sandpaper when wiped instead of rinsed away.' },
    ],
    process: [
      'Pre-rinse to float loose dust and debris off the surface',
      'Two-bucket hand wash with pH-neutral soap',
      'Clay bar decontamination for bonded contaminants',
      'Wheel, tire, and trim cleaning and dressing',
      'Wax or sealant application for protection',
    ],
    faqs: [
      { question: 'Will this remove swirl marks?', answer: 'A standard wash will not remove existing swirl marks; for that, see our Paint Correction service.' },
      { question: 'How do you avoid scratching the paint?', answer: 'We rinse thoroughly before touching the surface and use clean, dust-free mitts with a two-bucket method.' },
      { question: 'Do you clean wheels and tires?', answer: 'Yes, wheel and tire cleaning with dressing is included in every exterior service.' },
      { question: 'How long does exterior detailing take?', answer: 'Typically 1-2 hours depending on vehicle size and condition.' },
      { question: 'How often should I book?', answer: 'Every 2-4 weeks for maintenance washing, or 8-12 weeks for a full exterior detail.' },
      { question: 'Do you remove hard water spots?', answer: 'Light mineral deposits are removed during washing; etched spots may require paint correction.' },
      { question: 'Is wax included?', answer: 'Yes, spray or premium wax is included depending on the package selected.' },
      { question: 'Can I add ceramic coating?', answer: 'Yes, ask about upgrading to our Ceramic Coating package for multi-year protection.' },
    ],
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    shortDesc: 'Machine polishing that removes swirl marks, oxidation, and light scratches.',
    whyChooseUs: 'We assess paint depth before correction to ensure we remove only what is safe, preserving as much clear coat as possible.',
    ourAdvantage: 'Our correction process is calibrated for the oxidation patterns common in high-UV, high-elevation conditions.',
    problems: [
      { title: 'Dull, hazy finish in direct sunlight', description: 'Years of automatic washing and sun exposure leave a network of fine scratches.' },
      { title: 'Oxidized clear coat', description: 'UV breakdown leaves a chalky, faded appearance especially on horizontal surfaces.' },
      { title: 'Etched hard water spots', description: 'Mineral deposits that have bonded into the clear coat need machine polishing to remove.' },
    ],
    process: [
      'Paint depth measurement to determine safe correction level',
      'Full decontamination wash and clay bar treatment',
      'Machine polishing in one or more stages as needed',
      'Inspection under direct and raking light',
      'Protective wax, sealant, or coating application',
    ],
    faqs: [
      { question: 'How many stages of correction do I need?', answer: 'We assess your paint condition and recommend single or multi-stage correction based on scratch depth.' },
      { question: 'Will this remove all scratches?', answer: 'Correction removes swirl marks and light scratches, but scratches through the clear coat need touch-up paint.' },
      { question: 'How long does paint correction take?', answer: 'Typically 4-8 hours depending on the number of stages and vehicle size.' },
      { question: 'Should I add ceramic coating afterward?', answer: 'Yes, we strongly recommend it to protect and preserve the corrected finish.' },
      { question: 'Is this safe for my paint?', answer: 'Yes, we measure paint depth beforehand to ensure a safe amount of clear coat is removed.' },
      { question: 'How often do I need paint correction?', answer: 'Most vehicles only need this once every few years if maintained with proper washing in between.' },
      { question: 'Is this worth it before selling?', answer: 'Yes, it is one of the highest-return services before a sale or trade-in appraisal.' },
      { question: 'Can you fix a specific scratch I have?', answer: 'We assess it during booking and let you know if correction will resolve it or if touch-up paint is needed.' },
    ],
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    shortDesc: 'Multi-year nano-ceramic paint protection built for New Mexico conditions.',
    whyChooseUs: 'We perform full paint correction prep before every coating application to ensure the best possible base finish.',
    ourAdvantage: 'Our coating tiers are selected specifically for high-UV, low-humidity durability rather than a generic one-size-fits-all product.',
    problems: [
      { title: 'Repeated wax reapplication', description: 'Wax breaks down every few months in intense sun, requiring constant upkeep.' },
      { title: 'Hard water etching', description: 'Untreated paint is vulnerable to mineral spotting that eventually etches the clear coat.' },
      { title: 'Fading gloss over time', description: 'UV exposure gradually dulls unprotected paint year after year.' },
    ],
    process: [
      'Full paint decontamination and correction prep',
      'Paint correction to remove existing swirl marks and oxidation',
      'Panel wipe-down to prepare the surface for bonding',
      'Professional-grade ceramic coating application',
      'Cure time and post-application care instructions',
    ],
    faqs: [
      { question: 'How long does ceramic coating last?', answer: 'Between 2 and 5+ years depending on the tier selected and maintenance.' },
      { question: 'Does it make paint scratch-proof?', answer: 'No, but it adds a sacrificial layer that significantly reduces swirl marks from washing.' },
      { question: 'Do I still need to wash my car?', answer: 'Yes, regular washing is still needed, though it becomes easier and faster with a coating.' },
      { question: 'Is paint correction required first?', answer: 'Yes, to lock in the best possible finish under the coating.' },
      { question: 'How long does application take?', answer: 'Typically one to two full days depending on correction needs and coating tier.' },
      { question: 'Is it worth it for my vehicle?', answer: 'For most vehicles parked outdoors in the Albuquerque area, yes.' },
      { question: 'Can it be applied to wheels and trim?', answer: 'Yes, we offer wheel and trim ceramic sealant as part of our packages.' },
      { question: 'What voids the coating?', answer: 'Improper washing with harsh chemicals or abrasive tools can shorten the coating\'s lifespan.' },
    ],
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    shortDesc: 'Removes UV oxidation and yellowing to restore clarity and safety.',
    whyChooseUs: 'We wet-sand and polish rather than relying on a quick spray coating that fades again within weeks.',
    ourAdvantage: 'Our UV-resistant sealant is chosen specifically to withstand the region\'s intense sun exposure longer than standard products.',
    problems: [
      { title: 'Yellowed, hazy lenses', description: 'UV breakdown clouds the protective coating on polycarbonate headlight lenses over time.' },
      { title: 'Reduced night visibility', description: 'Oxidized lenses can cut usable light output significantly, a real safety concern.' },
      { title: 'Poor curb appeal', description: 'Cloudy headlights make an otherwise clean vehicle look neglected.' },
    ],
    process: [
      'Assessment of lens oxidation level',
      'Wet-sanding to remove the oxidized layer',
      'Progressive polishing to restore clarity',
      'UV-resistant sealant application',
      'Final clarity and finish check',
    ],
    faqs: [
      { question: 'How long do results last?', answer: 'A properly sealed restoration typically holds clarity for 1-2 years.' },
      { question: 'Is this safer than a DIY kit?', answer: 'Yes, professional restoration includes a proper UV sealant that most DIY kits lack.' },
      { question: 'How long does it take?', answer: 'Typically 45-90 minutes for both headlights.' },
      { question: 'Will this improve my night visibility?', answer: 'Yes, restoring clarity significantly improves usable light output.' },
      { question: 'Can this be added to another service?', answer: 'Yes, it is a popular add-on to any exterior detailing appointment.' },
      { question: 'Does this work on severely yellowed lenses?', answer: 'In most cases yes, though extremely degraded lenses may need replacement instead.' },
      { question: 'Will the clarity fade again quickly?', answer: 'Not with our sealant, though we recommend a touch-up after 1-2 years.' },
      { question: 'Is this required for a vehicle inspection?', answer: 'Extremely oxidized lenses can affect inspection results in some cases; restoration resolves this.' },
    ],
  },
  {
    slug: 'engine-bay-detailing',
    name: 'Engine Bay Detailing',
    shortDesc: 'Safe degreasing and dressing for a clean, inspection-ready engine bay.',
    whyChooseUs: 'We use low-pressure application and avoid sensitive electrical components, unlike a standard power-washer approach.',
    ourAdvantage: 'Our process is designed to reveal new leaks and maintenance needs without risking damage to modern engine electronics.',
    problems: [
      { title: 'Hidden leaks under grime', description: 'Caked-on dirt and oil residue can mask new leaks until they become serious.' },
      { title: 'Trapped heat from debris buildup', description: 'Grime insulates components and can contribute to elevated under-hood temperatures.' },
      { title: 'Poor resale impression', description: 'A dirty engine bay signals neglect to buyers and inspectors even on a well-maintained vehicle.' },
    ],
    process: [
      'Cover or avoid sensitive electrical components and intake',
      'Apply engine-safe degreaser to targeted areas',
      'Low-pressure rinse and agitation as needed',
      'Dry and inspect for visible leaks or wear',
      'Apply protectant dressing to hoses and plastic components',
    ],
    faqs: [
      { question: 'Is this safe for modern engines?', answer: 'Yes, when done with low-pressure application and proper coverage of sensitive components.' },
      { question: 'Will this help me spot leaks?', answer: 'Yes, a clean engine bay makes new leaks immediately visible.' },
      { question: 'How often should this be done?', answer: 'Once or twice a year, or before a sale or inspection.' },
      { question: 'Do you use a pressure washer directly on the engine?', answer: 'No, we avoid high-pressure application directly on electrical connectors and sensitive parts.' },
      { question: 'How long does it take?', answer: 'Typically 30-60 minutes depending on engine bay condition.' },
      { question: 'Can this be combined with other services?', answer: 'Yes, it is commonly added to full detail packages.' },
      { question: 'Will this void my warranty?', answer: 'No, professional engine bay cleaning done safely does not affect standard warranties.' },
      { question: 'Does this help with resale value?', answer: 'Yes, a clean engine bay is a small investment with a noticeable impression on buyers and inspectors.' },
    ],
  },
  {
    slug: 'fleet-commercial-detailing',
    name: 'Fleet & Commercial Detailing',
    shortDesc: 'Recurring on-site washing and detailing programs for businesses.',
    whyChooseUs: 'We build custom recurring schedules around your operations so vehicles stay in service while still getting cleaned.',
    ourAdvantage: 'Our mobile, self-contained approach means no vehicle downtime from a shop drop-off, keeping your fleet on the road.',
    problems: [
      { title: 'Lost revenue from vehicle downtime', description: 'Sending vehicles to a shop takes them out of service for hours or days.' },
      { title: 'Inconsistent presentation across a fleet', description: 'Without a schedule, some vehicles get cleaned regularly while others fall behind.' },
      { title: 'Coordinating multiple vehicles', description: 'Scheduling shop visits for a large fleet individually is time-consuming and inefficient.' },
    ],
    process: [
      'Walkthrough and quote based on fleet size and needs',
      'Custom recurring schedule built around your operations',
      'On-site detailing in rotation, vehicle by vehicle',
      'Consistent quality checks across the fleet',
      'Ongoing schedule adjustments as fleet size changes',
    ],
    faqs: [
      { question: 'How does pricing work for fleets?', answer: 'Pricing is customized based on fleet size, vehicle types, and visit frequency.' },
      { question: 'Do vehicles need to stop operating during service?', answer: 'No, we detail vehicles in rotation so your fleet keeps operating.' },
      { question: 'What businesses use this service?', answer: 'Dealerships, contractors, delivery fleets, and property managers with multiple vehicles.' },
      { question: 'Can we adjust frequency as needed?', answer: 'Yes, schedules can be adjusted weekly, biweekly, or monthly as your needs change.' },
      { question: 'Do you offer ceramic coating for fleet vehicles?', answer: 'Yes, especially popular for dealership showroom vehicles.' },
      { question: 'How do you handle a large lot?', answer: 'We schedule multiple technicians or extended visits depending on fleet size.' },
      { question: 'Is there a minimum fleet size?', answer: 'We work with fleets of any size, from a few company vehicles to large dealership lots.' },
      { question: 'How do we get started?', answer: 'Contact us for a walkthrough and custom quote tailored to your fleet.' },
    ],
  },
];
