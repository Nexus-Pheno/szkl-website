import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  blur?: number;
  mobileX?: number;
  className?: string;
  id?: string;
  ariaLabel?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'nav';
  once?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  scale = 1,
  rotate = 0,
  blur = 4,
  mobileX = 0,
  className,
  id,
  ariaLabel,
  style,
  as = 'div',
  once = true,
}: FadeUpProps) {
  const Tag = motion[as];
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobile = () => setIsMobile(mediaQuery.matches);

    updateMobile();
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  const revealY = isMobile ? Math.max(y, 34) : y;
  const revealScale = isMobile ? Math.min(scale, 0.975) : scale;
  const revealBlur = isMobile ? Math.max(blur, 6) : blur;
  const revealDuration = isMobile ? Math.max(duration, 0.78) : duration;

  return (
    <Tag
      className={className}
      id={id}
      aria-label={ariaLabel}
      style={style}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: isMobile ? mobileX : 0,
              y: revealY,
              scale: revealScale,
              rotate,
              filter: `blur(${revealBlur}px)`,
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: isMobile ? 0.14 : 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : revealDuration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
