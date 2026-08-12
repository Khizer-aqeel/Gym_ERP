/**
 * Gym ERP — Kinetic Industrial Spacing Tokens
 * Specification: docs/DESIGN_1785951225528.md
 * Base Unit: 4px
 */

export const spacing = {
  base: '8px',
  containerMargin: '24px',
  gutter: '16px',
  stackSm: '4px',
  stackMd: '12px',
  stackLg: '24px',

  space1: '4px',
  space2: '8px',
  space3: '12px',
  space4: '16px',
  space5: '24px',
  space6: '32px',
  space8: '48px',
} as const

export type SpacingTokens = typeof spacing
