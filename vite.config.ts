import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Butterfly-App-React/',
  server: {
    proxy: {
      "/api": {
        target: "https://hogwarts-api.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
