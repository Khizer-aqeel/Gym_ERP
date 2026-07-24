# Gym ERP — React Frontend

## Directory Layout

```
02-Frontend/
├── prototype/          Original vanilla JS prototype (reference, do not modify)
├── public/             Static assets served as-is by Vite
└── src/
    ├── app/            Application shell (router, providers, layouts)
    ├── features/       Business modules (13 isolated feature slices)
    ├── shared/         Cross-cutting reusables (hooks, utils, types, constants)
    ├── design-system/  UI primitives, tokens, theme system
    ├── services/       API client, auth, storage adapters
    ├── config/         Environment, routes, permissions, feature flags
    ├── mocks/          Mock data and MSW handlers (dev/test only)
    ├── styles/         Global CSS resets and base styles
    ├── assets/         Static fonts, images, icons
    └── types/          Global TypeScript ambient declarations
```

## Architecture Principle: Feature Slice Design (FSD)

Each feature in `src/features/` is **self-contained**:

```
src/features/<feature>/
├── components/   Feature-specific React components
├── hooks/        Feature-specific custom hooks
├── services/     Feature-specific API calls
├── types/        Feature-specific TypeScript interfaces
├── validation/   Feature-specific validation schemas (Zod)
├── constants/    Feature-specific constants
└── index.ts      Public API — only export what other features are allowed to use
```

**Rules:**
- Features MUST NOT import from other features directly
- Cross-feature needs go through `src/shared/`
- UI primitives come from `src/design-system/` only — never duplicated
- All API calls go through `src/services/api/`

## Import Convention

Use `@/` aliases everywhere. Never use relative `../` paths beyond one level.

```ts
// ✅ Correct
import { Button } from '@/design-system/components/Button'
import { usePagination } from '@/shared/hooks'
import { ROUTES } from '@/config/routes'

// ❌ Wrong
import { Button } from '../../../design-system/components/Button'
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 5 |
| Language | TypeScript 5 (strict) |
| UI | React 18 |
| Routing | React Router v6 |
| Server State | TanStack Query v5 |
| Client State | Zustand v5 |
| Styling | CSS Modules |
| Dev Linting | Oxlint |
| Prod Linting | ESLint v9 (flat config) |
| Formatting | Prettier |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server on :3000
npm run build      # Type-check + production build
npm run lint       # ESLint (production gate)
npm run lint:dev   # Oxlint (fast dev check)
npm run type-check # TypeScript check only
npm run format     # Prettier format
```

## Feature Modules

| Module | Description |
|--------|-------------|
| `auth` | Login, session, RBAC |
| `dashboard` | KPI overview, charts, live feed |
| `members` | Member management |
| `attendance` | Check-in, RFID/QR scan, floor tracking |
| `subscriptions` | Membership plans & renewals |
| `payments` | Invoices & transactions |
| `equipment` | Inventory & maintenance |
| `staff` | Trainer & staff management |
| `workout-plans` | Workout program builder |
| `diet-plans` | Nutrition & diet management |
| `reports` | Analytics & reporting |
| `notifications` | Alerts & notification center |
| `settings` | App & user configuration |

## Design System

All atomic UI components live in `src/design-system/components/`.
Design tokens (colors, spacing, radius, etc.) are in `src/design-system/tokens/`.
Theme definitions (dark, light) are in `src/design-system/theme/`.

**Never hardcode colors or spacing values in feature components.**
Always reference tokens or CSS custom properties.

## Migration Reference

The `prototype/` directory contains the original vanilla HTML/CSS/JS implementation.
Use it as a visual and behavioral reference during feature migration.
Do NOT modify any files in `prototype/`.
