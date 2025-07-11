import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0と同じ効果
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost'
    }
  }
})