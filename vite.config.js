import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/projects/api': {
        target: 'https://fullstack-assignment-1-rms7.onrender.com',
        changeOrigin: true,
        secure: false
      },
      '/experiences/api': {
        target: 'https://fullstack-assignment-1-rms7.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
