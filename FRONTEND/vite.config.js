import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/api/v1/users/login' : 'http://localhost:8000'
    }
  },
  plugins: [react()],
})
