# Netflix Color System Guide

## 🎨 Color Palette Overview

Netflix Color System được thiết kế với các variations của primary và secondary colors, cùng với các accent và status colors để tạo ra UI nhất quán và professional.

## 📋 Color Categories

### 🔴 Primary Colors (Netflix Red)
Netflix Red với 10+ variations từ nhạt đến đậm:

| Variant | Hex Code | Usage |
|---------|----------|--------|
| 50 | `#FEF2F2` | Very light backgrounds |
| 100 | `#FEE2E2` | Light backgrounds |
| 200 | `#FECACA` | Subtle accents |
| 300 | `#FCA5A5` | Disabled states |
| 400 | `#F87171` | Hover states |
| **500** | `#E50914` | **Main Netflix Red** |
| 600 | `#DC2626` | Active states |
| 700 | `#B91C1C` | Dark variants |
| 800 | `#991B1B` | Darker variants |
| 900 | `#7F1D1D` | Darkest variant |
| white | `#FFFFFF` | Primary white |
| black | `#000000` | Primary black |

### ⚫ Secondary Colors (Gray Scale)
Gray variations với red accents:

| Variant | Hex Code | Usage |
|---------|----------|--------|
| 50 | `#F9FAFB` | Light gray |
| 100 | `#F3F4F6` | Very light gray |
| 200 | `#E5E7EB` | Light gray borders |
| 300 | `#D1D5DB` | Gray borders |
| 400 | `#9CA3AF` | Gray text |
| **500** | `#221F1F` | **Main Netflix Gray** |
| 600 | `#4B5563` | Dark gray |
| 700 | `#374151` | Darker gray |
| 800 | `#1F2937` | Very dark gray |
| 900 | `#111827` | Almost black |
| red100 | `#FEE2E2` | Light red accent |
| red200 | `#FECACA` | Medium red accent |
| red300 | `#FCA5A5` | Strong red accent |

### 🌑 Background Colors
Specialized background colors:

| Variant | Hex Code | Usage |
|---------|----------|--------|
| primary | `#141414` | Main dark background |
| secondary | `#000000` | Pure black |
| tertiary | `#1A1A1A` | Lighter dark |
| card | `#2A2A2A` | Card backgrounds |
| modal | `#333333` | Modal backgrounds |

### 📝 Text Colors
Text color hierarchy:

| Variant | Hex Code | Usage |
|---------|----------|--------|
| primary | `#FFFFFF` | Primary white text |
| secondary | `#B3B3B3` | Secondary gray text |
| tertiary | `#8C8C8C` | Tertiary gray text |
| disabled | `#666666` | Disabled text |
| error | `#F87171` | Error messages |
| success | `#10B981` | Success messages |
| warning | `#F59E0B` | Warning messages |
| info | `#3B82F6` | Info messages |

### 🎯 Accent Colors
Vibrant colors for highlights:

| Color | Hex Code | Usage |
|-------|----------|--------|
| blue | `#0070F3` | Links, info |
| green | `#10B981` | Success, positive |
| yellow | `#F59E0B` | Warning, attention |
| purple | `#8B5CF6` | Special features |
| pink | `#EC4899` | Highlights |
| orange | `#F97316` | Notifications |

### ⚡ Status Colors
Semantic colors for states:

| Status | Hex Code | Usage |
|--------|----------|--------|
| success | `#10B981` | Success states |
| error | `#EF4444` | Error states |
| warning | `#F59E0B` | Warning states |
| info | `#3B82F6` | Info states |

### 🔲 Border Colors
Border and outline colors:

| Variant | Hex Code | Usage |
|---------|----------|--------|
| primary | `#333333` | Default borders |
| secondary | `#555555` | Lighter borders |
| light | `#666666` | Light borders |
| focus | `#E50914` | Focus states |

## 🛠️ Usage Examples

### CSS Classes
```css
/* Primary colors */
.text-primary-500 { color: #E50914; } /* Main Netflix Red */
.bg-primary-500 { background-color: #E50914; }

/* Secondary colors */
.text-secondary-500 { color: #221F1F; }
.bg-secondary-red100 { background-color: #FEE2E2; }

/* Background colors */
.bg-background-primary { background-color: #141414; }
.bg-background-card { background-color: #2A2A2A; }

/* Text colors */
.text-primary { color: #FFFFFF; }
.text-secondary { color: #B3B3B3; }

/* Status colors */
.text-status-success { color: #10B981; }
.bg-status-error { background-color: #EF4444; }
```

### TypeScript/React
```tsx
import { COLORS, getColor } from '../constants';

// Direct usage
const styles = {
  backgroundColor: COLORS.primary[500], // Netflix Red
  color: COLORS.text.primary, // White text
  border: `1px solid ${COLORS.border.primary}`, // Gray border
};

// Using utility functions
const buttonColor = getColor.primary(500); // #E50914
const textColor = getColor.text('secondary'); // #B3B3B3
```

### Component Examples
```tsx
// Button with primary color
<button className="bg-primary-500 text-primary-white">
  Netflix Button
</button>

// Card with background
<div className="bg-background-card text-primary">
  <h3 className="text-primary-500">Movie Title</h3>
  <p className="text-secondary">Description</p>
</div>

// Status message
<div className="bg-status-success text-primary">
  Success message
</div>
```

## 🎯 Best Practices

### 1. **Color Hierarchy**
- Primary 500: Main brand color (Netflix Red)
- Secondary 500: Main neutral color
- Use lighter variants (100-400) for backgrounds
- Use darker variants (600-900) for text/borders

### 2. **Contrast Guidelines**
- Ensure sufficient contrast for accessibility
- Use `getContrastColor()` utility for dynamic text colors
- Test with various background combinations

### 3. **Semantic Usage**
- Use status colors for their intended purpose
- Accent colors for highlights and special features
- Background colors for different content areas

### 4. **Consistency**
- Stick to defined color palette
- Use utility functions instead of hard-coded hex values
- Maintain color relationships across components

## 📱 Responsive Considerations

Colors work consistently across all screen sizes, but consider:
- Lighter variants for mobile touch targets
- Higher contrast for small text
- Status colors remain consistent across devices

## 🔧 Utility Functions

```tsx
import { 
  getColor, 
  getColorClass, 
  hexToRgba, 
  getContrastColor,
  netflixColors 
} from '../utils/colors';

// Get color values
const red = getColor.primary(500);
const bgColor = getColor.background('card');

// Generate CSS classes
const textClass = getColorClass.text('primary', '500');
const bgClass = getColorClass.bg('background', 'card');

// Color manipulation
const semiTransparent = hexToRgba('#E50914', 0.5);
const contrast = getContrastColor('#141414');

// Netflix shortcuts
const { red, darkBackground, textPrimary } = netflixColors;
```

## 🎨 Color Testing

Use the `<ColorDemo />` component để test và preview tất cả colors trong ứng dụng của bạn.
