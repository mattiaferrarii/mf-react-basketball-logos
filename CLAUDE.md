# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`mf-react-basketball-logos` is a modern, TypeScript-based React component library for basketball team logos. The package provides type-safe, tree-shakeable SVG components for NBA teams, with architecture designed for future expansion to other leagues (EuroLeague, LBA, etc.).

This is an npm package library (not an application), so there is no "run" or "dev" command. The primary workflow is building, testing, and publishing the distributable code.

## Common Commands

```bash
# Install dependencies
npm install

# Build the distributable package (uses tsup to transpile TypeScript)
npm run build

# Run tests (Vitest)
npm test
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage

# Type checking
npm run typecheck

# Linting & formatting
npm run lint
npm run format
npm run format:check

# Clean dist directory
npm run clean

# Pre-publish checks (runs before npm publish)
npm run prepublishOnly  # Runs typecheck, lint, test, and build
```

## Architecture and Structure

### Directory Layout

```
src/
  ├── index.ts              # Main entry point - re-exports all logos and types
  ├── types/
  │   └── index.ts          # Shared TypeScript interfaces (LogoProps, LogoComponent)
  ├── nba/
  │   ├── index.ts          # Exports all NBA team components
  │   ├── TOR.tsx           # Toronto Raptors component
  │   ├── LAL.tsx           # Los Angeles Lakers component
  │   ├── ...               # (30 NBA teams total)
  │   └── NBA.test.tsx      # Component tests
  └── test/
      └── setup.ts          # Vitest test setup

dist/                       # Build output (created by tsup, gitignored)
  ├── index.js              # CommonJS entry
  ├── index.mjs             # ESM entry
  ├── index.d.ts            # TypeScript definitions
  └── nba/                  # Individual team components (for tree-shaking)
```

### Modern Tooling

- **Build**: tsup (esbuild-powered, 10x faster than Babel)
- **Testing**: Vitest (10-20x faster than Jest, native ESM support)
- **Type Checking**: TypeScript 5.7 with strict mode
- **Linting**: ESLint 9 (flat config) with TypeScript and React plugins
- **Formatting**: Prettier

### Component Pattern

Each team logo is a TypeScript functional component using modern patterns:

```typescript
import React from 'react';
import type { LogoComponent } from '../types';

const TOR: LogoComponent = ({ size = 100, title = 'Toronto Raptors', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 150 150"
      role="img"
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* SVG paths */}
    </svg>
  );
};

TOR.displayName = 'TOR';

export default TOR;
```

Key features:
- TypeScript with `LogoComponent` type (from `src/types/index.ts`)
- Destructured props with defaults
- `aria-label` for accessibility
- Conditional title rendering
- Spread props for flexibility (className, style, etc.)
- displayName for debugging

### Shared Types

All components share types defined in `src/types/index.ts`:

```typescript
export interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;    // Default: 100
  title?: string;            // Accessible title
  className?: string;        // Optional styling
}

export type LogoComponent = React.FC<LogoProps>;
```

### Build Process

1. **tsup** reads `tsup.config.ts` and processes all TypeScript files
2. Outputs both CommonJS (`.js`) and ESM (`.mjs`) formats
3. Generates TypeScript declarations (`.d.ts`) automatically
4. Minifies code for production
5. Enables tree-shaking with proper exports

The build creates:
- `dist/index.js` / `dist/index.mjs` - Main entry point
- `dist/nba/*.js` / `dist/nba/*.mjs` - Individual components (for subpath imports)
- `dist/**/*.d.ts` - TypeScript definitions

### Package Exports

The `package.json` defines subpath exports for optimal tree-shaking:

```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.mjs",
    "require": "./dist/index.js"
  },
  "./nba/*": {
    "types": "./dist/nba/*.d.ts",
    "import": "./dist/nba/*.mjs",
    "require": "./dist/nba/*.js"
  }
}
```

This allows users to import:
- `import { TOR } from 'mf-react-basketball-logos'` (main entry)
- `import TOR from 'mf-react-basketball-logos/nba/TOR'` (direct, best tree-shaking)

## Adding New Team Logos

### For NBA Teams (Current League)

1. Create `src/nba/TEAM.tsx` following the existing pattern
2. Add team to `src/nba/index.ts` exports
3. Add team name to conversion script if needed
4. Run tests: `npm test`
5. Build: `npm run build`

### For New Leagues (Future)

When adding a new league (e.g., EuroLeague):

1. Create `src/euroleague/` directory
2. Add team components: `src/euroleague/Barcelona.tsx`, etc.
3. Create `src/euroleague/index.ts` with exports
4. Update `src/index.ts` to re-export from euroleague
5. Update `package.json` exports to add euroleague subpath pattern:
   ```json
   "./euroleague/*": {
     "types": "./dist/euroleague/*.d.ts",
     "import": "./dist/euroleague/*.mjs",
     "require": "./dist/euroleague/*.js"
   }
   ```
6. Update `tsup.config.ts` entry to include euroleague files
7. Write tests in `src/euroleague/EuroLeague.test.tsx`
8. Update README with new league documentation

## Testing

Tests use Vitest + React Testing Library:

```typescript
describe('Logo Component', () => {
  it('renders with default size', () => {
    const { container } = render(<TOR />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '100');
  });

  it('renders with custom size', () => {
    render(<TOR size={150} />);
    // assertions
  });

  it('applies custom props', () => {
    render(<TOR className="custom" data-testid="logo" />);
    // assertions
  });
});
```

Run tests with `npm test` or `npm run test:watch` for development.

## Publishing Workflow

1. Make changes to source files in `src/`
2. Run full validation: `npm run prepublishOnly` (runs typecheck, lint, test, build)
3. Update version in `package.json` (follow semver)
4. Commit changes
5. Create git tag: `git tag v1.0.0`
6. Push with tags: `git push && git push --tags`
7. Publish to npm: `npm publish`
8. Create GitHub release with changelog

The `prepublishOnly` script automatically runs before `npm publish` to ensure quality.

## Team Abbreviations

Current NBA teams (30 total):
ATL, BKN, BOS, CHA, CHI, CLE, DAL, DEN, DET, GSW, HOU, IND, LAC, LAL, MEM, MIA, MIL, MIN, NOP, NYK, OKC, ORL, PHI, PHX, POR, SAC, SAS, TOR, UTA, WAS

## Dependencies

### Peer Dependencies
- **react**: ^18.0.0 || ^19.0.0 (consumer must provide)

### Dev Dependencies
- **TypeScript**: 5.7+ with strict mode
- **tsup**: Build tool (esbuild-based)
- **Vitest**: Testing framework
- **@testing-library/react**: React testing utilities
- **ESLint**: Code linting (v9 with flat config)
- **Prettier**: Code formatting

### Runtime Dependencies
- **None** - Zero runtime dependencies (React is peer dependency)

## Key Configuration Files

- `tsconfig.json` - TypeScript configuration (strict mode, React JSX)
- `tsup.config.ts` - Build configuration (dual format, minification)
- `vitest.config.ts` - Test configuration (jsdom environment)
- `eslint.config.js` - ESLint flat config (TypeScript + React rules)
- `.prettierrc` - Prettier formatting rules
- `package.json` - Package metadata, scripts, and exports

## Code Quality Standards

- **TypeScript**: Strict mode enabled, no implicit any
- **Testing**: >80% coverage target
- **Linting**: ESLint with TypeScript and React rules
- **Formatting**: Prettier with consistent style
- **Accessibility**: All components have proper ARIA labels
- **Tree-shaking**: `sideEffects: false` in package.json
