import React from 'react';
import { netflixClasses, cn } from '../../utils/tailwind';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false
}) => {
  const getButtonClasses = () => {
    const baseClasses = netflixClasses.button[variant];
    const disabledClasses = disabled 
      ? 'opacity-50 cursor-not-allowed' 
      : '';
    
    return cn(baseClasses, disabledClasses, className);
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={getButtonClasses()}
    >
      {children}
    </button>
  );
};

export default Button;
