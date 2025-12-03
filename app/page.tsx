import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { GridOverlay } from '@/components/GridOverlay';
import { PageNumber } from '@/components/PageNumber';
import { ProgressiveBackground } from '@/components/ProgressiveBackground';
import { Projects } from '@/components/sections/Projects';
import { OurPartners } from '@/components/sections/OurPartners';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Resources } from '@/components/sections/Resources';
import { generateSEO } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Home',
  description: 'Recycleon Technologies provides end-to-end water treatment solutions. From water evaluation and design to installation, commissioning, and ongoing maintenance. Expert services in RO systems, demineralization, ETP, STP, and more.',
  keywords: [
    'water treatment company',
    'RO systems',
    'water softener installation',
    'demineralization plant',
    'ETP plant',
    'STP plant',
    'water purification services',
    'industrial water treatment',
    'water system maintenance',
    'water treatment solutions',
  ],
});

export default function Home() {
  return (
    <>
      <PageNumber />
      <ProgressiveBackground />
      <main className="relative">
        <GridOverlay />
        <Navbar />
        <Hero />
        <OurPartners />
        <WhyChoose />
        <Projects />
        <Resources />
      </main>
    </>
  );
}
