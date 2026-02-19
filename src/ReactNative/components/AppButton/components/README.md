# AppButton Components

This folder contains child components used within the AppButton component.

---

## 📁 Structure

```
components/
├── README.md           # This file
├── index.ts            # Exports all components
└── AppButtonIcon.tsx   # Icon rendering component
```

---

## 🧩 Components

### AppButtonIcon

**Purpose:** Handles icon rendering for AppButton

**Props:**
```typescript
interface AppButtonIconProps {
  icon: 'plus' | 'document' | React.ReactNode | string;
  fill: string;
}
```

**Usage:**
```tsx
import {AppButtonIcon} from './components';

<AppButtonIcon icon="plus" fill="#007AFF" />
<AppButtonIcon icon={<CustomIcon />} fill="#FF3B30" />
```

**Features:**
- Predefined SVG icons (plus, document)
- Custom React nodes support
- Fill color customization
- TypeScript typed

**Tests:** `__tests__/AppButtonIcon.test.tsx` (18 tests)

---

## 🚀 Adding New Components

### Step 1: Create Component File

```tsx
// components/AppButtonLoader.tsx
import React from 'react';
import { ActivityIndicator } from 'react-native';

interface AppButtonLoaderProps {
  color: string;
  size?: 'small' | 'large';
}

const AppButtonLoader: React.FC<AppButtonLoaderProps> = ({ color, size = 'small' }) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default AppButtonLoader;
```

### Step 2: Export from index.ts

```typescript
// components/index.ts
export { default as AppButtonIcon } from './AppButtonIcon';
export { default as AppButtonLoader } from './AppButtonLoader'; // Add this
```

### Step 3: Use in AppButton

```tsx
// AppButton.tsx
import {AppButtonIcon, AppButtonLoader} from './components';

// Use in render:
{isLoading && <AppButtonLoader color={textStyle?.color} />}
```

### Step 4: Add Tests

```tsx
// __tests__/AppButtonLoader.test.tsx
describe('AppButtonLoader', () => {
  it('should render loader with color', () => {
    // Test implementation
  });
});
```

---

## 📋 Component Checklist

When adding a new component, ensure:

- [ ] Component file created in `components/`
- [ ] Exported from `components/index.ts`
- [ ] TypeScript interfaces defined
- [ ] Props documented
- [ ] Used in AppButton.tsx
- [ ] Tests created in `__tests__/`
- [ ] README.md updated

---

## 🎯 Design Principles

### Single Responsibility
Each component should have one clear purpose:
- **AppButtonIcon**: Icon rendering
- **AppButtonLoader**: Loading indicator (future)
- **AppButtonRipple**: Press animation (future)

### Composition
Components compose together to build the full button:
```tsx
<TouchableOpacity>
  <Row>
    {isLoading && <AppButtonLoader />}
    {iconBefore && <AppButtonIcon />}
    <AppText>{children}</AppText>
  </Row>
</TouchableOpacity>
```

### Reusability
Components should be reusable outside AppButton when it makes sense.

---

## 💡 Future Components

### Potential additions:

1. **AppButtonLoader.tsx**
   - Custom loading indicators
   - Different loading styles (spinner, dots, skeleton)
   - Animation support

2. **AppButtonRipple.tsx**
   - Material Design ripple effect
   - Custom press animations
   - Platform-specific feedback

3. **AppButtonBadge.tsx**
   - Notification badges
   - Counter badges
   - Status indicators

4. **AppButtonGroup.tsx**
   - Button group wrapper
   - Segmented controls
   - Radio button groups

---

## 📚 Related Documentation

- **Main Component:** `../AppButton.tsx`
- **Tests:** `../__tests__/`
- **Accessibility:** `../ACCESSIBILITY.md`
- **Refactoring:** `../REFACTORING_SUMMARY.md`

---

**Last Updated:** February 2026
**Maintainer:** [Your team]
