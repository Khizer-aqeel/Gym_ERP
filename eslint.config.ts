import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

/**
 * ESLint config — Production linting (CI/CD gate)
 * For development fast linting, use: npm run lint:dev (oxlint)
 *
 * Rules philosophy:
 *  - Enforce react-hooks rules (critical for correctness)
 *  - Enforce no unused vars (enforced by tsconfig already, belt-and-suspenders)
 *  - Warn on react-refresh boundaries (prevents HMR issues)
 */
export default tseslint.config(
  {
    // Exclude compiled output and legacy prototype
    ignores: ['dist', 'node_modules', 'prototype'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React Hooks — must-have for correctness
      ...reactHooks.configs.recommended.rules,

      // HMR boundary enforcement
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript strictness (complements tsconfig strict)
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',

      // Code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
)
