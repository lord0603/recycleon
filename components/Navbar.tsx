'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUpRight, Menu, Grid2x2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const navLinks = ['HOME', 'SERVICES', 'PRODUCTS', 'ABOUT US'];

const navbarVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },
  visible: {
    y: 0,
    opacity: 1,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as const,
      staggerChildren: 0.08,
      delayChildren: 0.45,
      boxShadow: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

function AnimatedNavLink({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (text === 'HOME') {
      const page1 = document.querySelector('[data-page="1"]');
      if (page1) {
        page1.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (text === 'SERVICES') {
      const page2 = document.querySelector('[data-page="2"]');
      if (page2) {
        page2.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (text === 'PRODUCTS') {
      const page3 = document.querySelector('[data-page="3"]');
      if (page3) {
        page3.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (text === 'ABOUT US') {
      const page4 = document.querySelector('[data-page="4"]');
      if (page4) {
        page4.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="text-black font-medium">{text}</div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

function MobileNavLink({ text, onClick }: { text: string; onClick: () => void }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative cursor-pointer py-3 px-2 min-h-[44px] flex items-center rounded-lg transition-colors hover:bg-gray-200/50"
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={onClick}
    >
      <div className="text-slate-900 font-medium">{text}</div>
      <motion.div
        className="absolute bottom-2 left-2 right-2 h-0.5 bg-black"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

function LiquidButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <button
      className="relative overflow-hidden rounded-full border border-black px-4 py-2.5 sm:px-6 sm:py-3 min-h-[44px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="absolute inset-0 bg-black rounded-full origin-center"
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      <span className="relative z-10 font-medium text-xs sm:text-sm tracking-wide transition-colors duration-300">
        <span className={isHovered ? 'text-white' : 'text-black'}>GET IN TOUCH</span>
      </span>
    </button>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (!hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (link: string) => {
    if (link === 'HOME') {
      const page1 = document.querySelector('[data-page="1"]');
      if (page1) {
        page1.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else if (link === 'SERVICES') {
      const page2 = document.querySelector('[data-page="2"]');
      if (page2) {
        page2.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else if (link === 'PRODUCTS') {
      const page3 = document.querySelector('[data-page="3"]');
      if (page3) {
        page3.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else if (link === 'ABOUT US') {
      const page4 = document.querySelector('[data-page="4"]');
      if (page4) {
        page4.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed left-0 right-0 z-50 bg-[#E8E8E8] px-4 sm:px-6 md:px-8 lg:px-12 py-2.5 sm:py-3 touch-manipulation"
      initial="hidden"
      animate={hasAnimated ? (isVisible ? 'visible' : { y: '-100%', opacity: 1, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)' }) : controls}
      variants={navbarVariants}
      style={{ transformOrigin: 'bottom' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            className="cursor-pointer flex-shrink-0 max-w-[200px] sm:max-w-[240px] md:max-w-[280px]"
            variants={itemVariants}
            onClick={() => {
              const page1 = document.querySelector('[data-page="1"]');
              if (page1) {
                page1.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Image
              src="/images/Untitled_Artwork 25.png"
              alt="Recycleon"
              width={1080}
              height={240}
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto"
              priority
            />
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={itemVariants}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link}
                variants={itemVariants}
                transition={{ delay: 0.1 * index }}
              >
                <AnimatedNavLink text={link} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hidden md:block"
            variants={itemVariants}
          >
            <LiquidButton onClick={() => router.push('/contact')} />
          </motion.div>

          <motion.button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            variants={itemVariants}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6 text-slate-900" />
          </motion.button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-6 pb-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <MobileNavLink
                key={link}
                text={link}
                onClick={() => handleNavClick(link)}
              />
            ))}
            <div className="mt-2">
              <LiquidButton onClick={() => router.push('/contact')} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
