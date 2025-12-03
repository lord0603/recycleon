'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'framer-motion';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 100,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear' as const,
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden'>
      <motion.div
        className={cn('absolute', className)}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          filter: 'blur(20px)',
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
