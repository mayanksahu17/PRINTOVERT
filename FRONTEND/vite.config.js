// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://3wrmxn2x-8000.inc1.devtunnels.ms', 
  },
  plugins: [react()],
}});
