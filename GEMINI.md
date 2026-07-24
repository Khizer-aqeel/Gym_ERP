# GEMINI.md — Gym ERP Engineering Handbook

**Version:** 1.0 | **Status:** Active | **Owners:** Khizer & Ahad

This document is the authoritative engineering standard for the Gym ERP repository.
Every task, decision, and implementation must comply with the rules defined here.

---

## 1. Project Philosophy

Gym ERP is a commercial-grade, enterprise Gym Management System.

Every implementation decision must optimize for:

- **Centralization** — one source of truth for every concept
- **Reusability** — build once, use everywhere
- **Scalability** — assume 100+ screens, 500+ components, 20+ developers
- **Maintainability** — future developers must understand code immediately
- **Consistency** — identical patterns across all modules
- **Simplicity** — minimum code that fully solves the problem
- **Separation of Concerns** — UI, business logic, and data never mixed
- **Low Coupling** — features do not depend on each other directly
- **High Cohesion** — related code lives together

Nothing is built for "today only." Every implementation must support future expansion without major architectural changes.

---

## 2. Centralization Rules

Anything reused more than once **must exist only once**.

| Category | Central Location |
|---|---|
| Colors, spacing, radius, shadows, z-index | `src/design-system/tokens/` |
| Theme definitions | `src/design-system/theme/` |
| Atomic UI components | `src/design-system/components/` |
| Icons | `src/design-system/icons/` |
| Shared hooks | `src/shared/hooks/` |
| Shared utilities | `src/shared/utils/` |
| Shared types | `src/shared/types/` |
| Shared validation | `src/shared/validation/` |
| Shared constants | `src/shared/constants/` |
| API client & endpoints | `src/services/api/` |
| Auth service | `src/services/auth/` |
| Routes | `src/config/routes.ts` |
| Permissions | `src/config/permissions.ts` |
| Feature flags | `src/config/featureFlags.ts` |
| Env variables | `src/config/env.ts` |

**Hardcoded values are prohibited everywhere.**

---

## 3. Design System Rules

- All atomic UI components live in `src/design-system/components/` exclusively.
- Feature modules **never** create duplicate UI components.
- If a UI element is needed in more than one feature, it belongs in the design system.
- Components in the design system have no knowledge of business domain.
- The design system is consumed via `@/design-system/*` imports only.

### UI Skeleton Generation

The official UI skeleton generation approach for this repository is:
**https://github.com/0xGF/boneyard**

All future UI scaffolding must follow the boneyard standard.

---

## 4. Theme Rules

Never hardcode:

- Colors
- Font sizes
- Line heights
- Font weights
- Border radius values
- Box shadow values
- Breakpoints
- Z-index values
- Animation durations
- Transition timings
- Opacity values
- Spacing values

All values must reference centralized design tokens in `src/design-system/tokens/`.

The application must support Light, Dark, and Custom themes **without modifying any component code**. Theme switching is handled exclusively through CSS custom properties and the theme system in `src/design-system/theme/`.

> **Note:** The theme system is intentionally deferred. Color palette and token implementation will be designed in a dedicated future milestone. Do not add ad-hoc color variables or theme files until that milestone is formally approved.

---

## 5. Folder Ownership

```
02-Frontend/src/
│
├── app/              Application shell only. No business logic.
│   ├── router/       Route definitions, guards, lazy-loaded routes.
│   ├── providers/    Global context providers (auth, theme, query, toast).
│   └── layouts/      Top-level layout shells (sidebar, topbar wrappers).
│
├── features/         Business feature modules. Isolated slices.
│   └── <feature>/    Each feature owns its own sub-layers. No cross-imports.
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       ├── validation/
│       ├── constants/
│       └── index.ts  Public API — the only import surface for this feature.
│
├── shared/           Cross-cutting code shared by multiple features.
│   ├── components/   Composite components (DataTable, PageHeader, etc.).
│   ├── hooks/        Generic hooks (useDebounce, usePagination, etc.).
│   ├── utils/        Pure functions (date, currency, string, array).
│   ├── validation/   Generic Zod schemas.
│   ├── types/        Shared TypeScript types (api, pagination, common).
│   └── constants/    Shared constants (roles, status codes, messages).
│
├── design-system/    UI primitives. No business logic. No API calls.
│   ├── components/   Atomic components (Button, Input, Modal, etc.).
│   ├── tokens/       Design token definitions (JS/TS).
│   ├── theme/        Light, dark, and base theme objects.
│   └── icons/        Icon wrappers.
│
├── services/         External integrations. No UI code.
│   ├── api/          HTTP client, endpoint constants, interceptors.
│   ├── auth/         Auth and token management.
│   ├── storage/      localStorage/sessionStorage abstraction.
│   └── notifications/ Notification delivery service.
│
├── config/           Pure configuration. No logic, no UI.
│   ├── env.ts        Typed environment variable access.
│   ├── routes.ts     Route path constants.
│   ├── permissions.ts RBAC permission matrix.
│   ├── featureFlags.ts Feature toggle definitions.
│   ├── api.config.ts Base URL, timeouts, headers.
│   ├── storage.config.ts Storage key constants.
│   └── auth.config.ts Auth flow configuration.
│
├── mocks/            Dev and test only. Never imported in production.
│   ├── data/         Fixture data (mirrors data.js entities).
│   ├── handlers/     MSW request handlers.
│   └── server.ts     MSW server setup.
│
├── styles/           Global CSS. Component-scoped styles use CSS Modules.
│   └── globals/      reset.css, base.css, typography.css, utilities.css
│
├── assets/           Static files. No logic.
│   ├── fonts/
│   ├── images/
│   └── icons/
│
└── types/            Global TypeScript ambient declarations only.
    ├── env.d.ts      ImportMetaEnv interface.
    └── global.d.ts   CSS Modules, SVG, asset module declarations.
```

### Boundary Rules

- `app/` may import from `features/`, `shared/`, `design-system/`, `config/`, `services/`.
- `features/<A>/` must **never** import from `features/<B>/`. Cross-feature needs go through `shared/`.
- `shared/` must **never** import from `features/` or `app/`.
- `design-system/` must **never** import from `features/`, `shared/`, or `services/`.
- `services/` must **never** import from `features/`, `app/`, or `design-system/`.
- `config/` must **never** contain logic, UI, or side effects.
- `mocks/` must **never** be imported outside of test files and dev entry points.

---

## 6. Component Rules

Every component must:

- Satisfy exactly **one responsibility** (Single Responsibility Principle)
- Accept a **minimal, typed prop surface**
- Be **composable** — composed from smaller primitives where possible
- Keep **presentation separate from business logic**
- Delegate data fetching to hooks, never fetch inside render
- Delegate API calls to services, never call API inside component
- Never contain hardcoded strings that belong in constants
- Never exceed **200 lines** — extract sub-components if needed

```ts
// ✅ Correct — presentation separated
function MemberCard({ member }: MemberCardProps) {
  return <Card>...</Card>
}

// ❌ Wrong — business logic and fetch inside component
function MemberCard({ id }: { id: string }) {
  const [member, setMember] = useState(null)
  useEffect(() => {
    fetch(`/api/members/${id}`).then(...)  // prohibited
  }, [id])
}
```

---

## 7. State Management Rules

| State Type | Tool | When to Use |
|---|---|---|
| Server state (API data) | TanStack Query | Any data that comes from or syncs with a backend |
| Global client state | Zustand | Auth session, theme, UI preferences, sidebar state |
| Local UI state | `useState` / `useReducer` | Form state, toggle visibility, local interactions |

**Rules:**
- Do not put server data into Zustand. TanStack Query owns server state.
- Do not duplicate state. One source of truth per piece of data.
- Zustand stores live in `src/features/<feature>/hooks/use<Feature>Store.ts` or `src/shared/hooks/` if cross-feature.
- TanStack Query calls are wrapped in custom hooks inside `src/features/<feature>/hooks/`.

```ts
// ✅ Server state — TanStack Query
function useMembers() {
  return useQuery({ queryKey: ['members'], queryFn: memberService.getAll })
}

// ✅ Client state — Zustand
const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

// ❌ Wrong — server data in Zustand
const useMemberStore = create((set) => ({
  members: [],
  fetchMembers: async () => {
    const data = await fetch('/api/members')  // prohibited
    set({ members: data })
  },
}))
```

---

## 8. API Rules

- UI components **never** call APIs directly.
- All API calls go through service files in `src/services/api/` or `src/features/<feature>/services/`.
- The HTTP client is configured once in `src/services/api/client.ts`.
- Endpoint strings are constants defined in `src/services/api/endpoints.ts`.
- Authentication tokens are injected via interceptors in `src/services/api/interceptors.ts`.
- No raw `fetch()` or `axios()` calls outside of service files.

```ts
// ✅ Correct pattern
// src/features/members/services/memberService.ts
export const memberService = {
  getAll: () => apiClient.get<Member[]>(ENDPOINTS.MEMBERS.LIST),
  getById: (id: string) => apiClient.get<Member>(ENDPOINTS.MEMBERS.BY_ID(id)),
}

// ✅ Used via hook
function useMembers() {
  return useQuery({ queryKey: ['members'], queryFn: memberService.getAll })
}

// ❌ Prohibited — direct API call in component
function MemberList() {
  useEffect(() => { fetch('/api/members')... }, [])
}
```

---

## 9. Styling Rules

- Component styles use **CSS Modules** exclusively (`Component.module.css`).
- Global CSS is limited to: reset, base typography, CSS custom properties (tokens), global utilities.
- Component styles must never leak outside their module scope.
- No inline `style={{}}` props for anything beyond dynamic computed values (e.g., progress width).
- No string-concatenated class names — use `clsx` or `classnames` for conditional classes.
- No `!important` unless overriding a third-party component with no other option.
- CSS Module class names follow `camelCase` in JS and `kebab-case` in CSS.

```ts
// ✅ Correct
import styles from './Button.module.css'
<button className={clsx(styles.button, styles[variant])} />

// ❌ Prohibited
<button style={{ backgroundColor: '#10B981' }} />  // hardcoded color
<button className="bg-green-500 px-4" />           // Tailwind (not this project)
```

---

## 10. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| React components | PascalCase | `MemberCard.tsx` |
| Pages | PascalCase + Page suffix | `DashboardPage.tsx` |
| Hooks | camelCase + use prefix | `useMembers.ts` |
| Zustand stores | camelCase + Store suffix | `useAuthStore.ts` |
| Services | camelCase + Service suffix | `memberService.ts` |
| Utilities | camelCase | `formatCurrency.ts` |
| Constants | UPPER_SNAKE_CASE | `MAX_LOGIN_ATTEMPTS` |
| Enums | PascalCase | `MemberStatus` |
| Types | PascalCase | `MemberProfile` |
| Interfaces | PascalCase | `ApiResponse<T>` |
| CSS Module files | PascalCase matching component | `Button.module.css` |
| CSS Module classes | camelCase in JS, kebab-case in CSS | `styles.primaryButton` → `.primary-button` |
| Feature folders | kebab-case | `workout-plans/` |
| Asset files | kebab-case | `gym-logo.png` |
| Test files | Same name + `.test` or `.spec` | `Button.test.tsx` |

---

## 11. Import Rules

Use `@/` aliases. **Never use relative paths beyond one level deep.**

```ts
// ✅ Correct
import { Button } from '@/design-system/components/Button'
import { usePagination } from '@/shared/hooks'
import { ROUTES } from '@/config/routes'
import { memberService } from '@/features/members/services/memberService'

// ❌ Prohibited
import { Button } from '../../../design-system/components/Button'
import type { Member } from '../../members/types'  // cross-feature
```

Barrel files (`index.ts`) must exist in every major folder to provide clean import surfaces.

---

## 12. Scalability Rules

Every new feature must:

1. Live in `src/features/<feature-name>/`
2. Own all its sub-layers: `components/`, `hooks/`, `services/`, `types/`, `validation/`, `constants/`
3. Expose only what other layers need via `index.ts`
4. Never import directly from another feature
5. Have its route registered in `src/config/routes.ts`
6. Have its permissions defined in `src/config/permissions.ts`
7. Be togglable via `src/config/featureFlags.ts` during development

---

## 13. Performance Rules

- Prefer `React.lazy()` + `Suspense` for route-level code splitting.
- Wrap expensive pure computations in `useMemo`.
- Wrap stable callback references in `useCallback` when passed to child components.
- Prefer paginated or virtualized lists for datasets > 100 items.
- Use TanStack Query's built-in caching — do not duplicate API calls.
- Never re-fetch data that TanStack Query already holds in cache.
- Avoid co-locating large datasets in component state.

---

## 14. Documentation Rules

- Every new feature must add or update its entry in `docs/05-Modules/`.
- Architectural changes must update `TAD.md`.
- Security-relevant changes must update `SECURITY.md`.
- The `GEMINI.md` handbook must be updated when engineering standards change.
- The `CHANGELOG.md` must be updated with every meaningful change.

---

## 15. Forbidden Practices

The following are **prohibited** and will block code review approval:

| Prohibited | Reason |
|---|---|
| Hardcoded colors, spacing, or font sizes | Breaks theme system |
| Magic numbers in logic | Unreadable, unmaintainable |
| Duplicate components | Violates centralization |
| Duplicate services | Creates divergent behavior |
| Duplicate business logic | Creates bugs under maintenance |
| `../../../` deep relative imports | Use `@/` aliases |
| Components exceeding 200 lines | Violates SRP |
| Business logic inside UI components | Violates separation of concerns |
| Direct `fetch()` or `axios()` in components | Use service layer |
| Raw `fetch()` outside service files | Bypasses interceptors and error handling |
| Unused imports | Bloat, noise |
| Unused variables | Bloat, noise |
| Dead files or dead code | Increases cognitive load |
| Unused dependencies in `package.json` | Security surface, build time |
| Cross-feature direct imports | Violates isolation |
| `any` TypeScript type | Defeats type safety |
| `console.log` in production code | Use structured error handling |
| Plain-text credentials anywhere | Security violation |
| Inline styles for static values | Use CSS Modules |
| State duplication (same data in multiple stores) | Source of truth violations |

---

## 16. Pull Request Checklist

Before marking a PR ready for review, the author must verify:

**Functionality**
- [ ] Feature works as documented
- [ ] Edge cases are handled
- [ ] Error states are handled
- [ ] Loading states are handled

**Architecture**
- [ ] Code lives in the correct folder per this handbook
- [ ] No cross-feature imports
- [ ] No business logic in UI components
- [ ] No direct API calls from components
- [ ] No hardcoded values

**Code Quality**
- [ ] No TypeScript `any`
- [ ] No unused imports or variables
- [ ] No dead code
- [ ] Functions are focused and small
- [ ] Naming conventions followed

**Styling**
- [ ] CSS Modules used (not inline styles)
- [ ] No hardcoded colors or dimensions
- [ ] Design tokens referenced correctly

**State**
- [ ] Server state managed by TanStack Query
- [ ] Client state managed by Zustand
- [ ] No duplicated state

**Tests**
- [ ] New logic has test coverage
- [ ] Existing tests still pass

**Documentation**
- [ ] Feature module doc updated (if applicable)
- [ ] CHANGELOG.md updated
- [ ] TAD.md updated (if architecture changed)

**Linting**
- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run type-check` passes with zero errors

---

## 17. Tech Stack Reference

| Layer | Technology | Version |
|---|---|---|
| Build tool | Vite | 5.x |
| Language | TypeScript | 5.x (strict) |
| UI framework | React | 18.x |
| Routing | React Router | 6.x |
| Server state | TanStack Query | 5.x |
| Client state | Zustand | 5.x |
| Styling | CSS Modules | — |
| Validation | Zod | (add in M2) |
| Icons | (deferred to M2) | — |
| Charts | Recharts | (add in M5) |
| Desktop wrapper | Electron | (future milestone) |
| Database | SQLite via Prisma | (future milestone) |
| Dev linting | Oxlint | 0.9.x |
| Prod linting | ESLint | 9.x flat config |
| Formatting | Prettier | 3.x |
| UI skeleton generation | boneyard (https://github.com/0xGF/boneyard) | — |

> Stack decisions are recorded in `docs/TAD.md`. Any change to the stack requires a formal decision log entry and TAD update.

---

*Last updated: 2026-07-24 | Owners: Khizer & Ahad*
