# Netflix Fonts Setup Guide

## 🎨 Fonts đã được cài đặt

### Netflix Sans
- **Regular** (400) - Cho body text
- **Light** (300) - Cho secondary text  
- **Medium** (500) - Cho subtitles
- **Bold** (700) - Cho titles

### Bebas Neue
- **Regular** (400) - Cho headings và display text

## 📁 File Structure

```
src/
├── fonts.css                 # Font face declarations
├── App.css                   # Styles sử dụng fonts
├── assets/fonts/             # Font files
│   ├── NetflixSans-*.woff2   # Netflix Sans fonts
│   ├── NetflixSans-*.otf     # Netflix Sans fonts
│   └── BebasNeue-Regular.ttf # Bebas Neue font
```

## 🎯 Cách sử dụng

### CSS Classes
```css
.netflix-heading     /* Bebas Neue for headings */
.netflix-title       /* Netflix Sans Bold */
.netflix-subtitle    /* Netflix Sans Medium */
.netflix-body        /* Netflix Sans Regular */
.netflix-light       /* Netflix Sans Light */
```

### React Components
```tsx
// Sử dụng CSS classes
<h1 className="netflix-heading">NETFLIX HEADING</h1>
<h2 className="netflix-title">Title Text</h2>
<p className="netflix-body">Body content</p>
<p className="netflix-light">Secondary text</p>

// Sử dụng NetflixLogo component
<NetflixLogo size="large" />
```

### Inline Styles
```tsx
// Direct font family usage
<div style={{ fontFamily: '"Netflix Sans", Arial, sans-serif' }}>
  Content
</div>

<div style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
  Display Text
</div>
```

## 🎨 Font Weight Usage

| Weight | Usage | Class |
|--------|-------|-------|
| 300 | Secondary text, descriptions | `.netflix-light` |
| 400 | Body text, paragraphs | `.netflix-body` |
| 500 | Subtitles, emphasis | `.netflix-subtitle` |
| 700 | Titles, headings | `.netflix-title` |

## 🖼️ Examples

### Hero Section
```tsx
<section className="hero-section">
  <h1 className="netflix-heading">UNLIMITED MOVIES</h1>
  <p className="netflix-light">Watch anywhere. Cancel anytime.</p>
  <button className="cta-button">Get Started</button>
</section>
```

### Button Styles
```tsx
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="cta-button">CTA Button</button>
```

### Form Elements
```tsx
<input 
  className="netflix-input" 
  placeholder="Email address"
  type="email" 
/>
```

## 🎯 Font Loading

- Fonts được load thông qua `fonts.css`
- Sử dụng `font-display: swap` để tối ưu performance
- Fallback fonts: Arial, sans-serif
- `FontChecker` component để kiểm tra font loading status

## 🚀 Best Practices

1. **Hierarchy**: Sử dụng Bebas Neue cho headings chính, Netflix Sans cho content
2. **Contrast**: Light weight (300) cho secondary text, Bold (700) cho emphasis
3. **Performance**: Fonts được preload và optimize với woff2
4. **Accessibility**: Maintain proper contrast ratios với Netflix colors

## 🎨 Color Combinations

```css
/* Netflix Red on Dark Background */
.text-netflix-red { color: #E50914; }
.bg-netflix-dark { background-color: #141414; }

/* White text on Netflix backgrounds */
.text-white { color: #ffffff; }
.bg-netflix-gray { background-color: #221F1F; }
```

## 📱 Responsive Typography

Fonts tự động scale trên mobile:
- Hero headings: 48px → 36px
- Body text: 18px → 16px
- Secondary text: 16px → 14px
