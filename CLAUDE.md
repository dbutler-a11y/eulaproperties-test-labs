# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 application using the App Router with TypeScript. The application is a modern landing page for "Eula Labs" - an AI integration consultancy.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion for scroll-based animations and transitions
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber, @react-three/drei)
- **UI Components**: Custom component system using class-variance-authority for variants
- **Icons**: Lucide React
- **Build Tool**: Turbopack (enabled by default for dev and build)

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Geist fonts
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global Tailwind styles
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   │   └── Button.tsx     # Variant-based button component
│   ├── FeatureCards.tsx   # Product feature cards
│   ├── Navigation.tsx     # Site navigation
│   ├── ParticleField.tsx  # 3D particle animation background
│   ├── PricingCalculator.tsx  # Interactive pricing tool
│   └── ProcessTimeline.tsx    # Process visualization
└── lib/
    └── utils.ts          # Utility functions (cn helper for classes)
```

### Key Architecture Patterns

1. **Component-based Design**: All UI elements are modularized into reusable components
2. **Variant-driven UI**: Button component uses class-variance-authority for consistent styling variants
3. **Animation-first**: Heavy use of Framer Motion for scroll-triggered animations and micro-interactions
4. **3D Integration**: ParticleField component provides WebGL background using Three.js
5. **TypeScript Strict Mode**: Full TypeScript coverage with strict compiler options
6. **Path Aliases**: Uses `@/*` for clean imports from src directory

### Component Dependencies

- Most components import from `@/components/ui/Button` and `@/lib/utils`
- Animation components depend on framer-motion hooks (useScroll, useTransform)
- 3D components use React Three Fiber ecosystem
- All components follow the `'use client'` pattern for interactivity

### Styling System

- Tailwind CSS 4 with custom design tokens
- Gradient-heavy design using violet/purple color palette
- Responsive design with mobile-first approach
- Dark theme (slate-950 background) throughout

### Missing Components

The main page imports several components that need to be implemented:
- GuaranteeSection (imported but file not found)
- Some components in the components directory may be incomplete