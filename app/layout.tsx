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
  title: 'Recycleon - Industrial & Municipal Water Treatment Solutions',
  description: 'Top-rated water treatment company in India. We provide advanced water recycling, STP, and ETP solutions for factories and cities.',
  keywords: ['water treatment India', 'industrial water recycling', 'sewage treatment plant', 'Recycleon', 'STP', 'ETP', 'water recycling solutions', 'industrial wastewater treatment'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  openGraph: {
    title: 'Recycleon - Industrial & Municipal Water Treatment Solutions',
    description: 'Top-rated water treatment company in India. We provide advanced water recycling, STP, and ETP solutions for factories and cities.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
