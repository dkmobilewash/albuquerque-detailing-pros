import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAP, getPhoneLink, formatPhoneDisplay } from '../config/business';
import { useBookingModal } from '../context/BookingModalContext';
import { trackPhoneClick, trackBookNowClick } from '../utils/analytics';

const NAV_LINKS = [
  { label: 'Mobile Detailing Services', to: '/' },
  { label: 'Ceramic Coating', to: '/ceramic-coating' },
  { label: 'Fleet & Dealership Washing', to: '/fleet' },
  { label: 'Locations', to: '/locations' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const location = useLocation();

  const handleBookNow = () => {
    trackBookNowClick('navigation');
    openBookingModal();
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#000000]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg lg:text-xl">
            <span className="bg-white text-black rounded px-2 py-1">ADP</span>
            <span className="hidden sm:inline">{NAP.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={getPhoneLink()}
              onClick={() => trackPhoneClick('navigation')}
              className="flex items-center gap-2 text-white text-sm font-semibold hover:text-gray-300"
            >
              <Phone className="w-4 h-4" />
              {formatPhoneDisplay()}
            </a>
            <button
              onClick={handleBookNow}
              className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Book Now
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-4 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium ${
                location.pathname === link.to ? 'text-white' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={getPhoneLink()}
            onClick={() => trackPhoneClick('mobile-navigation')}
            className="flex items-center gap-2 text-white font-semibold"
          >
            <Phone className="w-4 h-4" />
            {formatPhoneDisplay()}
          </a>
          <button
            onClick={handleBookNow}
            className="w-full bg-white text-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
