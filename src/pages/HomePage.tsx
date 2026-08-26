import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Sparkles, MapPin, Star, Sun, Droplets, Wind, Home as HomeIcon } from 'lucide-react';
import SEO from '../components/SEO';
import { FAQSchema } from '../components/SchemaMarkup';
import HomePagePackageSelector from '../components/HomePagePackageSelector';
import HomepageServiceSections from '../components/HomepageServiceSections';
import CostGuideForm from '../components/CostGuideForm';
import { getPhoneLink, formatPhoneDisplay, getFullAddress } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import { faqs } from '../data/services';
import { optimizeImageUrl } from '../utils/imageOptimization';
import { trackBookNowClick, trackPhoneClick } from '../utils/analytics';

const PACKAGE_HELPER = [
  { title: 'Just Getting Started', text: 'New to professional detailing or it has been over 6 months? Start with Full Refresh or Gold Standard.' },
  { title: 'Preparing to Sell', text: 'Maximize resale value with Masterpiece Detail and its paint correction and full interior restoration.' },
  { title: 'Paint Only Needs Attention', text: 'Interior in good shape but paint looking dull? Wax & Buff or our Ceramic Coating package are the right fit.' },
  { title: 'Interior Only Needs Attention', text: 'Kids, pets, or daily commuting wearing down the cabin? Deep Shampoo resets carpets, seats, and odor.' },
];

const CONDITION_CARDS = [
  { icon: Sun, title: 'UV Exposure', text: "Albuquerque's high elevation means intense year-round sun that fades interiors and breaks down clear coat fast." },
  { icon: Droplets, title: 'Hard Water', text: 'Mineral-rich water etches into paint if left to air-dry, especially under direct sun.' },
  { icon: Wind, title: 'Desert Dust', text: "Fine, wind-blown dust settles constantly and can scratch paint if wiped instead of properly washed." },
  { icon: HomeIcon, title: 'HOA & Apartment Living', text: 'Our self-contained vans bring their own water and power, keeping us compliant with most at-home washing restrictions.' },
];

const TESTIMONIALS = [
  { name: 'Maria S.', location: 'Albuquerque, NM', quote: 'Best mobile detailing in Albuquerque. My car looks brand new every time.' },
  { name: 'James T.', location: 'Rio Rancho, NM', quote: 'Ceramic coating held up perfectly through the summer. Highly recommend.' },
  { name: 'Angela R.', location: 'Corrales, NM', quote: 'Convenient, professional, and thorough. They came right to my property.' },
];

export default function HomePage() {
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustanalytica.com/widgets/widget.js';
    script.async = true;
    script.setAttribute('data-business', 'albuquerque-detailing-pros');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBookNow = (source: string) => {
    trackBookNowClick(source);
    openBookingModal();
  };

  return (
    <div>
      <SEO
        title="Mobile Auto Detailing in Albuquerque, NM"
        description="Albuquerque Detailing Pros brings professional mobile auto detailing, ceramic coating, and fleet washing to your driveway across Albuquerque, Rio Rancho, and the surrounding metro."
        keywords="mobile auto detailing Albuquerque, car detailing Albuquerque NM, ceramic coating Albuquerque"
      />
      <FAQSchema faqs={faqs} id="schema-faq-homepage" />

      <section
        className="relative pt-32 pb-24 bg-black text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${optimizeImageUrl(
            'https://picsum.photos/seed/adp-hero/1600/900',
            { width: 1600, quality: 70 }
          )})`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mobile Auto Detailing in Albuquerque, NM
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional{' '}
            <Link to="/service/mobile-auto-detailing" className="underline hover:text-white">
              mobile detailing
            </Link>
            ,{' '}
            <Link to="/ceramic-coating" className="underline hover:text-white">
              ceramic coating
            </Link>
            , and{' '}
            <Link to="/fleet" className="underline hover:text-white">
              fleet washing
            </Link>{' '}
            that comes to your driveway, office, or job site anywhere in the metro.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Licensed &amp; Insured
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Fully Self-Contained
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Serving the Albuquerque Metro
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Get Free Quote
            </Link>
            <button
              onClick={() => handleBookNow('hero')}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10"
            >
              Book Now
            </button>
            <a
              href={getPhoneLink()}
              onClick={() => trackPhoneClick('hero')}
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-md font-semibold hover:bg-white/20"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8 text-sm">
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" /> 4.9-Star Google Rating
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Mobile-Only Service
          </span>
          <span className="flex items-center gap-2">
            <Droplets className="w-4 h-4" /> Fully Self-Contained
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Serving the Whole Metro
          </span>
        </div>
      </section>

      <HomePagePackageSelector />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Not Sure Which Package You Need?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGE_HELPER.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomepageServiceSections />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'We Come to You', text: 'No shop drop-off. We bring the full detail experience to your driveway, office, or job site.' },
            { icon: ShieldCheck, title: 'Licensed & Insured', text: 'Full peace of mind on every appointment, every time.' },
            { icon: Sparkles, title: 'Professional Products', text: 'Products chosen specifically for New Mexico sun, dust, and hard water.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Albuquerque Chooses Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Most detailing businesses import a generic process built for milder climates. We built ours
              specifically around New Mexico's high desert conditions — from the{' '}
              <Link to="/ceramic-coating" className="underline font-medium">
                UV-resistant coatings
              </Link>{' '}
              we use to the wash technique that avoids introducing swirl marks from wind-blown dust.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a fully mobile,{' '}
              <Link to="/service/mobile-auto-detailing" className="underline font-medium">
                self-contained service
              </Link>
              , we bring our own water and power, which means we can work in{' '}
              <Link to="/service-areas" className="underline font-medium">
                HOA communities and apartment complexes
              </Link>{' '}
              that restrict at-home washing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We serve businesses too, with recurring{' '}
              <Link to="/fleet" className="underline font-medium">
                fleet and dealership detailing programs
              </Link>{' '}
              that keep vehicles on the road instead of sitting at a shop.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Read more about the climate factors we account for on our{' '}
              <Link to="/blog" className="underline font-medium">
                detailing blog
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONDITION_CARDS.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <item.icon className="w-6 h-6 mb-2" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex gap-1 mb-3 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold">
                  {t.name} &mdash; {t.location}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="underline font-semibold text-sm">
              See more of our work in the gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Not Sure What a Detail Should Cost?</h2>
            <p className="text-gray-700 mb-6">
              Get our free Albuquerque detailing cost guide with average pricing for every package, so you know
              exactly what to expect before you book.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Pricing for every package tier</li>
              <li>✓ What's actually included at each price point</li>
              <li>✓ Red flags to avoid when choosing a detailer</li>
            </ul>
          </div>
          <CostGuideForm city="Albuquerque" sourcePage="/" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Proudly Serving the Albuquerque Metro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {['Albuquerque', 'Rio Rancho', 'Corrales'].map((city) => (
              <div key={city} className="rounded-lg overflow-hidden border border-gray-200 h-56">
                <iframe
                  title={`Map of ${city}`}
                  className="w-full h-full"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(city + ', NM')}&output=embed`}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/locations" className="underline font-semibold text-sm">
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for a Cleaner, Better Protected Vehicle?</h2>
          <p className="text-gray-300 mb-8">{getFullAddress()} &bull; Serving the entire Albuquerque metro</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              Get Free Quote
            </Link>
            <button
              onClick={() => handleBookNow('final-cta')}
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10"
            >
              Book Now
            </button>
            <a
              href={getPhoneLink()}
              onClick={() => trackPhoneClick('final-cta')}
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
