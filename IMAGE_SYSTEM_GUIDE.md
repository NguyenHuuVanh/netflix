# Netflix Image Assets Management System

## Tổng quan
Hệ thống quản lý tập trung tất cả các tài nguyên hình ảnh (image assets) cho dự án Netflix React, cung cấp import và sử dụng có tổ chức qua các objects.

## Tính năng
✅ **Quản lý tập trung** - Tất cả hình ảnh được tổ chức trong một nơi  
✅ **Hỗ trợ TypeScript** - An toàn kiểu dữ liệu với proper declarations  
✅ **Tích hợp Vite** - Tối ưu hóa bundle và performance  
✅ **Nhiều pattern import** - Import cá nhân và grouped collections  
✅ **Tổ chức theo danh mục** - Hình ảnh được phân loại theo mục đích sử dụng  
✅ **Utility functions** - Các hàm tiện ích để xử lý hình ảnh  

## Danh mục hình ảnh

### 👤 Avatar Accounts (271 avatars)
**Popular Avatars (16 avatars):**
- angryMan, blue, chicken, darkBlue
- fluffyBlue, fluffyGrey, fluffyRed, fluffyYellow  
- green, kids, panda, pink, purple, red, yellow, zombi

**Other Avatars (255 avatars):**
- avatar01 đến avatar255 (hiện tại import 50 đầu tiên để tối ưu performance)

### 🖼️ Background Images (1 image)
- register: Background cho trang đăng ký

## Cách sử dụng

### Import cá nhân
```typescript
import { 
  PopularAvatars, 
  OtherAvatars, 
  BackgroundImages 
} from './components/images';

// Sử dụng
<img src={PopularAvatars.blue} alt="Blue Avatar" />
<img src={OtherAvatars.avatar01} alt="Avatar 1" />
<div style={{ backgroundImage: `url(${BackgroundImages.register})` }} />
```

### Import theo nhóm
```typescript
import { AccountAvatars, AllImages } from './components/images';

// Sử dụng nested access
<img src={AccountAvatars.Popular.red} alt="Red Avatar" />
<img src={AccountAvatars.Others.avatar05} alt="Avatar 5" />
<img src={AllImages.Avatars.Popular.kids} alt="Kids Avatar" />
```

### Import utility functions
```typescript
import { 
  getRandomAvatar, 
  getRandomPopularAvatar,
  getRandomOtherAvatar,
  getAvatarById,
  getPopularAvatarByName 
} from './components/images';

// Sử dụng
const randomAvatar = getRandomAvatar();
const avatar5 = getAvatarById(5);
const blueAvatar = getPopularAvatarByName('blue');
```

## Objects có sẵn

### PopularAvatars
```typescript
const PopularAvatars = {
  angryMan: string,
  blue: string,
  chicken: string,
  darkBlue: string,
  fluffyBlue: string,
  fluffyGrey: string,
  fluffyRed: string,
  fluffyYellow: string,
  green: string,
  kids: string,
  panda: string,
  pink: string,
  purple: string,
  red: string,
  yellow: string,
  zombi: string,
} as const;
```

### OtherAvatars
```typescript
const OtherAvatars = {
  avatar01: string,
  avatar02: string,
  // ... đến avatar50
  avatar50: string,
} as const;
```

### AccountAvatars (Combined)
```typescript
const AccountAvatars = {
  Popular: PopularAvatars,
  Others: OtherAvatars,
} as const;
```

### BackgroundImages
```typescript
const BackgroundImages = {
  register: string,
} as const;
```

### AllImages (Tất cả)
```typescript
const AllImages = {
  Avatars: AccountAvatars,
  Backgrounds: BackgroundImages,
} as const;
```

## Utility Functions

### getRandomAvatar()
Lấy một avatar ngẫu nhiên từ tất cả avatars
```typescript
const randomAvatar = getRandomAvatar();
```

### getRandomPopularAvatar()
Lấy một popular avatar ngẫu nhiên
```typescript
const popularAvatar = getRandomPopularAvatar();
```

### getRandomOtherAvatar()
Lấy một other avatar ngẫu nhiên
```typescript
const otherAvatar = getRandomOtherAvatar();
```

### getAvatarById(id: number)
Lấy avatar theo ID (1-50)
```typescript
const avatar5 = getAvatarById(5);
const avatar10 = getAvatarById(10);
```

### getPopularAvatarByName(name)
Lấy popular avatar theo tên
```typescript
const blueAvatar = getPopularAvatarByName('blue');
const pandaAvatar = getPopularAvatarByName('panda');
```

## Ví dụ sử dụng trong components

### Profile Avatar Component
```typescript
import { PopularAvatars, getRandomPopularAvatar } from './components/images';

function ProfileAvatar({ avatarType = 'blue' }) {
  const [currentAvatar, setCurrentAvatar] = useState(PopularAvatars[avatarType]);
  
  const changeToRandomAvatar = () => {
    setCurrentAvatar(getRandomPopularAvatar());
  };

  return (
    <div className="profile-avatar">
      <img 
        src={currentAvatar} 
        alt="Profile Avatar"
        className="w-16 h-16 rounded-full border-2 border-netflix-red"
      />
      <button 
        onClick={changeToRandomAvatar}
        className="mt-2 px-3 py-1 bg-netflix-red text-white rounded"
      >
        Random Avatar
      </button>
    </div>
  );
}
```

### Avatar Selector Component
```typescript
import { AccountAvatars, PopularAvatars } from './components/images';

function AvatarSelector({ onSelect }) {
  return (
    <div className="avatar-selector">
      <h3>Choose Popular Avatar:</h3>
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(PopularAvatars).map(([name, src]) => (
          <button 
            key={name}
            onClick={() => onSelect(src)}
            className="avatar-option"
          >
            <img 
              src={src} 
              alt={name}
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform"
            />
            <span className="text-xs capitalize">{name}</span>
          </button>
        ))}
      </div>
      
      <h3>Choose Other Avatar:</h3>
      <div className="grid grid-cols-6 gap-2">
        {Object.entries(AccountAvatars.Others).slice(0, 12).map(([name, src]) => (
          <button 
            key={name}
            onClick={() => onSelect(src)}
          >
            <img 
              src={src} 
              alt={name}
              className="w-10 h-10 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
```

### Background Component
```typescript
import { BackgroundImages } from './components/images';

function RegisterPage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImages.register})` }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        {/* Nội dung trang register */}
      </div>
    </div>
  );
}
```

### User Card với Random Avatar
```typescript
import { getRandomAvatar, getAvatarById } from './components/images';

function UserCard({ userId, userName }) {
  // Sử dụng userId để tạo avatar nhất quán
  const userAvatar = getAvatarById((userId % 50) + 1) || getRandomAvatar();
  
  return (
    <div className="user-card">
      <img 
        src={userAvatar} 
        alt={`${userName}'s Avatar`}
        className="w-12 h-12 rounded-full"
      />
      <span>{userName}</span>
    </div>
  );
}
```

## Type Definitions

```typescript
type PopularAvatarName = keyof typeof PopularAvatars;
type OtherAvatarName = keyof typeof OtherAvatars;
type BackgroundImageName = keyof typeof BackgroundImages;

type ImageAssets = {
  Avatars: {
    Popular: typeof PopularAvatars;
    Others: typeof OtherAvatars;
  };
  Backgrounds: typeof BackgroundImages;
};
```

## Best Practices

### ✅ Nên làm
- Sử dụng objects để tổ chức và truy cập hình ảnh
- Import chỉ những gì cần thiết để tối ưu bundle size
- Sử dụng utility functions cho logic phức tạp
- Áp dụng proper alt text cho accessibility
- Sử dụng TypeScript types để đảm bảo an toàn

### ❌ Không nên
- Import toàn bộ image system nếu không cần thiết
- Hard-code image paths thay vì sử dụng objects
- Quên thêm alt text cho images
- Sử dụng inline styles thay vì Tailwind classes

## Performance Notes

- **Lazy Loading**: Chỉ import 50 other avatars đầu tiên để tối ưu performance
- **Tree Shaking**: Vite sẽ chỉ bundle những images thực sự được sử dụng
- **Caching**: Browser sẽ cache images sau lần load đầu tiên
- **Optimization**: Có thể thêm image optimization trong tương lai

## Demo Component
Xem `ImageSystemDemo.tsx` để thấy tất cả images hoạt động với styling và tổ chức phù hợp.

## Mở rộng trong tương lai

1. **Thêm categories mới**: Movie posters, backgrounds khác
2. **Image optimization**: WebP format, responsive images
3. **Lazy loading**: Implement lazy loading cho large image sets
4. **CDN integration**: Tích hợp với CDN để tối ưu loading speed

## Trạng thái: ✅ HOÀN THÀNH

Hệ thống quản lý image assets đã được implement đầy đủ và sẵn sàng sử dụng trong production!
