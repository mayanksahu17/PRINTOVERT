// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Make sure this path matches the backend API path
    },
  },
  plugins: [react()],
});
