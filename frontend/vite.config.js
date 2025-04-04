import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/personal-menu': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/api/spooncular': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
});
