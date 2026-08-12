/**
 * Gym ERP — Objective Rationalism Color Tokens
 * Specification: docs/Design.md
 */

export const colors = {
  surface: {
    base: '#f8f9fa',
    dim: '#d9dadb',
    bright: '#f8f9fa',
    containerLowest: '#ffffff',
    containerLow: '#f3f4f5',
    container: '#eeeeee',
    containerHigh: '#e2e2e2',
    containerHighest: '#d1d1d1',
    variant: '#f3f4f5',
    tint: '#e63946',
  },

  text: {
    onSurface: '#1a1a1a',
    onSurfaceVariant: '#4a4a4a',
    inverseSurface: '#1a1a1a',
    inverseOnSurface: '#f8f9fa',
  },

  primary: {
    base: '#e63946',
    onPrimary: '#ffffff',
    container: '#ffdadb',
    onContainer: '#410006',
    inverse: '#ffb3b5',
    fixed: '#ffdadb',
    fixedDim: '#ffb3b5',
  },

  secondary: {
    base: '#1a1a1a',
    onSecondary: '#ffffff',
    container: '#e2e2e2',
    onContainer: '#1a1a1a',
  },

  tertiary: {
    base: '#4a4a4a',
    onTertiary: '#ffffff',
    container: '#f3f4f5',
    onContainer: '#1a1a1a',
  },

  success: {
    base: '#0d7d4d',
    onSuccess: '#ffffff',
    container: '#e6f7ef',
    onContainer: '#07472b',
    border: '#0d7d4d',
  },

  error: {
    base: '#ba1a1a',
    onError: '#ffffff',
    container: '#ffdad6',
    onContainer: '#410002',
    border: '#ba1a1a',
  },

  warning: {
    base: '#b86e00',
    onWarning: '#ffffff',
    container: '#fff3e0',
    onContainer: '#543000',
    border: '#b86e00',
  },

  info: {
    base: '#2b4c7e',
    onInfo: '#ffffff',
    container: '#ebf2fa',
    onContainer: '#102340',
    border: '#2b4c7e',
  },

  outline: {
    base: '#1a1a1a',
    variant: '#d1d1d1',
  },

  background: {
    base: '#ffffff',
    onBackground: '#1a1a1a',
  },
} as const

export type ColorTokens = typeof colors
