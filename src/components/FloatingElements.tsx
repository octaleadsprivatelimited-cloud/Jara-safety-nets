import React, { useEffect, useRef } from 'react';

interface FloatingElementsProps {
  count?: number;
  colors?: string[];
  size?: 'small' | 'medium' | 'large';
  speed?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 6,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
  size = 'medium',
  speed = 1,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements: HTMLDivElement[] = [];

    // Create floating elements
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      
      const sizeClasses = {
        small: 'w-2 h-2',
        medium: 'w-4 h-4',
        large: 'w-6 h-6'
      };
      
      element.className += ` ${sizeClasses[size]} rounded-full absolute opacity-20`;
      element.style.backgroundColor = colors[i % colors.length];
      
      // Random initial position
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      element.style.animationDelay = `${Math.random() * 5}s`;
      element.style.animationDuration = `${3 + Math.random() * 4}s`;
      
      container.appendChild(element);
      elements.push(element);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      .floating-element {
        animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(-10px) translateX(-10px) rotate(180deg);
        }
        75% {
          transform: translateY(-30px) translateX(5px) rotate(270deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      elements.forEach(el => el.remove());
      document.head.removeChild(style);
    };
  }, [count, colors, size, speed]);

  return (
    <div
      ref={containerRef}
      className={`floating-elements-container absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  );
};

export default FloatingElements;
