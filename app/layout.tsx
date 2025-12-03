import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { CursorRipple } from '@/components/CursorRipple';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Recycleon Technologies',
    template: '%s | Recycleon Technologies',
  },
  description: 'End-to-end water treatment solutions including RO systems, water softeners, demineralization, ETP, STP, and comprehensive maintenance services.',
  keywords: [
    'water treatment',
    'RO systems',
    'water softener',
    'demineralization',
    'ETP',
    'STP',
    'water purification',
    'industrial water solutions',
  ],
  authors: [{ name: 'Recycleon Technologies' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Recycleon Technologies',
    title: 'Recycleon Technologies - End-to-End Water Solutions',
    description: 'Comprehensive water treatment solutions including RO systems, water softeners, demineralization, ETP, STP, and expert maintenance services.',
    images: [
      {
        url: '/images/Untitled_Artwork 25.png',
        alt: 'Recycleon Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recycleon Technologies',
    description: 'End-to-end water treatment solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <CursorRipple />
        {children}
      </body>
    </html>
  );
}
