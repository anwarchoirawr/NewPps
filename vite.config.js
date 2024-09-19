import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
  },
})


// NEWPSS/
// ├── dist/
// |    └── assets/
// |    └── index.html
// |    └── vite.svg
// ├── node_modules/
// ├── public/
// │   └── vite.svg
// └── server/
// ├── src/
// │   ├── App.jsx
// │   ├── components/
// │   │   ├── Button.jsx
// │   │   └── Header.jsx
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │   └── About.jsx
// │   ├── styles/
// │   │   └── global.css
// │   └── main.jsx
// ├── package.json
// ├── vite.config.js