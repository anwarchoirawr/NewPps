import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // base: mode === 'production' ? '/NewPps/' : '/', // Gunakan base untuk GitHub Pages, default untuk Vercel
}));
