import { generateSEO } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Contact Us',
  description: 'Get in touch with Recycleon Technologies for your water treatment needs. Contact us for water evaluation, system design, installation, maintenance, or technical support. Our experts are ready to help.',
  keywords: [
    'contact water treatment company',
    'water treatment consultation',
    'RO system installation quote',
    'water purification service',
    'ETP plant maintenance',
    'STP plant support',
    'water treatment technical support',
    'water system inquiry',
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
