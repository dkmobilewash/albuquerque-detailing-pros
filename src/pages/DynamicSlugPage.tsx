import { useParams } from 'react-router-dom';
import LocationPage from './LocationPage';
import PackagePageTemplate from '../components/PackagePageTemplate';
import NotFoundPage from './NotFoundPage';
import { locationContent } from '../data/locations';
import { packages } from '../data/packages';

export default function DynamicSlugPage() {
  const { slug } = useParams<{ slug: string }>();

  const location = locationContent.find((loc) => loc.slug === slug);
  if (location) {
    return <LocationPage content={location} />;
  }

  const pkg = packages.find((p) => p.slug === slug);
  if (pkg) {
    return <PackagePageTemplate pkg={pkg} />;
  }

  return <NotFoundPage />;
}
