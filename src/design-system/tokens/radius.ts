/**
 * Gym ERP — Kinetic Industrial Radius Tokens
 * Specification: docs/DESIGN_1785951225528.md
 * Shape Language: Sharp (0px) across all UI elements.
 */

export const radius = {
  none: '0px',
  btn: '0px',
  input: '0px',
  card: '0px',
  dialog: '0px',
  table: '0px',
  dropdown: '0px',
  xs: '0px',
  sm: '0px',
  md: '0px',
  lg: '0px',
  xl: '0px',
  full: '0px',
} as const

export type RadiusTokens = typeof radius
