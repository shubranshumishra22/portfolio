// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './app/components'),
      '@routes': path.resolve(__dirname, './app/routes'),
      '@welcome': path.resolve(__dirname, './app/welcome'),
    },
  },
  server: {
    port: 3000,
    //open: true,
  },
});
