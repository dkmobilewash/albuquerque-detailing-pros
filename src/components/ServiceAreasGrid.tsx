import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../config/business';

export default function ServiceAreasGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {SERVICE_AREAS.map((area) => (
        <Link
          key={area.slug}
          to={`/${area.slug}`}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-black transition-colors"
        >
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm font-medium">{area.name}</span>
        </Link>
      ))}
    </div>
  );
}
