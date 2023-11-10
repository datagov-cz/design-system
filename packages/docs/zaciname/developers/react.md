---
title: Usage with React
---

```shell
npm install @gov-design-system-ce/react
```


In an application developed with the create-react-app script, you can import the necessary components directly
from `@gov-design-system-ce/react`, which is a React-specific wrapper designed for Gov Design System CE's Web
Components.

```javascript
import React, { useState } from "react";
import { GovButton } from "@gov-design-system-ce/react";

export function ReactExample() {
  const [clicks, setClicks] = useState(0);

  function handleEvent(ev) {
    ev.preventDefault()
    setClicks(clicks => clicks + 1)
  }

  return (
    <GovButton variant={'primary'} type={'solid'} gov-click={handleEvent}>
      Click me: {clicks}
    </GovButton>
  );

}
```

## Usage with Next.js

In an application created with Next.js, you need to re-import components a little differently.

Create a `design-system.ts` file and insert the following code.

```javascript
"use client"

export * from "@gov-design-system-ce/react";
```

Then import the system design components directly from the file.

```javascript
import { GovButton } from "./design-system";

export default function Home() {
  return (
    <GovButton variant={'primary'} type={'solid'}>
      This is button
    </GovButton>
  )
}
```

## Known issues

f you have dynamic content that is added or removed from the DOM, it is necessary to include a wrapper `<div>` around all
the children of the step:

```javascript
<GovContainer>
  <div>
    {someCondition && <GovCard />}
  </div>
</GovContainer>
```

More information on [StencilJS](https://stenciljs.com/docs/react) website.
