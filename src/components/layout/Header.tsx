import React from 'react';
import { NetflixLogo } from '../common/NetflixLogo';

interface HeaderProps {
  title?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, className = '' }) => {
  return (
    <header className={`header ${className}`}>
      {title ? (
        <h1 className="netflix-heading">{title}</h1>
      ) : (
        <NetflixLogo size="medium" />
      )}
    </header>
  );
};

export default Header;
