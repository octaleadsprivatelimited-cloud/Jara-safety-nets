import React, { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        
        let newOffset = 0;
        switch (direction) {
          case 'up':
            newOffset = rate;
            break;
          case 'down':
            newOffset = -rate;
            break;
          case 'left':
            newOffset = rate;
            break;
          case 'right':
            newOffset = -rate;
            break;
        }
        
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  const getTransform = () => {
    if (direction === 'left' || direction === 'right') {
      return `translateX(${offset}px)`;
    }
    return `translateY(${offset}px)`;
  };

  return (
    <div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        transform: getTransform(),
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
