import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = '/images/Untitled_Artwork 25.png',
  ogUrl,
  noIndex = false,
}: SEOProps): Metadata {
  const siteName = 'Recycleon';
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
      url: ogUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultSEO: SEOProps = {
  title: 'End-to-End Water Solutions',
  description: 'Recycleon provides comprehensive water treatment solutions including RO systems, water softeners, demineralization, ETP, STP, and more. Expert water evaluation, design, installation, and maintenance services.',
  keywords: [
    'water treatment',
    'RO systems',
    'water softener',
    'demineralization',
    'ETP',
    'STP',
    'effluent treatment',
    'sewage treatment',
    'water purification',
    'industrial water solutions',
  ],
};
