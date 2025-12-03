'use client';

import { useState, useEffect } from 'react';

export function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'g' && e.ctrlKey) {
        e.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8">
        <div className="grid grid-cols-12 gap-4 h-full opacity-[0.05]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-r border-[#B4BED8] h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
