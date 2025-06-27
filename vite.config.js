import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/D_Login/', // 👈 this is REQUIRED for GitHub Pages!
  plugins: [react()],
})
