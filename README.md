# vite-plugin-markdoc

[![Build Size](https://img.shields.io/bundlephobia/minzip/vite-plugin-markdoc?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=vite-plugin-markdoc)
[![Version](https://img.shields.io/npm/v/vite-plugin-markdoc?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/vite-plugin-markdoc)

A plugin that enables you to import markdown files on your Vite projects. It uses [stripe's](https://stripe.com/) [Markdoc](https://markdoc.io/) to parse and transform `.md` files.

## Installation

```bash
pnpm add vite-plugin-markdoc -D
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import markdoc from 'vite-plugin-markdoc'

export default defineConfig({
  ...
  plugins: [markdoc()]
});
```
