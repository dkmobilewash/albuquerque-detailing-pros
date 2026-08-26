import { Routes, Route } from 'react-router-dom';
import { BookingModalProvider } from './context/BookingModalContext';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GlobalBookingModal from './components/GlobalBookingModal';

import HomePage from './pages/HomePage';
import CarDetailingPage from './pages/CarDetailingPage';
import CarDetailingPricesPage from './pages/CarDetailingPricesPage';
import FleetPage from './pages/FleetPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ThankYouPage from './pages/ThankYouPage';
import LocationsPage from './pages/LocationsPage';
import AlbuquerqueAcresPage from './pages/AlbuquerqueAcresPage';
import FleetCommercialDetailingPage from './pages/FleetCommercialDetailingPage';
import MobileAutoDetailingCityPage from './pages/MobileAutoDetailingCityPage';
import InteriorCarDetailingCityPage from './pages/InteriorCarDetailingCityPage';
import PaintProtectionCityPage from './pages/PaintProtectionCityPage';
import DynamicSlugPage from './pages/DynamicSlugPage';
import DynamicComboPage from './pages/DynamicComboPage';
import NotFoundPage from './pages/NotFoundPage';

import CeramicCoatingPage from './pages/services/CeramicCoatingPage';
import MobileAutoDetailingPage from './pages/services/MobileAutoDetailingPage';
import {
  InteriorDetailingPage,
  ExteriorDetailingPage,
  PaintCorrectionPage,
  HeadlightRestorationPage,
  EngineBayDetailingPage,
} from './pages/services/AllServicePages';

export { useBookingModal } from './context/BookingModalContext';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car-detailing" element={<CarDetailingPage />} />
      <Route path="/car-detailing-prices-albuquerque" element={<CarDetailingPricesPage />} />
      <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
      <Route path="/fleet" element={<FleetPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/albuquerque-acres" element={<AlbuquerqueAcresPage />} />

      <Route path="/mobile-auto-detailing-albuquerque-nm" element={<MobileAutoDetailingCityPage />} />
      <Route path="/interior-car-detailing-albuquerque" element={<InteriorCarDetailingCityPage />} />
      <Route path="/paint-enhancement-protection-albuquerque" element={<PaintProtectionCityPage />} />

      <Route path="/service/mobile-auto-detailing" element={<MobileAutoDetailingPage />} />
      <Route path="/service/interior-detailing" element={<InteriorDetailingPage />} />
      <Route path="/service/exterior-detailing" element={<ExteriorDetailingPage />} />
      <Route path="/service/paint-correction" element={<PaintCorrectionPage />} />
      <Route path="/service/headlight-restoration" element={<HeadlightRestorationPage />} />
      <Route path="/service/engine-bay-detailing" element={<EngineBayDetailingPage />} />

      <Route path="/:city/fleet-commercial-detailing" element={<FleetCommercialDetailingPage />} />

      {/* Programmatic single-segment pages: service area locations + package detail pages */}
      <Route path="/:slug" element={<DynamicSlugPage />} />
      {/* Programmatic two-segment pages: /:location/:service and /:packageSlug/:locationSlug */}
      <Route path="/:segmentA/:segmentB" element={<DynamicComboPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BookingModalProvider>
      <SchemaMarkup />
      <ScrollToTop />
      <Navigation />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <GlobalBookingModal />
    </BookingModalProvider>
  );
}
