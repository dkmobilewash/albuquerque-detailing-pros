import ServicePageTemplate from '../../components/ServicePageTemplate';
import { optimizeImageUrl } from '../../utils/imageOptimization';

export function InteriorDetailingPage() {
  return (
    <ServicePageTemplate
      slug="interior-detailing"
      title="Interior Detailing"
      subtitle="Deep vacuuming, steam cleaning, stain extraction, and conditioning for every surface inside your vehicle."
      metaTitle="Interior Car Detailing Albuquerque"
      metaDescription="Professional interior car detailing in Albuquerque, NM. Steam extraction, stain removal, pet odor treatment, and UV-protectant conditioning."
      keywords="interior car detailing Albuquerque, car interior cleaning, pet odor removal"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-interior-detailing/800/600', { width: 800, quality: 75 })}
      introText="Albuquerque's dry climate and intense sun are hard on interiors — fading dash plastics, cracking leather, and baking in dust and odor. Our interior detailing service is built to counter all three."
      whatIncluded={[
        'Full vacuum of carpets, seats, and trunk',
        'Steam extraction for carpets and upholstery',
        'Leather or upholstery conditioning',
        'Vent cleaning and dust removal',
        'Window cleaning inside',
        'UV-protectant dressing for dash and trim',
      ]}
      benefits={[
        { title: 'Removes Embedded Dirt', description: "Steam extraction lifts dust and dirt that vacuuming alone can't reach." },
        { title: 'Prevents UV Damage', description: 'Conditioning treatments slow fading and cracking from intense Albuquerque sun.' },
        { title: 'Eliminates Odor', description: 'Enzyme-based treatment addresses odor at the source, not just the surface.' },
      ]}
      whoFor={[
        { title: 'Pet Owners', description: 'Specialized extraction for embedded pet hair and odor treatment.' },
        { title: 'Families', description: 'Deep cleaning for spills, crumbs, and daily wear from kids.' },
        { title: 'Daily Commuters', description: 'Regular upkeep for a cabin that sees hours of use every week.' },
      ]}
      faqs={[
        { question: 'Can you remove old stains?', answer: 'Most stains improve significantly with steam extraction, though very old stains may need multiple treatments.' },
        { question: 'Do you treat pet odor?', answer: 'Yes, enzyme-based odor treatment is included, with ozone treatment available for severe cases.' },
        { question: 'Is steam safe for leather?', answer: 'Yes, we use controlled steam followed by conditioning to prevent drying.' },
        { question: 'How long does this take?', answer: 'Typically 1.5-3 hours depending on vehicle size and condition.' },
        { question: 'How often should I book?', answer: 'Every 8-12 weeks is typical for daily-driven vehicles.' },
      ]}
      relatedServiceSlugs={['mobile-auto-detailing', 'exterior-detailing', 'ceramic-coating']}
    />
  );
}

export function ExteriorDetailingPage() {
  return (
    <ServicePageTemplate
      slug="exterior-detailing"
      title="Exterior Detailing"
      subtitle="Hand wash, clay bar decontamination, and gloss-enhancing wax for a showroom finish."
      metaTitle="Exterior Car Detailing Albuquerque"
      metaDescription="Professional exterior car detailing in Albuquerque, NM. Two-bucket hand wash, clay bar decontamination, and premium wax protection."
      keywords="exterior car detailing Albuquerque, car wash and wax Albuquerque"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-exterior-detailing/800/600', { width: 800, quality: 75 })}
      introText="Albuquerque's wind-blown dust and hard water make proper exterior care essential. Our process is built to safely remove contaminants without introducing new scratches."
      whatIncluded={[
        'Two-bucket hand wash with pH-neutral soap',
        'Clay bar paint decontamination',
        'Wheel, tire, and trim cleaning and dressing',
        'Window cleaning outside',
        'Wax or sealant protection',
        'Door jamb wipe-down',
      ]}
      benefits={[
        { title: 'Scratch-Safe Process', description: 'Two-bucket washing and clean mitts avoid the swirl marks common with automatic washes.' },
        { title: 'Removes Bonded Contaminants', description: 'Clay bar treatment lifts sap, mineral deposits, and industrial fallout washing alone misses.' },
        { title: 'Lasting Shine', description: 'Wax or sealant protection extends the clean, glossy finish between washes.' },
      ]}
      whoFor={[
        { title: 'Daily Drivers', description: 'Regular exterior maintenance to combat constant dust exposure.' },
        { title: 'Enthusiasts', description: 'A deeper clean and shine for vehicles owners take pride in.' },
        { title: 'Pre-Sale Sellers', description: 'A glossy, clean exterior makes a strong first impression for buyers.' },
      ]}
      faqs={[
        { question: 'Will this remove swirl marks?', answer: 'A standard exterior detail does not remove existing swirl marks; see our Paint Correction service for that.' },
        { question: 'Do you clean wheels and tires?', answer: 'Yes, wheel and tire cleaning with dressing is included.' },
        { question: 'How long does this take?', answer: 'Typically 1-2 hours depending on vehicle size and condition.' },
        { question: 'How often should I book?', answer: 'Every 2-4 weeks for maintenance washing, or every 8-12 weeks for a full exterior detail.' },
        { question: 'Can I add ceramic coating?', answer: 'Yes, ask about upgrading to our Ceramic Coating package for multi-year protection.' },
      ]}
      relatedServiceSlugs={['paint-correction', 'ceramic-coating', 'headlight-restoration']}
    />
  );
}

export function PaintCorrectionPage() {
  return (
    <ServicePageTemplate
      slug="paint-correction"
      title="Paint Correction"
      subtitle="Machine polishing that removes swirl marks, oxidation, and light scratches to restore true gloss."
      metaTitle="Paint Correction Albuquerque"
      metaDescription="Professional paint correction in Albuquerque, NM. Machine polishing removes swirl marks, oxidation, and light scratches to restore your paint's true gloss."
      keywords="paint correction Albuquerque, swirl mark removal, scratch removal car"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-paint-correction/800/600', { width: 800, quality: 75 })}
      introText="Years of automatic car washes and Albuquerque's dust leave most vehicles with a network of fine swirl marks. Paint correction restores a flat, reflective finish by carefully leveling the clear coat."
      whatIncluded={[
        'Paint depth measurement',
        'Full decontamination wash and clay bar treatment',
        'Single or multi-stage machine polishing',
        'Inspection under direct and raking light',
        'Protective wax, sealant, or coating application',
      ]}
      benefits={[
        { title: 'Restores True Gloss', description: 'Removes the haze and swirl marks that dull an otherwise clean finish.' },
        { title: 'Removes Oxidation', description: 'Corrects the chalky, faded look caused by UV breakdown.' },
        { title: 'Boosts Resale Value', description: 'A corrected finish makes a strong first impression for buyers and appraisers.' },
      ]}
      whoFor={[
        { title: 'Vehicles With Visible Swirl Marks', description: 'If paint looks dull or hazy in direct sunlight, correction restores clarity.' },
        { title: 'Pre-Sale Vehicles', description: 'One of the highest-return services before listing or trade-in appraisal.' },
        { title: 'Enthusiasts', description: 'For owners who want the deepest possible gloss before a ceramic coating.' },
      ]}
      faqs={[
        { question: 'How many stages of correction do I need?', answer: 'We assess your paint and recommend single or multi-stage correction based on scratch depth.' },
        { question: 'Will this remove all scratches?', answer: 'Correction removes swirl marks and light scratches; deeper scratches through the clear coat need touch-up paint.' },
        { question: 'How long does this take?', answer: 'Typically 4-8 hours depending on stages and vehicle size.' },
        { question: 'Should I add ceramic coating afterward?', answer: 'Yes, we strongly recommend it to protect and preserve the corrected finish.' },
        { question: 'Is this safe for my paint?', answer: 'Yes, we measure paint depth beforehand to ensure a safe amount of clear coat is removed.' },
      ]}
      relatedServiceSlugs={['ceramic-coating', 'exterior-detailing', 'headlight-restoration']}
    />
  );
}

export function HeadlightRestorationPage() {
  return (
    <ServicePageTemplate
      slug="headlight-restoration"
      title="Headlight Restoration"
      subtitle="Removes UV oxidation and yellowing to restore clarity, safety, and curb appeal."
      metaTitle="Headlight Restoration Albuquerque"
      metaDescription="Professional headlight restoration in Albuquerque, NM. Restore clarity and night visibility with wet-sanding, polishing, and UV-resistant sealant."
      keywords="headlight restoration Albuquerque, cloudy headlights fix"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-headlight-restoration/800/600', { width: 800, quality: 75 })}
      introText="Cloudy, yellowed headlights are extremely common in Albuquerque's high-UV climate — and they can cut usable light output by more than half, making this a safety issue as much as a cosmetic one."
      whatIncluded={[
        'Lens oxidation assessment',
        'Wet-sanding to remove oxidized layer',
        'Progressive polishing to restore clarity',
        'UV-resistant sealant application',
        'Final clarity and finish check',
      ]}
      benefits={[
        { title: 'Improved Night Visibility', description: 'Restoring clarity significantly improves usable light output.' },
        { title: 'Longer-Lasting Results', description: 'Our UV sealant holds clarity longer than unsealed DIY kits.' },
        { title: 'Better Curb Appeal', description: 'Clear headlights make an otherwise clean vehicle look well maintained.' },
      ]}
      whoFor={[
        { title: 'Vehicles With Yellowed Lenses', description: 'If headlights look cloudy or hazy, restoration brings back clarity.' },
        { title: 'Night Drivers', description: 'Anyone concerned about reduced visibility on unlit roads.' },
        { title: 'Pre-Sale Vehicles', description: 'A quick, high-impact improvement before listing photos.' },
      ]}
      faqs={[
        { question: 'How long do results last?', answer: 'A properly sealed restoration typically holds clarity for 1-2 years.' },
        { question: 'Is this safer than a DIY kit?', answer: 'Yes, professional restoration includes a proper UV sealant most DIY kits lack.' },
        { question: 'How long does it take?', answer: 'Typically 45-90 minutes for both headlights.' },
        { question: 'Will this improve my night visibility?', answer: 'Yes, restoring clarity significantly improves usable light output.' },
        { question: 'Can this be added to another service?', answer: 'Yes, it is a popular add-on to any exterior detailing appointment.' },
      ]}
      relatedServiceSlugs={['exterior-detailing', 'paint-correction', 'ceramic-coating']}
    />
  );
}

export function EngineBayDetailingPage() {
  return (
    <ServicePageTemplate
      slug="engine-bay-detailing"
      title="Engine Bay Detailing"
      subtitle="Safe degreasing and dressing of your engine bay for a clean, inspection-ready finish."
      metaTitle="Engine Bay Detailing Albuquerque"
      metaDescription="Professional engine bay detailing in Albuquerque, NM. Safe, low-pressure cleaning that reveals leaks and improves resale value."
      keywords="engine bay detailing Albuquerque, engine cleaning car"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-engine-bay/800/600', { width: 800, quality: 75 })}
      introText="A clean engine bay does more than look good — it makes new leaks immediately visible and signals a well-maintained vehicle to buyers and mechanics alike."
      whatIncluded={[
        'Coverage of sensitive electrical components and intake',
        'Engine-safe degreaser application',
        'Low-pressure rinse and agitation',
        'Drying and visual leak inspection',
        'Protectant dressing for hoses and plastic components',
      ]}
      benefits={[
        { title: 'Reveals Leaks Early', description: 'A clean bay makes new oil or coolant leaks immediately visible.' },
        { title: 'Improves Resale Value', description: 'A clean engine bay signals a well-maintained vehicle to buyers and inspectors.' },
        { title: 'Safe for Modern Vehicles', description: 'Low-pressure application avoids damage to electronics and sensors.' },
      ]}
      whoFor={[
        { title: 'Pre-Sale Vehicles', description: 'A small investment with an outsized impression on buyers who check under the hood.' },
        { title: 'Vehicles Due for Inspection', description: 'A clean engine bay helps technicians spot issues faster.' },
        { title: 'Meticulous Owners', description: 'For owners who want every part of their vehicle detailed, not just the visible surfaces.' },
      ]}
      faqs={[
        { question: 'Is this safe for modern engines?', answer: 'Yes, when done with low-pressure application and proper coverage of sensitive components.' },
        { question: 'Will this help me spot leaks?', answer: 'Yes, a clean engine bay makes new leaks immediately visible.' },
        { question: 'How often should this be done?', answer: 'Once or twice a year, or before a sale or inspection.' },
        { question: 'Do you use a pressure washer directly on the engine?', answer: 'No, we avoid high-pressure application directly on electrical connectors and sensitive parts.' },
        { question: 'How long does it take?', answer: 'Typically 30-60 minutes depending on engine bay condition.' },
      ]}
      relatedServiceSlugs={['exterior-detailing', 'mobile-auto-detailing', 'fleet-commercial-detailing']}
    />
  );
}
