import React, { useState } from 'react';

interface CreativeButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'glow' | 'magnetic';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CreativeButton: React.FC<CreativeButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${baseClasses} bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`;
      case 'gradient':
        return `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl`;
      case 'glow':
        return `${baseClasses} bg-blue-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50`;
      case 'magnetic':
        return `${baseClasses} bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105`;
      default:
        return baseClasses;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      className={`${getVariantClasses()} ${getSizeClasses()} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${isHovered ? 'scale-105' : 'scale-100'}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
    >
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
          }}
        />
      ))}
      
      {/* Gradient Overlay for gradient variant */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      {/* Glow Effect for glow variant */}
      {variant === 'glow' && isHovered && (
        <div className="absolute inset-0 bg-blue-400/30 rounded-lg blur-sm -z-10" />
      )}
      
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CreativeButton;
