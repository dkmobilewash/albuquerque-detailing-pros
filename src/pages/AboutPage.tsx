import { Shield, MapPin, Sparkles, Users } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceAreasGrid from '../components/ServiceAreasGrid';
import { getServiceAreasString } from '../config/business';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <SEO
        title="About Us"
        description="Learn about Albuquerque Detailing Pros, a locally owned mobile auto detailing company serving the Albuquerque metro with a climate-specific approach to car care."
        keywords="about Albuquerque Detailing Pros, mobile detailing company Albuquerque"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Albuquerque Detailing Pros</h1>
          <p className="text-gray-300">
            Built specifically for New Mexico's sun, dust, and hard water — not a generic detailing checklist.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Albuquerque Detailing Pros started with a simple observation: most detailing businesses import processes
          and products designed for milder, wetter climates and apply them here without adjustment. New Mexico's
          high desert conditions — intense UV at over a mile of elevation, mineral-heavy water, and blowing dust —
          demand a different approach. We built our entire process, from wash technique to product selection,
          around what actually works in Albuquerque.
        </p>
        <h2 className="text-2xl font-bold pt-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We exist to make professional-grade vehicle care as convenient as possible while protecting vehicles from
          the specific damage this climate causes. Every appointment comes to you — no shop drop-off, no lost time.
        </p>
        <h2 className="text-2xl font-bold pt-4">Why Mobile?</h2>
        <p className="text-gray-700 leading-relaxed">
          Mobile detailing removes the biggest friction point in vehicle care: getting there. Our self-contained
          vans carry their own water and power, meaning we can detail your vehicle in a driveway, office parking
          lot, or HOA community without relying on your utilities or breaking community rules against at-home
          washing.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Licensed & Insured', text: 'Fully licensed and insured for your peace of mind.' },
            { icon: Sparkles, title: 'Climate-Specific Process', text: 'Built around New Mexico sun, dust, and hard water.' },
            { icon: MapPin, title: 'Fully Mobile', text: 'We come to your home, office, or job site.' },
            { icon: Users, title: 'Local & Family Owned', text: 'A local business serving our own community.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Where We Work</h2>
        <p className="text-gray-600 text-center mb-8">Proudly serving {getServiceAreasString()}.</p>
        <ServiceAreasGrid />
      </section>
    </div>
  );
}
