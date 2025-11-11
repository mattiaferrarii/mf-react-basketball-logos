# mf-react-basketball-logos

![npm](https://img.shields.io/npm/v/mf-react-basketball-logos)

> Unofficial React components for basketball team logos

`mf-react-basketball-logos` is a maintained fork of [`react-nba-logos`](https://github.com/ChrisKatsaras/React-NBA-Logos) by Christopher Katsaras (ISC license), with the goal of keeping the original API usable in modern React/Node environments and extending it over time.

> Not affiliated with or endorsed by the NBA, EuroLeague, LBA, or any other league or team. All trademarks and logos belong to their respective owners.

---

## Install

```shell
npm install mf-react-basketball-logos
```

---

## Usage

```js
import React from "react";
import { TOR } from "mf-react-basketball-logos";

const Example = () => {
  return <TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

Or include all logos:

```js
import React from "react";
import * as BasketballLogos from "mf-react-basketball-logos";

const Example = () => {
  return <BasketballLogos.TOR />; // Loads the Toronto Raptors logo
};

export default Example;
```

---

## Configuration

Size can be easily configured (default: `100px`):

```js
import React from "react";
import { TOR } from "mf-react-basketball-logos";

const Example = () => {
  return (
    <div>
      <TOR size={60} />
      <TOR /> {/* Default 100px */}
      <TOR size={140} />
    </div>
  );
};

export default Example;
```

Each logo component supports:

- `size?: number` – sets both width and height in pixels (default `100`)
- `title?: string` – optional accessible title applied to the SVG

---

## Roadmap

This package starts from the original NBA logo set and aims to evolve into a broader basketball logos library.

Planned:

- Additional leagues (e.g. EuroLeague, LBA, others)
- Dependency / build updates for modern React & Node
- TypeScript typings
- Better documentation & preview examples

---

## Credits

Based on the original work in [`react-nba-logos`](https://github.com/ChrisKatsaras/React-NBA-Logos) by Christopher Katsaras.
Additional modifications and maintenance by Mattia Ferrari.

Licensed under the ISC License.
