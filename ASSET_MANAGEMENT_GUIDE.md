# Hướng dẫn sử dụng Asset Management System

## Tổng quan
Dự án Netflix React hiện có 2 hệ thống quản lý assets hoàn chình:
1. **SVG Icon System** - 60+ icons được tổ chức theo categories
2. **Image Asset System** - 270+ avatars và background images

## Sử dụng kết hợp cả 2 hệ thống

### Import statement
```typescript
// Icons
import { 
  UIIcons, 
  VideoPlayerIcons, 
  NetflixLogos,
  PlayIcon,
  AccountIcon 
} from './components/icons';

// Images  
import { 
  AccountAvatars, 
  PopularAvatars,
  BackgroundImages,
  getRandomAvatar 
} from './components/images';
```

### Profile Component Example
```typescript
import React, { useState } from 'react';
import { UIIcons, AccountIcon } from './components/icons';
import { PopularAvatars, getRandomAvatar } from './components/images';

function UserProfile({ user }) {
  const [avatar, setAvatar] = useState(user.avatar || PopularAvatars.blue);
  
  return (
    <div className="user-profile">
      {/* Avatar với icon edit */}
      <div className="relative">
        <img 
          src={avatar} 
          alt="User Avatar"
          className="w-20 h-20 rounded-full"
        />
        <button className="absolute bottom-0 right-0 bg-netflix-red rounded-full p-1">
          <UIIcons.Pensil className="w-4 h-4 text-white" />
        </button>
      </div>
      
      {/* User info với account icon */}
      <div className="flex items-center gap-2 mt-3">
        <AccountIcon className="w-5 h-5 text-gray-400" />
        <span>{user.name}</span>
      </div>
      
      {/* Random avatar button */}
      <button 
        onClick={() => setAvatar(getRandomAvatar())}
        className="mt-2 flex items-center gap-2 px-3 py-1 bg-gray-800 rounded"
      >
        <UIIcons.ArrowUp className="w-4 h-4" />
        Random Avatar
      </button>
    </div>
  );
}
```

### Movie Card Example
```typescript
import React from 'react';
import { 
  MoviePreviewIcons, 
  MaturityRatings, 
  VideoQuality 
} from './components/icons';
import { BackgroundImages } from './components/images';

function MovieCard({ movie }) {
  return (
    <div 
      className="movie-card relative bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${movie.poster || BackgroundImages.register})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Movie controls */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-200">
              <MoviePreviewIcons.Play className="w-6 h-6 text-black" />
            </button>
            <button className="p-2 border border-white rounded-full hover:bg-white hover:text-black">
              <MoviePreviewIcons.Add className="w-5 h-5" />
            </button>
            <button className="p-2 border border-white rounded-full hover:bg-white hover:text-black">
              <MoviePreviewIcons.ThumbUp className="w-5 h-5" />
            </button>
          </div>
          
          <MoviePreviewIcons.Mute className="w-6 h-6 text-white" />
        </div>
        
        {/* Movie info */}
        <div className="flex items-center gap-2 mt-3">
          <MaturityRatings.PG13 className="h-5" />
          <VideoQuality.FourK className="h-5" />
        </div>
      </div>
    </div>
  );
}
```

### Video Player Component
```typescript
import React, { useState } from 'react';
import { VideoPlayerIcons } from './components/icons';
import { AccountAvatars } from './components/images';

function VideoPlayer({ userAvatar = AccountAvatars.Popular.blue }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  return (
    <div className="video-player bg-black relative">
      {/* Video content area */}
      <div className="aspect-video bg-gray-900 flex items-center justify-center">
        <span className="text-white">Video Content</span>
      </div>
      
      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center justify-between">
          {/* Left controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded"
            >
              {isPlaying ? 
                <VideoPlayerIcons.Play className="w-8 h-8 text-white" /> :
                <VideoPlayerIcons.PlayHover className="w-8 h-8 text-white" />
              }
            </button>
            
            <VideoPlayerIcons.TenSecBack className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
            <VideoPlayerIcons.TenSecForward className="w-8 h-8 text-white cursor-pointer hover:scale-110" />
            
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
            >
              {isMuted ? 
                <VideoPlayerIcons.Mute className="w-6 h-6 text-white" /> :
                <VideoPlayerIcons.Sound className="w-6 h-6 text-white" />
              }
            </button>
          </div>
          
          {/* Right controls */}
          <div className="flex items-center gap-3">
            <VideoPlayerIcons.Subtitles className="w-6 h-6 text-white cursor-pointer hover:scale-110" />
            <VideoPlayerIcons.Speed className="w-6 h-6 text-white cursor-pointer hover:scale-110" />
            
            <button 
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
            >
              <VideoPlayerIcons.FullScreen className="w-6 h-6 text-white" />
            </button>
            
            {/* User avatar */}
            <img 
              src={userAvatar} 
              alt="User Avatar"
              className="w-8 h-8 rounded-full border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Navigation Header
```typescript
import React from 'react';
import { UIIcons, NetflixLogos } from './components/icons';
import { AccountAvatars } from './components/images';

function Navigation({ currentUser }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-black">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <NetflixLogos.Medium className="h-8" />
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-white">Home</span>
          <span className="text-white">TV Shows</span>
          <span className="text-white">Movies</span>
        </div>
      </div>
      
      {/* Right side */}
      <div className="flex items-center gap-4">
        <UIIcons.Question className="w-6 h-6 text-white cursor-pointer" />
        
        <div className="relative group">
          <img 
            src={currentUser.avatar || AccountAvatars.Popular.blue} 
            alt="User Avatar"
            className="w-8 h-8 rounded cursor-pointer"
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-black border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2">
                <UIIcons.Person className="w-4 h-4" />
                <span className="text-white text-sm">Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <UIIcons.Flag className="w-4 h-4" />
                <span className="text-white text-sm">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

## Tối ưu Performance

### Lazy Loading cho Avatar Gallery
```typescript
import React, { useState, useCallback } from 'react';
import { AccountAvatars } from './components/images';

function AvatarGallery() {
  const [loadedCount, setLoadedCount] = useState(20);
  
  const loadMore = useCallback(() => {
    setLoadedCount(prev => Math.min(prev + 20, 50));
  }, []);
  
  const avatars = Object.entries(AccountAvatars.Others).slice(0, loadedCount);
  
  return (
    <div>
      <div className="grid grid-cols-10 gap-2">
        {avatars.map(([name, src]) => (
          <img 
            key={name}
            src={src} 
            alt={name}
            className="w-12 h-12 rounded-full"
            loading="lazy"
          />
        ))}
      </div>
      
      {loadedCount < 50 && (
        <button 
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-netflix-red text-white rounded"
        >
          Load More Avatars
        </button>
      )}
    </div>
  );
}
```

## Trạng thái hiện tại

✅ **SVG Icon System**: 60+ icons - HOÀN THÀNH  
✅ **Image Asset System**: 270+ images - HOÀN THÀNH  
✅ **TypeScript Support**: Đầy đủ type safety  
✅ **Build System**: Vite configuration hoạt động tốt  
✅ **Demo Components**: Có sẵn để test và tham khảo  
✅ **Documentation**: Hướng dẫn chi tiết  

Cả 2 hệ thống đã sẵn sàng sử dụng trong production và có thể được tích hợp vào bất kỳ component nào trong dự án Netflix React!
