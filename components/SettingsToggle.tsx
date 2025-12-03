'use client';

import { useCursorAnimation } from '@/hooks/use-cursor-animation';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SettingsToggle() {
  const { isEnabled, toggleAnimation } = useCursorAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={toggleAnimation}
        size="icon"
        variant="outline"
        className={`h-12 w-12 rounded-full shadow-lg transition-all duration-300 border-2 ${
          isEnabled
            ? 'bg-[#8C96B4] border-[#B4BED8] hover:bg-[#B4BED8] text-[#1A2436]'
            : 'bg-[#2D3748]/80 border-[#444B63] hover:bg-[#2D3748] text-[#8C96B4]'
        } backdrop-blur-sm group`}
        title={isEnabled ? 'Disable cursor animation' : 'Enable cursor animation'}
      >
        <Sparkles
          className={`h-5 w-5 transition-transform duration-300 ${
            isEnabled ? 'rotate-0 scale-110' : 'rotate-180 scale-90'
          }`}
        />
      </Button>
    </div>
  );
}
