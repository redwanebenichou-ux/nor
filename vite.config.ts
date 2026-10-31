import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'classic-script-for-file-protocol',
      // Runs after Vite injects the production script tag so dist/index.html
      // can also be opened directly from disk (file://).
      transformIndexHtml: {
        order: 'post',
        handler(html: string) {
          return html.replace(/<script([^>]*?)\s*type="module"([^>]*)>/g, '<script$1$2 defer>')
        },
      },
    },
  ],
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['<rootDir>/src/test/setup.ts'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Single classic bundle so dist/index.html also opens directly from disk (file://)
        format: 'iife',
        inlineDynamicImports: true,
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },
})
