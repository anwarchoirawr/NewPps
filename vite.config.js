import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NewPps/', // Ganti 'nama-repo' dengan nama repositorimu di GitHub
  plugins: [react()],
})
