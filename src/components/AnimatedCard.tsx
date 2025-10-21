import React, { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  variant?: 'hover' | 'tilt' | 'flip' | 'glow' | 'magnetic';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  variant = 'hover',
  intensity = 'medium',
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'hover:scale-105 hover:shadow-lg';
      case 'medium':
        return 'hover:scale-110 hover:shadow-xl';
      case 'high':
        return 'hover:scale-115 hover:shadow-2xl';
      default:
        return 'hover:scale-110 hover:shadow-xl';
    }
  };

  const getVariantClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out cursor-pointer';
    
    switch (variant) {
      case 'hover':
        return `${baseClasses} ${getIntensityClasses()}`;
      case 'tilt':
        return `${baseClasses} ${getIntensityClasses()} hover:rotate-2`;
      case 'flip':
        return `${baseClasses} ${getIntensityClasses()} hover:rotate-y-180`;
      case 'glow':
        return `${baseClasses} ${getIntensityClasses()} hover:shadow-blue-500/50`;
      case 'magnetic':
        return `${baseClasses} ${getIntensityClasses()} hover:rotate-1`;
      default:
        return baseClasses;
    }
  };

  const getTiltTransform = () => {
    if (variant !== 'tilt' && variant !== 'magnetic') return '';
    
    const centerX = 150; // Assuming card width of 300px
    const centerY = 100; // Assuming card height of 200px
    
    const rotateX = (mousePosition.y - centerY) / 10;
    const rotateY = (centerX - mousePosition.x) / 10;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div
      className={`${getVariantClasses()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{
        transform: getTiltTransform(),
      }}
    >
      {/* Glow Effect */}
      {variant === 'glow' && isHovered && (
        <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm -z-10" />
      )}
      
      {/* Magnetic Effect Overlay */}
      {variant === 'magnetic' && isHovered && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />
      )}
      
      {children}
    </div>
  );
};

export default AnimatedCard;
