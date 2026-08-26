import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { packages } from '../data/packages';

const FEATURED_SLUGS = ['gold-standard', 'full-refresh', 'masterpiece-detail'];

export default function PopularPackages() {
  const items = FEATURED_SLUGS.map((slug) => packages.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Popular Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((pkg) => (
            <div key={pkg.slug} className="relative border border-gray-200 rounded-lg p-6 flex flex-col">
              {pkg.featured && (
                <span className="absolute -top-3 left-6 bg-black text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-bold mt-2">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{pkg.tagline}</p>
              <p className="text-sm text-gray-600 mb-4 flex-1">{pkg.shortIntro}</p>
              <ul className="space-y-2 mb-6">
                {pkg.whatsIncluded.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mb-4">{pkg.priceRange}</p>
              <Link
                to={`/${pkg.slug}`}
                className="text-center bg-black text-white py-2.5 rounded-md font-semibold hover:bg-gray-800"
              >
                View Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
