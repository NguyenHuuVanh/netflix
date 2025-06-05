# TailwindCSS Quick Usage Guide

## 🚀 How to Use TailwindCSS in Netflix Project

### Import Utilities
```typescript
import { netflixClasses, cn, responsiveClasses } from '../utils/tailwind';
```

### Common Patterns

#### 1. Netflix Red Button
```tsx
<button className={netflixClasses.button.primary}>
  Watch Now
</button>
```

#### 2. Movie Card
```tsx
<div className={netflixClasses.card.default}>
  <h3 className="text-netflix-white font-bold text-lg mb-2">Movie Title</h3>
  <p className="text-netflix-grey-100 text-sm">Movie description...</p>
</div>
```

#### 3. Responsive Movie Grid
```tsx
<div className={responsiveClasses.movieGrid}>
  {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
</div>
```

#### 4. Netflix Background
```tsx
<div className="bg-netflix-bg-primary min-h-screen">
  <div className={netflixClasses.container}>
    {/* Content */}
  </div>
</div>
```

#### 5. Combining Classes
```tsx
<div className={cn(
  'bg-netflix-bg-card',
  'hover:bg-netflix-grey-700',
  'transition-colors duration-200',
  'rounded-netflix-card p-4'
)}>
  Interactive Element
</div>
```

### Color Classes Quick Reference

#### Backgrounds
- `bg-netflix-red` - Main Netflix red
- `bg-netflix-bg-primary` - Dark background (#141414)
- `bg-netflix-bg-card` - Card background (#2A2A2A)
- `bg-netflix-grey-800` - Dark grey background

#### Text Colors
- `text-netflix-white` - White text
- `text-netflix-red` - Netflix red text
- `text-netflix-grey-100` - Light grey text
- `text-netflix-grey-250` - Medium grey text

#### Responsive Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Tips
1. Use `netflixClasses` for consistent component styling
2. Use `cn()` helper to combine conditional classes
3. Use responsive classes for mobile-first design
4. Prefer TailwindCSS classes over custom CSS when possible
