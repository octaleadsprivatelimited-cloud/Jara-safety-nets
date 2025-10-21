import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  freezeOnceVisible?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  freezeOnceVisible = true,
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold,
    freezeOnceVisible,
  });

  const isVisible = entry?.isIntersecting || false;

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-[${duration}s]`;
    const delayClass = `delay-[${delay}ms]`;

    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
        case 'fadeInDown':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-8`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0`;
        case 'slideInUp':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-12`;
        case 'slideInDown':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-y-12`;
        case 'slideInLeft':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-12`;
        case 'slideInRight':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-12`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-95`;
        case 'bounceIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-75`;
        default:
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
      }
    } else {
      return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
