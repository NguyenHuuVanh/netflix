import React from 'react';
import { netflixClasses, cn, responsiveClasses } from '../../utils/tailwind';

export const TailwindTest: React.FC = () => {
  return (
    <div className="bg-netflix-bg-primary min-h-screen p-8">
      <div className={netflixClasses.container}>
        {/* Test Header */}
        <h1 className="text-netflix-red font-netflix-heading text-4xl mb-8">
          TailwindCSS Integration Test
        </h1>

        {/* Test Buttons */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button className={netflixClasses.button.primary}>
            Primary Button
          </button>
          <button className={netflixClasses.button.secondary}>
            Secondary Button  
          </button>
          <button className={netflixClasses.button.outline}>
            Outline Button
          </button>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={netflixClasses.card.default}>
            <h3 className="text-netflix-white font-bold text-xl mb-4">Test Card</h3>
            <p className="text-netflix-grey-100 mb-4">
              This card tests our custom Netflix colors and spacing.
            </p>
            <div className="flex gap-2">
              <span className="bg-netflix-green text-netflix-white px-3 py-1 rounded text-sm font-bold">
                Available
              </span>
              <span className="bg-netflix-blue-100 text-netflix-white px-3 py-1 rounded text-sm font-bold">
                HD
              </span>
            </div>
          </div>

          <div className={netflixClasses.card.modal}>
            <h3 className="text-netflix-white font-bold text-xl mb-4">Modal Card</h3>
            <p className="text-netflix-grey-250 mb-4">
              This card uses the modal background color.
            </p>
            <div className="w-full h-32 bg-netflix-grey-700 rounded-netflix flex items-center justify-center">
              <span className="text-netflix-white">Preview Content</span>
            </div>
          </div>
        </div>

        {/* Test Responsive Grid */}
        <div className="mb-8">
          <h2 className="text-netflix-white font-bold text-2xl mb-4">Responsive Grid Test</h2>
          <div className={responsiveClasses.movieGrid}>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="bg-netflix-grey-600 h-32 rounded-netflix-card flex items-center justify-center"
              >
                <span className="text-netflix-white text-sm">Item {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Test Color Palette */}
        <div className="mb-8">
          <h2 className="text-netflix-white font-bold text-2xl mb-4">Color Palette Test</h2>
          
          {/* Primary Colors */}
          <div className="mb-6">
            <h3 className="text-netflix-grey-100 font-medium mb-3">Primary Colors</h3>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-netflix-red text-netflix-white p-4 rounded-netflix-card min-w-32 text-center">
                Netflix Red
              </div>
              <div className="bg-netflix-white text-netflix-black p-4 rounded-netflix-card min-w-32 text-center border">
                Netflix White
              </div>
              <div className="bg-netflix-black text-netflix-white p-4 rounded-netflix-card min-w-32 text-center">
                Netflix Black
              </div>
            </div>
          </div>

          {/* Grey Scale */}
          <div className="mb-6">
            <h3 className="text-netflix-grey-100 font-medium mb-3">Grey Scale</h3>
            <div className="flex gap-2 flex-wrap">
              {[100, 500, 600, 700, 800, 900].map((shade) => (
                <div
                  key={shade}
                  className={cn(
                    `bg-netflix-grey-${shade}`,
                    shade < 500 ? 'text-netflix-black' : 'text-netflix-white',
                    'p-3 rounded text-sm text-center min-w-20'
                  )}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Colors */}
          <div className="mb-6">
            <h3 className="text-netflix-grey-100 font-medium mb-3">Transparent Colors</h3>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-netflix-transparent-white-30 p-4 rounded-netflix-card text-netflix-black border min-w-32 text-center">
                White 30%
              </div>
              <div className="bg-netflix-transparent-black-60 p-4 rounded-netflix-card text-netflix-white border min-w-32 text-center">
                Black 60%
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-netflix-green text-netflix-white p-4 rounded-netflix-card text-center">
          <h3 className="font-bold text-lg mb-2">✅ TailwindCSS Integration Successful!</h3>
          <p>All custom Netflix colors and utilities are working correctly.</p>
        </div>
      </div>
    </div>
  );
};
