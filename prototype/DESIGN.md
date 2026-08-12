---
name: Objective Rationalism (Refined)
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5b403f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#e63946'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#485f84'
  on-secondary: '#ffffff'
  secondary-container: '#bbd3fd'
  on-secondary-container: '#445a7f'
  tertiary: '#565e55'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e776d'
  on-tertiary-container: '#f6fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#b0c7f1'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#30476a'
  tertiary-fixed: '#dce5d9'
  tertiary-fixed-dim: '#c0c9be'
  on-tertiary-fixed: '#161d16'
  on-tertiary-fixed-variant: '#404940'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: '0'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 96px
---

# GYM ERP Specification & Design Handbook (IRON CORE)

This document unifies the **Refined Rationalism Product Requirements Document (PRD)** and the **Objective Rationalism Design System Standard** into a single authoritative engineering specification.

---

## Part I: Product Requirements Document (PRD)

### 1. Product & Design Overview
The "Refined Rationalism" dashboard is a high-precision enterprise Gym ERP interface designed for **IRON CORE ERP**. It balances functional Swiss minimalism with subtle visual refinements like soft borders, precision typography, and deliberate color accents.

### 2. Visual Foundation
- **Brand Identity:** IRON CORE ERP (Geometric Kettlebell / Dumbbell Emblem)
- **Primary Accent:** Signal Red (`#E63946`)
- **Surface Background:** `#F8F9FA`
- **Base Typography:** Hanken Grotesk (Primary), JetBrains Mono (Data / Code)
- **Corner Radius:** 4px (Softened precision radius)
- **Elevation:** Zero-elevation with subtle, low-intensity container outlines (`1px solid var(--outline)`).

### 3. Layout Structure
- **Sidebar:** Fixed width (256px), light surface background (`#FFFFFF` / `#F8F9FA`). Features brand logo (IRON CORE), "New Entry" primary CTA in Signal Red (`#E63946`), and navigation items (`Dashboard`, `Membership`, `Equipment`, `Staff`, `Financials`, `Reports`, `Settings`).
- **Top Header:** Fixed height (64px). Contains product title (IRON CORE ERP), global search input, and utility actions (`Notifications`, `Calendar`, `Help`, `Check-in`, `Profile`).
- **Content Area:** Flexible grid with standardized 24px gutters.

### 4. Core Modules
1. **Financial Overview (KPIs):**
   - Four primary summary cards: **Total Members**, **Active Subs**, **Monthly Revenue**, **Facility Occupancy**.
   - **Monthly Revenue** is highlighted in Signal Red (`#E63946`) for maximum visual prominence.
2. **Revenue Trajectory (YTD):**
   - Large bar chart showing monthly YTD financial performance.
   - **June (Current Month)** highlighted in Signal Red (`#E63946`) to signal active tracking.
3. **Member Segments:**
   - Visual breakdown of tiers: Basic (Blue-Gray), Silver (Steel), Gold (Signal Red `#E63946`).
   - Horizontal progress indicators for capacity allocation.
4. **System Alerts:**
   - Actionable list items with status badges.
   - High-contrast alert count badge **(2)** in Signal Red (`#E63946`).
5. **Attendance Pulse (Live):**
   - Structured data table for real-time facility monitoring.
   - Tier-based color coding for member types (Basic, Silver, Gold VIP).

---

## Part II: Visual Foundation & Design System Rules

### 1. Brand & Style Philosophy
This design system is rooted in the Swiss Style (International Typographic Style), prioritizing clarity, objectivity, and a mathematical approach to layout. The brand personality is authoritative, precise, and timeless, removing all decorative artifice in favor of functionalism.

The aesthetic is strictly **Minimalist** and **Grid-Driven**. Visual interest is generated through asymmetrical balance, varying typographic scales, and the strategic use of primary colors against a neutral foundation.

### 2. Color Rules
The palette is built on a "Paper and Ink" philosophy:
- **Primary (Signal Red `#E63946` / `#B7102A`):** Reserved for critical actions, branding, and highlighting essential data points.
- **Secondary (Deep Blue `#485F84`):** Used for navigation elements and secondary interactive states.
- **Tertiary (Mint White `#565E55`):** Subtle background shifts to denote functional zones.
- **Neutral:** Ranging from `#191C1D` (Ink) to `#F8F9FA` (Paper).
- Color application must be deliberate: never for decoration, only to signal hierarchy or function.

### 3. Typography Rules
Typography is the core structural element. We use **Hanken Grotesk** for its neo-grotesque purity and exceptional legibility.
- **Alignment:** Flush-left, ragged-right is standard.
- **Case:** Use All-Caps for small labels and metadata to create a "stamp" effect.
- **Tabular Data:** Use JetBrains Mono for exact numerical alignment.

### 4. Layout & Elevation Rules
- **The Grid:** 12-column mathematical grid with 24px gutters.
- **Elevation Model:** Zero-elevation with 4px corner radius. Boundaries are defined by high-contrast `1px solid` hairline rules.

### 5. Component Standards
- **Buttons:** Rectangular with 4px softened corners. Primary CTAs use solid Signal Red (`#E63946`) fill with white text.
- **Cards:** Defined by `1px solid` border lines and soft surface layering.
- **Data Tables:** Minimal cell padding, clean horizontal rules, bold headers, and aligned numbers.
- **Assets & Icons:** Material Design system (Outlined/Sharp) icons matching adjacent line weights.