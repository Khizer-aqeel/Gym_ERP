# TAD.md — Technical Architecture Document

**Project:** Gym ERP | **Version:** 1.0 | **Status:** Active | **Owners:** Khizer & Ahad
**Last Updated:** 2026-07-24

> Engineering rules and standards are defined in [GEMINI.md](../GEMINI.md).
> This document defines what the stack is, not how to use it.

---

## 1. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Build tool | Vite 5 | ESM-native, fast HMR |
| Language | TypeScript 5 (strict) | Full strict mode enabled |
| UI framework | React 18 | Concurrent features enabled |
| Routing | React Router 6 | Client-side SPA routing |
| Server state | TanStack Query 5 | Caching, refetching, optimistic updates |
| Client state | Zustand 5 | Auth session, UI preferences |
| Styling | CSS Modules | Scoped per component, no runtime cost |
| Validation | Zod | Form and API response validation (M2+) |
| Icons | Deferred | Pending M2 design system milestone |
| Charts | Recharts | Dashboard analytics (M5+) |
| Desktop wrapper | Electron | Future milestone |
| Database | SQLite via Prisma ORM | Future milestone, local file DB |
| Dev linting | Oxlint | Sub-millisecond feedback during development |
| Prod linting | ESLint 9 (flat config) | CI gate, full ruleset |
| Formatting | Prettier 3 | LF endings, no semicolons, single quotes |
| UI skeleton generation | boneyard | https://github.com/0xGF/boneyard |
| Testing | Vitest + Testing Library | M14 milestone |

### Superseded Decisions

The following were in earlier docs but are overridden by current decisions:

| Old | Replaced With | Reason |
|---|---|---|
| Tailwind CSS | CSS Modules | Better component isolation, no runtime, no purge config |
| shadcn/ui | Custom design system | Full ownership, no third-party component lock-in |

---

## 2. File and Folder Structure

```
Gym_ERP/
├── GEMINI.md              Engineering handbook (authoritative)
├── README.md
├── docs/
│   ├── PRD.md             Product requirements (this project)
│   ├── TAD.md             Technical architecture (this document)
│   ├── SECURITY.md        Security and access control
│   ├── CHANGELOG.md       Version history
│   └── 05-Modules/        Per-feature detailed specifications
│       ├── DOC-019 Dashboard.md
│       ├── DOC-020 Members.md
│       ├── DOC-021 Trainers.md
│       ├── DOC-022 Attendance.md
│       └── DOC-023 Membership Plans.md
│
└── 02-Frontend/
    ├── prototype/         Vanilla JS prototype (reference only, do not modify)
    ├── public/            Static assets (favicon, manifest, robots)
    ├── index.html         Vite React entry point
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── eslint.config.ts
    ├── oxlint.json
    ├── .prettierrc
    ├── .env.example       Environment variable template
    ├── ARCHITECTURE.md    Developer onboarding (folder rules, import conventions)
    └── src/
        ├── app/           Router, providers, layout shells
        │   ├── router/
        │   ├── providers/
        │   └── layouts/
        ├── features/      13 isolated business modules
        │   ├── auth/
        │   ├── dashboard/
        │   ├── members/
        │   ├── attendance/
        │   ├── subscriptions/
        │   ├── payments/
        │   ├── equipment/
        │   ├── staff/
        │   ├── workout-plans/
        │   ├── diet-plans/
        │   ├── reports/
        │   ├── notifications/
        │   └── settings/
        ├── shared/        Cross-cutting reusables
        ├── design-system/ UI primitives, tokens, theme, icons
        ├── services/      API client, auth, storage, notifications
        ├── config/        Env, routes, permissions, feature flags
        ├── mocks/         Fixture data, MSW handlers (dev/test only)
        ├── styles/        Global CSS (reset, base, typography, utilities)
        ├── assets/        Static fonts, images, icons
        └── types/         Global TypeScript ambient declarations
```

Each feature slice follows this internal structure:

```
features/<feature>/
├── components/   Feature-specific React components
├── hooks/        Custom hooks (data fetching, store access)
├── services/     API service functions
├── types/        TypeScript interfaces and types
├── validation/   Zod schemas
├── constants/    Feature-specific constants
└── index.ts      Public API surface
```

---

## 3. Database Schema

**Engine:** SQLite (local file, no server required)
**ORM:** Prisma (type-safe, migration support)

### Core Tables

**Authentication**

| Table | Purpose |
|---|---|
| `Users` | System user accounts |
| `Roles` | Role definitions (Owner, Manager, Receptionist, Trainer) |
| `Permissions` | Permission definitions per module |
| `RolePermissions` | Role-to-permission mapping |
| `UserSessions` | Login sessions and tokens |

**Members**

| Table | Purpose |
|---|---|
| `Members` | Core member records (ID, name, phone, join date) |
| `MemberAttendance` | Daily check-in log |
| `MemberMemberships` | Membership history (plan, start, end, status) |
| `MemberPayments` | Payment records linked to members |
| `MemberDietPlans` | Assigned diet plan history |
| `MemberNotes` | Staff notes per member |

**Staff**

| Table | Purpose |
|---|---|
| `Trainers` | Trainer profiles |
| `TrainerSpecializations` | Specialization options |

**Operations**

| Table | Purpose |
|---|---|
| `MembershipPlans` | Plan definitions (name, duration, price, features) |
| `Equipment` | Equipment inventory |
| `EquipmentCategories` | Category taxonomy |
| `EquipmentMaintenance` | Maintenance and service records |
| `DietPlans` | Diet plan library |
| `Payments` | Payment ledger |
| `Invoices` | Invoice records |
| `Receipts` | Receipt records |

**System**

| Table | Purpose |
|---|---|
| `GymSettings` | Business configuration (name, logo, hours) |
| `ApplicationSettings` | Application preferences |
| `AuditLogs` | Critical action history |
| `ActivityLogs` | General activity log |
| `ErrorLogs` | Application error records |

### Data Integrity Rules

- Every table has a unique, non-reusable primary key
- Member records are soft-deleted only (never hard-deleted)
- Payment records are immutable (no deletion, no edit)
- Foreign key constraints enforced throughout
- Historical records preserved at all times

---

## 4. Authentication and Roles

**Strategy:** Session-based authentication (local, no external identity provider)

| Role | Access Level |
|---|---|
| Owner | Unrestricted — all modules, settings, user management, audit logs |
| Manager | Configurable by Owner — any subset of modules |
| Receptionist | Members, Attendance, Payments, Invoices, Receipts |
| Trainer | Assigned members, Diet plans, optional attendance view |

**Rules:**
- Every user must authenticate before accessing any module
- Permissions are enforced at both UI (route guards) and service layer
- Navigation shows only authorized modules
- Session tokens are stored securely (not in localStorage as plain text)
- Password storage uses bcrypt (minimum 10 rounds)
- Failed login attempts are logged

---

## 5. API and Integration Specification

**Current scope:** The frontend communicates with a local Node.js/Electron backend via IPC (inter-process communication), not HTTP. REST API is a future milestone for cloud sync.

**Architecture:**

```
React UI
  → Feature service (e.g., memberService.ts)
    → API client (src/services/api/client.ts)
      → IPC / REST endpoint
        → Prisma ORM
          → SQLite
```

**API Client conventions:**

- Base instance configured in `src/services/api/client.ts`
- All endpoint paths are constants in `src/services/api/endpoints.ts`
- Auth tokens injected via interceptors in `src/services/api/interceptors.ts`
- All errors handled centrally — no try/catch spread across components

**Future REST API (deferred):**

- RESTful design
- JSON request/response
- JWT authentication
- Versioned routes: `/api/v1/`

---

## 6. Environment Configuration

All environment variables are prefixed with `VITE_` and typed in `src/types/env.d.ts`.

| Variable | Purpose | Default |
|---|---|---|
| `VITE_APP_TITLE` | Application title | `Gym ERP` |
| `VITE_APP_ENV` | Environment | `development` |
| `VITE_API_BASE_URL` | Backend base URL | `http://localhost:8000/api/v1` |
| `VITE_API_TIMEOUT` | Request timeout (ms) | `10000` |
| `VITE_ENABLE_MOCKS` | Enable MSW mock handlers | `true` |
| `VITE_ENABLE_DEVTOOLS` | Enable React Query Devtools | `true` |

Copy `.env.example` to `.env.local` before running the dev server.
Never commit `.env.local` to version control.

**Path Aliases (registered in `vite.config.ts` and `tsconfig.json`):**

| Alias | Resolves To |
|---|---|
| `@/` | `src/` |
| `@app/` | `src/app/` |
| `@features/` | `src/features/` |
| `@shared/` | `src/shared/` |
| `@design-system/` | `src/design-system/` |
| `@services/` | `src/services/` |
| `@config/` | `src/config/` |
| `@mocks/` | `src/mocks/` |
| `@styles/` | `src/styles/` |
| `@assets/` | `src/assets/` |

---

## 7. Deployment Strategy

**Current target:** Local desktop application (Electron + SQLite)

**Packaging:**
- Electron Builder packages the React + Node.js app as a Windows installer (`.exe`)
- SQLite database file is stored locally in the user's application data directory
- No internet connection required for normal operation

**System requirements (minimum):**
- Windows 10 64-bit
- Intel Core i3 or equivalent
- 4 GB RAM
- 500 MB free disk space
- 1366×768 screen resolution

**System requirements (recommended):**
- Windows 11 64-bit
- Intel Core i5 or equivalent
- 8 GB RAM, SSD
- 1920×1080 display

**Build commands:**

```bash
npm run dev        # Development server on :3000
npm run build      # Production build (tsc + vite build)
npm run type-check # TypeScript validation only
npm run lint       # ESLint (zero warnings)
npm run lint:dev   # Oxlint (fast dev check)
```

**Post-deployment checklist:**
- Application launches successfully
- Owner account created
- Gym information configured
- Membership plans configured
- Backup and restore verified

**Backup strategy:**
- Manual database backup via Settings module
- Backup stored outside application directory
- Periodic verification of backup integrity

**Future deployment (deferred):**
- Cloud-hosted REST API
- Web-based front-end
- Multi-branch architecture
- Automatic cloud backup
