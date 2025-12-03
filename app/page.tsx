import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { GridOverlay } from '@/components/GridOverlay';
import { PageNumber } from '@/components/PageNumber';
import { ProgressiveBackground } from '@/components/ProgressiveBackground';
import { Projects } from '@/components/sections/Projects';
import { OurPartners } from '@/components/sections/OurPartners';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Resources } from '@/components/sections/Resources';

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
