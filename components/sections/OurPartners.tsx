'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ingredients = [
  {
    id: 1,
    title: 'Define & Design',
    description: '• Water Evaluation\n• Concept and Process Design\n• Full Engineering Design',
    color: 'bg-gradient-to-br from-yellow-400 to-amber-600',
    rotation: -5,
  },
  {
    id: 2,
    title: 'Build & Commission',
    description: '• Parts Procurement\n• Fabrication\n• Installation & Commissioning',
    color: 'bg-gradient-to-br from-pink-400 to-rose-600',
    rotation: 5,
  },
  {
    id: 3,
    title: 'Operation & Maintenance',
    description: '• Periodic Servicing\n• System Optimization\n• Chemical Dosing',
    color: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    rotation: -5,
  },
  {
    id: 4,
    title: 'Train & Support',
    description: '• Client Training\n• Technical Support\n• Regulatory Compliance Services',
    color: 'bg-gradient-to-br from-green-400 to-emerald-600',
    rotation: 5,
  },
];

export function OurPartners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const lastScrollY = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setActiveCard(null);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const card1X = useTransform(scrollYProgress, [0, 0.7], ['0%', '-50%']);
  const card1Y = useTransform(scrollYProgress, [0, 0.7], ['0%', '-50%']);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.7], [0, -5]);

  const card2X = useTransform(scrollYProgress, [0, 0.7], ['0%', '50%']);
  const card2Y = useTransform(scrollYProgress, [0, 0.7], ['0%', '-50%']);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.7], [0, 5]);

  const card3X = useTransform(scrollYProgress, [0, 0.7], ['0%', '-50%']);
  const card3Y = useTransform(scrollYProgress, [0, 0.7], ['0%', '50%']);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.7], [0, -5]);

  const card4X = useTransform(scrollYProgress, [0, 0.7], ['0%', '50%']);
  const card4Y = useTransform(scrollYProgress, [0, 0.7], ['0%', '50%']);
  const card4Rotate = useTransform(scrollYProgress, [0, 0.7], [0, 5]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7], [0, 0.3, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.35, 0.7], [0.8, 0.9, 1]);

  const transforms = [
    { x: card1X, y: card1Y, rotate: card1Rotate },
    { x: card2X, y: card2Y, rotate: card2Rotate },
    { x: card3X, y: card3Y, rotate: card3Rotate },
    { x: card4X, y: card4Y, rotate: card4Rotate },
  ];

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section
      data-page="2"
      ref={containerRef}
      className="relative h-[300vh] border-t-2 border-[#444B63]/70 touch-manipulation"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-white flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4 sm:px-6"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-300 uppercase tracking-tight text-center leading-tight">
            End-to-End Services
          </h2>
        </motion.div>

        {ingredients.map((ingredient, index) => (
          <motion.div
            key={ingredient.id}
            className={`absolute w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] md:w-[22vw] md:h-[28vw] max-w-[360px] max-h-[460px] ${ingredient.color} rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col items-start justify-start cursor-pointer transition-shadow hover:shadow-3xl`}
            style={{
              x: activeCard === ingredient.id ? 0 : transforms[index].x,
              y: activeCard === ingredient.id ? 0 : transforms[index].y,
              rotate: activeCard === ingredient.id ? 0 : transforms[index].rotate,
              zIndex: activeCard === ingredient.id ? 50 : 10,
            }}
            animate={{
              scale: activeCard === ingredient.id ? 1.15 : 1,
            }}
            transition={{
              scale: { duration: 0.3, ease: 'easeOut' },
              x: { duration: 0.3, ease: 'easeOut' },
              y: { duration: 0.3, ease: 'easeOut' },
              rotate: { duration: 0.3, ease: 'easeOut' },
            }}
            onClick={() => handleCardClick(ingredient.id)}
          >
            <h3 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-4">
              {ingredient.title}
            </h3>
            {ingredient.description && (
              <p className="text-white/95 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed whitespace-pre-line">
                {ingredient.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
