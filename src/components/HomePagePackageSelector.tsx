import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { packages, type PackageCategory } from '../data/packages';
import { useBookingModal } from '../context/BookingModalContext';

const TABS: { key: PackageCategory; label: string }[] = [
  { key: 'full-detail', label: 'Full Detail' },
  { key: 'exterior-only', label: 'Exterior Only' },
  { key: 'interior-only', label: 'Interior Only' },
];

export default function HomePagePackageSelector() {
  const [activeTab, setActiveTab] = useState<PackageCategory>('full-detail');
  const { openBookingModal } = useBookingModal();

  const activePackages = packages.filter((pkg) => pkg.category === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Choose Your Package</h2>
        <p className="text-gray-600 text-center mb-8">Nine packages built for every vehicle and budget.</p>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab.key ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {activePackages.map((pkg) => (
            <div key={pkg.slug} className="relative bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              {pkg.featured && (
                <span className="absolute -top-3 left-6 bg-black text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-bold mt-2">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{pkg.tagline}</p>
              <p className="text-sm text-gray-600 mb-4 flex-1">{pkg.shortIntro}</p>
              <ul className="space-y-2 mb-4">
                {pkg.whatsIncluded.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mb-4">{pkg.priceRange}</p>
              <div className="flex gap-2">
                <Link
                  to={`/${pkg.slug}`}
                  className="flex-1 text-center border border-black text-black py-2.5 rounded-md font-semibold hover:bg-gray-100 text-sm"
                >
                  Details
                </Link>
                <button
                  onClick={openBookingModal}
                  className="flex-1 bg-black text-white py-2.5 rounded-md font-semibold hover:bg-gray-800 text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
