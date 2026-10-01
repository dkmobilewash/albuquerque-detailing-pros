import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookingModalProvider } from './context/BookingModalContext';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GlobalBookingModal from './components/GlobalBookingModal';

const HomePage = lazy(() => import('./pages/HomePage'));
const CarDetailingPage = lazy(() => import('./pages/CarDetailingPage'));
const CarDetailingPricesPage = lazy(() => import('./pages/CarDetailingPricesPage'));
const FleetPage = lazy(() => import('./pages/FleetPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const AlbuquerqueAcresPage = lazy(() => import('./pages/AlbuquerqueAcresPage'));
const FleetCommercialDetailingPage = lazy(() => import('./pages/FleetCommercialDetailingPage'));
const MobileAutoDetailingCityPage = lazy(() => import('./pages/MobileAutoDetailingCityPage'));
const InteriorCarDetailingCityPage = lazy(() => import('./pages/InteriorCarDetailingCityPage'));
const PaintProtectionCityPage = lazy(() => import('./pages/PaintProtectionCityPage'));
const DynamicSlugPage = lazy(() => import('./pages/DynamicSlugPage'));
const DynamicComboPage = lazy(() => import('./pages/DynamicComboPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const CeramicCoatingPage = lazy(() => import('./pages/services/CeramicCoatingPage'));
const MobileAutoDetailingPage = lazy(() => import('./pages/services/MobileAutoDetailingPage'));
const InteriorDetailingPage = lazy(() =>
  import('./pages/services/AllServicePages').then((m) => ({ default: m.InteriorDetailingPage }))
);
const ExteriorDetailingPage = lazy(() =>
  import('./pages/services/AllServicePages').then((m) => ({ default: m.ExteriorDetailingPage }))
);
const PaintCorrectionPage = lazy(() =>
  import('./pages/services/AllServicePages').then((m) => ({ default: m.PaintCorrectionPage }))
);
const HeadlightRestorationPage = lazy(() =>
  import('./pages/services/AllServicePages').then((m) => ({ default: m.HeadlightRestorationPage }))
);
const EngineBayDetailingPage = lazy(() =>
  import('./pages/services/AllServicePages').then((m) => ({ default: m.EngineBayDetailingPage }))
);

export { useBookingModal } from './context/BookingModalContext';

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
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
