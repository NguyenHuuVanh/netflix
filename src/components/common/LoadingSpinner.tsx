import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  className = ''
}) => {
  return (
    <div className={`loading-spinner loading-spinner--${size} ${className}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
