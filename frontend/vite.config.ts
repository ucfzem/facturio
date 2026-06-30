import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VERCEL ? '/' : '/facturio/'

export default defineConfig({
  plugins: [react()],
  base,
  server: { host: '0.0.0.0' },
  build: { outDir: 'dist', emptyOutDir: true },
})
