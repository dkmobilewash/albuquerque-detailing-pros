#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml from the site's own route data, deriving
 * each URL's <lastmod> from git history of the source file(s) that actually
 * produce its content — instead of stamping every URL with today's date on
 * every run. Re-run with: npm run sitemap
 */
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DOMAIN = 'https://www.albuquerquedetailing.com';
const TODAY = new Date().toISOString().slice(0, 10);

const fileDateCache = new Map();
const slugDateCache = new Map();

function gitDateForFile(relativePath) {
  if (fileDateCache.has(relativePath)) return fileDateCache.get(relativePath);
  let date = null;
  try {
    const out = execSync(`git log -1 --format=%cd --date=format:%Y-%m-%d -- "${relativePath}"`, {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    date = out || null;
  } catch {
    date = null;
  }
  fileDateCache.set(relativePath, date);
  return date;
}

// Finds the commit date of the change that introduced (or last touched the
// occurrence count of) a given `slug: '...'` declaration inside a data file.
// Falls back to the whole file's last-modified date if the pickaxe search
// comes up empty (e.g. the slug line was reformatted rather than added/removed).
// Matches both `slug: 'x',` and `slug: 'x' }` (the single-line object form
// used for packages.ts's location entries) since the closing quote is the
// actual delimiter — no risk of matching a longer slug sharing a prefix.
function gitDateForSlug(relativePath, slug) {
  const cacheKey = `${relativePath}::${slug}`;
  if (slugDateCache.has(cacheKey)) return slugDateCache.get(cacheKey);
  let date = null;
  try {
    const needle = `slug: '${slug}'`;
    const out = execSync(
      `git log -1 --format=%cd --date=format:%Y-%m-%d -S"${needle}" -- "${relativePath}"`,
      { cwd: ROOT, encoding: 'utf8' }
    ).trim();
    date = out || null;
  } catch {
    date = null;
  }
  if (!date) date = gitDateForFile(relativePath);
  slugDateCache.set(cacheKey, date);
  return date;
}

function laterOf(...dates) {
  const valid = dates.filter(Boolean);
  if (valid.length === 0) return TODAY;
  return valid.sort().at(-1);
}

const locations = [
  'albuquerque',
  'rio-rancho',
  'corrales',
  'north-valley',
  'tanoan',
  'paradise-hills',
  'los-ranchos',
  'sandia-heights',
];

const packageLocations = ['albuquerque', 'rio-rancho', 'corrales'];

const services = [
  'mobile-auto-detailing',
  'interior-detailing',
  'exterior-detailing',
  'paint-correction',
  'ceramic-coating',
  'headlight-restoration',
  'engine-bay-detailing',
  'fleet-commercial-detailing',
];

const packages = [
  'full-refresh',
  'gold-standard',
  'masterpiece-detail',
  'classic-exterior',
  'wax-and-buff',
  'ceramic-coating-package',
  'classic-interior',
  'deep-shampoo',
  'mold-reset',
];

const blogSlugs = [
  'how-often-should-you-detail-your-car-in-albuquerque',
  'is-ceramic-coating-worth-it-in-new-mexico',
  'paint-correction-101-removing-swirl-marks-and-scratches',
  'why-mobile-detailing-beats-driving-to-a-shop',
  'sun-and-heat-damage-protecting-your-cars-interior',
  'fleet-detailing-why-local-businesses-switch-to-mobile',
  '7-interior-detailing-mistakes-albuquerque-drivers-make',
  'ceramic-coating-vs-wax-vs-sealant',
  'hard-water-spots-on-your-car-in-albuquerque',
  'dust-and-sand-how-albuquerques-climate-attacks-your-paint',
  'the-true-cost-of-neglecting-your-cars-interior',
  'rio-rancho-mobile-detailing-fits-your-lifestyle',
  'how-to-prepare-your-car-for-a-mobile-detailing-appointment',
  'headlight-restoration-why-cloudy-lenses-are-a-safety-issue',
  'engine-bay-detailing-is-it-safe-for-your-vehicle',
  'detailing-before-you-sell-boosts-resale-value',
  'pet-hair-odor-removal-albuquerque-pet-owners-guide',
  'new-mexico-sun-uv-damage-protecting-dashboard-and-seats',
  'hoa-apartment-living-mobile-detailing-convenience',
  'winter-car-care-in-albuquerque',
  'corrales-north-valley-dust-dirt-roads-your-cars-finish',
  'choosing-the-right-detailing-package',
  'car-wash-vs-detailing-whats-the-difference',
  'what-does-a-full-car-detail-include',
  'detailing-cost-guide',
  'ceramic-coating-vs-paint-protection-film-ppf',
  'do-i-need-to-be-home-for-mobile-detailing',
  'how-to-maintain-your-car-between-professional-details',
];

const LOCATIONS_FILE = 'src/data/locations.ts';
const PACKAGES_FILE = 'src/data/packages.ts';
const SERVICE_PROFILES_FILE = 'src/data/locationServiceContent.ts';
const BLOG_FILE = 'src/data/blogPosts.ts';

const urls = [];
function add(loc, priority, changefreq, lastmod) {
  urls.push({ loc, priority, changefreq, lastmod });
}

// Static pages mapped to the file(s) whose content actually renders them.
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly', files: ['src/pages/HomePage.tsx'] },
  { path: '/car-detailing', priority: '0.9', changefreq: 'weekly', files: ['src/pages/CarDetailingPage.tsx'] },
  { path: '/ceramic-coating', priority: '0.9', changefreq: 'weekly', files: ['src/pages/services/CeramicCoatingPage.tsx'] },
  { path: '/service/mobile-auto-detailing', priority: '0.9', changefreq: 'weekly', files: ['src/pages/services/MobileAutoDetailingPage.tsx'] },
  { path: '/service/interior-detailing', priority: '0.9', changefreq: 'weekly', files: ['src/pages/services/AllServicePages.tsx'] },
  { path: '/service/exterior-detailing', priority: '0.9', changefreq: 'weekly', files: ['src/pages/services/AllServicePages.tsx'] },
  { path: '/service/paint-correction', priority: '0.9', changefreq: 'weekly', files: ['src/pages/services/AllServicePages.tsx'] },
  { path: '/service/headlight-restoration', priority: '0.8', changefreq: 'weekly', files: ['src/pages/services/AllServicePages.tsx'] },
  { path: '/service/engine-bay-detailing', priority: '0.8', changefreq: 'weekly', files: ['src/pages/services/AllServicePages.tsx'] },
  { path: '/fleet', priority: '0.8', changefreq: 'weekly', files: ['src/pages/FleetPage.tsx'] },
  { path: '/service-areas', priority: '0.8', changefreq: 'monthly', files: ['src/pages/ServiceAreasPage.tsx', LOCATIONS_FILE] },
  { path: '/mobile-auto-detailing-albuquerque-nm', priority: '0.8', changefreq: 'weekly', files: ['src/pages/MobileAutoDetailingCityPage.tsx'] },
  { path: '/interior-car-detailing-albuquerque', priority: '0.8', changefreq: 'weekly', files: ['src/pages/InteriorCarDetailingCityPage.tsx'] },
  { path: '/paint-enhancement-protection-albuquerque', priority: '0.8', changefreq: 'weekly', files: ['src/pages/PaintProtectionCityPage.tsx'] },
  { path: '/car-detailing-prices-albuquerque', priority: '0.8', changefreq: 'weekly', files: ['src/pages/CarDetailingPricesPage.tsx'] },
  { path: '/about', priority: '0.7', changefreq: 'monthly', files: ['src/pages/AboutPage.tsx'] },
  { path: '/contact', priority: '0.7', changefreq: 'monthly', files: ['src/pages/ContactPage.tsx'] },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly', files: ['src/pages/GalleryPage.tsx'] },
  { path: '/faq', priority: '0.7', changefreq: 'monthly', files: ['src/pages/FAQPage.tsx', 'src/data/services.ts'] },
  { path: '/blog', priority: '0.7', changefreq: 'weekly', files: [BLOG_FILE] },
  { path: '/locations', priority: '0.7', changefreq: 'monthly', files: ['src/pages/LocationsPage.tsx', LOCATIONS_FILE] },
  { path: '/albuquerque-acres', priority: '0.7', changefreq: 'monthly', files: ['src/pages/AlbuquerqueAcresPage.tsx'] },
];

for (const page of STATIC_PAGES) {
  const date = laterOf(...page.files.map(gitDateForFile));
  add(page.path, page.priority, page.changefreq, date);
}

// Location pages — priority 0.8 for the two primary markets, 0.7 elsewhere.
for (const slug of locations) {
  const priority = slug === 'albuquerque' || slug === 'rio-rancho' ? '0.8' : '0.7';
  const date = gitDateForSlug(LOCATIONS_FILE, slug);
  add(`/${slug}`, priority, slug === 'albuquerque' || slug === 'rio-rancho' ? 'weekly' : 'monthly', date);
}

// Package detail pages.
for (const slug of packages) {
  const date = gitDateForSlug(PACKAGES_FILE, slug);
  add(`/${slug}`, '0.8', 'weekly', date);
}

// Blog posts — each dated by when its own slug was actually added/changed.
for (const slug of blogSlugs) {
  const date = gitDateForSlug(BLOG_FILE, slug);
  add(`/blog/${slug}`, '0.7', 'monthly', date);
}

// Location + service combo pages — dated by whichever side changed more recently.
for (const locSlug of locations) {
  const locDate = gitDateForSlug(LOCATIONS_FILE, locSlug);
  for (const svcSlug of services) {
    const svcDate = gitDateForSlug(SERVICE_PROFILES_FILE, svcSlug);
    add(`/${locSlug}/${svcSlug}`, '0.6', 'monthly', laterOf(locDate, svcDate));
  }
}

// Package + location combo pages — same logic, both sides live in packages.ts.
for (const pkgSlug of packages) {
  const pkgDate = gitDateForSlug(PACKAGES_FILE, pkgSlug);
  for (const locSlug of packageLocations) {
    const locDate = gitDateForSlug(PACKAGES_FILE, locSlug);
    add(`/${pkgSlug}/${locSlug}`, '0.6', 'monthly', laterOf(pkgDate, locDate));
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${DOMAIN}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml);
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`);
