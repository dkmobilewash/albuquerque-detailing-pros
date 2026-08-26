import { useParams } from 'react-router-dom';
import LocationServicePage from './LocationServicePage';
import PackageLocationPage from './PackageLocationPage';
import NotFoundPage from './NotFoundPage';
import { locationContent } from '../data/locations';
import { serviceProfiles } from '../data/locationServiceContent';
import { packages, locations } from '../data/packages';

export default function DynamicComboPage() {
  const { segmentA, segmentB } = useParams<{ segmentA: string; segmentB: string }>();

  // Case 1: /:location/:service (e.g. /albuquerque/interior-detailing)
  const location = locationContent.find((loc) => loc.slug === segmentA);
  const service = serviceProfiles.find((s) => s.slug === segmentB);
  if (location && service) {
    return <LocationServicePage location={location} service={service} />;
  }

  // Case 2: /:packageSlug/:locationSlug (e.g. /gold-standard/albuquerque)
  const pkg = packages.find((p) => p.slug === segmentA);
  const pkgLocation = locations.find((l) => l.slug === segmentB);
  if (pkg && pkgLocation) {
    return <PackageLocationPage pkg={pkg} location={pkgLocation} />;
  }

  return <NotFoundPage />;
}
