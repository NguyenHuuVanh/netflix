# React Project Structure

Đây là cấu trúc folder chuẩn cho dự án React Netflix Clone.

## 📁 Cấu trúc thư mục

```
src/
├── api/                    # API configuration & endpoints
│   ├── endpoints/          # API endpoints organized by feature
│   │   ├── auth.ts        # Authentication endpoints
│   │   └── movies.ts      # Movie-related endpoints
│   └── index.ts           # Export all API endpoints
│
├── assets/                 # Static assets (images, icons, etc.)
│   └── react.svg
│
├── components/             # Reusable UI components
│   ├── common/            # Common components used across the app
│   │   └── LoadingSpinner.tsx
│   ├── layout/            # Layout-specific components
│   │   └── Header.tsx
│   ├── ui/                # Basic UI components (Button, Input, etc.)
│   │   └── Button.tsx
│   └── index.ts           # Export all components
│
├── constants/              # Application constants
│   └── index.ts           # API URLs, app config, colors, etc.
│
├── contexts/              # React Context providers
│   ├── AuthContext.tsx    # Authentication context
│   └── index.ts           # Export all contexts
│
├── hooks/                 # Custom React hooks
│   ├── custom/            # Complex custom hooks
│   │   └── useFetch.ts
│   ├── useLocalStorage.ts # Simple utility hooks
│   └── index.ts           # Export all hooks
│
├── layouts/               # Page layout components
│   ├── AuthLayout.tsx     # Layout for authentication pages
│   ├── MainLayout.tsx     # Main application layout
│   └── index.ts           # Export all layouts
│
├── pages/                 # Page components (route components)
│   ├── auth/              # Authentication pages
│   │   ├── LoginPage.tsx
│   │   └── index.ts
│   ├── home/              # Home page
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   └── index.ts           # Export all pages
│
├── services/              # Business logic & external service integrations
│   ├── apiService.ts      # HTTP client configuration
│   └── index.ts           # Export all services
│
├── types/                 # TypeScript type definitions
│   └── index.ts           # Common interfaces & types
│
├── utils/                 # Utility functions
│   └── index.ts           # Helper functions, formatters, etc.
│
├── App.tsx                # Main App component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 📋 Mô tả chi tiết

### 🔧 **api/**
Chứa tất cả logic liên quan đến API calls
- `endpoints/`: Tổ chức các endpoint theo tính năng
- Sử dụng service pattern để quản lý HTTP requests

### 🎨 **components/**
Chứa các React components có thể tái sử dụng
- `ui/`: Basic components (Button, Input, Modal, etc.)
- `common/`: Shared components (LoadingSpinner, ErrorBoundary, etc.)
- `layout/`: Layout-specific components (Header, Footer, Sidebar, etc.)

### ⚙️ **hooks/**
Custom React hooks để tái sử dụng logic
- `custom/`: Complex hooks với nhiều logic
- Root level: Simple utility hooks

### 📄 **pages/**
Các components đại diện cho từng page/route
- Mỗi page có folder riêng với index.ts để export

### 🏗️ **layouts/**
Layout components bao bọc các pages
- MainLayout: Layout chính cho app
- AuthLayout: Layout cho authentication pages

### 🔧 **services/**
Business logic và tích hợp với external services
- apiService: HTTP client configuration
- Có thể thêm: authService, paymentService, etc.

### 📝 **types/**
TypeScript type definitions
- Interfaces, enums, type aliases
- Tổ chức theo tính năng hoặc domain

### 🛠️ **utils/**
Utility functions không phụ thuộc vào React
- Helper functions, formatters, validators, etc.

### 📦 **constants/**
Application-wide constants
- API URLs, configuration, colors, breakpoints, etc.

### 🌍 **contexts/**
React Context providers để quản lý global state
- AuthContext, ThemeContext, etc.

## 🚀 Sử dụng

Mỗi folder có file `index.ts` để export, giúp import dễ dàng:

```typescript
// Thay vì:
import { Button } from './components/ui/Button';
import { Header } from './components/layout/Header';

// Có thể sử dụng:
import { Button, Header } from './components';
```

## 📚 Best Practices

1. **Naming Convention**: PascalCase cho components, camelCase cho functions/variables
2. **File Structure**: Mỗi component trong file riêng
3. **Index Files**: Sử dụng index.ts để export và tạo clean imports
4. **Type Safety**: Sử dụng TypeScript interfaces và types
5. **Separation of Concerns**: Tách biệt UI logic, business logic, và data fetching
