/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssrBuildDir: 'dist/ssr',
      prerender: {
        routes: ['/', '/blog'],
        sitemap: { host: 'https://analogjs.org/' },
      },
    }),
    compression(),
  ],
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
