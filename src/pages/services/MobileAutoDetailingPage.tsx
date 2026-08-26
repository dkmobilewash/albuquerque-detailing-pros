import ServicePageTemplate from '../../components/ServicePageTemplate';
import { optimizeImageUrl } from '../../utils/imageOptimization';

export default function MobileAutoDetailingPage() {
  return (
    <ServicePageTemplate
      slug="mobile-auto-detailing"
      title="Mobile Auto Detailing"
      subtitle="A full interior and exterior detail delivered to your driveway, office, or job site anywhere in the Albuquerque metro."
      metaTitle="Mobile Auto Detailing Albuquerque"
      metaDescription="Professional mobile auto detailing in Albuquerque, NM. Our self-contained vans bring the full detailing experience directly to you."
      keywords="mobile auto detailing Albuquerque, mobile car detailing near me"
      imageUrl={optimizeImageUrl('https://picsum.photos/seed/adp-mobile-detailing/800/600', { width: 800, quality: 75 })}
      introText="Our mobile auto detailing service is fully self-contained, meaning we bring our own water and power directly to you. No shop drop-off, no coordinating a ride, and no waiting around — just a full detail wherever your vehicle already is."
      whatIncluded={[
        'Full interior vacuum and wipe-down',
        'Two-bucket hand wash exterior',
        'Wheel, tire, and trim cleaning',
        'Window cleaning inside and out',
        'Spray wax or premium wax protection',
        'Dashboard and trim UV-protectant dressing',
      ]}
      benefits={[
        { title: 'Total Convenience', description: 'We come to your home, office, or job site — no drop-off required.' },
        { title: 'Self-Contained Equipment', description: 'Our vans carry their own water and power, keeping us HOA-friendly.' },
        { title: 'Climate-Specific Process', description: "Built around Albuquerque's sun, dust, and hard water conditions." },
      ]}
      whoFor={[
        { title: 'Busy Professionals', description: 'Get your car detailed while you work, without losing time to a shop visit.' },
        { title: 'Families', description: 'Skip the hassle of coordinating a shop drop-off around school and activities.' },
        { title: 'Business Fleets', description: 'Keep vehicles in service with recurring on-site detailing programs.' },
      ]}
      faqs={[
        { question: 'Do I need to provide water or power?', answer: 'No, our vans are fully self-contained and do not rely on your home or business utilities.' },
        { question: 'How long does an appointment take?', answer: 'Most full details take 2-4 hours depending on vehicle size and condition.' },
        { question: 'Can you come to my workplace?', answer: 'Yes, we regularly detail vehicles at office parking lots and garages.' },
        { question: 'What if my HOA restricts at-home washing?', answer: 'Our self-contained vans typically comply with these restrictions since we do not use your water or drainage.' },
        { question: 'Do you offer recurring appointments?', answer: 'Yes, most customers set up a recurring schedule every 8-12 weeks.' },
      ]}
      relatedServiceSlugs={['interior-detailing', 'exterior-detailing', 'ceramic-coating']}
    />
  );
}
