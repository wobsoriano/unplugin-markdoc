import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdoc from '../src/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), markdoc()],
})
