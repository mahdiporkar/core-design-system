# Core Design System

**Core Design System** is a **DX-first**, **vendor-agnostic** React design system and UI abstraction layer.

It is built to keep consumer applications **small**, **fast**, and **maintainable** by providing **per-component entry points**.  
Consumers import only what they need — nothing more.

---

## Features

- ⚙️ Webpack-friendly
- 🌳 Tree-shakeable (ESM)
- 📦 Per-component entry points
- 🧠 Explicit abstraction (wrapper-based)
- 🧩 Vendor-agnostic (Ant Design, MUI, etc.)
- 🧾 TypeScript types included
- ⚛️ React & ReactDOM externalized

---

## Why Core Design System?

UI toolkits evolve. APIs change. Teams migrate. Bundle sizes grow.

Core Design System exists to:

- provide a **stable wrapper API** over third-party UI libraries
- centralize **shared UI utilities and patterns**
- prevent **vendor lock-in**
- ensure **predictable bundle sizes** via granular imports
- improve long-term **Developer Experience (DX)**

---

## Installation

```bash
npm install core-design-system
# or
yarn add core-design-system
# or
pnpm add core-design-system


Peer Dependencies
react
react-dom

Usage
Option A — Root import (ESM tree-shaking)

import { DXForm, DXSelect } from "core-design-system";

export function Example() {
  return (
    <>
      <DXForm />
      <DXSelect />
    </>
  );
}

Works best with bundlers that fully support ESM tree-shaking.

Option B — Subpath imports (recommended for strict bundle control)

import DXForm from "core-design-system/DXForm";

export function Example() {
  return <DXForm />;
}

import DXSelect from "core-design-system/DXSelect";

export function Example() {
  return <DXSelect />;
}

✅ Only the imported entry (and minimal shared runtime) is included
❌ The rest of the design system is NOT bundled

Package Structure

This package ships multiple entry points:

core-design-system
├─ DXForm
├─ DXSelect
├─ DXButton
└─ ...
Each entry is independently consumable via the exports map.

**Bundle Size Philosophy

Core Design System avoids the “big UI library tax”.

Recommended strategy

Use subpath imports when bundle size matters

Use root imports when DX convenience is preferred and tree-shaking is reliable

Build Outputs

The published package includes:

ESM build → dist/esm/** (tree-shakeable)

CJS build → dist/cjs/** (Node / legacy)

Type declarations → dist/types/**

React and ReactDOM are marked as externals and are not bundled.

Development**
npm install
npm run build

Scripts
build             Builds ESM + CJS + types
clean             Removes dist
prepublishOnly    Runs build before publish


Adding a New Component

Recommended structure for each component:

src/DXButton/
├─ DXButton.tsx
└─ index.ts

Export strategy

src/DXButton/index.ts → subpath entry

src/index.ts → optional root export

package.json exports example

{
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts",
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs"
    },
    "./DXButton": {
      "types": "./dist/types/DXButton/index.d.ts",
      "import": "./dist/esm/DXButton/index.js",
      "require": "./dist/cjs/DXButton/index.cjs"
    }
  }
}


Roadmap

 Core primitives (Button, Input, Select, Form)

 Design tokens (colors, spacing, typography)

 Icon system

 Shared UI patterns

 Adapter layer (Ant Design / MUI)

License

MIT





