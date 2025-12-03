'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cursor-animation-enabled';

export function useCursorAnimation() {
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null ? stored === 'true' : true;
  });

  const toggleAnimation = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    localStorage.setItem(STORAGE_KEY, String(newValue));
  };

  return {
    isEnabled,
    toggleAnimation,
  };
}
