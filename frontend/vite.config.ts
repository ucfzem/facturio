import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/facturio/',
  server: { host: '0.0.0.0' },
  build: { outDir: 'dist', emptyOutDir: true },
})
