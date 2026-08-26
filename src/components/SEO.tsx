import { useEffect } from 'react';
import { NAP } from '../config/business';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SEO({ title, description, keywords, canonical, noindex }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(NAP.name) ? title : `${title} | ${NAP.name}`;
    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    const canonicalUrl = canonical || `${NAP.website}${window.location.pathname}`;
    setCanonical(canonicalUrl);

    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);

    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
  }, [title, description, keywords, canonical, noindex]);

  return null;
}
