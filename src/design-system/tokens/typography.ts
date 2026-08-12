/**
 * Gym ERP — Kinetic Industrial Typography Tokens
 * Specification: docs/DESIGN_1785951225528.md
 */

export const typography = {
  fontFamilies: {
    headline: "'Inter', -apple-system, sans-serif",
    body: "'Roboto', 'Inter', -apple-system, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  presets: {
    displayXl: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '120px',
      fontWeight: '900',
      lineHeight: '100px',
      letterSpacing: '-0.04em',
    },
    headlineLg: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '64px',
      fontWeight: '800',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    headlineLgMobile: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '48px',
      fontWeight: '800',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
    },
    headlineMd: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '32px',
      letterSpacing: '0em',
    },
    bodyLg: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '28px',
    },
    bodyMd: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
    },
    labelCaps: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '16px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    buttonText: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '18px',
      letterSpacing: '0.05em',
    },
    dataDisplay: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '32px',
    },
  },
} as const

export type TypographyTokens = typeof typography
