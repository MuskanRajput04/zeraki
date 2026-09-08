import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Produces one self-contained HTML file in dist-single/ — used to publish the
// shareable presentation link for the client.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: { outDir: 'dist-single', assetsInlineLimit: 100000000, cssCodeSplit: false },
})
