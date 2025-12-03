'use client';

import { useEffect, useState } from 'react';

export function PageNumber() {
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

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none flex items-center">
      <div className="text-black font-mono text-base tracking-wider">
        {currentPage.toString().padStart(2, '0')}
      </div>
    </div>
  );
}
