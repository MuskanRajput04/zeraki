import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Standalone build for opening straight off the disk (file://).
// Output is a classic IIFE, not an ES module, so Chrome runs it with no
// module/CORS restrictions when the page is double-clicked.
export default defineConfig({
  plugins: [react(), viteSingleFile({ useRecommendedBuildConfig: false })],
  base: './',
  build: {
    outDir: 'dist-standalone',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    modulePreload: false,
    target: 'es2019',
    rollupOptions: {
      output: { format: 'iife', inlineDynamicImports: true, entryFileNames: 'app.js' },
    },
  },
})
