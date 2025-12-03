'use client';

import { useEffect, useRef } from 'react';
import { useCursorAnimation } from '@/hooks/use-cursor-animation';

export function CursorRipple() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripples = useRef<{ x: number; y: number; radius: number; alpha: number }[]>([]);
  const { isEnabled } = useCursorAnimation();

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const addRipple = (x: number, y: number) => {
      ripples.current.push({ x, y, radius: 0, alpha: 0.8 });
    };

    const handleMove = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    window.addEventListener('mousemove', handleMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((r) => {
        r.radius += 0.75;
        r.alpha -= 0.01;

        if (r.alpha > 0) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(140, 150, 180, ${r.alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      ripples.current = ripples.current.filter((r) => r.alpha > 0);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
