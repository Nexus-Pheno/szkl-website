import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ShinyTextProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  gradientAngle?: number;
};

const BASE_COLOR = '#64CEFB';
const SHINE_COLOR = '#ffffff';

export function ShinyText({
  children,
  className,
  speed = 3,
  gradientAngle = 100,
}: ShinyTextProps) {
  const reduceMotion = useReducedMotion();

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(${gradientAngle}deg, ${BASE_COLOR} 0%, ${BASE_COLOR} 35%, ${SHINE_COLOR} 50%, ${BASE_COLOR} 65%, ${BASE_COLOR} 100%)`,
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <motion.span
      className={className}
      style={gradientStyle}
      initial={{ backgroundPosition: '200% 50%' }}
      animate={reduceMotion ? { backgroundPosition: '50% 50%' } : { backgroundPosition: '-200% 50%' }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: speed,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }
      }
    >
      {children}
    </motion.span>
  );
}
