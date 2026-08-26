import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import {
  NAP,
  SERVICES,
  SERVICE_AREAS,
  SOCIAL_PROFILES,
  getPhoneLink,
  formatPhoneDisplay,
  getFullAddress,
} from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';

export default function Footer() {
  const { openBookingModal } = useBookingModal();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="bg-white text-black rounded px-2 py-1">ADP</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              {NAP.name} brings professional mobile auto detailing, ceramic coating, and fleet
              washing directly to your driveway across the Albuquerque metro.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_PROFILES.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_PROFILES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={`/service/${service.slug}`} className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/car-detailing" className="hover:text-white">Packages & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link to={`/${area.slug}`} className="hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{getFullAddress()}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={getPhoneLink()} className="hover:text-white">
                  {formatPhoneDisplay()}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${NAP.email}`} className="hover:text-white">
                  {NAP.email}
                </a>
              </li>
            </ul>
            <button
              onClick={openBookingModal}
              className="mt-4 w-full bg-white text-black px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {year} {NAP.name}. All rights reserved.</p>
          <p>Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
