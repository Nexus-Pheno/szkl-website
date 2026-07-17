import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  blur?: number;
  className?: string;
  id?: string;
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
  className,
  id,
  style,
  as = 'div',
  once = true,
}: FadeUpProps) {
  const Tag = motion[as];
  const shouldReduceMotion = useReducedMotion();

  return (
    <Tag
      className={className}
      id={id}
      style={style}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y, scale, rotate, filter: `blur(${blur}px)` }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
