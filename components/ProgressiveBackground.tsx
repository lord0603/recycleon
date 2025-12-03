'use client';

import { useEffect, useState } from 'react';

const pageColors = [
  '#C5D3E8',
  '#A3B5D1',
  '#7D92B8',
  '#5C6F96',
  '#3F4D6B',
  '#2D3748',
  '#1F2632',
  '#151A24',
  '#0C0F16',
];

export function ProgressiveBackground() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-page]');

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisiblePage = currentPage;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const pageNum = entry.target.getAttribute('data-page');
            if (pageNum) {
              mostVisiblePage = parseInt(pageNum);
            }
          }
        });

        if (maxRatio > 0) {
          setCurrentPage(mostVisiblePage);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [currentPage]);

  const backgroundColor = pageColors[currentPage - 1] || pageColors[0];

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-700 ease-out"
      style={{
        backgroundColor,
      }}
    />
  );
}
