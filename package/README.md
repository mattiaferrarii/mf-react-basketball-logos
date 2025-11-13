# mf-react-basketball-logos

![npm](https://img.shields.io/npm/v/mf-react-basketball-logos)

> Unofficial React components for basketball team logos

`mf-react-basketball-logos` is a maintained fork of [`react-nba-logos`](https://github.com/ChrisKatsaras/React-NBA-Logos) by Christopher Katsaras (ISC license), modernized with TypeScript, modern build tools, and designed for extension to additional basketball leagues.

> Not affiliated with or endorsed by the NBA, EuroLeague, LBA, or any other league or team. All trademarks and logos belong to their respective owners.

---

## Features

✅ **TypeScript** - Full TypeScript support with type definitions
✅ **Tree-shakeable** - Import only what you need for smaller bundles
✅ **Modern React** - Compatible with React 18 and 19
✅ **Zero dependencies** - Only React as a peer dependency
✅ **Accessible** - Proper ARIA labels and semantic SVG markup
✅ **Tested** - Comprehensive test coverage with Vitest

---

## Install

```shell
npm install mf-react-basketball-logos
```

---

## Usage

### Basic Usage (JavaScript)

```jsx
import { TOR } from "mf-react-basketball-logos";

const Example = () => {
  return <TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

### TypeScript Usage

```tsx
import { TOR, type LogoProps } from "mf-react-basketball-logos";

const Example: React.FC = () => {
  return <TOR />; // Fully typed component
};

export default Example;
```

### Import All Logos

```jsx
import * as BasketballLogos from "mf-react-basketball-logos";

const Example = () => {
  return <BasketballLogos.TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

### Tree-shaking (Recommended for smaller bundles)

When you import specific teams, modern bundlers will automatically tree-shake unused logos:

```jsx
import { TOR, LAL, BOS } from "mf-react-basketball-logos";

// Only these 3 logos will be included in your bundle
```

---

## Configuration

Each logo component supports customization through props:

```tsx
import { TOR } from "mf-react-basketball-logos";

const Example = () => {
  return (
    <div>
      {/* Default: 100px */}
      <TOR />

      {/* Custom size */}
      <TOR size={60} />
      <TOR size={140} />

      {/* Custom title for accessibility */}
      <TOR title="Toronto Raptors Logo" />

      {/* Additional SVG props */}
      <TOR className="my-logo" style={{ opacity: 0.8 }} />
    </div>
  );
};

export default Example;
```

### Props

Each logo component accepts the following props:

```typescript
interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of the logo in pixels (sets both width and height)
   * @default 100
   */
  size?: number | string;

  /**
   * Accessible title for the logo
   * @default Team name (e.g., "Toronto Raptors")
   */
  title?: string;

  /**
   * Optional className for additional styling
   */
  className?: string;

  // ... all standard SVG element props
}
```

---

## Available Teams (NBA)

**30 NBA teams currently available:**

| Code | Team |
|------|------|
| ATL  | Atlanta Hawks |
| BKN  | Brooklyn Nets |
| BOS  | Boston Celtics |
| CHA  | Charlotte Hornets |
| CHI  | Chicago Bulls |
| CLE  | Cleveland Cavaliers |
| DAL  | Dallas Mavericks |
| DEN  | Denver Nuggets |
| DET  | Detroit Pistons |
| GSW  | Golden State Warriors |
| HOU  | Houston Rockets |
| IND  | Indiana Pacers |
| LAC  | Los Angeles Clippers |
| LAL  | Los Angeles Lakers |
| MEM  | Memphis Grizzlies |
| MIA  | Miami Heat |
| MIL  | Milwaukee Bucks |
| MIN  | Minnesota Timberwolves |
| NOP  | New Orleans Pelicans |
| NYK  | New York Knicks |
| OKC  | Oklahoma City Thunder |
| ORL  | Orlando Magic |
| PHI  | Philadelphia 76ers |
| PHX  | Phoenix Suns |
| POR  | Portland Trail Blazers |
| SAC  | Sacramento Kings |
| SAS  | San Antonio Spurs |
| TOR  | Toronto Raptors |
| UTA  | Utah Jazz |
| WAS  | Washington Wizards |

---

## Roadmap

Future plans for this package:

- [ ] Additional leagues (EuroLeague, LBA, Liga ACB, etc.)
- [x] Full TypeScript support
- [x] Modern build tooling (tsup)
- [x] Comprehensive testing (Vitest)
- [ ] Storybook documentation
- [ ] Dark mode variants

---

## Development

```shell
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build the package
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

---

## Credits

Based on the original work in [`react-nba-logos`](https://github.com/ChrisKatsaras/React-NBA-Logos) by Christopher Katsaras.
Modernized and maintained by Mattia Ferrari.

Licensed under the ISC License.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

ISC
