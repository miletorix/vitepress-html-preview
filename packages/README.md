# vitepress-html-preview

A Vue component for embedding external HTML files via `iframe` in VitePress. It’s useful for showcasing interactive demos with full HTML, CSS, and JavaScript support.

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-html-preview) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-html-preview) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-html-preview)

<p align="center">
  <img src="https://github.com/miletorix/vitepress-html-preview/raw/main/assets/demo-1.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/vitepress-html-preview/](https://miletorix.github.io/vitepress-html-preview/)

## Installation

```sh [npm]
npm i @miletorix/vitepress-html-preview
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { HtmlPreview } from '@miletorix/vitepress-html-preview' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('HtmlPreview', HtmlPreview) // [!code ++]
  }
}
```

### Html Preview

```vue
<HtmlPreview src="path-to-.html-file" width="..." height="..." />
```

> - Default **width**: `100%`
> - Default **height**: `400px`

## Example

**Input:**

```vue
<HtmlPreview src="/demo/point-sketch.html" height="600px" />
```

**Output:**

![demo-2](https://github.com/miletorix/vitepress-html-preview/raw/main/assets/demo-2.png) 