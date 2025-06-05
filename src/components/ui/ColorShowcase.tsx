import React from 'react';
import { netflixClasses, cn } from '../../utils/tailwind';

export const ColorShowcase: React.FC = () => {
  return (
    <div className="bg-netflix-white p-6">
      <h2 className="font-netflix-heading text-netflix-red text-3xl mb-6">
        Netflix Color System Showcase
      </h2>

      {/* Buttons with TailwindCSS */}
      <div className="flex gap-3 mb-6 flex-wrap">
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

      {/* Cards with TailwindCSS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className={cn(netflixClasses.card.default, "bg-netflix-bg-card")}>
          <h3 className="text-netflix-white font-bold text-lg mb-2">Movie Card</h3>
          <p className="text-netflix-grey-100 text-sm leading-relaxed">
            This is a sample movie card using TailwindCSS with our custom Netflix colors.
          </p>
          <div className="mt-4">
            <span className="bg-netflix-green text-netflix-white px-2 py-1 rounded text-xs font-bold">
              HD
            </span>
          </div>
        </div>

        <div className={cn(netflixClasses.card.modal, "bg-netflix-bg-modal")}>
          <h3 className="text-netflix-white font-bold text-lg mb-2">Featured Content</h3>
          <p className="text-netflix-grey-250 text-sm leading-relaxed">
            This card uses TailwindCSS modal background with custom Netflix styling.
          </p>
          <div className="mt-4">
            <span className="bg-netflix-blue-100 text-netflix-white px-2 py-1 rounded text-xs font-bold">
              TRENDING
            </span>
          </div>
        </div>
      </div>

      {/* Status indicators with TailwindCSS */}
      <div className="flex gap-4 items-center flex-wrap mb-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-netflix-green"></div>
          <span className="text-netflix-grey-100 text-sm">Available</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-netflix-red-200"></div>
          <span className="text-netflix-grey-100 text-sm">Limited Time</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-netflix-red"></div>
          <span className="text-netflix-grey-100 text-sm">Unavailable</span>
        </div>
      </div>

      {/* Color palette demonstration */}
      <div className="space-y-6">
        <h3 className="text-netflix-white font-bold text-xl">TailwindCSS Color Classes</h3>
        
        {/* Primary colors */}
        <div>
          <h4 className="text-netflix-grey-100 font-medium mb-3">Primary Colors</h4>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-netflix-red text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-red
            </div>
            <div className="bg-netflix-white text-netflix-black p-4 rounded-netflix-card border">
              .bg-netflix-white
            </div>
            <div className="bg-netflix-black text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-black
            </div>
          </div>
        </div>

        {/* Secondary colors */}
        <div>
          <h4 className="text-netflix-grey-100 font-medium mb-3">Secondary Colors</h4>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-netflix-red-100 text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-red-100
            </div>
            <div className="bg-netflix-blue-100 text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-blue-100
            </div>
            <div className="bg-netflix-green text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-green
            </div>
          </div>
        </div>

        {/* Neutral colors */}
        <div>
          <h4 className="text-netflix-grey-100 font-medium mb-3">Neutral Colors</h4>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-netflix-grey-100 text-netflix-black p-4 rounded-netflix-card">
              .bg-netflix-grey-100
            </div>
            <div className="bg-netflix-grey-500 text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-grey-500
            </div>
            <div className="bg-netflix-grey-800 text-netflix-white p-4 rounded-netflix-card">
              .bg-netflix-grey-800
            </div>
          </div>
        </div>        {/* Transparent colors */}
        <div>
          <h4 className="text-netflix-grey-100 font-medium mb-3">Transparent Colors</h4>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-netflix-transparent-white-30 p-4 rounded-netflix-card text-netflix-black border">
              .bg-netflix-transparent-white-30
            </div>
            <div className="bg-netflix-transparent-black-60 p-4 rounded-netflix-card text-netflix-white border">
              .bg-netflix-transparent-black-60
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
