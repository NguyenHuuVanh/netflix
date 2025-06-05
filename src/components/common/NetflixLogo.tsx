import React from 'react';

interface NetflixLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const NetflixLogo: React.FC<NetflixLogoProps> = ({ 
  size = 'medium', 
  className = '' 
}) => {
  const sizeStyles = {
    small: { fontSize: '24px' },
    medium: { fontSize: '32px' },
    large: { fontSize: '48px' }
  };

  return (
    <div 
      className={`netflix-logo ${className}`}
      style={sizeStyles[size]}
    >
      <span 
        className="netflix-heading text-netflix-red"
        style={{ 
          fontFamily: '"Bebas Neue", "Netflix Sans", Arial, sans-serif',
          letterSpacing: '0.1em',
          fontWeight: 400
        }}
      >
        NETFLIX
      </span>
    </div>
  );
};

export default NetflixLogo;
