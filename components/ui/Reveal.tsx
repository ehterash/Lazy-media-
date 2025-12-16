import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'rotate' | 'fade';
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  className = '',
  variant = 'up',
  duration = 1000 // Increased default duration for smoother feel
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (variant) {
      case 'up': return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0';
      case 'left': return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0';
      case 'right': return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0';
      case 'scale': return isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0';
      case 'rotate': return isVisible ? 'rotate-0 opacity-100' : 'rotate-6 opacity-0';
      case 'fade': return isVisible ? 'opacity-100' : 'opacity-0';
      default: return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div ref={ref} style={{ width, position: 'relative' }} className={className}>
      <div
        // Updated transition-timing-function to a custom "Quart Out" style for ultra smoothness
        className={`transform will-change-transform ${getTransform()}`}
        style={{ 
          transitionProperty: 'all',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0, 1)', // Super smooth curve
          transitionDelay: `${delay}ms` 
        }}
      >
        {children}
      </div>
    </div>
  );
};