'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Industry {
  id: number;
  title: string;
  description: string;
  image: string;
}

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -20]);

  return (
    <motion.div
      ref={cardRef}
      className="mb-6 md:mb-0 md:sticky min-h-[450px] md:h-[520px] bg-white rounded-2xl md:rounded-[40px] border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden touch-manipulation"
      style={{
        top: `calc(10vh + (${index} * 20px))`,
        opacity,
        scale,
        y,
      }}
    >
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center mb-4 md:mb-auto flex-shrink-0">
          <span className="text-sm md:text-base text-gray-600 font-medium">{industry.id}</span>
        </div>

        <div className="flex items-start my-4 md:my-auto">
          <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#00A896] rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 leading-tight">{industry.title}</h3>
        </div>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mt-4 md:mt-6">
          {industry.description}
        </p>
      </div>

      <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-full overflow-hidden">
        <motion.img
          src={industry.image}
          alt={industry.title}
          className="h-full w-full object-cover rounded-b-2xl md:rounded-b-none md:rounded-r-[40px]"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            scale: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1.1, 1, 1, 1.05]),
          }}
        />
      </div>
    </motion.div>
  );
}

export function WhyChoose() {
  const industries: Industry[] = [
    {
      id: 1,
      title: 'Purified water systems & EDI',
      description: '',
      image: '/images/purified water systems and EDI photo.png'
    },
    {
      id: 2,
      title: 'Zero Liquid Discharge',
      description: '',
      image: '/images/0726af78-0120-43e4-8474-f117a9003f64.png'
    },
    {
      id: 3,
      title: 'Effluent treatment plant',
      description: '',
      image: '/images/ETP.png'
    },
    {
      id: 4,
      title: 'Sewage treatment plant',
      description: '',
      image: '/images/STP.png'
    },
    {
      id: 5,
      title: 'Demineralization plants',
      description: '',
      image: '/images/demineralization.png'
    },
    {
      id: 6,
      title: 'Ultra and Nano filtration plants',
      description: '',
      image: '/images/Ultra and nano.png'
    },
    {
      id: 7,
      title: 'Reverse Osmosis and Softener plants',
      description: '',
      image: '/images/RO + water softener treatment.png'
    }
  ];

  return (
    <section data-page="3" className="relative min-h-screen border-t-2 border-[#444B63]/70 touch-manipulation" style={{ backgroundColor: '#B8C6DB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <motion.div
          className="mb-12 sm:mb-14 md:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 md:mb-8 leading-tight">
            Our Products
          </h3>
        </motion.div>

        <div className="space-y-6 md:space-y-0">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
