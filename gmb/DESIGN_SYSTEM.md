# GMB - UI/UX & Branding Guidelines

This document outlines the design system, branding theme, and UI/UX optimization principles for the GMB Next.js application.

## 🎨 Color Palette

The color system is built on a harmonious, premium aesthetic using soft backgrounds, strong accents, and stark contrasts for interactive elements.

### Core Brand Colors
- **Primary (Green):** `#4CAF50` — Used for main actions, primary buttons, and key interactive elements.
- **Secondary (Deep Blue):** `#1F2E5A` — Used for strong contrasting sections, secondary buttons, and text gradients.
- **Accent (Yellow):** `#F4A300` — Used for highlights, warnings, and gradient outlines to draw attention.

### Backgrounds & Foreground
- **Light Theme Background:** `#f8f7f4` (Off-white/Beige) — A warm, soft background for comfortable reading and reduced eye strain.
- **Light Theme Foreground (Text):** `#1e293b` (Slate 800)
- **Gradient Background:** `linear-gradient(160deg, #f8f7f4 0%, #E8F5E9 50%, #E8EAF6 100%)`
- **Dark Theme Overrides:** Uses `slate-900` with varying opacities (`bg-slate-900/20`, `bg-slate-900/80`) and `text-white` or `text-slate-100` to `text-slate-500` for a sleek dark mode.

## 🔤 Typography

We utilize Google Fonts to ensure modern readability and a premium feel.

- **Headings (H1 - H6):** `Outfit`, sans-serif
  - *Weights:* 700 (Bold)
  - *Styling:* Tight letter-spacing (`-0.02em`) for a clean, modern aesthetic.
- **Body Text:** `Inter`, sans-serif
  - *Styling:* Antialiased for smooth rendering across devices.

## 🧩 UI Components & Effects

The application heavily relies on modern CSS effects to create depth, interaction, and a premium vibe.

### 1. Glassmorphism
Used for overlays, floating headers, and sleek containers.
- **Background:** `rgba(255, 255, 255, 0.75)`
- **Blur:** `16px` backdrop-filter
- **Border:** `1px solid rgba(255, 255, 255, 0.9)`
- **Shadow:** Soft 8px offset shadow.

### 2. Premium Cards (`.premium-card`)
The main container for content blocks, features, and products.
- **Background:** Slightly translucent white (`rgba(255, 255, 255, 0.95)`)
- **Hover State:** Cards elevate (`translateY(-8px)`) and increase shadow depth while applying a subtle primary colored border (`rgba(76, 175, 80, 0.3)`).
- **Dark Variant (`.premium-card-dark`):** Uses deep slate backgrounds (`rgba(30, 41, 59, 0.7)`) with white translucent borders (`rgba(255, 255, 255, 0.1)`).

### 3. Gradient Texts
Used for emphasizing keywords and main headlines.
- **Standard Gradient:** Linear gradient from Primary `#4CAF50` to Secondary `#1F2E5A`.
- **Outline Gradient:** Linear gradient from Primary `#4CAF50` to Accent `#F4A300` with a transparent text fill.

## ✨ UX & Motion Principles

Optimized user experience is achieved through smooth interactions and clear feedback states.

- **Framer Motion:** Used for page transitions, scroll-reveals, and micro-interactions.
- **Hover Transitions:** All interactive elements (cards, buttons) use a `0.4s cubic-bezier(0.4, 0, 0.2, 1)` transition for smooth scaling and color shifts.
- **Accessibility:** Ensure high contrast ratios (e.g., using `text-slate-800` on light backgrounds and `text-white` on dark backgrounds).

## 🌓 Dark Mode / Theme Overrides Strategy (`scratch-theme.js`)

For specific dark sections or theme transformations, a utility approach maps standard Tailwind classes to dark alternatives:
- Text: `text-gray-900` → `text-white`, `text-gray-800` → `text-slate-100`
- Backgrounds: `bg-white` → `bg-transparent` (in padded sections), `bg-gray-50` → `bg-slate-900/20`
- Borders: `border-gray-200` → `border-white/10`
