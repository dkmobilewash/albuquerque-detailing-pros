import SEO from '../components/SEO';
import { optimizeImageUrl } from '../utils/imageOptimization';

const GALLERY_ITEMS = [
  { id: 'exterior-1', label: 'Full Exterior Detail', seed: 'adp-exterior-1' },
  { id: 'interior-1', label: 'Interior Deep Clean', seed: 'adp-interior-1' },
  { id: 'ceramic-1', label: 'Ceramic Coating Finish', seed: 'adp-ceramic-1' },
  { id: 'paint-1', label: 'Paint Correction Result', seed: 'adp-paint-1' },
  { id: 'wheel-1', label: 'Wheel & Tire Detail', seed: 'adp-wheel-1' },
  { id: 'engine-1', label: 'Engine Bay Cleaning', seed: 'adp-engine-1' },
  { id: 'fleet-1', label: 'Fleet Vehicle Wash', seed: 'adp-fleet-1' },
  { id: 'headlight-1', label: 'Headlight Restoration', seed: 'adp-headlight-1' },
  { id: 'interior-2', label: 'Leather Conditioning', seed: 'adp-interior-2' },
];

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Gallery"
        description="See before-and-after photos of our mobile auto detailing, ceramic coating, and paint correction work across the Albuquerque metro."
        keywords="car detailing photos Albuquerque, before after detailing gallery"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-gray-300">A look at recent details across Albuquerque and the metro.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.id} className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src={optimizeImageUrl(`https://picsum.photos/seed/${item.seed}/800/600`, { width: 800, quality: 75 })}
                alt={item.label}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <figcaption className="p-3 text-sm font-medium bg-white">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
