/**
 * Global TypeScript ambient declarations.
 * For module augmentations, global utility types, and third-party type patches.
 */

// CSS Modules — allows importing .module.css files without errors
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

// Static asset imports
declare module '*.svg' {
  import type { FunctionComponent, SVGAttributes } from 'react'
  const ReactComponent: FunctionComponent<SVGAttributes<SVGElement>>
  export { ReactComponent }
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.woff2' {
  const src: string
  export default src
}
