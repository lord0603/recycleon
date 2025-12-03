'use client';

import { useEffect, useState, RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollStart = rect.top + window.scrollY - viewportHeight;
      const scrollEnd = rect.top + window.scrollY + elementHeight;
      const scrollDistance = scrollEnd - scrollStart;

      const currentScroll = window.scrollY;
      const scrolled = currentScroll - scrollStart;

      const progressValue = Math.max(0, Math.min(1, scrolled / scrollDistance));
      setProgress(progressValue);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}
