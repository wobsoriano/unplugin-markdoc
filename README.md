# unplugin-markdoc

[Markdoc](https://markdoc.io/) plugin for Vite/Webpack projects.

## Install

```bash
npm install @markdoc/markdoc unplugin-markdoc
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import MarkdocPlugin from 'unplugin-markdoc/vite'

export default defineConfig({
  plugins: [
    MarkdocPlugin({ /* options */ }),
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import MarkdocPlugin from 'unplugin-markdoc/rollup'

export default {
  plugins: [
    MarkdocPlugin({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-markdoc/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-markdoc/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-markdoc/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import MarkdocPlugin from 'unplugin-markdoc/esbuild'

build({
  plugins: [MarkdocPlugin()],
})
```

<br></details>

## Usage

```md
---
title: What is Markdoc?
---

# {% $markdoc.frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}
```

Example with Vue

```vue
<script setup>
import Markdoc from '@markdoc/markdoc'
import content from './contents/doc.md'

const html = Markdoc.renderers.html(content)
</script>

<template>
  <div v-html="html" />
</template>
```

or to render a html directly...

```vue
<script setup>
import html from './contents/doc.md?html'
</script>

<template>
  <div v-html="html" />
</template>
```

## Configuration

The plugin accepts an optional [`Markdoc.transform`](https://markdoc.io/docs/syntax#config) config:

```ts
// vite.config.ts
import MarkdocPlugin from 'unplugin-markdoc/vite'

export default defineConfig({
  plugins: [MarkdocPlugin({
    nodes: {},
    tags: {},
  })]
})
```

## TypeScript Shim

```ts
declare module '*.md' {
  import type { RenderableTreeNode } from '@markdoc/markdoc'
  const Node: RenderableTreeNode
  export default Node
}

declare module '*.md?html' {
  const html: string
  export default html
}
```

Save as `markdoc.d.ts` for instance.

## License

MIT
