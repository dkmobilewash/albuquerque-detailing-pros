import PackagePageTemplate from '../components/PackagePageTemplate';
import type { Package, PackageLocation } from '../data/packages';

interface PackageLocationPageProps {
  pkg: Package;
  location: PackageLocation;
}

export default function PackageLocationPage({ pkg, location }: PackageLocationPageProps) {
  return <PackagePageTemplate pkg={pkg} locationSlug={location.slug} locationName={location.name} />;
}
