<script setup lang="ts">
import Markdoc from '@markdoc/markdoc'
import html from './contents/doc.md?html'

// const html = Markdoc.renderers.html(content)
</script>

<template>
  <div v-html="html" />
</template>
