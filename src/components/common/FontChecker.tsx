import React, { useState, useEffect } from 'react';

export const FontChecker: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    const checkFonts = async () => {
      try {
        if ('fonts' in document) {
          await document.fonts.ready;
          const netflixSans = document.fonts.check('16px "Netflix Sans"');
          const bebasNeue = document.fonts.check('16px "Bebas Neue"');
          
          console.log('Netflix Sans loaded:', netflixSans);
          console.log('Bebas Neue loaded:', bebasNeue);
          
          setFontsLoaded(netflixSans && bebasNeue);
        }
      } catch (error) {
        console.error('Font loading check failed:', error);
      }
    };

    checkFonts();
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '8px 12px', 
      borderRadius: '4px',
      fontSize: '12px',
      zIndex: 1000
    }}>
      Fonts: {fontsLoaded ? '✅ Loaded' : '⏳ Loading...'}
    </div>
  );
};

export default FontChecker;
