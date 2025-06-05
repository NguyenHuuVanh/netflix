import React from 'react';
import { Header } from '../components';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p className="netflix-light">&copy; 2025 Netflix Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
