'use client';

import { useState, useEffect } from 'react';

const carouselImages = [
  '/images/3fa48393-1b5c-4cd3-8a5b-afb035c71698.png',
  '/images/6a48020a-3fc9-4667-8f88-d0c8cf6be9af.png',
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section data-page="1" className="relative min-h-[100svh] flex items-center touch-manipulation" style={{ backgroundColor: '#B8C6DB' }}>
      {carouselImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 z-10 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6A708A]/30 to-transparent z-20" />
      <div className="hidden">
        {carouselImages.map((image) => (
          <link key={image} rel="preload" as="image" href={image} />
        ))}
      </div>
    </section>
  );
}
