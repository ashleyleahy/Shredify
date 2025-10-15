import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',             // ensure index.html is treated as the root
  build: {
    outDir: 'dist',      // where Vercel will serve from
  },
})
