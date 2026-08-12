---
name: Objective Rationalism (Specification 1)
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
  primary: '#b7102a'
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
    fontFamily: Hanken Grotesk
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

## Brand & Style
This design system is rooted in the Swiss Style (International Typographic Style), prioritizing clarity, objectivity, and a mathematical approach to layout. The brand personality is authoritative, precise, and timeless, removing all decorative artifice in favor of functionalism.

The aesthetic is strictly **Minimalist** and **Grid-Driven**. It avoids all skeuomorphism, gradients, and shadows. Visual interest is generated through asymmetrical balance, varying typographic scales, and the strategic use of primary colors against a neutral foundation. The interface should feel like a piece of high-end editorial print design translated to a digital medium.

## Colors
The palette is built on a "Paper and Ink" philosophy. The background is a clean, off-white or very light gray to reduce eye strain while maintaining high contrast.

- **Primary (Swiss Red):** Reserved for critical actions, branding, and highlighting essential data points.
- **Secondary (Deep Blue):** Used for navigation elements and secondary interactive states.
- **Tertiary (Mint White):** Subtle background shifts to denote different functional zones.
- **Neutral:** A range of grays from `#121212` (Ink) to `#F8F9FA` (Paper).
- **Accent (Yellow):** Used sparingly for notifications or as a highlight color in data visualization.

Color application must be deliberate. Never use color for decoration; use it only to signal hierarchy or function.

## Typography
Typography is the core structural element of this design system. We use **Hanken Grotesk** for its neo-grotesque purity and exceptional legibility, mimicking the classic Swiss sans-serif tradition.

- **Scale:** Use a modular scale. Headlines should be significantly larger than body text to create immediate hierarchy.
- **Alignment:** Flush-left, ragged-right is the standard. Avoid centered text except for specific display purposes.
- **Tight Leading:** For large display type, use "set solid" leading (line height equal to font size) to create a dense, architectural block of text.
- **Case:** Use All-Caps for small labels and metadata to create a "stamp" effect, increasing the sense of structure.

## Layout & Spacing
The layout is governed by a strict **12-column mathematical grid**. Every element must align to the grid lines. 

- **The Grid:** Use 24px gutters. Elements should span increments of the grid (e.g., a sidebar spans 3 columns, main content spans 9).
- **White Space:** Use generous "negative space" to isolate groups of information. White space is treated as a physical element in the design, not just an absence of content.
- **Vertical Rhythm:** Maintain a strict baseline grid based on the 8px unit. All vertical margins and paddings must be multiples of 8.
- **Mobile:** Transition to a 4-column grid. Remove horizontal padding from internal cards to allow content to bleed to the margins, maximizing readability.

## Elevation & Depth
This design system utilizes a **Zero-Elevation** model. No shadows, blurs, or Z-axis depth effects are permitted.

- **Tonal Layering:** Depth is conveyed through color blocks. A sidebar might be a slightly darker neutral (`#F1F3F5`) than the main content area (`#FFFFFF`).
- **High-Contrast Outlines:** Use 1px or 2px solid borders in Ink (`#121212`) to define boundaries. 
- **Rule Lines:** Use horizontal and vertical hairline rules (0.5pt to 1pt) to separate content sections, mimicking technical drawings or broadsheet newspapers.
- **Overlays:** Modals do not have shadows; they use a solid, high-contrast border and a semi-opaque solid color dimming layer behind them.

## Shapes
The shape language is **Strictly Geometric**. 

- **Corners:** Every UI element—buttons, inputs, cards, and images—must have a 0px border radius. Sharp corners reinforce the precision and architectural nature of the design.
- **Icons:** Use thick-stroke, non-rounded icons. Line weight should match the weight of the typography used in adjacent labels.
- **Containers:** Containers should avoid heavy fills. Preference is given to "invisible" containers defined by typography alignment or simple hairline dividers.

## Components
Consistent styling across components ensures the system remains cohesive and functional.

- **Buttons:** Rectangular with sharp corners. Primary buttons use a solid black or red fill with white text. Secondary buttons use a 2px black border with no fill. Interaction states involve a simple color inversion.
- **Input Fields:** A simple 1px bottom border (underline style) or a full 1px rectangular border. No shadows. Focus state is indicated by a weight increase of the border to 2px or a change to the primary red.
- **Cards:** Cards are defined by 1px solid borders. Do not use background colors for cards unless highlighting a specific "featured" item.
- **Lists:** Separated by horizontal hairline rules. Use high-contrast typography for headers within lists.
- **Chips/Badges:** Small, rectangular boxes with solid fills. Use All-Caps typography for the labels within.
- **Data Tables:** The "hero" component of this system. Use minimal cell padding, no vertical lines (only horizontal), and bold headers. Alignment of numbers should be tabular-serif for vertical consistency.

---

# Objective Rationalism (Specification 2)

---
name: Objective Rationalism
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#eeeeee'
  surface-container-high: '#e2e2e2'
  surface-container-highest: '#d1d1d1'
  on-surface: '#1a1a1a'
  on-surface-variant: '#4a4a4a'
  inverse-surface: '#1a1a1a'
  inverse-on-surface: '#f8f9fa'
  outline: '#1a1a1a'
  outline-variant: '#d1d1d1'
  surface-tint: '#e63946'
  primary: '#e63946'
  on-primary: '#ffffff'
  primary-container: '#ffdadb'
  on-primary-container: '#410006'
  inverse-primary: '#ffb3b5'
  secondary: '#1a1a1a'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#1a1a1a'
  tertiary: '#4a4a4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#f3f4f5'
  on-tertiary-container: '#1a1a1a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#410002'
  background: '#ffffff'
  on-background: '#1a1a1a'
  surface-variant: '#f3f4f5'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 1.2
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 1.6
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 1.5
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 1.2
    letterSpacing: 0.1em
  button-text:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 1
    letterSpacing: 0.02em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is **Objective Rationalism**, a framework built on the principles of Swiss Design and functional minimalism. It prioritizes clarity, structural integrity, and high information density, making it ideal for complex ERP systems where operational efficiency is paramount.

The style is defined by a **Rigid Grid** and **Objective Typography**. It avoids decorative elements, instead using whitespace and hairline borders to create a sophisticated, systematic hierarchy. The UI feels reliable, precise, and transparent, reflecting a "no-nonsense" approach to data management.

## Colors
The palette is rooted in a refined range of **Cool Grays** and **Pure White** to establish a clean, neutral baseline. **Signal Red (#E63946)** serves as the primary accent color, used with extreme intentionality for critical actions, status indicators, and primary navigation highlights.

Secondary information is handled through varying weights of charcoal and slate, ensuring that the interface remains legible without becoming visually overwhelming. The use of high-contrast black for borders and primary text reinforces the "printed-matter" aesthetic of classical modernist design.

## Typography
Typography is the core of the identity. **Hanken Grotesk** is used across all scales for its geometric precision and excellent legibility. 

- **Headlines** are set in bold or extra-bold weights with tight tracking to create a strong, authoritative presence.
- **Body Text** utilizes generous line-height for long-form readability.
- **Data Labels** are often set in all-caps with increased letter-spacing to provide a technical, "ledger-style" rhythm.

## Layout & Spacing
The layout follows a strict **Modular Grid**. All components are sized in increments of a 4px baseline unit, ensuring mathematical consistency throughout the interface.

On desktop, the system utilizes a clear sidebar-and-top-bar structure to frame the content area. Margins are consistent and purposeful, creating "white gutters" that guide the eye between different data modules. Information is grouped into distinct, bordered containers to maintain clear separation of concerns.

## Elevation & Depth
This system is fundamentally **Flat**. It rejects drop shadows and blurs in favor of structural separation.

- **Borders:** 1px solid hairlines are the primary tool for defining hierarchy.
- **Layering:** Depth is achieved through subtle shifts in surface color (e.g., using a slightly darker gray for the background and pure white for cards).
- **Interactive States:** Hover effects are signaled by sharp color shifts or border weight changes rather than simulated physical depth.

## Shapes
The shape language is **Purely Geometric**. Standard components use 0px or very small border radii (max 4px) to emphasize the grid-based construction. Buttons and inputs are rectangular, reinforcing the systematic and stable nature of the ERP interface.

## Components
- **Buttons:** Sharp-edged blocks. Primary buttons use a Signal Red background with White text for maximum prominence. Secondary buttons are outlined or neutral-filled.
- **Cards:** Defined by 1px borders and ample internal padding. They act as "data cells" within the larger layout grid.
- **Status Indicators:** Use high-contrast color pills (Red for alerts, Green for active) to provide immediate semantic feedback.
- **Navigation:** Vertical sidebars use bold typography and clear active states to ensure orientation within complex system hierarchies.
