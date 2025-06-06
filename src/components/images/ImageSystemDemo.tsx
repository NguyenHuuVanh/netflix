/**
 * Netflix Image System Demo Component
 * 
 * This component demonstrates how to use the Netflix image asset system.
 * It shows examples of different image categories and usage patterns.
 */

import React, { useState } from 'react';
import {
  AccountAvatars,
  PopularAvatars,
  OtherAvatars,
  BackgroundImages,
  AllImages,
  getRandomPopularAvatar,
  getRandomOtherAvatar,
  getRandomAvatar,
  getAvatarById,
  getPopularAvatarByName,
  type PopularAvatarName,
} from './index';

const ImageSystemDemo: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(PopularAvatars.blue);
  const [randomAvatar, setRandomAvatar] = useState<string>(getRandomAvatar());

  const handleRandomAvatar = () => {
    setRandomAvatar(getRandomAvatar());
  };

  const handleRandomPopularAvatar = () => {
    setRandomAvatar(getRandomPopularAvatar());
  };

  const handleRandomOtherAvatar = () => {
    setRandomAvatar(getRandomOtherAvatar());
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-netflix-red">Netflix Image System Demo</h1>
      
      {/* Background Images */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Background Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <h3 className="text-lg font-medium mb-2">Register Background</h3>
            <div 
              className="w-full h-32 bg-cover bg-center rounded-lg border border-gray-600"
              style={{ backgroundImage: `url(${BackgroundImages.register})` }}
            >
              <div className="w-full h-full bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">Register Background</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Usage: BackgroundImages.register
            </p>
          </div>
        </div>
      </section>

      {/* Popular Avatars */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Account Avatars</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-16 gap-4">
          {Object.entries(PopularAvatars).map(([name, src]) => (
            <div 
              key={name}
              className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setSelectedAvatar(src)}
            >
              <img 
                src={src} 
                alt={name}
                className={`w-12 h-12 rounded-full border-2 ${
                  selectedAvatar === src ? 'border-netflix-red' : 'border-gray-600'
                }`}
              />
              <span className="text-xs text-center mt-1 capitalize">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Usage: PopularAvatars.blue or AccountAvatars.Popular.blue
        </p>
      </section>

      {/* Other Avatars (First 20) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Other Account Avatars (Sample)</h2>
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-20 gap-3">
          {Object.entries(OtherAvatars).slice(0, 20).map(([name, src]) => (
            <div 
              key={name}
              className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setSelectedAvatar(src)}
            >
              <img 
                src={src} 
                alt={name}
                className={`w-10 h-10 rounded-full border-2 ${
                  selectedAvatar === src ? 'border-netflix-red' : 'border-gray-600'
                }`}
              />
              <span className="text-xs text-center mt-1">{name.replace('avatar', '')}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Usage: OtherAvatars.avatar01 or AccountAvatars.Others.avatar01<br/>
          Note: Showing first 20 of 50 available avatars
        </p>
      </section>

      {/* Selected Avatar Display */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Selected Avatar</h2>
        <div className="flex items-center gap-6">
          <img 
            src={selectedAvatar} 
            alt="Selected Avatar"
            className="w-24 h-24 rounded-full border-4 border-netflix-red"
          />
          <div>
            <h3 className="text-lg font-medium">Current Selection</h3>
            <p className="text-gray-400">Click any avatar above to select it</p>
          </div>
        </div>
      </section>

      {/* Random Avatar Generator */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Random Avatar Generator</h2>
        <div className="flex items-center gap-6 mb-4">
          <img 
            src={randomAvatar} 
            alt="Random Avatar"
            className="w-20 h-20 rounded-full border-4 border-green-500"
          />
          <div className="space-y-2">
            <button 
              onClick={handleRandomAvatar}
              className="block px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition-colors"
            >
              Random Avatar (Any)
            </button>
            <button 
              onClick={handleRandomPopularAvatar}
              className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Random Popular Avatar
            </button>
            <button 
              onClick={handleRandomOtherAvatar}
              className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Random Other Avatar
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          Usage: getRandomAvatar(), getRandomPopularAvatar(), getRandomOtherAvatar()
        </p>
      </section>

      {/* Usage Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utility Functions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Get Avatar by ID</h3>
            <div className="flex items-center gap-4">
              {[1, 5, 10, 15, 20].map(id => {
                const avatar = getAvatarById(id);
                return avatar ? (
                  <div key={id} className="text-center">
                    <img 
                      src={avatar} 
                      alt={`Avatar ${id}`}
                      className="w-12 h-12 rounded-full border border-gray-600"
                    />
                    <span className="text-xs">ID: {id}</span>
                  </div>
                ) : null;
              })}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Usage: getAvatarById(5)
            </p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Get Popular by Name</h3>
            <div className="flex items-center gap-4">
              {(['blue', 'red', 'green', 'panda'] as PopularAvatarName[]).map(name => (
                <div key={name} className="text-center">
                  <img 
                    src={getPopularAvatarByName(name)} 
                    alt={name}
                    className="w-12 h-12 rounded-full border border-gray-600"
                  />
                  <span className="text-xs capitalize">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Usage: getPopularAvatarByName('blue')
            </p>
          </div>
        </div>
      </section>

      {/* Nested Access Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nested Object Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">AllImages Object</h3>
            <div className="flex items-center gap-4">
              <img 
                src={AllImages.Avatars.Popular.kids} 
                alt="Kids Avatar"
                className="w-12 h-12 rounded-full border border-gray-600"
              />
              <img 
                src={AllImages.Avatars.Others.avatar05} 
                alt="Avatar 5"
                className="w-12 h-12 rounded-full border border-gray-600"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              AllImages.Avatars.Popular.kids<br/>
              AllImages.Avatars.Others.avatar05
            </p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2">AccountAvatars Object</h3>
            <div className="flex items-center gap-4">
              <img 
                src={AccountAvatars.Popular.chicken} 
                alt="Chicken Avatar"
                className="w-12 h-12 rounded-full border border-gray-600"
              />
              <img 
                src={AccountAvatars.Others.avatar10} 
                alt="Avatar 10"
                className="w-12 h-12 rounded-full border border-gray-600"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              AccountAvatars.Popular.chicken<br/>
              AccountAvatars.Others.avatar10
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mt-12 p-6 bg-gray-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Usage Instructions</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h3 className="font-medium text-white mb-2">Import Options:</h3>
            <pre className="bg-black p-3 rounded overflow-x-auto">
{`// Individual imports
import { PopularAvatars, OtherAvatars, BackgroundImages } from './components/images';

// Grouped imports
import { AccountAvatars, AllImages } from './components/images';

// Utility functions
import { getRandomAvatar, getAvatarById } from './components/images';`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-2">Usage Examples:</h3>
            <pre className="bg-black p-3 rounded overflow-x-auto">
{`// Direct access
<img src={PopularAvatars.blue} alt="Blue Avatar" />
<img src={OtherAvatars.avatar01} alt="Avatar 1" />

// Nested access
<img src={AccountAvatars.Popular.red} alt="Red Avatar" />
<img src={AllImages.Avatars.Others.avatar05} alt="Avatar 5" />

// Background images
<div style={{ backgroundImage: \`url(\${BackgroundImages.register})\` }} />

// Utility functions
const randomAvatar = getRandomAvatar();
const avatar5 = getAvatarById(5);
const blueAvatar = getPopularAvatarByName('blue');`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSystemDemo;
