# core-design-system

Tree-shakeable React + TypeScript design-system package with subpath entries.

## Install

```bash
npm install core-design-system
```

## Usage

Root barrel import (tree-shakeable for ESM consumers):

```ts
import { DXForm } from "core-design-system";
```

Subpath import (only DXForm is pulled in):

```ts
import DXForm from "core-design-system/DXForm";
```

## Tree-shaking concept

The package ships ESM builds under `dist/esm/**` with per-entry outputs. Bundlers can
eliminate unused exports from the root barrel when `import { DXForm }` is used, while
subpath imports ensure only that component is included.

## Consumer example

```ts
import DXForm from "core-design-system/DXForm";

export function App() {
  return (
    <DXForm title="Sign in">
      <input name="email" />
    </DXForm>
  );
}
```
